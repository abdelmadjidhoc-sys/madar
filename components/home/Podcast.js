"use client";

import { useState } from "react";
import { MADAR_PODCAST } from "@/lib/content";
import { useLang } from "../LanguageProvider";
import RevealSection from "../RevealSection";
import { PlayIcon, YouTubeIcon } from "../icons";

/**
 * Lite YouTube embed: shows the real thumbnail; the iframe (with autoplay)
 * is only mounted on click, so the section stays fast to load.
 */
export default function Podcast() {
  const { t } = useLang();
  const [playing, setPlaying] = useState(false);
  const { videoId, channelUrl } = MADAR_PODCAST;

  return (
    <RevealSection className="podcast" id="podcast">
      <div className="container podcast-inner">
        <div className="podcast-thumb">
          {playing ? (
            <iframe
              className="podcast-thumb-placeholder"
              src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
              title="Madar podcast episode"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              className="podcast-thumb-placeholder"
              type="button"
              style={{ backgroundImage: "url('https://i.ytimg.com/vi/" + videoId + "/maxresdefault.jpg')" }}
              aria-label={t("podcast.playLabel")}
              onClick={() => setPlaying(true)}
            >
              <span className="play-button" aria-hidden="true">
                <PlayIcon />
              </span>
            </button>
          )}
        </div>

        <div className="podcast-copy">
          <h2>{t("podcast.heading")}</h2>
          <p className="podcast-intro">{t("podcast.intro")}</p>

          <h3 className="podcast-episode-title">{t("podcast.episodeTitle")}</h3>

          <a className="btn btn--outline" href={channelUrl} target="_blank" rel="noopener">
            <YouTubeIcon className="icon" />
            <span>{t("podcast.cta")}</span>
          </a>
        </div>
      </div>
    </RevealSection>
  );
}
