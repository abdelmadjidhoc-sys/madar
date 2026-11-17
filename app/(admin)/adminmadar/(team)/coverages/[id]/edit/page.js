import { notFound } from "next/navigation";
import CoverageForm from "@/components/admin/CoverageForm";
import { getCoverage, listAssignableMembers } from "@/lib/coverages";
import { requireAdmin } from "@/lib/session";

export const metadata = { title: "تعديل التغطية | مدار" };

export default async function EditCoveragePage({ params }) {
  await requireAdmin();
  const coverage = await getCoverage(Number((await params).id));
  if (!coverage) notFound();
  const people = await listAssignableMembers();

  return (
    <main className="admin-main team-main team-main--narrow">
      <h1 className="team-title">تعديل التغطية</h1>
      <CoverageForm people={people} coverage={coverage} />
    </main>
  );
}
