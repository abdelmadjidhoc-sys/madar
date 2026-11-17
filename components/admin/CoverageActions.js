"use client";

import { useState } from "react";
import { STATUS_LABELS } from "@/lib/coverageMeta";

/** The usual next status from each status (the main button). */
const NEXT_STEP = {
  new: "assigned",
  assigned: "covered",
  covered: "editing",
  editing: "review",
  review: "published",
};

const BUTTON_LABELS = {
  assigned: "تأكيد التعيين",
  covered: "تمت التغطية",
  editing: "بدء المونتاج",
  review: "إرسال للاعتماد",
  published: "اعتماد ونشر",
};

/**
 * Status buttons and the edit-link field of a coverage. `allowed` and `canEditLink`
 * come from the server and only decide what to show; the API enforces the same rules.
 */
export default function CoverageActions({ coverageId, status, deliverableUrl, allowed, canEditLink }) {
  const [link, setLink] = useState(deliverableUrl);
  const [note, setNote] = useState("");
  const [manual, setManual] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function send(payload) {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/admin/coverages/" + coverageId, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "حدث خطأ. حاول مرة أخرى");
      window.location.reload();
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  function moveTo(next) {
    if (next === "cancelled" && !window.confirm("هل تريد إلغاء هذه التغطية؟")) return;
    const payload = { action: "status", status: next, note };
    if (canEditLink && link !== deliverableUrl) payload.deliverableUrl = link;
    send(payload);
  }

  if (!canEditLink && allowed.length === 0) return null;

  // The natural next step gets the main button; "send back" and "cancel" get their own;
  // anything else an admin may jump to goes in the "تغيير الحالة" dropdown.
  const primary = allowed.includes(NEXT_STEP[status]) ? NEXT_STEP[status] : null;
  const sendBack = status === "review" && allowed.includes("editing");
  const canCancel = allowed.includes("cancelled");
  const others = allowed.filter(
    (key) => key !== primary && key !== "cancelled" && !(sendBack && key === "editing")
  );

  return (
    <section className="team-panel">
      <h2>الإجراءات</h2>

      {canEditLink && (
        <div className="team-field">
          <label htmlFor="deliverable">رابط المونتاج النهائي (Drive أو غيره)</label>
          <div className="team-inline">
            <input
              id="deliverable"
              className="team-input"
              type="url"
              dir="ltr"
              placeholder="https://"
              value={link}
              onChange={(event) => setLink(event.target.value)}
            />
            <button
              className="team-btn team-btn--ghost"
              type="button"
              disabled={busy || link === deliverableUrl}
              onClick={() => send({ action: "link", deliverableUrl: link })}
            >
              حفظ الرابط
            </button>
          </div>
        </div>
      )}

      {allowed.length > 0 && (
        <>
          <label className="team-field">
            <span>ملاحظة مع التغيير (اختياري)</span>
            <input className="team-input" maxLength={500} value={note} onChange={(event) => setNote(event.target.value)} />
          </label>

          <div className="status-actions">
            {primary && (
              <button className="team-btn" type="button" disabled={busy} onClick={() => moveTo(primary)}>
                {BUTTON_LABELS[primary]}
              </button>
            )}
            {sendBack && (
              <button className="team-btn team-btn--ghost" type="button" disabled={busy} onClick={() => moveTo("editing")}>
                إعادة للمونتاج
              </button>
            )}

            {others.length > 0 && (
              <div className="status-picker">
                <select
                  className="team-input"
                  aria-label="تغيير الحالة"
                  value={manual}
                  onChange={(event) => setManual(event.target.value)}
                >
                  <option value="">تغيير الحالة…</option>
                  {others.map((key) => (
                    <option key={key} value={key}>
                      {STATUS_LABELS[key]}
                    </option>
                  ))}
                </select>
                <button
                  className="team-btn team-btn--ghost"
                  type="button"
                  disabled={busy || !manual}
                  onClick={() => moveTo(manual)}
                >
                  تطبيق
                </button>
              </div>
            )}

            {canCancel && (
              <button
                className="team-btn team-btn--danger status-actions-cancel"
                type="button"
                disabled={busy}
                onClick={() => moveTo("cancelled")}
              >
                إلغاء التغطية
              </button>
            )}
          </div>
        </>
      )}

      <p className="team-error" role="alert">
        {error}
      </p>
    </section>
  );
}
