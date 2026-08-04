import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-store";
import { parsePostDate } from "@/data/blog-posts";
import { breadcrumbSchema, blogPostingSchema, faqPageSchema } from "@/lib/schema";
import {
  blogDepthBlocks,
  blogFaqsFor,
  relatedDistrictsForPost,
  relatedPostsFor,
} from "@/lib/blog-seo";
import { BRAND } from "@/data/content";

const PriceCalculator = dynamic(() => import("@/components/PriceCalculator"));

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

  const image = post.image.startsWith("http") ? post.image : post.image;

  return {
    title: { absolute: `${post.title} | Fazlalıkat` },
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [
        { url: image, alt: post.title },
        { url: "/og-image.png", alt: "Fazlalıkat" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
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

  const allPosts = await getAllBlogPosts();
  const isoDate = parsePostDate(post).toISOString();
  const faqs = blogFaqsFor(post);
  const depth = blogDepthBlocks(post);
  const districts = relatedDistrictsForPost(post);
  const related = relatedPostsFor(post, allPosts);

  const waMessage = encodeURIComponent(
    `Merhaba, "${post.title}" yazınızı okudum. Eşya tahliyesi için fiyat almak istiyorum.`,
  );

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
        data={blogPostingSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          image: post.image,
          datePublished: isoDate,
          dateModified: isoDate,
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />
      <Navbar />
      <main className="px-6 pb-16 pt-32">
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

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#06070a]"
            >
              WhatsApp ile fiyat al
            </a>
            <Link
              href="/#fiyat"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-muted hover:text-foreground"
            >
              Fiyat hesaplayıcı
            </Link>
          </div>

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
            {depth.map((block) => (
              <div key={block.heading}>
                <h2 className="font-display text-xl font-semibold">{block.heading}</h2>
                <p className="mt-3 leading-relaxed text-muted">{block.body}</p>
              </div>
            ))}
          </div>

          <section className="mt-14 rounded-3xl border border-line bg-background-elevated p-8">
            <h2 className="font-display text-2xl font-semibold">Sık sorulan sorular</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <div key={item.question}>
                  <h3 className="font-display text-base font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold">İlçenizde eşya tahliye</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Aşağıdaki ilçe sayfalarından mahalle detayına inebilir, WhatsApp ile aynı gün teklif
              alabilirsiniz. Fazlalıkat İstanbul&apos;un her iki yakasında kapıdan alım yapar.
            </p>
            <div className="mt-6 space-y-6">
              {districts.map((d) => (
                <div key={d.href}>
                  <Link href={d.href} className="font-display text-base font-semibold text-accent hover:underline">
                    {d.name} eşya tahliye
                  </Link>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {d.combos.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/${c.slug}`}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted hover:bg-white/10 hover:text-foreground"
                      >
                        {d.name} {c.itemType.label.toLocaleLowerCase("tr-TR")}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="font-display text-2xl font-semibold">İlgili rehberler</h2>
              <ul className="mt-6 space-y-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="text-accent hover:underline">
                      {p.title}
                    </Link>
                    <p className="mt-1 text-sm text-muted">{p.excerpt}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-14 rounded-3xl border border-accent/30 bg-accent/5 p-8 text-center">
            <h2 className="font-display text-2xl font-semibold">
              Hemen kapıdan alım planlayın
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted">
              Fotoğraf gönderin, dakikalar içinde net fiyat alın. Onayınız olmadan ekip yola çıkmaz —
              Anadolu &amp; Avrupa Yakası, aynı gün randevu seçenekleri.
            </p>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#06070a]"
            >
              WhatsApp: {BRAND.phone}
            </a>
          </div>
        </article>
      </main>
      <PriceCalculator />
      <CTA />
      <Footer />
    </>
  );
}
