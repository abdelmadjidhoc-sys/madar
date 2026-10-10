"use client";

import RevealSection from "../RevealSection";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import PageHero from "../PageHero";
import NewsGrid from "../NewsGrid";
import Podcast from "../home/Podcast";

export default function NewsPage() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <PageHero pageKey="newsPage" />

        <RevealSection className="news" id="news">
          <div className="container">
            <NewsGrid />
          </div>
        </RevealSection>

        <Podcast headingKey="newsPage.podcastHeading" />
      </main>

      <SiteFooter />
    </>
  );
}
