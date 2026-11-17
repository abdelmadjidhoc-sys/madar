import "../admin.css";
import "../team.css";
import { LanguageProvider } from "@/components/LanguageProvider";

// A separate root layout so the internal team backend never loads the public
// site's stylesheet (and vice versa). The backend is Arabic only.
export const metadata = {
  title: "لوحة التحكم | مدار",
  robots: { index: false, follow: false },
  icons: { icon: { url: "/assets/images/favicon.svg", type: "image/svg+xml" } },
};

export default function AdminLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject attributes into <body> */}
      <body suppressHydrationWarning>
        <LanguageProvider forcedLang="ar">{children}</LanguageProvider>
      </body>
    </html>
  );
}
