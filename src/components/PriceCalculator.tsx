"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/data/content";

const SERVICE_TYPES = [
  { id: "ev", label: "Ev / Daire" },
  { id: "depo", label: "Depo / Çatı Katı" },
  { id: "ofis", label: "Ofis" },
  { id: "moloz", label: "İnşaat Molozu" },
  { id: "bahce", label: "Bahçe / Yeşil Alan" },
  { id: "acil", label: "Acil Çöp / Hurda" },
];

const DISTRICTS = [
  "Kadıköy",
  "Beşiktaş",
  "Çankaya",
  "Bornova",
  "Nilüfer",
  "Diğer",
];

export default function PriceCalculator() {
  const [serviceId, setServiceId] = useState(SERVICE_TYPES[0].id);
  const [size, setSize] = useState(60);
  const [district, setDistrict] = useState(DISTRICTS[0]);

  const service = SERVICE_TYPES.find((s) => s.id === serviceId)!;

  const message = `Merhaba, ${service.label.toLowerCase()} tahliyesi için fiyat almak istiyorum. Alan: ${size} m², İlçe: ${district}.`;

  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Hızlı Teklif
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Bilgilerinizi girin,
              <br />
              size özel teklifi alın.
            </h2>
            <p className="mt-5 max-w-md text-muted">
              Hizmet türünü, alan büyüklüğünü ve ilçenizi seçin; ekibimiz size en uygun
              fiyatı hemen WhatsApp üzerinden iletsin.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-8"
          >
            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-sm text-muted">Hizmet Türü</label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {SERVICE_TYPES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setServiceId(s.id)}
                      className={`rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                        serviceId === s.id
                          ? "bg-accent text-[#06070a]"
                          : "bg-white/5 text-muted hover:bg-white/10"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between text-sm">
                  <label htmlFor="alan-buyuklugu" className="text-muted">
                    Alan Büyüklüğü
                  </label>
                  <span className="font-display font-semibold text-accent">{size} m²</span>
                </div>
                <input
                  id="alan-buyuklugu"
                  type="range"
                  min={10}
                  max={300}
                  step={5}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full accent-[#c6ff5e]"
                  aria-label="Alan büyüklüğü (metrekare)"
                />
              </div>

              <div>
                <label htmlFor="ilce-secimi" className="mb-3 block text-sm text-muted">
                  İlçe
                </label>
                <select
                  id="ilce-secimi"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
                >
                  {DISTRICTS.map((d) => (
                    <option key={d} value={d} className="bg-background-elevated">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-accent px-6 py-4 text-center font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-[1.02]"
              >
                WhatsApp&apos;tan Teklif Al
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
