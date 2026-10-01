import HomePage from "@/components/home/HomePage";
import { DocumentTitle } from "@/components/LanguageProvider";

const TITLE = "مدار | حيث تدور الفرص";
const DESCRIPTION = "مدار منصة إعلامية تجمع الفرص التعليمية والتطويرية والتطوعية لشباب قطر في مكان واحد.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // TODO(seo): set og:url (and metadataBase in this file's layout) once the domain is registered
  openGraph: {
    type: "website",
    siteName: "Madar | مدار",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/images/og-image.png"],
    locale: "ar_QA",
    alternateLocale: ["en_US"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <DocumentTitle titleKey="meta.title" />
      <HomePage />
    </>
  );
}
