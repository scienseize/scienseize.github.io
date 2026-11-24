// The sitemap: every page, built from the same collections as the pages themselves, so new projects
// and posts are listed without editing this file. Writing posts carry their date as lastmod.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('projects');
  const posts = await getCollection('writing', (p) => !p.data.draft);
  const pages: { path: string; lastmod?: Date }[] = [
    ...['/', '/about/', '/projects/', '/photos/', '/writing/'].map((path) => ({ path })),
    ...projects.map((p) => ({ path: `/projects/${p.id}/` })),
    ...posts.map((p) => ({ path: `/writing/${p.id}/`, lastmod: p.data.date })),
  ];
  const urls = pages.map(({ path, lastmod }) =>
    `  <url><loc>${new URL(path, site)}</loc>${lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}</url>`);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
