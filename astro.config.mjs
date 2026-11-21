// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_CONFIG } from './src/data/site.shared.js';

export default defineConfig({
  site: SITE_CONFIG.url,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
