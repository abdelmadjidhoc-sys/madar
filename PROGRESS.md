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
- Repo is connected to GitHub and has since been pushed (see the 2026-09-27 entries below).

## 2026-09-27 — Local dev server, Activities restructure, Founders section

- **Got the site running locally**: Node.js wasn't installed on this machine, so installed
  it (via winget) and ran the existing `npm run dev` script (`scripts/dev-server.js`), which
  serves the static site plus the `/api/contact` and `/api/admin/*` routes at
  `http://localhost:3000`.
- **Activities section**: background changed from sand to a teal/petrol gradient (matching
  Hero/Podcast/Footer), with cards flipped to cream so they still read as distinct boxes.
  Established a page-wide rhythm of alternating teal and cream section backgrounds — see the
  new bullet under Capabilities and Constraints in `PRODUCT.md`.
  - Added two new activity cards under a "Media" idea: **التغطيات** (Coverage) and
    **البودكاست** (Podcast), each with a 3-sentence description — splitting what was
    initially a single combined "الإعلام" card, per feedback.
  - Reworded the Activities heading from "أربعة مسارات..." (four tracks) to "مسارات
    متعددة..." (multiple tracks) since the card count is no longer four and may change again.
  - Grid moved from a hardcoded 4-column desktop layout to a fixed 3-column layout (2 even
    rows of 3) to fit the new 6-card count.
  - Fixed a contrast bug: card headings (`h3`) had no explicit text color, so they inherited
    the section's light `--color-ink-on-teal` and were nearly invisible against the cream
    card background — now explicitly `--color-ink`.
- **New Founders (المؤسسين) section**, added between Activities and Podcast:
  - Started with 4 placeholder cards (generic avatar icon, `TODO` name/bio) since no real
    founder info was in the project yet.
  - You supplied 8 real photos (4 raw + 4 teal-branded versions) in a top-level `images/`
    folder, plus name/title reference cards. Matched each branded photo to a name by face,
    resized/recompressed them (multi-MB PNGs → ~30KB JPEGs) into
    `assets/images/founders/`, and wired in the real names and official titles:
    السيد/ سعود عبدالعزيز الهيدوس (الرئيس التنفيذي)، الأستاذ/ صالح محمد العبيدلي (رئيس
    الفعاليات والبرامج)، الأستاذة/ خلود فضل البوعينين (رئيس التطوير والابتكار)، السيد/ ظاهر
    ناصر الناصر (رئيس العلاقات والإعلام).
  - Restyled the cards from small circular avatars to full-bleed portrait photo cards (name
    in white, title in amber, positioned at the bottom-start) after you shared a reference
    design; dropped an initial dark gradient scrim behind the text per your feedback, using
    a text-shadow instead so the photo isn't darkened.
  - **Caught and fixed a photo-mapping bug**: when you replaced the images with
    re-numbered versions, the card scripting re-used the old filename-number → founder
    mapping instead of re-matching by face, silently swapping three of the four photos.
    Re-verified each photo against your reference screenshots and corrected the mapping.
  - Added each founder's real achievements (transcribed from your reference cards) as a
    bulleted list in `js/content.js`, and a hover/focus interaction: the photo fades to the
    card's dark teal fill, the name/title stay pinned at the bottom, and the achievement
    bullets fade in above them — keyboard-reachable too (`tabindex` + `:focus-within`, not
    just `:hover`).
- Moved the "ننقل الأخبار التي تهم الشباب..." sentence out of the About heading (where it
  had first been added) and into the About body paragraph, per feedback — the heading is
  back to its original short form in both languages.
- **Added a tap-to-toggle for the Founders hover reveal on touch devices**: hover/`:focus-within`
  don't fire reliably on mobile taps, so `initFounderCards()` in `js/main.js` now toggles an
  `.is-active` class on click (closing any other open card, and closing on an outside tap),
  reusing the same CSS as the hover/focus state.
- **Hero section**: swapped which side gets the dot-pattern wallpaper vs. the orbit-ring
  animation — the dots now sit on the same side as the reading text (both languages), and the
  orbit rings take the empty side (previously the reverse). Also replaced the headline
  "فرصتك تبدأ من هنا" with "المرجع الأول للشباب في دولة قطر" (pulled directly from Madar's
  Linktree bio), and added a second CTA button ("أرسل طلبك", outline style, → `contact.html`)
  next to the existing "استكشف الأنشطة" button — needed a light-on-teal `.btn--outline`
  override (`.hero-actions`/`.podcast` scoped) since the default teal-on-teal outline is
  invisible on a teal section; applied the same fix to the Podcast section's existing button.
- **New Partnerships (الشراكات) section** (between Founders and Stats): a row of placeholder
  circular logo slots (generic building icon, no real partner logos supplied) — explicitly
  not to be confused with the Stats section's "media outlets" count below.
- **New Stats ("مدار بالأرقام") section** (between Partnerships and Podcast): three counters
  that animate from 0 on scroll-into-view (`initStatsCounters()`, `IntersectionObserver` +
  `requestAnimationFrame`, respects `prefers-reduced-motion`). You gave the real numbers: 12
  media coverages, 37K+ views on coverage, 20+ media outlets partnered with.
- **New News (أخبار مدار) section** (between Podcast and Contact): declined to fill it with
  images "from the net" as first asked, since fabricating/downloading arbitrary internet
  images for a live public site risks copyright and misrepresentation — built it with
  placeholder cards instead. You then supplied real screenshots of 3 actual Madar posts (one
  full image, one image containing two side-by-side posts that got split in two); cropped/
  compressed all three into `assets/images/news/` and wired in the real titles: the Al Wakrah
  beach cleanup campaign, the "في أي زمن نعيش؟!" dialogue session, and the second "Bil-Arabi"
  forum at Qatar Foundation.
- **New `links.html` page ("روابطنا")**: mirrors the layout of the external
  linktr.ee/madar.qa page — profile avatar, name, bio, social icon row, a featured link card
  (real destination: `contact.html`, not an external URL), and a stacked list of link buttons
  (channel, Instagram, TikTok, YouTube, Threads, Email). No site header/nav, just a small
  link back to the main site, matching how the real Linktree page stands alone.
- **Footer**: added the "الملكية الفكرية" (Intellectual Property) notice you provided, between
  the existing disclaimer and copyright lines.
- **Enforced the cream/teal section-alternation rule strictly**, per your request — this
  required flipping Partnerships and the on-page Contact section (not `contact.html`, which
  stays cream) from cream to teal. For Contact that meant: lightening the copy text color,
  fading the `pattern-light.png` overlay down (0.6 → 0.12 opacity, it's a light-toned image),
  and fixing the social icons (the default `.social-list a` teal-circle style is invisible on
  a teal section — same bug class as the outline-button one above; switched to a translucent
  cream circle, matching the existing `.social-list--footer` treatment). Documented the full
  rule and section order in `PRODUCT.md`.
- **New Story (قصة بداية مدار) section**, added between About and Activities: a placeholder
  heading + `TODO` body paragraph (no real founding story supplied yet). Kept it cream to
  match About right above it — the second (and last) accepted repeat in the alternation rule
  alongside Contact→Footer, since the two sections read as one continuous narrative before
  Activities resumes the rhythm.
- **`/links` clean URL**: added a rewrite in `vercel.json` (and the matching route in
  `scripts/dev-server.js`) so `links.html` is also reachable at `/links`, same pattern as
  `/adminmadar`. Required restarting the local dev server (Node doesn't hot-reload).
- **Activities cards overhaul**, per your exact content: reordered and rewrote all 6 cards —
  **برامج إعلامية** (new, replaces the dropped **تطوع**/Volunteering card), **تعليم** and
  **فعاليات** (expanded descriptions), **البودكاست** and **التغطيات** (left unchanged, as
  instructed), **فرص** (expanded description). Removed the `nth-child(3)` maroon icon
  override in `css/styles.css`, since it was tied specifically to the now-removed Volunteering
  card's "single highlight" role and would have mis-applied to whatever card ended up 3rd
  after the reorder. Flagged to you that Volunteering is now fully absent from Activities, in
  case that was meant to stay.
- **Hero**: added a second CTA button ("أرسل طلبك", outline style → `contact.html`) next to
  the existing "استكشف الأنشطة" — reused the same light-on-teal `.btn--outline` fix from the
  section-alternation work above.
- You reiterated the cream/teal alternation as a standing rule for every future add/remove of
  a section, not a one-time fix — reworded the `PRODUCT.md` rule to say so explicitly and to
  require re-deriving the whole sequence (not just the one changed spot) each time.
