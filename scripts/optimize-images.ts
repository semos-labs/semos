#!/usr/bin/env bun
/**
 * Optimize blog cover images.
 *
 * - Reads all blog post frontmatter for `cover` fields
 * - Resizes to a max width (1600px) to keep file sizes sane
 * - Converts to WebP with quality optimization
 * - Updates frontmatter references if the extension changed
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

// ── Manifest ─────────────────────────────────────────────────

type Manifest = Record<string, string>; // relative path → content hash

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

// ── Blog post helpers ────────────────────────────────────────

interface BlogPost {
  filePath: string;
  slug: string;
  cover: string; // e.g. "/images/showcase.webp"
}

function collectBlogCovers(): BlogPost[] {
  const { readdirSync } = require("fs");
  const files: string[] = readdirSync(BLOG_DIR).filter(
    (f: string) => f.endsWith(".md") || f.endsWith(".mdx"),
  );

  const posts: BlogPost[] = [];

  for (const file of files) {
    const filePath = join(BLOG_DIR, file);
    const raw = readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    if (!data.cover) continue;

    posts.push({
      filePath,
      slug: file.replace(/\.mdx?$/, ""),
      cover: data.cover as string,
    });
  }

  return posts;
}

// ── Main ─────────────────────────────────────────────────────

async function main() {
  console.log(`\n🖼  Optimizing blog cover images${force ? " (force)" : ""}…\n`);

  mkdirSync(IMAGES_DIR, { recursive: true });

  const oldManifest = loadManifest();
  const newManifest: Manifest = {};

  let optimized = 0;
  let skipped = 0;
  let converted = 0;

  const posts = collectBlogCovers();

  // De-duplicate covers (multiple posts can share the same image)
  const seen = new Set<string>();

  for (const post of posts) {
    const coverRelative = post.cover.replace(/^\//, ""); // "images/showcase.webp"
    const sourcePath = join(PUBLIC_DIR, coverRelative);

    if (seen.has(coverRelative)) continue;
    seen.add(coverRelative);

    if (!existsSync(sourcePath)) {
      console.log(`  ⚠ ${coverRelative} — file not found, skipping`);
      continue;
    }

    // Determine output path (.webp extension)
    const ext = extname(sourcePath).toLowerCase();
    const base = basename(sourcePath, ext);
    const dir = join(PUBLIC_DIR, "images");
    const outPath = join(dir, `${base}.webp`);
    const outRelative = `images/${base}.webp`;

    // Hash the SOURCE file to detect changes
    const hash = hashFile(sourcePath);
    newManifest[outRelative] = hash;

    // Skip if already optimized and unchanged
    if (!force && existsSync(outPath) && oldManifest[outRelative] === hash) {
      console.log(`  · /${outRelative} (unchanged)`);
      skipped++;
      continue;
    }

    // Optimize: resize + convert to webp
    const img = sharp(sourcePath);
    const meta = await img.metadata();

    let pipeline = img;
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, undefined, {
        withoutEnlargement: true,
      });
    }

    const buf = await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toBuffer();

    await Bun.write(outPath, buf);

    const srcSize = statSync(sourcePath).size;
    const pct = ((1 - buf.length / srcSize) * 100).toFixed(0);

    console.log(
      `  ✓ /${outRelative} (${fmtSize(srcSize)} → ${fmtSize(buf.length)}, ${pct}% smaller)`,
    );
    optimized++;

    // If source was not .webp, delete the original and update frontmatter
    if (ext !== ".webp") {
      unlinkSync(sourcePath);
      console.log(`    ↳ removed original ${basename(sourcePath)}`);

      // Update frontmatter in all posts referencing this cover
      const newCover = `/images/${base}.webp`;
      for (const p of posts) {
        if (p.cover === post.cover) {
          updateFrontmatterCover(p.filePath, post.cover, newCover);
          p.cover = newCover;
          converted++;
        }
      }
    }
  }

  saveManifest(newManifest);

  const parts = [`${optimized} optimized`, `${skipped} skipped`];
  if (converted > 0) parts.push(`${converted} frontmatter refs updated`);
  console.log(`\n✅ Done — ${parts.join(", ")}.\n`);
}

// ── Frontmatter update ───────────────────────────────────────

function updateFrontmatterCover(
  filePath: string,
  oldCover: string,
  newCover: string,
) {
  const raw = readFileSync(filePath, "utf-8");
  // Replace the cover value in frontmatter without re-serialising the
  // whole file (preserves formatting, comments, etc.)
  const updated = raw.replace(
    new RegExp(`(cover:\\s*["']?)${escapeRegex(oldCover)}(["']?)`),
    `$1${newCover}$2`,
  );
  if (updated !== raw) {
    writeFileSync(filePath, updated);
    console.log(`    ↳ updated cover in ${basename(filePath)}`);
  }
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function fmtSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  return `${(bytes / 1024).toFixed(0)}kb`;
}

// ── Run ──────────────────────────────────────────────────────

main().catch((err) => {
  console.error("Failed to optimize images:", err);
  process.exit(1);
});
