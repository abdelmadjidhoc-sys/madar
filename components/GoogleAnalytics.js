import Script from "next/script";

// GA4 property "Madar" (account "Madar"), web stream https://madar-orcin.vercel.app.
// A measurement ID is public (it's in every page's HTML), so it lives here;
// NEXT_PUBLIC_GA_ID can override it (e.g. for a different domain later).
const MEASUREMENT_ID = "G-BGQ10H310J";

/**
 * Google Analytics 4 for the public site only (the team backend has its own
 * layout and never loads this). Production builds only, so local
 * development (`npm run dev`) doesn't send test visits to the real stats.
 */
export default function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;
  const id = process.env.NEXT_PUBLIC_GA_ID || MEASUREMENT_ID;
  if (!/^G-[A-Z0-9]+$/.test(id)) return null;

  return (
    <>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=" + id} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
