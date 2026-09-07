import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    badge: z.object({
      label: z.string(),
      type: z.enum(['open-source', 'closed-source', 'research', 'live', 'wip']),
    }),
    order: z.number(),
    description: z.string(),
    media: z
      .object({
        src: z.string(),
        alt: z.string(),
        fit: z.enum(['cover', 'contain']).default('cover'),
      })
      .optional(),
    tags: z.array(z.string()),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { projects, blog };
