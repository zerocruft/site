# ZeroCruft Site (`zerocruft.pages.dev`)

> Anti-bloat engineering, testing under constraints, terminal receipts, and squeezing maximum utility out of Linux and raw silicon.

The official creator platform and companion hub for **ZeroCruft** ([@zerocruft on YouTube](https://www.youtube.com/@zerocruft)).

---

## Architecture & Principles

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation).
- **Hosting**: Cloudflare Pages (`https://zerocruft.pages.dev`).
- **Footprint**: **0 kB client-side framework JavaScript** at baseline. Pure semantic HTML, responsive modern CSS, and lightweight progressive enhancements.
- **Design System**: Apple Human Interface Guidelines (HIG) standard with dark-mode layered surfaces (Levels 0–3), 8pt spatial grid, continuous curvature, and mathematically calibrated spring physics (`cubic-bezier(0.16, 1.0, 0.3, 1.0)`).
- **Zero Fake Data Integrity**: No placeholder thumbnails, no fake view counts. Only authentic testing rigs, raw terminal receipts, and real reproducible benchmarks.

---

## Generative Engine Optimization (GEO) & Machine Ingestion

- **Answer.AI Standard**:
  - `/llms.txt`: Plain markdown manifest summarizing the channel, manifesto, companion guide index, and direct links.
  - `/llms-full.txt`: Concatenated full-text corpus of companion guides for ingestion by Perplexity, ChatGPT Search, Claude, and local LLMs.
- **AI-Permissive `robots.txt`**: Explicitly permits `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, and `Applebot-Extended`.
- **Structured Data (JSON-LD)**:
  - `OrganizationSchema.astro`: Channel entity definition linking `@zerocruft`.
  - `ArticleSchema.astro`: `schema.org/TechArticle` for all video companion guides.
  - `VideoSchema.astro`: `schema.org/VideoObject` for YouTube embeds.
- **Feeds**: Automated RSS 2.0 at `/rss.xml` and XML sitemaps at `/sitemap-index.xml`.

---

## Adding New Video Companion Guides

When Video #1 drops on YouTube, create an MDX/MD document under `src/content/guides/`:

```markdown
---
title: "Minecraft on a 2012 Potato PC: The Linux Optimization Protocol"
description: "How to extract 60+ FPS out of an Intel HD 4000 dual-core laptop using Arch Linux, Zen kernel sysctl tuning, and ZGCMem flags."
pubDate: 2026-11-01
videoId: "YOUR_YOUTUBE_VIDEO_ID"
videoTitle: "Can a $40 Potato PC Play Modern Minecraft in 2026?"
videoUploadDate: 2026-11-01
duration: "PT15M42S"
tags: ["linux", "arch", "minecraft", "potato-pc", "jvm"]
benchmarkHardware:
  machine: "Lenovo ThinkPad X230"
  cpu: "Intel Core i5-3320M @ 2.60GHz"
  ram: "4GB DDR3 1600MHz"
  gpu: "Intel HD Graphics 4000"
  os: "Arch Linux (Linux-zen 6.12)"
draft: false
---

## Terminal Receipts & Reproduction Steps

...
```

The site will automatically:
1. Generate the companion article page at `/guides/<slug>`.
2. Inject `TechArticle` and `VideoObject` JSON-LD schemas.
3. Syndicate the guide to `/rss.xml`.
4. Append the guide to `/llms.txt` and `/llms-full.txt`.
5. Update `/sitemap-index.xml`.

---

## Development & Build

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Static production build
npm run build

# Preview dist
npm run preview
```

---

## License & Contact

- **Creator Contact**: `zerocruft@proton.me`
- **YouTube**: [https://www.youtube.com/@zerocruft](https://www.youtube.com/@zerocruft)
