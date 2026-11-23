// llms.txt (see llmstxt.org): a plain Markdown summary of the site for language models, built from
// the same data as the pages, so it stays current with new projects and posts.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, timeline } from '../site';

export const GET: APIRoute = async ({ site: origin }) => {
  const url = (path: string) => new URL(path, origin).href;
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const posts = (await getCollection('writing', (p) => !p.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const awards = timeline.find((t) => t.heading === 'Recognition')?.entries ?? [];

  const text = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} is an ${site.role} based in ${site.place}. Contact: ${site.email}.`,
    '',
    '## Pages',
    `- [About](${url('/about/')}): background, experience, leadership and recognition`,
    `- [Projects](${url('/projects/')}): every project, with write-ups`,
    `- [Writing](${url('/writing/')}): essays`,
    `- [Library](${url('/library/')}): books, manga and manhwa, with short plot summaries`,
    `- [Photos](${url('/photos/')}): competitions, hackathons and events`,
    '',
    '## Projects',
    ...projects.map((p) => `- [${p.data.title}](${url(`/projects/${p.id}/`)}): ${p.data.blurb} (${p.data.kind}, ${p.data.year})`),
    '',
    '## Recognition',
    ...awards.map((e) => `- ${e.org}: ${e.roles.map((r) => `${r.title} (${r.years})`).join('; ')}`),
    '',
    '## Writing',
    ...posts.map((p) => `- [${p.data.title}](${url(`/writing/${p.id}/`)})${p.data.description ? `: ${p.data.description}` : ''}`),
    '',
    '## Elsewhere',
    ...site.socials.filter((s) => s.href).map((s) => `- [${s.label}](${s.href})`),
    '',
  ].join('\n');

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
