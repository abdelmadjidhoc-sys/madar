"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatTime, monthTitle, qatarDateKey, qatarToday } from "@/lib/coverageMeta";

const WEEKDAYS = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const MAX_PER_DAY = 3;

/** Monthly calendar (weeks start on Sunday). Days are Qatar days. */
export default function CoverageCalendar({ coverages }) {
  const today = qatarToday();
  const [cursor, setCursor] = useState({ year: Number(today.slice(0, 4)), month: Number(today.slice(5, 7)) - 1 });

  const byDay = useMemo(() => {
    const map = new Map();
    for (const coverage of coverages) {
      const key = qatarDateKey(coverage.startsAt);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(coverage);
    }
    for (const list of map.values()) list.sort((a, b) => a.startsAt.localeCompare(b.startsAt));
    return map;
  }, [coverages]);

  const { year, month } = cursor;
  const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    const key = year + "-" + String(month + 1).padStart(2, "0") + "-" + String(day).padStart(2, "0");
    cells.push({ day, key });
  }

  function move(delta) {
    const date = new Date(Date.UTC(year, month + delta, 1));
    setCursor({ year: date.getUTCFullYear(), month: date.getUTCMonth() });
  }

  return (
    <div className="calendar">
      <div className="calendar-head">
        <button className="team-btn team-btn--ghost" type="button" onClick={() => move(-1)} aria-label="الشهر السابق">
          →
        </button>
        <h2>{monthTitle(year, month)}</h2>
        <button className="team-btn team-btn--ghost" type="button" onClick={() => move(1)} aria-label="الشهر التالي">
          ←
        </button>
      </div>

      <div className="calendar-grid" role="grid">
        {WEEKDAYS.map((name) => (
          <div className="calendar-weekday" key={name} role="columnheader">
            {name}
          </div>
        ))}
        {cells.map((cell, index) =>
          cell === null ? (
            <div className="calendar-cell calendar-cell--empty" key={"e" + index} />
          ) : (
            <div className={"calendar-cell" + (cell.key === today ? " is-today" : "")} key={cell.key} role="gridcell">
              <span className="calendar-day">{cell.day}</span>
              {(byDay.get(cell.key) || []).slice(0, MAX_PER_DAY).map((coverage) => (
                <Link
                  key={coverage.id}
                  href={"/adminmadar/coverages/" + coverage.id}
                  className={"calendar-chip calendar-chip--" + coverage.status}
                  title={coverage.title}
                >
                  <span className="calendar-chip-time">{formatTime(coverage.startsAt)}</span> {coverage.title}
                </Link>
              ))}
              {(byDay.get(cell.key) || []).length > MAX_PER_DAY && (
                <span className="calendar-more">+{byDay.get(cell.key).length - MAX_PER_DAY} أخرى</span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
