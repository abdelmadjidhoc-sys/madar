import Link from "next/link";
import StatusBadge from "./StatusBadge";
import TeamChips from "./TeamChips";
import { TYPE_LABELS, formatShortDateTime, isOverdue } from "@/lib/coverageMeta";

/** One coverage as a clickable row: title, when/where, who covers, who edits, status. */
export default function CoverageRow({ coverage }) {
  return (
    <Link className="coverage-row" href={"/adminmadar/coverages/" + coverage.id}>
      <div className="coverage-row-main">
        <h3>{coverage.title}</h3>
        <p className="coverage-row-meta">
          {formatShortDateTime(coverage.startsAt)}
          {coverage.location ? " · " + coverage.location : ""}
          {" · "}
          {TYPE_LABELS[coverage.type]}
        </p>
        <div className="coverage-row-team">
          <TeamChips team={coverage.team} kind="photographer" label="التصوير" />
          <TeamChips team={coverage.team} kind="editor" label="المونتاج" />
        </div>
      </div>
      <div className="coverage-row-side">
        <StatusBadge status={coverage.status} />
        {isOverdue(coverage) && <span className="status-badge status-badge--overdue">متأخرة</span>}
      </div>
    </Link>
  );
}
