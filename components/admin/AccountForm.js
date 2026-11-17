"use client";

import { useState } from "react";
import PasswordField from "./PasswordField";

/** حسابي: change the display name and the password. */
export default function AccountForm({ fullName, email, roleLabel }) {
  const [nameMessage, setNameMessage] = useState(null);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [busy, setBusy] = useState(false);

  async function patch(payload) {
    const res = await fetch("/api/admin/account", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || "حدث خطأ. حاول مرة أخرى");
  }

  async function saveName(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBusy(true);
    try {
      await patch({ fullName: data.get("fullName") });
      setNameMessage({ text: "تم حفظ الاسم" });
    } catch (err) {
      setNameMessage({ text: err.message, error: true });
    }
    setBusy(false);
  }

  async function savePassword(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("newPassword") !== data.get("confirm")) {
      setPasswordMessage({ text: "كلمتا المرور الجديدتان غير متطابقتين", error: true });
      return;
    }
    setBusy(true);
    try {
      await patch({ currentPassword: data.get("currentPassword"), newPassword: data.get("newPassword") });
      form.reset();
      setPasswordMessage({ text: "تم تغيير كلمة المرور" });
    } catch (err) {
      setPasswordMessage({ text: err.message, error: true });
    }
    setBusy(false);
  }

  return (
    <div className="team-account">
      <section className="team-panel">
        <h2>بياناتي</h2>
        <form className="team-form" onSubmit={saveName}>
          <p className="team-text">
            البريد الإلكتروني: <span dir="ltr">{email}</span>
            <br />
            الصلاحية: {roleLabel}
          </p>
          <label className="team-field">
            <span>الاسم الكامل</span>
            <input className="team-input" name="fullName" defaultValue={fullName} required minLength={2} maxLength={100} />
          </label>
          <p className={"team-error" + (nameMessage && !nameMessage.error ? " is-ok" : "")} role="status">
            {nameMessage?.text}
          </p>
          <div className="team-actions">
            <button className="team-btn" type="submit" disabled={busy}>
              حفظ الاسم
            </button>
          </div>
        </form>
      </section>

      <section className="team-panel">
        <h2>تغيير كلمة المرور</h2>
        <form className="team-form team-form--light" onSubmit={savePassword}>
          <PasswordField label="كلمة المرور الحالية" name="currentPassword" autoComplete="current-password" />
          <PasswordField label="كلمة المرور الجديدة (8 أحرف على الأقل)" name="newPassword" autoComplete="new-password" minLength={8} />
          <PasswordField label="تأكيد كلمة المرور الجديدة" name="confirm" autoComplete="new-password" minLength={8} />
          <p className={"team-error" + (passwordMessage && !passwordMessage.error ? " is-ok" : "")} role="status">
            {passwordMessage?.text}
          </p>
          <div className="team-actions">
            <button className="team-btn" type="submit" disabled={busy}>
              تغيير كلمة المرور
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
