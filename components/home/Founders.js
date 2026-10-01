"use client";

import { useEffect, useState } from "react";
import { useLang } from "../LanguageProvider";
import RevealSection from "../RevealSection";

const PHOTOS = [
  "/assets/images/founders/founder-saud.jpg",
  "/assets/images/founders/founder-saleh.jpg",
  "/assets/images/founders/founder-khulood.jpg",
  "/assets/images/founders/founder-zaher.jpg",
];

/**
 * Portrait cards; hover/focus reveals achievements (pure CSS). Hover doesn't
 * fire reliably on touch, so a tap toggles .is-active (one card at a time,
 * closed by a tap outside), reusing the same CSS state.
 */
export default function Founders() {
  const { t } = useLang();
  const [active, setActive] = useState(null);
  const founders = t("founders.items");

  useEffect(() => {
    const closeOnOutside = (event) => {
      if (!event.target.closest(".founder-card")) setActive(null);
    };
    document.addEventListener("click", closeOnOutside);
    return () => document.removeEventListener("click", closeOnOutside);
  }, []);

  return (
    <RevealSection className="founders" id="founders">
      <div className="container">
        <h2>{t("founders.heading")}</h2>

        <div className="founders-grid">
          {founders.map((founder, i) => (
            <article
              key={PHOTOS[i]}
              className={"founder-card" + (active === i ? " is-active" : "")}
              tabIndex={0}
              onClick={() => setActive(active === i ? null : i)}
            >
              <img className="founder-photo" src={PHOTOS[i]} alt={founder.name} />
              <ul className="founder-achievements">
                {founder.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="founder-info">
                <h3>{founder.name}</h3>
                <p>{founder.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
