import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://semos.sh",
  output: "static",

  integrations: [
      starlight({
          title: "Semos",
          customCss: ["./src/styles/docs.css"],
          head: [
              {
                  tag: "script",
                  content: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('phc_MJNp4GGj6gDl73vKCIVF0J6LdywsOyZMRrhU1EJN2cZ',{api_host:'https://eu.i.posthog.com',defaults:'2026-01-30'})`,
              },
          ],
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

  vite: {
    plugins: [tailwindcss()],
  },
});