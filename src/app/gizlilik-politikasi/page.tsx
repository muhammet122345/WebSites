import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/data/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
  description: "Fazlalıkat kişisel verilerin korunması ve gizlilik politikası.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "Gizlilik Politikası", url: "/gizlilik-politikasi" },
        ])}
      />
      <Navbar />
      <main className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Yasal</span>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Gizlilik Politikası ve KVKK Aydınlatma Metni
          </h1>
          <p className="mt-4 text-sm text-muted">Son güncelleme: Haziran 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">1. Veri Sorumlusu</h2>
              <p className="mt-2">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri
                sorumlusu, {BRAND.address} adresinde bulunan Fazlalıkat&apos;tır.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                2. İşlenen Kişisel Veriler
              </h2>
              <p className="mt-2">
                Hizmet talebiniz sırasında ad-soyad, telefon numarası, adres ve WhatsApp/e-posta
                üzerinden bize ilettiğiniz iletişim içerikleri gibi kişisel verileriniz
                işlenebilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                3. İşleme Amaçları
              </h2>
              <p className="mt-2">
                Verileriniz; talep ettiğiniz hizmetin (eşya/moloz/çöp tahliyesi) planlanması,
                fiyat teklifi sunulması, randevu organizasyonu ve sizinle iletişim kurulması
                amacıyla işlenir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                4. Hukuki Sebep ve Saklama Süresi
              </h2>
              <p className="mt-2">
                Verileriniz, hizmet ilişkisinin kurulması ve ifası için gerekli olan süre
                boyunca ve yasal saklama yükümlülüklerimiz çerçevesinde saklanır.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                5. Verilerin Aktarımı
              </h2>
              <p className="mt-2">
                Kişisel verileriniz, hizmetin ifası için gerekli olmadıkça üçüncü kişilerle
                paylaşılmaz; yalnızca yasal zorunluluk hallerinde yetkili kamu kurumlarıyla
                paylaşılabilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">
                6. KVKK Kapsamındaki Haklarınız
              </h2>
              <p className="mt-2">
                KVKK&apos;nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme,
                işlenmişse buna ilişkin bilgi talep etme, işlenme amacına uygun kullanılıp
                kullanılmadığını öğrenme, düzeltilmesini veya silinmesini isteme haklarına
                sahipsiniz. Bu haklarınızı kullanmak için {BRAND.email} adresinden bizimle
                iletişime geçebilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground">7. İletişim</h2>
              <p className="mt-2">
                Sorularınız için {BRAND.email} veya {BRAND.phone} üzerinden bize
                ulaşabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
