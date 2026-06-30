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
  title: "Ev Boşaltma Hizmeti İstanbul | Eşya ve Mobilya Tahliyesi",
  description:
    "Ev boşaltma ve ev çöp taşıma hizmeti — kiracı tahliyesi değil, evinizdeki eşya, mobilya ve büyük hacimli çöplerin profesyonelce kaldırılmasıdır. Aynı gün randevu, şeffaf fiyat. İstanbul'un tüm ilçelerinde.",
  alternates: { canonical: "/ev-bosaltma" },
  openGraph: {
    title: "Ev Boşaltma Hizmeti İstanbul | Eşya ve Mobilya Tahliyesi",
    description:
      "Evinizdeki eşya ve mobilyaların profesyonelce tahliyesi. Aynı gün randevu, şeffaf fiyat.",
  },
};

const FAQ_ITEMS = [
  {
    question: "Ev boşaltma hizmeti kiracı tahliyesi mi?",
    answer:
      "Hayır. Ev boşaltma hizmetimiz tamamen evdeki eşya, mobilya ve fazlalıkların profesyonelce kaldırılıp tahliye edilmesidir. Kiracı çıkarma, dava süreci veya hukuki tahliye ile hiçbir ilgisi yoktur — biz sadece eşyalarınızı taşıyıp bertaraf ediyoruz.",
  },
  {
    question: "Ev boşaltma ne kadar sürer?",
    answer:
      "Standart bir daire için işlem genellikle aynı gün içinde, birkaç saatte tamamlanır. Çok büyük veya eşya yoğunluğu fazla evlerde süre keşif sonrası netleşir.",
  },
  {
    question: "Hangi eşyalar bu hizmete dahil?",
    answer:
      "Mobilya, beyaz eşya, kutu, elektronik eşya ve genel ev eşyası dahil her şeyi tek seferde alıyoruz. İnşaat molozu veya bahçe atığınız varsa bunları da aynı randevuda tahliye edebiliriz.",
  },
  {
    question: "Sadece çöp taşıma için de hizmet alabilir miyim?",
    answer:
      "Evet. Tüm evi boşaltmanız gerekmiyorsa da, evden çıkan büyük hacimli çöp ve eski eşyalar için tek seferlik ev çöp taşıma hizmeti alabilirsiniz; fiyat hacme göre belirlenir.",
  },
  {
    question: "Fiyatlandırma nasıl belirleniyor?",
    answer:
      "Fiyat; alanın büyüklüğü, eşya hacmi, kat/asansör durumu ve atık tipine göre belirlenir. Keşif sonrası net fiyat verilir, gizli ücret yoktur.",
  },
  {
    question: "İstanbul'un her ilçesinde hizmet veriyor musunuz?",
    answer:
      "Evet, İstanbul'un Avrupa ve Anadolu yakasındaki tüm ilçelerde hizmet veriyoruz. Bölgenize özel detaylar için ilçeler sayfamıza göz atabilirsiniz.",
  },
  {
    question: "Eşyaları kapıya kendim mi çıkarmam gerekiyor?",
    answer:
      "Hayır. Ekibimiz adresinize gelir, eşyaları bulunduğu odadan veya kattan kendi imkanlarımızla alıp dışarı taşır. Asansörsüz binalarda bile siz hiçbir şey taşımazsınız, biz tamamen yerinde tahliye ediyoruz.",
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

export default async function EvBosaltmaPage() {
  const message = "Merhaba, ev boşaltma hizmeti için fiyat almak istiyorum.";
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
          { name: "Ev Boşaltma", url: "/ev-bosaltma" },
        ])}
      />
      <Navbar />
      <main>
        <section className="relative px-6 pb-12 pt-32">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              İstanbul Geneli
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Ev Boşaltma <span className="text-gradient">Hizmeti</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted">
              Bu hizmet <strong className="text-foreground">kiracı tahliyesi veya hukuki bir süreç değildir</strong> —
              evinizdeki eşya, mobilya ve fazlalıkların sigortalı ekibimizce profesyonelce
              kaldırılıp tahliye edilmesidir. Taşınma, miras, kiracı çıkışı veya sadece
              yer açmak istediğinizde, aynı gün randevu ile evinizi boşaltıyoruz.
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

        <PriceCalculator />
        <Services />

        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Sık Sorulan Sorular
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ev boşaltma hakkında
              <br />
              <span className="text-gradient">bilmeniz gerekenler.</span>
            </h2>

            <div className="mt-10 space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div key={item.question} className="rounded-2xl border border-line bg-background-elevated p-6">
                  <h3 className="font-display text-base font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted">
              Bölgenize özel detaylar için{" "}
              <Link href="/ilceler" className="text-accent hover:underline">
                tüm ilçelerimize
              </Link>{" "}
              göz atabilirsiniz. Sadece çöp taşıma ihtiyacınız varsa{" "}
              <Link href="/blog/ev-cop-tasima-nasil-yapilir" className="text-accent hover:underline">
                ev çöp taşıma rehberimize
              </Link>{" "}
              bakabilirsiniz.
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
