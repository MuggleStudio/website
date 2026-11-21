import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../data/site.shared.js';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_CONFIG.url}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
