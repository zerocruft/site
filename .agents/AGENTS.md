# ZeroCruft Creator Platform Agent Directives

## Architecture & Core Philosophy
- **Stack**: Astro 5 (Static Site Generation), TypeScript, Tailwind/Modern CSS, Cloudflare Pages.
- **Zero-Client-JS Baseline**: 0 kB client framework JavaScript. Pure semantic HTML, responsive modern CSS, and lightweight progressive enhancements.
- **Zero Fake Data Integrity**: No placeholder thumbnails, no fake view counts, no fake "LIVE" status pills. Only authentic testing rigs, raw terminal receipts, and real reproducible benchmarks.

---

## 🏛️ SOTA Design Principles & Anti-Slop Governance

### 1. The Anti-Card-Soup Invariant (Ladder of Laziness)
- **Plain typography directly on canvas beats cards every time.**
- Wrapping homogeneous content (e.g., manifesto directives, feature lists, value propositions) into identical rounded dark boxes is **strictly prohibited**.
- Directives and principles live directly on the canvas as typographic rows divided by 1px hairline rules (`divide-y divide-white/10` or `border-y border-white/10`).
- Cards are permitted **ONLY** for disparate interactive objects (e.g., an interactive benchmark terminal runner or distinct companion tools). Never render 4 identical cards in a row.

### 2. The Framing Law (Asymmetry, Bleed, Offset Horizon)
- Interfaces must **never** float centered in a container with equal air on four sides like a museum specimen.
- Technical terminal receipts and data logs must either:
  1. **Corner-bleed**: Bleed 15–25% off the right and bottom edge of their container, or
  2. **Anchor to a hard baseline**: Fill the column edge with a 1px hairline boundary.
- **Zero Toy OS Chrome**:
  - NEVER render macOS traffic light dots (red/yellow/green circles) in a Linux/bare-metal context.
  - NEVER render fake window titlebars, mock close buttons, or faux draggable headers.
  - Preformatted `<pre><code class="font-mono">` blocks rendered natively beat toy window simulators.

### 3. Typography & Contrast Floor
- **Visual hierarchy is created through optical weight, tracking, and leading — NEVER by boxing text into badges.**
- **Contrast Requirement**: Strict WCAG AA (>= 4.5:1 for body copy; >= 3:1 for large display headers).
- **Scale**:
  - Display (`h1`): `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white`.
  - Section Header (`h2`): `text-2xl sm:text-3xl font-semibold tracking-tight text-white`.
  - Body Text: `text-base sm:text-lg text-[#8a919e] max-w-[54ch] leading-relaxed`.
  - Monospace Data: `font-mono text-sm leading-relaxed text-[#10b981]` with strict `1ch` character grid.
  - Pill Badges: Minimum `13px` font size, uppercase tracking-wide (`tracking-wider`), with subtle 1px border.

### 4. Zero Photographic Wallpaper / Dark Metal Palette
- **Canvas**: Deep, solid, authentic engineering dark canvas (`#08090c` / `#0a0b0e`).
- **NEVER** slap stock nature photos, mountains, or landscape wallpapers behind technical systems documentation or terminal receipts.
- **Hairlines beat Glow**: Subtle 1px borders (`rgba(255, 255, 255, 0.08)`) and high-density hairline dividers beat glowing neon drop-shadows and unanchored radial mesh gradients.

### 5. Data Integrity & Honest Telemetry
- NEVER render fake "LIVE" badges or pulsing green indicators on static pages.
- Use honest, verified labels: `"REPRODUCIBLE RUN"`, `"BENCHMARK SPEC"`, `"ARCH LINUX // 0 kB JS"`.
- If a metric is displayed, it must represent real hardware numbers (e.g. `241,000 IOPS`, `129.5 µs P50 Latency`, `7,450 MB/s`).

### 6. The 8pt Spatial Rhythm & Tap Targets
- All padding, margins, gaps, and heights must align strictly to the 4pt/8pt spatial grid: `[4, 8, 12, 16, 24, 32, 40, 48, 64]`.
- Clickable targets must meet minimum **44x44pt on mobile viewports** and **32px on dense desktop viewports** (WCAG 2.5.5).

### 7. Multimodal Visual Self-Critique Gate
- ZERO blind commits.
- Before committing any UI modifications, run `powerpack preflight`.
- Preflight automatically captures `/tmp/preflight_rendered.png` via headless Chrome CDP.
- Agent **MUST** inspect the rendered snapshot using `read_file` to visually verify typography hierarchy, contrast, and alignment before completing work.

---

## Positive Structural Blueprints (Query via `powerpack design blueprint <name>`)

### Hero Systems (`powerpack design blueprint hero-systems`)
- **Left Column (lg:col-span-6)**: High-contrast editorial typography (`eyebrow` badge + `h1` display headline + `lead` body copy + primary 44px min-height CTA).
- **Right Column (lg:col-span-6)**: Asymmetric preformatted `<pre><code class="font-mono">` block with corner-bleed (15–20% overflow off right/bottom) and 1px hairline border. No simulated OS window chrome.

### Manifesto Editorial (`powerpack design blueprint manifesto-editorial`)
- Typographic column layout with 1px hairline dividers (`divide-y divide-white/10` / `border-y border-white/10`).
- Directives live directly on the canvas as editorial rows (`md:grid-cols-12`: index `col-span-2`, title `col-span-4`, statement text `col-span-6`).
- Zero cards.

### Bento Hub (`powerpack design blueprint bento-grid`)
- Follow Stageshow Bento Law:
  - 1 Hero tile (spans 2 columns).
  - 1 Big Display Stat tile (e.g. `48–72px` stat number + short lead).
  - 2 Quiet Typographic Statement tiles.
  - Never 4 identical cards in a row.

### Hardware Spec Matrix (`powerpack design blueprint spec-matrix`)
- Monospace key-value data table with 1px dividers:
  - CPU, RAM, NVMe Direct-I/O, Kernel parameters.
  - No bloated nested cards.

---

## Generative Engine Optimization (GEO) & Machine Ingestion
- **Answer.AI Standard**:
  - `/llms.txt`: Plain markdown manifest summarizing the channel, manifesto, and companion guide index.
  - `/llms-full.txt`: Concatenated full-text corpus of companion guides for ingestion by Perplexity, ChatGPT Search, Claude, and local LLMs.
  - When modifying or adding guides under `src/content/guides/`, ALWAYS verify both `llms.txt` and `llms-full.txt` remain synchronized.
- **Structured Schema (JSON-LD)**:
  - Every guide must render `schema.org/TechArticle` with hardware specifications and reproduction steps.
  - Automated RSS 2.0 at `/rss.xml` and sitemaps at `/sitemap-index.xml`.

---

## Mandatory Pre-Flight Verification Gate
- ZERO blind commits or deployments.
- **Ponytail Shortcut Standard**: When taking an intentional architectural shortcut, leaving an MVP stub, or deferring work, the agent MUST write `// shortcut: <limit>, <upgrade>`. Never leave bare `TODO:` or `FIXME:` comments.
- Before committing UI changes, ALWAYS run `powerpack preflight`.
  - Step 1 (Code Hygiene & Composition): Enforces 8pt grid, tap targets, no simulated window chrome mockups, and no card monotony.
  - Step 2 (Ponytail Debt & Diff): Audits shortcuts, detects untagged debt (TODO/FIXME), and checks net line churn.
  - Step 3 (Headless DOM Telemetry & Visual Review): Verifies rendered geometry against `dist/index.html` on Desktop (1440x900) and Mobile (390x844), automatically capturing `/tmp/preflight_rendered.png`. Agent MUST inspect the snapshot via `read_file` to visually verify composition before committing.
- ALWAYS verify clean build via `npm run build` before pushing.
