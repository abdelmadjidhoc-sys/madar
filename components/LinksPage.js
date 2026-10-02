"use client";

import { MADAR_LINKS, MADAR_PODCAST } from "@/lib/content";
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
 * footer. The featured join card uses the same video banner as /join.
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
          {/* Featured link: our own join-the-team page, not an external URL. */}
          <a className="link-card-featured" href="/join">
            <HeroVideo src="/assets/videos/hero-madar.mp4" />
            <span>{t("linksPage.featuredLabel")}</span>
          </a>

          <a className="link-button" href="/contact">
            <span className="link-button-icon">
              <img src="/assets/images/logo-on-dark.svg" alt="" />
            </span>
            <span>{t("linksPage.sessionLabel")}</span>
          </a>

          <a className="link-button" href={MADAR_PODCAST.channelUrl} target="_blank" rel="noopener">
            <span className="link-button-icon">
              <img src="/assets/images/logo-on-dark.svg" alt="" />
            </span>
            <span>{t("linksPage.channelLabel")}</span>
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
