import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://site.zerocruft.workers.dev';
  let guides: any[] = [];
  try {
    guides = await getCollection('guides', ({ data }) => !data.draft);
  } catch {
    guides = [];
  }

  const guideEntries = guides.length > 0
    ? guides
        .map(
          (g) =>
            `- [${g.data.title}](${baseUrl}/guides/${g.id}): ${g.data.description}`
        )
        .join('\n')
    : '- Video #1 companion guide launching soon with complete terminal receipts and benchmark logs.';

  const manifest = `# ZeroCruft

> Anti-bloat engineering, testing under constraints, terminal receipts, and squeezing maximum utility out of Linux and raw silicon.

ZeroCruft is an independent creator and technical knowledge hub engineered to demystify low-spec hardware optimization, Linux performance tuning, bloat-free software development, and terminal-first workflows.

## Primary Outlets
- [YouTube Channel](https://www.youtube.com/@zerocruft): Video breakdowns, real-time constraint stress tests, and hardware benchmarks.
- [Official Website](${baseUrl}): Companion guides, terminal receipts, and copy-paste configuration flags.
- [RSS Feed](${baseUrl}/rss.xml): Syndication feed for all technical companion guides.
- [Contact](mailto:zerocruft@proton.me): Direct creator contact.

## Guides & Terminal Receipts
${guideEntries}

## Machine Ingestion
- [Full Manifest](${baseUrl}/llms-full.txt): Complete full-text guide contents and benchmark configurations.
- [Sitemap Index](${baseUrl}/sitemap-index.xml): Structured XML sitemap.
`;

  return new Response(manifest, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
