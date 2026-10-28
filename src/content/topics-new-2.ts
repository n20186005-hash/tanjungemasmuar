import type { Locale } from '../i18n/locales';
import type { TopicContent } from './topics';
import { images } from '../data/market';

export type NewTopicId2 =
  | 'masjid-jamek-sultan-ibrahim-guide'
  | 'muar-clock-tower-guide'
  | 'maharani-mural-lane-guide'
  | 'tanjung-emas-sunset-point'
  | 'muar-river-promenade-walk'
  | 'muar-street-art-cultural-walk'
  | 'muar-photography-spots'
  | 'muar-bicycle-route'
  | 'muar-river-cruise-guide'
  | 'muar-fishing-and-coastal'
  | 'muar-half-day-itinerary'
  | 'muar-one-day-itinerary'
  | 'muar-weekend-itinerary'
  | 'muar-family-itinerary'
  | 'muar-rainy-day-things-to-do';

export const newTopicIds2: NewTopicId2[] = [
  'masjid-jamek-sultan-ibrahim-guide',
  'muar-clock-tower-guide',
  'maharani-mural-lane-guide',
  'tanjung-emas-sunset-point',
  'muar-river-promenade-walk',
  'muar-street-art-cultural-walk',
  'muar-photography-spots',
  'muar-bicycle-route',
  'muar-river-cruise-guide',
  'muar-fishing-and-coastal',
  'muar-half-day-itinerary',
  'muar-one-day-itinerary',
  'muar-weekend-itinerary',
  'muar-family-itinerary',
  'muar-rainy-day-things-to-do',
];

/** Slug bahasa Inggeris digunakan terus sebagai laluan. */
export const newTopicSlug2: Record<NewTopicId2, string> = Object.fromEntries(
  newTopicIds2.map((id) => [id, id]),
) as Record<NewTopicId2, string>;

/** Putar 4 imej sedia ada supaya setiap topik mendapat imej. */
export const newTopicImage2: Record<NewTopicId2, string> = Object.fromEntries(
  newTopicIds2.map((id, i) => [
    id,
    [images.shore, images.promenade, images.sunset, images.hero][i % 4],
  ]),
) as Record<NewTopicId2, string>;

export const newTopics2: Record<NewTopicId2, Record<Locale, TopicContent>> = {
  'masjid-jamek-sultan-ibrahim-guide': {
    ms: {
      meta: {
        title: 'Masjid Jamek Sultan Ibrahim Muar — Panduan & Etika',
        description: 'Masjid Jamek Sultan Ibrahim Muar: mercu tanda di tebing sungai, etika lawatan, waktu solat dan perkara yang perlu disahkan.',
      },
      card: { title: 'Masjid Jamek Sultan Ibrahim', text: 'Mercu tanda tepi sungai, etika lawatan dan waktu solat.' },
      kicker: 'Mercu tanda',
      h1: 'Masjid Jamek Sultan Ibrahim: mercu tanda sungai Muar.',
      lead: 'Masjid Jamek Sultan Ibrahim ialah mercu tanda di kawasan tebing Sungai Muar. Sebagai tempat ibadat, hormati waktu solat dan pakaian; lawatan sebagai pelancong perlu dilakukan di luar waktu solat.',
      facts: [
        { label: 'Jenis', value: 'Masjid / mercu tanda' },
        { label: 'Lokasi', value: 'Tebing Sungai Muar' },
        { label: 'Etika', value: 'Hormati solat & pakaian' },
        { label: 'Semak', value: 'Waktu solat & akses' },
      ],
      blocks: [
        {
          heading: 'Mengenali masjid',
          paragraphs: [
            'Masjid ini sering dijadikan titik dalam pusingan singkat bandar lama Muar kerana kedudukannya berhampiran tebing sungai.',
          ],
        },
        {
          heading: 'Etika lawatan',
          bullets: [
            'Elakkan waktu solat berjemaah untuk lawatan santai.',
            'Pakiakan pakaian yang menutup aurat; tudung disediakan jika perlu.',
            'Jangan masuk ke kawasan solat tanpa kebenaran.',
            'Jaga kebersihan dan kesunyian premis.',
          ],
        },
        {
          heading: 'Perkara untuk disahkan',
          callout: 'Waktu solat dan akses pelawat boleh berubah. Semak dengan pihak masjid atau papan tanda di lokasi sebelum pergi.',
        },
      ],
      faqs: [
        { q: 'Bolehkah pelancong melawat?', a: 'Ya, di luar waktu solat dan dengan pakaian serta tingkah laku yang sopan. Hormati ruang ibadat.' },
        { q: 'Di mana masjid ini?', a: 'Ia berada di kawasan tebing Sungai Muar; gunakan peta untuk titik tepat.' },
        { q: 'Ada waktu lawatan tetap?', a: 'Tiada waktu lawatan pelancong yang disahkan; elakkan waktu solat berjemaah.' },
        { q: 'Perlu bayaran?', a: 'Tiada caj yang disahkan untuk lawatan sopan; sumbangan kepada masjid adalah secara sukarela.' },
      ],
    },
    en: {
      meta: {
        title: 'Masjid Jamek Sultan Ibrahim Muar — Guide & Etiquette',
        description: 'Masjid Jamek Sultan Ibrahim Muar: a riverbank landmark, visit etiquette, prayer times and what to confirm.',
      },
      card: { title: 'Masjid Jamek Sultan Ibrahim', text: 'Riverbank landmark, visit etiquette and prayer times.' },
      kicker: 'Landmark',
      h1: 'Masjid Jamek Sultan Ibrahim: Muar river landmark.',
      lead: 'Masjid Jamek Sultan Ibrahim is a landmark by the banks of the Muar River. As a place of worship, respect prayer times and dress; tourist visits should fall outside prayer times.',
      facts: [
        { label: 'Type', value: 'Mosque / landmark' },
        { label: 'Location', value: 'Muar River bank' },
        { label: 'Etiquette', value: 'Respect prayer & dress' },
        { label: 'Check', value: 'Prayer times & access' },
      ],
      blocks: [
        {
          heading: 'About the mosque',
          paragraphs: [
            'The mosque is often a stop on a short loop through old Muar town because of its position near the riverbank.',
          ],
        },
        {
          heading: 'Visit etiquette',
          bullets: [
            'Avoid congregational prayer times for a relaxed visit.',
            'Wear modest clothing; a headscarf is offered if needed.',
            'Do not enter the prayer area without permission.',
            'Keep the premises clean and quiet.',
          ],
        },
        {
          heading: 'What to confirm',
          callout: 'Prayer times and visitor access can change. Check with the mosque or on-site signage before you go.',
        },
      ],
      faqs: [
        { q: 'Can tourists visit?', a: 'Yes, outside prayer times and with modest clothing and behaviour. Respect the worship space.' },
        { q: 'Where is this mosque?', a: 'It sits by the Muar River bank; use the map for the exact spot.' },
        { q: 'Is there a fixed visiting time?', a: 'No confirmed tourist visiting window; avoid congregational prayer times.' },
        { q: 'Is there a fee?', a: 'No confirmed charge for a respectful visit; contributions to the mosque are voluntary.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡 Masjid Jamek Sultan Ibrahim 指南与礼仪',
        description: '麻坡 Masjid Jamek Sultan Ibrahim：河畔地标、参观礼仪、礼拜时间与需确认事项。',
      },
      card: { title: 'Masjid Jamek Sultan Ibrahim', text: '河畔地标、参观礼仪与礼拜时间。' },
      kicker: '地标',
      h1: 'Masjid Jamek Sultan Ibrahim：麻坡河畔地标。',
      lead: 'Masjid Jamek Sultan Ibrahim 是麻坡河畔的地标。作为宗教场所，请尊重礼拜时间与着装；游客参观应避开礼拜时段。',
      facts: [
        { label: '类型', value: '清真寺／地标' },
        { label: '位置', value: '麻坡河畔' },
        { label: '礼仪', value: '尊重礼拜与着装' },
        { label: '确认', value: '礼拜时间与通行' },
      ],
      blocks: [
        {
          heading: '关于这座清真寺',
          paragraphs: [
            '由于靠近河畔，它常作为麻坡老城短程散步圈的一站。',
          ],
        },
        {
          heading: '参观礼仪',
          bullets: [
            '避开集体礼拜时段，以便从容参观。',
            '穿着端庄；如有需要会提供头巾。',
            '未经许可勿进入礼拜区。',
            '保持场所清洁与安静。',
          ],
        },
        {
          heading: '需要确认的事',
          callout: '礼拜时间与访客通行可能变动。出发前请向寺方或现场指示牌确认。',
        },
      ],
      faqs: [
        { q: '游客可以参观吗？', a: '可以，在礼拜时段之外、着装端庄且举止得体即可。请尊重礼拜空间。' },
        { q: '这座清真寺在哪里？', a: '位于麻坡河畔；请用地图确认确切位置。' },
        { q: '有固定参观时间吗？', a: '未确认游客参观时段；请避开集体礼拜时间。' },
        { q: '要收费吗？', a: '礼貌性参观未确认收费；对清真寺的捐献出于自愿。' },
      ],
    },
  },

  'muar-clock-tower-guide': {
    ms: {
      meta: {
        title: 'Menara Jam Muar — Panduan Mercu Tanda',
        description: 'Menara Jam Muar: mercu tanda Bandar Maharani, lokasi, seni bina dan petua lawatan.',
      },
      card: { title: 'Menara Jam Muar', text: 'Mercu tanda bandar lama, lokasi dan petua.' },
      kicker: 'Mercu tanda',
      h1: 'Menara Jam: titik bandar lama Muar.',
      lead: 'Menara Jam ialah mercu tanda dalam Bandar Maharani, pusat bandar lama Muar. Ia mudah dijadikan titik dalam pusingan jalan kaki ringkas, selalunya digabungkan dengan mural dan tebing sungai.',
      facts: [
        { label: 'Jenis', value: 'Mercu tanda bandar' },
        { label: 'Lokasi', value: 'Bandar Maharani, Muar' },
        { label: 'Cara', value: 'Jalan kaki dari tepi sungai' },
        { label: 'Semak', value: 'Akses & kawasan' },
      ],
      blocks: [
        {
          heading: 'Mengenali menara',
          paragraphs: [
            'Menara jam sering muncul dalam foto bandar lama Muar dan dijadikan titik pertemuan dalam pusingan jalan kaki.',
          ],
        },
        {
          heading: 'Cara ke sana',
          bullets: [
            'Berjalan dari tebing Sungai Muar melalui pusat bandar lama.',
            'Gabungkan dengan Mural Lane dan kawasan makan berhampiran.',
            'Gunakan peta untuk titik tepat.',
          ],
        },
        {
          heading: 'Petua lawatan',
          callout: 'Kawasan sekitar boleh sesak pada hujung minggu. Datang pada waktu pagi atau lewat petang untuk cahaya dan ruang yang lebih selesa.',
        },
      ],
      faqs: [
        { q: 'Di mana Menara Jam Muar?', a: 'Ia berada di Bandar Maharani, pusat bandar lama Muar; gunakan peta untuk titik tepat.' },
        { q: 'Boleh didaki?', a: 'Tiada akses mendaki yang disahkan; ia mercu tanda luar yang sesuai untuk foto.' },
        { q: 'Percuma untuk dilihat?', a: 'Ya, sebagai mercu tanda awam di ruang terbuka, tiada caj yang disahkan.' },
        { q: 'Bila masa terbaik?', a: 'Pagi atau lewat petang memberi cahaya lebih baik dan kurang sesak.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Clock Tower — Landmark Guide',
        description: 'Muar Clock Tower: a Bandar Maharani landmark, location, architecture and visit tips.',
      },
      card: { title: 'Muar Clock Tower', text: 'Old town landmark, location and tips.' },
      kicker: 'Landmark',
      h1: 'Clock Tower: old Muar town point.',
      lead: 'The Clock Tower is a landmark in Bandar Maharani, the old town centre of Muar. It makes an easy point on a short walking loop, usually combined with the murals and the riverbank.',
      facts: [
        { label: 'Type', value: 'Town landmark' },
        { label: 'Location', value: 'Bandar Maharani, Muar' },
        { label: 'Getting there', value: 'Walk from the riverbank' },
        { label: 'Check', value: 'Access & area' },
      ],
      blocks: [
        {
          heading: 'About the tower',
          paragraphs: [
            'The clock tower often appears in photos of old Muar town and serves as a meeting point on walking loops.',
          ],
        },
        {
          heading: 'How to get there',
          bullets: [
            'Walk from the Muar River bank through the old town centre.',
            'Pair it with Mural Lane and the nearby food area.',
            'Use the map for the exact spot.',
          ],
        },
        {
          heading: 'Visit tips',
          callout: 'The surrounding area can be busy on weekends. Come in the morning or late afternoon for better light and more comfortable space.',
        },
      ],
      faqs: [
        { q: 'Where is the Muar Clock Tower?', a: 'It is in Bandar Maharani, the old town centre of Muar; use the map for the exact spot.' },
        { q: 'Can I climb it?', a: 'No confirmed climbing access; it is an outdoor landmark suited to photos.' },
        { q: 'Free to see?', a: 'Yes, as a public landmark in open space, no confirmed charge.' },
        { q: 'When is the best time?', a: 'Morning or late afternoon gives better light and less crowding.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡钟楼地标指南',
        description: '麻坡钟楼：皇城（Bandar Maharani）地标、位置、建筑与参观建议。',
      },
      card: { title: '麻坡钟楼', text: '老城地标、位置与建议。' },
      kicker: '地标',
      h1: '钟楼：麻坡老城的一站。',
      lead: '钟楼是皇城（Bandar Maharani，麻坡老城中心）的地标。它很适合作为短程散步圈的一站，通常和壁画与河畔一起安排。',
      facts: [
        { label: '类型', value: '城镇地标' },
        { label: '位置', value: '皇城，麻坡' },
        { label: '前往', value: '从河畔步行' },
        { label: '确认', value: '通行与区域' },
      ],
      blocks: [
        {
          heading: '关于钟楼',
          paragraphs: [
            '钟楼常出现在麻坡老城照片中，也是散步圈的会合点。',
          ],
        },
        {
          heading: '如何到达',
          bullets: [
            '从麻坡河畔步行穿过老城中心。',
            '可与壁画巷及周边美食区一并安排。',
            '请用地图确认确切位置。',
          ],
        },
        {
          heading: '参观建议',
          callout: '周边周末可能拥挤。清晨或傍晚前往光线更好、空间更舒适。',
        },
      ],
      faqs: [
        { q: '麻坡钟楼在哪里？', a: '位于皇城，即麻坡老城中心；请用地图确认确切位置。' },
        { q: '可以登楼吗？', a: '未确认可登楼；它是适合拍照的户外地标。' },
        { q: '参观免费吗？', a: '作为开放空间的公共地标，未确认收费。' },
        { q: '什么时候最好？', a: '清晨或傍晚光线更好，人也较少。' },
      ],
    },
  },

  'maharani-mural-lane-guide': {
    ms: {
      meta: {
        title: 'Maharani Mural Lane Muar — Panduan Seni Jalanan',
        description: 'Maharani Mural Lane: mural dan lorong bercerita, lokasi, masa terbaik dan petua foto.',
      },
      card: { title: 'Maharani Mural Lane', text: 'Mural & lorong budaya, lokasi dan petua.' },
      kicker: 'Seni & budaya',
      h1: 'Mural Lane: cerita Muar di dinding.',
      lead: 'Maharani Mural Lane ialah lorong dengan mural yang menceritakan kisah Muar. Ia paling baik dikunjungi ketika masih terang, dan lazimnya digabungkan dengan pusingan bandar lama.',
      facts: [
        { label: 'Jenis', value: 'Seni jalanan / mural' },
        { label: 'Lokasi', value: 'Bandar Maharani, Muar' },
        { label: 'Masa', value: 'Waktu siang' },
        { label: 'Semak', value: 'Akses & laluan' },
      ],
      blocks: [
        {
          heading: 'Mengenali mural',
          paragraphs: [
            'Lorong ini memaparkan mural yang menggambarkan kehidupan, sejarah dan budaya Muar. Ia menjadi salah satu sudut popular untuk berjalan santai.',
          ],
        },
        {
          heading: 'Cara ke sana',
          bullets: [
            'Berjalan dari tebing sungai melalui pusat bandar lama.',
            'Gabungkan dengan Menara Jam dan kawasan makan.',
            'Gunakan peta untuk lorong tepat.',
          ],
        },
        {
          heading: 'Petua foto',
          callout: 'Cahaya siang yang cerah membantu warna mural. Elakkan waktu sangat panas; datang pada awal pagi atau lewat petang.',
        },
      ],
      faqs: [
        { q: 'Di mana Maharani Mural Lane?', a: 'Ia berada di Bandar Maharani; gunakan peta untuk lorong tepat.' },
        { q: 'Percuma?', a: 'Ya, sebagai ruang awam terbuka, tiada caj yang disahkan.' },
        { q: 'Bila masa terbaik untuk foto?', a: 'Siang hari dengan cahaya cerah; elakkan tengah hari yang panas.' },
        { q: 'Boleh digabung dengan lawatan lain?', a: 'Ya, ia sesuai digabung dengan Menara Jam, tebing sungai dan makanan.' },
      ],
    },
    en: {
      meta: {
        title: 'Maharani Mural Lane Muar — Street Art Guide',
        description: 'Maharani Mural Lane: murals and storytelling lanes, location, best time and photo tips.',
      },
      card: { title: 'Maharani Mural Lane', text: 'Murals & culture lanes, location and tips.' },
      kicker: 'Art & culture',
      h1: 'Mural Lane: Muar stories on the wall.',
      lead: 'Maharani Mural Lane is a lane with murals that tell Muar’s stories. It is best visited while there is daylight, and is usually combined with a loop through the old town.',
      facts: [
        { label: 'Type', value: 'Street art / murals' },
        { label: 'Location', value: 'Bandar Maharani, Muar' },
        { label: 'Timing', value: 'Daytime' },
        { label: 'Check', value: 'Access & route' },
      ],
      blocks: [
        {
          heading: 'About the murals',
          paragraphs: [
            'The lane displays murals depicting Muar’s life, history and culture. It has become a popular corner for relaxed walking.',
          ],
        },
        {
          heading: 'How to get there',
          bullets: [
            'Walk from the riverbank through the old town centre.',
            'Pair it with the Clock Tower and food area.',
            'Use the map for the exact lane.',
          ],
        },
        {
          heading: 'Photo tips',
          callout: 'Bright daylight helps the mural colours. Avoid the hottest hours; come in the early morning or late afternoon.',
        },
      ],
      faqs: [
        { q: 'Where is Maharani Mural Lane?', a: 'It is in Bandar Maharani; use the map for the exact lane.' },
        { q: 'Is it free?', a: 'Yes, as open public space, no confirmed charge.' },
        { q: 'When is the best time for photos?', a: 'Daytime with bright light; avoid the hot midday.' },
        { q: 'Can it be combined with other visits?', a: 'Yes, it pairs well with the Clock Tower, riverbank and food.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡 Maharani 壁画巷指南',
        description: '麻坡 Maharani 壁画巷：讲述麻坡故事的壁画与巷弄、位置、最佳时段与拍照建议。',
      },
      card: { title: 'Maharani 壁画巷', text: '壁画与文化巷弄、位置与建议。' },
      kicker: '艺术与文化',
      h1: '壁画巷：墙上的麻坡故事。',
      lead: 'Maharani 壁画巷是一条以壁画讲述麻坡故事的巷弄。最好趁天色尚亮前往，通常和老城散步圈一起安排。',
      facts: [
        { label: '类型', value: '街头艺术／壁画' },
        { label: '位置', value: '皇城，麻坡' },
        { label: '时段', value: '白天' },
        { label: '确认', value: '通行与路线' },
      ],
      blocks: [
        {
          heading: '关于壁画',
          paragraphs: [
            '这条巷弄展示描绘麻坡生活、历史与文化的壁画，已成为轻松散步的热门角落。',
          ],
        },
        {
          heading: '如何到达',
          bullets: [
            '从河畔步行穿过老城中心。',
            '可与钟楼及美食区一并安排。',
            '请用地图确认确切巷弄。',
          ],
        },
        {
          heading: '拍照建议',
          callout: '明亮日光能凸显壁画色彩。避开最热时段；清晨或傍晚前往。',
        },
      ],
      faqs: [
        { q: 'Maharani 壁画巷在哪里？', a: '位于皇城；请用地图确认确切巷弄。' },
        { q: '免费吗？', a: '作为开放的公共空间，未确认收费。' },
        { q: '什么时候拍照最好？', a: '白天光线明亮；避开正午高温。' },
        { q: '能和其他行程合并吗？', a: '可以，与钟楼、河畔和美食都很搭。' },
      ],
    },
  },

  'tanjung-emas-sunset-point': {
    ms: {
      meta: {
        title: 'Tanjung Emas Sunset Point — Panduan & Tips',
        description: 'Sunset Point Tanjung Emas Muar: di mana melihat senja, masa terbaik dan petua fotografi.',
      },
      card: { title: 'Sunset Point Tanjung Emas', text: 'Tempat senja, masa terbaik dan petua.' },
      kicker: 'Pemandangan',
      h1: 'Sunset Point: senja di muara Muar.',
      lead: 'Tanjung Emas menawarkan pemandangan senja di muara Sungai Muar. Lewat petang membawa cahaya lembut dan angin sungai; inilah salah satu sebab utama pengunjung datang ke sini.',
      facts: [
        { label: 'Jenis', value: 'Tepi sungai / senja' },
        { label: 'Lokasi', value: 'Taman Sri Tanjung' },
        { label: 'Masa', value: 'Lewat petang' },
        { label: 'Semak', value: 'Cuaca & akses' },
      ],
      blocks: [
        {
          heading: 'Di mana melihat senja',
          paragraphs: [
            'Kawasan promenad dan dataran tepi sungai memberikan pandangan ke arah air, menjadikannya tempat popular untuk menunggu senja.',
          ],
        },
        {
          heading: 'Masa terbaik',
          bullets: [
            'Lewat petang, lebih kurang sejam sebelum matahari tenggelam.',
            'Awal pagi juga memberi cahaya lembut untuk foto.',
            'Elakkan tengah hari yang panas.',
          ],
        },
        {
          heading: 'Petua',
          callout: 'Semak ramalan cuaca; awan tebal atau hujan boleh menutup pemandangan. Datang lebih awal untuk ruang yang selesa.',
        },
      ],
      faqs: [
        { q: 'Bila masa terbaik untuk senja?', a: 'Lewat petang, lebih kurang sejam sebelum matahari tenggelam.' },
        { q: 'Di mana titik paling baik?', a: 'Promenad dan dataran tepi sungai di Taman Sri Tanjung; gunakan peta untuk pandangan air.' },
        { q: 'Percuma?', a: 'Ya, sebagai ruang awam, tiada caj yang disahkan.' },
        { q: 'Boleh foto dengan telefon?', a: 'Ya, cahaya lewat petang cukup untuk kamera telefon; bawa penutup jika berangin.' },
      ],
    },
    en: {
      meta: {
        title: 'Tanjung Emas Sunset Point — Guide & Tips',
        description: 'Tanjung Emas Sunset Point Muar: where to watch the sunset, best time and photography tips.',
      },
      card: { title: 'Tanjung Emas Sunset Point', text: 'Sunset spot, best time and tips.' },
      kicker: 'Scenery',
      h1: 'Sunset Point: dusk at the Muar estuary.',
      lead: 'Tanjung Emas offers a sunset view over the Muar River estuary. Late afternoon brings soft light and river breeze; it is one of the main reasons visitors come here.',
      facts: [
        { label: 'Type', value: 'Riverside / sunset' },
        { label: 'Location', value: 'Taman Sri Tanjung' },
        { label: 'Timing', value: 'Late afternoon' },
        { label: 'Check', value: 'Weather & access' },
      ],
      blocks: [
        {
          heading: 'Where to watch the sunset',
          paragraphs: [
            'The riverside promenade and square give a view towards the water, making them a popular place to wait for the sunset.',
          ],
        },
        {
          heading: 'Best time',
          bullets: [
            'Late afternoon, roughly an hour before sunset.',
            'Early morning also gives soft light for photos.',
            'Avoid the hot midday.',
          ],
        },
        {
          heading: 'Tips',
          callout: 'Check the weather; heavy clouds or rain can block the view. Arrive earlier for comfortable space.',
        },
      ],
      faqs: [
        { q: 'When is the best time for sunset?', a: 'Late afternoon, roughly an hour before the sun sets.' },
        { q: 'Where is the best spot?', a: 'The riverside promenade and square in Taman Sri Tanjung; use the map for the water view.' },
        { q: 'Is it free?', a: 'Yes, as public space, no confirmed charge.' },
        { q: 'Can I use a phone camera?', a: 'Yes, late-afternoon light is enough for a phone; bring cover if it is windy.' },
      ],
    },
    zh: {
      meta: {
        title: 'Tanjung Emas 日落观景点指南',
        description: '麻坡 Tanjung Emas 日落观景点：哪里看日落、最佳时段与摄影建议。',
      },
      card: { title: 'Tanjung Emas 日落点', text: '日落地点、最佳时段与建议。' },
      kicker: '景观',
      h1: '日落点：麻坡出海口黄昏。',
      lead: 'Tanjung Emas 提供麻坡河出海口的日落景观。傍晚有柔和光线与河风，这是游客前来的主因之一。',
      facts: [
        { label: '类型', value: '河畔／日落' },
        { label: '位置', value: 'Taman Sri Tanjung' },
        { label: '时段', value: '傍晚' },
        { label: '确认', value: '天气与通行' },
      ],
      blocks: [
        {
          heading: '哪里看日落',
          paragraphs: [
            '河畔步道与广场面向水面，是等待日落的热门地点。',
          ],
        },
        {
          heading: '最佳时段',
          bullets: [
            '傍晚，约日落前一小时。',
            '清晨也有柔和光线适合拍照。',
            '避开正午高温。',
          ],
        },
        {
          heading: '建议',
          callout: '请查天气；厚云或雨会遮住视野。提早到达以便有舒适空间。',
        },
      ],
      faqs: [
        { q: '看日落的最佳时段？', a: '傍晚，约日落前一小时。' },
        { q: '最好的位置在哪？', a: 'Taman Sri Tanjung 的河畔步道与广场；请用地图找朝水面的视野。' },
        { q: '免费吗？', a: '作为公共空间，未确认收费。' },
        { q: '手机能拍吗？', a: '可以，傍晚光线足够手机拍摄；有风请带遮挡。' },
      ],
    },
  },

  'muar-river-promenade-walk': {
    ms: {
      meta: {
        title: 'Jalan Kaki Promenad Sungai Muar — Panduan',
        description: 'Promenad Sungai Muar: laluan berturap, jarak, masa sesuai dan petua berjalan santai.',
      },
      card: { title: 'Promenad sungai', text: 'Laluan berturap, jarak dan petua.' },
      kicker: 'Aktiviti',
      h1: 'Jalan kaki di promenad sungai.',
      lead: 'Promenad tepi Sungai Muar di Tanjung Emas ialah laluan berturap yang sesuai untuk berjalan santai, berjoging atau menolak kereta sorong. Ia rata dan disambungkan dengan dataran.',
      facts: [
        { label: 'Jenis', value: 'Laluan berturap' },
        { label: 'Lokasi', value: 'Tanjung Emas' },
        { label: 'Sesuai', value: 'Berjalan · joging' },
        { label: 'Semak', value: 'Keadaan & teduhan' },
      ],
      blocks: [
        {
          heading: 'Laluan',
          paragraphs: [
            'Promenad bersambung dengan dataran terbuka dan kawasan tepi sungai, membolehkan pusingan singkat yang selesa.',
          ],
        },
        {
          heading: 'Masa sesuai',
          bullets: [
            'Awal pagi untuk udara lebih sejuk.',
            'Lewat petang untuk senja dan angin sungai.',
            'Elakkan tengah hari yang panas.',
          ],
        },
        {
          heading: 'Petua',
          callout: 'Teduhan terhad. Bawa air minuman, topi atau payung kecil, dan semak peta pada hari lawatan.',
        },
      ],
      faqs: [
        { q: 'Berapa jauh promenad?', a: 'Jarak bergantung kepada pusingan yang dipilih; laluan rata sesuai untuk berjalan santai.' },
        { q: 'Boleh joging?', a: 'Ya, ramai penduduk menggunakan promenad untuk berjoging, terutamanya awal pagi dan lewat petang.' },
        { q: 'Mesra kereta sorong?', a: 'Ya, laluan berturap rata mesra kereta sorong dalam cuaca baik.' },
        { q: 'Ada tandas?', a: 'Kawasan taman awam mungkin mempunyai tandas; sahkan di lokasi.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar River Promenade Walk — Guide',
        description: 'Muar River promenade: paved path, distance, good timing and relaxed walking tips.',
      },
      card: { title: 'River promenade', text: 'Paved path, distance and tips.' },
      kicker: 'Activity',
      h1: 'Walk along the river promenade.',
      lead: 'The riverside promenade at Tanjung Emas is a paved path for relaxed walking, jogging or pushing a stroller. It is flat and connects with the open square.',
      facts: [
        { label: 'Type', value: 'Paved path' },
        { label: 'Location', value: 'Tanjung Emas' },
        { label: 'Good for', value: 'Walking · jogging' },
        { label: 'Check', value: 'Conditions & shade' },
      ],
      blocks: [
        {
          heading: 'The path',
          paragraphs: [
            'The promenade connects with the open square and riverside area, allowing a comfortable short loop.',
          ],
        },
        {
          heading: 'Good timing',
          bullets: [
            'Early morning for cooler air.',
            'Late afternoon for sunset and river breeze.',
            'Avoid the hot midday.',
          ],
        },
        {
          heading: 'Tips',
          callout: 'Shade is limited. Bring water, a cap or small umbrella, and check the map on the day.',
        },
      ],
      faqs: [
        { q: 'How far is the promenade?', a: 'Distance depends on the loop you choose; the flat path suits relaxed walking.' },
        { q: 'Can I jog?', a: 'Yes, many residents use the promenade for jogging, especially early morning and late afternoon.' },
        { q: 'Stroller friendly?', a: 'Yes, the flat paved path is stroller friendly in fair weather.' },
        { q: 'Are there toilets?', a: 'Public park areas may have toilets; confirm on site.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡河畔步道散步指南',
        description: '麻坡河畔步道：铺装路面、距离、合适时段与轻松散步建议。',
      },
      card: { title: '河畔步道', text: '铺装路面、距离与建议。' },
      kicker: '活动',
      h1: '沿河畔步道散步。',
      lead: 'Tanjung Emas 的河畔步道是铺装路面，适合轻松散步、慢跑或推婴儿车。它平坦，并与开阔广场相连。',
      facts: [
        { label: '类型', value: '铺装路面' },
        { label: '位置', value: 'Tanjung Emas' },
        { label: '适合', value: '散步 · 慢跑' },
        { label: '确认', value: '状况与遮阴' },
      ],
      blocks: [
        {
          heading: '步道',
          paragraphs: [
            '步道与开阔广场及河畔区域相连，可形成舒适的小圈。',
          ],
        },
        {
          heading: '合适时段',
          bullets: [
            '清晨气温较凉爽。',
            '傍晚有日落与河风。',
            '避开正午高温。',
          ],
        },
        {
          heading: '建议',
          callout: '遮阴有限。请自备饮水、帽子或小伞，并在当天查看地图。',
        },
      ],
      faqs: [
        { q: '步道有多长？', a: '距离取决于你选的圈；平坦路面适合轻松散步。' },
        { q: '可以慢跑吗？', a: '可以，许多居民在步道慢跑，尤其清晨与傍晚。' },
        { q: '适合婴儿车吗？', a: '适合，平坦铺装路面对婴儿车很友好（天气好时）。' },
        { q: '有洗手间吗？', a: '公共园区可能有洗手间；请于现场确认。' },
      ],
    },
  },

  'muar-street-art-cultural-walk': {
    ms: {
      meta: {
        title: 'Jalan Kaki Seni & Budaya Muar — Panduan',
        description: 'Jalan kaki seni dan budaya Muar: mural, mercu tanda dan tebing sungai dalam satu pusingan bandar lama.',
      },
      card: { title: 'Jalan seni & budaya', text: 'Mural, mercu tanda dan tebing sungai.' },
      kicker: 'Aktiviti',
      h1: 'Pusingan seni dan budaya Muar.',
      lead: 'Gabungkan Maharani Mural Lane, Menara Jam dan tebing Sungai Muar dalam satu pusingan jalan kaki di Bandar Maharani. Laluan ini sesuai untuk separuh hari yang santai.',
      facts: [
        { label: 'Fokus', value: 'Seni jalanan · sejarah' },
        { label: 'Lokasi', value: 'Bandar Maharani' },
        { label: 'Tempoh', value: '1–2 jam' },
        { label: 'Semak', value: 'Waktu operasi mural' },
      ],
      blocks: [
        {
          heading: 'Laluan dicadangkan',
          bullets: [
            'Mula di tebing Sungai Muar.',
            'Teruskan ke Menara Jam.',
            'Masuk ke Maharani Mural Lane.',
            'Tamatkan dengan kawasan makan berhampiran.',
          ],
        },
        {
          heading: 'Masa sesuai',
          paragraphs: [
            'Lakukan sebelah siang supaya mural dapat dilihat dengan jelas. Lewat petang membawa cahaya senja yang baik untuk foto.',
          ],
        },
        {
          heading: 'Petua',
          callout: 'Kawasan boleh sesak pada hujung minggu. Datang lebih awal dan semak peta untuk titik tepat setiap mercu tanda.',
        },
      ],
      faqs: [
        { q: 'Berapa lama pusingan ini?', a: 'Kira-kira 1–2 jam bergantung kepada kadar berjalan dan berhenti.' },
        { q: 'Boleh dilakukan sendiri?', a: 'Ya, laluan pejalan kaki di pusat bandar lama mudah diikuti dengan peta.' },
        { q: 'Ada panduan berbayar?', a: 'Tiada panduan berbayar yang disahkan; jalan kaki secara sendiri adalah pilihan biasa.' },
        { q: 'Bila masa terbaik?', a: 'Siang hari untuk mural, lewat petang untuk cahaya senja.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Street Art & Culture Walk — Guide',
        description: 'Muar street art and culture walk: murals, landmarks and the riverbank in one old-town loop.',
      },
      card: { title: 'Art & culture walk', text: 'Murals, landmarks and the riverbank.' },
      kicker: 'Activity',
      h1: 'A Muar art and culture loop.',
      lead: 'Combine Maharani Mural Lane, the Clock Tower and the Muar River bank into one walking loop through Bandar Maharani. This route suits a relaxed half day.',
      facts: [
        { label: 'Focus', value: 'Street art · history' },
        { label: 'Location', value: 'Bandar Maharani' },
        { label: 'Duration', value: '1–2 hours' },
        { label: 'Check', value: 'Mural access time' },
      ],
      blocks: [
        {
          heading: 'Suggested route',
          bullets: [
            'Start at the Muar River bank.',
            'Continue to the Clock Tower.',
            'Enter Maharani Mural Lane.',
            'Finish at the nearby food area.',
          ],
        },
        {
          heading: 'Good timing',
          paragraphs: [
            'Do it in daylight so the murals are clearly visible. Late afternoon brings good sunset light for photos.',
          ],
        },
        {
          heading: 'Tips',
          callout: 'The area can be busy on weekends. Come earlier and check the map for the exact spot of each landmark.',
        },
      ],
      faqs: [
        { q: 'How long is this loop?', a: 'About 1–2 hours depending on walking pace and stops.' },
        { q: 'Can it be done on your own?', a: 'Yes, the pedestrian route in the old town centre is easy to follow with a map.' },
        { q: 'Is there a paid guide?', a: 'No confirmed paid guide; self-guided walking is the usual choice.' },
        { q: 'When is the best time?', a: 'Daytime for murals, late afternoon for sunset light.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡街头艺术与文化散步指南',
        description: '麻坡街头艺术与文化散步：壁画、地标与河畔，串成一条老城圈。',
      },
      card: { title: '艺术文化散步', text: '壁画、地标与河畔。' },
      kicker: '活动',
      h1: '麻坡艺术文化一圈。',
      lead: '把 Maharani 壁画巷、钟楼与麻坡河畔串成一条皇城（Bandar Maharani）的步行圈。这条路线适合轻松的半日。',
      facts: [
        { label: '重点', value: '街头艺术 · 历史' },
        { label: '位置', value: '皇城' },
        { label: '时长', value: '1–2 小时' },
        { label: '确认', value: '壁画通行时段' },
      ],
      blocks: [
        {
          heading: '建议路线',
          bullets: [
            '从麻坡河畔开始。',
            '接着前往钟楼。',
            '进入 Maharani 壁画巷。',
            '最后在附近美食区结束。',
          ],
        },
        {
          heading: '合适时段',
          paragraphs: [
            '请在白天进行，以便清楚看见壁画。傍晚则有良好的夕阳光线适合拍照。',
          ],
        },
        {
          heading: '建议',
          callout: '区域周末可能拥挤。请提早到达，并用地图确认各地标的确切位置。',
        },
      ],
      faqs: [
        { q: '这一圈要多久？', a: '约 1–2 小时，视步行速度与停留而定。' },
        { q: '可以自己走吗？', a: '可以，老城中心的步行路线用地图很容易跟随。' },
        { q: '有付费导览吗？', a: '未确认付费导览；自助步行是常见选择。' },
        { q: '什么时候最好？', a: '白天看壁画，傍晚拍夕阳光。' },
      ],
    },
  },

  'muar-photography-spots': {
    ms: {
      meta: {
        title: 'Tempat Foto Muar — Panduan Sunset & Bandar Lama',
        description: 'Tempat foto di Muar: tebing sungai, senja, mural dan mercu tanda; masa terbaik dan petua.',
      },
      card: { title: 'Tempat foto Muar', text: 'Tebing, senja, mural dan mercu tanda.' },
      kicker: 'Fotografi',
      h1: 'Tempat foto di sekitar Muar.',
      lead: 'Muar menawarkan subjek foto daripada tebing Sungai Muar, senja di Tanjung Emas, mural Bandar Maharani dan mercu tanda seperti Menara Jam. Pilih masa mengikut subjek.',
      facts: [
        { label: 'Subjek', value: 'Sungai · senja · mural' },
        { label: 'Lokasi', value: 'Tanjung Emas · Bandar Maharani' },
        { label: 'Masa', value: 'Pagi & lewat petang' },
        { label: 'Semak', value: 'Cuaca & akses' },
      ],
      blocks: [
        {
          heading: 'Subjek utama',
          bullets: [
            '**Tebing Sungai Muar** — air, jambatan dan cahaya senja.',
            '**Tanjung Emas** — dataran dan pandangan muara.',
            '**Mural Lane** — warna dan cerita bandar.',
            '**Menara Jam** — mercu tanda pusat bandar lama.',
          ],
        },
        {
          heading: 'Masa terbaik',
          paragraphs: [
            'Pagi dan lewat petang memberi cahaya lembut. Tengah hari biasanya panas dengan kontras tinggi.',
          ],
        },
        {
          heading: 'Petua',
          callout: 'Bawa penutup jika berangin di tepi air. Semak cuaca dan elakkan hujan sebelum pergi.',
        },
      ],
      faqs: [
        { q: 'Di mana tempat foto paling baik?', a: 'Tebing Sungai Muar dan Tanjung Emas untuk senja; Mural Lane dan Menara Jam untuk bandar lama.' },
        { q: 'Bila masa terbaik?', a: 'Pagi dan lewat petang untuk cahaya lembut.' },
        { q: 'Boleh guna dron?', a: 'Peraturan dron berbeza; sahkan dengan pihak berkuasa tempatan sebelum terbang.' },
        { q: 'Percuma?', a: 'Ya, ruang awam tiada caj yang disahkan, tetapi hormati premis persendirian.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Photo Spots — Sunset & Old Town Guide',
        description: 'Photo spots in Muar: riverbank, sunset, murals and landmarks; best time and tips.',
      },
      card: { title: 'Muar photo spots', text: 'Riverbank, sunset, murals and landmarks.' },
      kicker: 'Photography',
      h1: 'Photo spots around Muar.',
      lead: 'Muar offers subjects from the Muar River bank, sunset at Tanjung Emas, Bandar Maharani murals and landmarks like the Clock Tower. Pick your time by subject.',
      facts: [
        { label: 'Subjects', value: 'River · sunset · murals' },
        { label: 'Location', value: 'Tanjung Emas · Bandar Maharani' },
        { label: 'Timing', value: 'Morning & late afternoon' },
        { label: 'Check', value: 'Weather & access' },
      ],
      blocks: [
        {
          heading: 'Main subjects',
          bullets: [
            '**Muar River bank** — water, bridge and sunset light.',
            '**Tanjung Emas** — square and estuary view.',
            '**Mural Lane** — colour and town stories.',
            '**Clock Tower** — old town centre landmark.',
          ],
        },
        {
          heading: 'Best time',
          paragraphs: [
            'Morning and late afternoon give soft light. Midday is usually hot with high contrast.',
          ],
        },
        {
          heading: 'Tips',
          callout: 'Bring cover if it is windy by the water. Check the weather and avoid rain before you go.',
        },
      ],
      faqs: [
        { q: 'Where are the best photo spots?', a: 'The Muar River bank and Tanjung Emas for sunset; Mural Lane and Clock Tower for the old town.' },
        { q: 'When is the best time?', a: 'Morning and late afternoon for soft light.' },
        { q: 'Can I use a drone?', a: 'Drone rules vary; confirm with local authorities before flying.' },
        { q: 'Is it free?', a: 'Yes, public space has no confirmed charge, but respect private premises.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡摄影点指南｜日落与老城',
        description: '麻坡摄影点：河畔、日落、壁画与地标；最佳时段与建议。',
      },
      card: { title: '麻坡摄影点', text: '河畔、日落、壁画与地标。' },
      kicker: '摄影',
      h1: '麻坡周边摄影点。',
      lead: '麻坡的拍摄题材包括麻坡河畔、Tanjung Emas 的日落、皇城的壁画，以及钟楼等地标。请按题材选择时段。',
      facts: [
        { label: '题材', value: '河流 · 日落 · 壁画' },
        { label: '位置', value: 'Tanjung Emas · 皇城' },
        { label: '时段', value: '清晨与傍晚' },
        { label: '确认', value: '天气与通行' },
      ],
      blocks: [
        {
          heading: '主要题材',
          bullets: [
            '**麻坡河畔** — 水、桥与夕阳光。',
            '**Tanjung Emas** — 广场与出海口视野。',
            '**壁画巷** — 色彩与城镇故事。',
            '**钟楼** — 老城中心地标。',
          ],
        },
        {
          heading: '最佳时段',
          paragraphs: [
            '清晨与傍晚光线柔和。正午通常炎热、反差大。',
          ],
        },
        {
          heading: '建议',
          callout: '水边有风请带遮挡。出发前查天气并避开雨天。',
        },
      ],
      faqs: [
        { q: '最好的摄影点在哪里？', a: '麻坡河畔与 Tanjung Emas 拍日落；壁画巷与钟楼拍老城。' },
        { q: '什么时候最好？', a: '清晨与傍晚光线柔和。' },
        { q: '可以用无人机吗？', a: '无人机规定因地而异；飞行前请向当地主管单位确认。' },
        { q: '免费吗？', a: '公共空间未确认收费，但请尊重私人场所。' },
      ],
    },
  },

  'muar-bicycle-route': {
    ms: {
      meta: {
        title: 'Laluan Basikal Muar — Panduan & Tips',
        description: 'Berbasikal di Muar: laluan rata, keselamatan, sewaan dan perkara yang perlu disahkan.',
      },
      card: { title: 'Laluan basikal Muar', text: 'Laluan rata, keselamatan dan sewaan.' },
      kicker: 'Aktiviti',
      h1: 'Berbasikal di sekitar Muar.',
      lead: 'Kawasan rekreasi Tanjung Emas dan tepi sungai sesuai untuk berbasikal santai di laluan rata. Majlis Perbandaran Muar menyenaraikan berbasikal sebagai aktiviti taman; sahkan sewaan dan laluan di lokasi.',
      facts: [
        { label: 'Jenis', value: 'Laluan rata' },
        { label: 'Lokasi', value: 'Tanjung Emas · tepi sungai' },
        { label: 'Sesuai', value: 'Basikal santai' },
        { label: 'Semak', value: 'Sewaan & laluan' },
      ],
      blocks: [
        {
          heading: 'Laluan',
          paragraphs: [
            'Laluan berturap di taman dan tebing sungai membolehkan pusingan basikal yang rata dan santai.',
          ],
        },
        {
          heading: 'Keselamatan',
          bullets: [
            'Guna lorong yang selamat dan beri laluan kepada pejalan kaki.',
            'Pakai topi keselamatan jika ada.',
            'Elakkan tengah hari yang panas.',
          ],
        },
        {
          heading: 'Sewaan & perkara disahkan',
          callout: 'Ketersediaan sewaan basikal dan laluan tertutup berubah; sahkan dengan pihak taman atau papan tanda di lokasi.',
        },
      ],
      faqs: [
        { q: 'Di mana boleh berbasikal?', a: 'Laluan rata di Tanjung Emas dan tebing sungai sesuai; semak laluan dengan papan tanda.' },
        { q: 'Ada sewaan basikal?', a: 'Ketersediaan sewaan belum disahkan pada 19 Oktober 2026; tanya pihak taman atau semak peta.' },
        { q: 'Selamat untuk kanak-kanak?', a: 'Laluan rata sesuai, tetapi awasi kanak-kanak dan elakkan kawasan sibuk.' },
        { q: 'Bila masa terbaik?', a: 'Awal pagi atau lewat petang untuk suhu lebih selesa.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Bicycle Route — Guide & Tips',
        description: 'Cycling in Muar: flat routes, safety, rental and what to confirm.',
      },
      card: { title: 'Muar bicycle route', text: 'Flat routes, safety and rental.' },
      kicker: 'Activity',
      h1: 'Cycling around Muar.',
      lead: 'The Tanjung Emas recreation area and riverbank suit relaxed cycling on flat paths. Muar Municipal Council lists cycling as a park activity; confirm rental and routes on site.',
      facts: [
        { label: 'Type', value: 'Flat routes' },
        { label: 'Location', value: 'Tanjung Emas · riverbank' },
        { label: 'Good for', value: 'Leisure cycling' },
        { label: 'Check', value: 'Rental & routes' },
      ],
      blocks: [
        {
          heading: 'The route',
          paragraphs: [
            'Paved paths in the park and along the river allow a flat, relaxed cycling loop.',
          ],
        },
        {
          heading: 'Safety',
          bullets: [
            'Use safe lanes and give way to pedestrians.',
            'Wear a helmet if you have one.',
            'Avoid the hot midday.',
          ],
        },
        {
          heading: 'Rental & confirmation',
          callout: 'Bike rental availability and closed routes change; confirm with the park or on-site signage.',
        },
      ],
      faqs: [
        { q: 'Where can I cycle?', a: 'Flat paths at Tanjung Emas and the riverbank suit cycling; check routes on signage.' },
        { q: 'Is there bike rental?', a: 'Rental availability was not confirmed on 19 October 2026; ask the park or check the map.' },
        { q: 'Safe for children?', a: 'Flat paths suit it, but supervise children and avoid busy areas.' },
        { q: 'When is the best time?', a: 'Early morning or late afternoon for more comfortable temperatures.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡自行车路线指南',
        description: '麻坡骑行：平坦路线、安全、租借与需确认事项。',
      },
      card: { title: '麻坡自行车路线', text: '平坦路线、安全与租借。' },
      kicker: '活动',
      h1: '在麻坡一带骑行。',
      lead: 'Tanjung Emas 休闲园区与河畔适合在平坦路面上轻松骑行。麻坡市议会将骑行列为园区活动；租借与路线请于现场确认。',
      facts: [
        { label: '类型', value: '平坦路线' },
        { label: '位置', value: 'Tanjung Emas · 河畔' },
        { label: '适合', value: '休闲骑行' },
        { label: '确认', value: '租借与路线' },
      ],
      blocks: [
        {
          heading: '路线',
          paragraphs: [
            '园区内与河畔的铺装路面可形成平坦、轻松的骑行圈。',
          ],
        },
        {
          heading: '安全',
          bullets: [
            '走安全的车道并礼让行人。',
            '若有请戴头盔。',
            '避开正午高温。',
          ],
        },
        {
          heading: '租借与确认',
          callout: '自行车租借是否提供、路线是否封闭会变动；请向园区或现场指示牌确认。',
        },
      ],
      faqs: [
        { q: '哪里可以骑？', a: 'Tanjung Emas 与河畔的平坦路面适合；请依指示牌确认路线。' },
        { q: '有自行车租借吗？', a: '截至 2026 年 10 月 19 日租借是否提供未确认；请询问园区或查地图。' },
        { q: '适合小孩吗？', a: '平坦路面合适，但请看护儿童并避开人潮处。' },
        { q: '什么时候最好？', a: '清晨或傍晚气温较舒适。' },
      ],
    },
  },

  'muar-river-cruise-guide': {
    ms: {
      meta: {
        title: 'Panduan Muar River Cruise — Pelayaran & Tempahan',
        description: 'Muar River Cruise: operasi hujung minggu dan cuti, operator AZ Marine, kadar dan perkara untuk disahkan.',
      },
      card: { title: 'Muar River Cruise', text: 'Pelayaran sungai, operator dan tempahan.' },
      kicker: 'Aktiviti air',
      h1: 'Muar River Cruise: pelayaran di Sungai Muar.',
      lead: 'Muar River Cruise dikendalikan oleh AZ Marine dan disenaraikan untuk hujung minggu dan cuti oleh Visit Johor 2026. Sahkan tarikh, waktu, tempoh dan tambang sebelum menaiki bot.',
      facts: [
        { label: 'Operator', value: 'AZ Marine · 013-6692263' },
        { label: 'Hari operasi', value: 'Hujung minggu & cuti' },
        { label: 'Tempoh & tambang', value: 'Sahkan dengan operator' },
        { label: 'Alamat', value: 'Jalan Tanjung 4, Taman Emas' },
      ],
      blocks: [
        {
          heading: 'Operasi',
          paragraphs: [
            'Visit Johor 2026 menyenaraikan Muar River Cruise pada hujung minggu dan hari cuti. Jadual terperinci ditentukan operator.',
          ],
        },
        {
          heading: 'Tempahan & semakan',
          bullets: [
            'Sahkan tarikh operasi, masa berkumpul dan pelayaran terakhir.',
            'Tanya tambang dewasa/kanak-kanak dan tempoh perjalanan.',
            'Sahkan titik menaiki bot dan polisi cuaca.',
            'Hubungi AZ Marine melalui pautan rasmi atau 013-6692263.',
          ],
        },
        {
          heading: 'Sebelum menaiki bot',
          callout: 'Ikut arahan kru dan gunakan jaket keselamatan. Rancang aktiviti taman sebagai pilihan jika pelayaran dibatalkan.',
        },
      ],
      faqs: [
        { q: 'Adakah pelayaran beroperasi setiap hari?', a: 'Visit Johor 2026 menyenaraikan untuk hujung minggu dan cuti. Sahkan dengan AZ Marine.' },
        { q: 'Berapakah tambang?', a: 'Tambang belum disahkan pada 19 Oktober 2026; hubungi AZ Marine.' },
        { q: 'Di mana jeti?', a: 'Alamat operator ialah Jalan Tanjung 4, Taman Emas; sahkan titik berlepas dengan operator.' },
        { q: 'Boleh dibatalkan?', a: 'Dasar pembatalan ditentukan operator; sahkan sebelum membayar.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar River Cruise Guide — Sailing & Booking',
        description: 'Muar River Cruise: weekend and holiday operation, operator AZ Marine, rates and what to confirm.',
      },
      card: { title: 'Muar River Cruise', text: 'River sailing, operator and booking.' },
      kicker: 'Water activity',
      h1: 'Muar River Cruise: a sail on the Muar River.',
      lead: 'The Muar River Cruise is run by AZ Marine and listed for weekends and holidays by Visit Johor 2026. Confirm your date, time, duration and fare before boarding.',
      facts: [
        { label: 'Operator', value: 'AZ Marine · 013-6692263' },
        { label: 'Operating days', value: 'Weekends & holidays' },
        { label: 'Duration & fare', value: 'Confirm with operator' },
        { label: 'Address', value: 'Jalan Tanjung 4, Taman Emas' },
      ],
      blocks: [
        {
          heading: 'Operation',
          paragraphs: [
            'Visit Johor 2026 lists the Muar River Cruise for weekends and holidays. The detailed schedule is set by the operator.',
          ],
        },
        {
          heading: 'Booking & checks',
          bullets: [
            'Confirm the operating date, meeting time and last sailing.',
            'Ask about adult/child fares and trip duration.',
            'Confirm the boarding point and weather policy.',
            'Contact AZ Marine through its official link or 013-6692263.',
          ],
        },
        {
          heading: 'Before boarding',
          callout: 'Follow crew instructions and wear a life jacket. Keep a park visit as an alternative if the sailing is cancelled.',
        },
      ],
      faqs: [
        { q: 'Does the cruise run every day?', a: 'Visit Johor 2026 lists it for weekends and holidays. Confirm with AZ Marine.' },
        { q: 'What is the fare?', a: 'Fares were not confirmed on 19 October 2026; contact AZ Marine.' },
        { q: 'Where is the jetty?', a: 'The operator address is Jalan Tanjung 4, Taman Emas; confirm the departure point with the operator.' },
        { q: 'Can it be cancelled?', a: 'The cancellation policy is set by the operator; confirm before paying.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡河游船指南｜航程与预约',
        description: '麻坡河游船：周末与假日营业、营运方 AZ Marine、票价与需确认事项。',
      },
      card: { title: '麻坡河游船', text: '河上航行、营运方与预约。' },
      kicker: '水上活动',
      h1: '麻坡河游船：在麻坡河上航行。',
      lead: '麻坡河游船由 AZ Marine 经营，Visit Johor 2026 将其列为周末及假日营业。登船前请向营运方确认日期、时间、航程与票价。',
      facts: [
        { label: '营运方', value: 'AZ Marine · 013-6692263' },
        { label: '营业日', value: '周末与假日' },
        { label: '航程与票价', value: '向营运方确认' },
        { label: '地址', value: 'Jalan Tanjung 4, Taman Emas' },
      ],
      blocks: [
        {
          heading: '营业',
          paragraphs: [
            'Visit Johor 2026 将麻坡河游船列为周末及假日营业。详细班表由营运方决定。',
          ],
        },
        {
          heading: '预约与核对',
          bullets: [
            '确认营业日期、集合时间与最后一班船。',
            '询问成人及儿童票价与航程长度。',
            '确认登船点与天气政策。',
            '请通过官网或 013-6692263 联系 AZ Marine。',
          ],
        },
        {
          heading: '登船前',
          callout: '遵从船员指示并穿戴救生衣。若船班取消，可把园区散步作为备选。',
        },
      ],
      faqs: [
        { q: '游船每天都有吗？', a: 'Visit Johor 2026 将其列为周末及假日营业。请向 AZ Marine 确认。' },
        { q: '票价多少？', a: '截至 2026 年 10 月 19 日票价未确认；请联络 AZ Marine。' },
        { q: '码头在哪？', a: '营运方地址为 Jalan Tanjung 4、Taman Emas；请向营运方确认出船点。' },
        { q: '可以取消吗？', a: '取消政策由营运方决定；付款前请确认。' },
      ],
    },
  },

  'muar-fishing-and-coastal': {
    ms: {
      meta: {
        title: 'Memancing & Pantai Muar — Panduan',
        description: 'Memancing dan pantai di sekitar Muar: garis pesisir, etika, keselamatan dan perkara yang perlu disahkan.',
      },
      card: { title: 'Memancing & pantai Muar', text: 'Garis pesisir, etika dan keselamatan.' },
      kicker: 'Aktiviti air',
      h1: 'Memancing dan pantai di Muar.',
      lead: 'Muar terletak di pesisir, jadi memancing dan kawasan pantai menjadi sebahagian daripada apa yang dicari pengunjung. Keadaan pantai berbeza mengikut lokasi, pasang surut dan musim; sahkan akses dan keselamatan di lokasi.',
      facts: [
        { label: 'Jenis', value: 'Pesisir & memancing' },
        { label: 'Lokasi', value: 'Sekitar daerah Muar' },
        { label: 'Waktu', value: 'Ikut pasang surut' },
        { label: 'Semak', value: 'Akses & keselamatan' },
      ],
      blocks: [
        {
          heading: 'Garis pesisir',
          paragraphs: [
            'Daerah Muar mempunyai garis pesisir dengan beberapa kawasan pantai. Pilihan berbeza mengikut lokasi dan musim.',
          ],
        },
        {
          heading: 'Etika & keselamatan',
          bullets: [
            'Hormati peraturan memancing dan kawasan larangan.',
            'Utamakan keselamatan di tepi air dan semak pasang surut.',
            'Jaga kebersihan pantai; bawa balik sampah sendiri.',
          ],
        },
        {
          heading: 'Sebelum pergi',
          callout: 'Akses pantai, tempat letak kereta dan keadaan boleh berubah dengan kerja penyelenggaraan. Semak peta dan keadaan semasa.',
        },
      ],
      faqs: [
        { q: 'Di mana memancing berhampiran Muar?', a: 'Gunakan peta untuk garis pesisir berhampiran bandar, kemudian sahkan akses dan permit jika perlu.' },
        { q: 'Ada pantai untuk mandi?', a: 'Keadaan pantai berbeza; sahkan keselamatan dan keadaan di lokasi sebelum turun ke air.' },
        { q: 'Perlu permit memancing?', a: 'Keperluan permit berbeza mengikut kawasan; sahkan dengan pihak berkuasa tempatan.' },
        { q: 'Bila masa terbaik?', a: 'Pantai dan memancing sering bergantung kepada pasang surut; semak jadual pasang surut sebelum pergi.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Fishing & Coast — Guide',
        description: 'Fishing and beaches around Muar: coastline, etiquette, safety and what to confirm.',
      },
      card: { title: 'Muar fishing & coast', text: 'Coastline, etiquette and safety.' },
      kicker: 'Water activity',
      h1: 'Fishing and beaches in Muar.',
      lead: 'Muar sits on the coast, so fishing and beach areas are part of what visitors search for. Beach conditions differ by location, tide and season; confirm access and safety on site.',
      facts: [
        { label: 'Type', value: 'Coast & fishing' },
        { label: 'Location', value: 'Around Muar district' },
        { label: 'Timing', value: 'Follow the tide' },
        { label: 'Check', value: 'Access & safety' },
      ],
      blocks: [
        {
          heading: 'The coastline',
          paragraphs: [
            'The Muar district has a coastline with several beach areas. Options differ by location and season.',
          ],
        },
        {
          heading: 'Etiquette & safety',
          bullets: [
            'Respect fishing rules and restricted areas.',
            'Put safety first near water and check the tide.',
            'Keep beaches clean; take your rubbish with you.',
          ],
        },
        {
          heading: 'Before you go',
          callout: 'Beach access, parking and conditions can change with maintenance work. Check the map and current conditions.',
        },
      ],
      faqs: [
        { q: 'Where is fishing near Muar?', a: 'Use the map for the shoreline near town, then confirm access and any permit if needed.' },
        { q: 'Are there beaches for swimming?', a: 'Beach conditions vary; confirm safety and conditions on site before entering the water.' },
        { q: 'Is a fishing permit needed?', a: 'Permit needs vary by area; confirm with local authorities.' },
        { q: 'When is the best time?', a: 'Beaches and fishing often depend on the tide; check the tide schedule before you go.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡钓鱼与海岸指南',
        description: '麻坡周边钓鱼与海滩：海岸线、礼仪、安全与需确认事项。',
      },
      card: { title: '麻坡钓鱼与海岸', text: '海岸线、礼仪与安全。' },
      kicker: '水上活动',
      h1: '麻坡的钓鱼与海滩。',
      lead: '麻坡位于海岸线上，因此钓鱼与海滩区域是游客常搜的项目。海滩状况因地点、潮汐与季节而异；通行与安全请于现场确认。',
      facts: [
        { label: '类型', value: '海岸与钓鱼' },
        { label: '位置', value: '麻坡县一带' },
        { label: '时段', value: '依潮汐' },
        { label: '确认', value: '通行与安全' },
      ],
      blocks: [
        {
          heading: '海岸线',
          paragraphs: [
            '麻坡县有若干海滩区域。选择因地点与季节而异。',
          ],
        },
        {
          heading: '礼仪与安全',
          bullets: [
            '遵守钓鱼规定与禁区。',
            '水边以安全为优先，并查看潮汐。',
            '保持海滩清洁，自行带走垃圾。',
          ],
        },
        {
          heading: '出发前',
          callout: '海滩通行、停车与状况可能随维护工程变动。请查地图与最新状况。',
        },
      ],
      faqs: [
        { q: '麻坡附近哪里可以钓鱼？', a: '请用地图找靠近市区的海岸线，再确认通行与是否需要许可。' },
        { q: '有可以游泳的海滩吗？', a: '海滩状况各异；下水前请于现场确认安全与状况。' },
        { q: '需要钓鱼许可吗？', a: '许可需求因区域而异；请向当地主管单位确认。' },
        { q: '什么时候最好？', a: '海滩与钓鱼常取决于潮汐；出发前请查潮汐表。' },
      ],
    },
  },

  'muar-half-day-itinerary': {
    ms: {
      meta: {
        title: 'Itinerari Separuh Hari Muar — Panduan',
        description: 'Itinerari separuh hari Muar: Tanjung Emas, Bandar Maharani dan makanan dalam 3–5 jam.',
      },
      card: { title: 'Itinerari separuh hari', text: 'Tanjung Emas, bandar lama dan makanan.' },
      kicker: 'Rancangan',
      h1: 'Separuh hari di Muar.',
      lead: 'Satu separuh hari cukup untuk Tanjung Emas, pusat Bandar Maharani dan makanan utama. Mulakan di tepi sungai, masuk ke bandar lama, dan tamatkan dengan makan malam.',
      facts: [
        { label: 'Tempoh', value: '3–5 jam' },
        { label: 'Fokus', value: 'Sungai · bandar lama' },
        { label: 'Masa', value: 'Lewat petang' },
        { label: 'Titik mula', value: 'Tanjung Emas' },
      ],
      blocks: [
        {
          heading: 'Laluan dicadangkan',
          bullets: [
            'Mula di Tanjung Emas pada lewat petang untuk promenad dan senja.',
            'Teruskan ke Masjid Jamek Sultan Ibrahim dan tebing sungai.',
            'Masuk ke Bandar Maharani untuk Menara Jam dan mural.',
            'Tamatkan dengan makan malam di Jalan Bentayan atau pusat bandar.',
          ],
        },
        {
          heading: 'Petua',
          paragraphs: [
            'Susun laluan yang bergerak dari tepi sungai ke pusat bandar supaya tidak berulang-alik.',
          ],
        },
        {
          heading: 'Sebelum pergi',
          callout: 'Semak waktu operasi makanan dan peta pada hari lawatan. Jika mahu pelayaran bot, sahkan dengan AZ Marine lebih awal.',
        },
      ],
      faqs: [
        { q: 'Berapa lama itinerari ini?', a: 'Kira-kira 3–5 jam, bergantung kepada kadar anda.' },
        { q: 'Boleh masukkan bot sungai?', a: 'Ya, tetapi sahkan operasi dan tempoh dengan AZ Marine lebih awal.' },
        { q: 'Bila masa terbaik?', a: 'Lewat petang agar dapat senja di Tanjung Emas.' },
        { q: 'Boleh dilakukan berjalan kaki?', a: 'Sebahagian ya; dari tepi sungai ke bandar lama mungkin perlu e-hailing atau berjalan singkat.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Half-Day Itinerary — Guide',
        description: 'Muar half-day itinerary: Tanjung Emas, Bandar Maharani and food within 3–5 hours.',
      },
      card: { title: 'Half-day itinerary', text: 'Tanjung Emas, old town and food.' },
      kicker: 'Plan',
      h1: 'A half day in Muar.',
      lead: 'One half day covers Tanjung Emas, central Bandar Maharani and the main food stops. Start at the riverbank, move into the old town, and finish with dinner.',
      facts: [
        { label: 'Duration', value: '3–5 hours' },
        { label: 'Focus', value: 'River · old town' },
        { label: 'Timing', value: 'Late afternoon' },
        { label: 'Start point', value: 'Tanjung Emas' },
      ],
      blocks: [
        {
          heading: 'Suggested route',
          bullets: [
            'Start at Tanjung Emas in the late afternoon for the promenade and sunset.',
            'Continue to Masjid Jamek Sultan Ibrahim and the river bank.',
            'Move into Bandar Maharani for the Clock Tower and murals.',
            'Finish with dinner at Jalan Bentayan or the town centre.',
          ],
        },
        {
          heading: 'Tips',
          paragraphs: [
            'Build a route that moves from the riverbank into the town centre so you do not double back.',
          ],
        },
        {
          heading: 'Before you go',
          callout: 'Check food opening hours and the map on the day. If you want the boat trip, confirm with AZ Marine earlier.',
        },
      ],
      faqs: [
        { q: 'How long is this itinerary?', a: 'About 3–5 hours, depending on your pace.' },
        { q: 'Can I include the river cruise?', a: 'Yes, but confirm operation and duration with AZ Marine earlier.' },
        { q: 'When is the best time?', a: 'Late afternoon so you catch the sunset at Tanjung Emas.' },
        { q: 'Can it be done on foot?', a: 'Partly; from the riverbank to the old town may need e-hailing or a short walk.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡半日行程指南',
        description: '麻坡半日行程：Tanjung Emas、皇城与美食，3–5 小时内完成。',
      },
      card: { title: '半日行程', text: 'Tanjung Emas、老城与美食。' },
      kicker: '规划',
      h1: '麻坡半日。',
      lead: '一个半日足以覆盖 Tanjung Emas、皇城市中心与主要美食。从河畔开始，走进老城，再以晚餐收尾。',
      facts: [
        { label: '时长', value: '3–5 小时' },
        { label: '主题', value: '河流 · 老城' },
        { label: '时段', value: '傍晚' },
        { label: '起点', value: 'Tanjung Emas' },
      ],
      blocks: [
        {
          heading: '建议路线',
          bullets: [
            '傍晚从 Tanjung Emas 开始，走步道看日落。',
            '接着前往 Masjid Jamek Sultan Ibrahim 与河畔。',
            '进入皇城看钟楼与壁画。',
            '最后在 Jalan Bentayan 或市区吃晚餐。',
          ],
        },
        {
          heading: '建议',
          paragraphs: [
            '安排从河畔走进市中心的路线，避免来回折返。',
          ],
        },
        {
          heading: '出发前',
          callout: '请于当天查美食营业时间与地图。若想坐游船，请提前向 AZ Marine 确认。',
        },
      ],
      faqs: [
        { q: '这行程要多久？', a: '约 3–5 小时，视你的步调而定。' },
        { q: '能加河游船吗？', a: '可以，但请提前向 AZ Marine 确认营业与航程。' },
        { q: '什么时候最好？', a: '傍晚，以便赶上 Tanjung Emas 的日落。' },
        { q: '可以步行吗？', a: '部分可以；从河畔到老城可能需要网约车或短程步行。' },
      ],
    },
  },

  'muar-one-day-itinerary': {
    ms: {
      meta: {
        title: 'Itinerari Sehari Muar — Panduan Lengkap',
        description: 'Itinerari sehari Muar: Tanjung Emas, Bandar Maharani, makanan, mural dan pantai dalam satu hari.',
      },
      card: { title: 'Itinerari sehari', text: 'Taman, bandar lama, makanan dan pantai.' },
      kicker: 'Rancangan',
      h1: 'Sehari penuh di Muar.',
      lead: 'Satu hari penuh membolehkan anda menikmati Tanjung Emas, pusat Bandar Maharani, makanan utama, mural dan kawasan pesisir. Pecahkan kepada pagi dan lewat petang supaya tidak terlalu padat.',
      facts: [
        { label: 'Tempoh', value: 'Satu hari penuh' },
        { label: 'Fokus', value: 'Taman · bandar · pantai' },
        { label: 'Masa', value: 'Pagi & lewat petang' },
        { label: 'Titik mula', value: 'Tanjung Emas' },
      ],
      blocks: [
        {
          heading: 'Laluan dicadangkan',
          bullets: [
            'Pagi: sarapan di Taman Sri Tanjung, kemudian berjalan di promenad.',
            'Tengah hari: makan tengah hari di Bandar Maharani atau Jalan Bentayan.',
            'Petang: mural, Menara Jam dan tebing sungai.',
            'Lewat petang: kembali ke Tanjung Emas untuk senja.',
          ],
        },
        {
          heading: 'Petua',
          paragraphs: [
            'Gunakan waktu tengah hari untuk makan dan berehat di dalam bangunan, kemudian teruskan apabila cuaca lebih sejuk.',
          ],
        },
        {
          heading: 'Sebelum pergi',
          callout: 'Semak waktu operasi makanan dan peta. Jika mahu pelayaran bot, sahkan dengan AZ Marine lebih awal.',
        },
      ],
      faqs: [
        { q: 'Berapa lama itinerari ini?', a: 'Satu hari penuh, lebih selesa jika dipecahkan kepada dua bahagian.' },
        { q: 'Boleh masukkan pantai?', a: 'Ya, kawasan pesisir berada di daerah Muar; sahkan akses dan keselamatan di lokasi.' },
        { q: 'Bila masa terbaik?', a: 'Mulakan pagi dan tamatkan dengan senja di Tanjung Emas.' },
        { q: 'Perlu kereta?', a: 'Kereta memudahkan pergerakan antara taman, bandar dan pantai; e-hailing juga tersedia.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar One-Day Itinerary — Full Guide',
        description: 'Muar one-day itinerary: Tanjung Emas, Bandar Maharani, food, murals and coast in one day.',
      },
      card: { title: 'One-day itinerary', text: 'Park, old town, food and coast.' },
      kicker: 'Plan',
      h1: 'A full day in Muar.',
      lead: 'A full day lets you enjoy Tanjung Emas, central Bandar Maharani, the main food stops, murals and the coastal area. Split it into morning and late afternoon so it is not too packed.',
      facts: [
        { label: 'Duration', value: 'Full day' },
        { label: 'Focus', value: 'Park · town · coast' },
        { label: 'Timing', value: 'Morning & late afternoon' },
        { label: 'Start point', value: 'Tanjung Emas' },
      ],
      blocks: [
        {
          heading: 'Suggested route',
          bullets: [
            'Morning: breakfast at Taman Sri Tanjung, then walk the promenade.',
            'Midday: lunch at Bandar Maharani or Jalan Bentayan.',
            'Afternoon: murals, Clock Tower and river bank.',
            'Late afternoon: return to Tanjung Emas for sunset.',
          ],
        },
        {
          heading: 'Tips',
          paragraphs: [
            'Use the midday for eating and resting indoors, then continue when it is cooler.',
          ],
        },
        {
          heading: 'Before you go',
          callout: 'Check food opening hours and the map. If you want the boat trip, confirm with AZ Marine earlier.',
        },
      ],
      faqs: [
        { q: 'How long is this itinerary?', a: 'A full day, more comfortable if split into two parts.' },
        { q: 'Can I include the beach?', a: 'Yes, the coastal area is in Muar district; confirm access and safety on site.' },
        { q: 'When is the best time?', a: 'Start in the morning and finish with sunset at Tanjung Emas.' },
        { q: 'Do I need a car?', a: 'A car helps move between park, town and coast; e-hailing is also available.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡一日行程完整指南',
        description: '麻坡一日行程：Tanjung Emas、皇城、美食、壁画与海岸，一天走完。',
      },
      card: { title: '一日行程', text: '园区、老城、美食与海岸。' },
      kicker: '规划',
      h1: '麻坡一整天。',
      lead: '一整天可以好好享受 Tanjung Emas、皇城市中心、主要美食、壁画与海岸区域。拆成上午与傍晚两段，不会太赶。',
      facts: [
        { label: '时长', value: '一整天' },
        { label: '主题', value: '园区 · 老城 · 海岸' },
        { label: '时段', value: '上午与傍晚' },
        { label: '起点', value: 'Tanjung Emas' },
      ],
      blocks: [
        {
          heading: '建议路线',
          bullets: [
            '上午：在 Taman Sri Tanjung 吃早餐，然后走步道。',
            '中午：在皇城或 Jalan Bentayan 吃午餐。',
            '下午：壁画、钟楼与河畔。',
            '傍晚：回到 Tanjung Emas 看日落。',
          ],
        },
        {
          heading: '建议',
          paragraphs: [
            '把中午用来在室内用餐与休息，等天气转凉再继续。',
          ],
        },
        {
          heading: '出发前',
          callout: '请查美食营业时间与地图。若想坐游船，请提前向 AZ Marine 确认。',
        },
      ],
      faqs: [
        { q: '这行程要多久？', a: '一整天，拆成两段会更舒适。' },
        { q: '能加海滩吗？', a: '可以，海岸区域在麻坡县内；请于现场确认通行与安全。' },
        { q: '什么时候最好？', a: '上午开始，以 Tanjung Emas 的日落收尾。' },
        { q: '需要开车吗？', a: '开车便于在园区、市区与海岸间移动；也可使用网约车。' },
      ],
    },
  },

  'muar-weekend-itinerary': {
    ms: {
      meta: {
        title: 'Itinerari Hujung Minggu Muar — Panduan',
        description: 'Itinerari hujung minggu Muar: gabungan taman, bandar, makanan dan aktiviti air dengan lebih masa.',
      },
      card: { title: 'Itinerari hujung minggu', text: 'Taman, bandar, makanan dan air.' },
      kicker: 'Rancangan',
      h1: 'Hujung minggu di Muar.',
      lead: 'Hujung minggu memberi lebih masa untuk menggabungkan Tanjung Emas, Bandar Maharani, makanan dan aktiviti air seperti Muar River Cruise. Datang lebih awal kerana taman lebih sesak.',
      facts: [
        { label: 'Tempoh', value: '1–2 hari' },
        { label: 'Fokus', value: 'Taman · bandar · air' },
        { label: 'Masa', value: 'Hujung minggu' },
        { label: 'Tips', value: 'Datang lebih awal' },
      ],
      blocks: [
        {
          heading: 'Laluan dicadangkan',
          bullets: [
            'Hari 1: Tanjung Emas, promenad dan senja, kemudian makan malam.',
            'Hari 2: Bandar Maharani, mural, Menara Jam dan kawasan makan.',
            'Masukkan Muar River Cruise jika beroperasi pada hujung minggu.',
            'Pertimbangkan pantai jika ada masa lebih.',
          ],
        },
        {
          heading: 'Petua',
          paragraphs: [
            'Taman lebih sesak pada hujung minggu dan cuti; datang sebelum 5:00 petang untuk parkir yang lebih mudah.',
          ],
        },
        {
          heading: 'Sebelum pergi',
          callout: 'Sahkan operasi bot dengan AZ Marine lebih awal. Semak peta dan waktu operasi makanan.',
        },
      ],
      faqs: [
        { q: 'Berapa hari cukup?', a: 'Satu hujung minggu penuh mencukupi; tambah malam jika mahu pantai.' },
        { q: 'Bolehkah bot sungai pada hujung minggu?', a: 'Visit Johor 2026 menyenaraikan untuk hujung minggu dan cuti; sahkan dengan AZ Marine.' },
        { q: 'Bila masa paling sesak?', a: 'Lewat petang pada hujung minggu dan cuti.' },
        { q: 'Perlu rancang lebih awal?', a: 'Ya, sahkan bot, makanan dan parkir lebih awal kerana permintaan tinggi.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Weekend Itinerary — Guide',
        description: 'Muar weekend itinerary: a mix of park, town, food and water activities with extra time.',
      },
      card: { title: 'Weekend itinerary', text: 'Park, town, food and water.' },
      kicker: 'Plan',
      h1: 'A weekend in Muar.',
      lead: 'A weekend gives more time to combine Tanjung Emas, Bandar Maharani, food and water activities like the Muar River Cruise. Come earlier because the park is busier.',
      facts: [
        { label: 'Duration', value: '1–2 days' },
        { label: 'Focus', value: 'Park · town · water' },
        { label: 'Timing', value: 'Weekend' },
        { label: 'Tip', value: 'Come earlier' },
      ],
      blocks: [
        {
          heading: 'Suggested route',
          bullets: [
            'Day 1: Tanjung Emas, promenade and sunset, then dinner.',
            'Day 2: Bandar Maharani, murals, Clock Tower and food area.',
            'Add the Muar River Cruise if it runs on weekends.',
            'Consider the coast if you have extra time.',
          ],
        },
        {
          heading: 'Tips',
          paragraphs: [
            'The park is busier on weekends and holidays; arrive before 5:00 pm for easier parking.',
          ],
        },
        {
          heading: 'Before you go',
          callout: 'Confirm the boat with AZ Marine earlier. Check the map and food opening hours.',
        },
      ],
      faqs: [
        { q: 'How many days are enough?', a: 'One full weekend is enough; add a night if you want the coast.' },
        { q: 'Is the river cruise on weekends?', a: 'Visit Johor 2026 lists it for weekends and holidays; confirm with AZ Marine.' },
        { q: 'When is it busiest?', a: 'Late afternoon on weekends and holidays.' },
        { q: 'Plan ahead?', a: 'Yes, confirm the boat, food and parking earlier because demand is high.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡周末行程指南',
        description: '麻坡周末行程：园区、老城、美食与水上活动的组合，时间更充裕。',
      },
      card: { title: '周末行程', text: '园区、老城、美食与水上。' },
      kicker: '规划',
      h1: '麻坡周末。',
      lead: '周末时间更充裕，可以组合 Tanjung Emas、皇城、美食，以及麻坡河游船等水上活动。园区较拥挤，请早点到。',
      facts: [
        { label: '时长', value: '1–2 天' },
        { label: '主题', value: '园区 · 老城 · 水上' },
        { label: '时段', value: '周末' },
        { label: '建议', value: '提早到达' },
      ],
      blocks: [
        {
          heading: '建议路线',
          bullets: [
            '第一天：Tanjung Emas、步道与日落，然后晚餐。',
            '第二天：皇城、壁画、钟楼与美食区。',
            '若周末有游船，可加入麻坡河游船。',
            '若有空，考虑海岸区域。',
          ],
        },
        {
          heading: '建议',
          paragraphs: [
            '周末与假日园区较挤；下午 5 点前到达以便停车较轻松。',
          ],
        },
        {
          heading: '出发前',
          callout: '请提前向 AZ Marine 确认游船。并查地图与美食营业时间。',
        },
      ],
      faqs: [
        { q: '几天够？', a: '一个完整周末足够；若想去海岸可多留一晚。' },
        { q: '周末有河游船吗？', a: 'Visit Johor 2026 将其列为周末及假日营业；请向 AZ Marine 确认。' },
        { q: '什么时候最挤？', a: '周末与假日的傍晚。' },
        { q: '需要提前规划吗？', a: '需要，因需求高，请提前确认游船、美食与停车。' },
      ],
    },
  },

  'muar-family-itinerary': {
    ms: {
      meta: {
        title: 'Itinerari Keluarga Muar — Panduan Mesra Kanak-kanak',
        description: 'Itinerari keluarga Muar: laluan rata, ruang terbuka, makanan dan petua keselesaan.',
      },
      card: { title: 'Itinerari keluarga', text: 'Laluan rata, ruang terbuka dan makanan.' },
      kicker: 'Rancangan',
      h1: 'Muar mesra keluarga.',
      lead: 'Tanjung Emas sesuai untuk keluarga dengan laluan rata, ruang terbuka dan senja. Pilih waktu pagi atau lewat petang, bawa air dan topi, serta rancang makan berhampiran.',
      facts: [
        { label: 'Tempoh', value: 'Separuh hari' },
        { label: 'Fokus', value: 'Ruang terbuka · kanak-kanak' },
        { label: 'Masa', value: 'Pagi & lewat petang' },
        { label: 'Tips', value: 'Bawa air & topi' },
      ],
      blocks: [
        {
          heading: 'Laluan dicadangkan',
          bullets: [
            'Mula di Taman Sri Tanjung untuk berjalan santai dan bermain.',
            'Teruskan ke promenad tepi sungai yang rata.',
            'Rehat di dataran terbuka pada lewat petang.',
            'Tamatkan dengan makan keluarga berhampiran.',
          ],
        },
        {
          heading: 'Keselesaan kanak-kanak',
          paragraphs: [
            'Awasi kanak-kanak berhampiran air. Bawa air minuman, topi dan sedikit snek.',
          ],
        },
        {
          heading: 'Sebelum pergi',
          callout: 'Semak tandas dan teduhan di lokasi. Elakkan tengah hari yang panas; pilih waktu pagi atau senja.',
        },
      ],
      faqs: [
        { q: 'Adakah sesuai untuk kanak-kanak?', a: 'Ya, laluan rata dan ruang terbuka sesuai; awasi berhampiran air.' },
        { q: 'Boleh bawa kereta sorong?', a: 'Ya, laluan berturap rata mesra kereta sorong.' },
        { q: 'Di mana makan keluarga?', a: 'Taman Sri Tanjung dan Bandar Maharani menawarkan pilihan keluarga.' },
        { q: 'Bila masa terbaik?', a: 'Pagi atau lewat petang untuk suhu lebih selesa.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Family Itinerary — Kid-Friendly Guide',
        description: 'Muar family itinerary: flat paths, open space, food and comfort tips.',
      },
      card: { title: 'Family itinerary', text: 'Flat paths, open space and food.' },
      kicker: 'Plan',
      h1: 'Muar for families.',
      lead: 'Tanjung Emas suits families with flat paths, open space and sunset. Choose morning or late afternoon, bring water and a cap, and plan nearby food.',
      facts: [
        { label: 'Duration', value: 'Half day' },
        { label: 'Focus', value: 'Open space · kids' },
        { label: 'Timing', value: 'Morning & late afternoon' },
        { label: 'Tip', value: 'Bring water & cap' },
      ],
      blocks: [
        {
          heading: 'Suggested route',
          bullets: [
            'Start at Taman Sri Tanjung for relaxed walking and play.',
            'Continue to the flat riverside promenade.',
            'Rest at the open square in the late afternoon.',
            'Finish with family food nearby.',
          ],
        },
        {
          heading: 'Child comfort',
          paragraphs: [
            'Supervise children near the water. Bring drinking water, a cap and a few snacks.',
          ],
        },
        {
          heading: 'Before you go',
          callout: 'Check toilets and shade on site. Avoid the hot midday; choose morning or sunset.',
        },
      ],
      faqs: [
        { q: 'Is it suitable for children?', a: 'Yes, flat paths and open space suit it; supervise near water.' },
        { q: 'Can I bring a stroller?', a: 'Yes, the flat paved path is stroller friendly.' },
        { q: 'Where is family food?', a: 'Taman Sri Tanjung and Bandar Maharani offer family choices.' },
        { q: 'When is the best time?', a: 'Morning or late afternoon for more comfortable temperatures.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡亲子行程指南',
        description: '麻坡亲子行程：平坦步道、开阔空间、美食与舒适建议。',
      },
      card: { title: '亲子行程', text: '平坦步道、开阔空间与美食。' },
      kicker: '规划',
      h1: '麻坡亲子游。',
      lead: 'Tanjung Emas 适合亲子：平坦步道、开阔空间与日落。选择清晨或傍晚，自备饮水与帽子，并在附近安排用餐。',
      facts: [
        { label: '时长', value: '半日' },
        { label: '主题', value: '开阔空间 · 儿童' },
        { label: '时段', value: '清晨与傍晚' },
        { label: '建议', value: '带饮水与帽子' },
      ],
      blocks: [
        {
          heading: '建议路线',
          bullets: [
            '从 Taman Sri Tanjung 开始轻松散步与玩耍。',
            '接着走平坦的河畔步道。',
            '傍晚在开阔广场休息。',
            '最后在附近家庭用餐收尾。',
          ],
        },
        {
          heading: '儿童舒适',
          paragraphs: [
            '在水边请看护儿童。请自备饮水、帽子与少量点心。',
          ],
        },
        {
          heading: '出发前',
          callout: '请于现场确认洗手间与遮阴。避开正午高温；选择清晨或日落。',
        },
      ],
      faqs: [
        { q: '适合小孩吗？', a: '适合，平坦步道与开阔空间很合适；水边请看护。' },
        { q: '能带婴儿车吗？', a: '可以，平坦铺装步道对婴儿车很友好。' },
        { q: '哪里有家庭餐？', a: 'Taman Sri Tanjung 与皇城都有家庭选择。' },
        { q: '什么时候最好？', a: '清晨或傍晚气温较舒适。' },
      ],
    },
  },

  'muar-rainy-day-things-to-do': {
    ms: {
      meta: {
        title: 'Aktiviti Hujan di Muar — Panduan',
        description: 'Apa yang boleh dibuat di Muar jika hujan: makanan, kopitiam, mural bertutup dan petua perancangan.',
      },
      card: { title: 'Aktiviti hari hujan', text: 'Makanan, kopitiam dan petua.' },
      kicker: 'Rancangan',
      h1: 'Hari hujan di Muar.',
      lead: 'Jika hujan, alihkan fokus kepada makanan, kopitiam dan kawasan bertutup di sekitar Bandar Maharani dan Taman Sri Tanjung. Semak ramalan cuaca sebelum pergi.',
      facts: [
        { label: 'Fokus', value: 'Makanan · bertutup' },
        { label: 'Lokasi', value: 'Bandar Maharani · Taman Sri Tanjung' },
        { label: 'Masa', value: 'Siang & petang' },
        { label: 'Semak', value: 'Ramalan cuaca' },
      ],
      blocks: [
        {
          heading: 'Pilihan bertutup',
          bullets: [
            'Kopitiam dan restoran di Bandar Maharani untuk sarapan atau minum.',
            'Pusat bandar untuk makan tengah hari dan membeli-belah kecil.',
            'Gerai makanan di Taman Sri Tanjung jika bertutup.',
          ],
        },
        {
          heading: 'Aktiviti luar yang fleksibel',
          paragraphs: [
            'Mural dan tebing sungai masih boleh dilihat jika hujan ringan, tetapi bawa payung. Elakkan aktiviti air seperti bot sungai jika cuaca tidak menentu.',
          ],
        },
        {
          heading: 'Petua',
          callout: 'Semak ramalan cuaca dan sahkan waktu operasi premis. Jika ribut, utamakan keselamatan dan pilih aktiviti bertutup.',
        },
      ],
      faqs: [
        { q: 'Apa boleh dibuat jika hujan?', a: 'Fokus kepada makanan, kopitiam dan kawasan bertutup di Bandar Maharani dan Taman Sri Tanjung.' },
        { q: 'Boleh lihat mural?', a: 'Ya, jika hujan ringan; bawa payung dan elakkan lantai licin.' },
        { q: 'Bot sungai beroperasi?', a: 'Tidak disahkan semasa hujan; sahkan dengan AZ Marine dan utamakan keselamatan.' },
        { q: 'Bila masa terbaik?', a: 'Siang atau petang; semak ramalan cuaca sebelum pergi.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Rainy Day Things to Do — Guide',
        description: 'What to do in Muar if it rains: food, kopitiam, covered spots and planning tips.',
      },
      card: { title: 'Rainy day activities', text: 'Food, kopitiam and tips.' },
      kicker: 'Plan',
      h1: 'A rainy day in Muar.',
      lead: 'If it rains, shift focus to food, kopitiam and covered areas around Bandar Maharani and Taman Sri Tanjung. Check the weather forecast before you go.',
      facts: [
        { label: 'Focus', value: 'Food · covered' },
        { label: 'Location', value: 'Bandar Maharani · Taman Sri Tanjung' },
        { label: 'Timing', value: 'Daytime & afternoon' },
        { label: 'Check', value: 'Weather forecast' },
      ],
      blocks: [
        {
          heading: 'Covered options',
          bullets: [
            'Kopitiam and restaurants in Bandar Maharani for breakfast or a drink.',
            'Town centre for lunch and small shopping.',
            'Food stalls at Taman Sri Tanjung if covered.',
          ],
        },
        {
          heading: 'Flexible outdoor activity',
          paragraphs: [
            'Murals and the river bank can still be seen in light rain, but bring an umbrella. Avoid water activities like the boat if the weather is uncertain.',
          ],
        },
        {
          heading: 'Tips',
          callout: 'Check the weather forecast and confirm premises hours. If there is a storm, put safety first and choose covered activities.',
        },
      ],
      faqs: [
        { q: 'What can I do if it rains?', a: 'Focus on food, kopitiam and covered areas in Bandar Maharani and Taman Sri Tanjung.' },
        { q: 'Can I see the murals?', a: 'Yes, in light rain; bring an umbrella and avoid slippery floors.' },
        { q: 'Is the river cruise running?', a: 'Not confirmed during rain; check with AZ Marine and put safety first.' },
        { q: 'When is the best time?', a: 'Daytime or afternoon; check the forecast before you go.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡雨天做什么指南',
        description: '麻坡下雨怎么办：美食、咖啡店、有遮挡处与规划建议。',
      },
      card: { title: '雨天活动', text: '美食、咖啡店与建议。' },
      kicker: '规划',
      h1: '麻坡的雨天。',
      lead: '若下雨，把重心转到皇城（Bandar Maharani）与 Taman Sri Tanjung 一带的美食、咖啡店与有遮挡处。出发前请查天气预报。',
      facts: [
        { label: '重点', value: '美食 · 有遮挡' },
        { label: '位置', value: '皇城 · Taman Sri Tanjung' },
        { label: '时段', value: '白天与下午' },
        { label: '确认', value: '天气预报' },
      ],
      blocks: [
        {
          heading: '有遮挡的选择',
          bullets: [
            '皇城的咖啡店与餐馆可吃早餐或喝东西。',
            '市中心用午餐与小额购物。',
            'Taman Sri Tanjung 若有遮挡的摊位也可觅食。',
          ],
        },
        {
          heading: '弹性的户外活动',
          paragraphs: [
            '小雨时仍可看壁画与河畔，但请带伞。天气不稳时避免游船等水上活动。',
          ],
        },
        {
          heading: '建议',
          callout: '请查天气预报并确认店家营业时间。若有雷雨，以安全为优先，选择有遮挡的活动。',
        },
      ],
      faqs: [
        { q: '下雨能做什么？', a: '把重心放在皇城与 Taman Sri Tanjung 一带的美食、咖啡店与有遮挡处。' },
        { q: '能看壁画吗？', a: '小雨可以；请带伞并避开湿滑地面。' },
        { q: '河游船还开吗？', a: '雨天未确认；请向 AZ Marine 确认并以安全为优先。' },
        { q: '什么时候最好？', a: '白天或下午；出发前请查预报。' },
      ],
    },
  },
};
