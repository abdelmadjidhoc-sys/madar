/**
 * Coverage constants and helpers shared by server code, server pages and
 * client components (no database access here). All labels are Arabic.
 * Times are Qatar time (UTC+3, no daylight saving).
 */
import { isAdminRole } from "./roles";

export const STATUSES = ["new", "assigned", "covered", "editing", "review", "published", "cancelled"];

export const STATUS_LABELS = {
  new: "جديدة",
  assigned: "تم التعيين",
  covered: "تمت التغطية",
  editing: "قيد المونتاج",
  review: "بانتظار الاعتماد",
  published: "منشورة",
  cancelled: "ملغاة",
};

export const TYPES = ["photo", "video", "both"];

export const TYPE_LABELS = {
  photo: "تصوير فوتوغرافي",
  video: "تصوير فيديو",
  both: "صور وفيديو",
};

export const KIND_LABELS = {
  photographer: "المصوّرون",
  editor: "المصمم / المونتير",
};

/** Statuses a member can't move out of. */
export const CLOSED_STATUSES = ["published", "cancelled"];

const QATAR_OFFSET_MS = 3 * 60 * 60 * 1000;

/** "YYYY-MM-DD" for a moment, in Qatar time. */
export function qatarDateKey(value) {
  return new Date(new Date(value).getTime() + QATAR_OFFSET_MS).toISOString().slice(0, 10);
}

export function qatarToday() {
  return qatarDateKey(Date.now());
}

/** "YYYY-MM-DDTHH:mm" for a <input type="datetime-local">, in Qatar time. */
export function toQatarInput(value) {
  if (!value) return "";
  return new Date(new Date(value).getTime() + QATAR_OFFSET_MS).toISOString().slice(0, 16);
}

/** Turns the datetime-local value of the form (Qatar time) into a Date, or null if invalid. */
export function fromQatarInput(text) {
  if (typeof text !== "string" || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(text)) return null;
  const date = new Date(text + ":00+03:00");
  return Number.isNaN(date.getTime()) ? null : date;
}

const LOCALE = "ar-QA-u-nu-latn"; // Arabic, Latin digits (matches phone numbers and the rest of the site)

export function formatDateTime(value) {
  if (!value) return "";
  return new Date(value).toLocaleString(LOCALE, {
    timeZone: "Asia/Qatar",
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatShortDateTime(value) {
  if (!value) return "";
  return new Date(value).toLocaleString(LOCALE, {
    timeZone: "Asia/Qatar",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  });
}

/** For a "YYYY-MM-DD" date (deadline). */
export function formatDay(dateKey) {
  if (!dateKey) return "";
  return new Date(dateKey + "T12:00:00+03:00").toLocaleDateString(LOCALE, {
    timeZone: "Asia/Qatar",
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function formatTime(value) {
  return new Date(value).toLocaleTimeString(LOCALE, { timeZone: "Asia/Qatar", hour: "numeric", minute: "2-digit" });
}

export function monthTitle(year, month) {
  return new Date(Date.UTC(year, month, 15)).toLocaleDateString(LOCALE, {
    timeZone: "UTC",
    month: "long",
    year: "numeric",
  });
}

/** The edit is late: the deadline has passed and the coverage isn't finished. */
export function isOverdue(coverage) {
  return Boolean(
    coverage.editDeadline && coverage.editDeadline < qatarToday() && !CLOSED_STATUSES.includes(coverage.status)
  );
}

export function isAssigned(coverage, memberId, kind) {
  return coverage.team.some((person) => person.memberId === memberId && (!kind || person.kind === kind));
}

/**
 * The statuses this member may move the coverage to.
 * مسؤول / CEO: any other status. عضو: only the next step of their own part
 * (photographer: assigned -> covered; editor: covered -> editing -> review).
 */
export function allowedNextStatuses(member, coverage) {
  if (isAdminRole(member.role)) return STATUSES.filter((status) => status !== coverage.status);
  if (member.role !== "member") return [];

  const next = [];
  if (isAssigned(coverage, member.id, "photographer") && coverage.status === "assigned") next.push("covered");
  if (isAssigned(coverage, member.id, "editor")) {
    if (coverage.status === "covered") next.push("editing");
    if (coverage.status === "editing") next.push("review");
  }
  return next;
}

/** Admins and the assigned editor may attach the link to the finished edit. */
export function canEditLink(member, coverage) {
  if (CLOSED_STATUSES.includes(coverage.status) && !isAdminRole(member.role)) return false;
  return isAdminRole(member.role) || (member.role === "member" && isAssigned(coverage, member.id, "editor"));
}
