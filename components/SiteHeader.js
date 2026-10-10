"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageProvider";

const LINKS = [
  ["/", "nav.home"],
  ["/about", "nav.about"],
  ["/news", "nav.news"],
  ["/contact", "nav.contact"],
];

/**
 * Sticky header with nav, language toggle, and mobile menu.
 * Nav links go to the four site pages; the current one gets aria-current.
 * `onHome` makes the logo an in-page #top link instead of a link to /.
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

  const pathname = usePathname();

  const navList = (onClick) => (
    <ul>
      {LINKS.map(([href, key]) => (
        <li key={href}>
          <a href={href} aria-current={pathname === href ? "page" : undefined} onClick={onClick}>
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
