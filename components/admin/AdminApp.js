"use client";

/**
 * Madar admin — submissions table + detail view, in Arabic (default) or
 * English. Talks to /api/admin/submissions + /api/admin/submission?id=
 * (session requests) and /api/admin/applications (join applications). Only
 * reachable when logged in — see proxy.js and lib/auth.js.
 *
 * All labels come from lib/content.js: admin.* for the dashboard itself,
 * and form.* / joinForm.* so each answer reads exactly as it did in the form.
 */
import { Fragment, useCallback, useEffect, useState } from "react";
import { DocumentTitle, useLang } from "../LanguageProvider";

// Stored value → content key of the label the applicant saw.
const AGE_RANGE_KEYS = {
  "15-17": "form.age1517",
  "18-21": "form.age1821",
  "22-25": "form.age2225",
  "26-31": "form.age2631",
};

const STATUS_KEYS = {
  school_student: "form.statusSchool",
  university_student: "form.statusUniversity",
  employed: "form.statusEmployed",
  job_seeker: "form.statusJobSeeker",
  other: "form.statusOther",
};

const CONSULTATION_KEYS = {
  zoom: "form.zoom",
  in_person: "form.inPerson",
};

const DEPARTMENT_KEYS = {
  media_coverage: "joinForm.deptMedia",
  opportunities: "joinForm.deptOpportunities",
  pr_partnerships: "joinForm.deptPr",
  events: "joinForm.deptEvents",
};

// Brand names are shown as-is; the rest are content keys.
const HEARD_FROM_LABELS = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  whatsapp_aflak: "joinForm.heardWhatsapp",
  friend: "joinForm.heardFriend",
  madar_event: "joinForm.heardEvent",
  other: "joinForm.heardOther",
};

const WEEKLY_HOURS_KEYS = {
  lt3: "joinForm.hoursLt3",
  "3-5": "joinForm.hours3to5",
  "5-10": "joinForm.hours5to10",
  gt10: "joinForm.hoursGt10",
};

const FIELD_WORK_KEYS = {
  yes: "joinForm.yes",
  no: "joinForm.no",
  depends: "joinForm.fieldWorkDepends",
};

function formatDate(iso, lang) {
  // Latin digits in both languages, to match phone numbers and ages.
  return new Date(iso).toLocaleString(lang === "ar" ? "ar-QA-u-nu-latn" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminApp({ username }) {
  const { lang, setLang, t } = useLang();
  // "sessions" = /contact requests, "applications" = /join applications
  const [view, setView] = useState("sessions");
  const [rows, setRows] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [detail, setDetail] = useState(null); // { type, record }

  useEffect(() => {
    setRows(null);
    setLoadError(false);
    const isApplications = view === "applications";
    fetch(isApplications ? "/api/admin/applications" : "/api/admin/submissions")
      .then((res) => {
        if (res.status === 401) {
          // Session expired — back to the login page.
          window.location.href = "/adminmadar/login";
          return null;
        }
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((data) => data && setRows(isApplications ? data.applications : data.submissions))
      .catch(() => setLoadError(true));
  }, [view]);

  const closeDetail = useCallback(() => setDetail(null), []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") closeDetail();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeDetail]);

  function logOut() {
    fetch("/api/admin/logout", { method: "POST" }).finally(() => {
      window.location.href = "/adminmadar/login";
    });
  }

  function openDetail(id) {
    const isApplications = view === "applications";
    const url = isApplications
      ? "/api/admin/applications?id=" + encodeURIComponent(id)
      : "/api/admin/submission?id=" + encodeURIComponent(id);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((data) => {
        setDetail({
          type: view,
          record: isApplications ? data.application : data.submission,
        });
      })
      .catch(() => {
        alert(t("admin.detailError"));
      });
  }

  /** Label for a stored choice value: the form's own wording, or the raw value if unknown. */
  const choice = (map, value) => {
    const label = map[value];
    if (!label) return value;
    return label.indexOf(".") > -1 ? t(label) : label;
  };
  const yesNo = (value) => (value === true ? t("joinForm.yes") : value === false ? t("joinForm.no") : "—");
  const field = (key) => t("admin.fields." + key);

  /** [label, value] pairs for the detail dialog; empty values are skipped when rendering. */
  function sessionFields(s) {
    return [
      [field("submittedAt"), formatDate(s.created_at, lang)],
      [field("phone"), s.phone],
      [field("email"), s.email],
      [field("ageRange"), choice(AGE_RANGE_KEYS, s.age_range)],
      [
        field("currentStatus"),
        choice(STATUS_KEYS, s.current_status) + (s.current_status_other ? " — " + s.current_status_other : ""),
      ],
      [field("guidanceField"), s.guidance_field],
      [field("mainChallenge"), s.main_challenge],
      [field("desiredOutcome"), s.desired_outcome],
      [field("triedBefore"), s.tried_before === null ? null : yesNo(s.tried_before)],
      [field("consultationMethod"), s.consultation_method && choice(CONSULTATION_KEYS, s.consultation_method)],
    ];
  }

  function applicationFields(a) {
    return [
      [field("submittedAt"), formatDate(a.created_at, lang)],
      [field("phone"), a.phone],
      [field("email"), a.email],
      [field("age"), a.age],
      [field("organization"), a.organization],
      [field("instagram"), a.instagram],
      [
        field("heardFrom"),
        choice(HEARD_FROM_LABELS, a.heard_from) + (a.heard_from_other ? " — " + a.heard_from_other : ""),
      ],
      [field("department"), choice(DEPARTMENT_KEYS, a.department)],
      [field("hasExperience"), yesNo(a.has_experience)],
      [field("experienceDetails"), a.experience_details],
      [field("skills"), a.skills],
      [field("motivation"), a.motivation],
      [field("weeklyHours"), choice(WEEKLY_HOURS_KEYS, a.weekly_hours)],
      [field("fieldWork"), choice(FIELD_WORK_KEYS, a.field_work)],
      [
        field("cv"),
        <a className="admin-cv-link" href={"/api/admin/applications?id=" + encodeURIComponent(a.id) + "&cv=1"}>
          {a.cv_filename}
        </a>,
      ],
    ];
  }

  const isApplications = view === "applications";
  let statusText = "";
  if (loadError) statusText = t("admin.loadError");
  else if (!rows) statusText = t("admin.loading");
  else if (!rows.length) statusText = isApplications ? t("admin.emptyApplications") : t("admin.emptySessions");

  const detailFields = detail
    ? (detail.type === "applications" ? applicationFields : sessionFields)(detail.record)
    : [];

  return (
    <div>
      <DocumentTitle titleKey="admin.metaTitle" />

      <header className="admin-header">
        <div className="admin-header-inner">
          {/* Plain <a>, not next/link: the site uses a different root layout + stylesheet */}
          <a href="/" aria-label={t("admin.backToSite")}>
            <img className="admin-logo" src="/assets/images/logo-on-dark.svg" alt={t("brand.name")} />
          </a>
          <h1>{t("admin.heading")}</h1>
          <p className="admin-whoami">
            <button className="admin-lang-toggle" type="button" onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
              {t("nav.langToggle")}
            </button>
            <span dir="ltr">{username}</span>
            <button className="admin-switch-link" type="button" onClick={logOut}>
              {t("admin.logOut")}
            </button>
          </p>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-tabs" role="tablist">
          {[
            ["sessions", t("admin.tabSessions")],
            ["applications", t("admin.tabApplications")],
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

        <h2 className="admin-title">
          {(isApplications ? t("admin.tabApplications") : t("admin.tabSessions")) +
            (rows ? " (" + rows.length + ")" : "")}
        </h2>
        <p className="admin-status">{statusText}</p>

        <div className="admin-card">
          {rows && rows.length > 0 && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>{t("admin.colName")}</th>
                  <th>{t("admin.colDate")}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} tabIndex={0} onClick={() => openDetail(row.id)}>
                    <td>
                      <div className="admin-name-cell">
                        <span className="admin-avatar">{row.full_name.trim().charAt(0).toUpperCase()}</span>
                        <span>{row.full_name}</span>
                        {row.department && (
                          <span className="admin-date-cell">· {choice(DEPARTMENT_KEYS, row.department)}</span>
                        )}
                      </div>
                    </td>
                    <td className="admin-date-cell">{formatDate(row.created_at, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {detail && (
        <div
          className="admin-detail-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeDetail();
          }}
        >
          <div className="admin-detail" role="dialog" aria-modal="true" aria-labelledby="detailName">
            <button className="admin-detail-close" type="button" aria-label={t("admin.close")} onClick={closeDetail}>
              ✕
            </button>
            <h2 id="detailName">{detail.record.full_name}</h2>
            <dl className="admin-detail-fields">
              {detailFields
                .filter(([, value]) => value !== null && value !== undefined && value !== "")
                .map(([label, value]) => (
                  <Fragment key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </Fragment>
                ))}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
