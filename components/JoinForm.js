"use client";

import { useState } from "react";
import { useLang } from "./LanguageProvider";

// Keeps the base64 JSON body under Vercel's 4.5 MB function body limit.
const CV_MAX_BYTES = 3 * 1024 * 1024;

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // Strip the "data:<mime>;base64," prefix
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * "Join the Madar team" application. Posts to /api/join
 * (app/api/join/route.js → Postgres/Neon, table join_applications). The CV
 * is sent base64-encoded in the JSON body and stored as BYTEA.
 */
export default function JoinForm() {
  const { t } = useLang();
  const [heardOther, setHeardOther] = useState(false);
  const [hasExperience, setHasExperience] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "heardFrom") setHeardOther(value === "other");
    if (name === "hasExperience") setHasExperience(value === "yes");
    if (name === "cv") {
      const file = event.target.files[0];
      event.target.setCustomValidity(file && file.size > CV_MAX_BYTES ? t("joinForm.cvTooLarge") : "");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const cvFile = data.get("cv");

    setSubmitting(true);
    setStatus("sending");

    readFileAsBase64(cvFile)
      .then((cvBase64) =>
        fetch("/api/join", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: data.get("company"), // honeypot
            fullName: data.get("fullName"),
            phone: data.get("phone"),
            email: data.get("email"),
            age: Number(data.get("age")),
            organization: data.get("organization"),
            instagram: data.get("instagram"),
            heardFrom: data.get("heardFrom"),
            heardFromOther: data.get("heardFromOther"),
            department: data.get("department"),
            hasExperience: data.get("hasExperience") === "yes",
            experienceDetails: data.get("experienceDetails"),
            skills: data.get("skills"),
            motivation: data.get("motivation"),
            weeklyHours: data.get("weeklyHours"),
            fieldWork: data.get("fieldWork"),
            declaration: data.get("declaration") === "yes",
            cvFilename: cvFile.name,
            cvMimeType: cvFile.type,
            cvBase64,
          }),
        })
      )
      .then((res) => {
        if (!res.ok) throw new Error("request failed");
        return res.json();
      })
      .then(() => {
        setStatus("success");
        form.reset();
        setHeardOther(false);
        setHasExperience(false);
      })
      .catch(() => setStatus("error"))
      .finally(() => setSubmitting(false));
  }

  const statusText = {
    sending: t("joinForm.submitting"),
    success: t("joinForm.successMessage"),
    error: t("joinForm.errorMessage"),
  }[status];

  const optional = <span className="form-optional">{t("joinForm.optional")}</span>;

  // `label` is a content key, or a literal for brand names (Instagram, TikTok…)
  const radio = (name, value, label, extra = {}) => (
    <label className="form-choice" key={value}>
      <input type="radio" name={name} value={value} {...extra} />
      <span>{label.indexOf(".") > -1 ? t(label) : label}</span>
    </label>
  );

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit} onChange={handleChange}>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <h2 className="form-section-title">{t("joinForm.personalHeading")}</h2>

      <div className="form-row">
        <label htmlFor="fullName">{t("joinForm.fullNameLabel")}</label>
        <p className="form-hint">{t("joinForm.fullNameHint")}</p>
        <input type="text" id="fullName" name="fullName" autoComplete="name" required />
      </div>

      <div className="form-row">
        <label htmlFor="phone">{t("joinForm.phoneLabel")}</label>
        <p className="form-hint">{t("joinForm.phoneHint")}</p>
        <input type="tel" id="phone" name="phone" autoComplete="tel" required />
      </div>

      <div className="form-row">
        <label htmlFor="email">{t("joinForm.emailLabel")}</label>
        <input type="email" id="email" name="email" autoComplete="email" required />
      </div>

      <div className="form-row">
        <label htmlFor="age">{t("joinForm.ageLabel")}</label>
        <input type="number" id="age" name="age" min={10} max={99} inputMode="numeric" required />
      </div>

      <div className="form-row">
        <label htmlFor="organization">
          <span>{t("joinForm.organizationLabel")}</span>
          {optional}
        </label>
        <input type="text" id="organization" name="organization" />
      </div>

      <div className="form-row">
        <label htmlFor="instagram">
          <span>{t("joinForm.instagramLabel")}</span>
          {optional}
        </label>
        <input type="text" id="instagram" name="instagram" dir="ltr" placeholder="@" />
      </div>

      <h2 className="form-section-title">{t("joinForm.joiningHeading")}</h2>

      <fieldset className="form-row">
        <legend>{t("joinForm.heardFromLabel")}</legend>
        <div className="form-choice-group form-choice-group--stacked">
          {radio("heardFrom", "instagram", "Instagram", { required: true })}
          {radio("heardFrom", "tiktok", "TikTok")}
          {radio("heardFrom", "youtube", "YouTube")}
          {radio("heardFrom", "whatsapp_aflak", "joinForm.heardWhatsapp")}
          {radio("heardFrom", "friend", "joinForm.heardFriend")}
          {radio("heardFrom", "madar_event", "joinForm.heardEvent")}
          {radio("heardFrom", "other", "joinForm.heardOther")}
        </div>
        {heardOther && (
          <input
            type="text"
            id="heardFromOther"
            name="heardFromOther"
            className="form-other-input"
            placeholder={t("joinForm.otherPlaceholder")}
          />
        )}
      </fieldset>

      <fieldset className="form-row">
        <legend>{t("joinForm.departmentLabel")}</legend>
        <p className="form-hint">{t("joinForm.departmentHint")}</p>
        <div className="form-choice-group form-choice-group--stacked">
          {radio("department", "media_coverage", "joinForm.deptMedia", { required: true })}
          {radio("department", "opportunities", "joinForm.deptOpportunities")}
          {radio("department", "pr_partnerships", "joinForm.deptPr")}
          {radio("department", "events", "joinForm.deptEvents")}
        </div>
      </fieldset>

      <fieldset className="form-row">
        <legend>{t("joinForm.hasExperienceLabel")}</legend>
        <div className="form-choice-group">
          {radio("hasExperience", "yes", "joinForm.yes", { required: true })}
          {radio("hasExperience", "no", "joinForm.no")}
        </div>
      </fieldset>

      {hasExperience && (
        <div className="form-row">
          <label htmlFor="experienceDetails">
            <span>{t("joinForm.experienceDetailsLabel")}</span>
            {optional}
          </label>
          <textarea id="experienceDetails" name="experienceDetails" rows={3}></textarea>
        </div>
      )}

      <div className="form-row">
        <label htmlFor="skills">{t("joinForm.skillsLabel")}</label>
        <textarea id="skills" name="skills" rows={3} required></textarea>
      </div>

      <div className="form-row">
        <label htmlFor="motivation">{t("joinForm.motivationLabel")}</label>
        <textarea id="motivation" name="motivation" rows={3} required></textarea>
      </div>

      <fieldset className="form-row">
        <legend>{t("joinForm.weeklyHoursLabel")}</legend>
        <div className="form-choice-group form-choice-group--stacked">
          {radio("weeklyHours", "lt3", "joinForm.hoursLt3", { required: true })}
          {radio("weeklyHours", "3-5", "joinForm.hours3to5")}
          {radio("weeklyHours", "5-10", "joinForm.hours5to10")}
          {radio("weeklyHours", "gt10", "joinForm.hoursGt10")}
        </div>
      </fieldset>

      <fieldset className="form-row">
        <legend>{t("joinForm.fieldWorkLabel")}</legend>
        <div className="form-choice-group form-choice-group--stacked">
          {radio("fieldWork", "yes", "joinForm.yes", { required: true })}
          {radio("fieldWork", "no", "joinForm.no")}
          {radio("fieldWork", "depends", "joinForm.fieldWorkDepends")}
        </div>
      </fieldset>

      <div className="form-row">
        <label htmlFor="cv">{t("joinForm.cvLabel")}</label>
        <p className="form-hint">{t("joinForm.cvHint")}</p>
        <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          required
        />
      </div>

      <fieldset className="form-row">
        <legend>{t("joinForm.declarationHeading")}</legend>
        <label className="form-choice form-choice--declaration">
          <input type="checkbox" name="declaration" value="yes" required />
          <span>{t("joinForm.declarationText")}</span>
        </label>
      </fieldset>

      <button type="submit" className="btn btn--primary" disabled={submitting}>
        <span>{t("joinForm.submit")}</span>
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
