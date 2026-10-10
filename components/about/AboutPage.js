"use client";

import { useLang } from "../LanguageProvider";
import RevealSection from "../RevealSection";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import PageHero from "../PageHero";
import Founders from "../home/Founders";
import {
  BookIcon,
  BuildingIcon,
  CameraIcon,
  ChatDotsIcon,
  CompassIcon,
  EyeIcon,
  FlagIcon,
  LightbulbIcon,
  MegaphoneIcon,
  MicIcon,
  PeopleIcon,
  PlayBtnIcon,
} from "../icons";

// Same order as aboutPage.activities.items in lib/content.js
const ACTIVITY_ICONS = [
  MegaphoneIcon,
  MicIcon,
  CameraIcon,
  ChatDotsIcon,
  PlayBtnIcon,
  BookIcon,
  CompassIcon,
  LightbulbIcon,
  PeopleIcon,
];

// TODO: real partner logos not supplied yet — these are placeholder slots,
// not real organizations. Replace with <img> logos once provided.
const PARTNER_SLOTS = 6;

/** A titled card holding either a bullet list (`items`) or a paragraph (`body`). */
function GroupCard({ group }) {
  return (
    <article className="info-card">
      <h3>{group.title}</h3>
      {group.items ? (
        <ul className="bullet-list">
          {group.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{group.body}</p>
      )}
    </article>
  );
}

export default function AboutPage() {
  const { t } = useLang();
  const p = (key) => t("aboutPage." + key);

  return (
    <>
      <SiteHeader />

      <main id="main">
        <PageHero pageKey="aboutPage" />

        {/* ============ DEFINITION + AUDIENCE ============ */}
        <RevealSection className="about" id="definition">
          <div className="container about-inner">
            <div className="about-copy">
              <h2>{p("definition.heading")}</h2>
              {p("definition.paragraphs").map((text) => (
                <p className="about-body" key={text}>
                  {text}
                </p>
              ))}

              <div className="audience-callout">
                <span className="audience-range" dir="ltr">
                  {p("audience.range")}
                </span>
                <div>
                  <h3>{p("audience.heading")}</h3>
                  <p>{p("audience.body")}</p>
                </div>
              </div>
            </div>
            <div className="about-figure">
              <img className="about-vision-logo" src="/assets/images/qnv2030-logo.png" alt="Qatar National Vision 2030" />
            </div>
          </div>
        </RevealSection>

        {/* ============ VISION + MISSION ============ */}
        <RevealSection className="band band--teal" id="vision">
          <div className="container statement-grid">
            {[
              ["vision", EyeIcon],
              ["mission", FlagIcon],
            ].map(([key, Icon]) => (
              <article className="statement" key={key}>
                <span className="statement-icon">
                  <Icon />
                </span>
                <h2>{p(key + ".heading")}</h2>
                <p>{p(key + ".body")}</p>
              </article>
            ))}
          </div>
        </RevealSection>

        {/* ============ THE NAME ============ */}
        <RevealSection className="band band--cream" id="name">
          <div className="container text-columns">
            {["meaning", "whyName"].map((key) => (
              <div key={key}>
                <h2>{p(key + ".heading")}</h2>
                {p(key + ".paragraphs").map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            ))}
          </div>
        </RevealSection>

        {/* ============ IDENTITY + IP ============ */}
        <RevealSection className="band band--sand" id="identity">
          <div className="container identity-inner">
            <div>
              <h2>{p("identity.heading")}</h2>
              <p className="identity-tagline">{p("identity.tagline")}</p>
            </div>
            <div className="identity-groups">
              {p("identity.groups").map((group) => (
                <GroupCard group={group} key={group.title} />
              ))}
            </div>
          </div>
        </RevealSection>

        {/* ============ PRINCIPLES ============ */}
        <RevealSection className="band band--teal" id="principles">
          <div className="container">
            <h2>{p("principles.heading")}</h2>
            <ul className="principle-list">
              {p("principles.items").map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* ============ GOALS ============ */}
        <RevealSection className="band band--cream" id="goals">
          <div className="container">
            <h2>{p("goals.heading")}</h2>
            <ol className="goal-list">
              {p("goals.items").map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </RevealSection>

        {/* ============ VALUE ADDED ============ */}
        <RevealSection className="band band--teal" id="value">
          <div className="container">
            <h2>{p("value.heading")}</h2>
            <div className="group-grid">
              {p("value.groups").map((group) => (
                <GroupCard group={group} key={group.title} />
              ))}
            </div>
          </div>
        </RevealSection>

        {/* ============ ACTIVITIES ============ */}
        <RevealSection className="band band--cream" id="platform-activities">
          <div className="container">
            <h2>{p("activities.heading")}</h2>
            <p className="section-intro">{p("activities.intro")}</p>

            <div className="activity-grid">
              {p("activities.items").map((item, i) => {
                const Icon = ACTIVITY_ICONS[i];
                return (
                  <article className="activity-card activity-card--raised" key={item.title}>
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

            <p className="section-outro">{p("activities.outro")}</p>
          </div>
        </RevealSection>

        {/* ============ IMPACT ============ */}
        <RevealSection className="band band--teal" id="impact">
          <div className="container">
            <h2>{p("impact.heading")}</h2>
            <div className="group-grid">
              {p("impact.groups").map((group) => (
                <GroupCard group={group} key={group.title} />
              ))}
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

        {/* ============ STORY ============ */}
        <RevealSection className="story" id="story">
          <div className="container container--narrow">
            <h2>{t("story.heading")}</h2>
            {t("story.paragraphs").map((text) => (
              <p key={text}>{text}</p>
            ))}
            <p className="story-signoff">{t("story.signoff")}</p>
          </div>
        </RevealSection>
      </main>

      <SiteFooter />
    </>
  );
}
