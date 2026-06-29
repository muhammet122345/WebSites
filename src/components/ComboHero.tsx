import Link from "next/link";
import { BRAND } from "@/data/content";
import type { District } from "@/data/districts";
import type { ItemType } from "@/data/item-types";

export default function ComboHero({
  district,
  itemType,
}: {
  district: District;
  itemType: ItemType;
}) {
  const message = `Merhaba, ${district.name} bölgesinde ${itemType.label.toLowerCase()} ile ilgili hizmet almak istiyorum.`;

  return (
    <section className="relative px-6 pb-16 pt-32">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-foreground">
            Anasayfa
          </Link>
          <span>/</span>
          <Link href="/ilceler" className="hover:text-foreground">
            İlçeler
          </Link>
          <span>/</span>
          <Link href={`/${district.slug}-esya-tahliye`} className="hover:text-foreground">
            {district.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">{itemType.label}</span>
        </nav>

        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          İstanbul {district.side} Yakası
        </span>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {district.name} <span className="text-gradient">{itemType.titleSuffix}</span>
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-muted">
          {itemType.intro} {district.name}&apos;in {district.characteristic} göz önünde
          bulundurarak; {district.neighborhoods.join(", ")} ve çevresindeki tüm mahallelerde
          bu hizmeti sunuyoruz.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-7 py-4 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105"
          >
            WhatsApp&apos;tan Fiyat Al
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
