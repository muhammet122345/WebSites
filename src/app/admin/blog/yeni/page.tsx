import AdminHeader from "../../AdminHeader";
import BlogPostForm from "../BlogPostForm";
import { createPost } from "../actions";

export default function NewBlogPostPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-3xl">
        <AdminHeader active="/admin/blog" />
        <h2 className="font-display text-xl font-semibold">Yeni Blog Yazısı</h2>
        <p className="mt-1 text-sm text-muted">
          Tarih otomatik olarak bugünün tarihi ile kaydedilir.
        </p>
        <div className="mt-6">
          <BlogPostForm action={createPost} submitLabel="Yazıyı Yayınla" pendingLabel="Kaydediliyor..." />
        </div>
      </div>
    </div>
  );
}
