import Link from "next/link";
import CoverageBrowser from "@/components/admin/CoverageBrowser";
import { listCoverages } from "@/lib/coverages";
import { requireMember } from "@/lib/session";
import { isAdminRole } from "@/lib/roles";

export const metadata = { title: "التغطيات | مدار" };

export default async function CoveragesPage() {
  const member = await requireMember();
  const coverages = await listCoverages();

  return (
    <main className="admin-main team-main">
      <div className="team-section-head">
        <h1 className="team-title">التغطيات</h1>
        {isAdminRole(member.role) && (
          <Link className="team-btn" href="/adminmadar/coverages/new">
            + تغطية جديدة
          </Link>
        )}
      </div>
      <CoverageBrowser coverages={coverages} memberId={member.id} />
    </main>
  );
}
