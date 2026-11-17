"use client";

/**
 * Simple centred page for logged-in members who don't have the full
 * dashboard: the waiting page for a زائر, and (until the coverages pages are
 * built) a placeholder for a عضو.
 */
export default function MemberShell({ name, roleLabel, title, children }) {
  function logOut() {
    fetch("/api/admin/logout", { method: "POST" }).finally(() => {
      window.location.href = "/adminmadar/login";
    });
  }

  return (
    <div className="admin-picker">
      <img className="admin-picker-logo" src="/assets/images/logo-on-dark.svg" alt="مدار" />
      <div className="admin-login">
        <h1 className="admin-login-title">{title}</h1>
        <p className="admin-shell-text">
          أهلًا {name} <span className="admin-shell-role">({roleLabel})</span>
        </p>
        <div className="admin-shell-text">{children}</div>
        <button className="admin-picker-btn" type="button" onClick={logOut}>
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}
