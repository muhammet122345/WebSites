"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/data/content";

export default function CTA() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-background-elevated px-8 py-16 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-accent-2/20 blur-[100px]" />

          <span className="relative text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Bugün Başlayın
          </span>
          <h2 className="relative mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Fazlalıklarınızdan
            <br />
            <span className="text-gradient">kurtulmaya hazır mısınız?</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-muted">
            Tek mesajla ücretsiz keşif planlayın, aynı gün içinde alanınızı geri kazanın.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-8 py-4 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105"
            >
              WhatsApp&apos;tan Yaz
            </a>
            <a
              href={`tel:${BRAND.phoneHref}`}
              className="rounded-full border border-line px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
            >
              {BRAND.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
