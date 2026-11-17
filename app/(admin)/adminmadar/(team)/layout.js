import { redirect } from "next/navigation";
import MemberShell from "@/components/admin/MemberShell";
import TeamHeader from "@/components/admin/TeamHeader";
import { currentMember } from "@/lib/session";
import { ROLE_LABELS, canSeeRequests, isAdminRole, isMemberOrAbove } from "@/lib/roles";

export const dynamic = "force-dynamic";

export default async function TeamLayout({ children }) {
  // The member is loaded from the database on every request, so a role
  // change or deactivation takes effect on the next page load.
  const member = await currentMember();
  if (!member) redirect("/adminmadar/login");

  // A زائر sees only the waiting page, never the pages below (each page also checks the role itself).
  if (!isMemberOrAbove(member.role)) {
    return (
      <MemberShell name={member.full_name} roleLabel={ROLE_LABELS[member.role]} title="حسابك قيد المراجعة">
        <p>تم إنشاء حسابك بنجاح. ستتمكن من الدخول إلى لوحة الفريق بعد أن تحدّد الإدارة صلاحياتك.</p>
      </MemberShell>
    );
  }

  return (
    <>
      <TeamHeader
        name={member.full_name}
        roleLabel={ROLE_LABELS[member.role]}
        isAdmin={isAdminRole(member.role)}
        showRequests={canSeeRequests(member.role)}
      />
      {children}
    </>
  );
}
