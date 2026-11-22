// All the site content that is not a blog post lives here.
// Projects live in src/content/projects/*.md. Photos for the home page go in public/.

export const site = {
  name: 'Bill C. Alcantara',
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
  email: 'billalcantara.dev@gmail.com',
  // The footer clock shows the time here. timeZone is an IANA name.
  place: 'Manila, PH',
  timeZone: 'Asia/Manila',
  socials: [
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
type Entry = { org: string; note?: string; paper?: string; href?: string; project?: string; photos?: string[]; roles: { title: string; years: string }[] };

export const timeline: { heading: string; entries: Entry[] }[] = [
  {
    heading: 'Experience',
    entries: [
      { org: 'Nestlé Philippines', roles: [{ title: 'Sales Analytics and Process Optimization Intern', years: 'Sep—Dec 2025' }] },
      { org: 'Eskwelabs', roles: [{ title: 'Data Analytics Fellow', years: 'Jan—Apr 2023' }] },
    ],
  },
  {
    heading: 'Leadership',
    entries: [
      { org: 'iSO', note: 'iACADEMY Sports Organization', roles: [{ title: 'Sports Manager', years: 'Sep 2026—now' }] },
      { org: 'iMPACT', note: 'Humanitarian and community development organization of iACADEMY', roles: [{ title: 'Vice President, Internal', years: 'Sep 2026—now' }] },
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

// The shelf on the home page. cover is in public/library/; color and ink are the spine and its text.
// year is the first publication; older books show more wear.
export const library: { title: string; year: number; author: string; kind: 'book' | 'manga' | 'manhwa'; cover: string; color: string; ink: string }[] = [
  { title: 'Sun and Steel', year: 1968, author: 'Yukio Mishima', kind: 'book', cover: '/library/sun-and-steel.webp', color: '#C8322A', ink: '#fff' },
  { title: 'Dungeon Crawler Carl', year: 2020, author: 'Matt Dinniman', kind: 'book', cover: '/library/dungeon-crawler-carl.webp', color: '#F2C21B', ink: '#17160f' },
  { title: "We'll Prescribe You a Cat", year: 2023, author: 'Syou Ishida', kind: 'book', cover: '/library/prescribe-a-cat.webp', color: '#EFEAE0', ink: '#17160f' },
  { title: 'Strange Pictures', year: 2022, author: 'Uketsu', kind: 'book', cover: '/library/strange-pictures.webp', color: '#7CCB4A', ink: '#17160f' },
  { title: 'Eternally Regressing Knight', year: 2024, author: 'Soulpung', kind: 'manhwa', cover: '/library/eternally-regressing-knight.webp', color: '#5B4030', ink: '#fff' },
  { title: 'Raising Villains the Right Way', year: 2025, author: 'Bomhanbangul', kind: 'manhwa', cover: '/library/raising-villains.webp', color: '#3A1E3A', ink: '#fff' },
  { title: 'Star Embracing Swordmaster', year: 2023, author: 'Q10', kind: 'manhwa', cover: '/library/star-embracing-swordmaster.webp', color: '#1E4F7A', ink: '#fff' },
  { title: 'Got Dropped into a Ghost Story, Still Gotta Work', year: 2026, author: 'Baek Deok-su', kind: 'manhwa', cover: '/library/ghost-story-still-gotta-work.webp', color: '#2A2A30', ink: '#fff' },
  { title: '20th Century Boys', year: 1999, author: 'Naoki Urasawa', kind: 'manga', cover: '/library/20th-century-boys.webp', color: '#E4DED0', ink: '#17160f' },
  { title: 'Katekyo Hitman Reborn!', year: 2004, author: 'Akira Amano', kind: 'manga', cover: '/library/katekyo-hitman-reborn.webp', color: '#F2D23A', ink: '#17160f' },
  { title: 'Detective Conan', year: 1994, author: 'Gosho Aoyama', kind: 'manga', cover: '/library/detective-conan.webp', color: '#D9A441', ink: '#17160f' },
];

export const photos: { image?: string; caption: string }[] = [
  { image: '/photos/huawei-global-final.webp', caption: 'Grand Prize, Cloud Track · Huawei ICT Competition Global Final, Shenzhen, May 2025' },
  { image: '/photos/huawei-third-prize.webp', caption: 'Third Prize, Computing Track · 10th Huawei ICT Competition Philippines Awarding, Dec 2025' },
  { image: '/photos/lakad-demo.webp', caption: 'Demoing Lakad to the President of Poland · Poland–Philippines IT Business Summit Hackathon, Oct 2026' },
];
