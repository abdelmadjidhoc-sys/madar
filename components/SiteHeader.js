"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";

/**
 * Sticky header with nav, language toggle, and mobile menu.
 * `onHome` makes nav links plain in-page anchors (#about); on other pages
 * they point back to the home page sections (/#about).
 */
export default function SiteHeader({ onHome = false }) {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const toggleShadow = () => setScrolled(window.scrollY > 8);
    toggleShadow();
    window.addEventListener("scroll", toggleShadow, { passive: true });
    return () => window.removeEventListener("scroll", toggleShadow);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const base = onHome ? "" : "/";
  const links = [
    ["about", "nav.about"],
    ["activities", "nav.activities"],
    ["podcast", "nav.podcast"],
    ["contact", "nav.contact"],
  ];

  const navList = (onClick) => (
    <ul>
      {links.map(([id, key]) => (
        <li key={id}>
          <a href={base + "#" + id} onClick={onClick}>
            {t(key)}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")} id="siteHeader">
      <div className="container header-inner">
        <a className="logo logo--header" href={onHome ? "#top" : "/"} aria-label="Madar / مدار">
          <img className="logo-img" src="/assets/images/logo-on-dark.svg" alt={t("brand.name")} />
        </a>

        <nav className="site-nav" aria-label="التصفح الرئيسي">
          {navList()}
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" type="button" onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
            <span>{t("nav.langToggle")}</span>
          </button>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobileNav"
            aria-label={t("nav.menuOpen")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </button>
        </div>
      </div>

      <nav className={"mobile-nav" + (menuOpen ? " is-open" : "")} id="mobileNav" aria-label="التصفح للجوال">
        <div className="mobile-nav-inner">{navList(() => setMenuOpen(false))}</div>
      </nav>
    </header>
  );
}
