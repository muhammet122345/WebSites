import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import DistrictHero from "@/components/DistrictHero";
import ComboHero from "@/components/ComboHero";
import PriceCalculator from "@/components/PriceCalculator";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { DISTRICTS, districtPath, getDistrictBySlug } from "@/data/districts";
import { getCombosForDistrict, getComboRoutes, resolveComboSlug } from "@/lib/combo-routes";
import {
  breadcrumbSchema,
  faqPageSchema,
  howToSchema,
  serviceSchema,
} from "@/lib/schema";
import {
  comboDescription,
  comboFaqs,
  comboTitle,
  districtDescription,
  districtFaqs,
  districtTitle,
  howToSteps,
  nearbyDistricts,
} from "@/lib/seo-copy";
import { getApprovedReviews } from "@/lib/reviews-store";
import { BLOG_POSTS } from "@/data/blog-posts";

export const revalidate = 300;

export function generateStaticParams() {
  const districtParams = DISTRICTS.map((d) => ({ slug: districtPath(d).slice(1) }));
  const comboParams = getComboRoutes().map((c) => ({ slug: c.slug }));
  return [...districtParams, ...comboParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const combo = resolveComboSlug(slug);
  if (combo) {
    const title = comboTitle(combo.district, combo.itemType);
    const description = comboDescription(combo.district, combo.itemType);
    return {
      title: { absolute: `${title} | Fazlalıkat` },
      description,
      alternates: { canonical: `/${combo.slug}` },
      openGraph: { title, description, images: [{ url: "/og-image.png" }] },
    };
  }

  const district = getDistrictBySlug(slug);
  if (district) {
    const title = districtTitle(district);
    const description = districtDescription(district);
    return {
      title: { absolute: `${title} | Fazlalıkat` },
      description,
      alternates: { canonical: districtPath(district) },
      openGraph: { title, description, images: [{ url: "/og-image.png" }] },
    };
  }

  return { robots: { index: false, follow: false } };
}

function FaqBlock({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Sık Sorulan Sorular
        </span>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
          Merak edilenler
        </h2>
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={item.question} className="rounded-2xl border border-line bg-background-elevated p-6">
              <h3 className="font-display text-base font-semibold">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const combo = resolveComboSlug(slug);
  if (combo) {
    const siblings = getCombosForDistrict(combo.district.slug).filter((c) => c.slug !== combo.slug);
    const faqs = comboFaqs(combo.district, combo.itemType);
    const relatedBlogs = (combo.itemType.relatedBlogSlugs ?? [])
      .map((s) => BLOG_POSTS.find((p) => p.slug === s))
      .filter(Boolean);

    return (
      <>
        <JsonLd
          data={breadcrumbSchema([
            { name: "Anasayfa", url: "/" },
            { name: "İlçeler", url: "/ilceler" },
            { name: combo.district.name, url: districtPath(combo.district) },
            { name: combo.itemType.label, url: `/${combo.slug}` },
          ])}
        />
        <JsonLd
          data={serviceSchema({
            name: `${combo.district.name} ${combo.itemType.label}`,
            description: comboDescription(combo.district, combo.itemType),
            url: `/${combo.slug}`,
            areaName: `${combo.district.name}, İstanbul`,
          })}
        />
        <JsonLd data={faqPageSchema(faqs)} />
        <JsonLd
          data={howToSchema({
            name: `${combo.district.name}'de ${combo.itemType.label} nasıl attırılır?`,
            description: combo.itemType.intro,
            steps: howToSteps(combo.district.name),
          })}
        />
        <Navbar />
        <main>
          <ComboHero district={combo.district} itemType={combo.itemType} />
          <section className="px-6 pb-16">
            <div className="mx-auto max-w-3xl space-y-8">
              {combo.itemType.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-display text-xl font-semibold">{section.heading}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
                </div>
              ))}
              <div>
                <h2 className="font-display text-xl font-semibold">
                  Neden {combo.district.name} sakinleri Fazlalıkat&apos;ı seçiyor?
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {combo.district.localNote} Bu sayede {combo.district.name}&apos;de{" "}
                  {combo.itemType.label.toLowerCase()} ihtiyacınızı da aynı güvenilirlik ve
                  hızla karşılıyoruz.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold">
                  {combo.district.name} mahallelerinde hizmet detayları
                </h2>
                <div className="mt-4 space-y-4">
                  {combo.district.neighborhoodNotes.map((n) => (
                    <div key={n.name}>
                      <h3 className="font-display text-sm font-semibold text-foreground/90">{n.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{n.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              {combo.itemType.hubPath && (
                <p className="text-sm text-muted">
                  Genel hizmet sayfası:{" "}
                  <Link href={combo.itemType.hubPath} className="text-accent hover:underline">
                    {combo.itemType.label} hub
                  </Link>
                  {" · "}
                  <Link href={districtPath(combo.district)} className="text-accent hover:underline">
                    {combo.district.name} eşya tahliye
                  </Link>
                </p>
              )}
              {relatedBlogs.length > 0 && (
                <div className="border-t border-line pt-6">
                  <h2 className="font-display text-lg font-semibold">İlgili rehberler</h2>
                  <ul className="mt-3 space-y-2">
                    {relatedBlogs.map((post) =>
                      post ? (
                        <li key={post.slug}>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-sm text-muted hover:text-accent"
                          >
                            {post.title}
                          </Link>
                        </li>
                      ) : null,
                    )}
                  </ul>
                </div>
              )}
              {siblings.length > 0 && (
                <div className="flex flex-wrap gap-2 border-t border-line pt-6">
                  {siblings.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="rounded-full bg-white/5 px-4 py-2 text-xs text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                    >
                      {s.district.name} {s.itemType.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
          <FaqBlock items={faqs} />
          <PriceCalculator />
          <CTA />
        </main>
        <Footer />
      </>
    );
  }

  const district = getDistrictBySlug(slug);
  if (!district) notFound();

  const relatedCombos = getCombosForDistrict(district.slug);
  const reviews = await getApprovedReviews();
  const faqs = districtFaqs(district);
  const nearby = nearbyDistricts(district, DISTRICTS);
  const guidePosts = BLOG_POSTS.filter((p) =>
    /koltuk|yatak|bosalt|esya|moloz|depo|ofis/i.test(p.slug),
  ).slice(0, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "İlçeler", url: "/ilceler" },
          { name: district.name, url: districtPath(district) },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: `${district.name} Eşya Tahliye ve Çöp Atım`,
          description: districtDescription(district),
          url: districtPath(district),
          areaName: `${district.name}, İstanbul`,
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: `${district.name}'de eşya tahliye nasıl yapılır?`,
          description: districtDescription(district),
          steps: howToSteps(district.name),
        })}
      />
      <Navbar />
      <main>
        <DistrictHero district={district} />
        <section className="px-6 pb-4">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl border border-line bg-background-elevated p-6">
              <h2 className="font-display text-base font-semibold">
                Neden {district.name} sakinleri Fazlalıkat&apos;ı seçiyor?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{district.localNote}</p>
            </div>
          </div>
        </section>
        {relatedCombos.length > 0 && (
          <div className="px-6 pb-4">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-3 font-display text-sm font-semibold text-foreground/80">
                {district.name} hizmetleri
              </h2>
              <div className="flex flex-wrap gap-2">
                {relatedCombos.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    className="rounded-full bg-white/5 px-4 py-2 text-xs text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {district.name} {c.itemType.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {district.name} mahallelerinde hizmet detayları
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {district.neighborhoodNotes.map((n) => (
                <div key={n.name} className="rounded-2xl border border-line bg-background-elevated p-6">
                  <h3 className="font-display text-base font-semibold">{n.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{n.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FaqBlock items={faqs} />
        {guidePosts.length > 0 && (
          <section className="px-6 pb-16">
            <div className="mx-auto max-w-7xl">
              <h2 className="font-display text-xl font-semibold">Rehber yazıları</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {guidePosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="rounded-xl border border-line bg-background-elevated px-4 py-3 text-sm text-muted hover:text-accent"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        {nearby.length > 0 && (
          <section className="px-6 pb-16">
            <div className="mx-auto max-w-7xl">
              <h2 className="font-display text-xl font-semibold">Yakın ilçeler</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((d) => (
                  <Link
                    key={d.slug}
                    href={districtPath(d)}
                    className="rounded-full bg-white/5 px-4 py-2 text-xs text-muted hover:bg-white/10 hover:text-foreground"
                  >
                    {d.name} eşya tahliye
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        <PriceCalculator />
        <Services />
        <Process />
        <Stats />
        <Testimonials reviews={reviews} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
