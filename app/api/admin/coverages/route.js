/**
 * POST /api/admin/coverages — create a coverage and its team (مسؤول / CEO only).
 */
import { authorize } from "@/lib/auth";
import { getPool } from "@/lib/db";
import { isAdminRole } from "@/lib/roles";
import { autoStatus, parseCoverageInput } from "@/lib/coverageInput";
import { logActivity, setAssignments } from "@/lib/coverages";

const fail = (error, status = 400) => Response.json({ ok: false, error }, { status });

export async function POST(request) {
  const { member, denied } = await authorize(request, isAdminRole);
  if (denied) return denied;

  const body = await request.json().catch(() => ({}));
  const { value, error } = parseCoverageInput(body);
  if (error) return fail(error);

  const client = await getPool().connect();
  try {
    const team = [...value.photographerIds, ...(value.editorId ? [value.editorId] : [])];
    if (team.length) {
      const { rows } = await client.query(
        "SELECT id FROM members WHERE id = ANY($1) AND is_active = true AND role IN ('member', 'manager', 'ceo', 'admin')",
        [team]
      );
      if (rows.length !== new Set(team).size) return fail("أحد الأعضاء المختارين غير متاح للتعيين");
    }

    await client.query("BEGIN");
    const { rows } = await client.query(
      `INSERT INTO coverages (title, organization, location, starts_at, ends_at, coverage_type,
                              description, notes, edit_deadline, status, created_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id`,
      [
        value.title,
        value.organization,
        value.location,
        value.startsAt,
        value.endsAt,
        value.type,
        value.description,
        value.notes,
        value.editDeadline,
        autoStatus(value.photographerIds, value.editorId),
        member.id,
      ]
    );
    const id = rows[0].id;
    await setAssignments(client, id, value.photographerIds, value.editorId);
    await logActivity(client, id, member.id, "created");
    await client.query("COMMIT");
    return Response.json({ ok: true, id });
  } catch (e) {
    await client.query("ROLLBACK").catch(() => {});
    console.error("create coverage failed", e);
    return fail("تعذّر حفظ التغطية. حاول مرة أخرى", 500);
  } finally {
    client.release();
  }
}
