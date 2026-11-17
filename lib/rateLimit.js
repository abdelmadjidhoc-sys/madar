/**
 * Small in-memory rate limiter for login and sign-up. On serverless each warm
 * instance keeps its own counters, so this is a best-effort brake on password
 * guessing, not a hard guarantee.
 */
const hits = new Map();

/** Returns true if `key` has made more than `max` attempts within `windowMs`. */
export function tooManyAttempts(key, max = 8, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((time) => now - time < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((time) => now - time >= windowMs)) hits.delete(k);
    }
  }
  return recent.length > max;
}

export function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for") || "";
  return forwarded.split(",")[0].trim() || "unknown";
}

/** Forgets the attempts for `key` (call after a successful login). */
export function resetAttempts(key) {
  hits.delete(key);
}
