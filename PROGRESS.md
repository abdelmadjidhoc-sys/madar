# Progress

## 2026-09-22 — Initial build

Built the bilingual (Arabic/English) one-page site from scratch: plain HTML/CSS/vanilla JS,
no build step, no framework. `index.html` + `css/styles.css` + `js/content.js` (all copy,
per language) + `js/main.js` (language/RTL toggle, mobile nav, scroll reveal).

**Sections:** sticky header w/ language toggle, Hero, About, Activities (4 cards), Podcast,
Contact (social links + embedded Google Form), Footer.

**Brand system applied:** the six pinned colors as CSS custom properties (`--color-teal`,
`--color-maroon`, `--color-amber`, `--color-sand`, `--color-cream`, `--color-ink`), IBM Plex
Sans Arabic (Arabic) paired with IBM Plex Sans (Latin) from Google Fonts, loaded via `<link>`.
`--font-display` is a single variable so swapping in Baloo Bhaijaan 2 / Space Grotesk later
(if approved) is a one-line change.

**RTL/i18n approach:** CSS logical properties throughout (`margin-inline`, `text-align:
start/end`, `inset-inline-*`) so the layout mirrors automatically from `<html dir>` — no
duplicated `[dir="rtl"]` ruleset. Arabic is the default language (confirmed copy, primary
market); English is a first-pass draft translation, flagged inline in `content.js`.

**Visual direction:** "orbit" motif (thin arcing rings + nodes) as the page's signature
motion element, referencing Madar's name (مدار = orbit/circuit). Petrol Teal carries the
dominant field (header, hero, podcast, footer); Cream/Sand alternate for content sections;
Amber is reserved for CTAs and one accent line; Maroon is a single deliberate highlight (the
Volunteering activity icon), not spread across the page.

**Ran the design-quality detector** (`impeccable detect`) and fixed: low-contrast amber text
on teal (added a lightened `--color-amber-on-teal` tint, ~4.6:1), the "icon tile stacked
above heading" template on activity cards (later removed the tiles entirely per feedback —
see below), a side-border accent on the About disclaimer (replaced with italic type instead),
zero-inset padding on the Google Form embed (now framed in a visible sand mat), and a
`max-height` transition on the mobile nav (replaced with `grid-template-rows`, which doesn't
trigger layout thrash). Cream backgrounds and the About-section grid inset were reviewed and
kept — cream is an explicitly pinned brand color, and the padding flag was a false positive
(verified visually; the nested `.container` already insets the content).

## 2026-09-22 — Real assets and live feedback round

- **Connected the project to git**, remote `github.com/abdelmadjidhoc-sys/madar.git` (was
  empty; not yet pushed — pending your go-ahead).
- **Wired in the real logo** (`assets/images/logo-on-dark.svg` / `logo-on-light.svg`, from the
  two Artboard files you added) in the header, hero, and footer, replacing the placeholder
  orbit mark. Cropped a favicon (`assets/images/favicon.svg`) directly from the logo's icon
  mark (the radiating-arc glyph) rather than shrinking the full wordmark.
- **Used the two wallpapers you added** (`hero-bg.png`, `pattern-light.png`): the teal one is
  now the real hero background (replacing the CSS-only placeholder); the light one is a faint
  texture behind the Contact section. Both mirror between languages so the dense dot-pattern
  side always sits opposite the reading text, never under it.
- **Extracted real social links** from linktr.ee/madar.qa: Instagram, TikTok, YouTube, and
  Threads now point to Madar's actual profiles (`js/content.js` → `MADAR_LINKS`); the
  Instagram/TikTok/YouTube/Threads icons and the Google Form embed were also confirmed live
  (the Form's real ID was resolved from the `forms.gle` short link).
- **Added the real featured podcast episode** you sent ("من لاعب كرة إلى أفضل مخترع - محمد
  القصابي"): the thumbnail is a genuine YouTube frame (`maxresdefault.jpg`, true 16:9 — the
  smaller `hqdefault.jpg` had baked-in black letterboxing, which is why it looked cropped at
  first), and the play button swaps in a real embedded YouTube iframe on click (lite-embed
  pattern, so the section stays fast until someone actually presses play). Fixed a bug where
  the swapped-in iframe lost its sizing and rendered small.
- **Added `bootstrap-icons` as a dev-time icon source** (`npm i bootstrap-icons`) and replaced
  every hand-drawn icon (4 activity icons, social icons, play button, CTA arrow) with the
  real Bootstrap Icons SVGs, inlined directly into `index.html` — no runtime dependency,
  `node_modules` is gitignored and not shipped.
- **Removed the background tile from the 4 activity icons** per feedback — icons now sit
  directly inline next to their heading in brand color (teal, maroon for Volunteering), no
  container box.
- **Fixed the hero text alignment**: it was drifting out of alignment with the header logo
  and the About heading below it, because the hero's own width cap (46rem) was being
  re-centered by the shared `.container` class's auto-margins instead of sitting flush. The
  cap now lives on the individual text elements instead, so the whole column reads as one
  aligned edge top to bottom.
- **Fixed the language-toggle button's font**: it always shows the *other* language's name
  (e.g. "English" while the page itself is Arabic), so it needs its own script's font
  regardless of the page's overall language — it was inheriting the wrong one.
- Confirmed `--font-body-en` (IBM Plex Sans) is already the live English font site-wide, per
  your note.

### Still open / for you to confirm
- English copy throughout is still a draft translation pending your sign-off (marked in
  `js/content.js`).
- Whether the shared Google Form should handle all contact, or a dedicated one is needed
  later.
- Headline font: IBM Plex Sans Arabic only (current) vs. adding Baloo Bhaijaan 2 / Space
  Grotesk.
- Domain name — not registered yet, so `og:url` isn't set.
- Repo is connected to GitHub but nothing has been pushed yet.
