# Tanjung Emas Muar — Astro attraction guide

Laman satu halaman berbahasa Melayu untuk Tanjung Emas Muar, dibina dengan Astro, Tailwind CSS dan TypeScript serta disediakan untuk Cloudflare Workers Static Assets.

## Runtime yang dikunci

- Node.js: 24.19.0 (`.node-version` + `engines`)
- pnpm: 9.15.9 (`packageManager` + `engines`)
- Astro: 7.2.1
- Tailwind CSS: 4.3.3
- TypeScript: 6.0.3
- @astrojs/check: 0.9.10 (peer TypeScript `^5.0.0 || ^6.0.0`)
- Wrangler: 4.120.1

Semua dependency dalam `package.json` menggunakan versi tepat, bukan range terapung.

## Pasang, semak dan bina

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Domain / canonical / sitemap

Satu-satunya konfigurasi domain projek berada dalam `astro.config.mjs` pada `SITE_URL`.

- Biarkan `SITE_URL` kosong sebelum domain ditentukan: build kekal berjaya, canonical / `og:url` / URL imej JSON-LD tidak dikeluarkan, dan integrasi sitemap tidak diaktifkan.
- Selepas domain produksi tersedia, isi `SITE_URL` sahaja dan bina semula. Semua URL SEO menggunakan `Astro.site` yang datang daripada konfigurasi ini.
- Sitemap dihasilkan hanya oleh `@astrojs/sitemap`; tiada senarai `<url>` atau `lastmod` tulisan tangan.

## Deploy ke Cloudflare Workers

Projek ialah static site; adapter SSR tidak diperlukan. `wrangler.jsonc` menggunakan Workers Static Assets dan menerbitkan direktori `dist`.

```bash
pnpm deploy
```

## Foto dan identiti

Foto Tanjung Emas disimpan secara lokal di `public/images/`. Foto berasal daripada Slleong di Wikimedia Commons dan dikeluarkan di bawah CC0. Logo dan favicon menggunakan motif yang sama: matahari emas di atas aliran Sungai Muar.
