import satori from "satori";
import sharp from "sharp";
import { readFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join, resolve } from "path";
import matter from "gray-matter";

const ROOT = resolve(import.meta.dirname, "..");
const BLOG_DIR = join(ROOT, "src/content/blog");
const PUBLIC_DIR = join(ROOT, "public");
const OUT_DIR = join(PUBLIC_DIR, "og");

const WIDTH = 1200;
const HEIGHT = 630;

// Load fonts
const fontRegular = readFileSync(
  join(ROOT, "scripts/fonts/SpaceMono-Regular.ttf")
);
const fontBold = readFileSync(
  join(ROOT, "scripts/fonts/SpaceMono-Bold.ttf")
);
const fontInter = readFileSync(
  join(ROOT, "scripts/fonts/Inter-Regular.ttf")
);

// Load Semos logo as base64
const logoPath = join(PUBLIC_DIR, "logos/Sema.png");
const logoBase64 = `data:image/png;base64,${readFileSync(logoPath).toString("base64")}`;

async function loadCoverBase64(coverPath: string): Promise<string | null> {
  // coverPath is like "/images/epist.jpg"
  const absPath = join(PUBLIC_DIR, coverPath.replace(/^\//, ""));
  if (!existsSync(absPath)) return null;

  // Resize cover to fill OG dimensions and convert to PNG buffer
  const buf = await sharp(absPath)
    .resize(WIDTH, HEIGHT, { fit: "cover" })
    .png()
    .toBuffer();

  return `data:image/png;base64,${buf.toString("base64")}`;
}

function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1) + "…";
}

function buildOgMarkup(opts: {
  title: string;
  description: string;
  coverBase64: string | null;
  tags?: string[];
}) {
  const { title, description, coverBase64, tags } = opts;

  return {
    type: "div" as const,
    props: {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        position: "relative" as const,
        backgroundColor: "#0a0a0a",
        fontFamily: "SpaceMono",
        overflow: "hidden",
      },
      children: [
        // Background cover image (dimmed)
        ...(coverBase64
          ? [
              {
                type: "img" as const,
                props: {
                  src: coverBase64,
                  width: WIDTH,
                  height: HEIGHT,
                  style: {
                    position: "absolute" as const,
                    top: 0,
                    left: 0,
                    width: WIDTH,
                    height: HEIGHT,
                    objectFit: "cover" as const,
                    opacity: 0.55,
                  },
                },
              },
            ]
          : []),
        // Gradient overlay
        {
          type: "div" as const,
          props: {
            style: {
              position: "absolute" as const,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: coverBase64
                ? "linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.92) 75%)"
                : "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)",
              display: "flex",
            },
          },
        },
        // Subtle grid pattern (decorative)
        {
          type: "div" as const,
          props: {
            style: {
              position: "absolute" as const,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.04,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              display: "flex",
            },
          },
        },
        // Content
        {
          type: "div" as const,
          props: {
            style: {
              position: "relative" as const,
              display: "flex",
              flexDirection: "column" as const,
              justifyContent: "flex-end",
              width: "100%",
              height: "100%",
              padding: "48px 64px",
              gap: 24,
            },
            children: [
              // Top: logo + semos
              {
                type: "div" as const,
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  },
                  children: [
                    {
                      type: "img" as const,
                      props: {
                        src: logoBase64,
                        width: 40,
                        height: 40,
                        style: { borderRadius: 8 },
                      },
                    },
                    {
                      type: "span" as const,
                      props: {
                        style: {
                          fontSize: 22,
                          color: "#d4d4d4",
                          fontFamily: "SpaceMono",
                          letterSpacing: "0.02em",
                        },
                        children: "semos",
                      },
                    },
                  ],
                },
              },
              // Middle: title + description
              {
                type: "div" as const,
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 16,
                    maxWidth: 960,
                  },
                  children: [
                    {
                      type: "div" as const,
                      props: {
                        style: {
                          fontSize: 48,
                          fontWeight: 700,
                          fontFamily: "SpaceMonoBold",
                          color: "#ffffff",
                          lineHeight: 1.2,
                          letterSpacing: "-0.02em",
                        },
                        children: truncate(title, 80),
                      },
                    },
                    {
                      type: "div" as const,
                      props: {
                        style: {
                          fontSize: 20,
                          color: "#9ca3af",
                          lineHeight: 1.6,
                          fontFamily: "Inter",
                        },
                        children: truncate(description, 140),
                      },
                    },
                  ],
                },
              },
              // Bottom: tags
              {
                type: "div" as const,
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  },
                  children: tags?.length
                    ? tags.slice(0, 5).map((tag) => ({
                        type: "div" as const,
                        props: {
                          style: {
                            fontSize: 14,
                            color: "#6b7280",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            padding: "4px 14px",
                            borderRadius: 6,
                            border: "1px solid rgba(255,255,255,0.08)",
                            fontFamily: "SpaceMono",
                          },
                          children: tag,
                        },
                      }))
                    : [
                        {
                          type: "div" as const,
                          props: {
                            style: {
                              fontSize: 14,
                              color: "#4b5563",
                              fontFamily: "SpaceMono",
                            },
                            children: "semos.sh/blog",
                          },
                        },
                      ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function generateOgImage(
  slug: string,
  data: {
    title: string;
    description: string;
    cover?: string;
    tags?: string[];
  }
) {
  const coverBase64 = data.cover
    ? await loadCoverBase64(data.cover)
    : null;

  const markup = buildOgMarkup({
    title: data.title,
    description: data.description,
    coverBase64,
    tags: data.tags,
  });

  const svg = await satori(markup, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      {
        name: "SpaceMono",
        data: fontRegular,
        weight: 400,
        style: "normal",
      },
      {
        name: "SpaceMonoBold",
        data: fontBold,
        weight: 700,
        style: "normal",
      },
      {
        name: "Inter",
        data: fontInter,
        weight: 400,
        style: "normal",
      },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();

  const outPath = join(OUT_DIR, `${slug}.png`);
  await Bun.write(outPath, png);
  console.log(`  ✓ /og/${slug}.png (${(png.length / 1024).toFixed(0)}kb)`);
}

async function main() {
  console.log("\n🖼  Generating OG images…\n");

  mkdirSync(OUT_DIR, { recursive: true });

  // Read all blog posts
  const files = readdirSync(BLOG_DIR).filter(
    (f) => f.endsWith(".md") || f.endsWith(".mdx")
  );

  for (const file of files) {
    const raw = readFileSync(join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);

    if (data.draft) continue;

    const slug = file.replace(/\.mdx?$/, "");

    await generateOgImage(slug, {
      title: data.title,
      description: data.description,
      cover: data.cover,
      tags: data.tags,
    });
  }

  // Generate default OG image for the blog index
  await generateOgImage("blog", {
    title: "Semos Blog",
    description:
      "Thoughts on terminal UIs, developer tools, and building open-source software.",
    tags: ["terminal", "react", "open source"],
  });

  console.log("\n✅ Done.\n");
}

main().catch((err) => {
  console.error("Failed to generate OG images:", err);
  process.exit(1);
});
