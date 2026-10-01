import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminApp from "@/components/admin/AdminApp";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

export default async function AdminPage() {
  // proxy.js already redirects logged-out visitors; this re-checks on the server.
  const store = await cookies();
  const username = verifySessionToken(store.get(SESSION_COOKIE)?.value);
  if (!username) redirect("/adminmadar/login");

  return <AdminApp username={username} />;
}
