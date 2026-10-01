import LinksPage from "@/components/LinksPage";
import { DocumentTitle } from "@/components/LanguageProvider";

export const metadata = {
  title: "روابطنا | مدار",
  description: "كل روابط مدار في مكان واحد.",
  robots: { index: false },
};

export default function Page() {
  return (
    <>
      <DocumentTitle titleKey="linksPage.metaTitle" />
      <LinksPage />
    </>
  );
}
