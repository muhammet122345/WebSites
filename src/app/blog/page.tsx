import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import type { BlogPost } from "@/data/blog-posts";
import { getAllBlogPosts } from "@/lib/blog-store";
import { breadcrumbSchema, blogCollectionSchema } from "@/lib/schema";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getAllBlogPosts();
  return {
    title: "Eşya Tahliyesi, Moloz Atımı ve Çöp Atım Rehberi İstanbul",
    description: `İstanbul Avrupa Yakası'nda eşya tahliyesi, çöp atım, moloz/hafriyat atımı ve ev/ofis/depo boşaltma hakkında ${posts.length} kapsamlı rehber. Beşiktaş, Şişli, Bağcılar, Esenyurt dahil 18 ilçeye özel bilgiler ve güncel fiyatlar.`,
    alternates: { canonical: "/blog" },
    openGraph: {
      title: "Eşya Tahliyesi, Moloz Atımı ve Çöp Atım Rehberi İstanbul | Fazlalıkat",
      description: `İstanbul Avrupa Yakası'nda eşya tahliyesi, çöp atım, moloz/hafriyat atımı ve ev/ofis/depo boşaltma hakkında ${posts.length} kapsamlı rehber.`,
    },
  };
}

const GROUPS: { label: string; anchor: string; categories: string[]; hideImage?: boolean }[] = [
  { label: "İlçe Rehberleri", anchor: "ilce-rehberleri", categories: ["Bölge Rehberi"] },
  { label: "Mahalle Rehberleri", anchor: "mahalle-rehberleri", categories: ["Mahalle Rehberi"] },
  {
    label: "Hizmet ve Genel Rehberler",
    anchor: "hizmet-genel-rehberler",
    categories: ["Rehber", "Taşınma"],
  },
  {
    label: "Moloz ve Hafriyat Rehberleri",
    anchor: "moloz-hafriyat-rehberleri",
    categories: ["Moloz"],
    hideImage: true,
  },
  {
    label: "Fiyatlandırma ve Karşılaştırmalar",
    anchor: "fiyat-karsilastirma",
    categories: ["Fiyatlandırma", "Karşılaştırma"],
    hideImage: true,
  },
];

function PostCard({ post, priority, hideImage }: { post: BlogPost; priority: boolean; hideImage?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-3xl border border-line bg-background-elevated"
    >
      {!hideImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">{post.category}</span>
          <span>{post.date}</span>
        </div>
        <h2 className="mt-4 font-display text-lg font-semibold leading-snug">{post.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      </div>
    </Link>
  );
}

export default async function BlogIndexPage() {
  const allPosts = await getAllBlogPosts();
  let renderedCount = 0;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
      <JsonLd data={blogCollectionSchema(allPosts)} />
      <Navbar />
      <main className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Blog</span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Eşya Tahliyesi ve
            <br />
            <span className="text-gradient">Çöp Atım Rehberi.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            İstanbul Avrupa Yakası&apos;nda eşya tahliyesi, çöp atım, ev/ofis/depo boşaltma, moloz
            atımı ve geri dönüşüm hakkında {allPosts.length} kapsamlı rehber hazırladık.
            Beşiktaş, Şişli, Bağcılar, Esenyurt dahil 18 ilçeye özel pratik bilgiler ve güncel
            fiyat rehberlerine aşağıdan ulaşabilirsiniz.
          </p>

          <nav className="mt-8 flex flex-wrap gap-3">
            {GROUPS.map((group) => (
              <a
                key={group.anchor}
                href={`#${group.anchor}`}
                className="rounded-full border border-line px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {group.label}
              </a>
            ))}
          </nav>

          {GROUPS.map((group) => {
            const posts = allPosts.filter((p) => group.categories.includes(p.category));
            if (posts.length === 0) return null;

            return (
              <section key={group.anchor} id={group.anchor} className="mt-16 scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {group.label}
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => {
                    const priority = renderedCount < 3;
                    renderedCount += 1;
                    return <PostCard key={post.slug} post={post} priority={priority} hideImage={group.hideImage} />;
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
