import AboutPage from "@/components/about/AboutPage";
import { DocumentTitle } from "@/components/LanguageProvider";

export const metadata = {
  title: "من نحن | مدار",
  description: "تعرّف على منصة مدار: رؤيتها ورسالتها ومبادئها وأهدافها وأنشطتها وقصة بدايتها.",
};

export default function Page() {
  return (
    <>
      <DocumentTitle titleKey="aboutPage.metaTitle" />
      <AboutPage />
    </>
  );
}
