import { STATUS_LABELS } from "@/lib/coverageMeta";

/** Coloured pill for a coverage status. */
export default function StatusBadge({ status }) {
  return <span className={"status-badge status-badge--" + status}>{STATUS_LABELS[status]}</span>;
}
