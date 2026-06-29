import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/data/content";
import { DISTRICTS, districtPath } from "@/data/districts";

const FEATURED_DISTRICT_SLUGS = ["kadikoy", "uskudar", "besiktas", "sisli", "maltepe", "umraniye"];

export default function Footer() {
  const featuredDistricts = DISTRICTS.filter((d) => FEATURED_DISTRICT_SLUGS.includes(d.slug));

  return (
    <footer id="iletisim" className="relative border-t border-line px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="font-display text-lg font-semibold">
              Fazlalı<span className="text-accent">kat</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Türkiye&apos;nin profesyonel eşya, moloz ve çöp tahliye hizmeti. Hızlı,
              şeffaf ve çevre dostu.
            </p>
          </div>

          <div>
            <div className="text-sm font-medium text-foreground">Hızlı Erişim</div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-foreground">İletişim</div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href={`tel:${BRAND.phoneHref}`} className="hover:text-foreground">
                  {BRAND.phone}
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
            <div className="text-sm font-medium text-foreground">Çalışma Saatleri</div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Pazartesi – Cumartesi: 08:00 – 20:00</li>
              <li>Pazar: 09:00 – 18:00</li>
              <li>WhatsApp hattı: 7/24 aktif</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-foreground">Popüler İlçeler</div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {featuredDistricts.map((d) => (
                <li key={d.slug}>
                  <Link href={districtPath(d)} className="hover:text-foreground">
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ilceler" className="text-accent hover:underline">
                  Tüm İlçeler →
                </Link>
              </li>
            </ul>
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
