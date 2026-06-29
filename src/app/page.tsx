import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { getSiteConfig } from "@/lib/site-config";

// Navbar and Hero stay as static imports: Navbar is tiny and always visible,
// and Hero contains the LCP element, so deferring either would delay paint
// rather than help it. Everything below the fold is code-split.
const PriceCalculator = dynamic(() => import("@/components/PriceCalculator"));
const Services = dynamic(() => import("@/components/Services"));
const Process = dynamic(() => import("@/components/Process"));
const Stats = dynamic(() => import("@/components/Stats"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Blog = dynamic(() => import("@/components/Blog"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default async function Home() {
  const { hero } = await getSiteConfig();

  return (
    <>
      <Navbar />
      <main>
        <Hero content={hero} />
        <PriceCalculator />
        <Services />
        <Process />
        <Stats />
        <Gallery />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
