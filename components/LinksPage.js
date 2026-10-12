"use client";

import { MADAR_LINKS } from "@/lib/content";
import { useLang } from "./LanguageProvider";
import SocialList from "./SocialList";
import HeroVideo from "./HeroVideo";
import { InstagramIcon, MailIcon, ThreadsIcon, TikTokIcon, YouTubeIcon } from "./icons";

const BRAND_LINKS = [
  ["instagram", "linksPage.instagramLabel", InstagramIcon],
  ["tiktok", "linksPage.tiktokLabel", TikTokIcon],
  ["youtube", "linksPage.youtubeLabel", YouTubeIcon],
  ["threads", "linksPage.threadsLabel", ThreadsIcon],
];

/**
 * A link-in-bio page (same idea as the linktr.ee/madar.qa page this
 * mirrors) rather than a regular site page — no site header, nav, or
 * footer. The featured card shows the same video banner as /join.
 */
export default function LinksPage() {
  const { t } = useLang();

  return (
    <main id="main" className="links-page">
      <div className="container container--links">

        <div className="links-profile">
          <span className="links-avatar">
            <img src="/assets/images/logo-on-dark.svg" alt={t("brand.name")} />
          </span>
          <h1>{t("linksPage.name")}</h1>
          <p className="links-bio">{t("linksPage.bio")}</p>

          <SocialList className="links-social" />
        </div>

        <div className="links-list">
          <div className="link-card-featured">
            <HeroVideo src="/assets/videos/hero-madar.mp4" />
          </div>

          <a className="link-button" href={MADAR_LINKS.aflakChannel} target="_blank" rel="noopener">
            <span className="link-button-icon link-button-icon--photo">
              <img src="/assets/images/aflak-logo.jpg" alt="" />
            </span>
            <span>{t("linksPage.aflakLabel")}</span>
          </a>

          <a className="link-button" href={MADAR_LINKS.instagram} target="_blank" rel="noopener">
            <span className="link-button-icon">
              <img src="/assets/images/logo-on-dark.svg" alt="" />
            </span>
            <span>{t("linksPage.channelLabel")}</span>
          </a>

          <a className="link-button" href="/contact">
            <span className="link-button-icon">
              <img src="/assets/images/logo-on-dark.svg" alt="" />
            </span>
            <span>{t("linksPage.sessionLabel")}</span>
          </a>

          {BRAND_LINKS.map(([key, labelKey, Icon]) => (
            <a className="link-button" href={MADAR_LINKS[key]} target="_blank" rel="noopener" key={key}>
              <span className="link-button-icon link-button-icon--brand">
                <Icon />
              </span>
              <span>{t(labelKey)}</span>
            </a>
          ))}

          <a className="link-button" href={"mailto:" + MADAR_LINKS.email}>
            <span className="link-button-icon link-button-icon--brand">
              <MailIcon />
            </span>
            <span className="link-button-text">
              <span>{t("linksPage.emailLabel")}</span>
              <small>{MADAR_LINKS.email}</small>
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
