# billalcantara.me

My portfolio, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Edit content

| What | Where |
|---|---|
| Name, tagline phrases, email, socials, projects, library, photos, About timeline | `src/site.ts` |
| About page text | `src/about.md` |
| Blog posts | `src/content/writing/*.md` (set `draft: true` to hide one) |
| Images | `public/` |

## Run locally

Needs Node 22.23.4 or newer.

```sh
npm install
npm run dev
```

Every push to `main` deploys the site.
