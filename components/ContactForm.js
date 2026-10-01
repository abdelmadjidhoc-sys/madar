"use client";

import { useState } from "react";
import { useLang } from "./LanguageProvider";

/**
 * Guidance-session request form. Posts to /api/contact
 * (app/api/contact/route.js → Postgres/Neon, table contact_submissions).
 */
export default function ContactForm() {
  const { t } = useLang();
  const [statusOther, setStatusOther] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const payload = {
      company: data.get("company"), // honeypot
      fullName: data.get("fullName"),
      phone: data.get("phone"),
      ageRange: data.get("ageRange"),
      currentStatus: data.get("currentStatus"),
      currentStatusOther: data.get("currentStatusOther"),
      email: data.get("email"),
      guidanceField: data.get("guidanceField"),
      mainChallenge: data.get("mainChallenge"),
      desiredOutcome: data.get("desiredOutcome"),
      triedBefore: data.get("triedBefore") === "yes" ? true : data.get("triedBefore") === "no" ? false : null,
      consultationMethod: data.get("consultationMethod"),
    };

    setSubmitting(true);
    setStatus("sending");

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("request failed");
        return res.json();
      })
      .then(() => {
        setStatus("success");
        form.reset();
        setStatusOther(false);
      })
      .catch(() => setStatus("error"))
      .finally(() => setSubmitting(false));
  }

  const statusText = {
    sending: t("form.submitting"),
    success: t("form.successMessage"),
    error: t("form.errorMessage"),
  }[status];

  const radio = (name, value, labelKey, extra = {}) => (
    <label className="form-choice" key={value}>
      <input type="radio" name={name} value={value} {...extra} />
      <span>{t(labelKey)}</span>
    </label>
  );

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-row">
        <label htmlFor="fullName">{t("form.fullNameLabel")}</label>
        <input type="text" id="fullName" name="fullName" required />
      </div>

      <div className="form-row">
        <label htmlFor="phone">{t("form.phoneLabel")}</label>
        <input type="tel" id="phone" name="phone" required />
      </div>

      <fieldset className="form-row">
        <legend>{t("form.ageRangeLabel")}</legend>
        <div className="form-choice-group">
          {radio("ageRange", "15-17", "form.age1517", { required: true })}
          {radio("ageRange", "18-21", "form.age1821")}
          {radio("ageRange", "22-25", "form.age2225")}
          {radio("ageRange", "26-31", "form.age2631")}
        </div>
      </fieldset>

      <fieldset className="form-row" onChange={(e) => e.target.name === "currentStatus" && setStatusOther(e.target.value === "other")}>
        <legend>{t("form.statusLabel")}</legend>
        <div className="form-choice-group">
          {radio("currentStatus", "school_student", "form.statusSchool", { required: true })}
          {radio("currentStatus", "university_student", "form.statusUniversity")}
          {radio("currentStatus", "employed", "form.statusEmployed")}
          {radio("currentStatus", "job_seeker", "form.statusJobSeeker")}
          {radio("currentStatus", "other", "form.statusOther")}
        </div>
        {statusOther && (
          <input
            type="text"
            id="currentStatusOther"
            name="currentStatusOther"
            className="form-other-input"
            placeholder={t("form.statusOtherPlaceholder")}
          />
        )}
      </fieldset>

      <div className="form-row">
        <label htmlFor="email">{t("form.emailLabel")}</label>
        <input type="email" id="email" name="email" />
      </div>

      <div className="form-row">
        <label htmlFor="guidanceField">{t("form.guidanceFieldLabel")}</label>
        <input type="text" id="guidanceField" name="guidanceField" />
      </div>

      <div className="form-row">
        <label htmlFor="mainChallenge">{t("form.mainChallengeLabel")}</label>
        <p className="form-hint">{t("form.mainChallengeHint")}</p>
        <textarea id="mainChallenge" name="mainChallenge" rows={3}></textarea>
      </div>

      <div className="form-row">
        <label htmlFor="desiredOutcome">{t("form.desiredOutcomeLabel")}</label>
        <p className="form-hint">{t("form.desiredOutcomeHint")}</p>
        <textarea id="desiredOutcome" name="desiredOutcome" rows={3}></textarea>
      </div>

      <fieldset className="form-row">
        <legend>{t("form.triedBeforeLabel")}</legend>
        <div className="form-choice-group">
          {radio("triedBefore", "yes", "form.yes")}
          {radio("triedBefore", "no", "form.no")}
        </div>
      </fieldset>

      <fieldset className="form-row">
        <legend>{t("form.consultationMethodLabel")}</legend>
        <div className="form-choice-group">
          {radio("consultationMethod", "zoom", "form.zoom")}
          {radio("consultationMethod", "in_person", "form.inPerson")}
        </div>
      </fieldset>

      <button type="submit" className="btn btn--primary" disabled={submitting}>
        <span>{t("form.submit")}</span>
      </button>

      <p
        className="form-status"
        role="status"
        aria-live="polite"
        data-state={status === "success" || status === "error" ? status : undefined}
      >
        {statusText}
      </p>
    </form>
  );
}
