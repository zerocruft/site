import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    videoId: z.string().optional(),
    videoTitle: z.string().optional(),
    videoUploadDate: z.coerce.date().optional(),
    duration: z.string().optional(),
    tags: z.array(z.string()).default([]),
    benchmarkHardware: z.record(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
