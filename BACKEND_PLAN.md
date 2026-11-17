# Madar Team Backend: Plan

Status: **Phases 1 to 5 built and tested through the API. Remaining: your review of Checkpoints 1 to 5 in the browser, the accessibility pass, deploy to Vercel (Checkpoint 6), `PROGRESS.md` update.**

## Goal

A members-only backend where the club can see every coverage (التغطية): what needs covering, who covers it on site, and which designer edits the video. It also replaces the current single shared admin login with real member accounts and roles.

**Fully Arabic, RTL, no English in the UI.**

## Decisions so far

| Topic | Decision |
|---|---|
| Sign-up | Anyone can register. New accounts are **زائر**. |
| Role changes | مسؤول and above change roles from the الأعضاء page. Nobody can edit an account ranked above their own or give a role above their own. |
| Assigning coverages | **Assigned only**: مسؤول and above pick the photographers and the editor. No volunteering or self-claiming. |
| What a عضو sees | **All coverages** (schedule, who's covering, who's editing) |
| مسؤول vs CEO | Same coverage and member powers, but only the CEO (and the system admin) see join applications and contact messages, and a مسؤول can't touch the CEO account |
| مدير النظام (admin) | The person who runs the system (not the club's CEO). Everything the CEO can do, plus managing the CEO account. The last admin can't be removed. Created with `scripts/create-account.js admin ...` |
| Stack | Existing Next.js 16 app and the existing Neon Postgres database (`pg`). No new packages. |
| Address | `/adminmadar` (default, can be changed before Phase 1 starts) |

## Roles

| Permission | زائر | عضو | مسؤول | الرئيس التنفيذي | مدير النظام |
|---|:-:|:-:|:-:|:-:|:-:|
| Log in, see the waiting page | ✓ | ✓ | ✓ | ✓ | ✓ |
| See all coverages, own profile | ✗ | ✓ | ✓ | ✓ | ✓ |
| Update status / add edit link on **own assigned** coverages | ✗ | ✓ | ✓ | ✓ | ✓ |
| Create, edit, assign, cancel coverages | ✗ | ✗ | ✓ | ✓ | ✓ |
| Final approval (منشورة) | ✗ | ✗ | ✓ | ✓ | ✓ |
| Manage members (role, deactivate) | ✗ | ✗ | ✓ (up to مسؤول) | ✓ (up to CEO) | ✓ (everyone) |
| Join applications and contact messages | ✗ | ✗ | ✗ | ✓ | ✓ |

**No specialties**: any عضو or above can be picked as photographer or as editor on a coverage. (The specialty boxes were removed on 2026-11-17; the unused `is_photographer` / `is_editor` columns are still in the database.)

## Coverage status flow

```
جديدة → تم التعيين → تمت التغطية → قيد المونتاج → بانتظار الاعتماد → منشورة
                                    (any stage) → ملغاة
```

| Status | Who moves it there |
|---|---|
| جديدة | Set on creation (admin) |
| تم التعيين | Automatic when photographers and an editor are assigned |
| تمت التغطية | An assigned photographer, or an admin |
| قيد المونتاج | The assigned editor, or an admin |
| بانتظار الاعتماد | The assigned editor after adding the edit link, or an admin |
| منشورة / ملغاة | Admin only |

## Data model (draft)

**members**
- id, full_name, phone, email (unique, used to log in), password_hash (scrypt), role (`visitor` / `member` / `manager` / `ceo`), is_photographer, is_editor, is_active, created_at, last_login_at
- Role values are stored in English in the database and shown in Arabic in the UI.

**coverages**
- id, title, organization, location, starts_at (Qatar time), ends_at, coverage_type (photo / video / both), description, notes, status, edit_deadline, deliverable_url, created_by, created_at, updated_at

**coverage_assignments**
- coverage_id, member_id, kind (`photographer` / `editor`)
- Several photographers per coverage, one editor.

**coverage_activity** (simple history)
- coverage_id, member_id, action (status change, assignment, link added), from/to, created_at

## Screens (Arabic, RTL)

| Screen | Who |
|---|---|
| تسجيل الدخول | Everyone |
| إنشاء حساب | Everyone |
| حسابك قيد المراجعة (waiting page) | زائر |
| الرئيسية: my upcoming coverages, my pending edits, overdue items | عضو and up |
| التغطيات: list with filters (status, month, member), plus calendar view | عضو and up |
| Coverage detail: info, team, status, edit link, history | عضو and up |
| New / edit coverage form | مسؤول, CEO |
| الأعضاء: list, change role, deactivate | مسؤول, CEO |
| الطلبات والرسائل: existing join applications and contact messages | مسؤول, CEO |
| حسابي: profile and password | Everyone logged in |

---

## Phases and checkpoints

### Phase 0: Prep
- [x] Confirm the address (`/adminmadar` or something else)
- [x] Read the Next.js 16 docs in `node_modules/next/dist/docs/` for route handlers, `proxy.js`, cookies and server actions
- [x] The existing applications/messages dashboard moved to الطلبات والرسائل (Arabic only)

### Phase 1: Accounts and roles
- [x] Add `members` to `scripts/setup-db.js` (idempotent)
- [x] Add a one-time script to create the first CEO account
- [x] Hash passwords with Node `crypto.scrypt`, compared in constant time
- [x] Rewrite `lib/auth.js`: the session cookie carries the member id and is re-checked against the DB so role changes and deactivation apply right away
- [x] Sign-up API and page (new account is `visitor`)
- [x] Login and logout against the DB (replaces the env-var login)
- [x] Update `proxy.js`: open paths for login and sign-up, everything else requires a session
- [x] Role helpers (`requireRole(...)`) used by every API handler
- [x] Waiting page for زائر
- [x] Basic rate limiting on login and sign-up

> **✅ Checkpoint 1:** You sign up as a test user and land on the waiting page. You log in as CEO. The old env-var login no longer works.

### Phase 2: Member management
- [x] الأعضاء page: list, search, filter by role
- [x] Change role, deactivate or reactivate
- [x] Server-side guard: a مسؤول can't touch the CEO or grant the CEO role
- [x] Prevent removing the last CEO
- [x] حسابي page: edit profile, change password

> **✅ Checkpoint 2:** You promote the test visitor to عضو, and they see the backend on their next request. A مسؤول test account can't edit the CEO.

### Phase 3: Coverages core
- [x] `coverages`, `coverage_assignments`, `coverage_activity` tables
- [x] API: create, edit, list, detail, cancel (admin); list and detail (عضو)
- [x] Coverage form: details, plus photographer and editor pickers (all members)
- [x] Coverage list with status badges and filters
- [x] Coverage detail page with team and history

> **✅ Checkpoint 3:** You create a real coverage, assign people, and a عضو account can see it but can't edit it.

### Phase 4: Workflow
- [x] Status transitions enforced on the server (who can move what, per the table above)
- [x] Assigned members get status buttons on their own coverages
- [x] Editor adds the deliverable link, then sends it to بانتظار الاعتماد
- [x] Admin approves (منشورة) or sends it back to قيد المونتاج with a note
- [x] Every change is written to `coverage_activity`

> **✅ Checkpoint 4:** Walk one coverage from جديدة to منشورة using three accounts (admin, photographer, editor).

### Phase 5: Dashboard and calendar
- [x] الرئيسية: my upcoming coverages, my edits due, overdue (past edit_deadline and not published)
- [x] Monthly calendar view of coverages (Qatar time, Arabic month names)
- [x] Move existing join applications and contact messages under الطلبات والرسائل, admins only

> **✅ Checkpoint 5:** Full review on mobile and desktop, all text in Arabic, RTL correct.

### Phase 6: Polish and launch
- [x] Empty and error states in Arabic (no separate loading states: pages are server-rendered)
- [ ] Accessibility pass (keyboard, contrast, labels)
- [x] Security pass: every API checks role server-side, no data leaks to زائر
- [ ] Remove old `ADMIN_USERNAME` / `ADMIN_PASSWORD` env vars from Vercel after go-live
- [x] `setup-db` run (local and production share the same Neon database); CEO account created
- [ ] Update `PROGRESS.md`

> **✅ Checkpoint 6:** Deploy to Vercel, you log in on production, then invite the team.

---

## Later (not in v1)
- WhatsApp or email notifications when someone is assigned or an edit is due
- Comments thread on each coverage
- "Accept application and create account" from a join application
- Export coverages to Excel (the `write-excel-file` package is already installed)
- Stats: coverages per member, average turnaround

## Open questions
- [x] Address: keeping `/adminmadar`
- [x] One editor per coverage (default, easy to change later)
- [x] No auto-delete of visitors for now
