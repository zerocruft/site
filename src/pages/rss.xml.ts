import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
  let guides: any[] = [];
  try {
    guides = await getCollection('guides', ({ data }) => !data.draft);
  } catch {
    guides = [];
  }

  return rss({
    title: 'ZeroCruft',
    description: 'Anti-bloat engineering, testing under constraints, terminal receipts, and squeezing maximum utility out of Linux and raw silicon.',
    site: context.site || 'https://site.zerocruft.workers.dev',
    items: guides.map((guide) => ({
      title: guide.data.title,
      pubDate: guide.data.pubDate,
      description: guide.data.description,
      link: `/guides/${guide.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};
