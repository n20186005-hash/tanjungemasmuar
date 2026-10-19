import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain produksi ditetapkan di sini — satu-satunya sumber untuk canonical, og:url,
// URL imej JSON-LD, hreflang dan sitemap (semua dibaca melalui Astro.site).
const SITE_URL = 'https://tanjungemasmuar.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap({
    filter: (page) => !/\/404(?:\.html|\/)?$/.test(page),
    serialize(item) {
      const slug=new URL(item.url).pathname.replace(/^\/(en|zh)(?=\/)/, '');
      item.links=[{lang:'ms-MY',url:SITE_URL+slug},{lang:'en',url:SITE_URL+'/en'+slug},{lang:'zh-Hans',url:SITE_URL+'/zh'+slug},{lang:'x-default',url:SITE_URL+slug}];
      return item;
    }
  })],
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
