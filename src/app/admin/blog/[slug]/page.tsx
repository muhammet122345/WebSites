import { notFound } from "next/navigation";
import AdminHeader from "../../AdminHeader";
import DeleteButton from "../../DeleteButton";
import BlogPostForm from "../BlogPostForm";
import { getBlogPostBySlug } from "@/lib/blog-store";
import { updatePost, deletePost } from "../actions";

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const boundUpdate = updatePost.bind(null, post.slug, post.date);

  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-3xl">
        <AdminHeader active="/admin/blog" />
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-xl font-semibold">Yazıyı Düzenle</h2>
          <form action={deletePost.bind(null, post.slug)}>
            <DeleteButton
              label="Yazıyı Sil"
              confirmMessage={`"${post.title}" yazısını silmek istediğinizden emin misiniz?`}
            />
          </form>
        </div>
        <BlogPostForm
          post={post}
          action={boundUpdate}
          submitLabel="Değişiklikleri Kaydet"
          pendingLabel="Kaydediliyor..."
        />
      </div>
    </div>
  );
}
