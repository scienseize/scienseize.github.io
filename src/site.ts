// All the site content that is not a blog post lives here.
// Projects live in src/content/projects/*.md. Photos for the home page go in public/.

export const site = {
  name: 'Bill C. Alcantara',
  // Used in the home heading, page descriptions, link previews and structured data.
  role: 'AI engineer',
  description: 'Bill C. Alcantara, an AI engineer in Manila who builds AI applications end to end, then takes them apart.',
  // The line under the name in the footer.
  tagline: 'AI engineer in Manila. I build AI applications end to end, then take them apart.',
  // The 1200 × 630 card shown when a link to the site is shared. Link previews (LinkedIn, Slack, X)
  // cache it by URL, so when the card changes, give the file a new name (og-v3.jpg, ...).
  image: '/og-v2.jpg',
  // The home page tagline: "currently <one of these>." It picks a new one every few seconds.
  doing: [
    'optimizing models',
    'shipping APIs',
    'training classifiers',
    'profiling GPUs',
    'writing evals',
    'cleaning datasets',
    'debugging pipelines',
    'reading papers',
    'tuning prompts',
    'fixing flaky tests',
    'refactoring code',
    'building agents',
  ],
  // The home page heading: "<pre>Bill<post>" in another language every few seconds. The first is shown on load.
  // East and Southeast Asian languages, plus Spanish, French and Russian. Each is short and casual, so it
  // fits on one line on a 320 px phone; keep new ones as short.
  hello: [
    { lang: 'en', pre: "Hi, I'm ", post: '.' },
    { lang: 'fil', pre: '', post: ' nga pala.' },
    { lang: 'ja', pre: 'やあ、', post: 'だよ。' },
    { lang: 'ko', pre: '안녕, 난 ', post: '이야.' },
    { lang: 'zh-CN', pre: '你好，我是', post: '。' },
    { lang: 'zh-HK', pre: '你好，我係', post: '。' }, // Cantonese
    { lang: 'id', pre: 'Halo, saya ', post: '.' },
    { lang: 'ms', pre: 'Hai, saya ', post: '.' },
    { lang: 'th', pre: 'หวัดดี ผมชื่อ ', post: '' },
    { lang: 'vi', pre: 'Chào, tôi là ', post: '.' },
    { lang: 'es', pre: 'Hola, soy ', post: '.' },
    { lang: 'fr', pre: "Salut, c'est ", post: '.' },
    { lang: 'ru', pre: 'Привет, я ', post: '.' },
  ],
  email: 'billalcantara.dev@gmail.com',
  // The footer clock shows the time here. timeZone is an IANA name.
  place: 'Manila, PH',
  timeZone: 'Asia/Manila',
  // The contact icons (side rail and footer) show every social with an href, after Email.
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/bbb1l7' },
    { label: 'GitHub', href: 'https://github.com/scienseize' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/billalc' },
    { label: 'X', href: '' }, // TODO
  ],
};

// About page. The long text is in src/about.md; these are the short facts and the timeline.
export const about = {
  photo: '/about/portrait.webp', // in public/. Empty shows a placeholder.
  facts: [
    { label: 'Current', value: 'Senior Data Science Student, Engineer' },
    { label: 'Based', value: 'Manila, PH (UTC+8)' },
  ],
};

// note: optional subtext under the organization name.
// paper: the title of the paper an award was for, shown in quotes under the organization.
// project (a project slug) and photos (paths from `photos` below) fill the case file that opens from a Recognition entry.
// peek: a photo that shows when the organization's name is hovered or clicked (ratio as 'width / height', default 3 / 2).
type Entry = { org: string; note?: string; paper?: string; href?: string; project?: string; photos?: string[]; peek?: { src: string; caption: string; ratio?: string }; roles: { title: string; years: string }[] };

export const timeline: { heading: string; entries: Entry[] }[] = [
  {
    heading: 'Experience',
    entries: [
      { org: 'Nestlé Philippines', peek: { src: '/about/nestle.webp', caption: 'Nestlé Philippines · December 2025', ratio: '787 / 1400' }, roles: [{ title: 'Sales Analytics and Process Optimization Intern', years: 'Sep—Dec 2025' }] },
      { org: 'Eskwelabs', roles: [{ title: 'Data Analytics Fellow', years: 'Jan—Apr 2023' }] },
    ],
  },
  {
    heading: 'Leadership',
    entries: [
      { org: 'iSO', note: 'iACADEMY Sports Organization', peek: { src: '/about/iso.webp', caption: 'A Hexagames night we organized · iACADEMY, November 12, 2026', ratio: '4 / 3' }, roles: [{ title: 'Sports Manager', years: 'Sep 2026—now' }] },
      { org: 'iMPACT', note: 'Humanitarian and community development organization of iACADEMY',
        peek: { src: '/about/impact.webp', caption: 'Beyond the Fare: relief packages for jeepney drivers hit by diesel price hikes · October 2026 · Photo by Jayden Ong, The ArcHives', ratio: '16 / 9' }, roles: [{ title: 'Vice President, Internal', years: 'Sep 2026—now' }] },
    ],
  },
  {
    heading: 'Recognition',
    entries: [
      {
        org: 'I-RISE Conference 2026',
        project: 'energy-anatomy',
        note: 'International Research and Innovation for Sustainable Education',
        paper: 'A Comparative Analysis of Transformer Energy Consumption: Waste Attribution and Architectural Optimization for Sustainable Large Language Model Pretraining',
        roles: [
          { title: 'Best Paper Award', years: 'Nov 2026' },
          { title: 'Student Best Paper Presentation Award', years: 'Nov 2026' },
        ],
      },
      {
        org: '5th Poland–Philippines IT Business Summit Hackathon',
        project: 'lakad',
        photos: ['/photos/lakad-demo.webp'],
        roles: [{ title: 'Winner, team Lakad Kinetic Development', years: 'Oct 2026' }],
      },
      {
        org: 'Huawei ICT Competition 2025–2026',
        photos: ['/photos/huawei-third-prize.webp'],
        note: 'Computing Track',
        roles: [{ title: 'Third Prize, Philippines', years: 'Dec 2025' }],
      },
      {
        org: 'I-RISE Conference 2025',
        project: 'semiotic-validity',
        note: 'International Research and Innovation for Sustainable Education',
        paper: 'Quantifying Semiotic Validity: Measuring Conceptual Depth in Vector Retrieval Systems',
        roles: [{ title: 'Student Best Paper Presentation Award', years: 'Nov 2025' }],
      },
      {
        org: 'Huawei ICT Competition 2024–2025',
        photos: ['/photos/huawei-global-final.webp'],
        note: 'Cloud Track',
        roles: [
          { title: 'Grand Prize, Global Finals, Shenzhen, China', years: 'May 2025' },
          { title: 'Grand Prize, Regional Finals, Kuala Lumpur, Malaysia', years: 'Feb 2025' },
          { title: 'Grand Prize, National Finals, Philippines', years: 'Dec 2024' },
        ],
      },
    ],
  },
  {
    heading: 'Education',
    entries: [
      { org: 'iACADEMY', roles: [{ title: 'BS Computer Science, specialization in Data Science', years: 'Expected 2027' }] },
    ],
  },
];

// The shelf on the home page. cover is in public/library/; color and
// ink are the spine and its text. year is the first publication; older books show more wear.
export const library: { title: string; year: number; author: string; kind: 'book' | 'manga' | 'manhwa'; cover: string; color: string; ink: string }[] = [
  { title: 'Sun and Steel', year: 1968, author: 'Yukio Mishima', kind: 'book', cover: '/library/sun-and-steel.webp', color: '#C8322A', ink: '#fff' },
  { title: 'Dungeon Crawler Carl', year: 2020, author: 'Matt Dinniman', kind: 'book', cover: '/library/dungeon-crawler-carl.webp', color: '#F2C21B', ink: '#17160f' },
  { title: "We'll Prescribe You a Cat", year: 2023, author: 'Syou Ishida', kind: 'book', cover: '/library/prescribe-a-cat.webp', color: '#EFEAE0', ink: '#17160f' },
  { title: 'Strange Pictures', year: 2022, author: 'Uketsu', kind: 'book', cover: '/library/strange-pictures.webp', color: '#7CCB4A', ink: '#17160f' },
  { title: 'Murder on the Orient Express', year: 1934, author: 'Agatha Christie', kind: 'book', cover: '/library/orient-express.webp', color: '#3F3B2C', ink: '#fff' },
  { title: 'The A.B.C. Murders', year: 1936, author: 'Agatha Christie', kind: 'book', cover: '/library/abc-murders.webp', color: '#7A2E22', ink: '#fff' },
  { title: 'Eternally Regressing Knight', year: 2024, author: 'Soulpung', kind: 'manhwa', cover: '/library/eternally-regressing-knight.webp', color: '#5B4030', ink: '#fff' },
  { title: 'Raising Villains the Right Way', year: 2025, author: 'Bomhanbangul', kind: 'manhwa', cover: '/library/raising-villains.webp', color: '#3A1E3A', ink: '#fff' },
  { title: 'Star Embracing Swordmaster', year: 2023, author: 'Q10', kind: 'manhwa', cover: '/library/star-embracing-swordmaster.webp', color: '#1E4F7A', ink: '#fff' },
  { title: 'Got Dropped into a Ghost Story, Still Gotta Work', year: 2026, author: 'Baek Deok-su', kind: 'manhwa', cover: '/library/ghost-story-still-gotta-work.webp', color: '#2A2A30', ink: '#fff' },
  { title: '20th Century Boys', year: 1999, author: 'Naoki Urasawa', kind: 'manga', cover: '/library/20th-century-boys.webp', color: '#E4DED0', ink: '#17160f' },
  { title: 'Katekyo Hitman Reborn!', year: 2004, author: 'Akira Amano', kind: 'manga', cover: '/library/katekyo-hitman-reborn.webp', color: '#F2D23A', ink: '#17160f' },
  { title: 'Detective Conan', year: 1994, author: 'Gosho Aoyama', kind: 'manga', cover: '/library/detective-conan.webp', color: '#D9A441', ink: '#17160f' },
];

// In the bag: the things I carry every day, as die-cut stickers on the home page, grouped into lots.
// image is a cutout with a transparent background, in public/bag/. size is the real length of the picture's
// longest side, in millimetres: every sticker is drawn to the same scale, so a lip balm sits small next to a
// laptop. tilt is a small turn in degrees, so each sticker looks stuck on by hand. The section is hidden
// while the list is empty.
// TODO(Bill): the notes are first guesses; correct them.
type BagItem = { name: string; note?: string; image: string; size: number; tilt: number };
export const bag: { lot: string; items: BagItem[] }[] = [
  {
    lot: 'Electronics',
    items: [
      { name: 'iPhone Air', note: 'the daily driver', image: '/bag/iphone-air.webp', size: 156, tilt: 2 },
      { name: 'Nothing Phone (3a) Pro', note: 'the second phone, for Android', image: '/bag/nothing-phone.webp', size: 164, tilt: -2 },
      { name: 'iPhone 6', note: 'a camera, and only a camera', image: '/bag/iphone-6.webp', size: 138, tilt: -2 },
      { name: 'MacBook Air 13-inch (M3)', note: 'stickers and all', image: '/bag/macbook.webp', size: 304, tilt: 1 },
      { name: 'Xteink X4', note: 'where the books live', image: '/bag/e-reader.webp', size: 114, tilt: -2 },
      { name: 'Bose QuietComfort Ultra (2nd Gen)', note: 'the quiet', image: '/bag/headphones.webp', size: 190, tilt: 2 }, // folded
      { name: 'Anker A1695', note: 'never below 20%', image: '/bag/power-bank.webp', size: 157, tilt: -2 },
    ],
  },
  {
    lot: 'Pockets',
    items: [
      { name: 'Keys', note: 'a car fob and too many charms', image: '/bag/keys.webp', size: 114, tilt: 2 },
      { name: 'Our Paraiso* MagSafe Card Holder', image: '/bag/stone-wallet.webp', size: 105, tilt: -2 },
      { name: 'Bolo 80/20 Quick Draw Bifold Wallet', note: 'cards and cash', image: '/bag/red-wallet.webp', size: 220, tilt: 2 }, // open; 120 closed
      { name: 'Altoids kit', note: 'EarPods, a lighter, pins, sticky notes', image: '/bag/altoids-open.webp', size: 120, tilt: -2 },
    ],
  },
  {
    lot: 'Paper',
    items: [
      { name: "Traveler's Notebook Passport", note: 'the leather wears in, not out', image: '/bag/travelers-notebook.webp', size: 130, tilt: 2 },
      { name: 'Lamy Safari + Uniball One', note: 'two kinds of ink', image: '/bag/pens.webp', size: 139, tilt: -2 },
    ],
  },
  {
    lot: 'Personal',
    items: [
      { name: 'Guava Smells Violet', note: 'violet and fresh freesia', image: '/bag/perfume.webp', size: 100, tilt: -2 },
      { name: 'Owala 18oz FreeSip Twist', note: 'Sports Paradise, always half full', image: '/bag/water-bottle.webp', size: 272, tilt: 2 },
      { name: 'Aquaphor Lip Repair', note: 'non-negotiable', image: '/bag/lip-balm.webp', size: 70, tilt: 2 },
    ],
  },
];

export const photos: { image?: string; caption: string }[] = [
  { image: '/photos/huawei-global-final.webp', caption: 'Grand Prize, Cloud Track · Huawei ICT Competition Global Final, Shenzhen, May 2025' },
  { image: '/photos/huawei-third-prize.webp', caption: 'Third Prize, Computing Track · 10th Huawei ICT Competition Philippines Awarding, Dec 2025' },
  { image: '/photos/lakad-demo.webp', caption: 'Demoing Lakad to the President of Poland · Poland–Philippines IT Business Summit Hackathon, Oct 2026' },
];
