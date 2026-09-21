import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain produksi ditetapkan di sini — satu-satunya sumber untuk canonical, og:url,
// URL imej JSON-LD, hreflang dan sitemap (semua dibaca melalui Astro.site).
const SITE_URL = 'https://tanjungemasmuar.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
