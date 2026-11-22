// All the site content that is not a blog post lives here.
// To add a screenshot or photo: put the file in public/ and set `image` to its path, e.g. '/projects/palmcards.png'.

export const site = {
  name: 'Bill Alcantara',
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
  role: 'Engineer',
  location: 'Manila, Philippines',
  email: 'billalcantara.dev@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/scienseize' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/billalc' },
    { label: 'X', href: '' }, // TODO
  ],
};

// About page. The long text is in src/about.md; these are the short facts and the timeline.
export const about = {
  photo: '', // e.g. '/about/portrait.jpg' in public/. Empty shows a placeholder.
  facts: [
    { label: 'Now', value: 'Data science student, iACADEMY' },
    { label: 'Based', value: 'Manila, PH (UTC+8)' },
  ],
};

// note: optional subtext under the organization name.
type Entry = { org: string; note?: string; href?: string; roles: { title: string; years: string }[] };

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
        org: '5th Poland–Philippines IT Business Summit Hackathon',
        roles: [{ title: 'Winner, team Lakad Kinetic Development', years: 'Oct 2026' }],
      },
      {
        org: 'Huawei ICT Competition 2025–2026',
        note: 'Computing Track',
        roles: [{ title: 'Third Prize, Philippines', years: 'Dec 2025' }],
      },
      {
        org: 'I-RISE Conference 2025',
        note: 'International Research and Innovation for Sustainable Education',
        roles: [{ title: 'Student Best Paper Presentation Award', years: 'Nov 2025' }],
      },
      {
        org: 'Huawei ICT Competition 2024–2025',
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

export type Project = {
  title: string;
  kind: string;
  year: string;
  blurb: string;
  tools: string[];
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: 'PalmCards',
    kind: 'AI · computer vision',
    year: '2026',
    blurb: 'A gesture-controlled editor and rehearsal mirror. Edit your notes with your hands, then practice out loud and compare takes.',
    tools: ['MediaPipe', 'Ollama', 'Claude API'],
    href: 'https://github.com/scienseize/Palmcards',
  },
  {
    title: 'Energy Anatomy',
    kind: 'Thesis · ML systems',
    year: '2026',
    blurb: 'Roofline-based energy profiling of transformer components, from Pythia 160M to 6.9B on a T4.',
    tools: ['PyTorch', 'Zeus', 'NVML'],
    href: 'https://github.com/scienseize/energy-anatomy',
  },
  {
    title: 'Lakad',
    kind: 'Hackathon winner',
    year: '2026',
    blurb: 'Walking navigation and crowd reporting for Makati. Winner at the 5th Poland–Philippines IT Business Summit Hackathon.',
    tools: ['Flutter', 'FastAPI', 'React', 'Mapbox'],
    href: 'https://github.com/garcieee/LKD',
  },
  {
    title: 'BioSentry Intelligence',
    kind: 'Clinical triage',
    year: '2026',
    blurb: 'An early-warning dashboard for hospital wards. It ranks patients by NEWS2 so clinicians know who to see first.',
    tools: ['FastAPI', 'React', 'TypeScript'],
  },
  {
    title: 'Hexagames',
    kind: 'Realtime web app',
    year: '2026',
    blurb: 'Fair rotation, live scoreboard and player stats for pick-up basketball nights. Syncs across laptops and works offline.',
    tools: ['Cloudflare Workers', 'D1', 'JavaScript'],
  },
];

// kind sets the spine shape: books are tall, manga and manhwa volumes are short and thin.
export const library: { title: string; author: string; kind: 'book' | 'manga' | 'manhwa'; color: string }[] = [
  { title: 'The A.B.C. Murders', author: 'Agatha Christie', kind: 'book', color: '#9E2B25' },
  { title: 'Manga title', author: 'Author', kind: 'manga', color: '#E8E2D0' }, // TODO
  { title: 'Book title', author: 'Author', kind: 'book', color: '#2F4A3A' }, // TODO
  { title: 'Manhwa title', author: 'Author', kind: 'manhwa', color: '#2B3A55' }, // TODO
  { title: 'Manga title', author: 'Author', kind: 'manga', color: '#C9A227' }, // TODO
  { title: 'Book title', author: 'Author', kind: 'book', color: '#5A3E5D' }, // TODO
];

export const photos: { image?: string; caption: string }[] = [
  { caption: 'Photo caption' }, // TODO
  { caption: 'Photo caption' }, // TODO
  { caption: 'Photo caption' }, // TODO
];
