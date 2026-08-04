import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/data/content";
import { DISTRICTS, districtPath } from "@/data/districts";

const SERVICE_LINKS = [
  { label: "Ev Boşaltma", href: "/ev-bosaltma" },
  { label: "Çöp Atım Hizmeti", href: "/cop-atim-hizmeti" },
  { label: "Moloz Atımı", href: "/moloz-atimi" },
  { label: "Depo Temizliği", href: "/depo-temizligi" },
  { label: "Ofis Boşaltma", href: "/ofis-bosaltma" },
  { label: "Çatı Katı Temizliği", href: "/cati-kati-temizligi" },
  { label: "Avrupa Yakası", href: "/avrupa-yakasi-esya-tahliye" },
  { label: "Anadolu Yakası", href: "/anadolu-yakasi-esya-tahliye" },
  { label: "Blog", href: "/blog" },
  { label: "Yorum Yaz", href: "/yorum" },
];

export default function Footer() {
  const avrupa = DISTRICTS.filter((d) => d.side === "Avrupa");
  const anadolu = DISTRICTS.filter((d) => d.side === "Anadolu");

  return (
    <footer id="iletisim" className="relative border-t border-line px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-lg font-semibold">
              Fazlalı<span className="text-accent">kat</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              İstanbul Anadolu ve Avrupa Yakası&apos;nda profesyonel eşya, moloz ve çöp
              tahliye hizmeti. Hızlı, şeffaf ve çevre dostu.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>
                <a href={`tel:${BRAND.phoneHref}`} className="hover:text-foreground">
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${BRAND.phoneHref2}`} className="hover:text-foreground">
                  {BRAND.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-foreground">
                  {BRAND.email}
                </a>
              </li>
              <li>{BRAND.address}</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-foreground">Hizmetler</div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              {NAV_LINKS.filter((l) => l.href.startsWith("/#")).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-sm font-medium text-foreground">Çalışma Saatleri</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Pzt – Cmt: 08:00 – 20:00</li>
              <li>Pazar: 09:00 – 18:00</li>
              <li>WhatsApp: 7/24</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-foreground">Avrupa Yakası</div>
            <ul className="mt-4 columns-2 gap-x-4 space-y-2 text-sm text-muted">
              {avrupa.map((d) => (
                <li key={d.slug} className="break-inside-avoid">
                  <Link href={districtPath(d)} className="hover:text-foreground">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-foreground">Anadolu Yakası</div>
            <ul className="mt-4 columns-2 gap-x-4 space-y-2 text-sm text-muted">
              {anadolu.map((d) => (
                <li key={d.slug} className="break-inside-avoid">
                  <Link href={districtPath(d)} className="hover:text-foreground">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/ilceler" className="mt-4 inline-block text-sm text-accent hover:underline">
              Tüm ilçeler →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Fazlalıkat. Tüm hakları saklıdır.</span>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/hakkimizda" className="hover:text-foreground">
              Hakkımızda
            </Link>
            <Link href="/gizlilik-politikasi" className="hover:text-foreground">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="hover:text-foreground">
              Kullanım Şartları
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-foreground">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
