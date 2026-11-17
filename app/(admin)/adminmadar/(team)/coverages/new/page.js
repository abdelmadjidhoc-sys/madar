import CoverageForm from "@/components/admin/CoverageForm";
import { listAssignableMembers } from "@/lib/coverages";
import { requireAdmin } from "@/lib/session";

export const metadata = { title: "تغطية جديدة | مدار" };

export default async function NewCoveragePage() {
  await requireAdmin();
  const people = await listAssignableMembers();

  return (
    <main className="admin-main team-main team-main--narrow">
      <h1 className="team-title">تغطية جديدة</h1>
      <CoverageForm people={people} />
    </main>
  );
}
