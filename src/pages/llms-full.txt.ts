import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://zerocruft.pages.dev';
  let guides: any[] = [];
  try {
    guides = await getCollection('guides', ({ data }) => !data.draft);
  } catch {
    guides = [];
  }

  const sections: string[] = [
    `# ZeroCruft Full Content Manifest\n\nSite: ${baseUrl}\nChannel: https://www.youtube.com/@zerocruft\nManifesto: Anti-bloat engineering, testing under constraints, terminal receipts, and squeezing maximum utility out of Linux and raw silicon.\n`
  ];

  if (guides.length === 0) {
    sections.push(
      `## Status\n\nZeroCruft is actively engineering Video #1. Full benchmark receipts, raw shell scripts, and reproducible configs will populate this endpoint upon release.`
    );
  } else {
    for (const guide of guides) {
      sections.push(
        `---\n\n## ${guide.data.title}\nURL: ${baseUrl}/guides/${guide.id}\nPublished: ${guide.data.pubDate.toISOString()}\nDescription: ${guide.data.description}\n\n${guide.body || ''}\n`
      );
    }
  }

  return new Response(sections.join('\n\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
