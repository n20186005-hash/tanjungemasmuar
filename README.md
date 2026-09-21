# Tanjung Emas Muar — Astro attraction guide

Laman panduan pelancongan berbilang bahasa untuk Tanjung Emas Muar, dibina dengan Astro, Tailwind CSS dan TypeScript serta disediakan untuk Cloudflare Workers Static Assets.

## Struktur laman & bahasa

Tiga bahasa, setiap halaman ada padanan penuh dengan `hreflang` dan `x-default`:

| Bahasa | Laluan | Contoh |
| --- | --- | --- |
| Bahasa Melayu (default) | `/` | `/jeti-tanjung-emas/` |
| English | `/en/` | `/en/jeti-tanjung-emas/` |
| 中文 | `/zh/` | `/zh/jeti-tanjung-emas/` |

Halaman:

- `/` — panduan utama (hero, rancang lawatan, pengangkutan, peta, makanan, sekitar, topik, FAQ)
- `/jeti-tanjung-emas/` — jeti & pelayaran Sungai Muar
- `/dataran-tanjung-emas/` — dataran, fasiliti & aktiviti keluarga
- `/makan-muar/` — makanan Muar & asam pedas tepi sungai
- `/tarikan-muar/` — tarikan Muar & aktiviti malam

Fail yang mengawal kandungan:

- `src/data/market.ts` — fakta kongsi: alamat, koordinat, waktu, penilaian, URL rasmi, imej
- `src/content/home.ts` — salinan laman utama untuk ms/en/zh
- `src/content/topics.ts` — salinan halaman topik untuk ms/en/zh
- `src/i18n/locales.ts` & `src/i18n/ui.ts` — metadata bahasa, pemetaan laluan, string antara muka
- `src/lib/seo.ts` — pembina canonical / hreflang / JSON-LD (`TouristAttraction` + `Park`, `FAQPage`, `BreadcrumbList`)
- `src/layouts/BaseLayout.astro` — `<head>` SEO, GA4, header, footer

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

Domain produksi ditetapkan dalam `astro.config.mjs` pada `SITE_URL` (`https://tanjungemasmuar.com`).

- Canonical, `og:url`, `og:image`, `hreflang` (termasuk `x-default`) dan sitemap semuanya dibaca daripada `Astro.site`.
- Sitemap dihasilkan hanya oleh `@astrojs/sitemap`; tiada senarai `<url>` atau `lastmod` tulisan tangan.
- `public/robots.txt` menunjuk ke `https://tanjungemasmuar.com/sitemap-index.xml`.
- `public/_headers` menghantar HSTS (`max-age=31536000; includeSubDomains; preload`) dan header keselamatan lain; tukaran HTTP → HTTPS 301 dibuat di Cloudflare (Always Use HTTPS).
- `public/_redirects` menambah sandaran 301 di peringkat aset: `http://` dan `www` → `https://tanjungemasmuar.com`. Ini memastikan URL bukan kanonikal yang pernah terindeks (misalnya `http://tanjungemasmuar.com/`) tidak bersaing dengan kanonikal.

## Search Console — semakan berkala

Selepas setiap deploy yang menambah halaman:

1. Buka Google Search Console → **Sitemaps** dan pastikan `sitemap-index.xml` berstatus *Success* (hantar semula jika muka surat baharu belum muncul).
2. Guna **URL Inspection → Request Indexing** untuk halaman baharu (5 halaman × 3 bahasa = 15 URL).
3. Bandingkan *Pages* dengan senarai halaman di atas; jika hanya `/` yang muncul, semak pautan dalaman di `#topik` dan footer serta status sitemap.
4. CTR dinilai melalui *Search results*; tajuk dan meta setiap halaman ditulis di `src/content/home.ts` dan `src/content/topics.ts` (ubah di situ, bukan di komponen).

## Deploy ke Cloudflare Workers

Projek ialah static site; adapter SSR tidak diperlukan. `wrangler.jsonc` menggunakan Workers Static Assets dan menerbitkan direktori `dist`.

```bash
pnpm deploy
```

## Foto dan identiti

Foto Tanjung Emas disimpan secara lokal di `public/images/`. Foto berasal daripada Slleong di Wikimedia Commons dan dikeluarkan di bawah CC0. Logo dan favicon menggunakan motif yang sama: matahari emas di atas aliran Sungai Muar.
