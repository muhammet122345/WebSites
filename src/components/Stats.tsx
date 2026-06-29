"use client";

import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";
import { STATS } from "@/data/content";

export default function Stats() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass grid grid-cols-2 gap-10 rounded-3xl px-8 py-12 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl font-semibold text-gradient sm:text-5xl"
              />
              <div className="mt-2 text-xs uppercase tracking-wide text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
