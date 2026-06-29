import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/data/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Fazlalıkat web sitesi kullanım şartları.",
  alternates: { canonical: "/kullanim-sartlari" },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "Kullanım Şartları", url: "/kullanim-sartlari" },
        ])}
      />
      <Navbar />
      <main className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Yasal</span>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Kullanım Şartları
          </h1>
          <p className="mt-4 text-sm text-muted">Son güncelleme: Haziran 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">1. Genel</h2>
              <p className="mt-2">
                Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş olursunuz. Fazlalıkat,
                bu şartları önceden bildirimde bulunmaksızın güncelleme hakkını saklı tutar.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                2. Hizmet Kapsamı
              </h2>
              <p className="mt-2">
                Sitede yer alan hizmet açıklamaları ve fiyat hesaplama aracı bilgilendirme
                amaçlıdır; nihai fiyat ve hizmet kapsamı, ücretsiz keşif sonrası tarafınıza
                ayrıca bildirilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                3. Sorumluluk Sınırı
              </h2>
              <p className="mt-2">
                Sitedeki içerikler genel bilgilendirme amaçlıdır. Hizmet öncesi verilen tahmini
                fiyat aralıkları bağlayıcı olmayıp, nihai fiyat keşif sonrası netleşir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                4. Fikri Mülkiyet
              </h2>
              <p className="mt-2">
                Sitedeki marka, logo, metin ve görsel içerikler Fazlalıkat&apos;a aittir; izinsiz
                kopyalanamaz veya ticari amaçla kullanılamaz.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">5. İletişim</h2>
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
