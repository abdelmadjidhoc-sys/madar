/**
 * Who is logged in, for server components (pages and layouts). The member is
 * always loaded from the database, so role changes apply on the next load.
 */
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, getMemberById, verifySessionToken } from "./auth";
import { canSeeRequests, isAdminRole, isMemberOrAbove } from "./roles";

/** The logged-in active member, or null. Cached for the duration of one request. */
export const currentMember = cache(async () => {
  const store = await cookies();
  const id = verifySessionToken(store.get(SESSION_COOKIE)?.value);
  return id === null ? null : getMemberById(id);
});

/** For pages: عضو and above. Logged-out users go to login, visitors to the waiting page. */
export async function requireMember() {
  const member = await currentMember();
  if (!member) redirect("/adminmadar/login");
  if (!isMemberOrAbove(member.role)) redirect("/adminmadar");
  return member;
}

/** For pages: مسؤول and above. */
export async function requireAdmin() {
  const member = await requireMember();
  if (!isAdminRole(member.role)) redirect("/adminmadar");
  return member;
}

/** For the join-applications / contact-messages page: CEO and system admin only. */
export async function requireRequestsAccess() {
  const member = await requireMember();
  if (!canSeeRequests(member.role)) redirect("/adminmadar");
  return member;
}
