import { images } from '../data/market';
import type { Locale } from '../i18n/locales';
import type { Faq } from './home';

export type TopicId = 'jeti' | 'dataran' | 'makan' | 'tarikan';

export const topicIds: TopicId[] = ['jeti', 'dataran', 'makan', 'tarikan'];

export const topicSlug: Record<TopicId, string> = {
  jeti: 'jeti-tanjung-emas',
  dataran: 'dataran-tanjung-emas',
  makan: 'makan-muar',
  tarikan: 'tarikan-muar',
};

export const topicImage: Record<TopicId, string> = {
  jeti: images.shore,
  dataran: images.promenade,
  makan: images.sunset,
  tarikan: images.hero,
};

export interface TopicBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicContent {
  meta: { title: string; description: string };
  card: { title: string; text: string };
  kicker: string;
  h1: string;
  lead: string;
  facts: { label: string; value: string }[];
  blocks: TopicBlock[];
  faqs: Faq[];
}

export const topics: Record<TopicId, Record<Locale, TopicContent>> = {
  jeti: {
    ms: {
  "meta": {
    "title": "Jeti Tanjung Emas Muar: Waktu Pelayaran & Panduan",
    "description": "Panduan Muar River Cruise: operasi hujung minggu dan cuti, alamat Jalan Tanjung 4, hubungan operator dan perkara yang perlu disahkan sebelum menaiki bot."
  },
  "card": {
    "title": "Jeti Tanjung Emas & Muar River Cruise",
    "text": "Panduan Muar River Cruise: operasi hujung minggu dan cuti, alamat Jalan Tanjung 4, hubungan operator dan perkara yang perlu disahkan sebelum menaiki bot."
  },
  "kicker": "Operator pelayaran",
  "h1": "Jeti Tanjung Emas & Muar River Cruise",
  "lead": "Visit Johor 2026 menyenaraikan Muar River Cruise pada hujung minggu dan hari cuti. Sahkan tarikh, waktu berlepas, tempoh dan tambang dengan operator AZ Marine sebelum ke jeti; waktu taman bukan jadual bot.",
  "facts": [
    {
      "label": "Alamat operator",
      "value": "Jalan Tanjung 4, Taman Emas, 84000 Muar"
    },
    {
      "label": "Hari operasi",
      "value": "Hujung minggu & cuti"
    },
    {
      "label": "Tempoh & tambang",
      "value": "Sahkan dengan operator"
    },
    {
      "label": "Operator pelayaran",
      "value": "AZ Marine · 013-6692263"
    }
  ],
  "blocks": [
    {
      "heading": "Lokasi dan tempat menaiki bot",
      "paragraphs": [
        "AZ Marine menerbitkan alamat Jalan Tanjung 4, Taman Emas. Hubungi operator untuk titik berkumpul dan jeti berlepas sebenar sebelum bergerak. Pautan peta taman dalam panduan ini merujuk taman, bukan jaminan lokasi menaiki bot."
      ]
    },
    {
      "heading": "Tempahan dan perkara untuk disahkan",
      "paragraphs": [
        "Tambang, tempoh dan jadual terperinci semasa belum dapat disahkan pada 19 Oktober 2026. Hubungi AZ Marine melalui pautan rasmi atau 013-6692263."
      ],
      "bullets": [
        "Sahkan tarikh operasi, masa berkumpul dan pelayaran terakhir.",
        "Tanya tambang dewasa/kanak-kanak, tempoh perjalanan dan kaedah bayaran.",
        "Sahkan titik menaiki bot, akses kerusi roda dan polisi cuaca."
      ]
    },
    {
      "heading": "Waktu pada peta",
      "paragraphs": [
        "Google Maps Tanjung Emas Muar menunjukkan 06:00–09:00 dan 15:00–19:00 setiap hari, disemak 19 Oktober 2026. Ini waktu penyenaraian taman, bukan jadual pelayaran atau semua vendor. Ikut papan tanda dan sahkan akses semasa.",
        "Tidak. Penyenaraian peta taman mempunyai dua slot harian; jadual pelayaran ditentukan operator dan perlu disahkan berasingan."
      ]
    },
    {
      "heading": "Sebelum menaiki bot",
      "paragraphs": [
        "Ikut arahan kru dan gunakan jaket keselamatan yang sesuai. Jangan biarkan kanak-kanak berdiri di tepi jeti tanpa pengawasan. Rancang aktiviti taman sebagai pilihan jika pelayaran dibatalkan."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Adakah pelayaran beroperasi setiap hari?",
      "a": "Visit Johor 2026 menyenaraikan Muar River Cruise pada hujung minggu dan hari cuti. Sahkan tarikh, waktu berlepas, tempoh dan tambang dengan operator AZ Marine sebelum ke jeti; waktu taman bukan jadual bot."
    },
    {
      "q": "Berapakah tambang semasa?",
      "a": "Tambang, tempoh dan jadual terperinci semasa belum dapat disahkan pada 19 Oktober 2026. Hubungi AZ Marine melalui pautan rasmi atau 013-6692263."
    },
    {
      "q": "Adakah waktu taman sama dengan waktu bot?",
      "a": "Tidak. Penyenaraian peta taman mempunyai dua slot harian; jadual pelayaran ditentukan operator dan perlu disahkan berasingan."
    }
  ]
},
    en: {
  "meta": {
    "title": "Jeti Tanjung Emas & Muar River Cruise Guide",
    "description": "Plan Muar River Cruise with weekend and holiday operation, the Jalan Tanjung 4 operator address, contact details and checks before boarding."
  },
  "card": {
    "title": "Jeti Tanjung Emas & Muar River Cruise",
    "text": "Plan Muar River Cruise with weekend and holiday operation, the Jalan Tanjung 4 operator address, contact details and checks before boarding."
  },
  "kicker": "Cruise operator",
  "h1": "Jeti Tanjung Emas & Muar River Cruise",
  "lead": "Visit Johor 2026 lists Muar River Cruise for weekends and holidays. Confirm your date, departure time, duration and fare with operator AZ Marine before going to the jetty; park hours are not a boat timetable.",
  "facts": [
    {
      "label": "Operator address",
      "value": "Jalan Tanjung 4, Taman Emas, 84000 Muar"
    },
    {
      "label": "Operating days",
      "value": "Weekends & holidays"
    },
    {
      "label": "Duration & fare",
      "value": "Confirm with operator"
    },
    {
      "label": "Cruise operator",
      "value": "AZ Marine · 013-6692263"
    }
  ],
  "blocks": [
    {
      "heading": "Location and boarding point",
      "paragraphs": [
        "AZ Marine publishes its address as Jalan Tanjung 4, Taman Emas. Confirm the actual meeting point and departure jetty with the operator before travelling. The park map link in this guide identifies the park, not a guaranteed boarding point."
      ]
    },
    {
      "heading": "Bookings and checks before travelling",
      "paragraphs": [
        "Current fares, trip duration and a detailed timetable were not confirmed on 19 October 2026. Contact AZ Marine through its official link or 013-6692263."
      ],
      "bullets": [
        "Confirm the operating date, meeting time and last sailing.",
        "Ask for adult/child fares, trip duration and payment methods.",
        "Check the boarding point, wheelchair access and weather policy."
      ]
    },
    {
      "heading": "Map-listed hours",
      "paragraphs": [
        "The Tanjung Emas Muar Google Maps listing showed 06:00–09:00 and 15:00–19:00 daily when checked on 19 October 2026. These are park listing hours, not a boat timetable or every vendor’s hours. Follow on-site signs and confirm current access.",
        "No. The park map listing has two daily time slots; sailings follow an operator schedule that must be confirmed separately."
      ]
    },
    {
      "heading": "Before boarding",
      "paragraphs": [
        "Follow crew instructions and wear an appropriately fitted life jacket. Supervise children at the jetty edge. Keep a park visit as an alternative if the sailing is cancelled."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Does the river cruise run every day?",
      "a": "Visit Johor 2026 lists Muar River Cruise for weekends and holidays. Confirm your date, departure time, duration and fare with operator AZ Marine before going to the jetty; park hours are not a boat timetable."
    },
    {
      "q": "What is the current fare?",
      "a": "Current fares, trip duration and a detailed timetable were not confirmed on 19 October 2026. Contact AZ Marine through its official link or 013-6692263."
    },
    {
      "q": "Are park hours the same as boat times?",
      "a": "No. The park map listing has two daily time slots; sailings follow an operator schedule that must be confirmed separately."
    }
  ]
},
    zh: {
  "meta": {
    "title": "黄金丹绒码头与麻坡河游船指南",
    "description": "了解麻坡河游船周末与假日营业安排、Jalan Tanjung 4营运方地址、联系方式及登船前需核对的票价与班次。"
  },
  "card": {
    "title": "黄金丹绒码头与麻坡河游船指南",
    "text": "了解麻坡河游船周末与假日营业安排、Jalan Tanjung 4营运方地址、联系方式及登船前需核对的票价与班次。"
  },
  "kicker": "游船营运方",
  "h1": "黄金丹绒码头与麻坡河游船指南",
  "lead": "Visit Johor 2026将麻坡河游船列为周末及假日营业。前往码头前，请向AZ Marine确认出发日期、班次、航程与票价；公园开放时间不能当作船班时刻表。",
  "facts": [
    {
      "label": "营运方地址",
      "value": "Jalan Tanjung 4, Taman Emas, 84000 Muar"
    },
    {
      "label": "营业日",
      "value": "周末及假日"
    },
    {
      "label": "航程与票价",
      "value": "向营运方确认"
    },
    {
      "label": "游船营运方",
      "value": "AZ Marine · 013-6692263"
    }
  ],
  "blocks": [
    {
      "heading": "位置与实际登船点",
      "paragraphs": [
        "AZ Marine公布的地址为Jalan Tanjung 4、Taman Emas。出发前请确认当天集合点与实际出船码头。本指南的公园地图链接用于定位公园，不代表已核实的登船点。"
      ]
    },
    {
      "heading": "预约前要核对什么",
      "paragraphs": [
        "截至2026年10月19日，未能核实当前票价、航程与详细班表。请通过官网或013-6692263联系AZ Marine。"
      ],
      "bullets": [
        "确认营业日期、集合时间与最后一班船。",
        "询问成人及儿童票价、航程长度与付款方式。",
        "确认登船点、轮椅通行条件及天气取消安排。"
      ]
    },
    {
      "heading": "地图所列时段",
      "paragraphs": [
        "2026年10月19日核对的 Tanjung Emas Muar 地图条目显示，每日06:00–09:00及15:00–19:00开放。这是公园条目的时间，并非游船或所有摊位的营业时间；实际通行请依现场告示确认。",
        "不是。公园地图条目列有每日两个时段，游船须按营运方另行确认的班次安排。"
      ]
    },
    {
      "heading": "登船准备",
      "paragraphs": [
        "遵从船员指示，穿戴合身救生衣，并看护码头边的儿童。若船班取消，可改为公园散步，避免把未确认的游船安排作为行程唯一活动。"
      ]
    }
  ],
  "faqs": [
    {
      "q": "麻坡河游船每天都有吗？",
      "a": "Visit Johor 2026将麻坡河游船列为周末及假日营业。前往码头前，请向AZ Marine确认出发日期、班次、航程与票价；公园开放时间不能当作船班时刻表。"
    },
    {
      "q": "现在船票多少钱？",
      "a": "截至2026年10月19日，未能核实当前票价、航程与详细班表。请通过官网或013-6692263联系AZ Marine。"
    },
    {
      "q": "公园开放时间就是游船时间吗？",
      "a": "不是。公园地图条目列有每日两个时段，游船须按营运方另行确认的班次安排。"
    }
  ]
},
  },

  dataran: {
    ms: {
      meta: {
        title: 'Dataran Tanjung Emas Muar — Aktiviti, Fasiliti & Waktu Terbaik',
        description:
          'Panduan Dataran Tanjung Emas Muar: aktiviti keluarga, fasiliti taman, waktu terbaik, parkir, akses dan tip lawatan di Taman Sri Tanjung, Muar.',
      },
      card: { title: 'Dataran & kemudahan taman', text: 'Aktiviti keluarga, apa yang ada di dataran dan masa paling selesa.' },
      kicker: 'Dataran & taman',
      h1: 'Dataran Tanjung Emas: ruang keluarga di tepi muara.',
      lead: 'Dataran Tanjung Emas ialah bahagian lapang dalam kawasan rekreasi Tanjung Emas — tempat penduduk berjalan, berjoging, bermain dan menunggu senja. Ia ruang awam, jadi keadaan dan kemudahannya boleh berubah mengikut masa.',
      facts: [
        { label: 'Masuk', value: 'Ruang awam · tiada tiket biasa' },
        { label: 'Waktu rujukan', value: '6:00–9:00 pagi · 3:00–7:00 petang' },
        { label: 'Sesuai untuk', value: 'Keluarga, joging, senja' },
        { label: 'Lokasi', value: 'Taman Sri Tanjung, Muar' },
      ],
      blocks: [
        {
          heading: 'Apa yang ada di dataran',
          paragraphs: [
            'Dataran berfungsi sebagai ruang terbuka yang menghubungkan promenad tepi sungai dengan bahagian lain taman. Di sinilah orang berkumpul sebelum berjalan ke arah air atau selepas selesai bersenam.',
            "Tanjung Emas ialah kawasan rekreasi di muara Sungai Muar. Majlis Perbandaran Muar menyenaraikan joging, berjalan, taman permainan dan berbasikal; jeti mempunyai perkhidmatan perjalanan sungai.",
          ],
          bullets: [
            'Ruang lapang untuk berjalan santai, berjoging dan aktiviti ringan.',
            'Laluan berturap yang bersambung dengan promenad tepi sungai.',
            'Kawasan duduk dan tempat berkumpul yang popular pada lewat petang.',
            'Akses ke arah jeti bagi perkhidmatan bot apabila beroperasi.',
          ],
        },
        {
          heading: 'Aktiviti yang sesuai',
          bullets: [
            'Berjalan santai atau berjoging pada awal pagi ketika udara lebih sejuk.',
            'Bermain dan berkelah ringan bersama keluarga pada lewat petang.',
            'Fotografi senja dengan latar Sungai Muar dan muara.',
            'Menunggu perjalanan bot, atau sekadar duduk melihat air.',
            'Menjadikan dataran sebagai titik mula pusingan singkat ke pusat Bandar Maharani.',
          ],
        },
        {
          heading: 'Waktu terbaik & keselesaan',
          paragraphs: [
            'Awal pagi memberi cahaya lembut, suhu lebih selesa dan laluan yang kurang sesak. Lewat petang membawa angin sungai, cahaya senja dan suasana yang lebih meriah.',
            'Kemudahan seperti tandas, surau, tempat duduk berbumbung atau gerai boleh berubah mengikut penyelenggaraan dan musim. Anggap ia sebagai bonus, bukan jaminan.',
          ],
          callout:
            'Bawa air minuman sendiri, topi atau payung kecil, dan semak peta pada hari lawatan. Pada hujung minggu dan cuti umum, datang lebih awal untuk parkir dan ruang yang lebih selesa.',
        },
      ],
      faqs: [
        { q: 'Adakah Dataran Tanjung Emas sesuai untuk kanak-kanak?', a: 'Ya, ruang lapang dan laluan berturap sesuai untuk keluarga. Awasi kanak-kanak berhampiran air dan di kawasan yang lebih sibuk pada lewat petang.' },
        { q: 'Boleh berjoging di sini?', a: 'Boleh. Ramai penduduk menggunakan promenad dan laluan taman untuk berjoging, terutama awal pagi dan lewat petang. Pilih kasut sesuai dan beri laluan kepada pejalan kaki lain.' },
        { q: 'Ada tandas dan surau?', a: 'Kawasan taman awam lazimnya mempunyai kemudahan asas, tetapi ketersediaan dan keadaannya boleh berubah mengikut penyelenggaraan. Semak papan tanda atau peta di lokasi.' },
        { q: 'Boleh berkelah di dataran?', a: 'Ruang terbuka biasanya boleh digunakan untuk berkelah ringan, tetapi patuhi peraturan taman, jaga kebersihan dan elakkan memasang struktur tanpa kebenaran.' },
      ],
    },
    en: {
      meta: {
        title: 'Dataran Tanjung Emas Muar — Activities, Facilities & Best Time',
        description:
          'Guide to Dataran Tanjung Emas Muar: family activities, park facilities, best time to visit, parking, access and practical tips in Taman Sri Tanjung, Muar.',
      },
      card: { title: 'Dataran & park facilities', text: 'Family activities, what the square offers and the most comfortable hours.' },
      kicker: 'Dataran & park',
      h1: 'Dataran Tanjung Emas: family space by the estuary.',
      lead: 'Dataran Tanjung Emas is the open part of the Tanjung Emas recreation area — where residents walk, jog, play and wait for the sunset. It is public space, so conditions and facilities can change over time.',
      facts: [
        { label: 'Entry', value: 'Public space · no regular ticket' },
        { label: 'Reference hours', value: '6:00–9:00 am · 3:00–7:00 pm' },
        { label: 'Good for', value: 'Families, jogging, sunset' },
        { label: 'Location', value: 'Taman Sri Tanjung, Muar' },
      ],
      blocks: [
        {
          heading: 'What the dataran offers',
          paragraphs: [
            'The square works as the open space connecting the riverside promenade with the rest of the park. It is where people gather before walking towards the water or after finishing a workout.',
            "Tanjung Emas is a recreation area at the Muar River estuary. Muar Municipal Council lists jogging, walking, a playground and cycling, with river trips available at the jetty.",
          ],
          bullets: [
            'Open ground for easy walking, jogging and light activity.',
            'Paved paths that connect into the riverside promenade.',
            'Seating and gathering spots that fill up in the late afternoon.',
            'Access towards the jetty when boat services are operating.',
          ],
        },
        {
          heading: 'What to do here',
          bullets: [
            'Walk or jog early in the morning while the air is cooler.',
            'Light playtime and a family picnic in the late afternoon.',
            'Sunset photography with the Muar River and estuary as backdrop.',
            'Wait for a boat trip, or simply sit and watch the water.',
            'Use the square as the starting point for a short loop into Bandar Maharani.',
          ],
        },
        {
          heading: 'Best time & comfort',
          paragraphs: [
            'Early morning brings soft light, more comfortable temperatures and quieter paths. Late afternoon brings river breeze, sunset colour and a livelier crowd.',
            'Facilities such as toilets, a prayer room, shaded seating or stalls can change with maintenance and season. Treat them as a bonus, not a guarantee.',
          ],
          callout:
            'Bring your own water, a cap or small umbrella, and check the map on the day. On weekends and public holidays, arrive earlier for parking and more comfortable space.',
        },
      ],
      faqs: [
        { q: 'Is Dataran Tanjung Emas suitable for children?', a: 'Yes, the open ground and paved paths work well for families. Supervise children near the water and in busier areas during the late afternoon.' },
        { q: 'Can I jog here?', a: 'Yes. Many residents use the promenade and park paths for jogging, especially early morning and late afternoon. Wear proper shoes and give way to other walkers.' },
        { q: 'Are there toilets and a prayer room?', a: 'Public park areas usually have basic facilities, but availability and condition can change with maintenance. Check signage or the map on site.' },
        { q: 'Can we picnic at the square?', a: 'Open space usually allows light picnics, but follow park rules, keep the area clean and avoid setting up structures without permission.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡 Dataran Tanjung Emas｜活动、设施与最佳时段',
        description:
          '麻坡 Dataran Tanjung Emas 指南：亲子活动、园区设施、最佳时段、停车与交通、以及实用参观建议（Taman Sri Tanjung）。',
      },
      card: { title: '广场与园区设施', text: '亲子活动、广场有什么，以及最舒适的时段。' },
      kicker: '广场与园区',
      h1: 'Dataran Tanjung Emas：出海口旁的亲子空间。',
      lead: 'Dataran Tanjung Emas 是 Tanjung Emas 休闲园区的开阔地带——居民在此散步、慢跑、玩耍、等日落。这里是公共空间，状况与设施会随时间变动。',
      facts: [
        { label: '入场', value: '公共空间 · 一般免票' },
        { label: '参考时段', value: '上午 6:00–9:00 · 下午 3:00–7:00' },
        { label: '适合', value: '亲子、慢跑、看日落' },
        { label: '位置', value: 'Taman Sri Tanjung, 麻坡' },
      ],
      blocks: [
        {
          heading: '广场里有什么',
          paragraphs: [
            '广场是连接沿河步道与园区其他区域的开阔空间，大家通常在往水岸走之前或运动结束后在这里聚集。',
            "黄金丹绒公园位于麻坡河出海口。麻坡市议会介绍了慢跑、散步、儿童游乐场及骑行设施，码头另有河上游览活动。",
          ],
          bullets: [
            '开阔场地，适合散步、慢跑与轻量活动。',
            '铺装步道与沿河步道相接。',
            '座椅与聚集空间，傍晚尤其热闹。',
            '船班营运时可由此往码头方向移动。',
          ],
        },
        {
          heading: '适合在这里做什么',
          bullets: [
            '清晨气温较凉爽时散步或慢跑。',
            '傍晚与家人轻度游戏、简单野餐。',
            '以麻坡河与出海口为背景拍日落。',
            '等候船班，或只是坐下来看河。',
            '以广场为起点，走一小圈进皇城市区。',
          ],
        },
        {
          heading: '最佳时段与舒适度',
          paragraphs: [
            '清晨光线柔和、气温较舒适、步道人少；傍晚则有河风、夕阳色彩与更热闹的人潮。',
            '洗手间、祈祷室、遮阴座椅或摊位等设施会随维护与季节变动，请把它当作加分项，而非保证。',
          ],
          callout: '请自备饮用水、帽子或小伞，并在出发当天查看地图。周末与公共假日请提早抵达，较容易停车也有较舒适的空间。',
        },
      ],
      faqs: [
        { q: 'Dataran Tanjung Emas 适合带小孩吗？', a: '适合。开阔场地与铺装步道对亲子友善，但在水边与人潮较多的傍晚请留意孩童安全。' },
        { q: '可以在这里慢跑吗？', a: '可以。许多居民会在沿河步道与园区步道慢跑，尤其清晨与傍晚。请穿合适鞋款并礼让其他行人。' },
        { q: '有洗手间与祈祷室吗？', a: '公共园区通常有基本设施，但是否开放与状况会随维护变动，请依现场指示牌或地图确认。' },
        { q: '可以在广场野餐吗？', a: '开阔空间通常可进行简单野餐，但请遵守园区规定、维持清洁，未经许可不要搭设设施。' },
      ],
    },
  },

  makan: {
    ms: {
      meta: {
        title: 'Makanan Muar & Asam Pedas Tepi Sungai — Panduan Dekat Tanjung Emas',
        description:
          'Panduan makanan Muar berhampiran Tanjung Emas: mee bandung, otak-otak, asam pedas, satay, kawasan cari makan, waktu operasi dan tip praktikal.',
      },
      card: { title: 'Makanan & asam pedas Muar', text: 'Empat hidangan ikonik, kawasan cari makan dan tip sebelum pergi.' },
      kicker: 'Makanan sekitar',
      h1: 'Lepas tepi sungai, makan cara Muar.',
      lead: 'Daripada mengejar satu kedai tertentu, gunakan hidangan ikonik Muar sebagai kompas. Kebanyakan pilihan berada di sekitar Taman Sri Tanjung, Bandar Maharani dan pusat bandar Muar — semak waktu operasi sebelum bergerak.',
      facts: [
        { label: 'Hidangan utama', value: 'Mee bandung · otak-otak · asam pedas · satay' },
        { label: 'Kawasan', value: 'Taman Sri Tanjung · Bandar Maharani · Jalan Bentayan' },
        { label: 'Waktu terbaik', value: 'Sarapan & makan malam' },
        { label: 'Semak sebelum pergi', value: 'Waktu operasi & menu' },
      ],
      blocks: [
        {
          heading: 'Empat hidangan yang membawa nama Muar',
          bullets: [
            '**Mee Bandung Muar** — mi dengan kuah pekat berempah; rasa yang paling kerap dikaitkan dengan bandar ini.',
            '**Otak-otak** — snek ikan berempah yang mudah dibawa, sesuai untuk persinggahan santai.',
            '**Asam pedas** — kuah masam-pedas yang lazimnya dipadankan dengan ikan dan nasi.',
            '**Satay Muar** — sesuai untuk sarapan lewat atau makan ringan, bergantung pada kedai.',
          ],
        },
        {
          heading: 'Asam pedas tepi sungai',
          paragraphs: [
            'Ramai pengunjung mencari “asam pedas tepi sungai” selepas berjalan di Tanjung Emas. Pilihan yang paling dekat biasanya berada di sekitar Taman Sri Tanjung dan jalan-jalan menuju Bandar Maharani.',
            'Daripada bergantung pada satu nama kedai, cari gerai atau restoran yang masih aktif pada waktu anda tiba. Waktu operasi untuk hidangan berkuah ini selalunya tertumpu pada makan tengah hari dan makan malam.',
          ],
          callout: 'Premis, menu dan waktu operasi boleh berubah. Semak peta dan ulasan terkini sebelum bergerak, terutama jika anda datang lewat malam.',
        },
        {
          heading: 'Kawasan cari makan',
          bullets: [
            '**Taman Sri Tanjung** — paling dekat dengan Tanjung Emas; sarapan, kopi dan hidangan tempatan.',
            '**Bandar Maharani** — pusat bandar lama dengan pilihan kedai kopi, mi dan snek.',
            '**Jalan Bentayan** — ikan bakar, lauk salai dan rasa Melayu/Johor pada waktu malam.',
            '**Pusat Muar / jalan utama** — pilihan restoran berkeluarga dan gerai yang lebih luas.',
          ],
        },
        {
          heading: 'Tip praktikal',
          bullets: [
            'Datang lebih awal untuk sarapan jika mahu mengelakkan kehabisan stok hidangan popular.',
            'Bawa wang tunai secukupnya; tidak semua gerai menerima pembayaran kad.',
            'Semak hari tutup — sesetengah kedai memilih hari tertentu dalam seminggu.',
            'Untuk kumpulan besar, hubungi premis lebih awal atau pilih waktu luar puncak.',
            'Gabungkan makan dengan lawatan senja supaya tidak perlu bergerak dua kali.',
          ],
        },
      ],
      faqs: [
        { q: 'Di mana makan asam pedas berhampiran Tanjung Emas?', a: 'Cari di sekitar Taman Sri Tanjung dan jalan menuju Bandar Maharani. Pilihan yang paling dekat biasanya tertumpu di kawasan ini; semak peta dan waktu operasi sebelum pergi.' },
        { q: 'Makanan apa yang paling terkenal di Muar?', a: 'Mee bandung paling kerap dikaitkan dengan Muar, diikuti otak-otak, asam pedas dan satay. Pilihan berubah mengikut kedai dan waktu operasi.' },
        { q: 'Ada pilihan makan malam selepas lawatan senja?', a: 'Ada. Jalan Bentayan dan pusat bandar Muar biasanya lebih aktif pada waktu malam dengan pilihan ikan bakar, lauk salai dan gerai makanan. Semak waktu operasi semasa.' },
        { q: 'Perlu tempah meja?', a: 'Kebanyakan gerai dan kedai kopi tidak memerlukan tempahan. Untuk kumpulan besar atau restoran tertentu, hubungi premis lebih awal atau pilih waktu luar puncak.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Food & Riverside Asam Pedas — Guide Near Tanjung Emas',
        description:
          'Muar food guide near Tanjung Emas: mee bandung, otak-otak, asam pedas, satay, where to look, opening hours and practical tips.',
      },
      card: { title: 'Muar food & asam pedas', text: 'Four iconic dishes, where to look and what to check before you go.' },
      kicker: 'Food nearby',
      h1: 'After the riverbank, eat the Muar way.',
      lead: 'Rather than chasing one particular shop, use Muar’s iconic dishes as your compass. Most options sit around Taman Sri Tanjung, Bandar Maharani and central Muar — check opening hours before you move.',
      facts: [
        { label: 'Key dishes', value: 'Mee bandung · otak-otak · asam pedas · satay' },
        { label: 'Areas', value: 'Taman Sri Tanjung · Bandar Maharani · Jalan Bentayan' },
        { label: 'Best windows', value: 'Breakfast & dinner' },
        { label: 'Check first', value: 'Opening hours & menu' },
      ],
      blocks: [
        {
          heading: 'Four dishes that carry Muar’s name',
          bullets: [
            '**Mee Bandung Muar** — noodles in a thick spiced broth; the flavour most often tied to this town.',
            '**Otak-otak** — spiced fish snack that travels well and suits a relaxed stop.',
            '**Asam pedas** — sour-hot broth usually paired with fish and rice.',
            '**Satay Muar** — works as a late breakfast or light bite, depending on the shop.',
          ],
        },
        {
          heading: 'Asam pedas by the river',
          paragraphs: [
            'Many visitors look for “asam pedas by the river” after walking at Tanjung Emas. The nearest options are usually around Taman Sri Tanjung and the roads leading into Bandar Maharani.',
            'Instead of relying on one shop name, look for a stall or restaurant that is still active at the hour you arrive. For broth dishes, service tends to concentrate at lunch and dinner.',
          ],
          callout: 'Premises, menus and hours can change. Check the map and recent reviews before you move, especially if you arrive late at night.',
        },
        {
          heading: 'Where to look',
          bullets: [
            '**Taman Sri Tanjung** — closest to Tanjung Emas; breakfast, coffee and local dishes.',
            '**Bandar Maharani** — the old town centre with coffee shops, noodles and snacks.',
            '**Jalan Bentayan** — grilled fish, smoked dishes and Malay/Johor flavours at night.',
            '**Central Muar / main roads** — wider choice of family restaurants and stalls.',
          ],
        },
        {
          heading: 'Practical tips',
          bullets: [
            'Come earlier for breakfast if you want to avoid popular dishes selling out.',
            'Carry enough cash; not every stall accepts card payment.',
            'Check closing days — some shops pick a specific weekday to rest.',
            'For large groups, call ahead or choose an off-peak hour.',
            'Combine the meal with your sunset visit so you only travel once.',
          ],
        },
      ],
      faqs: [
        { q: 'Where can I eat asam pedas near Tanjung Emas?', a: 'Look around Taman Sri Tanjung and the roads towards Bandar Maharani. The nearest options usually cluster here; check the map and opening hours before you go.' },
        { q: 'What food is Muar best known for?', a: 'Mee bandung is most often tied to Muar, followed by otak-otak, asam pedas and satay. Availability varies by shop and opening hours.' },
        { q: 'Is there anything for dinner after the sunset visit?', a: 'Yes. Jalan Bentayan and central Muar are usually more active at night, with grilled fish, smoked dishes and food stalls. Check current opening hours.' },
        { q: 'Do I need to reserve a table?', a: 'Most stalls and coffee shops take walk-ins. For large groups or specific restaurants, call ahead or choose an off-peak hour.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡美食与河畔 Asam Pedas｜Tanjung Emas 周边觅食指南',
        description:
          '麻坡美食指南（Tanjung Emas 周边）：mee bandung、otak-otak、asam pedas、沙爹，觅食区域、营业时间与实用建议。',
      },
      card: { title: '麻坡美食与 asam pedas', text: '四道代表料理、觅食区域与出发前该确认的事。' },
      kicker: '周边美食',
      h1: '走完河岸，用麻坡的方式吃一顿。',
      lead: '与其追着某一家店，不如用麻坡的代表料理当指南。多数选择集中在 Taman Sri Tanjung、皇城（Bandar Maharani）与麻坡市区——出发前先看营业时间。',
      facts: [
        { label: '代表料理', value: 'Mee bandung · otak-otak · asam pedas · 沙爹' },
        { label: '区域', value: 'Taman Sri Tanjung · 皇城 · Jalan Bentayan' },
        { label: '最佳时段', value: '早餐与晚餐' },
        { label: '出发前确认', value: '营业时间与菜单' },
      ],
      blocks: [
        {
          heading: '代表麻坡的四道料理',
          bullets: [
            '**Mee Bandung 麻坡面** — 浓稠香料汤面，最能代表这座城市。',
            '**Otak-otak 乌达** — 香料鱼浆小吃，方便外带，适合轻松停留。',
            '**Asam Pedas 酸辣鱼** — 酸辣汤汁，通常配鱼与白饭。',
            '**麻坡沙爹 Satay** — 可作稍晚的早餐或轻食，视店家而定。',
          ],
        },
        {
          heading: '河畔的 asam pedas',
          paragraphs: [
            '许多游客在走完 Tanjung Emas 后想找 “河畔的 asam pedas”。最近的选项通常位于 Taman Sri Tanjung 一带，以及通往皇城的道路沿线。',
            '与其只认一家店名，不如找在你抵达时段仍在营业的摊位或餐馆。这类汤汁料理的供应多集中在午餐与晚餐。',
          ],
          callout: '店家、菜单与营业时间可能变动。出发前请查看地图与近期评论，若深夜前往更要先确认。',
        },
        {
          heading: '去哪里找',
          bullets: [
            '**Taman Sri Tanjung** — 离 Tanjung Emas 最近；早餐、咖啡与在地料理。',
            '**皇城 Bandar Maharani** — 老城中心，有咖啡店、面食与小吃。',
            '**Jalan Bentayan** — 夜间有烤鱼、烟熏料理与马来／柔佛风味。',
            '**麻坡市区 / 主要道路** — 家庭餐馆与摊位选择更多。',
          ],
        },
        {
          heading: '实用建议',
          bullets: [
            '想吃热门早餐请早点出发，避免售完。',
            '备足现金，并非所有摊位都能刷卡。',
            '先查休息日，部分店家每周固定休一天。',
            '团体前往可先致电，或避开高峰时段。',
            '把用餐与看日落排在一起，省一趟交通。',
          ],
        },
      ],
      faqs: [
        { q: 'Tanjung Emas 附近哪里吃 asam pedas？', a: '可在 Taman Sri Tanjung 一带与通往皇城的道路沿线寻找，最近的选项多集中于此；出发前请先查地图与营业时间。' },
        { q: '麻坡最有名的食物是什么？', a: '最能代表麻坡的是 mee bandung，之后是 otak-otak、asam pedas 与沙爹；供应情况视店家与营业时间而定。' },
        { q: '看完日落后还有晚餐选择吗？', a: '有。Jalan Bentayan 与麻坡市区夜间通常较热闹，有烤鱼、烟熏料理与小吃摊；请先确认当下营业时间。' },
        { q: '需要订位吗？', a: '多数摊位与咖啡店可直接入座。团体或特定餐厅建议先致电，或避开高峰时段。' },
      ],
    },
  },

  tarikan: {
    ms: {
      meta: {
        title: 'Tarikan Muar & Aktiviti Malam — Panduan Sekitar Tanjung Emas',
        description:
          'Senarai tarikan Muar sekitar Tanjung Emas: mercu tanda, seni jalanan, aktiviti malam, pesisir pantai Muar dan cadangan laluan separuh hari di Bandar Maharani.',
      },
      card: { title: 'Tarikan Muar & aktiviti malam', text: 'Mercu tanda, seni jalanan, aktiviti malam dan laluan separuh hari.' },
      kicker: 'Tarikan sekitar',
      h1: 'Separuh hari di Muar: dari tepi sungai ke pusat bandar.',
      lead: 'Tanjung Emas mudah digabungkan dengan mercu tanda, seni jalanan dan kawasan makan Muar. Susun laluan yang bergerak dari tepi sungai ke pusat bandar supaya tidak perlu berulang-alik.',
      facts: [
        { label: 'Cadangan tempoh', value: '3–5 jam (separuh hari)' },
        { label: 'Fokus', value: 'Sungai · seni jalanan · makanan' },
        { label: 'Masa terbaik', value: 'Lewat petang hingga malam' },
        { label: 'Titik mula', value: 'Tanjung Emas, Taman Sri Tanjung' },
      ],
      blocks: [
        {
          heading: 'Tarikan utama berdekatan',
          bullets: [
            '**Masjid Jamek Sultan Ibrahim** — mercu tanda di kawasan sungai; hormati waktu ibadah dan pakaian.',
            '**Menara Jam Muar** — titik mudah dalam pusingan singkat bandar lama.',
            '**Maharani Mural Lane & Cultural Walk** — mural dan lorong bercerita tentang Muar; paling baik ketika masih terang.',
            '**Sultan Ismail Bridge & tebing bandar** — sambungan visual kepada pengalaman Sungai Muar.',
          ],
        },
        {
          heading: 'Apa yang boleh dibuat pada waktu malam',
          paragraphs: [
            'Muar bergerak lebih perlahan pada waktu malam, dan kebanyakan aktiviti tertumpu pada makanan serta jalan-jalan santai di pusat bandar.',
            'Rancang malam anda di sekitar kawasan makan, kemudian kembali ke tepi sungai atau jambatan untuk melihat lampu bandar dan air.',
          ],
          bullets: [
            'Makan malam di Jalan Bentayan atau pusat bandar.',
            'Berjalan santai di kawasan tebing dan jambatan selepas gelap.',
            'Melihat mural yang masih terang daripada lampu jalan.',
            'Mencuba gerai yang hanya aktif pada sebelah malam.',
          ],
        },
        {
          heading: 'Pantai di pesisir Muar',
          paragraphs: [
            'Muar terletak di pesisir, jadi pantai menjadi sebahagian daripada senarai carian pengunjung. Keadaan pantai berbeza mengikut lokasi, pasang surut dan musim.',
            'Daripada mengejar satu nama pantai, semak peta untuk garis pesisir berhampiran bandar, kemudian pastikan akses, parkir dan keadaan pantai sebelum bergerak jauh dari Tanjung Emas.',
          ],
          callout: 'Maklumat pantai boleh berubah mengikut musim dan kerja penyelenggaraan. Semak peta serta keadaan semasa, dan utamakan keselamatan di tepi air.',
        },
        {
          heading: 'Cadangan laluan separuh hari',
          bullets: [
            'Mulakan di Tanjung Emas pada lewat petang untuk promenad dan senja.',
            'Teruskan ke Masjid Jamek Sultan Ibrahim dan tebing sungai.',
            'Masuk ke pusat Bandar Maharani untuk Menara Jam dan mural.',
            'Tamatkan dengan makan malam di Jalan Bentayan atau pusat bandar.',
          ],
        },
      ],
      faqs: [
        { q: 'Apa yang boleh dibuat di Muar pada waktu malam?', a: 'Kebanyakan aktiviti malam tertumpu pada makanan dan berjalan santai di pusat bandar. Jalan Bentayan, kawasan tebing dan jambatan serta gerai malam ialah pilihan biasa; semak waktu operasi semasa.' },
        { q: 'Ada pantai berhampiran Muar?', a: 'Muar terletak di pesisir, jadi ada kawasan pantai di daerah ini. Keadaan, akses dan kemudahan berbeza mengikut lokasi dan musim, jadi semak peta sebelum bergerak.' },
        { q: 'Berapa hari cukup untuk melawat Muar?', a: 'Satu hari penuh cukup untuk Tanjung Emas, pusat bandar dan makanan utama. Tambah satu malam jika anda mahu meneroka kawasan pesisir dan lebih banyak kedai makan.' },
        { q: 'Bagaimana mahu ke Tanjung Emas dari pusat bandar?', a: 'Perjalanan singkat dengan teksi atau e-hailing paling mudah. Masukkan “Tanjung Emas Muar / Taman Sri Tanjung” sebagai destinasi dan sahkan titik turun berhampiran promenad.' },
      ],
    },
    en: {
      meta: {
        title: 'Muar Attractions & Night Activities — Guide Around Tanjung Emas',
        description:
          'Muar attractions near Tanjung Emas: landmarks, street art, things to do at night, the Muar coastline and a suggested half-day route through Bandar Maharani.',
      },
      card: { title: 'Muar attractions & nightlife', text: 'Landmarks, street art, what to do at night and a half-day route.' },
      kicker: 'Nearby attractions',
      h1: 'Half a day in Muar: from the riverbank to the town centre.',
      lead: 'Tanjung Emas pairs easily with Muar’s landmarks, street art and food areas. Build a route that moves from the riverbank into the town centre so you do not double back.',
      facts: [
        { label: 'Suggested time', value: '3–5 hours (half day)' },
        { label: 'Focus', value: 'River · street art · food' },
        { label: 'Best window', value: 'Late afternoon into night' },
        { label: 'Starting point', value: 'Tanjung Emas, Taman Sri Tanjung' },
      ],
      blocks: [
        {
          heading: 'Main attractions nearby',
          bullets: [
            '**Masjid Jamek Sultan Ibrahim** — a landmark in the river area; respect prayer times and dress code.',
            '**Muar Clock Tower** — an easy stop on a short loop through the old town.',
            '**Maharani Mural Lane & Cultural Walk** — murals and lanes that tell Muar’s stories; best while there is daylight.',
            '**Sultan Ismail Bridge & town banks** — a visual continuation of the Sungai Muar experience.',
          ],
        },
        {
          heading: 'What to do at night',
          paragraphs: [
            'Muar slows down at night, and most activity centres on food and easy walks around the town centre.',
            'Plan your evening around the food areas, then return to the riverbank or the bridge to see the town lights on the water.',
          ],
          bullets: [
            'Dinner at Jalan Bentayan or in the town centre.',
            'An easy walk along the banks and the bridge after dark.',
            'Murals that still read under street lighting.',
            'Stalls that only operate in the evening.',
          ],
        },
        {
          heading: 'Beaches along the Muar coast',
          paragraphs: [
            'Muar sits on the coast, so beaches are part of what visitors search for. Conditions differ by location, tide and season.',
            'Rather than chasing one beach name, check the map for the shoreline near town, then confirm access, parking and beach conditions before travelling far from Tanjung Emas.',
          ],
          callout: 'Beach information can change with season and maintenance work. Check the map and current conditions, and put safety first near the water.',
        },
        {
          heading: 'Suggested half-day route',
          bullets: [
            'Start at Tanjung Emas in the late afternoon for the promenade and sunset.',
            'Continue to Masjid Jamek Sultan Ibrahim and the river banks.',
            'Move into central Bandar Maharani for the Clock Tower and murals.',
            'Finish with dinner at Jalan Bentayan or the town centre.',
          ],
        },
      ],
      faqs: [
        { q: 'What is there to do in Muar at night?', a: 'Most evening activity centres on food and easy walks around the town centre. Jalan Bentayan, the river banks and bridge, and night stalls are common choices; check current opening hours.' },
        { q: 'Are there beaches near Muar?', a: 'Muar sits on the coast, so there are beach areas in the district. Conditions, access and facilities vary by location and season, so check the map before you travel.' },
        { q: 'How many days are enough for Muar?', a: 'One full day covers Tanjung Emas, the town centre and the main food stops. Add an extra night if you want to explore the coast and more eating places.' },
        { q: 'How do I get to Tanjung Emas from the town centre?', a: 'A short taxi or e-hailing ride is easiest. Set “Tanjung Emas Muar / Taman Sri Tanjung” as the destination and confirm a drop-off near the promenade.' },
      ],
    },
    zh: {
      meta: {
        title: '麻坡景点与夜间活动｜Tanjung Emas 周边一日攻略',
        description:
          '麻坡景点指南（Tanjung Emas 周边）：地标、街头艺术、夜间活动、麻坡海岸线，以及皇城半日路线建议。',
      },
      card: { title: '麻坡景点与夜间活动', text: '地标、街头艺术、夜间行程与半日路线建议。' },
      kicker: '周边景点',
      h1: '麻坡半日：从河岸走到市中心。',
      lead: 'Tanjung Emas 很容易与麻坡的地标、街头艺术和美食区域串在一起。建议安排从河岸走进市中心的路线，避免来回折返。',
      facts: [
        { label: '建议时长', value: '3–5 小时（半日）' },
        { label: '主题', value: '河流 · 街头艺术 · 美食' },
        { label: '最佳时段', value: '傍晚到夜间' },
        { label: '起点', value: 'Tanjung Emas, Taman Sri Tanjung' },
      ],
      blocks: [
        {
          heading: '周边主要景点',
          bullets: [
            '**Masjid Jamek Sultan Ibrahim 清真寺** — 河岸地标；请尊重礼拜时间与服装规范。',
            '**麻坡钟楼** — 老城短程散步圈的顺路点。',
            '**Maharani 壁画巷与文化步道** — 用壁画与巷弄讲述麻坡故事，建议趁天色尚亮前往。',
            '**苏丹依斯迈大桥与市区河岸** — 麻坡河体验的视觉延伸。',
          ],
        },
        {
          heading: '晚上可以做什么',
          paragraphs: [
            '麻坡的夜晚步调较慢，活动多集中在美食与市中心一带轻松散步。',
            '建议以美食区域安排夜晚行程，再回到河岸或桥上看灯火映在水面上。',
          ],
          bullets: [
            '在 Jalan Bentayan 或市区吃晚餐。',
            '入夜后沿河岸与大桥散步。',
            '在路灯下仍可欣赏的壁画。',
            '只在夜间营业的摊位。',
          ],
        },
        {
          heading: '麻坡海岸线的海滩',
          paragraphs: [
            '麻坡位于海岸线上，因此海滩也是游客常搜的项目；实际状况会因地点、潮汐与季节而不同。',
            '与其只追某个海滩名字，建议先在地图上找靠近市区的海岸线，确认通行、停车与现场状况后再从 Tanjung Emas 出发。',
          ],
          callout: '海滩信息会随季节与维护工程变动。出发前请查看地图与最新状况，在水边以安全为优先。',
        },
        {
          heading: '半日路线建议',
          bullets: [
            '傍晚从 Tanjung Emas 开始，走步道看日落。',
            '接着前往 Masjid Jamek Sultan Ibrahim 与河岸。',
            '进入皇城市区看钟楼与壁画。',
            '最后在 Jalan Bentayan 或市区吃晚餐。',
          ],
        },
      ],
      faqs: [
        { q: '麻坡晚上有什么好玩？', a: '夜间活动多集中在美食与市中心轻松散步。常见选择包括 Jalan Bentayan、河岸与大桥，以及夜间摊位；请先确认当下营业时间。' },
        { q: '麻坡附近有海滩吗？', a: '麻坡位于海岸线上，县内有一些海滩区域。状况、通行与设施因地点和季节而异，出发前请查看地图。' },
        { q: '麻坡玩几天够？', a: '一整天足以覆盖 Tanjung Emas、市中心与主要美食。若想再探索海岸线与更多餐馆，可加一晚。' },
        { q: '从市中心怎么去 Tanjung Emas？', a: '搭出租车或网约车最省事。目的地设 “Tanjung Emas Muar / Taman Sri Tanjung”，并确认在靠近步道的入口下车。' },
      ],
    },
  },
};
