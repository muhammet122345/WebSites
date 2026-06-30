"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/data/content";

export default function CallButton() {
  return (
    <motion.a
      href={`tel:${BRAND.phoneHref}`}
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full glass px-5 py-4 font-display text-sm font-semibold text-foreground shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
      aria-label={`${BRAND.phone} numarasını ara`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      <span className="hidden sm:inline">Hemen Ara</span>
    </motion.a>
  );
}
