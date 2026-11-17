import Link from "next/link";
import { notFound } from "next/navigation";
import CoverageActions from "@/components/admin/CoverageActions";
import StatusBadge from "@/components/admin/StatusBadge";
import TeamChips from "@/components/admin/TeamChips";
import { getActivity, getCoverage } from "@/lib/coverages";
import {
  STATUS_LABELS,
  TYPE_LABELS,
  allowedNextStatuses,
  canEditLink,
  formatDateTime,
  formatDay,
  formatShortDateTime,
  isOverdue,
} from "@/lib/coverageMeta";
import { requireMember } from "@/lib/session";
import { isAdminRole } from "@/lib/roles";

export const metadata = { title: "تفاصيل التغطية | مدار" };

function describe(entry) {
  switch (entry.action) {
    case "created":
      return "تم إنشاء التغطية";
    case "updated":
      return "تم تعديل بيانات التغطية";
    case "team":
      return "تم تعديل فريق العمل";
    case "link":
      return "تم تحديث رابط المونتاج";
    case "status":
      return "الحالة: " + STATUS_LABELS[entry.from] + " ← " + STATUS_LABELS[entry.to];
    default:
      return entry.action;
  }
}

export default async function CoverageDetailPage({ params }) {
  const member = await requireMember();
  const id = Number((await params).id);
  const coverage = await getCoverage(id);
  if (!coverage) notFound();
  const activity = await getActivity(id);

  const admin = isAdminRole(member.role);

  return (
    <main className="admin-main team-main team-main--narrow">
      <p>
        <Link className="team-link" href="/adminmadar/coverages">
          → كل التغطيات
        </Link>
      </p>

      <div className="team-section-head">
        <h1 className="team-title">{coverage.title}</h1>
        {admin && (
          <Link className="team-btn team-btn--ghost" href={"/adminmadar/coverages/" + coverage.id + "/edit"}>
            تعديل
          </Link>
        )}
      </div>

      <p className="coverage-badges">
        <StatusBadge status={coverage.status} />
        {isOverdue(coverage) && <span className="status-badge status-badge--overdue">متأخرة</span>}
      </p>

      <section className="team-panel">
        <dl className="team-facts">
          <div>
            <dt>الموعد</dt>
            <dd>{formatDateTime(coverage.startsAt)}</dd>
          </div>
          {coverage.endsAt && (
            <div>
              <dt>النهاية</dt>
              <dd>{formatDateTime(coverage.endsAt)}</dd>
            </div>
          )}
          {coverage.location && (
            <div>
              <dt>المكان</dt>
              <dd>{coverage.location}</dd>
            </div>
          )}
          {coverage.organization && (
            <div>
              <dt>الجهة / الفعالية</dt>
              <dd>{coverage.organization}</dd>
            </div>
          )}
          <div>
            <dt>نوع التغطية</dt>
            <dd>{TYPE_LABELS[coverage.type]}</dd>
          </div>
          {coverage.editDeadline && (
            <div>
              <dt>موعد تسليم المونتاج</dt>
              <dd>{formatDay(coverage.editDeadline)}</dd>
            </div>
          )}
        </dl>
        {coverage.description && <p className="team-text">{coverage.description}</p>}
        {coverage.notes && (
          <p className="team-text">
            <strong>ملاحظات:</strong> {coverage.notes}
          </p>
        )}
      </section>

      <section className="team-panel">
        <h2>فريق العمل</h2>
        <dl className="team-facts">
          <div>
            <dt>التصوير</dt>
            <dd>
              <TeamChips team={coverage.team} kind="photographer" />
            </dd>
          </div>
          <div>
            <dt>المصمم / المونتير</dt>
            <dd>
              <TeamChips team={coverage.team} kind="editor" />
            </dd>
          </div>
          <div>
            <dt>رابط المونتاج</dt>
            <dd>
              {coverage.deliverableUrl ? (
                <a className="team-link" href={coverage.deliverableUrl} target="_blank" rel="noopener noreferrer" dir="ltr">
                  {coverage.deliverableUrl}
                </a>
              ) : (
                "لم يُضَف بعد"
              )}
            </dd>
          </div>
        </dl>
      </section>

      <CoverageActions
        coverageId={coverage.id}
        status={coverage.status}
        deliverableUrl={coverage.deliverableUrl}
        allowed={allowedNextStatuses(member, coverage)}
        canEditLink={canEditLink(member, coverage)}
      />

      <section className="team-panel">
        <h2>سجل التغييرات</h2>
        <ul className="team-history">
          {activity.map((entry) => (
            <li key={entry.id}>
              <span>
                {describe(entry)}
                {entry.who ? " · " + entry.who : ""}
                {entry.note ? " — «" + entry.note + "»" : ""}
              </span>
              <time dateTime={entry.createdAt}>{formatShortDateTime(entry.createdAt)}</time>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
