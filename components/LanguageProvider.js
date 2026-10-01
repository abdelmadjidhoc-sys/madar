"use client";

/**
 * Arabic/English switching. Arabic is the default and what the server
 * renders; a visitor's saved choice (localStorage) is applied on mount.
 * Switching sets <html lang/dir>, so the CSS logical properties in
 * app/styles.css mirror the whole layout automatically.
 */
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { MADAR_CONTENT } from "@/lib/content";

const STORAGE_KEY = "madar-lang";
const DEFAULT_LANG = "ar";

const LanguageContext = createContext(null);

/** Resolves a dot/array-index path like "activities.items.0.title" against an object. */
function getPath(obj, path) {
  return path.split(".").reduce(function (acc, key) {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* private browsing / storage disabled — stay on the default */
    }
    if (saved && MADAR_CONTENT[saved]) setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* language just won't persist */
    }
  }, []);

  const t = useCallback(
    (path) => {
      const value = getPath(MADAR_CONTENT[lang], path);
      if (typeof value === "string" && value.indexOf("{year}") > -1) {
        return value.replace("{year}", new Date().getFullYear());
      }
      return value;
    },
    [lang]
  );

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

/**
 * Keeps document.title in the active language. Renders nothing.
 * Next streams the (Arabic) metadata <title> in after hydration, which can
 * overwrite ours on a fresh load — so re-assert it whenever the title changes.
 */
export function DocumentTitle({ titleKey }) {
  const { t } = useLang();
  const title = t(titleKey);
  useEffect(() => {
    if (!title) return;
    document.title = title;
    const observer = new MutationObserver(() => {
      if (document.title !== title) document.title = title;
    });
    observer.observe(document.head, { subtree: true, childList: true, characterData: true });
    return () => observer.disconnect();
  }, [title]);
  return null;
}
