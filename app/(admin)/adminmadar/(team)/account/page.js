import AccountForm from "@/components/admin/AccountForm";
import { requireMember } from "@/lib/session";
import { ROLE_LABELS } from "@/lib/roles";

export const metadata = { title: "حسابي | مدار" };

export default async function AccountPage() {
  const member = await requireMember();
  return (
    <main className="admin-main team-main team-main--narrow">
      <h1 className="team-title">حسابي</h1>
      <AccountForm fullName={member.full_name} email={member.email} roleLabel={ROLE_LABELS[member.role]} />
    </main>
  );
}
