import NewsPage from "@/components/news/NewsPage";
import { DocumentTitle } from "@/components/LanguageProvider";

export const metadata = {
  title: "الأخبار | مدار",
  description: "تغطيات ميدانية وأخبار مدار للبرامج والفعاليات والمبادرات الشبابية في دولة قطر.",
};

export default function Page() {
  return (
    <>
      <DocumentTitle titleKey="newsPage.metaTitle" />
      <NewsPage />
    </>
  );
}
