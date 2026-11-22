import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// One Markdown file per project. The body is the write-up shown in the project sheet.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(), // position on the home page, 1 first
    kind: z.string(),
    year: z.string(),
    blurb: z.string(),
    tools: z.array(z.string()),
    role: z.string().optional(),
    status: z.string().optional(),
    href: z.string().url().optional(), // source code or live link
    // Paths in public/, e.g. /projects/palmcards.webp. The card shows the first one; the sheet shows all.
    images: z.array(z.string()).default([]),
    cover: z.string().optional(), // card image when it should not be the first of `images`
    abstract: z.string().optional(), // shown as a paper page instead of a screenshot
  }),
});

export const collections = { writing, projects };
