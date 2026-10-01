/**
 * Guards the admin area. Anyone without a valid admin session cookie is sent
 * to the login page (pages) or gets a 401 (API). The login page and the
 * login/logout endpoints stay open. Each admin API handler also checks the session itself
 * (lib/auth.js → rejectUnlessAdmin), so this isn't the only line of defense.
 */
import { NextResponse } from "next/server";
import { getAdmin } from "@/lib/auth";

const OPEN_PATHS = ["/adminmadar/login", "/api/admin/login", "/api/admin/logout"];

export function proxy(request) {
  const { pathname } = request.nextUrl;
  if (OPEN_PATHS.includes(pathname) || getAdmin(request)) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.redirect(new URL("/adminmadar/login", request.url));
}

export const config = {
  matcher: ["/adminmadar/:path*", "/api/admin/:path*"],
};
