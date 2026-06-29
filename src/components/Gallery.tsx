"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "@/data/content";

function CompareCard({ item, index }: { item: (typeof GALLERY)[number]; index: number }) {
  const [pos, setPos] = useState(50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-3xl border border-line bg-background-elevated"
    >
      <div className="relative aspect-[4/3] w-full select-none">
        <Image
          src={item.before}
          alt={`${item.title} - öncesi`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={item.after}
            alt={`${item.title} - sonrası`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        </div>

        <div
          className="absolute inset-y-0 z-10 w-[2px] bg-accent/80"
          style={{ left: `${pos}%` }}
        />
        <div
          className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#06070a]"
          style={{ left: `${pos}%` }}
        >
          Kaydır
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-label={`${item.title} öncesi sonrası karşılaştırma`}
        />

        <span className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
          Önce
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
          Sonra
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold">{item.title}</h3>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="galeri" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Öncesi / Sonrası
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Gözlerinizle
            <br />
            <span className="text-gradient">farkı görün.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <CompareCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
