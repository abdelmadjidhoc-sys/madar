/**
 * PATCH /api/admin/members  { id, role?, isActive? }
 * Changes a member's role or active state (مسؤول and above).
 *  - Nobody can edit an account ranked above their own, or give a role above their own
 *    (so only the system admin can touch the admin, only CEO/admin can touch the CEO).
 *  - The last active system admin can't be demoted or deactivated.
 *  - Nobody can deactivate their own account.
 */
import { authorize } from "@/lib/auth";
import { getPool } from "@/lib/db";
import { ROLES, canManageRole, isAdminRole } from "@/lib/roles";

const fail = (error, status = 400) => Response.json({ ok: false, error }, { status });

export async function PATCH(request) {
  const { member: actor, denied } = await authorize(request, isAdminRole);
  if (denied) return denied;

  const body = await request.json().catch(() => ({}));
  if (!Number.isInteger(body.id)) return fail("عضو غير معروف");

  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    const found = await client.query(
      "SELECT id, role, is_active FROM members WHERE id = $1 FOR UPDATE",
      [body.id]
    );
    const target = found.rows[0];
    if (!target) {
      await client.query("ROLLBACK");
      return fail("العضو غير موجود", 404);
    }

    // Nobody can edit an account ranked above their own.
    if (!canManageRole(actor.role, target.role)) {
      await client.query("ROLLBACK");
      return fail("لا يمكنك تعديل حساب بصلاحية أعلى من صلاحيتك", 403);
    }

    const changes = {};
    if (body.role !== undefined) {
      if (!ROLES.includes(body.role)) {
        await client.query("ROLLBACK");
        return fail("صلاحية غير صحيحة");
      }
      // ...or give anyone a role above their own.
      if (!canManageRole(actor.role, target.role, body.role)) {
        await client.query("ROLLBACK");
        return fail("لا يمكنك منح صلاحية أعلى من صلاحيتك", 403);
      }
      changes.role = body.role;
    }
    if (body.isActive !== undefined) {
      if (body.isActive !== true && target.id === actor.id) {
        await client.query("ROLLBACK");
        return fail("لا يمكنك إيقاف حسابك بنفسك", 403);
      }
      changes.is_active = body.isActive === true;
    }

    const keys = Object.keys(changes);
    if (keys.length === 0) {
      await client.query("ROLLBACK");
      return fail("لا يوجد تغيير");
    }

    // Keep at least one active system admin, so the system can never be locked out.
    const losesAdmin =
      target.role === "admin" &&
      target.is_active &&
      ((changes.role !== undefined && changes.role !== "admin") || changes.is_active === false);
    if (losesAdmin) {
      const others = await client.query(
        "SELECT count(*)::int AS n FROM members WHERE role = 'admin' AND is_active = true AND id <> $1",
        [target.id]
      );
      if (others.rows[0].n === 0) {
        await client.query("ROLLBACK");
        return fail("لا يمكن إزالة آخر مدير للنظام. عيّن مديرًا آخر أولًا", 403);
      }
    }

    // Column names come from the fixed list above, never from the request.
    const sets = keys.map((key, index) => key + " = $" + (index + 1)).join(", ");
    await client.query("UPDATE members SET " + sets + " WHERE id = $" + (keys.length + 1), [
      ...keys.map((key) => changes[key]),
      target.id,
    ]);
    await client.query("COMMIT");
    return Response.json({ ok: true });
  } catch (e) {
    await client.query("ROLLBACK").catch(() => {});
    console.error("update member failed", e);
    return fail("تعذّر حفظ التغيير. حاول مرة أخرى", 500);
  } finally {
    client.release();
  }
}
