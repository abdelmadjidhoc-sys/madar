"use client";

import { useState } from "react";
import { DocumentTitle, useLang } from "../LanguageProvider";

export default function LoginForm() {
  const { lang, setLang, t } = useLang();
  const [error, setError] = useState(null); // null | "wrongCredentials" | "loginError"
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubmitting(true);
    setError(null);

    fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: data.get("username"), password: data.get("password") }),
    })
      .then((res) => {
        if (res.status === 401) throw new Error("wrongCredentials");
        if (!res.ok) throw new Error("loginError");
        // Full navigation so the dashboard is rendered with the new cookie.
        window.location.href = "/adminmadar";
      })
      .catch((err) => {
        setError(err.message === "wrongCredentials" ? "wrongCredentials" : "loginError");
        setSubmitting(false);
      });
  }

  return (
    <div className="admin-picker">
      <DocumentTitle titleKey="admin.loginMetaTitle" />

      <button
        className="admin-lang-toggle admin-lang-toggle--corner"
        type="button"
        onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      >
        {t("nav.langToggle")}
      </button>

      <img className="admin-picker-logo" src="/assets/images/logo-on-dark.svg" alt={t("brand.name")} />
      <form className="admin-login" onSubmit={handleSubmit}>
        <h1 className="admin-login-title">{t("admin.loginHeading")}</h1>

        <label className="admin-login-field">
          <span>{t("admin.username")}</span>
          <input type="text" name="username" dir="ltr" autoComplete="username" required autoFocus />
        </label>

        <label className="admin-login-field">
          <span>{t("admin.password")}</span>
          <input type="password" name="password" dir="ltr" autoComplete="current-password" required />
        </label>

        <p className="admin-login-error" role="alert">
          {error && t("admin." + error)}
        </p>

        <button className="admin-picker-btn" type="submit" disabled={submitting}>
          {submitting ? t("admin.loggingIn") : t("admin.logIn")}
        </button>
      </form>
    </div>
  );
}
