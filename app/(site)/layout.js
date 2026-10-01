import "../styles.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import SkipLink from "@/components/SkipLink";

export const metadata = {
  title: "مدار | حيث تدور الفرص",
  description: "مدار منصة إعلامية تجمع الفرص التعليمية والتطويرية والتطوعية لشباب قطر في مكان واحد.",
  // Cropped from the real logo's icon mark (public/assets/images/logo-on-dark.svg)
  icons: { icon: { url: "/assets/images/favicon.svg", type: "image/svg+xml" } },
};

export const viewport = {
  themeColor: "#0E5C68",
};

export default function SiteLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/*
          Body/UI face: IBM Plex Sans Arabic (confirmed) paired with IBM Plex Sans for Latin
          text, since both share the same metrics/x-height by design and read as one family.
          TODO(type): headline face is still undecided — see --font-display in app/styles.css
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject attributes into <body> */}
      <body suppressHydrationWarning>
        <LanguageProvider>
          <SkipLink />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
