import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/data/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Fazlalıkat, İstanbul'un tüm ilçelerinde eşya, moloz ve çöp tahliye hizmeti veren sigortalı, şeffaf ve çevre dostu bir ekiptir.",
  alternates: { canonical: "/hakkimizda" },
};

const VALUES = [
  {
    title: "Şeffaf Fiyatlandırma",
    body: "Keşif sonrası verdiğimiz fiyat nettir; gizli ücret veya sürpriz ek masraf çıkarmayız.",
  },
  {
    title: "Sigortalı Ekip",
    body: "Tüm ekiplerimiz ve araçlarımız iş kazası ve nakliye sigortası kapsamındadır.",
  },
  {
    title: "Çevre Dostu Bertaraf",
    body: "Geri dönüştürülebilir malzemeleri ayrıştırır, kullanılabilir eşyaları bağışa yönlendirir, kalanı lisanslı tesislere teslim ederiz.",
  },
  {
    title: "Aynı Gün Çözüm",
    body: "Çoğu bölgede aynı gün veya ertesi gün randevu verir, acil taleplere WhatsApp üzerinden hızlı dönüş yaparız.",
  },
  {
    title: "Siz Taşımazsınız, Biz Tahliye Ederiz",
    body: "Eşyaları kapıya veya kaldırıma çıkarmanız gerekmez; ekibimiz içeri girer, bulunduğu yerden alır ve kendi imkanlarıyla dışarı çıkarır.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "Hakkımızda", url: "/hakkimizda" },
        ])}
      />
      <Navbar />
      <main className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Hakkımızda
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Fazlalıklarınızdan kurtulmanızı
            <br />
            <span className="text-gradient">kolaylaştırıyoruz.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            Fazlalıkat, İstanbul&apos;un Avrupa ve Anadolu yakasındaki tüm ilçelerinde ev, ofis,
            depo ve çatı katı eşya tahliyesi yapan bir ekiptir. Amacımız, eşyalarınızdan
            kurtulma sürecini olabildiğince hızlı, şeffaf ve stressiz hale getirmek.
          </p>

          <p className="mt-4 leading-relaxed text-muted">
            Taşınma, miras, kiracı çıkışı veya sadece yer açmak istediğiniz her durumda;
            tek bir mesajla bize ulaşıp, ücretsiz keşif sonrası net fiyatla hizmet
            alabilirsiniz. Eşyalarınızın nereye gittiğini şeffaf şekilde anlatır, mümkün
            olan her parçayı geri dönüşüme veya bağışa yönlendiririz.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl border border-line bg-background-elevated p-6">
                <h2 className="font-display text-base font-semibold">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-background-elevated p-6">
            <h2 className="font-display text-base font-semibold">İletişim</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>{BRAND.address}</li>
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
            </ul>
          </div>

          <p className="mt-8 text-sm text-muted">
            Hizmet verdiğimiz bölgeleri{" "}
            <Link href="/ilceler" className="text-accent hover:underline">
              ilçeler sayfamızdan
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
