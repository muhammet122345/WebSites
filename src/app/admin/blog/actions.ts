"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createBlogPost, deleteBlogPost, updateBlogPost } from "@/lib/blog-store";
import { formatPostDate, type BlogPost } from "@/data/blog-posts";

export type BlogFormState = { error?: string };

function parsePost(formData: FormData, date: string): BlogPost {
  const headings = formData.getAll("sectionHeading").map(String);
  const bodies = formData.getAll("sectionBody").map(String);
  const sections = headings
    .map((heading, i) => ({ heading: heading.trim(), body: (bodies[i] ?? "").trim() }))
    .filter((s) => s.heading && s.body);

  if (sections.length === 0) {
    throw new Error("En az bir bölüm (başlık + metin) eklemelisiniz.");
  }

  const slug = String(formData.get("slug") ?? "").trim().toLowerCase();
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const image = String(formData.get("image") ?? "").trim();

  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    throw new Error("Slug sadece küçük harf, rakam ve tire içerebilir (örn: erenkoy-esya-toplama).");
  }
  if (!title || !excerpt || !category || !image) {
    throw new Error("Lütfen başlık, özet, kategori ve görsel alanlarını doldurun.");
  }

  return { slug, title, excerpt, category, image, date, sections };
}

export async function createPost(_prevState: BlogFormState, formData: FormData): Promise<BlogFormState> {
  let post: BlogPost;
  try {
    post = parsePost(formData, formatPostDate(new Date()));
    await createBlogPost(post);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Kaydedilemedi." };
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/");
  redirect("/admin/blog");
}

export async function updatePost(
  originalSlug: string,
  originalDate: string,
  _prevState: BlogFormState,
  formData: FormData
): Promise<BlogFormState> {
  let post: BlogPost;
  try {
    post = parsePost(formData, originalDate);
    await updateBlogPost(originalSlug, post);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Kaydedilemedi." };
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${originalSlug}`);
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/");
  redirect("/admin/blog");
}

export async function deletePost(slug: string, _formData: FormData) {
  try {
    await deleteBlogPost(slug);
  } catch (err) {
    console.error("deletePost failed:", err);
    redirect("/admin/blog?error=1");
  }
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");
  redirect("/admin/blog");
}
