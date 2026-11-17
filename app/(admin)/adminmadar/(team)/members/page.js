import MembersTable from "@/components/admin/MembersTable";
import { getPool } from "@/lib/db";
import { formatShortDateTime } from "@/lib/coverageMeta";
import { requireAdmin } from "@/lib/session";

export const metadata = { title: "الأعضاء | مدار" };

export default async function MembersPage() {
  const admin = await requireAdmin();

  // New sign-ups (زائر) first, so they're easy to promote.
  const { rows } = await getPool().query(
    `SELECT id, full_name, email, role, is_active, last_login_at
     FROM members ORDER BY (role = 'visitor') DESC, created_at DESC`
  );
  const members = rows.map((row) => ({
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    role: row.role,
    isActive: row.is_active,
    lastLogin: row.last_login_at ? formatShortDateTime(row.last_login_at) : "",
  }));

  return (
    <main className="admin-main team-main">
      <h1 className="team-title">الأعضاء</h1>
      <p className="team-hint">
        كل من يسجّل حسابًا جديدًا يبدأ «زائرًا» ولا يرى شيئًا. غيّر صلاحيته إلى «عضو» ليرى التغطيات. تُحفظ التغييرات فورًا.
      </p>
      <MembersTable initialMembers={members} actorId={admin.id} actorRole={admin.role} />
    </main>
  );
}
