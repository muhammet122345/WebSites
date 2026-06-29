import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/data/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Fazlalıkat web sitesinde kullanılan çerezler hakkında bilgilendirme.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "Çerez Politikası", url: "/cerez-politikasi" },
        ])}
      />
      <Navbar />
      <main className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Yasal</span>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Çerez Politikası
          </h1>
          <p className="mt-4 text-sm text-muted">Son güncelleme: Haziran 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                1. Çerez Nedir?
              </h2>
              <p className="mt-2">
                Çerezler, web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin
                dosyalarıdır; sitenin düzgün çalışmasını ve deneyiminizin iyileştirilmesini
                sağlar.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                2. Kullandığımız Çerez Türleri
              </h2>
              <p className="mt-2">
                Sitemizde, temel site işlevselliği için zorunlu çerezler ile site
                performansını ve ziyaretçi deneyimini analiz etmeye yönelik analitik çerezler
                kullanılabilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                3. Çerezleri Yönetme
              </h2>
              <p className="mt-2">
                Tarayıcı ayarlarınız üzerinden çerezleri kabul etmeyi reddedebilir veya
                mevcut çerezleri silebilirsiniz. Bu durumda sitenin bazı bölümleri beklendiği
                gibi çalışmayabilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">4. İletişim</h2>
              <p className="mt-2">
                Sorularınız için {BRAND.email} üzerinden bize ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
