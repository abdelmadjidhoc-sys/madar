"use client";

import { useLang } from "./LanguageProvider";
import SocialList from "./SocialList";

/** `onHome` keeps the logo as an in-page #top link and shows the IP notice (home page only, as before). */
export default function SiteFooter({ onHome = false }) {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="logo logo--footer" href={onHome ? "#top" : "/"} aria-label="Madar / مدار">
          <img className="logo-img" src="/assets/images/logo-on-dark.svg" alt={t("brand.name")} />
        </a>

        <SocialList className="social-list--footer" />

        <div className="footer-fine-print">
          <p className="footer-disclaimer">{t("footer.disclaimer")}</p>
          {onHome && (
            <>
              <h3 className="footer-ip-heading">{t("footer.ipHeading")}</h3>
              <p className="footer-ip-text">{t("footer.ipText")}</p>
            </>
          )}
          <p className="footer-copyright">{t("footer.copyright")}</p>
          <p className="footer-version">v0.1</p>
        </div>
      </div>
    </footer>
  );
}
