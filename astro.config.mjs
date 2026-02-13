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
                    autogenerate: { directory: "glyph" },
                },
                {
                    label: "Aion",
                    collapsed: true,
                    autogenerate: { directory: "aion" },
                },
                {
                    label: "Epist",
                    collapsed: true,
                    autogenerate: { directory: "epist" },
                },
            ],
        }),
    ],
});
