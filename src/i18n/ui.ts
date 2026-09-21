import type { Locale } from './locales';

export interface UiStrings {
  nav: { plan: string; transport: string; food: string; nearby: string; faq: string; topics: string };
  langLabel: string;
  langSwitchAria: string;
  heroCtaPlan: string;
  heroCtaMap: string;
  ratingNote: string;
  photoPrefix: string;
  /** Teks alternatif imej — penting untuk SEO imej dan kebolehcapaian. */
  alt: { hero: string; promenade: string; sunset: string; shore: string; map: string };
  /** Alamat kelihatan (NAP) untuk SEO tempatan — dipaparkan di footer. */
  addressLabel: string;
  topicsKicker: string;
  topicsHeading: string;
  topicsCta: string;
  checkMap: string;
  faqKicker: string;
  faqHeading: string;
  faqLead: string;
  sourcesLabel: string;
  sources: { official: string; bmj: string; commons: string; maps: string };
  footerTagline: string;
  footerDisclaimer: string;
  footerLocale: string;
  breadcrumbHome: string;
  relatedHeading: string;
  backToTop: string;
  notFoundTitle: string;
  notFoundLead: string;
  notFoundCta: string;
  lastUpdated: string;
}

export const ui: Record<Locale, UiStrings> = {
  ms: {
    nav: { plan: 'Rancang', transport: 'Pengangkutan', food: 'Makan', nearby: 'Sekitar', faq: 'FAQ', topics: 'Topik' },
    langLabel: 'Bahasa',
    langSwitchAria: 'Tukar bahasa',
    heroCtaPlan: 'Rancang lawatan',
    heroCtaMap: 'Buka Google Maps',
    ratingNote:
      'Penilaian agregat Google yang dipaparkan oleh sumber perjalanan, daripada lebih 11 ribu ulasan. Skor boleh berubah apabila ulasan baharu masuk.',
    photoPrefix: 'Foto',
    alt: {
      hero: 'Pemandangan muara Sungai Muar dari Tanjung Emas',
      promenade: 'Promenad merah di sepanjang tebing Sungai Muar di Tanjung Emas',
      sunset: 'Pemandangan sungai dari kawasan Sunset Point Tanjung Emas',
      shore: 'Tebing berbatu dan air di Tanjung Emas Muar',
      map: 'Peta Google Tanjung Emas Muar',
    },
    addressLabel: 'Alamat',
    topicsKicker: 'Terokai mengikut topik',
    topicsHeading: 'Mahu lebih mendalam? Pergi ke halaman khas.',
    topicsCta: 'Baca panduan',
    checkMap: 'Semak peta ↗',
    faqKicker: 'Soalan lazim',
    faqHeading: 'FAQ Tanjung Emas Muar.',
    faqLead: 'Jawapan ringkas untuk perkara yang biasanya perlu diputuskan sebelum lawatan.',
    sourcesLabel: 'Rujukan utama untuk fakta lokasi, pengangkutan dan foto:',
    sources: { official: 'Majlis Perbandaran Muar', bmj: 'PAJ · Bas Muafakat Johor', commons: 'Wikimedia Commons · CC0', maps: 'Google Maps' },
    footerTagline: 'Datang untuk sungai. Tinggal seketika untuk Muar.',
    footerDisclaimer:
      'Laman panduan bebas ini bukan laman rasmi Majlis Perbandaran Muar atau pengurusan Tanjung Emas. Waktu, caj, parkir dan operasi aktiviti boleh berubah; sahkan maklumat penting sebelum lawatan.',
    footerLocale: 'Bahasa Melayu · Muar, Johor',
    breadcrumbHome: 'Utama',
    relatedHeading: 'Halaman berkaitan',
    backToTop: 'Kembali ke atas',
    notFoundTitle: 'Halaman tidak dijumpai',
    notFoundLead: 'Pautan yang anda buka mungkin telah berubah. Mulakan semula dari panduan utama Tanjung Emas Muar.',
    notFoundCta: 'Ke panduan utama',
    lastUpdated: 'Dikemas kini',
  },
  en: {
    nav: { plan: 'Plan', transport: 'Getting here', food: 'Food', nearby: 'Nearby', faq: 'FAQ', topics: 'Topics' },
    langLabel: 'Language',
    langSwitchAria: 'Change language',
    heroCtaPlan: 'Plan your visit',
    heroCtaMap: 'Open Google Maps',
    ratingNote:
      'Aggregate Google rating shown by travel sources, drawn from more than 11 thousand reviews. The score moves as new reviews come in.',
    photoPrefix: 'Photo',
    alt: {
      hero: 'View of the Muar River estuary from Tanjung Emas',
      promenade: 'The red promenade along the Muar River bank at Tanjung Emas',
      sunset: 'River view from the Sunset Point area of Tanjung Emas',
      shore: 'Rocky bank and water at Tanjung Emas Muar',
      map: 'Google map of Tanjung Emas Muar',
    },
    addressLabel: 'Address',
    topicsKicker: 'Explore by topic',
    topicsHeading: 'Want the details? Go to the dedicated pages.',
    topicsCta: 'Read the guide',
    checkMap: 'Check the map ↗',
    faqKicker: 'Frequently asked',
    faqHeading: 'Tanjung Emas Muar FAQ.',
    faqLead: 'Short answers to the things usually settled before a visit.',
    sourcesLabel: 'Main references for location facts, transport and photos:',
    sources: { official: 'Muar Municipal Council', bmj: 'PAJ · Bas Muafakat Johor', commons: 'Wikimedia Commons · CC0', maps: 'Google Maps' },
    footerTagline: 'Come for the river. Stay a while for Muar.',
    footerDisclaimer:
      'This independent guide is not the official site of the Muar Municipal Council or of Tanjung Emas management. Hours, fees, parking and activity operations can change; confirm key details before you travel.',
    footerLocale: 'English · Muar, Johor',
    breadcrumbHome: 'Home',
    relatedHeading: 'Related pages',
    backToTop: 'Back to top',
    notFoundTitle: 'Page not found',
    notFoundLead: 'The link you followed may have changed. Start again from the main Tanjung Emas Muar guide.',
    notFoundCta: 'Go to the main guide',
    lastUpdated: 'Updated',
  },
  zh: {
    nav: { plan: '规划行程', transport: '交通', food: '美食', nearby: '周边', faq: '常见问题', topics: '主题' },
    langLabel: '语言',
    langSwitchAria: '切换语言',
    heroCtaPlan: '开始规划行程',
    heroCtaMap: '打开 Google 地图',
    ratingNote: '旅游平台汇整的 Google 综合评分，来自超过 1.1 万则评论；随新评论增加，分数会浮动。',
    photoPrefix: '摄影',
    alt: {
      hero: '从 Tanjung Emas 望向麻坡河出海口',
      promenade: 'Tanjung Emas 沿麻坡河岸的红色步道',
      sunset: '从 Tanjung Emas 日落观景点望去的河景',
      shore: 'Tanjung Emas 麻坡的石岸与河水',
      map: 'Tanjung Emas 麻坡 Google 地图',
    },
    addressLabel: '地址',
    topicsKicker: '按主题浏览',
    topicsHeading: '想看得更细？前往专属页面。',
    topicsCta: '阅读指南',
    checkMap: '查看地图 ↗',
    faqKicker: '常见问题',
    faqHeading: 'Tanjung Emas 麻坡常见问题。',
    faqLead: '出发前通常要先确认的几件事，这里简短回答。',
    sourcesLabel: '地点事实、交通与照片的主要参考来源：',
    sources: { official: '麻坡市议会', bmj: 'PAJ · Bas Muafakat Johor', commons: 'Wikimedia Commons · CC0', maps: 'Google 地图' },
    footerTagline: '为河水而来，为麻坡停留片刻。',
    footerDisclaimer: '本站为独立指南，非麻坡市议会或 Tanjung Emas 管理单位官方网站。时间、收费、停车与活动营运可能变动，出发前请再次确认。',
    footerLocale: '简体中文 · 柔佛麻坡',
    breadcrumbHome: '首页',
    relatedHeading: '相关页面',
    backToTop: '回到顶部',
    notFoundTitle: '找不到页面',
    notFoundLead: '你打开的链接可能已变更。请从 Tanjung Emas 麻坡主指南重新开始。',
    notFoundCta: '回到主指南',
    lastUpdated: '最后更新',
  },
};
