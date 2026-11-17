"use client";

import { useState } from "react";
import { TYPES, TYPE_LABELS, toQatarInput } from "@/lib/coverageMeta";

/**
 * Create / edit a coverage (مسؤول and above). `people` = assignable members
 * (عضو and above); every one of them can be picked as photographer or editor.
 */
export default function CoverageForm({ people, coverage }) {
  const editing = Boolean(coverage);
  const initialPhotographers = coverage ? coverage.team.filter((p) => p.kind === "photographer").map((p) => p.memberId) : [];
  const initialEditor = coverage ? coverage.team.find((p) => p.kind === "editor")?.memberId ?? null : null;

  const [photographerIds, setPhotographerIds] = useState(initialPhotographers);
  const [editorId, setEditorId] = useState(initialEditor);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function togglePhotographer(id) {
    setPhotographerIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubmitting(true);
    setError("");

    const payload = {
      title: data.get("title"),
      organization: data.get("organization"),
      location: data.get("location"),
      startsAt: data.get("startsAt"),
      endsAt: data.get("endsAt"),
      type: data.get("type"),
      editDeadline: data.get("editDeadline"),
      description: data.get("description"),
      notes: data.get("notes"),
      photographerIds,
      editorId,
    };

    try {
      const res = await fetch(editing ? "/api/admin/coverages/" + coverage.id : "/api/admin/coverages", {
        method: editing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing ? { action: "update", ...payload } : payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "حدث خطأ. حاول مرة أخرى");
      window.location.href = "/adminmadar/coverages/" + (editing ? coverage.id : body.id);
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  }

  return (
    <form className="team-form" onSubmit={handleSubmit}>
      <label className="team-field">
        <span>عنوان التغطية *</span>
        <input className="team-input" name="title" required maxLength={150} defaultValue={coverage?.title} autoFocus />
      </label>

      <div className="team-grid-2">
        <label className="team-field">
          <span>الجهة / الفعالية</span>
          <input className="team-input" name="organization" maxLength={150} defaultValue={coverage?.organization} />
        </label>
        <label className="team-field">
          <span>المكان</span>
          <input className="team-input" name="location" maxLength={200} defaultValue={coverage?.location} />
        </label>
      </div>

      <div className="team-grid-2">
        <label className="team-field">
          <span>بداية التغطية * (بتوقيت قطر)</span>
          <input className="team-input" type="datetime-local" name="startsAt" dir="ltr" required defaultValue={toQatarInput(coverage?.startsAt)} />
        </label>
        <label className="team-field">
          <span>نهاية التغطية (اختياري)</span>
          <input className="team-input" type="datetime-local" name="endsAt" dir="ltr" defaultValue={toQatarInput(coverage?.endsAt)} />
        </label>
      </div>

      <div className="team-grid-2">
        <label className="team-field">
          <span>نوع التغطية</span>
          <select className="team-input" name="type" defaultValue={coverage?.type || "both"}>
            {TYPES.map((key) => (
              <option key={key} value={key}>
                {TYPE_LABELS[key]}
              </option>
            ))}
          </select>
        </label>
        <label className="team-field">
          <span>موعد تسليم المونتاج</span>
          <input className="team-input" type="date" name="editDeadline" dir="ltr" defaultValue={coverage?.editDeadline || ""} />
        </label>
      </div>

      <label className="team-field">
        <span>الوصف</span>
        <textarea className="team-input" name="description" rows={3} maxLength={2000} defaultValue={coverage?.description} />
      </label>

      <label className="team-field">
        <span>ملاحظات للفريق</span>
        <textarea className="team-input" name="notes" rows={3} maxLength={2000} defaultValue={coverage?.notes} />
      </label>

      <fieldset className="team-fieldset">
        <legend>المصوّرون</legend>
        {people.length === 0 ? (
          <p className="team-empty">لا يوجد أعضاء بعد. غيّر صلاحية من سجّل إلى «عضو» من صفحة الأعضاء.</p>
        ) : (
          <div className="team-checks">
            {people.map((person) => (
              <label className="team-check" key={person.id}>
                <input type="checkbox" checked={photographerIds.includes(person.id)} onChange={() => togglePhotographer(person.id)} />
                {person.name}
              </label>
            ))}
          </div>
        )}
      </fieldset>

      <label className="team-field">
        <span>المصمم / المونتير</span>
        <select
          className="team-input"
          value={editorId ?? ""}
          onChange={(event) => setEditorId(event.target.value ? Number(event.target.value) : null)}
        >
          <option value="">لم يُحدَّد بعد</option>
          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>
      </label>

      <p className="team-error" role="alert">
        {error}
      </p>

      <div className="team-actions">
        <button className="team-btn" type="submit" disabled={submitting}>
          {submitting ? "جارٍ الحفظ…" : editing ? "حفظ التعديلات" : "إنشاء التغطية"}
        </button>
        <a className="team-btn team-btn--ghost" href={editing ? "/adminmadar/coverages/" + coverage.id : "/adminmadar/coverages"}>
          إلغاء
        </a>
      </div>
    </form>
  );
}
