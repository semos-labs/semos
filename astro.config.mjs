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
                { label: "Introduction", link: "/introduction/" },
                {
                    label: "Glyph",
                    collapsed: true,
                    items: [
                        { label: "Overview", link: "/glyph/" },
                        { label: "Getting Started", link: "/glyph/getting-started/" },
                        {
                            label: "API Reference",
                            collapsed: true,
                            autogenerate: { directory: "glyph/api" },
                        },
                    ],
                },
                {
                    label: "Aion",
                    collapsed: true,
                    items: [
                        { label: "Overview", link: "/aion/" },
                        { label: "Getting Started", link: "/aion/getting-started/" },
                    ],
                },
                {
                    label: "Epist",
                    collapsed: true,
                    items: [
                        { label: "Overview", link: "/epist/" },
                        { label: "Getting Started", link: "/epist/getting-started/" },
                    ],
                },
            ],
        }),
    ],
});
