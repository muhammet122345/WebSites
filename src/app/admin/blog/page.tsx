import Link from "next/link";
import AdminHeader from "../AdminHeader";
import DeleteButton from "../DeleteButton";
import ErrorBanner from "../ErrorBanner";
import { getAllBlogPosts } from "@/lib/blog-store";
import { deletePost } from "./actions";

export default async function AdminBlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const [posts, { error }] = await Promise.all([getAllBlogPosts(), searchParams]);

  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-5xl">
        <AdminHeader active="/admin/blog" />

        {error && (
          <ErrorBanner message="İşlem gerçekleştirilemedi. Depolama bağlantısında bir sorun olabilir — Vercel Blob bağlantısını ve son deploy'u kontrol edin." />
        )}

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold">Blog Yazıları</h2>
            <p className="mt-1 text-sm text-muted">{posts.length} yazı</p>
          </div>
          <Link
            href="/admin/blog/yeni"
            className="rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-[#06070a]"
          >
            + Yeni Yazı
          </Link>
        </div>

        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-background-elevated p-5"
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-2 font-display text-base font-semibold">{post.title}</h3>
                <p className="text-xs text-muted">/blog/{post.slug}</p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/admin/blog/${post.slug}`}
                  className="rounded-full border border-line px-4 py-2 text-sm text-muted hover:bg-white/5"
                >
                  Düzenle
                </Link>
                <form action={deletePost.bind(null, post.slug)}>
                  <DeleteButton
                    label="Sil"
                    confirmMessage={`"${post.title}" yazısını silmek istediğinizden emin misiniz?`}
                  />
                </form>
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <p className="text-sm text-muted">Henüz blog yazısı yok.</p>
          )}
        </div>
      </div>
    </div>
  );
}
