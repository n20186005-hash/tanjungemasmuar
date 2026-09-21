export const locales = ['ms', 'en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export interface LocaleMeta {
  code: Locale;
  htmlLang: string;
  ogLocale: string;
  /** Prefix laluan. Default (ms) kekal di akar domain. */
  dir: string;
  /** Nilai atribut hreflang. */
  hreflang: string;
  label: string;
  short: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  ms: { code: 'ms', htmlLang: 'ms-MY', ogLocale: 'ms_MY', dir: '', hreflang: 'ms-MY', label: 'Bahasa Melayu', short: 'MS' },
  en: { code: 'en', htmlLang: 'en', ogLocale: 'en_US', dir: 'en', hreflang: 'en', label: 'English', short: 'EN' },
  zh: { code: 'zh', htmlLang: 'zh-Hans', ogLocale: 'zh_CN', dir: 'zh', hreflang: 'zh-Hans', label: '中文', short: '中文' },
};

/** Bina laluan setempat, contoh: ('en', 'jeti-tanjung-emas') -> '/en/jeti-tanjung-emas/'. */
export function localePath(locale: Locale, slug = ''): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  const parts = [localeMeta[locale].dir, clean].filter(Boolean);
  return parts.length ? `/${parts.join('/')}/` : '/';
}
