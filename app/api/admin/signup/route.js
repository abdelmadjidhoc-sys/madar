/**
 * POST /api/admin/signup  { fullName, email, password }
 * Creates a member with the role "visitor" (no access to club data) and logs
 * them in. A مسؤول or the CEO promotes them later from the members page.
 */
import { cookies } from "next/headers";
import { getPool } from "@/lib/db";
import { SESSION_COOKIE, createSessionToken, sessionCookieOptions } from "@/lib/auth";
import { hashPassword } from "@/lib/password";
import { clientIp, tooManyAttempts } from "@/lib/rateLimit";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  if (tooManyAttempts("signup:" + clientIp(request), 5)) {
    return Response.json({ ok: false, error: "tooMany" }, { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (fullName.length < 2 || fullName.length > 100) return invalid("fullName");
  if (!EMAIL_PATTERN.test(email) || email.length > 200) return invalid("email");
  if (password.length < 8 || password.length > 200) return invalid("password");

  let id;
  try {
    const { rows } = await getPool().query(
      `INSERT INTO members (full_name, email, password_hash, role)
       VALUES ($1, $2, $3, 'visitor')
       ON CONFLICT (email) DO NOTHING
       RETURNING id`,
      [fullName, email, hashPassword(password)]
    );
    if (!rows[0]) return Response.json({ ok: false, error: "emailTaken" }, { status: 409 });
    id = rows[0].id;
  } catch (e) {
    console.error("signup failed", e);
    return Response.json({ ok: false, error: "server" }, { status: 500 });
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionToken(id), sessionCookieOptions());
  return Response.json({ ok: true });
}

function invalid(field) {
  return Response.json({ ok: false, error: "invalid", field }, { status: 400 });
}
