/**
 * Guards the team backend. Anyone without a correctly signed session cookie is
 * sent to the login page (pages) or gets a 401 (API). The login and sign-up
 * pages and endpoints stay open. This only checks the cookie signature (the
 * proxy doesn't touch the database); the pages and every API handler load the
 * member from the database and check their role (lib/auth.js), so this is
 * not the only line of defense.
 */
import { NextResponse } from "next/server";
import { getSessionMemberId } from "@/lib/auth";

const OPEN_PATHS = [
  "/adminmadar/login",
  "/adminmadar/signup",
  "/api/admin/login",
  "/api/admin/signup",
  "/api/admin/logout",
];

export function proxy(request) {
  const { pathname } = request.nextUrl;
  if (OPEN_PATHS.includes(pathname) || getSessionMemberId(request) !== null) {
    return NextResponse.next();
  }

  // CV links are opened straight from the Excel export: log in, then come back to the file.
  const { searchParams } = request.nextUrl;
  if (pathname === "/api/admin/applications" && searchParams.has("cv")) {
    const login = new URL("/adminmadar/login", request.url);
    login.searchParams.set("next", pathname + "?" + searchParams.toString());
    return NextResponse.redirect(login);
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.redirect(new URL("/adminmadar/login", request.url));
}

export const config = {
  matcher: ["/adminmadar/:path*", "/api/admin/:path*"],
};
