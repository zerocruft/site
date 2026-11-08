# ZeroCruft Creator Platform Agent Directives

## Architecture & Core Philosophy
- **Stack**: Astro 5 (Static Site Generation), TypeScript, Tailwind/Modern CSS, Cloudflare Pages.
- **Zero-Client-JS Baseline**: 0 kB client framework JavaScript. Pure semantic HTML, responsive modern CSS, and lightweight progressive enhancements.
- **Zero Fake Data Integrity**: No placeholder thumbnails, no fake view counts. Only authentic testing rigs, raw terminal receipts, and real reproducible benchmarks.

## Apple HIG & Tactile Fluid Physics
- **8pt Spatial Grid**: All margins, padding, and layout spacing MUST align to 4pt/8pt increments (4, 8, 12, 16, 24, 32, 40). Zero tolerance for arbitrary 5px, 7px, or 13px values.
- **Layered Dark Surfaces (Levels 0–3)**:
  - Level 0 (Canvas): `#000000` / `#050505`
  - Level 1 (Base Cards): `rgba(255, 255, 255, 0.04)` with `backdrop-filter: blur(16px)`
  - Level 2 (Elevated Panels): `rgba(255, 255, 255, 0.07)` with 1px interior border `rgba(255, 255, 255, 0.10)`
  - Level 3 (Pills & Popovers): `rgba(255, 255, 255, 0.12)`
- **Continuous Curvature**: Apple $G^2$ continuous squircles (`border-radius: 8px | 10px | 12px | 16px` for cards, `border-radius: 9999px` for pills).
- **Spring Physics**: Settling time 300ms with `cubic-bezier(0.16, 1.0, 0.3, 1.0)`.

## Generative Engine Optimization (GEO) & Machine Ingestion
- **Answer.AI Standard**:
  - `/llms.txt`: Plain markdown manifest summarizing the channel, manifesto, and companion guide index.
  - `/llms-full.txt`: Concatenated full-text corpus of companion guides for ingestion by Perplexity, ChatGPT Search, Claude, and local LLMs.
  - When modifying or adding guides under `src/content/guides/`, ALWAYS verify both `llms.txt` and `llms-full.txt` remain synchronized.
- **Structured Schema (JSON-LD)**:
  - Every guide must render `schema.org/TechArticle` with hardware specifications and reproduction steps.
  - Every video embed must include `schema.org/VideoObject` with YouTube IDs, upload dates, and durations.
  - Automated RSS 2.0 at `/rss.xml` and sitemaps at `/sitemap-index.xml`.

## Design Intelligence Pre-Flight
- Run `ui-ux-pro-max "<domain>" --domain style|color|ux` to select palettes and token pairings before adding new layout components.
- Proactively check against the 119 UX Anti-Patterns (contrast >= 4.5:1, visible focus states, no layout shift).

## Mandatory Pre-Flight Verification
- ALWAYS run `visual-harness audit-code <css_or_astro_file>` before declaring UI changes done.
- ALWAYS run `npm run build` to verify clean static site generation before pushing or deploying.
