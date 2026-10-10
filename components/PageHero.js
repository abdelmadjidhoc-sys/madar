"use client";

import { useLang } from "./LanguageProvider";

/** Teal title band at the top of the inner pages (/about, /news). */
export default function PageHero({ pageKey }) {
  const { t } = useLang();
  const eyebrow = t(pageKey + ".eyebrow");
  const intro = t(pageKey + ".intro");

  return (
    <section className="page-hero" id="top">
      <div className="container">
        {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
        <h1>{t(pageKey + ".heading")}</h1>
        {intro && <p className="page-hero-intro">{intro}</p>}
      </div>
    </section>
  );
}
