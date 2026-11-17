/**
 * Coverage queries (server only). Rows come back as plain objects with ISO
 * date strings, so they can be passed straight to client components.
 */
import { getPool } from "./db";

const SELECT = `
  SELECT c.id, c.title, c.organization, c.location, c.starts_at, c.ends_at, c.coverage_type,
         c.description, c.notes, c.status, c.edit_deadline::text AS edit_deadline,
         c.deliverable_url, c.created_at, c.updated_at,
         COALESCE(
           json_agg(json_build_object('memberId', a.member_id, 'kind', a.kind, 'name', m.full_name)
                    ORDER BY a.kind, m.full_name) FILTER (WHERE a.member_id IS NOT NULL),
           '[]'
         ) AS team
  FROM coverages c
  LEFT JOIN coverage_assignments a ON a.coverage_id = c.id
  LEFT JOIN members m ON m.id = a.member_id`;

function shape(row) {
  return {
    id: row.id,
    title: row.title,
    organization: row.organization || "",
    location: row.location || "",
    startsAt: row.starts_at.toISOString(),
    endsAt: row.ends_at ? row.ends_at.toISOString() : null,
    type: row.coverage_type,
    description: row.description || "",
    notes: row.notes || "",
    status: row.status,
    editDeadline: row.edit_deadline || null,
    deliverableUrl: row.deliverable_url || "",
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
    team: row.team,
  };
}

/** Every coverage, newest event first. */
export async function listCoverages() {
  const { rows } = await getPool().query(SELECT + " GROUP BY c.id ORDER BY c.starts_at DESC");
  return rows.map(shape);
}

/** One coverage (or null). `db` can be a pool or a client inside a transaction. */
export async function getCoverage(id, db = getPool()) {
  if (!Number.isInteger(id)) return null;
  const { rows } = await db.query(SELECT + " WHERE c.id = $1 GROUP BY c.id", [id]);
  return rows[0] ? shape(rows[0]) : null;
}

/** The change history of a coverage, newest first. */
export async function getActivity(id) {
  const { rows } = await getPool().query(
    `SELECT a.id, a.action, a.from_status, a.to_status, a.note, a.created_at, m.full_name AS who
     FROM coverage_activity a LEFT JOIN members m ON m.id = a.member_id
     WHERE a.coverage_id = $1 ORDER BY a.created_at DESC, a.id DESC`,
    [id]
  );
  return rows.map((row) => ({
    id: row.id,
    action: row.action,
    from: row.from_status,
    to: row.to_status,
    note: row.note || "",
    who: row.who || "",
    createdAt: row.created_at.toISOString(),
  }));
}

export async function logActivity(db, coverageId, memberId, action, { from = null, to = null, note = null } = {}) {
  await db.query(
    "INSERT INTO coverage_activity (coverage_id, member_id, action, from_status, to_status, note) VALUES ($1, $2, $3, $4, $5, $6)",
    [coverageId, memberId, action, from, to, note]
  );
}

/** Replaces the team of a coverage. */
export async function setAssignments(db, coverageId, photographerIds, editorId) {
  await db.query("DELETE FROM coverage_assignments WHERE coverage_id = $1", [coverageId]);
  for (const memberId of photographerIds) {
    await db.query(
      "INSERT INTO coverage_assignments (coverage_id, member_id, kind) VALUES ($1, $2, 'photographer')",
      [coverageId, memberId]
    );
  }
  if (editorId) {
    await db.query("INSERT INTO coverage_assignments (coverage_id, member_id, kind) VALUES ($1, $2, 'editor')", [
      coverageId,
      editorId,
    ]);
  }
}

/** Active members who can be put on a coverage (عضو and above). */
export async function listAssignableMembers() {
  const { rows } = await getPool().query(
    `SELECT id, full_name FROM members
     WHERE is_active = true AND role IN ('member', 'manager', 'ceo', 'admin') ORDER BY full_name`
  );
  return rows.map((row) => ({
    id: row.id,
    name: row.full_name,
  }));
}

/** Only http(s) links are allowed (the link is rendered as an <a href>). */
export function cleanUrl(value) {
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (!text) return "";
  if (text.length > 500) return null;
  try {
    const url = new URL(text);
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : null;
  } catch (e) {
    return null;
  }
}
