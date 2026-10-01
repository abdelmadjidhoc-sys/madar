/**
 * GET /api/admin/applications            → list (id, name, department, date)
 * GET /api/admin/applications?id=123     → every field for one application,
 *                                          minus the CV bytes
 * GET /api/admin/applications?id=123&cv=1 → downloads that applicant's CV
 *
 * Join-the-team applications (/join → app/api/join/route.js).
 * Admin only: requires the session cookie from /api/admin/login (lib/auth.js).
 */
import { getPool } from "@/lib/db";
import { rejectUnlessAdmin } from "@/lib/auth";

export async function GET(request) {
  const denied = rejectUnlessAdmin(request);
  if (denied) return denied;

  const query = Object.fromEntries(new URL(request.url).searchParams);

  try {
    if (query.id === undefined) {
      const { rows } = await getPool().query(
        `SELECT id, full_name, department, created_at
         FROM join_applications
         ORDER BY created_at DESC`
      );
      return Response.json({ ok: true, applications: rows });
    }

    const id = Number(query.id);
    if (!Number.isInteger(id) || id <= 0) {
      return Response.json({ ok: false, error: "Invalid id" }, { status: 400 });
    }

    if (query.cv) {
      const { rows } = await getPool().query(
        `SELECT cv_filename, cv_mime_type, cv_data FROM join_applications WHERE id = $1`,
        [id]
      );
      if (!rows.length) {
        return Response.json({ ok: false, error: "Not found" }, { status: 404 });
      }
      const { cv_filename, cv_mime_type, cv_data } = rows[0];
      return new Response(cv_data, {
        headers: {
          "Content-Type": cv_mime_type,
          "Content-Disposition": "attachment; filename*=UTF-8''" + encodeURIComponent(cv_filename),
        },
      });
    }

    const { rows } = await getPool().query(
      `SELECT id, full_name, phone, email, age, organization, instagram,
              heard_from, heard_from_other, department, has_experience,
              experience_details, skills, motivation, weekly_hours, field_work,
              cv_filename, created_at
       FROM join_applications WHERE id = $1`,
      [id]
    );
    if (!rows.length) {
      return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    }
    return Response.json({ ok: true, application: rows[0] });
  } catch (err) {
    console.error("admin applications failed", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
