/**
 * PATCH /api/admin/account  { fullName?, currentPassword?, newPassword? }
 * Lets any logged-in member (visitors included) edit their own name and password.
 */
import { authorize } from "@/lib/auth";
import { getPool } from "@/lib/db";
import { hashPassword, verifyPassword } from "@/lib/password";
import { clientIp, tooManyAttempts } from "@/lib/rateLimit";

const fail = (error, status = 400) => Response.json({ ok: false, error }, { status });

export async function PATCH(request) {
  const { member, denied } = await authorize(request, () => true);
  if (denied) return denied;

  const body = await request.json().catch(() => ({}));
  const pool = getPool();

  if (typeof body.fullName === "string") {
    const fullName = body.fullName.trim();
    if (fullName.length < 2 || fullName.length > 100) return fail("اكتب اسمك الكامل");
    await pool.query("UPDATE members SET full_name = $1 WHERE id = $2", [fullName, member.id]);
  }

  if (body.newPassword !== undefined) {
    if (tooManyAttempts("password:" + member.id + ":" + clientIp(request), 6)) {
      return fail("محاولات كثيرة. حاول مرة أخرى بعد قليل", 429);
    }
    const newPassword = typeof body.newPassword === "string" ? body.newPassword : "";
    if (newPassword.length < 8 || newPassword.length > 200) return fail("كلمة المرور الجديدة يجب ألا تقل عن 8 أحرف");

    const { rows } = await pool.query("SELECT password_hash FROM members WHERE id = $1", [member.id]);
    const currentOk = typeof body.currentPassword === "string" && verifyPassword(body.currentPassword, rows[0].password_hash);
    if (!currentOk) return fail("كلمة المرور الحالية غير صحيحة", 403);

    await pool.query("UPDATE members SET password_hash = $1 WHERE id = $2", [hashPassword(newPassword), member.id]);
  }

  return Response.json({ ok: true });
}
