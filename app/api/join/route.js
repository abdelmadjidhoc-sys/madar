/**
 * POST /api/join (Next.js route handler)
 * Saves a "Join the Madar team" application (/join) to Postgres (Neon),
 * including the applicant's CV, which arrives base64-encoded in the JSON body
 * and is stored as BYTEA in the same row.
 *
 * DATABASE_URL must be set as an environment variable. Run `npm run setup-db`
 * once to create the join_applications table.
 */
import { getPool } from "@/lib/db";

const HEARD_FROM = ["instagram", "tiktok", "youtube", "whatsapp_aflak", "friend", "madar_event", "other"];
const DEPARTMENTS = ["media_coverage", "opportunities", "pr_partnerships", "events"];
const WEEKLY_HOURS = ["lt3", "3-5", "5-10", "gt10"];
const FIELD_WORK = ["yes", "no", "depends"];
const CV_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const CV_EXTENSIONS = /\.(pdf|docx?)$/i;
const CV_MAX_BYTES = 3 * 1024 * 1024;

function clean(value, maxLength) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, maxLength);
}

function pick(value, allowed) {
  return allowed.includes(value) ? value : null;
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));

  // Honeypot: a hidden field real visitors never fill in.
  if (clean(body.company, 200)) {
    return Response.json({ ok: true });
  }

  const fullName = clean(body.fullName, 200);
  const phone = clean(body.phone, 50);
  const email = clean(body.email, 200);
  const age = Number.isInteger(body.age) && body.age >= 10 && body.age <= 99 ? body.age : null;
  const organization = clean(body.organization, 200);
  const instagram = clean(body.instagram, 100);
  const heardFrom = pick(body.heardFrom, HEARD_FROM);
  const heardFromOther = heardFrom === "other" ? clean(body.heardFromOther, 200) : null;
  const department = pick(body.department, DEPARTMENTS);
  const hasExperience = body.hasExperience === true || body.hasExperience === false ? body.hasExperience : null;
  const experienceDetails = hasExperience ? clean(body.experienceDetails, 2000) : null;
  const skills = clean(body.skills, 2000);
  const motivation = clean(body.motivation, 2000);
  const weeklyHours = pick(body.weeklyHours, WEEKLY_HOURS);
  const fieldWork = pick(body.fieldWork, FIELD_WORK);

  const cvFilename = clean(body.cvFilename, 200);
  const cvMimeType = typeof body.cvMimeType === "string" ? body.cvMimeType : "";
  const cvData = typeof body.cvBase64 === "string" ? Buffer.from(body.cvBase64, "base64") : null;
  const cvValid =
    cvFilename &&
    CV_EXTENSIONS.test(cvFilename) &&
    (!cvMimeType || CV_MIME_TYPES.includes(cvMimeType)) &&
    cvData &&
    cvData.length > 0 &&
    cvData.length <= CV_MAX_BYTES;

  if (
    !fullName ||
    !phone ||
    !email ||
    !age ||
    !heardFrom ||
    !department ||
    hasExperience === null ||
    !skills ||
    !motivation ||
    !weeklyHours ||
    !fieldWork ||
    body.declaration !== true ||
    !cvValid
  ) {
    return Response.json({ ok: false, error: "Missing or invalid fields" }, { status: 400 });
  }

  try {
    await getPool().query(
      `INSERT INTO join_applications
        (full_name, phone, email, age, organization, instagram, heard_from,
         heard_from_other, department, has_experience, experience_details,
         skills, motivation, weekly_hours, field_work, cv_filename,
         cv_mime_type, cv_data)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)`,
      [
        fullName,
        phone,
        email,
        age,
        organization,
        instagram,
        heardFrom,
        heardFromOther,
        department,
        hasExperience,
        experienceDetails,
        skills,
        motivation,
        weeklyHours,
        fieldWork,
        cvFilename,
        cvMimeType || "application/octet-stream",
        cvData,
      ]
    );
    return Response.json({ ok: true });
  } catch (err) {
    console.error("join insert failed", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
