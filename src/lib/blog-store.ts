import { readStore, writeStore } from "./blob-store";
import { BLOG_POSTS as SEED_BLOG_POSTS, type BlogPost } from "@/data/blog-posts";

const STORE_KEY = "blog-posts";

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return readStore<BlogPost[]>(STORE_KEY, SEED_BLOG_POSTS);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllBlogPosts();
  return posts.find((p) => p.slug === slug);
}

export async function createBlogPost(post: BlogPost): Promise<void> {
  const posts = await getAllBlogPosts();
  if (posts.some((p) => p.slug === post.slug)) {
    throw new Error("Bu slug zaten kullanılıyor, farklı bir slug seçin.");
  }
  await writeStore(STORE_KEY, [post, ...posts]);
}

export async function updateBlogPost(originalSlug: string, post: BlogPost): Promise<void> {
  const posts = await getAllBlogPosts();
  if (post.slug !== originalSlug && posts.some((p) => p.slug === post.slug)) {
    throw new Error("Bu slug zaten kullanılıyor, farklı bir slug seçin.");
  }
  const next = posts.map((p) => (p.slug === originalSlug ? post : p));
  await writeStore(STORE_KEY, next);
}

export async function deleteBlogPost(slug: string): Promise<void> {
  const posts = await getAllBlogPosts();
  await writeStore(
    STORE_KEY,
    posts.filter((p) => p.slug !== slug)
  );
}
