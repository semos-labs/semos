import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://semos.sh",
  output: "static",
    integrations: [
        starlight({
            title: "Semos",
            customCss: ["./src/styles/docs.css"],
            logo: {
                src: "./public/logos/Sema.png",
            },
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/semos-labs",
                },
            ],
            sidebar: [
                {
                    label: "Getting Started",
                    items: [
                        { label: "Introduction", slug: "introduction" },
                    ],
                },
                {
                    label: "Glyph",
                    items: [
                        { label: "Overview", slug: "glyph/overview" },
                        { label: "Getting Started", slug: "glyph/getting-started" },
                    ],
                },
                {
                    label: "Aion",
                    items: [
                        { label: "Overview", slug: "aion/overview" },
                        { label: "Getting Started", slug: "aion/getting-started" },
                    ],
                },
                {
                    label: "Epist",
                    items: [
                        { label: "Overview", slug: "epist/overview" },
                        { label: "Getting Started", slug: "epist/getting-started" },
                    ],
                },
            ],
        }),
    ],
});
