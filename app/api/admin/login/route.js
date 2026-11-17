/**
 * POST /api/admin/login  { email, password }
 * Checks a member's email and password against the members table and, on
 * success, sets the signed session cookie (see lib/auth.js). Every role,
 * visitors included, can log in; what they can see is decided per page/API.
 */
import { cookies } from "next/headers";
import { getPool } from "@/lib/db";
import { SESSION_COOKIE, createSessionToken, sessionCookieOptions } from "@/lib/auth";
import { verifyPassword } from "@/lib/password";
import { clientIp, resetAttempts, tooManyAttempts } from "@/lib/rateLimit";

// A real hash to compare against when the email is unknown, so both cases take equally long.
const DUMMY_HASH = "scrypt$" + "00".repeat(16) + "$" + "00".repeat(64);

export async function POST(request) {
  if (tooManyAttempts("login:" + clientIp(request))) {
    return Response.json({ ok: false, error: "tooMany" }, { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!email || !password) {
    return Response.json({ ok: false, error: "invalid" }, { status: 401 });
  }

  let member;
  try {
    const { rows } = await getPool().query(
      "SELECT id, password_hash, is_active FROM members WHERE email = $1",
      [email]
    );
    member = rows[0];
  } catch (e) {
    console.error("login failed", e);
    return Response.json({ ok: false, error: "server" }, { status: 500 });
  }

  const passwordOk = verifyPassword(password, member ? member.password_hash : DUMMY_HASH);
  if (!member || !passwordOk) {
    return Response.json({ ok: false, error: "invalid" }, { status: 401 });
  }
  if (!member.is_active) {
    return Response.json({ ok: false, error: "inactive" }, { status: 403 });
  }

  resetAttempts("login:" + clientIp(request));
  await getPool().query("UPDATE members SET last_login_at = now() WHERE id = $1", [member.id]);
  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionToken(member.id), sessionCookieOptions());
  return Response.json({ ok: true });
}
