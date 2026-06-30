import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-store";
import { breadcrumbSchema } from "@/lib/schema";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Fazlalıkat" },
        }}
      />
      <Navbar />
      <main className="px-6 pb-28 pt-32">
        <article className="mx-auto max-w-3xl">
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="hover:text-foreground">
              Anasayfa
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">{post.category}</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>Fazlalıkat Ekibi</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>

          <div className="relative mt-8 h-64 w-full overflow-hidden rounded-3xl sm:h-96">
            <Image src={post.image} alt={post.title} fill sizes="768px" priority className="object-cover" />
          </div>

          <div className="mt-10 space-y-8">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold">{section.heading}</h2>
                <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
              </div>
            ))}
          </div>
        </article>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
