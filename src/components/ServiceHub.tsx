import Link from "next/link";
import Navbar from "@/components/Navbar";
import PriceCalculator from "@/components/PriceCalculator";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/data/content";
import { DISTRICTS, districtPath } from "@/data/districts";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import type { Review } from "@/lib/reviews-store";

export type HubFaq = { question: string; answer: string };

export type ServiceHubProps = {
  title: string;
  titleAccent: string;
  description: string;
  path: string;
  badge: string;
  waMessage: string;
  faqs: HubFaq[];
  highlights: { title: string; body: string }[];
  relatedLinks?: { href: string; label: string }[];
  reviews: Review[];
  /** When set, list all districts on that side instead of the default featured set. */
  side?: "Avrupa" | "Anadolu";
  seoParagraphs?: string[];
  areaName?: string;
};

export default function ServiceHub({
  title,
  titleAccent,
  description,
  path,
  badge,
  waMessage,
  faqs,
  highlights,
  relatedLinks = [],
  reviews,
  side,
  seoParagraphs = [],
  areaName,
}: ServiceHubProps) {
  const featured = side
    ? DISTRICTS.filter((d) => d.side === side)
    : DISTRICTS.filter((d) =>
        ["kadikoy", "uskudar", "besiktas", "sisli", "sultanbeyli", "esenyurt", "bagcilar", "umraniye"].includes(
          d.slug,
        ),
      );

  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: title, url: path },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: `${title} İstanbul`,
          description,
          url: path,
          areaName: areaName ?? (side ? `İstanbul ${side} Yakası` : "İstanbul"),
        })}
      />
      <Navbar />
      <main>
        <section className="relative px-6 pb-12 pt-32">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {badge}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {title} <span className="text-gradient">{titleAccent}</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-7 py-4 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105"
              >
                Ücretsiz Fiyat Al
              </a>
              <a
                href={`tel:${BRAND.phoneHref}`}
                className="rounded-full glass px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
              >
                {BRAND.phone}
              </a>
            </div>
          </div>
        </section>

        {seoParagraphs.length > 0 && (
          <section className="px-6 py-10">
            <div className="mx-auto max-w-3xl space-y-4">
              {seoParagraphs.map((p) => (
                <p key={p.slice(0, 48)} className="leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </section>
        )}

        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Neden <span className="text-gradient">Fazlalıkat?</span>
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-background-elevated p-6">
                  <h3 className="font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PriceCalculator />
        <Services />

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-xl font-semibold">
              {side ? `${side} Yakası ilçelerinde hizmet` : "Popüler ilçelerde hizmet"}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {featured.map((d) => (
                <Link
                  key={d.slug}
                  href={districtPath(d)}
                  className="rounded-full bg-white/5 px-4 py-2 text-xs text-muted hover:bg-white/10 hover:text-foreground"
                >
                  {side ? `${d.name} eşya tahliye` : d.name}
                </Link>
              ))}
              <Link href="/ilceler" className="rounded-full px-4 py-2 text-xs text-accent hover:underline">
                Tüm ilçeler →
              </Link>
            </div>
            {relatedLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {relatedLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="text-muted hover:text-accent">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Sık Sorulan Sorular
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              Bilmeniz gerekenler
            </h2>
            <div className="mt-10 space-y-6">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-2xl border border-line bg-background-elevated p-6">
                  <h3 className="font-display text-base font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials reviews={reviews} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
