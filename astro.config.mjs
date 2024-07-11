import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  
  site: 'https://mar7155.github.io/Portfolio',
  integrations: [sitemap()]
});
