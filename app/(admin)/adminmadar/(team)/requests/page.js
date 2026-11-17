import AdminApp from "@/components/admin/AdminApp";
import { requireRequestsAccess } from "@/lib/session";

export const metadata = { title: "الطلبات والرسائل | مدار" };

// Join applications and contact messages: the CEO and the system admin only.
export default async function RequestsPage() {
  await requireRequestsAccess();
  return <AdminApp />;
}
