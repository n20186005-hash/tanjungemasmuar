/**
 * Fakta kongsi untuk semua bahasa dan semua halaman.
 * Satu-satunya tempat yang menyimpan angka, koordinat, URL rasmi dan nama fail imej.
 */

export const place = {
  name: 'Tanjung Emas Muar',
  /** Nama tarikan tanpa bandar — untuk format tajuk "Nama Tarikan + Bandar + Panduan". */
  shortName: 'Tanjung Emas',
  alternateName: ['Taman Tanjung Emas', 'Dataran Tanjung Emas', 'Tanjung Emas'],
  streetAddress: 'Taman Sri Tanjung',
  postalCode: '84000',
  addressLocality: 'Muar',
  addressRegion: 'Johor',
  addressCountry: 'MY',
  latitude: 2.0475785,
  longitude: 102.5554697,
  ratingValue: '4.4',
  bestRating: '5',
  ratingCount: 11757,
  priceRange: 'Akses taman: percuma; aktiviti operator berasingan',
  openingHours: [
    { opens: '06:00', closes: '09:00' },
    { opens: '15:00', closes: '19:00' },
  ],
  dayOfWeek: [
    'https://schema.org/Monday',
    'https://schema.org/Tuesday',
    'https://schema.org/Wednesday',
    'https://schema.org/Thursday',
    'https://schema.org/Friday',
    'https://schema.org/Saturday',
    'https://schema.org/Sunday',
  ],
} as const;

export const links = {
  maps: 'https://maps.app.goo.gl/q4ezhn4a2UGXTpQp8',
  cruise: 'https://www.azmarinecentre.com/cruise.html',
  tourism: 'https://visitjohor2026.my/listing/muar-river-cruise/',
  bmj: 'https://paj.com.my/bmj-route-schedules-muar/',
  official: 'https://www.mpmuar.gov.my/rakyat/destinasi-menarik/sukan-rekreasi',
  commons: 'https://commons.wikimedia.org/wiki/Category:Tanjung_Emas,_Muar',
} as const;

export const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.2728507495603!2d102.5554697!3d2.0475785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1b91834e77bd1%3A0xda0ddcf00e68d957!2sTanjung%20Emas%20Muar!5e0!3m2!1sms!2smy!4v1786539993997!5m2!1sms!2smy';

export const images = {
  hero: '/images/tanjung-emas-estuary.webp',
  promenade: '/images/tanjung-emas-promenade.webp',
  sunset: '/images/tanjung-emas-sunset-point.webp',
  shore: '/images/tanjung-emas-shore.webp',
} as const;

export const photoCredit = {
  author: 'Slleong',
  source: 'Wikimedia Commons',
  license: 'CC0',
} as const;

export type FoodSpotId = 'kopitiam' | 'asamPedas' | 'bako';

export const foodSpots: Record<FoodSpotId, string> = {
  kopitiam: 'https://www.google.com/maps/search/?api=1&query=Pak%20Cik%20Kopitiam%20Sri%20Muar',
  asamPedas: 'https://www.google.com/maps/search/?api=1&query=Asam%20Pedas%20Jalan%20Joned%20Muar',
  bako: 'https://www.google.com/maps/search/?api=1&query=Bako-Bako%20%26%20Salai-Salai%20Haji%20Olie%20Muar',
};

export const googleAnalyticsId = 'G-HXM22WWPKP';
