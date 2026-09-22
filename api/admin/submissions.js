/**
 * GET /api/admin/submissions
 * Returns the list for the admin table: id, name, and date only (full detail
 * is a separate request — see submission.js — so the list stays light).
 * Gated by middleware.js (HTTP Basic Auth); never call this without that.
 */
const { getPool } = require("../_db");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const { rows } = await getPool().query(
      `SELECT id, full_name, phone, created_at
       FROM contact_submissions
       ORDER BY created_at DESC`
    );
    res.status(200).json({ ok: true, submissions: rows });
  } catch (err) {
    console.error("admin submissions list failed", err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
};
