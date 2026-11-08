# ZeroCruft Creator Platform Agent Directives

## Architecture & Core Philosophy
- **Stack**: Astro 5 (Static Site Generation), TypeScript, Tailwind/Modern CSS, Cloudflare Pages.
- **Zero-Client-JS Baseline**: 0 kB client framework JavaScript. Pure semantic HTML, responsive modern CSS, and lightweight progressive enhancements.
- **Zero Fake Data Integrity**: No placeholder thumbnails, no fake view counts, no fake "LIVE" status pills. Only authentic testing rigs, raw terminal receipts, and real reproducible benchmarks.

## Modern Systems Engineering Aesthetics (Anti-Slop)
- **Authentic Engineering Craft**: Follow `design-taste-frontend` and `impeccable` guidelines:
  - **No Card Monotony**: Plain typography and structured layouts beat cards. Never wrap every paragraph into rounded glass cards.
  - **Real Preformatted Shell Logs**: Use native `<pre><code>` blocks with syntax-highlighted commands and benchmarks. NEVER build toy macOS terminal window simulators with fake traffic light dots.
  - **Clean Hairline Borders**: 1px subtle borders (`rgba(255, 255, 255, 0.08)`) beat glowing specular dropshadows and unanchored radial mesh gradients.
- **8pt Spatial Grid**: All margins, padding, and layout spacing MUST align to 4pt/8pt increments (4, 8, 12, 16, 24, 32, 40). Zero tolerance for arbitrary 5px, 7px, 13px, or 54px values.
- **Typography Scale**: High-contrast, clean hierarchy. Display: system-ui / -apple-system. Monospace: JetBrains Mono / SF Mono. Minimum 13px for uppercase badges/pills to prevent micro-glyph distortion.
- **Minimum Tap Target**: Minimum 44x44pt on mobile viewports (32px for dense desktop toolbars).

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
  - Step 1 (Code Hygiene & HIG): Enforces 8pt grid, tap targets, no macOS dots, no unbound live indicators.
  - Step 2 (Ponytail Diff): Audits net line churn and scope.
  - Step 3 (Headless DOM Telemetry): Verifies rendered geometry against `dist/index.html` on Desktop (1440x900) and Mobile (390x844).
- ALWAYS verify clean build via `npm run build` before pushing.
