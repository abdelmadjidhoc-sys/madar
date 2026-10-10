"use client";

import { useLang } from "./LanguageProvider";

// Same order as news.items in lib/content.js (newest first). Covers are 4:5;
// `url` (optional) links the card to the original Instagram post.
const NEWS = [
  { image: "/assets/images/news/news-alsadd-partnership.jpg", url: "https://www.instagram.com/p/DeSHRq1u-UV/" },
  { image: "/assets/images/news/news-alkhor-partnership.jpg", url: "https://www.instagram.com/p/DeSEfggO1YL/" },
  { image: "/assets/images/news/news-career-guidance-program.jpg", url: "https://www.instagram.com/p/DdzLHliO-Yo/" },
  { image: "/assets/images/news/news-1-beach-cleanup.jpg", url: "https://www.instagram.com/reel/DdiyRoOSCi_/" },
  { image: "/assets/images/news/news-2-dialogue-session.jpg", url: "https://www.instagram.com/reel/DdpKCM8OY-6/" },
  { image: "/assets/images/news/news-3-bilarabi-forum.jpg", url: "https://www.instagram.com/reel/Ddk5vyNsMya/" },
];

function NewsCard({ item, image, url, className = "news-card" }) {
  const content = (
    <>
      <img className="news-thumb" src={image} alt={item.title} />
      <div className="news-card-body">
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
      </div>
    </>
  );
  return (
    <article className={className}>
      {url ? (
        <a className="news-card-link" href={url} target="_blank" rel="noopener">
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}

/**
 * News cards, newest first. `limit` shows only the newest N items.
 * `featured` (home page) shows the newest one large at the start side and
 * the rest as a column of compact cards beside it.
 */
export default function NewsGrid({ limit, featured = false }) {
  const { t } = useLang();
  const cards = t("news.items")
    .slice(0, limit)
    .map((item, i) => ({ item, ...NEWS[i] }));

  if (featured) {
    const [first, ...rest] = cards;
    return (
      <div className="news-featured">
        <NewsCard {...first} className="news-card news-card--lead" />
        <div className="news-featured-list">
          {rest.map((card) => (
            <NewsCard {...card} className="news-card news-card--compact" key={card.image} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="news-grid">
      {cards.map((card) => (
        <NewsCard {...card} key={card.image} />
      ))}
    </div>
  );
}
