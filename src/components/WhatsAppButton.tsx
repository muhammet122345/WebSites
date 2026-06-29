"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/data/content";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${BRAND.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-accent px-5 py-4 font-display text-sm font-semibold text-[#06070a] shadow-[0_10px_40px_-10px_rgba(198,255,94,0.6)]"
      aria-label="WhatsApp ile iletişime geç"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.6.15-.15.34-.39.51-.59.17-.2.22-.34.34-.56.12-.22.06-.42-.03-.6-.1-.17-.85-2.05-1.17-2.8-.31-.74-.62-.64-.86-.64-.22 0-.49 0-.75 0-.27 0-.7.1-1.07.5-.37.4-1.41 1.38-1.41 3.36 0 1.98 1.43 3.9 1.63 4.17.2.27 2.7 4.13 6.56 5.62 3.86 1.5 3.86 1 4.55.94.7-.07 2.26-.92 2.58-1.81.32-.89.32-1.66.22-1.81-.1-.15-.37-.24-.66-.39z" />
        <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.9.53 3.68 1.45 5.2L2 22l4.93-1.29A9.95 9.95 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2zm0 18.18c-1.7 0-3.3-.46-4.67-1.27l-.33-.2-3.13.82.84-3.05-.22-.34A8.18 8.18 0 0 1 3.82 12c0-4.53 3.68-8.18 8.2-8.18S20.2 7.47 20.2 12s-3.68 8.18-8.18 8.18z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp&apos;tan Yaz</span>
    </motion.a>
  );
}
