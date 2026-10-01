import FormPage from "@/components/FormPage";
import ContactForm from "@/components/ContactForm";
import { DocumentTitle } from "@/components/LanguageProvider";

export const metadata = {
  title: "طلب جلسة توجيه | مدار",
  description: "احجز جلسة توجيه وتطوير مع مدار عبر النموذج التالي.",
  robots: { index: false },
};

export default function ContactPage() {
  return (
    <>
      <DocumentTitle titleKey="sessionPage.metaTitle" />
      <FormPage pageKey="sessionPage" backHref="/#contact">
        <ContactForm />
      </FormPage>
    </>
  );
}
