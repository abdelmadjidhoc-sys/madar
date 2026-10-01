/**
 * Admin login for /adminmadar. A single admin account whose username and
 * password come from environment variables (ADMIN_USERNAME, ADMIN_PASSWORD).
 * A successful login sets an httpOnly cookie that holds the username and an
 * expiry, signed with HMAC-SHA256 using ADMIN_SESSION_SECRET. Nothing is
 * stored server-side.
 *
 * Fails closed: if any of the three variables is missing, nobody can log in
 * and every session is rejected.
 */
import { createHmac, timingSafeEqual, createHash } from "node:crypto";

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

function configured() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD && secret());
}

export function checkCredentials(username, password) {
  if (!configured()) return false;
  // Evaluate both so a wrong username takes as long as a wrong password.
  const userOk = safeEqual(username, process.env.ADMIN_USERNAME);
  const passOk = safeEqual(password, process.env.ADMIN_PASSWORD);
  return userOk && passOk;
}

export function createSessionToken(username) {
  const payload = Buffer.from(
    JSON.stringify({ u: username, exp: Date.now() + SESSION_MAX_AGE * 1000 })
  ).toString("base64url");
  return payload + "." + sign(payload);
}

/** Returns the username for a valid, unexpired token, otherwise null. */
export function verifySessionToken(token) {
  if (!configured() || typeof token !== "string") return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return null;
  try {
    const { u, exp } = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (typeof exp !== "number" || exp < Date.now()) return null;
    return u;
  } catch (e) {
    return null;
  }
}

/** Username of the logged-in admin for an incoming Request, or null. */
export function getAdmin(request) {
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(new RegExp("(?:^|;\\s*)" + SESSION_COOKIE + "=([^;]+)"));
  return match ? verifySessionToken(decodeURIComponent(match[1])) : null;
}

/** For admin API handlers: a 401 Response to return early, or null if logged in. */
export function rejectUnlessAdmin(request) {
  return getAdmin(request) ? null : Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
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
