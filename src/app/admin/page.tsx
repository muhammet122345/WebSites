import Link from "next/link";
import AdminHeader from "./AdminHeader";
import { getAllBlogPosts } from "@/lib/blog-store";
import { getAllReviews } from "@/lib/reviews-store";

function StatCard({
  label,
  value,
  href,
  cta,
}: {
  label: string;
  value: number | string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-line bg-background-elevated p-7 transition-colors hover:border-accent/40"
    >
      <div className="text-xs uppercase tracking-wide text-muted">{label}</div>
      <div className="mt-3 font-display text-4xl font-semibold">{value}</div>
      <div className="mt-4 text-sm text-accent group-hover:underline">{cta} →</div>
    </Link>
  );
}

export default async function AdminDashboardPage() {
  const [posts, reviews] = await Promise.all([getAllBlogPosts(), getAllReviews()]);

  const pendingReviews = reviews.filter((r) => r.status === "pending");
  const approvedReviews = reviews.filter((r) => r.status === "approved");

  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-5xl">
        <AdminHeader active="/admin" />

        {pendingReviews.length > 0 && (
          <div className="mb-8 rounded-2xl border border-accent/30 bg-accent/10 p-5">
            <p className="text-sm font-medium text-foreground">
              {pendingReviews.length} yeni yorum onay bekliyor.
            </p>
            <Link href="/admin/yorumlar" className="mt-1 inline-block text-sm text-accent hover:underline">
              Şimdi incele →
            </Link>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            label="Onay Bekleyen Yorum"
            value={pendingReviews.length}
            href="/admin/yorumlar"
            cta="Yorumları yönet"
          />
          <StatCard
            label="Yayındaki Yorum"
            value={approvedReviews.length}
            href="/admin/yorumlar"
            cta="Yorumları yönet"
          />
          <StatCard
            label="Toplam Blog Yazısı"
            value={posts.length}
            href="/admin/blog"
            cta="Blogu yönet"
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-line bg-background-elevated p-7">
            <h2 className="font-display text-lg font-semibold">Blog Yönetimi</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Yeni rehber yazıları ekleyin, mevcut yazıları düzenleyin veya yayından kaldırın.
            </p>
            <Link
              href="/admin/blog"
              className="mt-5 inline-block rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-[#06070a]"
            >
              Blog yazılarına git
            </Link>
          </div>
          <div className="rounded-3xl border border-line bg-background-elevated p-7">
            <h2 className="font-display text-lg font-semibold">Yorum Moderasyonu</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Ziyaretçilerin gönderdiği yorumları onaylayın veya reddedin; onaylananlar sitede
              anında görünür.
            </p>
            <Link
              href="/admin/yorumlar"
              className="mt-5 inline-block rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-[#06070a]"
            >
              Yorumlara git
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
