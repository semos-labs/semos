import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsLoader } from "@astrojs/starlight/loaders";
import { glob } from "astro/loaders";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  blog: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional().default(false),
    }),
  }),
};
