import { links, place } from '../data/market';
import { localeMeta, locales, type Locale } from '../i18n/locales';

/** Format tajuk lalai laman: "Nama Tarikan + Bandar + Panduan Pelancongan". */
const siteLabels: Record<Locale, { city: string; guide: string }> = {
  ms: { city: 'Muar', guide: 'Panduan Pelancongan' },
  en: { city: 'Muar', guide: 'Travel Guide' },
  zh: { city: '麻坡', guide: '旅游指南' },
};

export const site = {
  /** Tajuk laman mengikut format SEO: Nama Tarikan + Bandar + Panduan. */
  title(locale: Locale): string {
    const { city, guide } = siteLabels[locale];
    return `${place.shortName} ${city} ${guide}`;
  },
};

/** Tukar `**teks**` kepada <strong> sambil melarikan aksara HTML yang lain. */
export function rich(input: string): string {
  const escaped = input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

export interface Alternate {
  hreflang: string;
  href: string;
}

/** Senarai hreflang untuk satu halaman (termasuk x-default yang menunjuk ke ms). */
export function alternates(locale: Locale, slug: string, build: (locale: Locale, slug: string) => string): Alternate[] {
  const list: Alternate[] = locales.map((code) => ({
    hreflang: localeMeta[code].hreflang,
    href: build(code, slug),
  }));
  list.push({ hreflang: 'x-default', href: build('ms', slug) });
  return list;
}

export interface Faq {
  q: string;
  a: string;
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

interface AttractionOptions {
  url?: string;
  image?: string;
  description: string;
  name?: string;
}

/**
 * Schema TouristAttraction + Park untuk Tanjung Emas.
 * Fakta diambil daripada src/data/market.ts supaya konsisten di semua bahasa.
 */
export function attractionSchema({ url, image, description, name }: AttractionOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    name: name ?? place.name,
    alternateName: [...place.alternateName],
    description,
    ...(url ? { url } : {}),
    ...(image ? { image } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: place.streetAddress,
      postalCode: place.postalCode,
      addressLocality: place.addressLocality,
      addressRegion: place.addressRegion,
      addressCountry: place.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: place.latitude,
      longitude: place.longitude,
    },
    hasMap: links.maps,
    openingHoursSpecification: place.openingHours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...place.dayOfWeek],
      opens: slot.opens,
      closes: slot.closes,
    })),
    isAccessibleForFree: true,
  };
}
