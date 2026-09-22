# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML, CSS, and vanilla JS. No framework or build step — explicitly requested so a developer can pick this up easily later, and the page is small enough not to need one.

## Users

Qatar-based youth aged 15–39, segmented by interest and life stage (student, early-career, volunteer-minded, etc.). They come to Madar to find educational, developmental, and volunteer opportunities without having to piece information together from scattered sources.

## Product Purpose

Madar (مدار) is a youth media platform that gathers educational, developmental, and volunteer opportunities for youth in Qatar into one place, and gives them a clear, direct path to act on what they find. Success means a visitor can understand an opportunity and know exactly how to get involved, quickly.

## Positioning

Madar's mechanism is aggregation plus clarity: it collects opportunities other organizations already run, translates them into understandable information, names a visible source, and gives a direct path in — rather than producing original programs itself. It supports the direction of Qatar National Vision 2030 but is explicitly **not** an official affiliate or partner of QNV2030 or its entities; nothing on the site may imply otherwise.

## Operating Context

Single bilingual (Arabic/English) landing page, switchable without reload, with full RTL mirroring for Arabic (nav order, icon direction, text alignment). Visitors land on mobile most of the time. Content pillars: Events (فعاليات), Education (تعليم), Volunteering (تطوع), Opportunities (فرص). A podcast is a secondary content channel, driving to an external YouTube channel. Contact happens through an existing external Google Form (session/inquiry requests), not a custom form.

## Capabilities and Constraints

- Content strings live in a single JS object/JSON, not hardcoded in HTML, so a non-developer can edit copy later.
- Language/direction toggle (EN/AR) must switch the whole page including layout mirroring.
- Smooth-scroll anchor nav to page sections.
- Basic SEO (title, meta description, Open Graph) in both languages.
- Must render correctly on current Chrome, Safari, Firefox, Edge.
- **Explicitly undecided / open, marked as TODO in code:**
  - Final logo files (light + dark) — placeholder sized ~140–200px wide in header/hero/footer for now.
  - Final English copy — only Arabic copy is confirmed; English is a draft pending approval.
  - Whether the existing Google Form (https://forms.gle/UHVrdyENZ5YkHgwN9) handles all contact, or a separate form is needed.
  - Headline font decision: IBM Plex Sans Arabic only (current default) vs. adding Baloo Bhaijaan 2 (AR headlines) / Space Grotesk (EN text/numbers) — CSS is structured so swapping the headline font is a one-line change.
  - Domain name — not yet registered.
  - Real social URLs (Instagram, TikTok, YouTube, Threads) — not yet supplied; placeholder `#` links with TODO comments until provided.

## Brand Commitments

- Name: Madar (مدار). Tagline (Arabic, confirmed): "مدار .. حيث تدور الفرص".
- Personality: approachable and informed, inspiring without exaggeration, confident without pretension.
- Colors (CSS custom properties): Petrol Teal `#0E5C68` (primary/backgrounds/headings), Qatari Maroon `#7A1E33` (limited accents, achievement/highlight badges), Warm Amber `#E8873A` (CTAs, interactive elements), Sand `#C9BFAE` (secondary/neutral backgrounds only), Cream `#FAF7F2` (general content background), Ink `#1C1A17` (body text).
- Typography: IBM Plex Sans Arabic (Light–Bold) for Arabic body text, confirmed as the safe default for everything including headlines. Draft brand guide proposes Baloo Bhaijaan 2 (AR headlines) and Space Grotesk (EN text/numbers) as a later option — not committed yet.

## Evidence on Hand

- Confirmed Arabic sample copy: tagline "مدار .. حيث تدور الفرص"; headline "فرصتك تبدأ من هنا"; subhead "برامج تطوعية لصناعة الأثر"; body line "مدار منصة تجمع الفرص التعليمية والتطويرية والتطوعية في مكان واحد لشباب قطر".
- Contact mechanism: Google Form at https://forms.gle/UHVrdyENZ5YkHgwN9 (embed with link fallback, no custom form).
- No logo files, no real social URLs, no photography/imagery, and no confirmed English copy yet — future work must not fabricate these as final; use clearly marked placeholders.

## Product Principles

1. Clarity over persuasion — every opportunity should read as understandable information with a visible source, not a sales pitch.
2. Confident, not affiliated — draw on Qatar National Vision 2030's direction and energy without ever implying official partnership.
3. Content stays editable — copy, links, and structure must be easy for a future developer or non-developer to update without touching markup logic.
4. Bilingual is not an afterthought — Arabic RTL is a first-class layout, not a mirrored patch on an English design.

## Accessibility & Inclusion

No product-specific accessibility requirement was stated beyond standard responsive/cross-browser support; follow ordinary WCAG-conscious defaults (semantic HTML, sufficient contrast from the defined palette, keyboard-operable nav and language toggle).
