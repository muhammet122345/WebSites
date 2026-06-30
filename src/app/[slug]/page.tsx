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
import { breadcrumbSchema } from "@/lib/schema";
import { getApprovedReviews } from "@/lib/reviews-store";

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
    const title = `${combo.district.name} ${combo.itemType.titleSuffix}`;
    const description = `${combo.district.name} bölgesinde ${combo.itemType.label.toLowerCase()} hizmeti. Aynı gün randevu, şeffaf fiyat. Fazlalıkat.`;
    return {
      title,
      description,
      alternates: { canonical: `/${combo.slug}` },
      openGraph: { title, description },
    };
  }

  const district = getDistrictBySlug(slug);
  if (district) {
    const title = `${district.name} Eşya Tahliye ve Çöp Atım Hizmeti`;
    const description = `${district.name} ve ${district.neighborhoods.slice(0, 3).join(", ")} bölgelerinde ev, ofis, depo eşya tahliyesi. Aynı gün randevu, şeffaf fiyat. Fazlalıkat.`;
    return {
      title,
      description,
      alternates: { canonical: districtPath(district) },
      openGraph: { title, description },
    };
  }

  return {};
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

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "İlçeler", url: "/ilceler" },
          { name: district.name, url: districtPath(district) },
        ])}
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
            <div className="mx-auto max-w-7xl flex flex-wrap gap-2">
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
