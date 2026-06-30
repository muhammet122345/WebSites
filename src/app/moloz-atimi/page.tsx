import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PriceCalculator from "@/components/PriceCalculator";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/data/content";
import { breadcrumbSchema } from "@/lib/schema";
import { getApprovedReviews } from "@/lib/reviews-store";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Moloz Atımı ve Hafriyat Taşıma Hizmeti İstanbul",
  description:
    "İstanbul'da inşaat, tadilat ve yıkım sonrası moloz atımı ve hafriyat taşıma hizmeti. Çuval, kamyonet ve kamyon seçenekleriyle aynı gün randevu, lisanslı döküm sahasına nakliye.",
  alternates: { canonical: "/moloz-atimi" },
  openGraph: {
    title: "Moloz Atımı ve Hafriyat Taşıma Hizmeti İstanbul | Fazlalıkat",
    description:
      "İnşaat, tadilat ve yıkım sonrası moloz atımı ve hafriyat taşıma. Aynı gün randevu, lisanslı döküm sahasına nakliye.",
  },
};

const FAQ_ITEMS = [
  {
    question: "Moloz ile hafriyat arasındaki fark nedir?",
    answer:
      "Moloz; tadilat, yıkım veya inşaat sırasında ortaya çıkan beton, tuğla, alçıpan, seramik gibi yapı atıklarını ifade eder. Hafriyat ise kazı çalışmaları sırasında çıkan toprak ve kayaç türü malzemedir. İkisi de lisanslı döküm sahalarına taşınması gereken, evsel çöple karıştırılmaması gereken atık sınıflarıdır.",
  },
  {
    question: "Moloz çöpe veya kaldırıma atılabilir mi?",
    answer:
      "Hayır. Büyükşehir belediye yönetmeliklerine göre moloz ve hafriyatın konteyner yanına, kaldırıma veya boş arsaya bırakılması yasaktır ve idari para cezası uygulanır. Moloz, ancak yetkili araçlarla belediyenin belirlediği lisanslı döküm sahalarına taşınabilir.",
  },
  {
    question: "Moloz atımı fiyatı neye göre belirlenir?",
    answer:
      "Fiyat; moloz miktarı (çuval, kamyonet veya kamyon hacmi), bulunduğu kat ve asansör durumu, döküm sahasına mesafe ve moloz türüne (hafif tadilat atığı veya ağır yıkım molozu) göre değişir. Fotoğraf veya video ile WhatsApp'tan ön fiyat alabilir, keşif sonrası net teklifle ilerleyebilirsiniz.",
  },
  {
    question: "Hangi araç tipleri kullanılıyor?",
    answer:
      "İşin hacmine göre çuval bazlı küçük toplamalardan kamyonet ve kamyona, büyük yıkım işlerinde tır seçeneğine kadar farklı araç tipleriyle çalışıyoruz. Doğru araç seçimi hem maliyeti hem de işin süresini etkiler.",
  },
  {
    question: "AVM, rezidans veya site gibi alanlarda moloz atımı yapıyor musunuz?",
    answer:
      "Evet. Bu tür kontrollü alanlarda yönetimin belirlediği saat ve prosedürlere uygun, sessiz ve düzenli çalışan bir ekip ile hizmet veriyoruz; gerektiğinde gece operasyonu da planlanabilir.",
  },
  {
    question: "İstanbul'un her ilçesinde hizmet veriyor musunuz?",
    answer:
      "Evet, İstanbul'un Avrupa ve Anadolu yakasındaki tüm ilçelerde moloz atımı ve hafriyat taşıma hizmeti sunuyoruz. Bölgenize özel detaylar için ilçeler sayfamıza göz atabilirsiniz.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default async function MolozAtimiPage() {
  const message = "Merhaba, moloz atımı / hafriyat taşıma için fiyat almak istiyorum.";
  const reviews = await getApprovedReviews();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "Moloz Atımı", url: "/moloz-atimi" },
        ])}
      />
      <Navbar />
      <main>
        <section className="relative px-6 pb-12 pt-32">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              İstanbul Geneli · 7/24
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Moloz Atımı ve <span className="text-gradient">Hafriyat Taşıma</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted">
              İnşaat, tadilat veya yıkım sonrası ortaya çıkan moloz ve hafriyatı bulunduğu
              kattan alıp lisanslı döküm sahalarına taşıyoruz. Çuval bazlı küçük işlerden
              kamyon ve tır gerektiren büyük yıkımlara kadar her ölçekte, aynı gün randevu
              ile çözüm sunuyoruz.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-7 py-4 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105"
              >
                Ücretsiz Fiyat Al
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

        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Fiyatı Belirleyen Faktörler
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Moloz atımı fiyatı
              <br />
              <span className="text-gradient">neye göre değişir?</span>
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Moloz Miktarı",
                  body: "Çuval, kamyonet veya kamyon hacmine göre ölçülen toplam atık miktarı.",
                },
                {
                  title: "Kat ve Asansör Durumu",
                  body: "Asansörsüz binalarda üst kattan moloz indirme daha fazla işçilik gerektirir.",
                },
                {
                  title: "Döküm Sahasına Mesafe",
                  body: "Bulunduğunuz bölgeden lisanslı döküm sahasına olan uzaklık.",
                },
                {
                  title: "Moloz Türü",
                  body: "Hafif tadilat atığı (alçıpan, seramik) ile ağır yıkım molozu (beton, tuğla) farklı araç ve işçilik gerektirir.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-background-elevated p-6"
                >
                  <h3 className="font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted">
              Sabit ve genel geçer bir ücret yoktur — fotoğraf/video ile WhatsApp&apos;tan
              gönderdiğiniz bilgiye göre ön fiyat verir, keşif sonrası net teklifle ilerleriz.
            </p>
          </div>
        </section>

        <PriceCalculator />
        <Services />

        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Sık Sorulan Sorular
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Moloz atımı hakkında
              <br />
              <span className="text-gradient">bilmeniz gerekenler.</span>
            </h2>

            <div className="mt-10 space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-line bg-background-elevated p-6"
                >
                  <h3 className="font-display text-base font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted">
              Moloz ve hafriyat konusunda daha fazla bilgi için{" "}
              <Link href="/blog#moloz-hafriyat-rehberleri" className="text-accent hover:underline">
                blog rehberlerimize
              </Link>
              , bölgenize özel detaylar için{" "}
              <Link href="/ilceler" className="text-accent hover:underline">
                tüm ilçelerimize
              </Link>{" "}
              göz atabilirsiniz.
            </p>
          </div>
        </section>

        <Testimonials reviews={reviews} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
