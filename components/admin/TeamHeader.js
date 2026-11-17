"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Top bar of the team backend: logo, navigation (by role), name and logout. */
export default function TeamHeader({ name, roleLabel, isAdmin, showRequests }) {
  const pathname = usePathname();

  const links = [
    ["/adminmadar", "الرئيسية", true],
    ["/adminmadar/coverages", "التغطيات", false],
    ...(isAdmin ? [["/adminmadar/members", "الأعضاء", false]] : []),
    ...(showRequests ? [["/adminmadar/requests", "الطلبات والرسائل", false]] : []),
    ["/adminmadar/account", "حسابي", false],
  ];

  function isCurrent(href, exact) {
    return exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");
  }

  function logOut() {
    fetch("/api/admin/logout", { method: "POST" }).finally(() => {
      window.location.href = "/adminmadar/login";
    });
  }

  return (
    <header className="team-header">
      <div className="team-header-inner">
        <a className="team-logo" href="/" aria-label="العودة إلى موقع مدار">
          <img src="/assets/images/logo-on-dark.svg" alt="مدار" />
        </a>

        <nav className="team-nav" aria-label="التنقل الرئيسي">
          {links.map(([href, label, exact]) => (
            <Link key={href} href={href} aria-current={isCurrent(href, exact) ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="team-whoami">
          <span className="team-whoami-name">
            {name} <span className="team-whoami-role">({roleLabel})</span>
          </span>
          <button className="admin-switch-link" type="button" onClick={logOut}>
            تسجيل الخروج
          </button>
        </div>
      </div>
    </header>
  );
}
