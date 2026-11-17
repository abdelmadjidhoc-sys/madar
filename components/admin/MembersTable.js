"use client";

import { useState } from "react";
import { ROLES, ROLE_LABELS, canManageRole } from "@/lib/roles";

/** The members page table. Every change is saved straight away (PATCH /api/admin/members). */
export default function MembersTable({ initialMembers, actorId, actorRole }) {
  const [members, setMembers] = useState(initialMembers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [messages, setMessages] = useState({}); // id -> { text, error }
  const [busyId, setBusyId] = useState(null);

  async function save(member, changes) {
    setBusyId(member.id);
    setMessages((m) => ({ ...m, [member.id]: null }));
    try {
      const res = await fetch("/api/admin/members", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: member.id, ...changes }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "حدث خطأ. حاول مرة أخرى");
      setMembers((list) => list.map((item) => (item.id === member.id ? { ...item, ...changes } : item)));
      setMessages((m) => ({ ...m, [member.id]: { text: "تم الحفظ" } }));
    } catch (err) {
      setMessages((m) => ({ ...m, [member.id]: { text: err.message, error: true } }));
    }
    setBusyId(null);
  }

  const query = search.trim().toLowerCase();
  const visible = members.filter((member) => {
    if (roleFilter !== "all" && member.role !== roleFilter) return false;
    return !query || (member.fullName + " " + member.email).toLowerCase().includes(query);
  });

  return (
    <div>
      <div className="team-toolbar">
        <input
          className="team-input team-search"
          type="search"
          placeholder="بحث بالاسم أو البريد"
          aria-label="بحث"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select className="team-input" aria-label="الصلاحية" value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)}>
          <option value="all">كل الصلاحيات</option>
          {ROLES.map((role) => (
            <option key={role} value={role}>
              {ROLE_LABELS[role]}
            </option>
          ))}
        </select>
      </div>

      {visible.length === 0 ? (
        <p className="team-empty">لا يوجد أعضاء مطابقون.</p>
      ) : (
        <div className="member-list">
          {visible.map((member) => {
            const locked = !canManageRole(actorRole, member.role);
            const disabled = locked || busyId === member.id;
            const message = messages[member.id];
            return (
              <article className={"member-card" + (member.isActive ? "" : " is-inactive")} key={member.id}>
                <div className="member-info">
                  <h3>
                    {member.fullName}
                    {member.id === actorId && <span className="member-you"> (أنت)</span>}
                  </h3>
                  <p dir="ltr" className="member-email">
                    {member.email}
                  </p>
                  <p className="member-meta">
                    {member.lastLogin ? "آخر دخول: " + member.lastLogin : "لم يسجّل الدخول بعد"}
                  </p>
                </div>

                <div className="member-controls">
                  <label className="team-field">
                    <span>الصلاحية</span>
                    <select
                      className="team-input"
                      value={member.role}
                      disabled={disabled}
                      onChange={(event) => save(member, { role: event.target.value })}
                    >
                      {ROLES.map((role) => (
                        <option key={role} value={role} disabled={!canManageRole(actorRole, member.role, role)}>
                          {ROLE_LABELS[role]}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="team-check">
                    <input
                      type="checkbox"
                      checked={member.isActive}
                      disabled={disabled || member.id === actorId}
                      onChange={(event) => save(member, { isActive: event.target.checked })}
                    />
                    الحساب مفعّل
                  </label>
                </div>

                <p className={"member-message" + (message?.error ? " is-error" : "")} role="status">
                  {locked ? "لا يمكنك تعديل حساب بصلاحية أعلى من صلاحيتك" : message?.text}
                </p>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
