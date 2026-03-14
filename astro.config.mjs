import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { readFileSync } from "fs";

import tailwindcss from "@tailwindcss/vite";

function loadSidebar(jsonPath, linkPrefix = "/docs") {
  const raw = JSON.parse(readFileSync(jsonPath, "utf-8"));
  function prefixLinks(items) {
    return items.map((item) => {
      if (item.link) {
        return { ...item, link: linkPrefix + item.link };
      }
      if (item.items) {
        return { ...item, items: prefixLinks(item.items) };
      }
      return item;
    });
  }
  return prefixLinks(raw);
}

export default defineConfig({
  site: "https://semos.sh",
  output: "static",
  redirects: {
    "/attyx": "https://attyx.sh",
    "/attyx/privacy": "https://attyx.sh/privacy",
    "/attyx/refund": "https://attyx.sh/refund",
    "/docs/attyx": "https://attyx.sh/docs",
    "/docs/attyx/configuration": "https://attyx.sh/docs/configuration",
    "/docs/attyx/font": "https://attyx.sh/docs/font",
    "/docs/attyx/cursor": "https://attyx.sh/docs/cursor",
    "/docs/attyx/window": "https://attyx.sh/docs/window",
    "/docs/attyx/shell": "https://attyx.sh/docs/shell",
    "/docs/attyx/scrollback": "https://attyx.sh/docs/scrollback",
    "/docs/attyx/themes": "https://attyx.sh/docs/themes",
    "/docs/attyx/keybindings": "https://attyx.sh/docs/keybindings",
    "/docs/attyx/custom-sequences": "https://attyx.sh/docs/custom-sequences",
    "/docs/attyx/tabs-and-splits": "https://attyx.sh/docs/tabs-and-splits",
    "/docs/attyx/popups": "https://attyx.sh/docs/popups",
    "/docs/attyx/status-bar": "https://attyx.sh/docs/status-bar",
    "/docs/attyx/sessions": "https://attyx.sh/docs/sessions",
    "/docs/attyx/visual-mode": "https://attyx.sh/docs/visual-mode",
    "/docs/attyx/command-palette": "https://attyx.sh/docs/command-palette",
    "/docs/attyx/cli": "https://attyx.sh/docs/cli",
    "/docs/attyx/integration": "https://attyx.sh/docs/integration",
    "/docs/attyx/claude-code": "https://attyx.sh/docs/claude-code",
    "/docs/attyx/vt-compatibility": "https://attyx.sh/docs/vt-compatibility",
    "/docs/attyx/building": "https://attyx.sh/docs/building",
    "/docs/attyx/architecture": "https://attyx.sh/docs/architecture",
    "/releases/attyx": "https://attyx.sh/releases",
  },

  integrations: [
      starlight({
          title: "Semos",
          components: {
              Head: './src/components/Head.astro',
              Search: './src/components/Search.astro',
          },
          customCss: ["./src/styles/docs.css"],
          head: [
              {
                  tag: "script",
                  content: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('phc_MJNp4GGj6gDl73vKCIVF0J6LdywsOyZMRrhU1EJN2cZ',{api_host:'https://eu.i.posthog.com',defaults:'2026-01-30'})`,
              },
              {
                  tag: "link",
                  attrs: {
                      rel: "preconnect",
                      href: "https://fonts.googleapis.com",
                  },
              },
              {
                  tag: "link",
                  attrs: {
                      rel: "preconnect",
                      href: "https://fonts.gstatic.com",
                      crossorigin: true,
                  },
              },
              {
                  tag: "link",
                  attrs: {
                      rel: "preload",
                      as: "style",
                      href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
                  },
              },
              {
                  tag: "script",
                  content: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap';document.head.appendChild(l)})()`,
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
                          items: loadSidebar("./src/content/docs/docs/glyph/api/sidebar.json"),
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