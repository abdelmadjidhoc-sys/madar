"use client";

import { useState } from "react";
import PasswordField from "./PasswordField";

const FIELD_ERRORS = {
  fullName: "اكتب اسمك الكامل",
  email: "البريد الإلكتروني غير صحيح",
  password: "كلمة المرور يجب ألا تقل عن 8 أحرف",
};

const ERRORS = {
  emailTaken: "هذا البريد الإلكتروني مسجّل مسبقًا. جرّب تسجيل الدخول",
  tooMany: "محاولات كثيرة. حاول مرة أخرى بعد قليل",
  server: "حدث خطأ. حاول مرة أخرى",
};

export default function SignupForm() {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("password") !== data.get("confirm")) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/admin/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          email: data.get("email"),
          password: data.get("password"),
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error === "invalid" ? "field:" + body.field : body.error);
      }
      window.location.href = "/adminmadar";
    } catch (err) {
      const message = String(err.message);
      setError(
        message.startsWith("field:")
          ? FIELD_ERRORS[message.slice(6)] || ERRORS.server
          : ERRORS[message] || ERRORS.server
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="admin-picker">
      <img className="admin-picker-logo" src="/assets/images/logo-on-dark.svg" alt="مدار" />
      <form className="admin-login" onSubmit={handleSubmit}>
        <h1 className="admin-login-title">إنشاء حساب</h1>

        <label className="admin-login-field">
          <span>الاسم الكامل</span>
          <input type="text" name="fullName" autoComplete="name" required autoFocus maxLength={100} />
        </label>

        <label className="admin-login-field">
          <span>البريد الإلكتروني</span>
          <input type="email" name="email" dir="ltr" autoComplete="email" required maxLength={200} />
        </label>

        <PasswordField label="كلمة المرور (8 أحرف على الأقل)" name="password" autoComplete="new-password" minLength={8} />

        <PasswordField label="تأكيد كلمة المرور" name="confirm" autoComplete="new-password" minLength={8} />

        <p className="admin-login-error" role="alert">
          {error}
        </p>

        <button className="admin-picker-btn" type="submit" disabled={submitting}>
          {submitting ? "جارٍ إنشاء الحساب…" : "إنشاء الحساب"}
        </button>

        <p className="admin-auth-switch">
          لديك حساب؟ <a href="/adminmadar/login">تسجيل الدخول</a>
        </p>
      </form>
    </div>
  );
}
