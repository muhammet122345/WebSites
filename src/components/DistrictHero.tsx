import Link from "next/link";
import { BRAND } from "@/data/content";
import type { District } from "@/data/districts";

export default function DistrictHero({ district }: { district: District }) {
  const message = `Merhaba, ${district.name} bölgesinde eşya tahliye/çöp atım hizmeti almak istiyorum.`;

  return (
    <section className="relative px-6 pb-16 pt-32">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-6 flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-foreground">
            Anasayfa
          </Link>
          <span>/</span>
          <Link href="/ilceler" className="hover:text-foreground">
            İlçeler
          </Link>
          <span>/</span>
          <span className="text-foreground">{district.name}</span>
        </nav>

        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          İstanbul {district.side} Yakası
        </span>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {district.name} Eşya Tahliye ve <span className="text-gradient">Çöp Atım</span> Hizmeti
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {district.name}&apos;in {district.characteristic} göz önünde bulundurarak;{" "}
          {district.neighborhoods.join(", ")} ve çevresindeki tüm mahallelerde{" "}
          <Link href="/ev-bosaltma" className="text-foreground underline hover:text-accent">
            ev boşaltma
          </Link>
          , ofis, depo ve çatı katı eşya tahliyesi yapıyoruz. Sigortalı ekibimizle
          aynı gün randevu, şeffaf fiyat ve çevre dostu bertaraf garantisi sunuyoruz.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {district.neighborhoods.map((n) => (
            <span
              key={n}
              className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-muted"
            >
              {n}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-7 py-4 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105"
          >
            {district.name}&apos;de Ücretsiz Fiyat Al
          </a>
          <a
            href={`tel:${BRAND.phoneHref}`}
            className="rounded-full glass px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
          >
            {BRAND.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
