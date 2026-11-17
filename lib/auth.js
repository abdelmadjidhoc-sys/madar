/**
 * Member sessions for the team backend (/adminmadar).
 *
 * A successful login sets an httpOnly cookie holding the member id and an
 * expiry, signed with HMAC-SHA256 using ADMIN_SESSION_SECRET. The signature
 * only proves the cookie is ours: every real check goes back to the database
 * (getMember), so a role change or deactivation applies on the next request.
 *
 * Fails closed: without ADMIN_SESSION_SECRET no session is ever valid.
 */
import { createHmac, timingSafeEqual, createHash } from "node:crypto";
import { getPool } from "./db";
import { canSeeRequests } from "./roles";

export const SESSION_COOKIE = "madar_admin_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

function secret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

function sign(value) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

/** Constant-time string comparison (hashing first makes the lengths equal). */
function safeEqual(a, b) {
  const ha = createHash("sha256").update(String(a)).digest();
  const hb = createHash("sha256").update(String(b)).digest();
  return timingSafeEqual(ha, hb);
}

export function createSessionToken(memberId) {
  const payload = Buffer.from(
    JSON.stringify({ m: memberId, exp: Date.now() + SESSION_MAX_AGE * 1000 })
  ).toString("base64url");
  return payload + "." + sign(payload);
}

/** Returns the member id for a correctly signed, unexpired token, otherwise null. */
export function verifySessionToken(token) {
  if (!secret() || typeof token !== "string") return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return null;
  try {
    const { m, exp } = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (typeof exp !== "number" || exp < Date.now() || !Number.isInteger(m)) return null;
    return m;
  } catch (e) {
    return null;
  }
}

/** Member id from the session cookie of an incoming Request (signature check only, no database). */
export function getSessionMemberId(request) {
  // Parse the header properly: the session cookie can be anywhere in it, not only first.
  const cookie = request.headers.get("cookie") || "";
  for (const part of cookie.split(";")) {
    const index = part.indexOf("=");
    if (index > -1 && part.slice(0, index).trim() === SESSION_COOKIE) {
      return verifySessionToken(decodeURIComponent(part.slice(index + 1).trim()));
    }
  }
  return null;
}

const MEMBER_COLUMNS =
  "id, full_name, email, role, is_active, created_at";

/** Loads an active member by id from the database, or null. */
export async function getMemberById(id) {
  if (!Number.isInteger(id)) return null;
  const { rows } = await getPool().query(
    "SELECT " + MEMBER_COLUMNS + " FROM members WHERE id = $1 AND is_active = true",
    [id]
  );
  return rows[0] || null;
}

/** The logged-in member for an API Request (fresh from the database), or null. */
export async function getMember(request) {
  return getMemberById(getSessionMemberId(request));
}

/**
 * For API handlers: loads the member and checks `allowed(role)`.
 * Returns { member } on success, or { denied } with an Arabic error Response to return early.
 */
export async function authorize(request, allowed) {
  let member = null;
  try {
    member = await getMember(request);
  } catch (e) {
    return { denied: Response.json({ ok: false, error: "حدث خطأ. حاول مرة أخرى" }, { status: 500 }) };
  }
  if (!member) {
    return { denied: Response.json({ ok: false, error: "انتهت الجلسة. سجّل الدخول من جديد" }, { status: 401 }) };
  }
  if (!allowed(member.role)) {
    return { denied: Response.json({ ok: false, error: "لا تملك صلاحية لهذا الإجراء" }, { status: 403 }) };
  }
  return { member };
}

/**
 * For the join-applications and contact-messages APIs: a Response to return
 * early unless the member is the CEO or the system admin (مدير النظام).
 */
export async function rejectUnlessRequestsAccess(request) {
  const { denied } = await authorize(request, canSeeRequests);
  return denied || null;
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  };
}
