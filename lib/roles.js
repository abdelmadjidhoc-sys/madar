/**
 * Member roles. Values are stored in English in the database and shown in
 * Arabic in the UI. Order matters: higher index = more access.
 *
 *  visitor  زائر           signed up, sees nothing until promoted
 *  member   عضو            sees all coverages, works on the ones assigned to them
 *  manager  مسؤول          manages coverages and members
 *  ceo      الرئيس التنفيذي  manager powers + join applications and contact messages
 *  admin    مدير النظام     runs the system: everything, including the CEO account
 */
export const ROLES = ["visitor", "member", "manager", "ceo", "admin"];

export const ROLE_LABELS = {
  visitor: "زائر",
  member: "عضو",
  manager: "مسؤول",
  ceo: "الرئيس التنفيذي",
  admin: "مدير النظام",
};

export function roleRank(role) {
  return ROLES.indexOf(role);
}

/** عضو and above: can see the club's data. */
export function isMemberOrAbove(role) {
  return roleRank(role) >= roleRank("member");
}

/** مسؤول and above: can manage coverages and members. */
export function isAdminRole(role) {
  return roleRank(role) >= roleRank("manager");
}

/** Join applications and contact messages: the CEO and the system admin only. */
export function canSeeRequests(role) {
  return role === "ceo" || role === "admin";
}

/**
 * Whether `actorRole` may change an account that currently has `targetRole`
 * and give it `newRole`: nobody can touch or create an account ranked above themselves.
 */
export function canManageRole(actorRole, targetRole, newRole = targetRole) {
  return (
    isAdminRole(actorRole) &&
    roleRank(targetRole) <= roleRank(actorRole) &&
    roleRank(newRole) <= roleRank(actorRole)
  );
}
