"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND, NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-5 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass py-2 mx-4 lg:mx-auto" : "py-2"
        }`}
      >
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          Fazlalı<span className="text-accent">kat</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex flex-col items-end gap-0.5">
            <a
              href={`tel:${BRAND.phoneHref}`}
              className="text-sm font-medium text-foreground/90 hover:text-accent"
            >
              {BRAND.phone}
            </a>
            <a
              href={`tel:${BRAND.phoneHref2}`}
              className="text-xs text-muted hover:text-accent"
            >
              {BRAND.phone2}
            </a>
          </div>
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105"
          >
            Ücretsiz Fiyat Al
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full glass lg:hidden"
          aria-label="Menüyü aç/kapat"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-[1.5px] w-5 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-[1.5px] w-5 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-4 mt-3 flex flex-col gap-1 rounded-3xl p-4 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-foreground/90 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${BRAND.phoneHref}`}
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-sm text-foreground/90 hover:bg-white/5"
          >
            {BRAND.phone}
          </a>
          <a
            href={`tel:${BRAND.phoneHref2}`}
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-sm text-foreground/90 hover:bg-white/5"
          >
            {BRAND.phone2}
          </a>
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            className="mt-2 rounded-2xl bg-accent px-4 py-3 text-center font-display text-sm font-semibold text-[#06070a]"
          >
            Ücretsiz Fiyat Al
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
