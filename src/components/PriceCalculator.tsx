"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/data/content";
import { DISTRICTS as ISTANBUL_DISTRICTS } from "@/data/districts";

const SERVICE_TYPES = [
  { id: "ev", label: "Ev / Daire" },
  { id: "depo", label: "Depo / Çatı Katı" },
  { id: "ofis", label: "Ofis" },
  { id: "moloz", label: "İnşaat Molozu" },
  { id: "bahce", label: "Bahçe / Yeşil Alan" },
  { id: "acil", label: "Acil Çöp / Hurda" },
];

const ITEM_TYPES = [
  "Koltuk / Kanepe",
  "Yatak / Baza / Şilte",
  "Dolap / Gardırop",
  "Masa / Sandalye",
  "Buzdolabı / Çamaşır Makinesi",
  "Televizyon / Elektronik",
  "Daire / Ev Boşaltma",
  "Depo / Bodrum Temizliği",
  "Ofis Boşaltma",
  "Kiracıdan Kalan Eşyalar",
  "Hacimli Çöp / Atık",
  "İnşaat Molozu",
  "Diğer",
];

const FLOORS = ["Zemin", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];
const ELEVATOR = ["Asansör Var", "Asansör Yok"];
const WHEN = ["Bugün", "Yarın", "2-3 Gün", "Bu Hafta", "Esnek"];

const DISTRICTS = [...ISTANBUL_DISTRICTS.map((d) => d.name), "Diğer"];

export default function PriceCalculator() {
  const [serviceId, setServiceId] = useState(SERVICE_TYPES[0].id);
  const [itemType, setItemType] = useState(ITEM_TYPES[0]);
  const [size, setSize] = useState(60);
  const [district, setDistrict] = useState(DISTRICTS[0]);
  const [floor, setFloor] = useState(FLOORS[0]);
  const [elevator, setElevator] = useState(ELEVATOR[0]);
  const [when, setWhen] = useState(WHEN[0]);

  const service = SERVICE_TYPES.find((s) => s.id === serviceId)!;

  const message = [
    `Merhaba, ${service.label.toLowerCase()} tahliyesi için fiyat almak istiyorum.`,
    `Eşya/iş: ${itemType}`,
    `İlçe: ${district}`,
    `Kat: ${floor}`,
    `Asansör: ${elevator}`,
    `Alan: ${size} m²`,
    `Ne zaman: ${when}`,
  ].join("\n");

  return (
    <section id="fiyat" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Hızlı Teklif
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Tahmini fiyatı
              <br />
              <span className="text-gradient">hemen hesapla.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted">
              İlçe, eşya tipi, kat ve asansör bilgisini seçin; WhatsApp&apos;tan net teklif alın.
              Onaylamadan ekip hareket etmez — gizli ücret yok.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>• Aynı gün / ertesi gün randevu seçenekleri</li>
              <li>• Eşyayı daireden / depodan biz alırız</li>
              <li>• İstanbul Anadolu & Avrupa Yakası</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-8"
          >
            <div className="space-y-5">
              <div>
                <label className="mb-3 block text-sm text-muted">Hizmet Türü</label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {SERVICE_TYPES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="ilce-secimi" className="mb-2 block text-sm text-muted">
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
                <div>
                  <label htmlFor="esya-tipi" className="mb-2 block text-sm text-muted">
                    Eşya / İş Tipi
                  </label>
                  <select
                    id="esya-tipi"
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
                  >
                    {ITEM_TYPES.map((d) => (
                      <option key={d} value={d} className="bg-background-elevated">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="kat-secimi" className="mb-2 block text-sm text-muted">
                    Kat
                  </label>
                  <select
                    id="kat-secimi"
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
                  >
                    {FLOORS.map((d) => (
                      <option key={d} value={d} className="bg-background-elevated">
                        {d === "Zemin" ? "Zemin" : `${d}. Kat`}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="asansor-secimi" className="mb-2 block text-sm text-muted">
                    Asansör
                  </label>
                  <select
                    id="asansor-secimi"
                    value={elevator}
                    onChange={(e) => setElevator(e.target.value)}
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
                  >
                    {ELEVATOR.map((d) => (
                      <option key={d} value={d} className="bg-background-elevated">
                        {d}
                      </option>
                    ))}
                  </select>
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
                <label className="mb-2 block text-sm text-muted">Ne zaman?</label>
                <div className="flex flex-wrap gap-2">
                  {WHEN.map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setWhen(w)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                        when === w
                          ? "bg-accent text-[#06070a]"
                          : "bg-white/5 text-muted hover:bg-white/10"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-accent px-6 py-4 text-center font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-[1.02]"
              >
                Randevu Al &amp; Fiyat Hesapla
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
