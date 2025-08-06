import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://mar7155.github.io/',
  integrations: [sitemap(), tailwind()],
  adapter: vercel({
    webAnalytics: true,
  })
});