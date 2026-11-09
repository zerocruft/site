# ZeroCruft Creator Platform Agent Directives

## Architecture & Core Philosophy
- **Stack**: Astro 5 (Static Site Generation), TypeScript, Tailwind/Modern CSS, Cloudflare Pages.
- **Zero-Client-JS Baseline**: 0 kB client framework JavaScript. Pure semantic HTML, responsive modern CSS, and lightweight progressive enhancements.
- **Zero Fake Data Integrity**: No placeholder thumbnails, no fake view counts, no fake "LIVE" status pills. Only authentic testing rigs, raw terminal receipts, and real reproducible benchmarks.

## Positive Structural Design Blueprints (Query via `powerpack design blueprint <name>`)
- **Hero Composition (`powerpack design blueprint hero-systems`)**:
  - Asymmetric 2-column layout: Left column carries high-contrast editorial typography (`h1` display + body lead + action buttons).
  - Right column carries an authentic terminal receipt: a plain preformatted `<pre><code class="font-mono">` block with a strict `1ch` character grid, corner-bleeding 15–25% off the right/bottom edge of its container.
  - ZERO simulated OS window chrome: no titlebars, no mock traffic light dots, no fake tab bars.
- **Manifesto Directives (`powerpack design blueprint manifesto-editorial`)**:
  - Typographic column layout with 1px hairline dividers (`divide-y divide-white/10` / `border-y border-white/10`).
  - ZERO repetitive 4-card grids. Directives live directly on the canvas as editorial rows (`md:grid-cols-12`: index, title, text).
- **Bento & Feature Sections (`powerpack design blueprint bento-grid`)**:
  - Follow Stageshow Bento Law: 1 hero tile (spans 2 columns), 1 big display number stat tile (48–72px), 2 quiet typographic statement tiles. Never 4 identical cards in a row.

## Design Craft & Geometry
- **8pt Spatial Grid**: All margins, padding, and layout spacing MUST align to 4pt/8pt increments (4, 8, 12, 16, 24, 32, 40). Zero tolerance for arbitrary 5px, 7px, 13px, or 54px values.
- **Typography Scale**: High-contrast, clean hierarchy. Display: system-ui / -apple-system. Monospace: JetBrains Mono / SF Mono. Minimum 13px for uppercase badges/pills to prevent micro-glyph distortion.
- **Minimum Tap Target**: Minimum 44x44pt on mobile viewports (32px for dense desktop toolbars).
- **Clean Hairline Borders**: 1px subtle borders (`rgba(255, 255, 255, 0.08)`) beat glowing specular dropshadows and unanchored radial mesh gradients.

## Generative Engine Optimization (GEO) & Machine Ingestion
- **Answer.AI Standard**:
  - `/llms.txt`: Plain markdown manifest summarizing the channel, manifesto, and companion guide index.
  - `/llms-full.txt`: Concatenated full-text corpus of companion guides for ingestion by Perplexity, ChatGPT Search, Claude, and local LLMs.
  - When modifying or adding guides under `src/content/guides/`, ALWAYS verify both `llms.txt` and `llms-full.txt` remain synchronized.
- **Structured Schema (JSON-LD)**:
  - Every guide must render `schema.org/TechArticle` with hardware specifications and reproduction steps.
  - Automated RSS 2.0 at `/rss.xml` and sitemaps at `/sitemap-index.xml`.

## Mandatory Pre-Flight Verification Gate
- ZERO blind commits or deployments.
- Before committing UI changes, ALWAYS run `powerpack preflight`.
  - Step 1 (Code Hygiene & Composition): Enforces 8pt grid, tap targets, no simulated window chrome mockups, and no card monotony.
  - Step 2 (Ponytail Diff): Audits net line churn and scope.
  - Step 3 (Headless DOM Telemetry): Verifies rendered geometry against `dist/index.html` on Desktop (1440x900) and Mobile (390x844).
- ALWAYS verify clean build via `npm run build` before pushing.
