"use client";

import { useMemo, useState } from "react";
import CoverageRow from "./CoverageRow";
import CoverageCalendar from "./CoverageCalendar";
import { STATUSES, STATUS_LABELS, isAssigned } from "@/lib/coverageMeta";

/** The coverages page: list or calendar, with filters (status, mine only, search). */
export default function CoverageBrowser({ coverages, memberId }) {
  const [view, setView] = useState("list");
  const [status, setStatus] = useState("all");
  const [mineOnly, setMineOnly] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return coverages.filter((c) => {
      if (status !== "all" && c.status !== status) return false;
      if (mineOnly && !isAssigned(c, memberId)) return false;
      if (query) {
        const haystack = [c.title, c.organization, c.location, ...c.team.map((p) => p.name)].join(" ").toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [coverages, status, mineOnly, search, memberId]);

  return (
    <div>
      <div className="team-toolbar">
        <div className="admin-tabs" role="tablist" aria-label="طريقة العرض">
          {[
            ["list", "قائمة"],
            ["calendar", "تقويم"],
          ].map(([key, label]) => (
            <button
              className="admin-tab"
              type="button"
              role="tab"
              key={key}
              aria-selected={view === key}
              onClick={() => setView(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <input
          className="team-input team-search"
          type="search"
          placeholder="بحث بالعنوان أو الجهة أو الاسم"
          aria-label="بحث"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select className="team-input" aria-label="الحالة" value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="all">كل الحالات</option>
          {STATUSES.map((key) => (
            <option key={key} value={key}>
              {STATUS_LABELS[key]}
            </option>
          ))}
        </select>

        <label className="team-check">
          <input type="checkbox" checked={mineOnly} onChange={(event) => setMineOnly(event.target.checked)} />
          تغطياتي فقط
        </label>
      </div>

      {view === "calendar" ? (
        <CoverageCalendar coverages={filtered} />
      ) : filtered.length === 0 ? (
        <p className="team-empty">{coverages.length === 0 ? "لا توجد تغطيات بعد." : "لا توجد تغطيات مطابقة."}</p>
      ) : (
        <div className="coverage-list">
          {filtered.map((coverage) => (
            <CoverageRow key={coverage.id} coverage={coverage} />
          ))}
        </div>
      )}
    </div>
  );
}
