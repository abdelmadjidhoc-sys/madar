/**
 * PATCH /api/admin/coverages/:id
 *   { action: "update", ...fields }                     مسؤول / CEO: edit details and team
 *   { action: "status", status, note?, deliverableUrl? } move to another status (see allowedNextStatuses)
 *   { action: "link", deliverableUrl }                  admins or the assigned editor: set/clear the edit link
 * Every rule is enforced here on the server; the buttons in the UI only mirror it.
 */
import { authorize } from "@/lib/auth";
import { getPool } from "@/lib/db";
import { isAdminRole, isMemberOrAbove } from "@/lib/roles";
import { STATUSES, STATUS_LABELS, allowedNextStatuses, canEditLink } from "@/lib/coverageMeta";
import { autoStatus, parseCoverageInput } from "@/lib/coverageInput";
import { cleanUrl, getCoverage, logActivity, setAssignments } from "@/lib/coverages";

const fail = (error, status = 400) => Response.json({ ok: false, error }, { status });

export async function PATCH(request, { params }) {
  const { member, denied } = await authorize(request, isMemberOrAbove);
  if (denied) return denied;

  const id = Number((await params).id);
  const body = await request.json().catch(() => ({}));

  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    // Lock the row so two people can't move the same coverage at once.
    const locked = await client.query("SELECT id FROM coverages WHERE id = $1 FOR UPDATE", [id]);
    if (!locked.rows[0]) {
      await client.query("ROLLBACK");
      return fail("التغطية غير موجودة", 404);
    }
    const coverage = await getCoverage(id, client);

    let response;
    if (body.action === "update") response = await update(client, member, coverage, body);
    else if (body.action === "status") response = await changeStatus(client, member, coverage, body);
    else if (body.action === "link") response = await changeLink(client, member, coverage, body);
    else response = fail("طلب غير معروف");

    if (response.ok) await client.query("COMMIT");
    else await client.query("ROLLBACK");
    return response;
  } catch (e) {
    await client.query("ROLLBACK").catch(() => {});
    console.error("update coverage failed", e);
    return fail("تعذّر حفظ التغيير. حاول مرة أخرى", 500);
  } finally {
    client.release();
  }
}

async function update(client, member, coverage, body) {
  if (!isAdminRole(member.role)) return fail("لا تملك صلاحية لهذا الإجراء", 403);

  const { value, error } = parseCoverageInput(body);
  if (error) return fail(error);

  const team = [...value.photographerIds, ...(value.editorId ? [value.editorId] : [])];
  if (team.length) {
    const { rows } = await client.query(
      "SELECT id FROM members WHERE id = ANY($1) AND is_active = true AND role IN ('member', 'manager', 'ceo', 'admin')",
      [team]
    );
    if (rows.length !== new Set(team).size) return fail("أحد الأعضاء المختارين غير متاح للتعيين");
  }

  // Only "new" and "assigned" follow the team automatically; later stages are moved by hand.
  const status = ["new", "assigned"].includes(coverage.status)
    ? autoStatus(value.photographerIds, value.editorId)
    : coverage.status;

  await client.query(
    `UPDATE coverages SET title = $1, organization = $2, location = $3, starts_at = $4, ends_at = $5,
            coverage_type = $6, description = $7, notes = $8, edit_deadline = $9, status = $10, updated_at = now()
     WHERE id = $11`,
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
      status,
      coverage.id,
    ]
  );

  const before = coverage.team.map((p) => p.kind + p.memberId).sort().join();
  await setAssignments(client, coverage.id, value.photographerIds, value.editorId);
  const after = [...value.photographerIds.map((m) => "photographer" + m), ...(value.editorId ? ["editor" + value.editorId] : [])]
    .sort()
    .join();

  await logActivity(client, coverage.id, member.id, "updated");
  if (before !== after) await logActivity(client, coverage.id, member.id, "team");
  if (status !== coverage.status) {
    await logActivity(client, coverage.id, member.id, "status", { from: coverage.status, to: status });
  }
  return Response.json({ ok: true });
}

async function changeStatus(client, member, coverage, body) {
  const status = body.status;
  if (!STATUSES.includes(status) || !allowedNextStatuses(member, coverage).includes(status)) {
    return fail("لا يمكنك نقل التغطية إلى هذه الحالة", 403);
  }

  let link = coverage.deliverableUrl;
  if (body.deliverableUrl !== undefined) {
    if (!canEditLink(member, coverage)) return fail("لا تملك صلاحية تعديل رابط المونتاج", 403);
    const cleaned = cleanUrl(body.deliverableUrl);
    if (cleaned === null) return fail("رابط المونتاج غير صحيح. يجب أن يبدأ بـ https://");
    link = cleaned;
  }
  if (status === "review" && !link) return fail("أضف رابط المونتاج قبل إرساله للاعتماد");

  const note = typeof body.note === "string" ? body.note.trim().slice(0, 500) : "";
  await client.query("UPDATE coverages SET status = $1, deliverable_url = $2, updated_at = now() WHERE id = $3", [
    status,
    link || null,
    coverage.id,
  ]);
  await logActivity(client, coverage.id, member.id, "status", {
    from: coverage.status,
    to: status,
    note: note || null,
  });
  if (link !== coverage.deliverableUrl) {
    await logActivity(client, coverage.id, member.id, "link");
  }
  return Response.json({ ok: true, status, label: STATUS_LABELS[status] });
}

async function changeLink(client, member, coverage, body) {
  if (!canEditLink(member, coverage)) return fail("لا تملك صلاحية تعديل رابط المونتاج", 403);
  const cleaned = cleanUrl(body.deliverableUrl);
  if (cleaned === null) return fail("رابط المونتاج غير صحيح. يجب أن يبدأ بـ https://");

  await client.query("UPDATE coverages SET deliverable_url = $1, updated_at = now() WHERE id = $2", [
    cleaned || null,
    coverage.id,
  ]);
  await logActivity(client, coverage.id, member.id, "link");
  return Response.json({ ok: true });
}
