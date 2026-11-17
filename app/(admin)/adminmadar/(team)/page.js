import Link from "next/link";
import CoverageRow from "@/components/admin/CoverageRow";
import { getPool } from "@/lib/db";
import { listCoverages } from "@/lib/coverages";
import { CLOSED_STATUSES, isAssigned, isOverdue, qatarDateKey, qatarToday } from "@/lib/coverageMeta";
import { currentMember } from "@/lib/session";
import { isAdminRole, isMemberOrAbove } from "@/lib/roles";

export const metadata = { title: "الرئيسية | مدار" };

function Section({ title, empty, items, action }) {
  return (
    <section className="team-section">
      <div className="team-section-head">
        <h2>{title}</h2>
        {action}
      </div>
      {items.length === 0 ? (
        <p className="team-empty">{empty}</p>
      ) : (
        <div className="coverage-list">
          {items.map((coverage) => (
            <CoverageRow key={coverage.id} coverage={coverage} />
          ))}
        </div>
      )}
    </section>
  );
}

export default async function DashboardPage() {
  const member = await currentMember();
  // The layout shows the waiting page to visitors; nothing to load for them.
  if (!member || !isMemberOrAbove(member.role)) return null;
  const admin = isAdminRole(member.role);

  const coverages = await listCoverages();
  const today = qatarToday();
  const open = coverages.filter((c) => !CLOSED_STATUSES.includes(c.status));

  const myShoots = open
    .filter((c) => isAssigned(c, member.id, "photographer") && qatarDateKey(c.startsAt) >= today && c.status === "assigned")
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt));
  const myEdits = open
    .filter((c) => isAssigned(c, member.id, "editor") && ["assigned", "covered", "editing"].includes(c.status))
    .sort((a, b) => (a.editDeadline || "9").localeCompare(b.editDeadline || "9"));
  const overdue = open.filter((c) => isOverdue(c) && (admin || c.team.some((p) => p.memberId === member.id)));
  const awaitingApproval = open.filter((c) => c.status === "review");
  const upcoming = open
    .filter((c) => qatarDateKey(c.startsAt) >= today)
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt))
    .slice(0, 5);

  let pendingVisitors = 0;
  if (admin) {
    const { rows } = await getPool().query("SELECT count(*)::int AS n FROM members WHERE role = 'visitor' AND is_active = true");
    pendingVisitors = rows[0].n;
  }

  return (
    <main className="admin-main team-main">
      <h1 className="team-title">أهلًا {member.full_name}</h1>

      {admin && (
        <div className="team-stats">
          <Link className="team-stat" href="/adminmadar/members">
            <strong>{pendingVisitors}</strong>
            <span>زوّار بانتظار تحديد صلاحياتهم</span>
          </Link>
          <div className="team-stat">
            <strong>{awaitingApproval.length}</strong>
            <span>تغطيات بانتظار الاعتماد</span>
          </div>
          <div className="team-stat">
            <strong>{overdue.length}</strong>
            <span>تغطيات متأخرة</span>
          </div>
        </div>
      )}

      {overdue.length > 0 && (
        <Section title="متأخرة" empty="" items={overdue} />
      )}

      {admin && awaitingApproval.length > 0 && (
        <Section title="بانتظار الاعتماد" empty="" items={awaitingApproval} />
      )}

      <Section title="تغطياتي القادمة" empty="لا توجد تغطيات قادمة مسندة إليك." items={myShoots} />
      {/* Only shown once the member is the editor of at least one open coverage. */}
      {myEdits.length > 0 && <Section title="مونتاجاتي" empty="" items={myEdits} />}
      <Section
        title="أقرب التغطيات"
        empty="لا توجد تغطيات قادمة."
        items={upcoming}
        action={
          <Link className="team-link" href="/adminmadar/coverages">
            عرض كل التغطيات
          </Link>
        }
      />
    </main>
  );
}
