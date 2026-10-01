/**
 * GET /api/admin/submission?id=123
 * Returns every field for one submission (the detail view).
 * Admin only: requires the session cookie from /api/admin/login (lib/auth.js).
 */
import { getPool } from "@/lib/db";
import { rejectUnlessAdmin } from "@/lib/auth";

export async function GET(request) {
  const denied = rejectUnlessAdmin(request);
  if (denied) return denied;

  const id = Number(new URL(request.url).searchParams.get("id"));
  if (!Number.isInteger(id) || id <= 0) {
    return Response.json({ ok: false, error: "Invalid id" }, { status: 400 });
  }

  try {
    const { rows } = await getPool().query(
      `SELECT * FROM contact_submissions WHERE id = $1`,
      [id]
    );
    if (!rows.length) {
      return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    }
    return Response.json({ ok: true, submission: rows[0] });
  } catch (err) {
    console.error("admin submission detail failed", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
