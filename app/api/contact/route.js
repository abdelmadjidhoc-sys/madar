/**
 * POST /api/contact (Next.js route handler)
 * Saves a Contact-section session/inquiry request to Postgres (Neon).
 *
 * DATABASE_URL must be set as an environment variable (Vercel project
 * settings in production; a local .env — see .env.example — for `npm run dev`).
 * Run `npm run setup-db` once against a fresh database before using this.
 */
import { getPool } from "@/lib/db";

const AGE_RANGES = ["15-17", "18-21", "22-25", "26-31"];
const STATUSES = ["school_student", "university_student", "employed", "job_seeker", "other"];
const CONSULTATION_METHODS = ["zoom", "in_person"];

function clean(value, maxLength) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, maxLength);
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));

  // Honeypot: a hidden field real visitors never fill in.
  if (clean(body.company, 200)) {
    return Response.json({ ok: true });
  }

  const fullName = clean(body.fullName, 200);
  const phone = clean(body.phone, 50);
  const ageRange = AGE_RANGES.includes(body.ageRange) ? body.ageRange : null;
  const currentStatus = STATUSES.includes(body.currentStatus) ? body.currentStatus : null;
  const currentStatusOther = currentStatus === "other" ? clean(body.currentStatusOther, 200) : null;
  const email = clean(body.email, 200);
  const guidanceField = clean(body.guidanceField, 500);
  const mainChallenge = clean(body.mainChallenge, 2000);
  const desiredOutcome = clean(body.desiredOutcome, 2000);
  const triedBefore = body.triedBefore === true || body.triedBefore === false ? body.triedBefore : null;
  const consultationMethod = CONSULTATION_METHODS.includes(body.consultationMethod)
    ? body.consultationMethod
    : null;

  if (!fullName || !phone || !ageRange || !currentStatus) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  try {
    await getPool().query(
      `INSERT INTO contact_submissions
        (full_name, phone, age_range, current_status, current_status_other,
         email, guidance_field, main_challenge, desired_outcome, tried_before,
         consultation_method)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        fullName,
        phone,
        ageRange,
        currentStatus,
        currentStatusOther,
        email,
        guidanceField,
        mainChallenge,
        desiredOutcome,
        triedBefore,
        consultationMethod,
      ]
    );
    return Response.json({ ok: true });
  } catch (err) {
    console.error("contact insert failed", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
