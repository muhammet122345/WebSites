import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import { getSiteConfig } from "@/lib/site-config";
import { getApprovedReviews } from "@/lib/reviews-store";
import { getAllBlogPosts } from "@/lib/blog-store";
import { FAQ } from "@/data/content";
import { faqPageSchema } from "@/lib/schema";

const PriceCalculator = dynamic(() => import("@/components/PriceCalculator"));
const Services = dynamic(() => import("@/components/Services"));
const Process = dynamic(() => import("@/components/Process"));
const Stats = dynamic(() => import("@/components/Stats"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const HomeSeoContent = dynamic(() => import("@/components/HomeSeoContent"));
const Blog = dynamic(() => import("@/components/Blog"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export const revalidate = 300;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [{ hero }, reviews, posts] = await Promise.all([
    getSiteConfig(),
    getApprovedReviews(),
    getAllBlogPosts(),
  ]);

  return (
    <>
      <JsonLd data={faqPageSchema(FAQ)} />
      <Navbar />
      <main>
        <Hero content={hero} />
        <PriceCalculator />
        <Services />
        <Process />
        <Stats />
        <Gallery />
        <Testimonials reviews={reviews} />
        <section id="sss" className="relative px-6 py-28">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Sık Sorulan Sorular
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Merak edilenler
            </h2>
            <div className="mt-10 space-y-4">
              {FAQ.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-line bg-background-elevated p-6"
                >
                  <h3 className="font-display text-base font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <HomeSeoContent />
        <Blog posts={posts.slice(0, 3)} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
