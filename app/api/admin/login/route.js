/**
 * POST /api/admin/login  { username, password }
 * Checks the credentials against ADMIN_USERNAME / ADMIN_PASSWORD and, on
 * success, sets the signed admin session cookie (see lib/auth.js).
 */
import { cookies } from "next/headers";
import {
  SESSION_COOKIE,
  checkCredentials,
  createSessionToken,
  sessionCookieOptions,
} from "@/lib/auth";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const username = typeof body.username === "string" ? body.username.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!checkCredentials(username, password)) {
    // Small fixed delay to slow down password guessing.
    await new Promise((resolve) => setTimeout(resolve, 800));
    return Response.json({ ok: false, error: "Invalid username or password" }, { status: 401 });
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionToken(username), sessionCookieOptions());
  return Response.json({ ok: true });
}
