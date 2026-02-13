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
                { label: "Introduction", link: "/docs/" },
                {
                    label: "Glyph",
                    collapsed: true,
                    items: [
                        { label: "Overview", link: "/docs/glyph/" },
                        { label: "Getting Started", link: "/docs/glyph/getting-started/" },
                        {
                            label: "API Reference",
                            collapsed: true,
                            autogenerate: { directory: "docs/glyph/api" },
                        },
                    ],
                },
                {
                    label: "Aion",
                    collapsed: true,
                    items: [
                        { label: "Overview", link: "/docs/aion/" },
                        { label: "Getting Started", link: "/docs/aion/getting-started/" },
                    ],
                },
                {
                    label: "Epist",
                    collapsed: true,
                    items: [
                        { label: "Overview", link: "/docs/epist/" },
                        { label: "Getting Started", link: "/docs/epist/getting-started/" },
                    ],
                },
            ],
        }),
    ],
});
