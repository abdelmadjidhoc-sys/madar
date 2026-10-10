"use client";

import { useState } from "react";
import { MADAR_PODCAST } from "@/lib/content";
import { useLang } from "../LanguageProvider";
import RevealSection from "../RevealSection";
import { PlayIcon, YouTubeIcon } from "../icons";

const thumb = (videoId, size) => "https://i.ytimg.com/vi/" + videoId + "/" + size + ".jpg";

/**
 * Lite YouTube embed: shows the real thumbnail; the iframe (with autoplay)
 * is only mounted on click, so the section stays fast to load.
 * The newest episode is featured; the others are listed below and can be
 * swapped into the player.
 */
export default function Podcast({ headingKey = "podcast.heading" }) {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { episodes, channelUrl } = MADAR_PODCAST;
  const titles = t("podcast.episodes");
  const videoId = episodes[current];

  const select = (i) => {
    setCurrent(i);
    setPlaying(true);
  };

  return (
    <RevealSection className="podcast" id="podcast">
      <div className="container">
        <div className="podcast-head">
          <h2>{t(headingKey)}</h2>
          <p className="podcast-intro">{t("podcast.intro")}</p>
        </div>

        <div className="podcast-inner">
          <div className="podcast-thumb">
            {playing ? (
              <iframe
                className="podcast-thumb-placeholder"
                src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
                title={titles[current].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                className="podcast-thumb-placeholder"
                type="button"
                style={{ backgroundImage: "url('" + thumb(videoId, "maxresdefault") + "')" }}
                aria-label={t("podcast.playLabel") + ": " + titles[current].title}
                onClick={() => setPlaying(true)}
              >
                <span className="play-button" aria-hidden="true">
                  <PlayIcon />
                </span>
              </button>
            )}
          </div>

          <div className="podcast-copy">
            <h3 className="podcast-episode-title">{titles[current].title}</h3>

            <a className="btn btn--outline" href={channelUrl} target="_blank" rel="noopener">
              <YouTubeIcon className="icon" />
              <span>{t("podcast.cta")}</span>
            </a>

            {episodes.length > 1 && (
              <>
                <h4 className="podcast-more-heading">{t("podcast.moreEpisodes")}</h4>
                <ul className="podcast-episode-list">
                  {episodes.map(
                    (id, i) =>
                      i !== current && (
                        <li key={id}>
                          <button type="button" className="podcast-episode" onClick={() => select(i)}>
                            <img src={thumb(id, "mqdefault")} alt={titles[i].thumbAlt} />
                            <span>{titles[i].title}</span>
                          </button>
                        </li>
                      )
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
