import type { FoodSpotId } from '../data/market';
import type { Locale } from '../i18n/locales';

export interface QuickFact {
  label: string;
  value: string;
}
export interface StoryCard {
  title: string;
  text: string;
}
export interface InfoCard {
  title: string;
  body: string;
  bullets?: string[];
  callout?: string;
}
export interface RouteCard {
  title: string;
  body: string;
  link?: { label: string; urlKey: 'maps' | 'bmj' };
}
export interface FoodCard {
  name: string;
  text: string;
}
export interface FoodSpot {
  id: FoodSpotId;
  name: string;
  text: string;
}
export interface NearbyCard {
  tag: string;
  title: string;
  text: string;
}
export interface Faq {
  q: string;
  a: string;
}

export interface HomeContent {
  meta: { title: string; description: string };
  hero: { pills: [string, string]; title: string; sub: string };
  quick: QuickFact[];
  about: { kicker: string; heading: string; lead: string; cards: StoryCard[] };
  gallery: { kicker: string; heading: string; note: string; captions: [string, string, string] };
  plan: { kicker: string; heading: string; lead: string; cards: InfoCard[] };
  transport: { kicker: string; heading: string; lead: string; cards: RouteCard[] };
  map: { kicker: string; heading: string; note: string };
  food: { kicker: string; heading: string; lead: string; cards: FoodCard[]; spots: FoodSpot[]; note: string };
  nearby: { kicker: string; heading: string; lead: string; cards: NearbyCard[] };
  faq: Faq[];
}

export const home: Record<Locale, HomeContent> = {
  ms: {
    meta: {
  "title": "Tanjung Emas Muar: Waktu Taman, Jeti & Panduan Lawatan",
  "description": "Rancang Tanjung Emas Muar dengan waktu taman, peta, parkir dan panduan jeti. Bezakan waktu taman daripada pelayaran sungai hujung minggu dan cuti."
},
    hero: {
      pills: ['Bandar Maharani, Muar', 'Tepi Sungai · Rekreasi · Senja'],
      title: "Tanjung Emas Muar: taman, dataran dan jeti.",
      sub: 'Tanjung Emas ialah ruang rekreasi di muara Sungai Muar — tempat untuk berjalan di tepi air, melihat senja, bersantai bersama keluarga dan memulakan pelayaran sungai apabila perkhidmatan beroperasi.',
    },
    quick: [
      { label: 'Masuk', value: 'Taman awam · tiada tiket biasa' },
      {
  "label": "Waktu pada peta",
  "value": "06:00–09:00 · 15:00–19:00"
},
      { label: 'Cadangan tempoh', value: '1–2 jam santai' },
      { label: 'Lokasi', value: 'Taman Sri Tanjung, Muar' },
    ],
    about: {
      kicker: 'Kenapa Tanjung Emas',
      heading: 'Taman bandar dengan wajah Sungai Muar.',
      lead: "Tanjung Emas ialah kawasan rekreasi di muara Sungai Muar. Majlis Perbandaran Muar menyenaraikan joging, berjalan, taman permainan dan berbasikal; jeti mempunyai perkhidmatan perjalanan sungai.",
      cards: [
        {
          title: 'Promenad di tepi muara',
          text: 'Laluan berturap mengikuti garis air dan sesuai untuk berjalan santai atau berjoging sambil melihat Sungai Muar menuju Selat Melaka.',
        },
        {
          title: 'Suasana berubah mengikut waktu',
          text: 'Pagi lebih tenang dan praktikal untuk bersenam. Lewat petang membawa cahaya senja, angin tepi sungai dan suasana keluarga yang lebih meriah.',
        },
        {
          title: 'Pintu masuk kepada Muar dari sungai',
          text: 'Apabila operator beroperasi, pelayaran Sungai Muar memberi perspektif bandar yang berbeza. Jadual, tempoh dan caj hendaklah disahkan terus di jeti.',
        },
      ],
    },
    gallery: {
      kicker: 'Wajah sebenar lokasi',
      heading: 'Air, langit, dan laluan yang panjang.',
      note: 'Semua foto di bawah ialah foto sebenar Tanjung Emas, dirakam oleh Slleong dan diterbitkan melalui Wikimedia Commons di bawah dedikasi CC0.',
      captions: ['Promenad Tanjung Emas', 'Sunset Point', 'Tebing muara'],
    },
    plan: {
      kicker: 'Rancang lawatan',
      heading: 'Perkara penting sebelum bergerak.',
      lead: 'Tanjung Emas ialah ruang awam, jadi pengalaman sebenar banyak dipengaruhi cuaca, hujung minggu dan operasi vendor. Gunakan maklumat ini sebagai asas, kemudian semak peta pada hari lawatan.',
      cards: [
        {
          title: 'Waktu & waktu terbaik',
          body: "Google Maps Tanjung Emas Muar menunjukkan 06:00–09:00 dan 15:00–19:00 setiap hari, disemak 19 Oktober 2026. Ini waktu penyenaraian taman, bukan jadual pelayaran atau semua vendor. Ikut papan tanda dan sahkan akses semasa.",
          callout:
            'Waktu ruang awam, aktiviti, jeti, gerai dan akses kenderaan boleh berbeza. Semak Google Maps / maklumat operator sebelum bertolak.',
        },
        {
          title: 'Tiket / kos',
          body: 'Akses biasa ke taman awam tidak memerlukan tiket. Aktiviti berasingan seperti pelayaran sungai, permainan atau vendor mungkin berbayar.',
          bullets: ['Elakkan bergantung pada harga lama dari ulasan.', 'Semak caj operator terus pada hari lawatan.'],
        },
        {
          title: 'Parkir',
          body: "Gunakan kawasan parkir yang dibenarkan dan ikut papan tanda setempat. Kadar, sekatan dan ruang yang tersedia belum disahkan; jangan anggap parkir percuma atau ruang persendirian boleh digunakan.",
          callout:
            'Pada hujung minggu / lewat petang, datang lebih awal dan ikut papan tanda. Jangan anggap kawasan bersebelahan sebagai parkir rasmi tanpa kebenaran.',
        },
        {
          title: 'Cadangan tempoh',
          body: '**1–2 jam** mencukupi untuk promenad, gambar dan waktu santai. Jika anda mahu pelayaran sungai atau makan di pusat bandar, jadikan Tanjung Emas sebahagian daripada separuh hari di Muar.',
          bullets: ['Pagi: berjalan / berjoging dan suasana lebih ringan.', 'Petang: senja, keluarga dan suasana lebih hidup.'],
        },
      ],
    },
    transport: {
      kicker: 'Pengangkutan terperinci',
      heading: 'Sampai ke tepi Sungai Muar tanpa meneka.',
      lead: 'Titik akhir untuk navigasi ialah “Tanjung Emas Muar / Taman Sri Tanjung”. Bagi pengangkutan awam, rancang perjalanan hingga Muar dahulu, kemudian perjalanan akhir yang pendek melalui teksi atau e-hailing.',
      cards: [
        {
          title: 'Dari lapangan terbang',
          body: '**Melaka International Airport** ialah pilihan serantau yang lebih dekat secara geografi; semak dahulu sama ada penerbangan sesuai tersedia. Untuk rangkaian penerbangan antarabangsa yang lebih luas, **KLIA** biasanya lebih praktikal. Dari KLIA, gunakan kereta / teksi jarak jauh atau bas ekspres ke Muar jika jadual tersedia, kemudian sambung ke Tanjung Emas.',
        },
        {
          title: 'Bas ekspres ke Muar',
          body: "Semak terminal ketibaan pada tiket bas ekspres anda. PAJ menyenaraikan Terminal Maharani pada laluan BMJ Muar; hentian terus di taman belum disahkan. Rancang teksi atau e-hailing untuk perjalanan akhir jika perlu.",
        },
        {
          title: 'Bas awam dalam daerah',
          body: 'Perbadanan Pengangkutan Awam Johor (PAJ) menerbitkan laluan dan jadual **Bas Muafakat Johor (BMJ) untuk Muar**. Semak peta laluan terkini; jika hentian tidak berhampiran taman, gunakan sambungan teksi / e-hailing untuk bahagian akhir.',
          link: { label: 'Semak BMJ ↗', urlKey: 'bmj' },
        },
        {
          title: 'Teksi & e-hailing',
          body: "Semak terminal ketibaan pada tiket bas ekspres anda. PAJ menyenaraikan Terminal Maharani pada laluan BMJ Muar; hentian terus di taman belum disahkan. Rancang teksi atau e-hailing untuk perjalanan akhir jika perlu.",
        },
        {
          title: 'Memandu sendiri',
          body: 'Ikut navigasi ke **Taman Sri Tanjung, 84000 Muar**. Bila menghampiri kawasan, perlahankan kenderaan dan ikut papan tanda parkir serta sebarang sekatan akses yang sedang berkuat kuasa.',
        },
      ],
    },
    map: {
      kicker: 'Peta lokasi',
      heading: 'Tanjung Emas, Muar.',
      note: 'Peta Google diset kepada bahasa Melayu / rantau Malaysia. Gunakan peta interaktif untuk pintu masuk, keadaan jalan dan pilihan parkir terkini.',
    },
    food: {
      kicker: 'Makanan sekitar',
      heading: 'Lepas tepi sungai, makan cara Muar.',
      lead: 'Daripada mengejar satu kedai tertentu, gunakan empat hidangan ini sebagai kompas. Cari pilihan di sekitar Taman Sri Tanjung, Bandar Maharani dan pusat Muar, kemudian semak waktu operasi semasa.',
      cards: [
        { name: 'Mee Bandung Muar', text: 'Mi dengan kuah pekat berempah yang menjadi antara rasa paling dikenali apabila orang bercakap tentang Muar.' },
        { name: 'Otak-otak', text: 'Snek ikan berempah yang mudah dibawa dan sangat serasi dengan persinggahan santai selepas berjalan di tepi sungai.' },
        { name: 'Asam pedas', text: 'Pilihan makan tengah hari atau malam untuk rasa masam-pedas berkuah, lazimnya dipadankan dengan ikan dan nasi.' },
        { name: 'Satay Muar', text: 'Sesuai sebagai sarapan lewat atau makan ringan, bergantung pada kedai dan waktu operasi yang anda pilih.' },
      ],
      spots: [
        { id: 'kopitiam', name: 'Pak Cik Kopitiam · Sri Muar', text: 'Taman Sri Tanjung · sarapan, kopi dan hidangan tempatan termasuk mee bandung.' },
        { id: 'asamPedas', name: 'Asam Pedas Jalan Joned', text: 'Taman Sri Tanjung · pilihan asam pedas gaya Johor untuk makan tengah hari.' },
        { id: 'bako', name: 'Bako-Bako & Salai-Salai Haji Olie', text: 'Jalan Bentayan · ikan bakar, lauk salai dan rasa Melayu/Johor.' },
      ],
      note: 'Pilihan di atas berada di sekitar bandar Muar / Taman Sri Tanjung. Premis, menu dan waktu operasi boleh berubah; semak peta sebelum bergerak.',
    },
    nearby: {
      kicker: 'Tempat berdekatan',
      heading: 'Sambung berjalan ke sisi lain Bandar Maharani.',
      lead: 'Tanjung Emas mudah digabungkan dengan mercu tanda dan seni bandar Muar. Susun laluan yang bergerak dari tepi sungai ke pusat bandar supaya tidak perlu berulang-alik.',
      cards: [
        { tag: 'Seni bina', title: 'Masjid Jamek Sultan Ibrahim', text: 'Mercu tanda di kawasan sungai yang sesuai digabungkan dengan lawatan ke Tanjung Emas. Hormati waktu ibadah, pakaian dan ruang jemaah.' },
        { tag: 'Bandar', title: 'Menara Jam Muar', text: 'Mercu tanda pusat Bandar Maharani dan titik yang mudah disertakan dalam pusingan singkat melalui bandar lama Muar.' },
        { tag: 'Seni jalanan', title: 'Maharani Mural Lane & Cultural Walk', text: 'Lorong dan dinding mural yang membawa cerita visual Muar — paling sesuai dilihat ketika masih terang untuk fotografi.' },
        { tag: 'Sungai', title: 'Sultan Ismail Bridge & tebing bandar', text: 'Gunakan jambatan dan kawasan tebing sebagai sambungan visual kepada pengalaman Sungai Muar sebelum kembali ke pusat bandar.' },
      ],
    },
    faq: [
      { q: 'Adakah Tanjung Emas Muar mengenakan tiket masuk?', a: 'Kawasan taman awam lazimnya boleh dimasuki tanpa tiket. Aktiviti beroperasi berasingan seperti pelayaran Sungai Muar mungkin mengenakan caj dan jadualnya boleh berubah.' },
      { q: 'Bilakah waktu terbaik untuk datang?', a: 'Awal pagi sesuai untuk berjalan dan berjoging, manakala lewat petang hingga matahari terbenam memberi suasana tepi sungai yang paling menarik. Hujung minggu biasanya lebih meriah dan lebih sesak.' },
      { q: 'Berapa lama patut diperuntukkan?', a: 'Sekitar satu hingga dua jam sesuai untuk berjalan santai, mengambil gambar dan menikmati tepi sungai. Tambah masa jika anda mahu menaiki pelayaran sungai atau makan di bandar Muar.' },
      { q: 'Ada tempat letak kereta?', a: 'Terdapat pilihan parkir awam di sekitar Taman Sri Tanjung. Jenis parkir, caj dan sekatan boleh berbeza mengikut lokasi, jadi ikut papan tanda tempatan dan datang lebih awal pada waktu puncak.' },
      { q: 'Boleh datang dengan bas?', a: "Semak terminal ketibaan pada tiket bas ekspres anda. PAJ menyenaraikan Terminal Maharani pada laluan BMJ Muar; hentian terus di taman belum disahkan. Rancang teksi atau e-hailing untuk perjalanan akhir jika perlu." },
      { q: 'Lapangan terbang mana yang paling praktikal?', a: 'Lapangan Terbang Antarabangsa Melaka lebih dekat secara geografi, tetapi kekerapan penerbangan boleh berubah. KLIA menawarkan rangkaian penerbangan jauh lebih luas; dari sana sambung melalui jalan raya atau bas ekspres ke Muar jika tersedia.' },
      { q: 'Adakah pelayaran Sungai Muar beroperasi setiap hari?', a: "Visit Johor 2026 menyenaraikan Muar River Cruise pada hujung minggu dan hari cuti. Sahkan tarikh, waktu berlepas, tempoh dan tambang dengan operator AZ Marine sebelum ke jeti; waktu taman bukan jadual bot." },
      { q: 'Apa makanan Muar yang sesuai dicuba selepas melawat?', a: 'Antara pilihan yang sinonim dengan lawatan ke Muar ialah mee bandung, otak-otak, asam pedas dan satay. Cari gerai atau kedai di sekitar Bandar Maharani dan Taman Sri Tanjung, kemudian semak waktu operasi semasa sebelum pergi.' },
      { q: 'Di mana spot foto terbaik di Tanjung Emas?', a: "Pilih cahaya lewat petang semasa akses taman dibenarkan. Semak waktu matahari terbenam pada tarikh lawatan dan jangan andaikan akses selepas waktu penyenaraian taman." },
    ],
  },

  en: {
    meta: {
  "title": "Tanjung Emas Muar: Park Hours, Jetty & Visitor Guide",
  "description": "Plan Tanjung Emas Muar with park hours, directions, parking and jetty guidance. Check weekend and holiday river cruises separately from the park listing."
},
    hero: {
      pills: ['Bandar Maharani, Muar', 'Riverside · Recreation · Sunset'],
      title: "Tanjung Emas Muar: park, square and jetty.",
      sub: 'Tanjung Emas is a public recreation space at the mouth of the Muar River — a place to walk along the water, watch the sunset, spend time with family and board a river cruise when services are running.',
    },
    quick: [
      { label: 'Entry', value: 'Public park · no regular ticket' },
      {
  "label": "Map-listed hours",
  "value": "06:00–09:00 · 15:00–19:00"
},
      { label: 'Suggested stay', value: '1–2 relaxed hours' },
      { label: 'Location', value: 'Taman Sri Tanjung, Muar' },
    ],
    about: {
      kicker: 'Why Tanjung Emas',
      heading: 'A town park with the face of the Muar River.',
      lead: "Tanjung Emas is a recreation area at the Muar River estuary. Muar Municipal Council lists jogging, walking, a playground and cycling, with river trips available at the jetty.",
      cards: [
        {
          title: 'A promenade along the estuary',
          text: 'Paved paths follow the waterline and suit an easy walk or a jog while the Muar River runs out towards the Strait of Malacca.',
        },
        {
          title: 'The mood changes with the hour',
          text: 'Mornings are quieter and practical for exercise. Late afternoons bring sunset light, river breeze and a livelier family crowd.',
        },
        {
          title: 'Muar from the water',
          text: 'When operators are running, a Sungai Muar cruise gives a different view of the town. Confirm schedule, duration and fare directly at the jetty.',
        },
      ],
    },
    gallery: {
      kicker: 'The place itself',
      heading: 'Water, sky, and a long stretch of path.',
      note: 'Every photo below is a real photograph of Tanjung Emas, taken by Slleong and published via Wikimedia Commons under a CC0 dedication.',
      captions: ['Tanjung Emas promenade', 'Sunset Point', 'The estuary bank'],
    },
    plan: {
      kicker: 'Plan your visit',
      heading: 'What to settle before you set off.',
      lead: 'Tanjung Emas is public space, so the actual experience depends on weather, weekends and which vendors are operating. Use this as your baseline, then check the map on the day.',
      cards: [
        {
          title: 'Hours & best time',
          body: "The Tanjung Emas Muar Google Maps listing showed 06:00–09:00 and 15:00–19:00 daily when checked on 19 October 2026. These are park listing hours, not a boat timetable or every vendor’s hours. Follow on-site signs and confirm current access.",
          callout:
            'Hours for open space, activities, the jetty, stalls and vehicle access can differ. Check Google Maps or operator information before you leave.',
        },
        {
          title: 'Tickets / cost',
          body: 'Normal access to the public park needs no ticket. Separate activities such as river cruises, games or vendors may charge a fee.',
          bullets: ['Avoid relying on old prices from reviews.', 'Check operator charges directly on the day.'],
        },
        {
          title: 'Parking',
          body: "Use designated parking and follow local signs. Current charges, restrictions and available spaces have not been confirmed; do not assume parking is free or that private land is available.",
          callout:
            'On weekends and late afternoons, arrive earlier and follow the signage. Do not assume an adjacent plot is official parking without confirmation.',
        },
        {
          title: 'How long to allow',
          body: '**1–2 hours** is enough for the promenade, photos and a slow break. If you want a river cruise or a meal in town, make Tanjung Emas part of a half day in Muar.',
          bullets: ['Morning: walking or jogging, lighter crowds.', 'Afternoon: sunset, families, a livelier mood.'],
        },
      ],
    },
    transport: {
      kicker: 'Getting here in detail',
      heading: 'Reach the Muar riverbank without guessing.',
      lead: 'Your navigation endpoint is “Tanjung Emas Muar / Taman Sri Tanjung”. For public transport, plan the long leg to Muar first, then a short final hop by taxi or e-hailing.',
      cards: [
        {
          title: 'From the airport',
          body: '**Melaka International Airport** is the closer regional option geographically; first check whether suitable flights exist. For a wider international network, **KLIA** is usually more practical. From KLIA, continue by long-distance car or taxi, or by express bus to Muar when schedules allow.',
        },
        {
          title: 'Express bus to Muar',
          body: "Check the arrival terminal on your intercity bus ticket. PAJ lists Terminal Maharani on BMJ Muar routes; a direct park stop has not been confirmed. Plan a taxi or e-hailing connection if needed.",
        },
        {
          title: 'Public bus within the district',
          body: 'The Johor Public Transport Corporation (PAJ) publishes routes and schedules for **Bas Muafakat Johor (BMJ) in Muar**. Check the latest route map; if no stop is close to the park, finish the trip by taxi or e-hailing.',
          link: { label: 'Check BMJ ↗', urlKey: 'bmj' },
        },
        {
          title: 'Taxi & e-hailing',
          body: "Check the arrival terminal on your intercity bus ticket. PAJ lists Terminal Maharani on BMJ Muar routes; a direct park stop has not been confirmed. Plan a taxi or e-hailing connection if needed.",
        },
        {
          title: 'Driving yourself',
          body: 'Follow navigation to **Taman Sri Tanjung, 84000 Muar**. As you approach, slow down and follow parking signage plus any access restrictions in force.',
        },
      ],
    },
    map: {
      kicker: 'Location map',
      heading: 'Tanjung Emas, Muar.',
      note: 'The Google map is set to Malay / Malaysia region. Use the interactive map for entrances, road conditions and the latest parking options.',
    },
    food: {
      kicker: 'Food nearby',
      heading: 'After the riverbank, eat the Muar way.',
      lead: 'Rather than chasing one particular shop, use these four dishes as your compass. Look around Taman Sri Tanjung, Bandar Maharani and central Muar, then check current opening hours.',
      cards: [
        { name: 'Mee Bandung Muar', text: 'Noodles in a thick spiced broth, one of the flavours most closely tied to how people talk about Muar.' },
        { name: 'Otak-otak', text: 'Spiced fish snack that travels well and suits a relaxed stop after walking the riverbank.' },
        { name: 'Asam pedas', text: 'A lunch or dinner option with a sour-hot broth, usually paired with fish and rice.' },
        { name: 'Satay Muar', text: 'Works as a late breakfast or a light bite, depending on the stall and its opening hours.' },
      ],
      spots: [
        { id: 'kopitiam', name: 'Pak Cik Kopitiam · Sri Muar', text: 'Taman Sri Tanjung · breakfast, coffee and local dishes including mee bandung.' },
        { id: 'asamPedas', name: 'Asam Pedas Jalan Joned', text: 'Taman Sri Tanjung · Johor-style asam pedas for lunch.' },
        { id: 'bako', name: 'Bako-Bako & Salai-Salai Haji Olie', text: 'Jalan Bentayan · grilled fish, smoked dishes and Malay/Johor flavours.' },
      ],
      note: 'The suggestions above sit around Muar town / Taman Sri Tanjung. Premises, menus and hours can change; check the map before you move.',
    },
    nearby: {
      kicker: 'Nearby places',
      heading: 'Keep walking into the other side of Bandar Maharani.',
      lead: 'Tanjung Emas pairs easily with Muar’s landmarks and street art. Build a route that moves from the riverbank into the town centre so you do not double back.',
      cards: [
        { tag: 'Architecture', title: 'Masjid Jamek Sultan Ibrahim', text: 'A landmark in the river area that combines well with a Tanjung Emas visit. Respect prayer times, dress code and worship space.' },
        { tag: 'Town', title: 'Muar Clock Tower', text: 'The landmark of central Bandar Maharani and an easy stop on a short loop through old Muar.' },
        { tag: 'Street art', title: 'Maharani Mural Lane & Cultural Walk', text: 'Lanes and murals that carry Muar’s visual stories — best seen while there is still daylight for photography.' },
        { tag: 'River', title: 'Sultan Ismail Bridge & town banks', text: 'Use the bridge and the bank areas as a visual continuation of the Sungai Muar experience before returning to the centre.' },
      ],
    },
    faq: [
      { q: 'Does Tanjung Emas Muar charge an entrance fee?', a: 'The public park area can normally be entered without a ticket. Separately operated activities such as the Sungai Muar cruise may charge, and schedules can change.' },
      { q: 'When is the best time to come?', a: 'Early morning suits walking and jogging, while late afternoon into sunset gives the best riverside atmosphere. Weekends are usually livelier and busier.' },
      { q: 'How much time should I allow?', a: 'Around one to two hours works for a relaxed walk, photos and the riverbank. Add more if you want a river cruise or a meal in Muar town.' },
      { q: 'Is there parking?', a: 'Public parking options exist around Taman Sri Tanjung. Type of parking, charges and restrictions vary by spot, so follow local signage and arrive earlier at peak times.' },
      { q: 'Can I arrive by bus?', a: "Check the arrival terminal on your intercity bus ticket. PAJ lists Terminal Maharani on BMJ Muar routes; a direct park stop has not been confirmed. Plan a taxi or e-hailing connection if needed." },
      { q: 'Which airport is most practical?', a: 'Melaka International Airport is geographically closer, but flight frequency can change. KLIA offers a far wider network; continue from there by road or express bus to Muar where available.' },
      { q: 'Does the Sungai Muar cruise run every day?', a: "Visit Johor 2026 lists Muar River Cruise for weekends and holidays. Confirm your date, departure time, duration and fare with operator AZ Marine before going to the jetty; park hours are not a boat timetable." },
      { q: 'What Muar food should I try after visiting?', a: 'Standouts tied to a Muar trip include mee bandung, otak-otak, asam pedas and satay. Look for stalls or shops around Bandar Maharani and Taman Sri Tanjung, and check current opening hours first.' },
      { q: 'Where are the best photo spots at Tanjung Emas?', a: "Choose late-afternoon light while park access is permitted. Check sunset for your visit date and do not assume access continues after the listed park hours." },
    ],
  },

  zh: {
    meta: {
  "title": "麻坡黄金丹绒公园 Tanjung Emas｜开放时间、码头与游船指南",
  "description": "规划麻坡黄金丹绒公园行程：核对地图开放时段、交通、停车与码头。麻坡河游船的周末及假日营业安排需另向营运方确认。"
},
    hero: {
      pills: ['柔佛麻坡 · 皇城', '河岸 · 休闲 · 日落'],
      title: "麻坡黄金丹绒公园：河畔、广场与码头",
      sub: 'Tanjung Emas 是麻坡河出海口的公共休闲空间：沿河散步、看日落、亲子同游，也可在船班营运时从这里出发游河。',
    },
    quick: [
      { label: '入场', value: '公共公园 · 一般免票' },
      {
  "label": "地图所列时段",
  "value": "06:00–09:00 · 15:00–19:00"
},
      { label: '建议停留', value: '悠闲 1–2 小时' },
      { label: '位置', value: 'Taman Sri Tanjung, 麻坡' },
    ],
    about: {
      kicker: '为什么来 Tanjung Emas',
      heading: '一座面向麻坡河的城市公园。',
      lead: "黄金丹绒公园位于麻坡河出海口。麻坡市议会介绍了慢跑、散步、儿童游乐场及骑行设施，码头另有河上游览活动。",
      cards: [
        {
          title: '出海口旁的步道',
          text: '铺装步道沿着水岸延伸，适合散步或慢跑，看着麻坡河一路流向马六甲海峡。',
        },
        {
          title: '氛围随时段改变',
          text: '清晨安静，适合运动；傍晚带来日落光线、河风与更热闹的亲子氛围。',
        },
        {
          title: '从河上看麻坡',
          text: '船班营运时，麻坡河游船能给出完全不同的城市视角。时间、航程与收费请直接在码头确认。',
        },
      ],
    },
    gallery: {
      kicker: '现场实景',
      heading: '水、天空，与一段长长的步道。',
      note: '以下均为 Tanjung Emas 实拍照片，由 Slleong 拍摄，并通过 Wikimedia Commons 以 CC0 授权发布。',
      captions: ['Tanjung Emas 步道', '日落观景点', '出海口岸边的石岸'],
    },
    plan: {
      kicker: '规划行程',
      heading: '出发前先把这几件事定下来。',
      lead: 'Tanjung Emas 是开放公共空间，实际体验很受天气、周末与摊位营运影响。以下信息可作为基础，出发当天再查一次地图。',
      cards: [
        {
          title: '时间与最佳时段',
          body: "2026年10月19日核对的 Tanjung Emas Muar 地图条目显示，每日06:00–09:00及15:00–19:00开放。这是公园条目的时间，并非游船或所有摊位的营业时间；实际通行请依现场告示确认。",
          callout: '开放空间、活动、码头、摊位与车辆进出时间可能各不相同，出发前请查 Google 地图或营运单位信息。',
        },
        {
          title: '门票 / 花费',
          body: '一般进入公共公园无需门票；游船、游乐设施或摊贩等个别活动可能另行收费。',
          bullets: ['不要依赖评论里的旧价格。', '当日直接向营运单位确认收费。'],
        },
        {
          title: '停车',
          body: "请使用获准停车的区域并遵守现场标志。当前收费、限制与剩余车位尚未核实，不应默认免费，也不要擅用私人空地。",
          callout: '周末与傍晚请提早抵达并遵守指示牌；未经确认，不要把邻近空地当作正式停车场。',
        },
        {
          title: '建议停留时间',
          body: '**1–2 小时**足以散步、拍照、在河边放空。若要游船或到市区用餐，就把 Tanjung Emas 排进麻坡半日行程。',
          bullets: ['清晨：散步或慢跑，人潮较少。', '傍晚：日落、家庭游客，气氛更热闹。'],
        },
      ],
    },
    transport: {
      kicker: '交通详解',
      heading: '不用猜，直达麻坡河边。',
      lead: '导航终点请设 “Tanjung Emas Muar / Taman Sri Tanjung”。搭乘公共交通时，先规划到麻坡的长途路段，最后再以出租车或网约车接驳一小段。',
      cards: [
        {
          title: '从机场出发',
          body: '**马六甲国际机场**地理位置较近，但要先确认是否有合适航班；若需要更广的国际航线，**吉隆坡国际机场（KLIA）**通常更实际。从 KLIA 可转长途车、出租车，或在班次允许时乘长途巴士前往麻坡。',
        },
        {
          title: '长途巴士到麻坡',
          body: "乘坐长途巴士时，请以车票上的抵达站为准。PAJ列出的麻坡BMJ路线包含Terminal Maharani；尚未确认有公园直达站，必要时安排出租车或网约车接驳。",
        },
        {
          title: '市区公共巴士',
          body: '柔佛公共交通机构（PAJ）公布麻坡 **Bas Muafakat Johor（BMJ）** 的路线与班次。请先查最新路线图；若站牌离公园较远，最后一段改用出租车或网约车。',
          link: { label: '查询 BMJ ↗', urlKey: 'bmj' },
        },
        {
          title: '出租车与网约车',
          body: "乘坐长途巴士时，请以车票上的抵达站为准。PAJ列出的麻坡BMJ路线包含Terminal Maharani；尚未确认有公园直达站，必要时安排出租车或网约车接驳。",
        },
        {
          title: '自驾',
          body: '导航前往 **Taman Sri Tanjung, 84000 Muar**。接近园区时请减速，遵循停车指示牌与当时生效的通行限制。',
        },
      ],
    },
    map: {
      kicker: '位置地图',
      heading: '麻坡 Tanjung Emas。',
      note: '地图语言设为马来文 / 马来西亚区域。请以互动地图查看入口、路况与最新停车选择。',
    },
    food: {
      kicker: '周边美食',
      heading: '走完河岸，用麻坡的方式吃一顿。',
      lead: '与其追着某一家店，不如用这四道料理当指南。可在 Taman Sri Tanjung、皇城（Bandar Maharani）与麻坡市区一带寻找，出发前先看营业时间。',
      cards: [
        { name: '麻坡 Mee Bandung', text: '浓稠香料汤汁配面条，是大家谈到麻坡时最有代表性的味道之一。' },
        { name: 'Otak-otak 乌达', text: '香料鱼浆小吃，方便外带，很适合在河岸散步后当作轻松小食。' },
        { name: 'Asam Pedas 酸辣鱼', text: '午餐或晚餐的酸辣汤汁选择，通常配鱼与白饭。' },
        { name: '麻坡沙爹 Satay', text: '可作为迟早餐或轻食，视店家与营业时间而定。' },
      ],
      spots: [
        { id: 'kopitiam', name: 'Pak Cik Kopitiam · Sri Muar', text: 'Taman Sri Tanjung · 早餐、咖啡与在地料理，含 mee bandung。' },
        { id: 'asamPedas', name: 'Asam Pedas Jalan Joned', text: 'Taman Sri Tanjung · 柔佛风味 asam pedas，适合午餐。' },
        { id: 'bako', name: 'Bako-Bako & Salai-Salai Haji Olie', text: 'Jalan Bentayan · 烤鱼、烟熏料理与马来／柔佛风味。' },
      ],
      note: '以上选择位于麻坡市区 / Taman Sri Tanjung 一带。店家、菜单与营业时间可能变动，出发前请查看地图。',
    },
    nearby: {
      kicker: '周边景点',
      heading: '继续走，走进皇城的另一面。',
      lead: 'Tanjung Emas 很容易与麻坡的地标和街头艺术串在一起。建议安排一条从河岸走向市中心的路线，避免来回折返。',
      cards: [
        { tag: '建筑', title: 'Masjid Jamek Sultan Ibrahim 清真寺', text: '位于河岸一带，适合与 Tanjung Emas 安排在同一趟行程。请尊重礼拜时间、服装与礼拜空间。' },
        { tag: '市区', title: '麻坡钟楼', text: '皇城市中心的地标，很适合排进麻坡老城的短程散步圈。' },
        { tag: '街头艺术', title: 'Maharani 壁画巷与文化步道', text: '以壁画与巷弄讲述麻坡的视觉故事；建议趁天色还亮时前往拍照。' },
        { tag: '河流', title: '苏丹依斯迈大桥与市区河岸', text: '把大桥与河岸当作麻坡河体验的视觉延伸，再返回市中心。' },
      ],
    },
    faq: [
      { q: 'Tanjung Emas 需要门票吗？', a: '公共园区一般可免费进入。游船等由营运单位另行经营的活动可能收费，且班次可能变动。' },
      { q: '什么时候最适合来？', a: '清晨适合散步与慢跑；傍晚到日落则最有河岸氛围。周末通常比较热闹，人也较多。' },
      { q: '建议停留多久？', a: '约 1–2 小时足以散步、拍照、享受河岸。若想游船或到市区用餐，可再延长。' },
      { q: '有停车的地方吗？', a: 'Taman Sri Tanjung 一带有公共停车选择，但停车类型、收费与限制因地点而异，请遵循现场指示牌，并在高峰时段提早抵达。' },
      { q: '可以搭巴士来吗？', a: "乘坐长途巴士时，请以车票上的抵达站为准。PAJ列出的麻坡BMJ路线包含Terminal Maharani；尚未确认有公园直达站，必要时安排出租车或网约车接驳。" },
      { q: '哪个机场比较方便？', a: '马六甲国际机场距离较近，但航班频率可能变动；吉隆坡国际机场航线网络更广，抵达后再走公路或搭长途巴士前往麻坡。' },
      { q: '麻坡河游船每天都有吗？', a: "Visit Johor 2026将麻坡河游船列为周末及假日营业。前往码头前，请向AZ Marine确认出发日期、班次、航程与票价；公园开放时间不能当作船班时刻表。" },
      { q: '参观后适合吃什么？', a: '与麻坡之行最相连的选择包括 mee bandung、otak-otak、asam pedas 与沙爹。可在皇城与 Taman Sri Tanjung 一带寻找摊位或店家，出发前先确认营业时间。' },
      { q: 'Tanjung Emas 哪里最适合拍照？', a: "在公园允许通行的时间内选择傍晚光线，并查询出行当天的日落时间；不要默认公园所列时段结束后仍能进入。" },
    ],
  },
};
