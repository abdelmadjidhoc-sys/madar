/**
 * GET /api/admin/submission?id=123
 * Returns every field for one submission (the detail view). Gated by
 * middleware.js (HTTP Basic Auth); never call this without that.
 */
const { getPool } = require("../_db");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const id = Number(req.query.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ ok: false, error: "Invalid id" });
    return;
  }

  try {
    const { rows } = await getPool().query(
      `SELECT * FROM contact_submissions WHERE id = $1`,
      [id]
    );
    if (!rows.length) {
      res.status(404).json({ ok: false, error: "Not found" });
      return;
    }
    res.status(200).json({ ok: true, submission: rows[0] });
  } catch (err) {
    console.error("admin submission detail failed", err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
};
