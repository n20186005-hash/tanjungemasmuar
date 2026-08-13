import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Tetapkan domain produksi di SATU tempat ini sahaja apabila domain sudah sedia.
// Biarkan kosong semasa pembangunan: build, meta SEO dan sitemap akan turun taraf dengan selamat.
const SITE_URL = '';

export default defineConfig({
  site: SITE_URL || undefined,
  integrations: SITE_URL ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
