"use client";

import { useLang } from "./LanguageProvider";

export default function SkipLink() {
  const { t } = useLang();
  return (
    <a className="skip-link" href="#main">
      {t("skipLink")}
    </a>
  );
}
