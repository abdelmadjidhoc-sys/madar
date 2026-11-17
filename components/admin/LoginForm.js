"use client";

import { useState } from "react";
import PasswordField from "./PasswordField";

const ERRORS = {
  invalid: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
  inactive: "هذا الحساب موقوف. تواصل مع إدارة مدار",
  tooMany: "محاولات كثيرة. حاول مرة أخرى بعد قليل",
  server: "حدث خطأ. حاول مرة أخرى",
};

export default function LoginForm() {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), password: data.get("password") }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(ERRORS[body.error] ? body.error : "server");
      }
      // Full navigation so the page is rendered with the new cookie.
      // ?next= (set by proxy.js for CV links) is honoured for same-site paths only.
      const next = new URLSearchParams(window.location.search).get("next");
      window.location.href = next && /^\/[^/\\]/.test(next) ? next : "/adminmadar";
    } catch (err) {
      setError(ERRORS[err.message] || ERRORS.server);
      setSubmitting(false);
    }
  }

  return (
    <div className="admin-picker">
      <img className="admin-picker-logo" src="/assets/images/logo-on-dark.svg" alt="مدار" />
      <form className="admin-login" onSubmit={handleSubmit}>
        <h1 className="admin-login-title">تسجيل الدخول</h1>

        <label className="admin-login-field">
          <span>البريد الإلكتروني</span>
          <input type="email" name="email" dir="ltr" autoComplete="email" required autoFocus />
        </label>

        <PasswordField label="كلمة المرور" name="password" autoComplete="current-password" />

        <p className="admin-login-error" role="alert">
          {error}
        </p>

        <button className="admin-picker-btn" type="submit" disabled={submitting}>
          {submitting ? "جارٍ الدخول…" : "دخول"}
        </button>

        <p className="admin-auth-switch">
          ليس لديك حساب؟ <a href="/adminmadar/signup">إنشاء حساب</a>
        </p>
      </form>
    </div>
  );
}
