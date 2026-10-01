import FormPage from "@/components/FormPage";
import JoinForm from "@/components/JoinForm";
import { DocumentTitle } from "@/components/LanguageProvider";

export const metadata = {
  title: "انضم إلى فريق مدار | مدار",
  description: "قدّم طلب انضمامك إلى فريق منصة مدار.",
  robots: { index: false },
};

export default function JoinPage() {
  return (
    <>
      <DocumentTitle titleKey="joinPage.metaTitle" />
      <FormPage pageKey="joinPage" introKeys={["intro", "intro2"]} standalone videoSrc="/assets/videos/hero-madar.mp4">
        <JoinForm />
      </FormPage>
    </>
  );
}
