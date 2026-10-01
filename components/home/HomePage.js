"use client";

import { useLang } from "../LanguageProvider";
import RevealSection from "../RevealSection";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import SocialList from "../SocialList";
import Founders from "./Founders";
import Podcast from "./Podcast";
import StatNumber from "./StatNumber";
import {
  ArrowIcon,
  BookIcon,
  BroadcastIcon,
  BuildingIcon,
  CalendarIcon,
  CameraIcon,
  CompassIcon,
  MicIcon,
} from "../icons";

// Same order as activities.items in lib/content.js
const ACTIVITY_ICONS = [BroadcastIcon, BookIcon, CalendarIcon, MicIcon, CameraIcon, CompassIcon];

const NEWS_IMAGES = [
  "/assets/images/news/news-1-beach-cleanup.jpg",
  "/assets/images/news/news-2-dialogue-session.jpg",
  "/assets/images/news/news-3-bilarabi-forum.jpg",
];

// TODO: real partner logos not supplied yet — these are placeholder slots,
// not real organizations. Replace with <img> logos once provided.
const PARTNER_SLOTS = 6;

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      <SiteHeader onHome />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="hero" id="top">
          <div className="hero-media" aria-hidden="true">
            {/* Brand wallpaper supplied by client. The outer div mirrors per
                language (dense pattern stays opposite the text); the img itself
                carries the slow constant zoom — kept on separate elements since a
                single element can't hold two independent transforms. */}
            <div className="hero-photo-flip">
              <img className="hero-photo" src="/assets/images/hero-bg.png" alt="" />
            </div>
            <div className="hero-overlay"></div>
            <svg className="hero-orbit" viewBox="0 0 640 640" role="presentation">
              <ellipse className="orbit-ring orbit-ring--1" cx="320" cy="320" rx="270" ry="270" />
              <ellipse className="orbit-ring orbit-ring--2" cx="320" cy="320" rx="210" ry="210" />
              <g className="orbit-nodes">
                <circle className="orbit-node" cx="590" cy="320" r="6" />
                <circle className="orbit-node" cx="320" cy="50" r="6" />
                <circle className="orbit-node" cx="50" cy="320" r="6" />
                <circle className="orbit-node" cx="320" cy="590" r="6" />
              </g>
            </svg>
          </div>

          <div className="container hero-inner">
            <div className="logo logo--hero">
              <img className="logo-img" src="/assets/images/logo-on-dark.svg" alt={t("brand.name")} />
            </div>

            <p className="hero-tagline">{t("hero.tagline")}</p>
            <h1 className="hero-headline">{t("hero.headline")}</h1>
            <p className="hero-subhead">{t("hero.subhead")}</p>

            <div className="hero-actions">
              <a className="btn btn--primary" href="#activities">
                <span>{t("hero.cta")}</span>
                <ArrowIcon className="icon icon-arrow" />
              </a>

              <a className="btn btn--outline" href="/contact">
                <span>{t("contact.formHeading")}</span>
                <ArrowIcon className="icon icon-arrow" />
              </a>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <RevealSection className="about" id="about">
          <div className="container about-inner">
            <div className="about-copy">
              <h2>{t("about.heading")}</h2>
              <p className="about-body">{t("about.body")}</p>
              <p className="about-disclaimer">{t("about.disclaimer")}</p>
            </div>
            {/* Qatar National Vision 2030 mark, supplied by client, paired with the
                non-affiliation disclaimer: Madar draws on QNV2030's direction but
                is not an official partner. */}
            <div className="about-figure">
              <img
                className="about-vision-logo"
                src="/assets/images/qnv2030-logo.png"
                alt="Qatar National Vision 2030"
              />
            </div>
          </div>
        </RevealSection>

        {/* ============ STORY ============ */}
        {/* TODO: placeholder body text — real founding story not supplied yet. */}
        <RevealSection className="story" id="story">
          <div className="container container--narrow">
            <h2>{t("story.heading")}</h2>
            <p>{t("story.body")}</p>
          </div>
        </RevealSection>

        {/* ============ ACTIVITIES ============ */}
        <RevealSection className="activities" id="activities">
          <div className="container">
            <h2>{t("activities.heading")}</h2>

            <div className="activity-grid">
              {t("activities.items").map((item, i) => {
                const Icon = ACTIVITY_ICONS[i];
                return (
                  <article className="activity-card" key={i}>
                    <div className="activity-card-head">
                      <span className="activity-icon">
                        <Icon />
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </RevealSection>

        <Founders />

        {/* ============ PARTNERSHIPS ============ */}
        <RevealSection className="partnerships" id="partnerships">
          <div className="container">
            <h2>{t("partnerships.heading")}</h2>
            <div className="partner-grid">
              {Array.from({ length: PARTNER_SLOTS }, (_, i) => (
                <span className="partner-logo" aria-hidden="true" key={i}>
                  <BuildingIcon />
                </span>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* ============ STATS ============ */}
        <RevealSection className="stats" id="stats">
          <div className="container">
            <h2>{t("stats.heading")}</h2>

            <div className="stats-grid">
              {t("stats.items").map((item, i) => (
                <div className="stat-item" key={i}>
                  <StatNumber value={item.value} suffix={item.suffix} />
                  <p className="stat-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <Podcast />

        {/* ============ NEWS ============ */}
        <RevealSection className="news" id="news">
          <div className="container">
            <h2>{t("news.heading")}</h2>

            <div className="news-grid">
              {t("news.items").map((item, i) => (
                <article className="news-card" key={NEWS_IMAGES[i]}>
                  <img className="news-thumb" src={NEWS_IMAGES[i]} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* ============ CONTACT ============ */}
        <RevealSection className="contact" id="contact">
          <div className="container contact-inner">
            <div className="contact-copy">
              <h2>{t("contact.heading")}</h2>
              <p>{t("contact.intro")}</p>

              <h3 className="contact-subheading">{t("contact.socialHeading")}</h3>
              <SocialList />
            </div>

            <div className="contact-form-panel">
              <h3 className="contact-subheading">{t("contact.formHeading")}</h3>
              <p>{t("contact.formIntro")}</p>
              <a className="btn btn--primary" href="/contact">
                <span>{t("contact.formHeading")}</span>
                <ArrowIcon className="icon icon-arrow" />
              </a>
            </div>
          </div>
        </RevealSection>
      </main>

      <SiteFooter onHome />
    </>
  );
}
