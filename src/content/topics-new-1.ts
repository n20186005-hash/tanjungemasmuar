import type { Locale } from '../i18n/locales';
import type { TopicContent } from './topics';
import { images } from '../data/market';

export type NewTopicId1 =
  | 'muar-tanjung-emas-parking-guide'
  | 'how-to-get-to-tanjung-emas-from-kl-singapore'
  | 'tanjung-emas-opening-hours-best-time-to-visit'
  | 'tanjung-emas-accessibility-family-guide'
  | 'tanjung-emas-entrance-fee-tickets'
  | 'muar-otak-otak-guide'
  | 'muar-mee-bandung-guide'
  | 'muar-asam-pedas-guide'
  | 'muar-satay-guide'
  | 'muar-seafood-jalan-bentayan'
  | 'muar-night-market-food'
  | 'muar-breakfast-spots'
  | 'muar-kopitiam-culture'
  | 'muar-cendol-desserts'
  | 'muar-food-near-tanjung-emas';

export const newTopicIds1: NewTopicId1[] = [
  'muar-tanjung-emas-parking-guide',
  'how-to-get-to-tanjung-emas-from-kl-singapore',
  'tanjung-emas-opening-hours-best-time-to-visit',
  'tanjung-emas-accessibility-family-guide',
  'tanjung-emas-entrance-fee-tickets',
  'muar-otak-otak-guide',
  'muar-mee-bandung-guide',
  'muar-asam-pedas-guide',
  'muar-satay-guide',
  'muar-seafood-jalan-bentayan',
  'muar-night-market-food',
  'muar-breakfast-spots',
  'muar-kopitiam-culture',
  'muar-cendol-desserts',
  'muar-food-near-tanjung-emas',
];

/** Slug bahasa Inggeris digunakan terus sebagai laluan. */
export const newTopicSlug1: Record<NewTopicId1, string> = Object.fromEntries(
  newTopicIds1.map((id) => [id, id]),
) as Record<NewTopicId1, string>;

/** Putar 4 imej sedia ada supaya setiap topik mendapat imej. */
export const newTopicImage1: Record<NewTopicId1, string> = Object.fromEntries(
  newTopicIds1.map((id, i) => [
    id,
    [images.shore, images.promenade, images.sunset, images.hero][i % 4],
  ]),
) as Record<NewTopicId1, string>;

export const newTopics1: Record<NewTopicId1, Record<Locale, TopicContent>> = {
  'muar-tanjung-emas-parking-guide': {
    ms: {
      meta: {
        title: 'Tempat Letak Kereta Tanjung Emas Muar — Panduan & Tips',
        description: 'Panduan parkir di Tanjung Emas Muar: di mana meletak kereta, waktu paling sibuk, petua hujung minggu dan perkara yang perlu disahkan di lokasi.',
      },
      card: { title: 'Tempat letak kereta Tanjung Emas', text: 'Di mana meletak kereta, waktu sibuk dan petua praktikal di Taman Sri Tanjung.' },
      kicker: 'Parkir & akses',
      h1: 'Tempat letak kereta di Tanjung Emas Muar.',
      lead: 'Tanjung Emas ialah kawasan rekreasi tepi sungai dengan ruang letak kereta di sekitar Taman Sri Tanjung. Ia ruang awam, jadi ketersediaan, susunan dan sebarang caj perlu disahkan di lokasi kerana keadaan berubah mengikut hari dan penyelenggaraan.',
      facts: [
        { label: 'Alamat taman', value: 'Taman Sri Tanjung, 84000 Muar' },
        { label: 'Mod', value: 'Kereta & motosikal' },
        { label: 'Waktu sibuk', value: 'Hujung minggu & cuti umum' },
        { label: 'Caj', value: 'Sahkan di lokasi' },
      ],
      blocks: [
        {
          heading: 'Di mana meletak kereta',
          paragraphs: [
            'Kawasan rekreasi ini mempunyai ruang letak kereta di sekitar taman dan berhampiran jalan utama ke tepi sungai. Susunan sebenar bergantung kepada pengurusan taman dan boleh berubah.',
            'Apabila tiba, cari petak yang ditanda dan ikut arahan pengawal atau papan tanda. Jangan halang laluan masuk ke promenad atau jeti.',
          ],
        },
        {
          heading: 'Waktu sibuk & petua',
          bullets: [
            'Datang sebelum 5:00 petang pada hujung minggu dan cuti untuk petak yang lebih mudah.',
            'Kongsi kenderaan jika datang beramai-ramai.',
            'Pilih petak yang teduh jika boleh; teduhan terhad.',
            'Semak peta pada hari lawatan kerana susunan jalan boleh berubah.',
          ],
        },
        {
          heading: 'Perkara untuk disahkan',
          callout: 'Ruang letak kereta awam boleh berubah dengan kerja penyelenggaraan atau acara. Sahkan susunan dan sebarang caj dengan papan tanda di lokasi; jangan bergantung semata-mata pada maklumat lama.',
        },
      ],
      faqs: [
        { q: 'Adakah perlu bayar untuk parkir?', a: 'Tanjung Emas ialah ruang awam; tiada caj tetap yang dapat disahkan pada 19 Oktober 2026. Sahkan dengan papan tanda di lokasi sebelum meletak kereta.' },
        { q: 'Bolehkah saya parkir berhampiran jeti?', a: 'Kawasan jeti diurus secara berasingan. Tanya operator atau semak peta untuk titik menaiki bot, kemudian cari parkir yang paling dekat.' },
        { q: 'Bila waktu paling sesak?', a: 'Lewat petang pada hujung minggu dan cuti umum selalunya paling sibuk, terutamanya apabila ramai datang untuk senja.' },
        { q: 'Ada tempat teduh untuk kereta?', a: 'Teduhan terhad di kawasan terbuka. Bawa payung kecil atau rancang lawatan pada awal pagi untuk mengelakkan haba.' },
      ],
    },
    en: {
      meta: {
        title: 'Tanjung Emas Muar Parking Guide — Where to Park & Tips',
        description: 'Parking at Tanjung Emas Muar: where to leave the car, the busiest windows, weekend tips and what to confirm on site.',
      },
      card: { title: 'Tanjung Emas parking', text: 'Where to park, busy windows and practical tips around Taman Sri Tanjung.' },
      kicker: 'Parking & access',
      h1: 'Parking at Tanjung Emas Muar.',
      lead: 'Tanjung Emas is a riverside recreation area with parking around Taman Sri Tanjung. As public space, availability, layout and any charges should be confirmed on site because conditions change by day and maintenance.',
      facts: [
        { label: 'Park address', value: 'Taman Sri Tanjung, 84000 Muar' },
        { label: 'Mode', value: 'Car & motorcycle' },
        { label: 'Busy window', value: 'Weekends & public holidays' },
        { label: 'Charge', value: 'Confirm on site' },
      ],
      blocks: [
        {
          heading: 'Where to park',
          paragraphs: [
            'The recreation area has parking around the park and near the main road down to the riverbank. The actual layout depends on park management and can change.',
            'When you arrive, look for marked bays and follow attendants or signage. Do not block the promenade or jetty access.',
          ],
        },
        {
          heading: 'Busy times & tips',
          bullets: [
            'Arrive before 5:00 pm on weekends and holidays for easier bays.',
            'Carpool if you are coming with a group.',
            'Pick a shaded bay if you can; shade is limited.',
            'Check the map on the day because road layouts can shift.',
          ],
        },
        {
          heading: 'What to confirm',
          callout: 'Public parking can change with maintenance work or events. Confirm the layout and any charge on the on-site signage; do not rely only on old information.',
        },
      ],
      faqs: [
        { q: 'Do I have to pay for parking?', a: 'Tanjung Emas is public space; no fixed charge was confirmed on 19 October 2026. Check the on-site signage before you park.' },
        { q: 'Can I park near the jetty?', a: 'The jetty area is managed separately. Ask the operator or check the map for the boarding point, then find the nearest parking.' },
        { q: 'When is it busiest?', a: 'Late afternoon on weekends and public holidays is usually busiest, especially when people come for the sunset.' },
        { q: 'Is there shade for the car?', a: 'Shade is limited in the open area. Bring a small umbrella or plan a morning visit to avoid the heat.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡 Tanjung Emas 停车指南｜哪里停、注意事项',
        description: '麻坡 Tanjung Emas 停车指南：哪里停车、最拥挤的时段、周末建议，以及现场需确认的事项。',
      },
      card: { title: 'Tanjung Emas 停车', text: '哪里停车、拥挤时段，以及 Taman Sri Tanjung 一带的实用建议。' },
      kicker: '停车与交通',
      h1: '麻坡 Tanjung Emas 停车指南。',
      lead: 'Tanjung Emas 是河畔休闲园区，停车区分布在 Taman Sri Tanjung 周边。作为公共空间，车位安排与是否收费会随日子与维护变动，请以现场为准。',
      facts: [
        { label: '园区地址', value: 'Taman Sri Tanjung, 84000 麻坡' },
        { label: '方式', value: '汽车与摩托车' },
        { label: '拥挤时段', value: '周末与公共假日' },
        { label: '收费', value: '现场确认' },
      ],
      blocks: [
        {
          heading: '哪里停车',
          paragraphs: [
            '休闲园区在园区内与通往河岸的主要道路旁设有停车区，实际布局取决于园区管理，可能变动。',
            '抵达后请找划线车位并依照管理人员或指示牌停放，勿阻挡步道或码头通道。',
          ],
        },
        {
          heading: '拥挤时段与建议',
          bullets: [
            '周末与假日尽量在下午 5 点前到达，较容易找到车位。',
            '多人同行可共乘，减少停车压力。',
            '尽量选有遮阴的车位；遮阴有限。',
            '出发当天查看地图，道路安排可能调整。',
          ],
        },
        {
          heading: '需要确认的事',
          callout: '公共停车区可能因维护或活动而变动。请以现场指示牌确认车位与收费，不要只凭旧资料。',
        },
      ],
      faqs: [
        { q: '停车要收费吗？', a: 'Tanjung Emas 为公共空间，截至 2026 年 10 月 19 日未能确认固定收费。停车前请查看现场指示牌。' },
        { q: '可以停在码头附近吗？', a: '码头区域由营运方另行管理。请询问营运方或查地图确认登船点，再找最近的停车处。' },
        { q: '什么时候最挤？', a: '周末与公共假日的傍晚通常最拥挤，尤其大家来看日落时。' },
        { q: '有遮阴车位吗？', a: '开阔区域遮阴有限。可带小伞，或安排清晨前往以避开高温。' },
      ],
    },
  },

  'how-to-get-to-tanjung-emas-from-kl-singapore': {
    ms: {
      meta: {
        title: 'Cara ke Tanjung Emas Muar dari Kuala Lumpur & Singapura',
        description: 'Arah ke Tanjung Emas Muar dari KL dan Singapura: laluan memandu melalui Lebuhraya Utara-Selatan, pilihan bas dan nota praktikal untuk hujung perjalanan.',
      },
      card: { title: 'Ke sini dari KL & Singapura', text: 'Laluan memandu, pilihan bas dan hujung perjalanan ke Taman Sri Tanjung.' },
      kicker: 'Pengangkutan',
      h1: 'Menuju Tanjung Emas Muar dari Kuala Lumpur dan Singapura.',
      lead: 'Muar terletak di Johor, kira-kira dua hingga dua setengah jam dari Kuala Lumpur dengan kereta dan boleh dicapai dari Singapura melalui Pautan Kedua Tuas. Tetapkan "Tanjung Emas Muar" atau "Taman Sri Tanjung" sebagai destinasi, kemudian sahkan titik turun berhampiran promenad tepi sungai.',
      facts: [
        { label: 'Dari Kuala Lumpur', value: '~2–2.5 jam memandu' },
        { label: 'Dari Singapura', value: 'Melalui Pautan Kedua Tuas' },
        { label: 'Jalan utama', value: 'Lebuhraya Utara-Selatan (E2)' },
        { label: 'Destinasi', value: 'Taman Sri Tanjung, Muar' },
      ],
      blocks: [
        {
          heading: 'Memandu dari Kuala Lumpur',
          paragraphs: [
            'Ambil Lebuhraya Utara-Selatan (E2) ke selatan, kemudian keluar di Pagoh atau Tangkak dan susur ke jalan utama Muar. Sahkan laluan dengan peta kerana kerja jalan boleh berubah.',
            'Perjalanan biasanya mengambil masa dua hingga dua setengah jam bergantung kepada trafik, tanpa mengira waktu rehat.',
          ],
        },
        {
          heading: 'Datang dari Singapura',
          paragraphs: [
            'Masuk ke Malaysia melalui Pautan Kedua Tuas, kemudian sambung ke lebuhraya utara menuju Muar. Ikut tanda ke arah Muar apabila menghampiri bandar.',
          ],
        },
        {
          heading: 'Bas & pengangkutan awam',
          bullets: [
            'Bas antara bandar dari TBS Kuala Lumpur ke Muar tersedia; sahkan jadual semasa.',
            'Pengendali dari Singapura turut beroperasi ke Muar; semak waktu dan terminal.',
            'Guna teksi atau e-hailing untuk hujung perjalanan dari terminal bas ke taman.',
          ],
          callout: 'Jadual bas dan laluan berubah; sahkan dengan pengendali atau peta sebelum bergerak. Untuk memandu, elakkan waktu puncak jika mahu mengurangkan kesesakan.',
        },
      ],
      faqs: [
        { q: 'Berapa lama dari Kuala Lumpur?', a: 'Kira-kira dua hingga dua setengah jam dengan kereta, bergantung kepada trafik dan rehat.' },
        { q: 'Bagaimana dari Singapura?', a: 'Masuk melalui Tuas, memandu ke utara, atau ambil bas terus ke Muar. Sahkan jadual bas semasa.' },
        { q: 'Ada bas ke Muar?', a: 'Ya, bas antara bandar beroperasi dari Kuala Lumpur dan Singapura. Semak jadual dan terminal dengan pengendali.' },
        { q: 'Di mana patut turun?', a: 'Tetapkan destinasi ke Taman Sri Tanjung atau promenad tepi sungai, kemudian sahkan titik turun berhampiran air.' },
      ],
    },
    en: {
      meta: {
        title: 'How to Get to Tanjung Emas Muar from Kuala Lumpur & Singapore',
        description: 'Directions to Tanjung Emas Muar from KL and Singapore: driving routes via the North-South Expressway, bus options and practical notes for the last leg.',
      },
      card: { title: 'Getting here from KL & Singapore', text: 'Driving routes, bus options and the last stretch into Taman Sri Tanjung.' },
      kicker: 'Transport',
      h1: 'Reaching Tanjung Emas Muar from Kuala Lumpur and Singapore.',
      lead: 'Muar sits in Johor, about two to two-and-a-half hours from Kuala Lumpur by car and reachable from Singapore via the Tuas Second Link. Set "Tanjung Emas Muar" or "Taman Sri Tanjung" as your destination, then confirm the drop-off near the riverside promenade.',
      facts: [
        { label: 'From Kuala Lumpur', value: '~2–2.5 hr drive' },
        { label: 'From Singapore', value: 'Via Tuas Second Link' },
        { label: 'Main road', value: 'North-South Expressway (E2)' },
        { label: 'Destination', value: 'Taman Sri Tanjung, Muar' },
      ],
      blocks: [
        {
          heading: 'Driving from Kuala Lumpur',
          paragraphs: [
            'Take the North-South Expressway (E2) south, then exit at Pagoh or Tangkak and follow the trunk road into Muar. Confirm the route on the map because road works can change it.',
            'The drive usually takes two to two and a half hours depending on traffic, excluding rest stops.',
          ],
        },
        {
          heading: 'Coming from Singapore',
          paragraphs: [
            'Enter Malaysia via the Tuas Second Link, then join the northbound expressway towards Muar. Follow signs for Muar as you approach the town.',
          ],
        },
        {
          heading: 'Bus & public transport',
          bullets: [
            'Intercity buses from TBS Kuala Lumpur to Muar are available; confirm current schedules.',
            'Operators from Singapore also run to Muar; check times and the terminal.',
            'Use a taxi or e-hailing for the last leg from the bus terminal to the park.',
          ],
          callout: 'Bus schedules and routes change; confirm with the operator or map before you move. If driving, avoid peak hours to reduce congestion.',
        },
      ],
      faqs: [
        { q: 'How long from Kuala Lumpur?', a: 'About two to two and a half hours by car, depending on traffic and rest stops.' },
        { q: 'How do I get here from Singapore?', a: 'Enter via Tuas, drive north, or take a direct bus to Muar. Confirm the bus schedule before you travel.' },
        { q: 'Are there buses to Muar?', a: 'Yes, intercity buses run from Kuala Lumpur and Singapore. Check the schedule and terminal with the operator.' },
        { q: 'Where should I get off?', a: 'Set the destination to Taman Sri Tanjung or the riverside promenade, then confirm a drop-off near the water.' },
      ],
    },
    zh: {
      meta: {
        title: '从吉隆坡与新加坡怎么去麻坡 Tanjung Emas',
        description: '从吉隆坡与新加坡前往麻坡 Tanjung Emas：经南北大道自驾、巴士选择，以及最后一段的实用提示。',
      },
      card: { title: '从 KL 与新加坡过来', text: '自驾路线、巴士选择，以及进入 Taman Sri Tanjung 的最后一段。' },
      kicker: '交通',
      h1: '从吉隆坡和新加坡前往麻坡 Tanjung Emas。',
      lead: '麻坡位于柔佛，自驾从吉隆坡约需 2 至 2.5 小时，也可从新加坡经大士第二通道抵达。目的地设 “Tanjung Emas Muar” 或 “Taman Sri Tanjung”，再确认在靠近河畔步道的下车点。',
      facts: [
        { label: '从吉隆坡', value: '约 2–2.5 小时车程' },
        { label: '从新加坡', value: '经大士第二通道' },
        { label: '主要道路', value: '南北大道（E2）' },
        { label: '目的地', value: 'Taman Sri Tanjung, 麻坡' },
      ],
      blocks: [
        {
          heading: '从吉隆坡自驾',
          paragraphs: [
            '走南北大道（E2）往南，在 Pagoh 或 Tangkak 出口下交流道，再沿干线公路进入麻坡。道路施工可能改变路线，请用地图确认。',
            '不含休息，车程约 2 至 2.5 小时，视交通而定。',
          ],
        },
        {
          heading: '从新加坡过来',
          paragraphs: [
            '经大士第二通道入境马来西亚，接着上往北的高速公路前往麻坡；靠近市区时跟随往 Muar 的指示。',
          ],
        },
        {
          heading: '巴士与公共交通',
          bullets: [
            '吉隆坡 TBS 有跨城巴士前往麻坡，请确认当下班表。',
            '新加坡也有业者营运到麻坡，请查明班次与车站。',
            '从巴士总站到园区可搭出租车或网约车完成最后一段。',
          ],
          callout: '巴士班次与路线会变动，出发前请向业者或地图确认。自驾则尽量避开高峰以减轻拥堵。',
        },
      ],
      faqs: [
        { q: '从吉隆坡要多久？', a: '自驾约 2 至 2.5 小时，视交通与休息而定。' },
        { q: '从新加坡怎么来？', a: '经大士入境后往北自驾，或搭直达麻坡的巴士；请先确认巴士班次。' },
        { q: '有巴士到麻坡吗？', a: '有，吉隆坡与新加坡都有跨城巴士。请向业者确认班次与车站。' },
        { q: '该在哪里下车？', a: '目的地设 Taman Sri Tanjung 或河畔步道，再确认靠近水边的下车点。' },
      ],
    },
  },

  'tanjung-emas-opening-hours-best-time-to-visit': {
    ms: {
      meta: {
        title: 'Waktu Lawatan & Masa Terbaik Tanjung Emas',
        description: 'Bila melawat Tanjung Emas Muar: waktu rujukan dari penyenaraian peta, masa terbaik untuk cahaya dan senja, serta musim hujan yang perlu dirancang.',
      },
      card: { title: 'Waktu & masa terbaik', text: 'Waktu rujukan, tetingkap cahaya terbaik dan apa erti musim hujan.' },
      kicker: 'Rancang lawatan',
      h1: 'Bila melawat Tanjung Emas Muar.',
      lead: 'Tanjung Emas ialah kawasan rekreasi tepi sungai awam dan bukan venue berbayar, jadi tiada satu waktu pintu masuk. Penyenaraian peta menunjukkan dua slot harian; untuk keselesaan, tuju awal pagi atau lewat petang menjelang senja.',
      facts: [
        { label: 'Penyenaraian peta', value: '6:00–9:00 & 15:00–19:00' },
        { label: 'Cahaya terbaik', value: 'Awal pagi & lewat petang' },
        { label: 'Senja', value: 'Lewat petang' },
        { label: 'Nota musim', value: 'Lebih hujan kira-kira Nov–Feb' },
      ],
      blocks: [
        {
          heading: 'Waktu rujukan pada peta',
          paragraphs: [
            'Penyenaraian Google Maps Tanjung Emas Muar menunjukkan 06:00–09:00 dan 15:00–19:00 setiap hari apabila disemak pada 19 Oktober 2026. Ini waktu penyenaraian taman, bukan jadual ketat.',
            'Sebagai ruang awam, ikut papan tanda dan sahkan akses semasa di lokasi.',
          ],
        },
        {
          heading: 'Masa terbaik sehari',
          bullets: [
            'Awal pagi memberi cahaya lembut, suhu lebih selesa dan laluan kurang sesak.',
            'Lewat petang membawa angin sungai dan warna senja.',
            'Tengah hari biasanya panas dengan teduhan terhad.',
          ],
        },
        {
          heading: 'Masa dalam setahun',
          callout: 'Johor mengalami musim hujan yang lebih berat lebih kurang November hingga Februari. Bulan pertengahan selalunya lebih kering. Semak ramalan cuaca sebelum pergi.',
        },
      ],
      faqs: [
        { q: 'Apakah waktu operasi sebenar?', a: 'Tiada waktu pintu masuk tetap kerana ini ruang awam. Penyenaraian peta menunjukkan dua slot harian; ikut papan tanda di lokasi.' },
        { q: 'Bila masa terbaik sehari?', a: 'Awal pagi atau lewat petang menjelang senja memberi cahaya dan suhu paling selesa.' },
        { q: 'Adakah dibuka pada waktu malam?', a: 'Kawasan menjadi tenang selepas gelap dengan sedikit pencahayaan. Rancang aktiviti malam di sekitar kawasan makan.' },
        { q: 'Bagaimana dengan musim hujan?', a: 'Lebih kurang November hingga Februari membawa hujan lebih kerap; semak ramalan cuaca sebelum lawatan.' },
      ],
    },
    en: {
      meta: {
        title: 'Tanjung Emas Opening Hours & Best Time to Visit',
        description: 'When to visit Tanjung Emas Muar: reference hours from the map listing, the best windows for light and sunset, and the wetter season to plan around.',
      },
      card: { title: 'Hours & best time', text: 'Reference hours, the best windows for light and what the wet season means.' },
      kicker: 'Plan your visit',
      h1: 'When to visit Tanjung Emas Muar.',
      lead: 'Tanjung Emas is a public riverside recreation area rather than a ticketed venue, so there is no single gate time. The map listing shows two daily windows; for comfort, aim for early morning or late afternoon around sunset.',
      facts: [
        { label: 'Map listing', value: '6:00–9:00 & 15:00–19:00' },
        { label: 'Best light', value: 'Early morning & late afternoon' },
        { label: 'Sunset', value: 'Late afternoon' },
        { label: 'Season note', value: 'Wetter roughly Nov–Feb' },
      ],
      blocks: [
        {
          heading: 'Reference hours on the map',
          paragraphs: [
            'The Tanjung Emas Muar Google Maps listing showed 06:00–09:00 and 15:00–19:00 daily when checked on 19 October 6:00–09:00 and 15:00–19:00. These are park listing hours, not a strict timetable.',
            'As public space, follow signage and confirm current access on site.',
          ],
        },
        {
          heading: 'Best time of day',
          bullets: [
            'Early morning brings soft light, more comfortable temperatures and quieter paths.',
            'Late afternoon brings river breeze and sunset colour.',
            'Midday is usually hot with limited shade.',
          ],
        },
        {
          heading: 'Time of year',
          callout: 'Johor sees a wetter stretch roughly from November to February. The shoulder months are usually drier. Check the weather forecast before you go.',
        },
      ],
      faqs: [
        { q: 'What are the actual opening hours?', a: 'There is no fixed gate time because this is public space. The map listing shows two daily windows; follow on-site signage.' },
        { q: 'When is the best time of day?', a: 'Early morning or late afternoon around sunset gives the most comfortable light and temperature.' },
        { q: 'Is it open at night?', a: 'The area goes quiet after dark with some lighting. Plan evening activity around the food areas.' },
        { q: 'What about the rainy season?', a: 'Roughly November to February brings more frequent rain; check the forecast before visiting.' },
      ],
    },
    zh: {
      meta: {
        title: 'Tanjung Emas 开放时间与最佳时段',
        description: '麻坡 Tanjung Emas 何时去最好：地图所列参考时段、光线与日落的最佳窗口，以及雨季的应对。',
      },
      card: { title: '时段与最佳时间', text: '参考时段、最佳光线窗口，以及雨季意味着什么。' },
      kicker: '规划行程',
      h1: '麻坡 Tanjung Emas 何时去。',
      lead: 'Tanjung Emas 是公共河畔休闲区，并非需要购票的场域，因此没有统一的入场时间。地图条目列有每日两段时段；想要舒适，建议清晨或傍晚日落前后前往。',
      facts: [
        { label: '地图时段', value: '06:00–09:00 与 15:00–19:00' },
        { label: '最佳光线', value: '清晨与傍晚' },
        { label: '日落', value: '傍晚' },
        { label: '季节提示', value: '约 11 月至 2 月雨水较多' },
      ],
      blocks: [
        {
          heading: '地图上的参考时段',
          paragraphs: [
            '2026 年 10 月 19 日核对的 Tanjung Emas Muar 地图条目显示每日 06:00–09:00 与 15:00–19:00。这是公园条目的时间，并非严格的时刻表。',
            '作为公共空间，请依现场指示牌并确认当下通行。',
          ],
        },
        {
          heading: '一天中的最佳时段',
          bullets: [
            '清晨光线柔和、气温较舒适、步道人少。',
            '傍晚有河风与夕阳色彩。',
            '正午通常炎热且遮阴有限。',
          ],
        },
        {
          heading: '一年中的时段',
          callout: '柔佛约 11 月至 2 月雨水较多，其余月份通常较干。出发前请查看天气预报。',
        },
      ],
      faqs: [
        { q: '实际开放时间是几点？', a: '这是公共空间，没有固定入场时间。地图列出每日两段时段，请依现场指示牌为准。' },
        { q: '一天中什么时候最好？', a: '清晨或日落前后的傍晚光线与温度最舒适。' },
        { q: '晚上开放吗？', a: '入夜后园区转静，仅有少量照明；夜间活动建议安排在美食区域一带。' },
        { q: '雨季怎么办？', a: '约 11 月至 2 月降雨较频繁，出发前请查看天气预报。' },
      ],
    },
  },

  'tanjung-emas-accessibility-family-guide': {
    ms: {
      meta: {
        title: 'Panduan Kebolehcapaian & Keluarga Tanjung Emas',
        description: 'Melawat Tanjung Emas Muar dengan keluarga, kereta sorong atau mobiliti terhad: laluan berturap, tepi sungai rata, teduhan, kemudahan dan perkara untuk disahkan.',
      },
      card: { title: 'Keluarga & kebolehcapaian', text: 'Laluan berturap, tepi sungai rata, teduhan dan perkara untuk semak.' },
      kicker: 'Siapa sesuai',
      h1: 'Tanjung Emas bersama keluarga dan mobiliti terhad.',
      lead: 'Promenad dan dataran terbuka kebanyakannya rata dan berturap, sesuai untuk kereta sorong dan kerusi roda dalam keadaan baik. Kerana ini ruang awam, sahkan kemudahan rampa, tandas dan teduhan pada hari lawatan.',
      facts: [
        { label: 'Rupa bumi', value: 'Rata, laluan berturap' },
        { label: 'Sesuai', value: 'Keluarga, kereta sorong' },
        { label: 'Teduhan', value: 'Terhad; bawa penutup' },
        { label: 'Sahkan di lokasi', value: 'Rampa, tandas' },
      ],
      blocks: [
        {
          heading: 'Bergerak di sekitar',
          paragraphs: [
            'Promenad tepi sungai dan dataran adalah rata dengan permukaan berturap, menjadikan jarak yang ditempuh mudah dan mesra pejalan kaki.',
          ],
        },
        {
          heading: 'Bersama kanak-kanak',
          bullets: [
            'Ruang terbuka sesuai untuk bermain ringan dan berjalan santai.',
            'Awasi kanak-kanak berhampiran air dan di kawasan sibuk.',
            'Bawa air minuman dan sedikit snek sendiri.',
            'Kemudahan tandas mungkin terhad; semak di lokasi.',
          ],
        },
        {
          heading: 'Mobiliti & keselesaan',
          callout: 'Sahkan ketersediaan rampa dan tandas mesra kerusi roda pada hari lawatan. Elakkan tengah hari, dan ingat teduhan tempat duduk adalah terhad.',
        },
      ],
      faqs: [
        { q: 'Mesra kereta sorong?', a: 'Ya, kebanyakannya rata dan berturap, sesuai untuk kereta sorong dalam cuaca baik.' },
        { q: 'Akses kerusi roda?', a: 'Kawasan rata, tetapi sahkan rampa dan tandas mesra kerusi roda di lokasi kerana kemudahan awam boleh berubah.' },
        { q: 'Ada tandas?', a: 'Taman awam mungkin mempunyai tandas asas; sahkan ketersediaan dan keadaan pada hari lawatan.' },
        { q: 'Ada teduhan?', a: 'Teduhan terhad. Bawa topi atau payung kecil untuk keselesaan.' },
      ],
    },
    en: {
      meta: {
        title: 'Tanjung Emas Accessibility & Family Guide',
        description: 'Visiting Tanjung Emas Muar with family, strollers or limited mobility: paved paths, flat riverside, shade, facilities and what to confirm on site.',
      },
      card: { title: 'Family & accessibility', text: 'Paved paths, flat riverside, shade and what to check before you go.' },
      kicker: 'Who it suits',
      h1: 'Tanjung Emas with family and limited mobility.',
      lead: 'The promenade and open square are largely flat and paved, which works for strollers and wheelchairs in fair conditions. Because it is public space, confirm ramp, toilet and shade availability on the day you visit.',
      facts: [
        { label: 'Terrain', value: 'Flat, paved paths' },
        { label: 'Good for', value: 'Families, strollers' },
        { label: 'Shade', value: 'Limited; bring cover' },
        { label: 'Confirm on site', value: 'Ramps, toilets' },
      ],
      blocks: [
        {
          heading: 'Getting around',
          paragraphs: [
            'The riverside promenade and square are flat with paved surfaces, making the distance easy and walker-friendly.',
          ],
        },
        {
          heading: 'With children',
          bullets: [
            'Open space suits light play and relaxed walking.',
            'Supervise children near the water and in busy areas.',
            'Bring your own drinking water and a few snacks.',
            'Toilet facilities may be limited; check on site.',
          ],
        },
        {
          heading: 'Mobility & comfort',
          callout: 'Confirm wheelchair-friendly ramp and toilet availability on the day. Avoid midday, and remember shaded seating is limited.',
        },
      ],
      faqs: [
        { q: 'Is it stroller friendly?', a: 'Yes, it is largely flat and paved, good for strollers in fair weather.' },
        { q: 'Wheelchair access?', a: 'The area is flat, but confirm wheelchair-friendly ramps and toilets on site because public facilities can change.' },
        { q: 'Are there toilets?', a: 'Public parks may have basic toilets; confirm availability and condition on the day.' },
        { q: 'Is there shade?', a: 'Shade is limited. Bring a cap or small umbrella for comfort.' },
      ],
    },
    zh: {
      meta: {
        title: 'Tanjung Emas 无障碍与亲子指南',
        description: '带家人、婴儿车或行动不便者游览麻坡 Tanjung Emas：铺装步道、平坦河畔、遮阴、设施与现场需确认事项。',
      },
      card: { title: '亲子与无障碍', text: '铺装步道、平坦河畔、遮阴，以及出发前要确认的事。' },
      kicker: '适合谁',
      h1: '带家人与行动不便者游 Tanjung Emas。',
      lead: '步道与开阔广场大多平坦、铺装，天气良好时适合婴儿车与轮椅。由于是公共空间，请在到访当天确认坡道、洗手间与遮阴是否可用。',
      facts: [
        { label: '地形', value: '平坦、铺装步道' },
        { label: '适合', value: '亲子、婴儿车' },
        { label: '遮阴', value: '有限；自带遮挡' },
        { label: '现场确认', value: '坡道、洗手间' },
      ],
      blocks: [
        {
          heading: '园区内移动',
          paragraphs: [
            '河畔步道与广场平坦且有铺装路面，步行距离轻松、对行人友好。',
          ],
        },
        {
          heading: '带小孩',
          bullets: [
            '开阔场地适合轻松游戏与散步。',
            '在水边与人潮处请看护儿童。',
            '请自备饮用水与少量点心。',
            '洗手间可能有限，请于现场确认。',
          ],
        },
        {
          heading: '行动不便与舒适',
          callout: '请于当天确认无障碍坡道与洗手间是否可用。避开正午，并记住遮阴座椅有限。',
        },
      ],
      faqs: [
        { q: '适合推婴儿车吗？', a: '适合，大多平坦铺装，天气好时对婴儿车很友好。' },
        { q: '轮椅能通行吗？', a: '园区平坦，但无障碍坡道与洗手间请以现场为准，因为公共设施可能变动。' },
        { q: '有洗手间吗？', a: '公共园区可能有基本洗手间；请于当天确认是否开放与状况。' },
        { q: '有遮阴吗？', a: '遮阴有限。请自备帽子或小伞以保舒适。' },
      ],
    },
  },

  'tanjung-emas-entrance-fee-tickets': {
    ms: {
      meta: {
        title: 'Tiket & Caj Masuk Tanjung Emas',
        description: 'Adakah caj masuk di Tanjung Emas Muar? Akses taman ialah ruang awam dan biasanya percuma; bot sungai dikendali operator berasingan dengan tambang sendiri.',
      },
      card: { title: 'Masuk & tiket', text: 'Akses taman ialah ruang awam; bot sungai operator berasingan.' },
      kicker: 'Kos',
      h1: 'Caj masuk dan tiket Tanjung Emas.',
      lead: 'Tiada tiket biasa untuk taman itu sendiri — Tanjung Emas ialah ruang tepi sungai awam. Pengalaman berbayar seperti Muar River Cruise kendalian AZ Marine adalah berasingan dan mempunyai tambang sendiri untuk disahkan sebelum menaiki bot.',
      facts: [
        { label: 'Masuk taman', value: 'Ruang awam · biasanya percuma' },
        { label: 'Bot sungai', value: 'Operator berasingan' },
        { label: 'Operator', value: 'AZ Marine · 013-6692263' },
        { label: 'Tambang', value: 'Sahkan sebelum menaiki' },
      ],
      blocks: [
        {
          heading: 'Akses taman',
          paragraphs: [
            'Sebagai ruang awam, tiada gerai tiket di pintu masuk taman. Sesetengah aktiviti di kawasan itu mungkin dikenakan caj berasingan oleh pengendali.',
          ],
        },
        {
          heading: 'Tiket bot sungai',
          bullets: [
            'AZ Marine mengendalikan Muar River Cruise.',
            'Tambang, tempoh dan jadual belum disahkan pada 19 Oktober 2026.',
            'Hubungi pautan rasmi atau 013-6692263.',
            'Sahkan tarikh, masa dan polisi cuaca sebelum menaiki.',
          ],
        },
        {
          heading: 'Sebelum anda membayar',
          callout: 'Sahkan tambang, tempoh, kaedah bayaran dan dasar pembatalan dengan operator. Kekalkan lawatan taman sebagai pilihan percuma jika pelayaran dibatalkan.',
        },
      ],
      faqs: [
        { q: 'Adakah caj masuk?', a: 'Tiada tiket biasa untuk taman; Tanjung Emas ialah ruang awam tepi sungai.' },
        { q: 'Perlu tiket untuk bot?', a: 'Ya, bot sungai berasingan. Sahkan dengan AZ Marine sebelum menaiki.' },
        { q: 'Berapakah tambang bot?', a: 'Tambang semasa belum dapat disahkan; hubungi AZ Marine melalui pautan rasmi atau 013-6692263.' },
        { q: 'Apa yang percuma?', a: 'Promenad, dataran dan pemandangan senja adalah aktiviti percuma di ruang awam.' },
      ],
    },
    en: {
      meta: {
        title: 'Tanjung Emas Entrance Fee & Tickets',
        description: 'Is there an entrance fee at Tanjung Emas Muar? Park access is public and usually free; the river cruise is a separate operator with its own fares to confirm.',
      },
      card: { title: 'Entry & tickets', text: 'Park access is public space; the river cruise is a separate operator.' },
      kicker: 'Cost',
      h1: 'Tanjung Emas entrance fee and tickets.',
      lead: 'There is no regular ticket for the park itself — Tanjung Emas is public riverside space. Paid experiences, such as the Muar River Cruise run by AZ Marine, are separate and have their own fares to confirm before boarding.',
      facts: [
        { label: 'Park entry', value: 'Public space · usually free' },
        { label: 'River cruise', value: 'Separate operator' },
        { label: 'Operator', value: 'AZ Marine · 013-6692263' },
        { label: 'Fare', value: 'Confirm before boarding' },
      ],
      blocks: [
        {
          heading: 'Park access',
          paragraphs: [
            'As public space, there is no ticket booth at the park gate. Some activities in the area may be charged separately by the operator.',
          ],
        },
        {
          heading: 'River cruise tickets',
          bullets: [
            'AZ Marine operates the Muar River Cruise.',
            'Fares, duration and schedule were not confirmed on 19 October 2026.',
            'Contact the official link or 013-6692263.',
            'Confirm date, time and weather policy before boarding.',
          ],
        },
        {
          heading: 'Before you pay',
          callout: 'Confirm the fare, duration, payment method and cancellation policy with the operator. Keep the park visit as a free option if the sailing is cancelled.',
        },
      ],
      faqs: [
        { q: 'Is there an entrance fee?', a: 'No regular ticket for the park; Tanjung Emas is public riverside space.' },
        { q: 'Do I need a ticket for the cruise?', a: 'Yes, the river cruise is separate. Confirm with AZ Marine before boarding.' },
        { q: 'How much is the cruise?', a: 'Current fares were not confirmed; contact AZ Marine through its official link or 013-6692263.' },
        { q: 'What is free?', a: 'The promenade, square and sunset views are free activities in public space.' },
      ],
    },
    zh: {
      meta: {
        title: 'Tanjung Emas 门票与入场费',
        description: '麻坡 Tanjung Emas 要门票吗？园区为公共空间，通常免费；麻坡河游船由营运方另行经营，票价需另行确认。',
      },
      card: { title: '入场与购票', text: '园区为公共空间；河游船由另行营运方经营。' },
      kicker: '费用',
      h1: 'Tanjung Emas 的入场费与门票。',
      lead: '园区本身没有常规门票——Tanjung Emas 是公共河畔空间。付费体验如 AZ Marine 经营的麻坡河游船则单独收费，登船前需确认票价。',
      facts: [
        { label: '园区入场', value: '公共空间 · 通常免费' },
        { label: '河游船', value: '另行营运方' },
        { label: '营运方', value: 'AZ Marine · 013-6692263' },
        { label: '票价', value: '登船前确认' },
      ],
      blocks: [
        {
          heading: '园区通行',
          paragraphs: [
            '作为公共空间，园区入口没有售票亭。园区内某些活动可能由营运方另行收费。',
          ],
        },
        {
          heading: '游船购票',
          bullets: [
            'AZ Marine 经营麻坡河游船。',
            '截至 2026 年 10 月 19 日，票价、航程与班表未确认。',
            '请通过官网或 013-6692263 联系。',
            '登船前确认日期、时间与天气政策。',
          ],
        },
        {
          heading: '付款前',
          callout: '请向营运方确认票价、航程、付款方式与取消政策。若船班取消，可把园区散步作为免费备选。',
        },
      ],
      faqs: [
        { q: '要收门票吗？', a: '园区没有常规门票；Tanjung Emas 是公共河畔空间。' },
        { q: '游船要票吗？', a: '要，河游船单独收费。登船前请向 AZ Marine 确认。' },
        { q: '船票多少钱？', a: '当前票价未确认；请通过官网或 013-6692263 联系 AZ Marine。' },
        { q: '什么是免费的？', a: '步道、广场与日落景观都是公共空间里的免费活动。' },
      ],
    },
  },

  'muar-otak-otak-guide': {
    ms: {
      meta: {
        title: 'Panduan Otak-Otak Muar — Ciri & Di Mana Mencari',
        description: 'Otak-otak Muar: apa itu, rasa yang biasa dikaitkan dengan bandar ini, kawasan mencari dan petua sebelum pergi.',
      },
      card: { title: 'Otak-otak Muar', text: 'Snek ikan berempah, di mana mencari dan petua praktikal.' },
      kicker: 'Makanan Muar',
      h1: 'Otak-otak: snek jalanan Muar.',
      lead: 'Otak-otak ialah snek ikan berempah yang mudah dibawa dan sering dikaitkan dengan Muar. Daripada mengejar satu gerai, gunakan kawasan sekitar Taman Sri Tanjung dan Bandar Maharani sebagai panduan, kemudian sahkan premis yang masih aktif.',
      facts: [
        { label: 'Jenis', value: 'Snek ikan berempah' },
        { label: 'Kawasan', value: 'Taman Sri Tanjung · Bandar Maharani' },
        { label: 'Waktu', value: 'Siang & petang' },
        { label: 'Semak', value: 'Premis & menu' },
      ],
      blocks: [
        {
          heading: 'Apa itu otak-otak',
          paragraphs: [
            'Otak-otak biasanya dibuat daripada pes ikan berempah yang dibalut daun dan dipanggang atau dikukus. Di Muar, ia sering dijadikan snek persinggahan atau dibeli untuk dibawa pulang.',
          ],
        },
        {
          heading: 'Di mana mencari',
          bullets: [
            '**Taman Sri Tanjung** — paling dekat dengan Tanjung Emas; gerai dan kedai tempatan.',
            '**Bandar Maharani** — pusat bandar lama dengan pilihan snek dan kuih.',
            '**Jalan utama Muar** — beberapa premis menyediakan otak-otak sebagai takeaway.',
          ],
        },
        {
          heading: 'Petua praktikal',
          callout: 'Premis, menu dan waktu operasi boleh berubah. Semak peta dan ulasan terkini sebelum bergerak, terutamanya jika anda datang lewat petang.',
        },
      ],
      faqs: [
        { q: 'Di mana otak-otak Muar paling terkenal?', a: 'Tiada satu gerai rasmi yang disahkan. Cari di sekitar Taman Sri Tanjung dan Bandar Maharani; semak peta dan waktu operasi sebelum pergi.' },
        { q: 'Boleh dibawa pulang?', a: 'Ya, otak-otak sesuai sebagai snek takeaway, tetapi sahkan penyimpanan dan masa penyediaan dengan premis.' },
        { q: 'Ada pilihan halal?', a: 'Kebanyakan gerai tempatan di Muar menyediakan makanan mengikut amalan tempatan; sahkan sendiri di premis jika perlu.' },
        { q: 'Berapa harga biasa?', a: 'Harga belum dapat disahkan pada 19 Oktober 2026. Tanya premis secara terus atau semak papan harga di lokasi.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Otak-Otak Guide — What It Is & Where to Look',
        description: 'Muar otak-otak: what it is, the flavour tied to this town, where to look and tips before you go.',
      },
      card: { title: 'Muar otak-otak', text: 'Spiced fish snack, where to look and practical tips.' },
      kicker: 'Muar food',
      h1: 'Otak-otak: Muar street snack.',
      lead: 'Otak-otak is a portable spiced fish snack often linked with Muar. Rather than chasing one stall, use the areas around Taman Sri Tanjung and Bandar Maharani as your guide, then confirm which premises are active.',
      facts: [
        { label: 'Type', value: 'Spiced fish snack' },
        { label: 'Areas', value: 'Taman Sri Tanjung · Bandar Maharani' },
        { label: 'Timing', value: 'Daytime & afternoon' },
        { label: 'Check', value: 'Premises & menu' },
      ],
      blocks: [
        {
          heading: 'What is otak-otak',
          paragraphs: [
            'Otak-otak is usually a spiced fish paste wrapped in leaves and grilled or steamed. In Muar it is often a relaxed stop or a takeaway.',
          ],
        },
        {
          heading: 'Where to look',
          bullets: [
            '**Taman Sri Tanjung** — closest to Tanjung Emas; local stalls and shops.',
            '**Bandar Maharani** — the old town centre with snack and kuih options.',
            '**Main Muar roads** — some premises offer otak-otak as takeaway.',
          ],
        },
        {
          heading: 'Practical tips',
          callout: 'Premises, menus and hours can change. Check the map and recent reviews before you move, especially if you arrive late afternoon.',
        },
      ],
      faqs: [
        { q: 'Where is Muar otak-otak most known?', a: 'No single confirmed stall. Look around Taman Sri Tanjung and Bandar Maharani; check the map and opening hours before you go.' },
        { q: 'Can it be taken home?', a: 'Yes, otak-otak works as a takeaway snack, but confirm storage and preparation time with the premises.' },
        { q: 'Is there a halal option?', a: 'Most local stalls in Muar prepare food according to local practice; confirm at the premises if needed.' },
        { q: 'What is the usual price?', a: 'Prices were not confirmed on 19 October 2026. Ask the premises directly or check the price board on site.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡 Otak-Otak 乌达指南｜是什么、哪里找',
        description: '麻坡 otak-otak（乌达）：是什么、与这座城市相连的风味、去哪里找，以及出发前的建议。',
      },
      card: { title: '麻坡 otak-otak', text: '香料鱼浆小吃、哪里找与实用建议。' },
      kicker: '麻坡美食',
      h1: 'Otak-Otak：麻坡街头小吃。',
      lead: 'Otak-otak 是方便携带的香料鱼浆小吃，常与麻坡相连。与其只追一家摊，不如以 Taman Sri Tanjung 与皇城（Bandar Maharani）一带为指引，再确认哪些店家仍在营业。',
      facts: [
        { label: '类型', value: '香料鱼浆小吃' },
        { label: '区域', value: 'Taman Sri Tanjung · 皇城' },
        { label: '时段', value: '白天与下午' },
        { label: '确认', value: '店家与菜单' },
      ],
      blocks: [
        {
          heading: '什么是 otak-otak',
          paragraphs: [
            '乌达通常是裹在叶里的香料鱼浆，经烤或蒸制。在麻坡常被当作轻松的停留小吃或外带。',
          ],
        },
        {
          heading: '去哪里找',
          bullets: [
            '**Taman Sri Tanjung** — 离 Tanjung Emas 最近；有摊位与在地店铺。',
            '**皇城 Bandar Maharani** — 老城中心，有小吃与糕点选择。',
            '**麻坡主要道路** — 部分店家提供乌达外带。',
          ],
        },
        {
          heading: '实用建议',
          callout: '店家、菜单与营业时间可能变动。出发前请查看地图与近期评论，若傍晚较晚前往更要先确认。',
        },
      ],
      faqs: [
        { q: '麻坡乌达最有名的是哪家？', a: '没有确认的单一家店。可在 Taman Sri Tanjung 与皇城一带寻找；出发前请查地图与营业时间。' },
        { q: '可以外带吗？', a: '可以，乌达适合当外带小吃，但保存与制作时间请向店家确认。' },
        { q: '有清真选项吗？', a: '麻坡多数本地摊位按在地习惯备餐；如有需要请在店家现场确认。' },
        { q: '一般多少钱？', a: '截至 2026 年 10 月 19 日价格未确认。请直接向店家询问或看现场价目。' },
      ],
    },
  },

  'muar-mee-bandung-guide': {
    ms: {
      meta: {
        title: 'Panduan Mee Bandung Muar — Ciri & Di Mana Mencari',
        description: 'Mee Bandung Muar: kuah pekat berempah, rasa yang paling kerap dikaitkan dengan bandar ini, kawasan mencari dan petua.',
      },
      card: { title: 'Mee Bandung Muar', text: 'Mi kuah pekat, di mana mencari dan petua praktikal.' },
      kicker: 'Makanan Muar',
      h1: 'Mee Bandung: mi ikonik Muar.',
      lead: 'Mee Bandung Muar paling kerap dikaitkan dengan bandar ini — mi dengan kuah pekat berempah. Daripada mengejar satu kedai, gunakan kawasan sekitar Taman Sri Tanjung dan Bandar Maharani sebagai panduan.',
      facts: [
        { label: 'Jenis', value: 'Mi kuah pekat berempah' },
        { label: 'Kawasan', value: 'Taman Sri Tanjung · Bandar Maharani' },
        { label: 'Waktu', value: 'Sarapan & makan tengah hari' },
        { label: 'Semak', value: 'Waktu operasi' },
      ],
      blocks: [
        {
          heading: 'Apa itu Mee Bandung',
          paragraphs: [
            'Mee Bandung biasanya terdiri daripada mi dengan kuah pekat yang berempah, sering dihidang dengan daging, telur dan sayur. Versi Muar mempunyai rasa yang tersendiri yang sering dicari pelawat.',
          ],
        },
        {
          heading: 'Di mana mencari',
          bullets: [
            '**Taman Sri Tanjung** — sarapan dan mi tempatan berhampiran Tanjung Emas.',
            '**Bandar Maharani** — kedai kopi dan gerai mi di pusat bandar lama.',
            '**Jalan Bentayan** — pilihan makan tengah hari dan malam.',
          ],
        },
        {
          heading: 'Petua praktikal',
          callout: 'Sesetengah kedai memilih hari tertentu untuk tutup. Semak hari operasi dan datang lebih awal jika mahu mengelakkan kehabisan stok hidangan popular.',
        },
      ],
      faqs: [
        { q: 'Di mana Mee Bandung Muar paling terkenal?', a: 'Tiada satu kedai rasmi yang disahkan. Cari di sekitar Taman Sri Tanjung dan Bandar Maharani; semak peta dan waktu operasi.' },
        { q: 'Boleh didapati pada waktu malam?', a: 'Beberapa gerai aktif pada waktu malam, tetapi kebanyakan hidangan mi tertumpu pada sarapan dan makan tengah hari. Sahkan waktu operasi.' },
        { q: 'Adakah versi pedas?', a: 'Tahap pedas berbeza mengikut kedai. Tanya sendiri atau minta pelarasan di premis.' },
        { q: 'Berapa harga biasa?', a: 'Harga belum disahkan pada 19 Oktober 2026; tanya premis secara terus.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Mee Bandung Guide — What It Is & Where to Look',
        description: 'Muar mee bandung: thick spiced broth, the flavour most tied to this town, where to look and tips.',
      },
      card: { title: 'Muar mee bandung', text: 'Noodles in thick broth, where to look and practical tips.' },
      kicker: 'Muar food',
      h1: 'Mee Bandung: Muar iconic noodles.',
      lead: 'Mee Bandung Muar is the flavour most often tied to this town — noodles in a thick spiced broth. Rather than chasing one shop, use the areas around Taman Sri Tanjung and Bandar Maharani as your guide.',
      facts: [
        { label: 'Type', value: 'Noodles in thick spiced broth' },
        { label: 'Areas', value: 'Taman Sri Tanjung · Bandar Maharani' },
        { label: 'Timing', value: 'Breakfast & lunch' },
        { label: 'Check', value: 'Opening hours' },
      ],
      blocks: [
        {
          heading: 'What is mee bandung',
          paragraphs: [
            'Mee bandung usually features noodles in a thick, spiced broth, often served with meat, egg and vegetables. The Muar version has a distinctive taste visitors look for.',
          ],
        },
        {
          heading: 'Where to look',
          bullets: [
            '**Taman Sri Tanjung** — breakfast and local noodles near Tanjung Emas.',
            '**Bandar Maharani** — coffee shops and noodle stalls in the old town.',
            '**Jalan Bentayan** — lunch and dinner options.',
          ],
        },
        {
          heading: 'Practical tips',
          callout: 'Some shops pick a specific day to close. Check operating days and come earlier if you want to avoid popular dishes selling out.',
        },
      ],
      faqs: [
        { q: 'Where is Muar mee bandung most known?', a: 'No single confirmed shop. Look around Taman Sri Tanjung and Bandar Maharani; check the map and opening hours.' },
        { q: 'Available at night?', a: 'Some stalls are active at night, but most noodle dishes focus on breakfast and lunch. Confirm opening hours.' },
        { q: 'Is there a spicy version?', a: 'Spice level varies by shop. Ask or request adjustment at the premises.' },
        { q: 'What is the usual price?', a: 'Prices were not confirmed on 19 October 2026; ask the premises directly.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡 Mee Bandung 面指南｜是什么、哪里找',
        description: '麻坡 mee bandung：浓稠香料汤面、与这座城市最相连的风味、去哪里找与建议。',
      },
      card: { title: '麻坡 mee bandung', text: '浓汤面、哪里找与实用建议。' },
      kicker: '麻坡美食',
      h1: 'Mee Bandung：麻坡代表面食。',
      lead: '最能代表麻坡的，就是 mee bandung——浓稠香料汤面。与其只追一家店，不如以 Taman Sri Tanjung 与皇城一带为指引。',
      facts: [
        { label: '类型', value: '浓香料汤面' },
        { label: '区域', value: 'Taman Sri Tanjung · 皇城' },
        { label: '时段', value: '早餐与午餐' },
        { label: '确认', value: '营业时间' },
      ],
      blocks: [
        {
          heading: '什么是 mee bandung',
          paragraphs: [
            '麻坡面通常是浓稠香料的汤面，常配肉、蛋与蔬菜。麻坡版本有游客专程寻找的独特风味。',
          ],
        },
        {
          heading: '去哪里找',
          bullets: [
            '**Taman Sri Tanjung** — 靠近 Tanjung Emas 的早餐与在地面食。',
            '**皇城 Bandar Maharani** — 老城的咖啡店与面摊。',
            '**Jalan Bentayan** — 午餐与晚餐选择。',
          ],
        },
        {
          heading: '实用建议',
          callout: '部分店家每周固定休一天。请查营业日，并早点前往以免热门面食售完。',
        },
      ],
      faqs: [
        { q: '麻坡面最有名的是哪家？', a: '没有确认的单一家店。可在 Taman Sri Tanjung 与皇城一带寻找；出发前查地图与营业时间。' },
        { q: '晚上吃得到吗？', a: '部分摊位夜间营业，但多数面食集中在早餐与午餐。请确认营业时间。' },
        { q: '有辣的版本吗？', a: '辣度因店而异。可在店家现场询问或要求调整。' },
        { q: '一般多少钱？', a: '截至 2026 年 10 月 19 日价格未确认；请直接向店家询问。' },
      ],
    },
  },

  'muar-asam-pedas-guide': {
    ms: {
      meta: {
        title: 'Panduan Asam Pedas Muar — Ciri & Di Mana Mencari',
        description: 'Asam pedas Muar: kuah masam-pedas, cara mencari berhampiran Tanjung Emas dan petua sebelum pergi.',
      },
      card: { title: 'Asam pedas Muar', text: 'Kuah masam-pedas, di mana mencari dan petua.' },
      kicker: 'Makanan Muar',
      h1: 'Asam pedas: rasa Masak Johor.',
      lead: 'Asam pedas ialah kuah masam-pedas yang lazimnya dipadankan dengan ikan dan nasi, dan kerap dikaitkan dengan Johor. Berhampiran Tanjung Emas, cari di sekitar Taman Sri Tanjung dan jalan ke Bandar Maharani.',
      facts: [
        { label: 'Jenis', value: 'Kuah masam-pedas' },
        { label: 'Kawasan', value: 'Taman Sri Tanjung · Bandar Maharani' },
        { label: 'Waktu', value: 'Makan tengah hari & malam' },
        { label: 'Semak', value: 'Premis & menu' },
      ],
      blocks: [
        {
          heading: 'Apa itu asam pedas',
          paragraphs: [
            'Asam pedas biasanya dimasak dengan pes berempah, asam dan santan atau air, dihidang dengan ikan atau lauk lain bersama nasi. Rasa masam-pedasnya berbeza mengikut resipi keluarga.',
          ],
        },
        {
          heading: 'Di mana mencari',
          bullets: [
            '**Taman Sri Tanjung** — pilihan terdekat selepas berjalan di Tanjung Emas.',
            '**Bandar Maharani** — restoran dan gerai tempatan dengan hidangan berkuah.',
            '**Jalan Bentayan** — lebih aktif pada waktu malam.',
          ],
        },
        {
          heading: 'Petua praktikal',
          callout: 'Hidangan berkuah selalunya tertumpu pada makan tengah hari dan malam. Semak peta dan ulasan sebelum bergerak, terutamanya jika datang lewat malam.',
        },
      ],
      faqs: [
        { q: 'Di mana asam pedas berhampiran Tanjung Emas?', a: 'Cari di sekitar Taman Sri Tanjung dan jalan ke Bandar Maharani. Semak peta dan waktu operasi sebelum pergi.' },
        { q: 'Asam pedas Muar sama dengan Johor?', a: 'Asam pedas adalah hidangan Johor; setiap kedai mempunyai resipi sendiri. Rasa berbeza mengikut premis.' },
        { q: 'Boleh pesan ikannya?', a: 'Pilihan ikan berbeza mengikut premis; tanya sendiri semasa memesan.' },
        { q: 'Berapa harga biasa?', a: 'Harga belum disahkan pada 19 Oktober 2026; tanya premis secara terus.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Asam Pedas Guide — What It Is & Where to Look',
        description: 'Muar asam pedas: sour-hot broth, where to find it near Tanjung Emas and tips before you go.',
      },
      card: { title: 'Muar asam pedas', text: 'Sour-hot broth, where to look and tips.' },
      kicker: 'Muar food',
      h1: 'Asam pedas: a Johor flavour.',
      lead: 'Asam pedas is a sour-hot broth usually paired with fish and rice, and is often linked with Johor. Near Tanjung Emas, look around Taman Sri Tanjung and the roads towards Bandar Maharani.',
      facts: [
        { label: 'Type', value: 'Sour-hot broth' },
        { label: 'Areas', value: 'Taman Sri Tanjung · Bandar Maharani' },
        { label: 'Timing', value: 'Lunch & dinner' },
        { label: 'Check', value: 'Premises & menu' },
      ],
      blocks: [
        {
          heading: 'What is asam pedas',
          paragraphs: [
            'Asam pedas is usually cooked with spiced paste, tamarind and coconut milk or water, served with fish or other sides and rice. The sour-hot taste varies by family recipe.',
          ],
        },
        {
          heading: 'Where to look',
          bullets: [
            '**Taman Sri Tanjung** — nearest options after walking at Tanjung Emas.',
            '**Bandar Maharani** — local restaurants and stalls with broth dishes.',
            '**Jalan Bentayan** — more active at night.',
          ],
        },
        {
          heading: 'Practical tips',
          callout: 'Broth dishes tend to focus on lunch and dinner. Check the map and reviews before you move, especially if you arrive late at night.',
        },
      ],
      faqs: [
        { q: 'Where is asam pedas near Tanjung Emas?', a: 'Look around Taman Sri Tanjung and the roads towards Bandar Maharani. Check the map and opening hours before you go.' },
        { q: 'Is Muar asam pedas the same as Johor asam pedas?', a: 'Asam pedas is a Johor dish; every shop has its own recipe. The taste differs by premises.' },
        { q: 'Can I choose the fish?', a: 'Fish options vary by premises; ask when ordering.' },
        { q: 'What is the usual price?', a: 'Prices were not confirmed on 19 October 2026; ask the premises directly.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡 Asam Pedas 酸辣鱼指南｜是什么、哪里找',
        description: '麻坡 asam pedas（酸辣鱼）：酸辣汤汁、在 Tanjung Emas 周边哪里找，以及出发前建议。',
      },
      card: { title: '麻坡 asam pedas', text: '酸辣汤汁、哪里找与建议。' },
      kicker: '麻坡美食',
      h1: 'Asam Pedas：柔佛风味。',
      lead: 'Asam pedas 是酸辣汤汁，通常配鱼与白饭，常与柔佛相连。在 Tanjung Emas 周边，可在 Taman Sri Tanjung 一带与通往皇城的道路沿线寻找。',
      facts: [
        { label: '类型', value: '酸辣汤汁' },
        { label: '区域', value: 'Taman Sri Tanjung · 皇城' },
        { label: '时段', value: '午餐与晚餐' },
        { label: '确认', value: '店家与菜单' },
      ],
      blocks: [
        {
          heading: '什么是 asam pedas',
          paragraphs: [
            '酸辣鱼通常用香料糊、罗望子与椰浆或清水熬煮，配鱼或其他菜与白饭。酸辣程度依各家配方而不同。',
          ],
        },
        {
          heading: '去哪里找',
          bullets: [
            '**Taman Sri Tanjung** — 走完 Tanjung Emas 后最近的选项。',
            '**皇城 Bandar Maharani** — 有酸辣汤料理的本地餐馆与摊位。',
            '**Jalan Bentayan** — 夜间较热闹。',
          ],
        },
        {
          heading: '实用建议',
          callout: '汤汁料理多集中在午餐与晚餐。出发前请查地图与评论，若深夜前往更要先确认。',
        },
      ],
      faqs: [
        { q: 'Tanjung Emas 附近哪里吃 asam pedas？', a: '可在 Taman Sri Tanjung 一带与通往皇城的道路沿线寻找。出发前请查地图与营业时间。' },
        { q: '麻坡 asam pedas 和柔佛的一样吗？', a: 'asam pedas 是柔佛料理；每家店各有配方，风味因店而异。' },
        { q: '可以选鱼吗？', a: '鱼的选择因店而异；点餐时请直接向店家询问。' },
        { q: '一般多少钱？', a: '截至 2026 年 10 月 19 日价格未确认；请直接向店家询问。' },
      ],
    },
  },

  'muar-satay-guide': {
    ms: {
      meta: {
        title: 'Panduan Satay Muar — Ciri & Di Mana Mencari',
        description: 'Satay Muar: pencuci mulut atau makan ringan, di mana mencari dan petua praktikal.',
      },
      card: { title: 'Satay Muar', text: 'Jenis satay, di mana mencari dan petua.' },
      kicker: 'Makanan Muar',
      h1: 'Satay: pembuka selera Muar.',
      lead: 'Satay Muar ialah pilihan yang sesuai untuk sarapan lewat atau makan ringan, bergantung pada kedai. Cari di sekitar Bandar Maharani dan kawasan makan Muar, kemudian sahkan premis yang masih aktif.',
      facts: [
        { label: 'Jenis', value: 'Daging perap panggang' },
        { label: 'Kawasan', value: 'Bandar Maharani · pusat Muar' },
        { label: 'Waktu', value: 'Sarapan lewat & petang' },
        { label: 'Semak', value: 'Premis & menu' },
      ],
      blocks: [
        {
          heading: 'Apa itu satay',
          paragraphs: [
            'Satay ialah daging diperap dan dibakar pada lidi, dihidang dengan kuah kacang, ketupat dan timun. Di Muar, ia sering muncul sebagai pembuka selera atau makan ringan.',
          ],
        },
        {
          heading: 'Di mana mencari',
          bullets: [
            '**Bandar Maharani** — kedai dan gerai tempatan dengan satay.',
            '**Pusat Muar** — pilihan restoran keluarga dan gerai.',
            '**Taman Sri Tanjung** — sarapan dan snek berhampiran taman.',
          ],
        },
        {
          heading: 'Petua praktikal',
          callout: 'Waktu hidangan satay berbeza mengikut kedai. Semak hari operasi dan sahkan kuah kacang disediakan sebelum duduk.',
        },
      ],
      faqs: [
        { q: 'Di mana satay Muar paling terkenal?', a: 'Tiada satu kedai rasmi yang disahkan. Cari di sekitar Bandar Maharani dan pusat Muar; semak peta dan waktu operasi.' },
        { q: 'Boleh untuk sarapan?', a: 'Sesetengah kedai menyediakan satay pada waktu sarapan lewat, tetapi sahkan dengan premis.' },
        { q: 'Ada pilihan ayam atau daging?', a: 'Pilihan berbeza mengikut kedai; tanya sendiri semasa memesan.' },
        { q: 'Berapa harga biasa?', a: 'Harga belum disahkan pada 19 Oktober 2026; tanya premis secara terus.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Satay Guide — What It Is & Where to Look',
        description: 'Muar satay: a late breakfast or light bite, where to look and practical tips.',
      },
      card: { title: 'Muar satay', text: 'Types of satay, where to look and tips.' },
      kicker: 'Muar food',
      h1: 'Satay: Muar appetiser.',
      lead: 'Muar satay works as a late breakfast or light bite, depending on the shop. Look around Bandar Maharani and the Muar food areas, then confirm which premises are active.',
      facts: [
        { label: 'Type', value: 'Marinated grilled meat' },
        { label: 'Areas', value: 'Bandar Maharani · central Muar' },
        { label: 'Timing', value: 'Late breakfast & afternoon' },
        { label: 'Check', value: 'Premises & menu' },
      ],
      blocks: [
        {
          heading: 'What is satay',
          paragraphs: [
            'Satay is marinated meat grilled on skewers, served with peanut sauce, ketupat and cucumber. In Muar it often appears as an appetiser or light bite.',
          ],
        },
        {
          heading: 'Where to look',
          bullets: [
            '**Bandar Maharani** — local shops and stalls with satay.',
            '**Central Muar** — family restaurants and stall choices.',
            '**Taman Sri Tanjung** — breakfast and snacks near the park.',
          ],
        },
        {
          heading: 'Practical tips',
          callout: 'Satay serving times vary by shop. Check operating days and confirm peanut sauce is served before you sit down.',
        },
      ],
      faqs: [
        { q: 'Where is Muar satay most known?', a: 'No single confirmed shop. Look around Bandar Maharani and central Muar; check the map and opening hours.' },
        { q: 'Can it be breakfast?', a: 'Some shops serve satay at late breakfast, but confirm with the premises.' },
        { q: 'Chicken or meat options?', a: 'Options vary by shop; ask when ordering.' },
        { q: 'What is the usual price?', a: 'Prices were not confirmed on 19 October 2026; ask the premises directly.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡沙爹指南｜是什么、哪里找',
        description: '麻坡沙爹（satay）：可作稍晚早餐或轻食，去哪里找与实用建议。',
      },
      card: { title: '麻坡沙爹', text: '沙爹种类、哪里找与建议。' },
      kicker: '麻坡美食',
      h1: '沙爹：麻坡开胃小食。',
      lead: '麻坡沙爹可作稍晚的早餐或轻食，视店家而定。可在皇城（Bandar Maharani）与麻坡美食区一带寻找，再确认哪些店家仍在营业。',
      facts: [
        { label: '类型', value: '腌烤肉串' },
        { label: '区域', value: '皇城 · 麻坡市区' },
        { label: '时段', value: '稍晚早餐与下午' },
        { label: '确认', value: '店家与菜单' },
      ],
      blocks: [
        {
          heading: '什么是沙爹',
          paragraphs: [
            '沙爹是腌过的肉串烤制，配花生酱、马来粽与黄瓜。在麻坡常作为开胃菜或轻食出现。',
          ],
        },
        {
          heading: '去哪里找',
          bullets: [
            '**皇城 Bandar Maharani** — 有沙爹的本地店与摊位。',
            '**麻坡市区** — 家庭餐馆与摊位选择。',
            '**Taman Sri Tanjung** — 园区附近有早餐与小吃。',
          ],
        },
        {
          heading: '实用建议',
          callout: '沙爹供应时段因店而异。请查营业日，并坐下前确认有提供花生酱。',
        },
      ],
      faqs: [
        { q: '麻坡沙爹最有名的是哪家？', a: '没有确认的单一家店。可在皇城与麻坡市区一带寻找；出发前查地图与营业时间。' },
        { q: '可以当早餐吗？', a: '部分店家在稍晚的早餐时段提供沙爹，但请向店家确认。' },
        { q: '有鸡肉或肉串选择吗？', a: '选择因店而异；点餐时请直接询问。' },
        { q: '一般多少钱？', a: '截至 2026 年 10 月 19 日价格未确认；请直接向店家询问。' },
      ],
    },
  },

  'muar-seafood-jalan-bentayan': {
    ms: {
      meta: {
        title: 'Makanan Laut Jalan Bentayan Muar — Panduan',
        description: 'Jalan Bentayan Muar: ikan bakar, lauk salai dan rasa malam; di mana mencari dan petua praktikal.',
      },
      card: { title: 'Seafood Jalan Bentayan', text: 'Ikan bakar & lauk salai, di mana mencari dan petua.' },
      kicker: 'Makanan Muar',
      h1: 'Jalan Bentayan: petang hingga malam Muar.',
      lead: 'Jalan Bentayan dikenali sebagai kawasan makan malam dengan ikan bakar, lauk salai dan rasa Melayu/Johor. Ia salah satu pilihan paling aktif selepas senja, sesuai digabungkan dengan lawatan Tanjung Emas.',
      facts: [
        { label: 'Fokus', value: 'Ikan bakar · lauk salai' },
        { label: 'Kawasan', value: 'Jalan Bentayan, Muar' },
        { label: 'Waktu', value: 'Petang hingga malam' },
        { label: 'Semak', value: 'Premis & menu' },
      ],
      blocks: [
        {
          heading: 'Apa yang ada di Jalan Bentayan',
          paragraphs: [
            'Jalan Bentayan lazimnya lebih aktif pada waktu petang dan malam, dengan gerai ikan bakar, lauk salai dan hidangan Melayu/Johor.',
          ],
        },
        {
          heading: 'Petua mencari',
          bullets: [
            'Gunakan peta untuk mencari gerai yang masih aktif pada jam anda tiba.',
            'Bandingkan menu dan harga di beberapa gerai sebelum duduk.',
            'Datang lebih awal pada hujung minggu untuk mengelakkan barisan.',
          ],
        },
        {
          heading: 'Sebelum pergi',
          callout: 'Premis, menu dan waktu operasi boleh berubah. Semak peta dan ulasan terkini sebelum bergerak, terutamanya jika anda datang lewat malam.',
        },
      ],
      faqs: [
        { q: 'Di mana Jalan Bentayan?', a: 'Jalan Bentayan berada di Muar; gunakan peta untuk titik tepat dan gerai yang aktif.' },
        { q: 'Ada ikan bakar pada waktu malam?', a: 'Ya, kawasan ini lazimnya lebih aktif pada petang dan malam. Sahkan premis semasa.' },
        { q: 'Boleh tahan lama beratur?', a: 'Hujung minggu dan cuti boleh sibuk; datang lebih awal atau pilih waktu luar puncak.' },
        { q: 'Berapa harga biasa?', a: 'Harga belum disahkan pada 19 Oktober 2026; bandingkan papan harga di lokasi.' },
      ],
    },
    en: {
      meta: {
        title: 'Jalan Bentayan Seafood Muar — Guide',
        description: 'Jalan Bentayan Muar: grilled fish, smoked dishes and night flavours; where to look and practical tips.',
      },
      card: { title: 'Jalan Bentayan seafood', text: 'Grilled fish & smoked dishes, where to look and tips.' },
      kicker: 'Muar food',
      h1: 'Jalan Bentayan: Muar from afternoon to night.',
      lead: 'Jalan Bentayan is known as an evening food area with grilled fish, smoked dishes and Malay/Johor flavours. It is one of the most active choices after sunset, easy to pair with a Tanjung Emas visit.',
      facts: [
        { label: 'Focus', value: 'Grilled fish · smoked dishes' },
        { label: 'Area', value: 'Jalan Bentayan, Muar' },
        { label: 'Timing', value: 'Afternoon into night' },
        { label: 'Check', value: 'Premises & menu' },
      ],
      blocks: [
        {
          heading: 'What is on Jalan Bentayan',
          paragraphs: [
            'Jalan Bentayan is usually more active in the late afternoon and evening, with grilled-fish stalls, smoked dishes and Malay/Johor cooking.',
          ],
        },
        {
          heading: 'Tips for finding',
          bullets: [
            'Use the map to find stalls still active at your arrival hour.',
            'Compare menus and prices across a few stalls before sitting down.',
            'Come earlier on weekends to avoid queues.',
          ],
        },
        {
          heading: 'Before you go',
          callout: 'Premises, menus and hours can change. Check the map and recent reviews before you move, especially if you arrive late at night.',
        },
      ],
      faqs: [
        { q: 'Where is Jalan Bentayan?', a: 'Jalan Bentayan is in Muar; use the map for the exact spot and active stalls.' },
        { q: 'Is there grilled fish at night?', a: 'Yes, this area is usually more active in the late afternoon and evening. Confirm current premises.' },
        { q: 'Will I queue long?', a: 'Weekends and holidays can be busy; come earlier or choose off-peak hours.' },
        { q: 'What is the usual price?', a: 'Prices were not confirmed on 19 October 2026; compare price boards on site.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡 Jalan Bentayan 海鲜指南',
        description: '麻坡 Jalan Bentayan：烤鱼、烟熏料理与夜市风味；去哪里找与实用建议。',
      },
      card: { title: 'Jalan Bentayan 海鲜', text: '烤鱼与烟熏料理、哪里找与建议。' },
      kicker: '麻坡美食',
      h1: 'Jalan Bentayan：麻坡从午后到夜晚。',
      lead: 'Jalan Bentayan 以傍晚美食区闻名，有烤鱼、烟熏料理与马来／柔佛风味。日落后这里尤其热闹，很适合与 Tanjung Emas 行程串在一起。',
      facts: [
        { label: '重点', value: '烤鱼 · 烟熏料理' },
        { label: '区域', value: 'Jalan Bentayan, 麻坡' },
        { label: '时段', value: '午后到夜间' },
        { label: '确认', value: '店家与菜单' },
      ],
      blocks: [
        {
          heading: 'Jalan Bentayan 有什么',
          paragraphs: [
            'Jalan Bentayan 通常在傍晚与夜间较热闹，有烤鱼摊、烟熏料理与马来／柔佛式料理。',
          ],
        },
        {
          heading: '寻找建议',
          bullets: [
            '用地图找在你抵达时段仍在营业的摊位。',
            '坐下前比较几家摊位的菜单与价格。',
            '周末请提早到达以避免排队。',
          ],
        },
        {
          heading: '出发前',
          callout: '店家、菜单与营业时间可能变动。出发前请查地图与近期评论，若深夜前往更要先确认。',
        },
      ],
      faqs: [
        { q: 'Jalan Bentayan 在哪里？', a: 'Jalan Bentayan 位于麻坡；请用地图确认确切位置与营业摊位。' },
        { q: '晚上有烤鱼吗？', a: '有，这一带通常傍晚与夜间较热闹。请确认当下店家。' },
        { q: '会排很久吗？', a: '周末与假日可能较忙；请提早或避开高峰时段。' },
        { q: '一般多少钱？', a: '截至 2026 年 10 月 19 日价格未确认；请现场比较价目。' },
      ],
    },
  },

  'muar-night-market-food': {
    ms: {
      meta: {
        title: 'Makanan Pasar Malam Muar — Panduan & Tips',
        description: 'Pasar malam Muar: gerai makanan petang, apa yang biasa ada dan petua mencari tanpa menamakan satu premis.',
      },
      card: { title: 'Pasar malam Muar', text: 'Gerai makanan, apa yang ada dan petua.' },
      kicker: 'Makanan Muar',
      h1: 'Pasar malam: rasa petang Muar.',
      lead: 'Beberapa kawasan Muar mempunyai gerai makanan pada sebelah petang atau malam, selain restoran tetap. Daripada mengejar satu nama, gunakan peta untuk mencari gerai yang aktif pada malam anda berada.',
      facts: [
        { label: 'Fokus', value: 'Gerai makanan petang' },
        { label: 'Kawasan', value: 'Sekitar Muar' },
        { label: 'Waktu', value: 'Petang & malam' },
        { label: 'Semak', value: 'Hari & lokasi' },
      ],
      blocks: [
        {
          heading: 'Apa yang biasa ada',
          paragraphs: [
            'Pasar malam dan gerai petang selalunya menawarkan snek goreng, mi, kuih dan minuman. Pilihan berbeza mengikut lokasi dan hari.',
          ],
        },
        {
          heading: 'Cara mencari',
          bullets: [
            'Semak peta dan ulasan tempatan untuk lokasi pasar malam semasa.',
            'Sahkan hari operasi — sesetengah pasar hanya pada hari tertentu.',
            'Datang lebih awal untuk pilihan yang lebih luas.',
          ],
        },
        {
          heading: 'Petua praktikal',
          callout: 'Hari dan lokasi pasar malam boleh berubah. Sahkan dengan peta atau sumber tempatan sebelum bergerak.',
        },
      ],
      faqs: [
        { q: 'Di mana pasar malam Muar?', a: 'Lokasi berubah mengikut hari dan kawasan. Semak peta atau sumber tempatan untuk pasar malam semasa.' },
        { q: 'Setiap hari ada?', a: 'Tidak semestinya; sesetengah pasar hanya pada hari tertentu. Sahkan hari operasi.' },
        { q: 'Apa makanan biasa?', a: 'Snek goreng, mi, kuih dan minuman lazimnya terdapat; pilihan berbeza mengikut lokasi.' },
        { q: 'Boleh bawa keluarga?', a: 'Ya, gerai petang biasanya mesra keluarga, tetapi semak kesesakan dan kebersihan di lokasi.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Night Market Food — Guide & Tips',
        description: 'Muar night market: evening food stalls, what is usually there and tips for finding them without naming one premise.',
      },
      card: { title: 'Muar night market', text: 'Food stalls, what is there and tips.' },
      kicker: 'Muar food',
      h1: 'Night market: Muar evening flavours.',
      lead: 'Some areas of Muar have food stalls in the late afternoon or evening, alongside fixed restaurants. Rather than chasing one name, use the map to find stalls active on the night you are there.',
      facts: [
        { label: 'Focus', value: 'Evening food stalls' },
        { label: 'Area', value: 'Around Muar' },
        { label: 'Timing', value: 'Afternoon & night' },
        { label: 'Check', value: 'Day & location' },
      ],
      blocks: [
        {
          heading: 'What is usually there',
          paragraphs: [
            'Night markets and evening stalls usually offer fried snacks, noodles, kuih and drinks. The selection varies by location and day.',
          ],
        },
        {
          heading: 'How to find',
          bullets: [
            'Check the map and local reviews for current night-market locations.',
            'Confirm operating days — some markets run only on certain days.',
            'Arrive earlier for a wider choice.',
          ],
        },
        {
          heading: 'Practical tips',
          callout: 'Night-market days and locations can change. Confirm with the map or local source before you move.',
        },
      ],
      faqs: [
        { q: 'Where is the Muar night market?', a: 'Location changes by day and area. Check the map or local source for the current night market.' },
        { q: 'Is it every day?', a: 'Not necessarily; some markets run only on certain days. Confirm operating days.' },
        { q: 'What food is usual?', a: 'Fried snacks, noodles, kuih and drinks are common; selection varies by location.' },
        { q: 'Good for families?', a: 'Yes, evening stalls are usually family friendly, but check crowding and hygiene on site.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡夜市美食指南与建议',
        description: '麻坡夜市：傍晚美食摊、通常有什么、以及寻找建议（不点名单一店家）。',
      },
      card: { title: '麻坡夜市', text: '美食摊、有什么与建议。' },
      kicker: '麻坡美食',
      h1: '夜市：麻坡的傍晚风味。',
      lead: '麻坡部分区域在傍晚或夜间有美食摊，与固定餐馆并存。与其只追一个名字，不如用地图找你当晚仍在营业的摊位。',
      facts: [
        { label: '重点', value: '傍晚美食摊' },
        { label: '区域', value: '麻坡一带' },
        { label: '时段', value: '午后与夜间' },
        { label: '确认', value: '日期与地点' },
      ],
      blocks: [
        {
          heading: '通常有什么',
          paragraphs: [
            '夜市与傍晚摊位通常提供炸物小吃、面食、糕点与饮料。选择因地点与日子而异。',
          ],
        },
        {
          heading: '如何寻找',
          bullets: [
            '用地图与在地评论查找当下夜市位置。',
            '确认营业日——有些市集只在特定日子。',
            '提早到达选择更多。',
          ],
        },
        {
          heading: '实用建议',
          callout: '夜市日期与地点可能变动。出发前请用地图或在地来源确认。',
        },
      ],
      faqs: [
        { q: '麻坡夜市在哪里？', a: '位置随日子与区域变动。请用地图或在地来源查找当下夜市。' },
        { q: '每天都有吗？', a: '不一定；有些市集只在特定日子。请确认营业日。' },
        { q: '通常有什么吃的？', a: '炸物小吃、面食、糕点与饮料常见；选择因地点而异。' },
        { q: '适合带家人吗？', a: '适合，傍晚摊位通常对亲子友好，但请现场留意人潮与卫生。' },
      ],
    },
  },

  'muar-breakfast-spots': {
    ms: {
      meta: {
        title: 'Tempat Sarapan Muar — Panduan & Tips',
        description: 'Sarapan Muar: kopitiam, mee bandung dan snek pagi; di mana mencari dan petua sebelum pergi.',
      },
      card: { title: 'Tempat sarapan Muar', text: 'Kopitiam, mi pagi dan petua.' },
      kicker: 'Makanan Muar',
      h1: 'Sarapan: permulaan hari Muar.',
      lead: 'Sarapan di Muar selalunya bermula awal, dengan kopitiam, mee bandung dan snek pagi di sekitar Bandar Maharani dan Taman Sri Tanjung. Datang awal untuk pilihan yang lebih luas.',
      facts: [
        { label: 'Pilihan', value: 'Kopitiam · mee bandung' },
        { label: 'Kawasan', value: 'Bandar Maharani · Taman Sri Tanjung' },
        { label: 'Waktu', value: 'Pagi awal' },
        { label: 'Semak', value: 'Waktu operasi' },
      ],
      blocks: [
        {
          heading: 'Apa untuk sarapan',
          paragraphs: [
            'Sarapan tempatan selalunya merangkumi kopi, roti bakar, mee bandung dan hidangan ringan. Kopitiam sering menjadi titik permulaan.',
          ],
        },
        {
          heading: 'Di mana mencari',
          bullets: [
            '**Bandar Maharani** — pusat bandar lama dengan kopitiam dan gerai pagi.',
            '**Taman Sri Tanjung** — sarapan berhampiran Tanjung Emas.',
            '**Jalan utama Muar** — pilihan gerai sarapan.',
          ],
        },
        {
          heading: 'Petua praktikal',
          callout: 'Sesetengah hidangan popular habis lebih awal. Datang sebelum 9:00 pagi untuk pilihan yang lebih luas.',
        },
      ],
      faqs: [
        { q: 'Di mana sarapan berhampiran Tanjung Emas?', a: 'Cari di Taman Sri Tanjung dan Bandar Maharani. Semak peta dan waktu operasi sebelum pergi.' },
        { q: 'Ada kopitiam buka awal?', a: 'Ya, beberapa kopitiam di pusat bandar lama buka awal; sahkan dengan premis.' },
        { q: 'Boleh sarapan sebelum ke taman?', a: 'Boleh. Taman Sri Tanjung menyediakan pilihan sarapan berhampiran Tanjung Emas.' },
        { q: 'Berapa harga biasa?', a: 'Harga belum disahkan pada 19 Oktober 2026; tanya premis secara terus.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Breakfast Spots — Guide & Tips',
        description: 'Muar breakfast: kopitiam, mee bandung and morning snacks; where to look and tips before you go.',
      },
      card: { title: 'Muar breakfast spots', text: 'Kopitiam, morning noodles and tips.' },
      kicker: 'Muar food',
      h1: 'Breakfast: the start of a Muar day.',
      lead: 'Breakfast in Muar often starts early, with kopitiam, mee bandung and morning snacks around Bandar Maharani and Taman Sri Tanjung. Come early for a wider choice.',
      facts: [
        { label: 'Options', value: 'Kopitiam · mee bandung' },
        { label: 'Areas', value: 'Bandar Maharani · Taman Sri Tanjung' },
        { label: 'Timing', value: 'Early morning' },
        { label: 'Check', value: 'Opening hours' },
      ],
      blocks: [
        {
          heading: 'What for breakfast',
          paragraphs: [
            'Local breakfast usually includes coffee, toast, mee bandung and light dishes. The kopitiam often serves as the starting point.',
          ],
        },
        {
          heading: 'Where to look',
          bullets: [
            '**Bandar Maharani** — old town centre with kopitiam and morning stalls.',
            '**Taman Sri Tanjung** — breakfast near Tanjung Emas.',
            '**Main Muar roads** — breakfast stall choices.',
          ],
        },
        {
          heading: 'Practical tips',
          callout: 'Some popular dishes sell out earlier. Arrive before 9:00 am for a wider choice.',
        },
      ],
      faqs: [
        { q: 'Where is breakfast near Tanjung Emas?', a: 'Look at Taman Sri Tanjung and Bandar Maharani. Check the map and opening hours before you go.' },
        { q: 'Are there early kopitiam?', a: 'Yes, several kopitiam in the old town open early; confirm with the premises.' },
        { q: 'Can I eat before the park?', a: 'Yes. Taman Sri Tanjung offers breakfast options near Tanjung Emas.' },
        { q: 'What is the usual price?', a: 'Prices were not confirmed on 19 October 2026; ask the premises directly.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡早餐指南与建议',
        description: '麻坡早餐：咖啡店、麻坡面与早晨点心；去哪里找与出发前建议。',
      },
      card: { title: '麻坡早餐', text: '咖啡店、晨间面食与建议。' },
      kicker: '麻坡美食',
      h1: '早餐：麻坡一天的开始。',
      lead: '麻坡早餐通常开始得早，皇城（Bandar Maharani）与 Taman Sri Tanjung 一带常有咖啡店、麻坡面与晨间小吃。早点到选择更多。',
      facts: [
        { label: '选择', value: '咖啡店 · 麻坡面' },
        { label: '区域', value: '皇城 · Taman Sri Tanjung' },
        { label: '时段', value: '清晨' },
        { label: '确认', value: '营业时间' },
      ],
      blocks: [
        {
          heading: '早餐吃什么',
          paragraphs: [
            '在地早餐通常包含咖啡、烤面包、麻坡面与轻食。咖啡店常作为起点。',
          ],
        },
        {
          heading: '去哪里找',
          bullets: [
            '**皇城 Bandar Maharani** — 老城中心有咖啡店与早摊。',
            '**Taman Sri Tanjung** — 靠近 Tanjung Emas 的早餐。',
            '**麻坡主要道路** — 早餐摊位选择。',
          ],
        },
        {
          heading: '实用建议',
          callout: '部分热门早餐较早售完。上午 9 点前到达选择更多。',
        },
      ],
      faqs: [
        { q: 'Tanjung Emas 附近哪里吃早餐？', a: '可在 Taman Sri Tanjung 与皇城一带寻找。出发前查地图与营业时间。' },
        { q: '有早开的咖啡店吗？', a: '有，老城几家咖啡店开得早；请向店家确认。' },
        { q: '去园区前能吃吗？', a: '可以。Taman Sri Tanjung 在 Tanjung Emas 附近就有早餐选择。' },
        { q: '一般多少钱？', a: '截至 2026 年 10 月 19 日价格未确认；请直接向店家询问。' },
      ],
    },
  },

  'muar-kopitiam-culture': {
    ms: {
      meta: {
        title: 'Budaya Kopitiam Muar — Panduan',
        description: 'Kopitiam Muar: kopi, roti bakar dan suasana pagi; di mana mencari dan petua tanpa menamakan satu premis.',
      },
      card: { title: 'Budaya kopitiam', text: 'Kopi & roti bakar, di mana mencari dan petua.' },
      kicker: 'Makanan Muar',
      h1: 'Kopitiam: pagi Muar yang tenang.',
      lead: 'Kopitiam ialah sebahagian dari rutin pagi Muar — kopi pekat, roti bakar dan perbualan. Daripada mengejar satu kedai, gunakan Bandar Maharani sebagai panduan, kemudian sahkan premis yang masih aktif.',
      facts: [
        { label: 'Minuman', value: 'Kopi pekat · teh' },
        { label: 'Kawasan', value: 'Bandar Maharani' },
        { label: 'Waktu', value: 'Pagi' },
        { label: 'Semak', value: 'Premis & menu' },
      ],
      blocks: [
        {
          heading: 'Apa itu kopitiam',
          paragraphs: [
            'Kopitiam tradisional menawarkan kopi dan teh pekat, roti bakar dengan kaya atau mentega, dan telur separuh masak. Ia ruang santai untuk permulaan hari.',
          ],
        },
        {
          heading: 'Di mana mencari',
          bullets: [
            '**Bandar Maharani** — pusat bandar lama dengan banyak pilihan kopitiam.',
            '**Taman Sri Tanjung** — sarapan dan kopi berhampiran taman.',
            '**Jalan utama Muar** — gerai dan kafe tempatan.',
          ],
        },
        {
          heading: 'Petua praktikal',
          callout: 'Waktu buka berbeza mengikut premis. Semak hari operasi dan datang awal untuk suasana pagi yang tenang.',
        },
      ],
      faqs: [
        { q: 'Di mana kopitiam Muar paling terkenal?', a: 'Tiada satu kedai rasmi yang disahkan. Cari di sekitar Bandar Maharani; semak peta dan waktu operasi.' },
        { q: 'Ada roti bakar?', a: 'Ya, roti bakar dengan kaya atau mentega lazimnya tersedia; sahkan di premis.' },
        { q: 'Boleh duduk lama?', a: 'Kopitiam tradisional biasanya mesra duduk santai, tetapi hormati ruang premis.' },
        { q: 'Berapa harga biasa?', a: 'Harga belum disahkan pada 19 Oktober 2026; tanya premis secara terus.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Kopitiam Culture — Guide',
        description: 'Muar kopitiam: coffee, toast and the morning mood; where to look and tips without naming one premise.',
      },
      card: { title: 'Kopitiam culture', text: 'Coffee & toast, where to look and tips.' },
      kicker: 'Muar food',
      h1: 'Kopitiam: a calm Muar morning.',
      lead: 'The kopitiam is part of Muar’s morning routine — strong coffee, toast and conversation. Rather than chasing one shop, use Bandar Maharani as your guide, then confirm which premises are active.',
      facts: [
        { label: 'Drinks', value: 'Strong coffee · tea' },
        { label: 'Area', value: 'Bandar Maharani' },
        { label: 'Timing', value: 'Morning' },
        { label: 'Check', value: 'Premises & menu' },
      ],
      blocks: [
        {
          heading: 'What is a kopitiam',
          paragraphs: [
            'A traditional kopitiam offers strong coffee and tea, toast with kaya or butter, and soft-boiled eggs. It is a relaxed space to start the day.',
          ],
        },
        {
          heading: 'Where to look',
          bullets: [
            '**Bandar Maharani** — old town centre with many kopitiam choices.',
            '**Taman Sri Tanjung** — breakfast and coffee near the park.',
            '**Main Muar roads** — local stalls and cafes.',
          ],
        },
        {
          heading: 'Practical tips',
          callout: 'Opening hours vary by premises. Check operating days and arrive early for a calm morning mood.',
        },
      ],
      faqs: [
        { q: 'Where is Muar kopitiam most known?', a: 'No single confirmed shop. Look around Bandar Maharani; check the map and opening hours.' },
        { q: 'Is there toast?', a: 'Yes, toast with kaya or butter is usually available; confirm at the premises.' },
        { q: 'Can I sit long?', a: 'Traditional kopitiam usually welcome relaxed sitting, but respect the premises space.' },
        { q: 'What is the usual price?', a: 'Prices were not confirmed on 19 October 2026; ask the premises directly.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡咖啡店（Kopitiam）文化指南',
        description: '麻坡 kopitiam：咖啡、烤面包与早晨氛围；去哪里找与建议（不点名单一店家）。',
      },
      card: { title: '咖啡店文化', text: '咖啡与烤面包、哪里找与建议。' },
      kicker: '麻坡美食',
      h1: 'Kopitiam：麻坡宁静的清晨。',
      lead: '咖啡店是麻坡清晨日常的一部分——浓咖啡、烤面包与闲谈。与其只追一家店，不如以皇城（Bandar Maharani）为指引，再确认哪些店家仍在营业。',
      facts: [
        { label: '饮品', value: '浓咖啡 · 茶' },
        { label: '区域', value: '皇城' },
        { label: '时段', value: '早晨' },
        { label: '确认', value: '店家与菜单' },
      ],
      blocks: [
        {
          heading: '什么是 kopitiam',
          paragraphs: [
            '传统咖啡店提供浓咖啡与茶、涂咖椰或奶油的烤面包，以及半熟蛋。它是开启一天的悠闲空间。',
          ],
        },
        {
          heading: '去哪里找',
          bullets: [
            '**皇城 Bandar Maharani** — 老城中心有许多咖啡店选择。',
            '**Taman Sri Tanjung** — 园区附近的早餐与咖啡。',
            '**麻坡主要道路** — 本地摊位与咖啡馆。',
          ],
        },
        {
          heading: '实用建议',
          callout: '营业时间因店而异。请查营业日，并早起享受宁静的清晨氛围。',
        },
      ],
      faqs: [
        { q: '麻坡咖啡店最有名的是哪家？', a: '没有确认的单一家店。可在皇城一带寻找；出发前查地图与营业时间。' },
        { q: '有烤面包吗？', a: '有，涂咖椰或奶油的烤面包通常供应；请于店家确认。' },
        { q: '可以坐很久吗？', a: '传统咖啡店通常欢迎悠闲久坐，但请尊重店家空间。' },
        { q: '一般多少钱？', a: '截至 2026 年 10 月 19 日价格未确认；请直接向店家询问。' },
      ],
    },
  },

  'muar-cendol-desserts': {
    ms: {
      meta: {
        title: 'Cendol & Pencuci Mulut Muar — Panduan',
        description: 'Cendol dan pencuci mulut Muar: apa itu, di mana mencari dan petua tanpa menamakan satu premis.',
      },
      card: { title: 'Cendol & pencuci', text: 'Minuman sejuk, di mana mencari dan petua.' },
      kicker: 'Makanan Muar',
      h1: 'Cendol: pencuci mulut Muar.',
      lead: 'Cendol ialah pencuci mulut berasaskan ais dengan santan, gula melaka dan jeli hijau. Di Muar, ia sering dicari sebagai minuman sejuk selepas makan. Gunakan kawasan sekitar Bandar Maharani dan Taman Sri Tanjung sebagai panduan.',
      facts: [
        { label: 'Jenis', value: 'Minuman ais santan' },
        { label: 'Kawasan', value: 'Bandar Maharani · Taman Sri Tanjung' },
        { label: 'Waktu', value: 'Siang & petang' },
        { label: 'Semak', value: 'Premis & menu' },
      ],
      blocks: [
        {
          heading: 'Apa itu cendol',
          paragraphs: [
            'Cendol biasanya menggabungkan ais, santan, gula melaka dan jeli hijau daripada tepung beras. Ia minuman sejuk yang sesuai untuk cuaca panas.',
          ],
        },
        {
          heading: 'Di mana mencari',
          bullets: [
            '**Bandar Maharani** — gerai pencuci mulut dan kuih tempatan.',
            '**Taman Sri Tanjung** — snek sejuk berhampiran taman.',
            '**Jalan utama Muar** — kedai minuman dan pencuci mulut.',
          ],
        },
        {
          heading: 'Petua praktikal',
          callout: 'Gula melaka dan resipi berbeza mengikut premis. Semak peta dan sahkan premis yang masih aktif sebelum pergi.',
        },
      ],
      faqs: [
        { q: 'Di mana cendol Muar paling terkenal?', a: 'Tiada satu gerai rasmi yang disahkan. Cari di sekitar Bandar Maharani dan Taman Sri Tanjung; semak peta.' },
        { q: 'Boleh untuk kanak-kanak?', a: 'Ya, cendol selamat sebagai minuman sejuk, tetapi semak kandungan dengan premis jika perlu.' },
        { q: 'Ada versi tidak manis?', a: 'Tahap kemanisan berbeza mengikut premis; tanya sendiri semasa memesan.' },
        { q: 'Berapa harga biasa?', a: 'Harga belum disahkan pada 19 Oktober 2026; tanya premis secara terus.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Cendol & Desserts — Guide',
        description: 'Muar cendol and desserts: what it is, where to look and tips without naming one premise.',
      },
      card: { title: 'Cendol & desserts', text: 'Cold drink, where to look and tips.' },
      kicker: 'Muar food',
      h1: 'Cendol: Muar dessert.',
      lead: 'Cendol is an iced dessert with coconut milk, palm sugar and green jelly. In Muar it is often sought as a cold drink after a meal. Use the areas around Bandar Maharani and Taman Sri Tanjung as your guide.',
      facts: [
        { label: 'Type', value: 'Iced coconut drink' },
        { label: 'Areas', value: 'Bandar Maharani · Taman Sri Tanjung' },
        { label: 'Timing', value: 'Daytime & afternoon' },
        { label: 'Check', value: 'Premises & menu' },
      ],
      blocks: [
        {
          heading: 'What is cendol',
          paragraphs: [
            'Cendol usually combines ice, coconut milk, palm sugar and green rice-flour jelly. It is a cold drink suited to hot weather.',
          ],
        },
        {
          heading: 'Where to look',
          bullets: [
            '**Bandar Maharani** — dessert stalls and local kuih.',
            '**Taman Sri Tanjung** — cold snacks near the park.',
            '**Main Muar roads** — drink and dessert shops.',
          ],
        },
        {
          heading: 'Practical tips',
          callout: 'Palm sugar and recipes differ by premises. Check the map and confirm active premises before you go.',
        },
      ],
      faqs: [
        { q: 'Where is Muar cendol most known?', a: 'No single confirmed stall. Look around Bandar Maharani and Taman Sri Tanjung; check the map.' },
        { q: 'Is it for children?', a: 'Yes, cendol is a safe cold drink, but check contents with the premises if needed.' },
        { q: 'Is there a less-sweet version?', a: 'Sweetness varies by premises; ask when ordering.' },
        { q: 'What is the usual price?', a: 'Prices were not confirmed on 19 October 2026; ask the premises directly.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡 Cendol 与甜点指南',
        description: '麻坡 cendol 与甜点：是什么、去哪里找，以及建议（不点名单一店家）。',
      },
      card: { title: 'Cendol 与甜点', text: '冰饮、哪里找与建议。' },
      kicker: '麻坡美食',
      h1: 'Cendol：麻坡甜点。',
      lead: 'Cendol 是加椰浆、椰糖与绿色粉条 jelly 的冰品。在麻坡，它常被当作餐后冷饮。请以皇城（Bandar Maharani）与 Taman Sri Tanjung 一带为指引。',
      facts: [
        { label: '类型', value: '椰浆冰饮' },
        { label: '区域', value: '皇城 · Taman Sri Tanjung' },
        { label: '时段', value: '白天与下午' },
        { label: '确认', value: '店家与菜单' },
      ],
      blocks: [
        {
          heading: '什么是 cendol',
          paragraphs: [
            'Cendol 通常结合冰、椰浆、椰糖与绿色米浆 jelly。它是适合炎热天气的冷饮。',
          ],
        },
        {
          heading: '去哪里找',
          bullets: [
            '**皇城 Bandar Maharani** — 甜点摊与在地糕点。',
            '**Taman Sri Tanjung** — 园区附近的冰凉小吃。',
            '**麻坡主要道路** — 饮料与甜点店。',
          ],
        },
        {
          heading: '实用建议',
          callout: '椰糖与配方因店而异。请查地图并确认营业摊位后再前往。',
        },
      ],
      faqs: [
        { q: '麻坡 cendol 最有名的是哪家？', a: '没有确认的单一张摊。可在皇城与 Taman Sri Tanjung 一带寻找；请查地图。' },
        { q: '小孩能喝吗？', a: '能，cendol 是安全的冰饮，但如有需要请向店家确认成分。' },
        { q: '有少糖版本吗？', a: '甜度因店而异；点餐时请直接询问。' },
        { q: '一般多少钱？', a: '截至 2026 年 10 月 19 日价格未确认；请直接向店家询问。' },
      ],
    },
  },

  'muar-food-near-tanjung-emas': {
    ms: {
      meta: {
        title: 'Makanan Berhampiran Tanjung Emas Muar — Panduan',
        description: 'Makanan dekat Tanjung Emas: kawasan sekitar Taman Sri Tanjung, pilihan awal dan petua praktikal.',
      },
      card: { title: 'Makanan dekat Tanjung Emas', text: 'Kawasan berdekatan, pilihan awal dan petua.' },
      kicker: 'Makanan Muar',
      h1: 'Cari makan berhampiran Tanjung Emas.',
      lead: 'Selepas berjalan di Tanjung Emas, pilihan makan terdekat berada di sekitar Taman Sri Tanjung, kemudian Bandar Maharani dan Jalan Bentayan. Susun makan selepas senja supaya tidak perlu bergerak dua kali.',
      facts: [
        { label: 'Paling dekat', value: 'Taman Sri Tanjung' },
        { label: 'Pilihan lanjut', value: 'Bandar Maharani · Jalan Bentayan' },
        { label: 'Waktu', value: 'Sarapan & makan malam' },
        { label: 'Semak', value: 'Waktu operasi' },
      ],
      blocks: [
        {
          heading: 'Kawasan paling dekat',
          paragraphs: [
            'Taman Sri Tanjung menawarkan pilihan sarapan, kopi dan hidangan tempatan yang paling dekat dengan Tanjung Emas.',
          ],
        },
        {
          heading: 'Pilihan lanjut',
          bullets: [
            '**Bandar Maharani** — pusat bandar lama dengan kopitiam, mi dan snek.',
            '**Jalan Bentayan** — lebih aktif pada waktu malam dengan ikan bakar dan lauk salai.',
            '**Pusat Muar** — restoran keluarga dan gerai yang lebih luas.',
          ],
        },
        {
          heading: 'Petua praktikal',
          callout: 'Gabungkan makan dengan lawatan senja supaya hanya bergerak sekali. Semak peta dan waktu operasi sebelum bergerak.',
        },
      ],
      faqs: [
        { q: 'Di mana makan paling dekat dengan Tanjung Emas?', a: 'Taman Sri Tanjung adalah pilihan paling dekat. Semak peta dan waktu operasi sebelum pergi.' },
        { q: 'Ada makan malam berdekatan?', a: 'Untuk pilihan malam yang lebih luas, pergi ke Jalan Bentayan atau pusat bandar Muar. Sahkan waktu operasi.' },
        { q: 'Perlu tempah meja?', a: 'Kebanyakan gerai mengambil pelanggan terus masuk. Untuk kumpulan besar, hubungi premis lebih awal.' },
        { q: 'Berapa harga biasa?', a: 'Harga belum disahkan pada 19 Oktober 2026; tanya premis secara terus.' },
      ],
    },
    en: {
      meta: {
        title: 'Food Near Tanjung Emas Muar — Guide',
        description: 'Eating near Tanjung Emas: the areas around Taman Sri Tanjung, early options and practical tips.',
      },
      card: { title: 'Food near Tanjung Emas', text: 'Nearby areas, early options and tips.' },
      kicker: 'Muar food',
      h1: 'Finding food near Tanjung Emas.',
      lead: 'After walking at Tanjung Emas, the nearest food options sit around Taman Sri Tanjung, then Bandar Maharani and Jalan Bentayan. Combine the meal with your sunset visit so you only travel once.',
      facts: [
        { label: 'Closest', value: 'Taman Sri Tanjung' },
        { label: 'More options', value: 'Bandar Maharani · Jalan Bentayan' },
        { label: 'Timing', value: 'Breakfast & dinner' },
        { label: 'Check', value: 'Opening hours' },
      ],
      blocks: [
        {
          heading: 'The closest area',
          paragraphs: [
            'Taman Sri Tanjung offers breakfast, coffee and local dishes closest to Tanjung Emas.',
          ],
        },
        {
          heading: 'More options',
          bullets: [
            '**Bandar Maharani** — old town centre with kopitiam, noodles and snacks.',
            '**Jalan Bentayan** — more active at night with grilled fish and smoked dishes.',
            '**Central Muar** — wider choice of family restaurants and stalls.',
          ],
        },
        {
          heading: 'Practical tips',
          callout: 'Combine the meal with your sunset visit so you only travel once. Check the map and opening hours before you move.',
        },
      ],
      faqs: [
        { q: 'Where is the closest food to Tanjung Emas?', a: 'Taman Sri Tanjung is the closest option. Check the map and opening hours before you go.' },
        { q: 'Is there dinner nearby?', a: 'For wider evening choices, go to Jalan Bentayan or central Muar. Confirm current opening hours.' },
        { q: 'Do I need to reserve?', a: 'Most stalls take walk-ins. For large groups, call ahead.' },
        { q: 'What is the usual price?', a: 'Prices were not confirmed on 19 October 2026; ask the premises directly.' },
      ],
    },
    zh: {
      meta: {
        title: 'Tanjung Emas 麻坡周边美食指南',
        description: 'Tanjung Emas 附近觅食：Taman Sri Tanjung 周边区域、早餐选择与实用建议。',
      },
      card: { title: 'Tanjung Emas 周边美食', text: '附近区域、早期选择与建议。' },
      kicker: '麻坡美食',
      h1: '在 Tanjung Emas 附近找吃的。',
      lead: '走完 Tanjung Emas 后，最近的觅食选择位于 Taman Sri Tanjung 一带，接着是皇城（Bandar Maharani）与 Jalan Bentayan。把用餐与看日落排在一起，省一趟交通。',
      facts: [
        { label: '最近', value: 'Taman Sri Tanjung' },
        { label: '更多选择', value: '皇城 · Jalan Bentayan' },
        { label: '时段', value: '早餐与晚餐' },
        { label: '确认', value: '营业时间' },
      ],
      blocks: [
        {
          heading: '最近的区域',
          paragraphs: [
            'Taman Sri Tanjung 提供离 Tanjung Emas 最近的早餐、咖啡与在地料理。',
          ],
        },
        {
          heading: '更多选择',
          bullets: [
            '**皇城 Bandar Maharani** — 老城中心有咖啡店、面食与小吃。',
            '**Jalan Bentayan** — 夜间较热闹，有烤鱼与烟熏料理。',
            '**麻坡市区** — 家庭餐馆与摊位选择更多。',
          ],
        },
        {
          heading: '实用建议',
          callout: '把用餐与看日落排在一起，只跑一趟。出发前请查地图与营业时间。',
        },
      ],
      faqs: [
        { q: '离 Tanjung Emas 最近的美食在哪？', a: 'Taman Sri Tanjung 是最近的选择。出发前查地图与营业时间。' },
        { q: '附近有晚餐吗？', a: '想要更多夜间选择，可去 Jalan Bentayan 或麻坡市区。请确认当下营业时间。' },
        { q: '需要订位吗？', a: '多数摊位可直接入座。团体前往建议先致电。' },
        { q: '一般多少钱？', a: '截至 2026 年 10 月 19 日价格未确认；请直接向店家询问。' },
      ],
    },
  },
};
