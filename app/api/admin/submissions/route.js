/**
 * GET /api/admin/submissions
 * Returns the list for the admin table: id, name, and date only (full detail
 * is a separate request — see ../submission/route.js — so the list stays light).
 * Admin only: requires the session cookie from /api/admin/login (lib/auth.js).
 */
import { getPool } from "@/lib/db";
import { rejectUnlessAdmin } from "@/lib/auth";

// Always query live; never prerender this at build time.
export const dynamic = "force-dynamic";

export async function GET(request) {
  const denied = rejectUnlessAdmin(request);
  if (denied) return denied;

  try {
    const { rows } = await getPool().query(
      `SELECT id, full_name, phone, created_at
       FROM contact_submissions
       ORDER BY created_at DESC`
    );
    return Response.json({ ok: true, submissions: rows });
  } catch (err) {
    console.error("admin submissions list failed", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
