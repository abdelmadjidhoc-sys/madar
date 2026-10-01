"use client";

import { useLang } from "./LanguageProvider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import HeroVideo from "./HeroVideo";
import SocialList from "./SocialList";
import { ArrowIcon } from "./icons";

/**
 * Shared shell for the standalone form pages (/contact, /join): site
 * header, back link, heading + intro paragraphs, the form, footer.
 * `pageKey` is the content namespace (sessionPage, joinPage).
 * `standalone` drops the header, back link, and footer — just the form plus
 * Madar's social icons, for a page shared on its own before the main site is public.
 * `videoSrc` shows a silent looping video above the heading.
 */
export default function FormPage({ pageKey, backHref = "/", introKeys = ["intro"], standalone = false, videoSrc, children }) {
  const { t } = useLang();

  return (
    <>
      {!standalone && <SiteHeader />}

      <main id="main">
        <section className="session-page">
          <div className="container container--narrow">
            {!standalone && (
              <a className="session-back-link" href={backHref}>
                <ArrowIcon className="icon icon-arrow icon-arrow--back" />
                <span>{t(pageKey + ".backLink")}</span>
              </a>
            )}

            {videoSrc && <HeroVideo src={videoSrc} />}

            <h1>{t(pageKey + ".heading")}</h1>
            {introKeys.map((key, i) => (
              <p
                key={key}
                className={"session-intro" + (i < introKeys.length - 1 ? " session-intro--tight" : "")}
              >
                {t(pageKey + "." + key)}
              </p>
            ))}

            {children}

            {standalone && <SocialList className="social-list--light" />}
          </div>
        </section>
      </main>

      {!standalone && <SiteFooter />}
    </>
  );
}
