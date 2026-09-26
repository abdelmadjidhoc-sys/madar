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

Single bilingual (Arabic/English) landing page, switchable without reload, with full RTL mirroring for Arabic (nav order, icon direction, text alignment). Visitors land on mobile most of the time. Content pillars, shown as cards in the Activities section (as of 2026-09-27, order matters — it's the on-page card order): Media Programs (برامج إعلامية), Education (تعليم), Events (فعاليات), Podcast (البودكاست), Coverage (التغطيات), Opportunities (فرص). Volunteering (تطوع) was dropped from this list on 2026-09-27 (deliberate — confirm with the client before re-adding). Separately from the Podcast card, there is also a dedicated Podcast section further down the page (with the real embedded episode), driving to Madar's external YouTube channel. Page order (main sections, top to bottom): Hero, About, Story, Activities, Founders, Partnerships, Stats, Podcast, News, Contact, Footer.

- A Story (قصة بداية مدار) section, right after About, holds Madar's founding/origin story — currently a TODO placeholder, no real narrative supplied yet.
- A Founders (المؤسسين) section presents the founding team by name, official title, and real photo; hovering/tapping a card fades the photo and reveals that person's achievements.
- A Partnerships (الشراكات) section holds placeholder circular logo slots — no real partner logos supplied yet.
- A Stats ("مدار بالأرقام") section shows three counters that animate from 0 on scroll-into-view: media coverages, views on coverage, and media outlets partnered with (see Evidence on Hand for the current numbers).
- A News (أخبار مدار) section shows real coverage items (title, short excerpt, photo) sourced from Madar's own social posts.
- A standalone `links.html` page ("روابطنا") mirrors the layout of the external linktr.ee/madar.qa page (profile, bio, social icons, a featured link card to the session-request form, and a stacked list of link buttons) — no site header/nav, just a small link back to the main site. Reachable at the clean URL `/links` (rewrite in `vercel.json`, mirrored in `scripts/dev-server.js`), same pattern as `/adminmadar`.

Contact happens through an existing external Google Form (session/inquiry requests) or the native form on `contact.html`, not a custom embedded form.

## Capabilities and Constraints

- Content strings live in a single JS object/JSON, not hardcoded in HTML, so a non-developer can edit copy later.
- Language/direction toggle (EN/AR) must switch the whole page including layout mirroring.
- Smooth-scroll anchor nav to page sections.
- Basic SEO (title, meta description, Open Graph) in both languages.
- Must render correctly on current Chrome, Safari, Firefox, Edge.
- **Rule, confirmed by the client and must be followed on every future change: section backgrounds strictly alternate cream/teal down the page.** Current order: Hero = teal; About = cream; Story = cream; Activities = teal; Founders = cream; Partnerships = teal; Stats = cream; Podcast = teal; News = cream; Contact = teal; Footer = teal. There are exactly two accepted same-color repeats, both deliberate: About→Story (one continuous "who we are / how we started" narrative) and Contact→Footer (Footer bookends the page with Hero rather than continuing the alternation). **Whenever a section is added or removed, re-derive the whole sequence** rather than only fixing the one spot that looks wrong — check every section above and below the change, since one insertion/removal shifts which sections are adjacent. Prefer placing a new section next to an existing same-color repeat (extending one of the two exceptions) over creating a third one, and never leave more than the two exceptions in place at once.
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

- Confirmed Arabic sample copy: tagline "مدار .. حيث تدور الفرص"; hero headline "المرجع الأول للشباب في دولة قطر" (pulled from Madar's own Linktree bio); subhead "برامج تطوعية لصناعة الأثر"; body line "مدار منصة تجمع الفرص التعليمية والتطويرية والتطوعية في مكان واحد لشباب قطر".
- Contact mechanism: Google Form at https://forms.gle/UHVrdyENZ5YkHgwN9 (embed with link fallback, no custom form), plus the native form on `contact.html`. Direct email: qamadar@gmail.com.
- Confirmed founding team, with real photos and a bulleted list of achievements each
  (revealed on hover/focus, over the photo), for the Founders (المؤسسين) section:
  - السيد/ سعود عبدالعزيز الهيدوس — الرئيس التنفيذي
  - الأستاذ/ صالح محمد العبيدلي — رئيس الفعاليات والبرامج
  - الأستاذة/ خلود فضل البوعينين — رئيس التطوير والابتكار
  - السيد/ ظاهر ناصر الناصر — رئيس العلاقات والإعلام
- Confirmed stats for the Stats section (as of 2026-09-27): 12 media coverages, 37K+ views on coverage, 20+ media outlets partnered with. Re-confirm before reusing if this date is old.
- Confirmed real news items for the News (أخبار مدار) section, sourced from Madar's own social posts: an Al Wakrah beach cleanup campaign (Al Wakrah Club Youth Apparatus), an interactive dialogue session ("في أي زمن نعيش؟!"), and the second "Bil-Arabi" forum at Qatar Foundation.
- Confirmed intellectual-property notice text for the footer (بالعربية والإنجليزية DRAFT), asserting rights are licensed by the relevant authorities in Qatar and prohibiting reuse without permission.
- No logo files, no real social URLs, no confirmed English copy yet (other than the confirmed items above) — future work must not fabricate these as final; use clearly marked placeholders. The Partnerships (الشراكات) section's logo circles are still placeholders — do not invent partner names or logos.

## Product Principles

1. Clarity over persuasion — every opportunity should read as understandable information with a visible source, not a sales pitch.
2. Confident, not affiliated — draw on Qatar National Vision 2030's direction and energy without ever implying official partnership.
3. Content stays editable — copy, links, and structure must be easy for a future developer or non-developer to update without touching markup logic.
4. Bilingual is not an afterthought — Arabic RTL is a first-class layout, not a mirrored patch on an English design.

## Accessibility & Inclusion

No product-specific accessibility requirement was stated beyond standard responsive/cross-browser support; follow ordinary WCAG-conscious defaults (semantic HTML, sufficient contrast from the defined palette, keyboard-operable nav and language toggle).
