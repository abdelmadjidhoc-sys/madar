/**
 * GET /api/admin/submission?id=123    → every field for one submission (the detail view)
 * DELETE /api/admin/submission?id=123 → removes that submission
 * Admin only: requires the session cookie from /api/admin/login (lib/auth.js).
 */
import { getPool } from "@/lib/db";
import { rejectUnlessAdmin } from "@/lib/auth";

function parseId(request) {
  const id = Number(new URL(request.url).searchParams.get("id"));
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function GET(request) {
  const denied = rejectUnlessAdmin(request);
  if (denied) return denied;

  const id = parseId(request);
  if (!id) {
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

export async function DELETE(request) {
  const denied = rejectUnlessAdmin(request);
  if (denied) return denied;

  const id = parseId(request);
  if (!id) {
    return Response.json({ ok: false, error: "Invalid id" }, { status: 400 });
  }

  try {
    const { rowCount } = await getPool().query(`DELETE FROM contact_submissions WHERE id = $1`, [id]);
    if (!rowCount) {
      return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("admin submission delete failed", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
