"use client";

import { motion, type Variants } from "framer-motion";
import { BRAND } from "@/data/content";
import type { HeroContent } from "@/lib/site-config";

// No opacity change here on purpose: any of these blocks could end up being
// the LCP candidate depending on viewport. Animating opacity from 0 delays
// when Chrome considers an element "painted", which inflates FCP/LCP.
const fadeUp: Variants = {
  hidden: { y: 28 },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const slideUp: Variants = {
  hidden: { y: 28 },
  show: {
    y: 0,
    transition: { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function AmbientGlow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="animate-glow-a absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="animate-glow-b absolute right-[-10rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-2/15 blur-[120px]" />
      <div className="animate-glow-c absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
    </div>
  );
}

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <AmbientGlow />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {content.badge}
            </motion.div>
            {content.badge2 && (
              <motion.div
                variants={fadeUp}
                custom={0.5}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                {content.badge2}
              </motion.div>
            )}
          </div>

          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="show"
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl pr-6 sm:pr-0"
          >
            {content.headlineLine1}
            <br />
            <span className="text-gradient">{content.headlineAccent}</span> {content.headlineSuffix}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {content.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-7 py-4 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105"
            >
              {content.ctaPrimary}
            </a>
            <a
              href="#surec"
              className="rounded-full glass px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              {content.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-6"
          >
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-semibold">{stat.value}</div>
                <div className="text-xs uppercase tracking-wide text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
