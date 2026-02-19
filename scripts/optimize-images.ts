#!/usr/bin/env bun
/**
 * Optimize blog images.
 *
 * - Scans all blog posts for image references:
 *   • `cover` field in frontmatter
 *   • Inline markdown images: ![alt](/images/...)
 *   • HTML img tags: <img src="/images/..." />
 * - Renames images to match the blog post slug:
 *   • Single image:    glyph-perf.webp
 *   • Multiple images: glyph-perf.webp, glyph-perf-2.webp, glyph-perf-3.webp
 * - Resizes to a max width (1600px) to keep file sizes sane
 * - Converts to WebP with quality optimization
 * - Updates all references in the post
 * - Skips images that haven't changed since last run (manifest-based)
 *
 * Usage:
 *   bun scripts/optimize-images.ts          # Process only changed images
 *   bun scripts/optimize-images.ts --force  # Re-process everything
 */

import sharp from "sharp";
import { createHash } from "crypto";
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
  unlinkSync,
  statSync,
} from "fs";
import { join, resolve, extname, basename } from "path";
import matter from "gray-matter";

const ROOT = resolve(import.meta.dirname, "..");
const BLOG_DIR = join(ROOT, "src/content/blog");
const PUBLIC_DIR = join(ROOT, "public");
const IMAGES_DIR = join(PUBLIC_DIR, "images");
const MANIFEST_PATH = join(IMAGES_DIR, ".optimize-manifest.json");

const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;

const force = process.argv.includes("--force");

// Image extensions we handle
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".tiff"]);

// ── Manifest ─────────────────────────────────────────────────

type Manifest = Record<string, string>; // output relative path → source content hash

function loadManifest(): Manifest {
  if (!existsSync(MANIFEST_PATH)) return {};
  try {
    return JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));
  } catch {
    return {};
  }
}

function saveManifest(manifest: Manifest) {
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
}

function hashFile(path: string): string {
  const buf = readFileSync(path);
  return createHash("sha256").update(buf).digest("hex").slice(0, 16);
}

// ── Blog post scanning ───────────────────────────────────────

interface ImageRef {
  /** Original path as written in the post, e.g. "/images/showcase.webp" */
  originalPath: string;
  /** Whether this is the cover image */
  isCover: boolean;
}

interface BlogFile {
  filePath: string;
  slug: string;
  /** Ordered image refs found in this post (cover first, then inline in order) */
  images: ImageRef[];
}

function scanBlogPosts(): BlogFile[] {
  const files = readdirSync(BLOG_DIR).filter(
    (f) => f.endsWith(".md") || f.endsWith(".mdx"),
  );

  const posts: BlogFile[] = [];

  for (const file of files) {
    const filePath = join(BLOG_DIR, file);
    const raw = readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const images: ImageRef[] = [];
    const seen = new Set<string>();

    const normalize = (p: string) => (p.startsWith("/") ? p : `/${p}`);

    // 1. Cover from frontmatter (always first)
    if (data.cover && typeof data.cover === "string") {
      const p = normalize(data.cover);
      images.push({ originalPath: p, isCover: true });
      seen.add(p);
    }

    // 2. Markdown images: ![alt](/images/something.png)
    const mdImageRe = /!\[[^\]]*\]\((\/?images\/[^)]+)\)/g;
    let m;
    while ((m = mdImageRe.exec(content)) !== null) {
      const p = normalize(m[1]!);
      if (!seen.has(p)) {
        images.push({ originalPath: p, isCover: false });
        seen.add(p);
      }
    }

    // 3. HTML img tags: <img src="/images/something.png" />
    const htmlImageRe = /<img[^>]+src=["'](\/?images\/[^"']+)["'][^>]*>/g;
    while ((m = htmlImageRe.exec(content)) !== null) {
      const p = normalize(m[1]!);
      if (!seen.has(p)) {
        images.push({ originalPath: p, isCover: false });
        seen.add(p);
      }
    }

    if (images.length > 0) {
      posts.push({
        filePath,
        slug: file.replace(/\.mdx?$/, ""),
        images,
      });
    }
  }

  return posts;
}

// ── Helpers ──────────────────────────────────────────────────

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function fmtSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  return `${(bytes / 1024).toFixed(0)}kb`;
}

/** Generate the output filename for the Nth image of a post. */
function outputName(slug: string, index: number, total: number): string {
  if (total === 1) return `${slug}.webp`;
  // First image has no suffix, rest are -2, -3, ...
  return index === 0 ? `${slug}.webp` : `${slug}-${index + 1}.webp`;
}

// ── Main ─────────────────────────────────────────────────────

async function main() {
  console.log(`\n🖼  Optimizing blog images${force ? " (force)" : ""}…\n`);

  mkdirSync(IMAGES_DIR, { recursive: true });

  const oldManifest = loadManifest();
  const newManifest: Manifest = {};

  let optimized = 0;
  let skipped = 0;
  let refsUpdated = 0;

  const posts = scanBlogPosts();

  // Track source files to delete after all posts are processed.
  // A source might be shared across posts — only delete once everyone's done.
  const sourcesToDelete = new Set<string>();
  const sourcesStillNeeded = new Map<string, number>(); // sourcePath → remaining ref count

  // Count how many times each source is referenced
  for (const post of posts) {
    for (const img of post.images) {
      const sourcePath = join(PUBLIC_DIR, img.originalPath.replace(/^\//, ""));
      sourcesStillNeeded.set(
        sourcePath,
        (sourcesStillNeeded.get(sourcePath) ?? 0) + 1,
      );
    }
  }

  for (const post of posts) {
    const { slug, images } = post;

    for (let i = 0; i < images.length; i++) {
      const img = images[i]!;
      const relative = img.originalPath.replace(/^\//, "");
      const sourcePath = join(PUBLIC_DIR, relative);

      if (!existsSync(sourcePath)) {
        console.log(`  ⚠ ${relative} — file not found, skipping`);
        continue;
      }

      const ext = extname(sourcePath).toLowerCase();
      if (!IMAGE_EXTS.has(ext)) continue;

      // Compute output name based on post slug + index
      const outName = outputName(slug, i, images.length);
      const outPath = join(IMAGES_DIR, outName);
      const outRelative = `images/${outName}`;
      const newImagePath = `/images/${outName}`;

      // Hash source file
      const hash = hashFile(sourcePath);
      newManifest[outRelative] = hash;

      // Skip if already optimized and unchanged
      if (!force && existsSync(outPath) && oldManifest[outRelative] === hash) {
        console.log(`  · /${outRelative} (unchanged)`);
        skipped++;

        // Still need to make sure the reference in the post is correct
        // (might already point to the right name from a previous run)
        if (img.originalPath !== newImagePath) {
          updatePostReferences(post.filePath, img.originalPath, newImagePath);
          refsUpdated++;
        }

        decrementSource(sourcesStillNeeded, sourcesToDelete, sourcePath, ext);
        continue;
      }

      // Optimize: resize + convert to webp
      const pipeline = sharp(sourcePath);
      const meta = await pipeline.metadata();

      let img2 = sharp(sourcePath);
      if (meta.width && meta.width > MAX_WIDTH) {
        img2 = img2.resize(MAX_WIDTH, undefined, { withoutEnlargement: true });
      }

      const buffer = await img2
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toBuffer();

      await Bun.write(outPath, buffer);

      const srcSize = statSync(sourcePath).size;
      const pct = ((1 - buffer.length / srcSize) * 100).toFixed(0);
      const renamed = basename(sourcePath, ext) !== outName.replace(".webp", "");

      console.log(
        `  ✓ /${outRelative}${renamed ? ` ← ${basename(sourcePath)}` : ""} (${fmtSize(srcSize)} → ${fmtSize(buffer.length)}, ${pct}% smaller)`,
      );
      optimized++;

      // Update references in the post
      if (img.originalPath !== newImagePath) {
        updatePostReferences(post.filePath, img.originalPath, newImagePath);
        console.log(`    ↳ updated refs in ${basename(post.filePath)}`);
        refsUpdated++;
      }

      // Track source for deletion if it's not the output file
      decrementSource(sourcesStillNeeded, sourcesToDelete, sourcePath, ext);
    }
  }

  // Delete original source files that have been fully processed
  for (const sourcePath of sourcesToDelete) {
    if (existsSync(sourcePath)) {
      unlinkSync(sourcePath);
      console.log(`  🗑 removed original ${basename(sourcePath)}`);
    }
  }

  saveManifest(newManifest);

  const parts = [`${optimized} optimized`, `${skipped} skipped`];
  if (refsUpdated > 0) parts.push(`${refsUpdated} refs updated`);
  console.log(`\n✅ Done — ${parts.join(", ")}.\n`);
}

function decrementSource(
  needed: Map<string, number>,
  toDelete: Set<string>,
  sourcePath: string,
  ext: string,
): void {
  const remaining = (needed.get(sourcePath) ?? 1) - 1;
  needed.set(sourcePath, remaining);

  // Mark for deletion if: all refs processed AND source is not already .webp
  // with the correct name (i.e. it was renamed or converted)
  if (remaining <= 0 && ext !== ".webp") {
    toDelete.add(sourcePath);
  }
}

function updatePostReferences(
  filePath: string,
  oldPath: string,
  newPath: string,
): void {
  const raw = readFileSync(filePath, "utf-8");
  const escaped = escapeRegex(oldPath);
  const updated = raw.replace(new RegExp(escaped, "g"), newPath);
  if (updated !== raw) {
    writeFileSync(filePath, updated);
  }
}

main().catch((err) => {
  console.error("Failed to optimize images:", err);
  process.exit(1);
});
