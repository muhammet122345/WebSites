"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/content";

export default function Process() {
  return (
    <section id="surec" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Nasıl Çalışır
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Dört adımda
            <br />
            <span className="text-gradient">tamamen boş alan.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-7 hidden h-px w-full origin-left bg-gradient-to-r from-accent via-accent-2 to-transparent lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background-elevated font-display text-lg font-semibold text-accent ring-1 ring-line">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
