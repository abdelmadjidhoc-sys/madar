/**
 * Validates the body of a create/edit coverage request (server only).
 * Returns { error } (Arabic message) or { value }.
 */
import { TYPES, fromQatarInput } from "./coverageMeta";

function text(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function parseCoverageInput(body) {
  const title = text(body.title, 150);
  if (!title) return { error: "اكتب عنوان التغطية" };

  const startsAt = fromQatarInput(body.startsAt);
  if (!startsAt) return { error: "حدّد تاريخ التغطية ووقتها" };

  let endsAt = null;
  if (body.endsAt) {
    endsAt = fromQatarInput(body.endsAt);
    if (!endsAt) return { error: "وقت نهاية التغطية غير صحيح" };
    if (endsAt <= startsAt) return { error: "وقت النهاية يجب أن يكون بعد وقت البداية" };
  }

  const type = TYPES.includes(body.type) ? body.type : "both";

  let editDeadline = null;
  if (body.editDeadline) {
    if (typeof body.editDeadline !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(body.editDeadline)) {
      return { error: "موعد تسليم المونتاج غير صحيح" };
    }
    if (Number.isNaN(new Date(body.editDeadline + "T00:00:00Z").getTime())) {
      return { error: "موعد تسليم المونتاج غير صحيح" };
    }
    editDeadline = body.editDeadline;
  }

  const photographerIds = Array.isArray(body.photographerIds)
    ? [...new Set(body.photographerIds.filter((id) => Number.isInteger(id)))]
    : [];
  const editorId = Number.isInteger(body.editorId) ? body.editorId : null;

  return {
    value: {
      title,
      organization: text(body.organization, 150),
      location: text(body.location, 200),
      startsAt,
      endsAt,
      type,
      description: text(body.description, 2000),
      notes: text(body.notes, 2000),
      editDeadline,
      photographerIds,
      editorId,
    },
  };
}

/** New coverages and ones that are only waiting for a team move between "new" and "assigned" by themselves. */
export function autoStatus(photographerIds, editorId) {
  return photographerIds.length > 0 && editorId ? "assigned" : "new";
}
