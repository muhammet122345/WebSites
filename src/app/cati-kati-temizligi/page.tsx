import type { Metadata } from "next";
import ServiceHub from "@/components/ServiceHub";
import { getApprovedReviews } from "@/lib/reviews-store";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Çatı Katı Temizliği İstanbul | Çatı Deposu Boşaltma",
  description:
    "İstanbul'da çatı katı ve teras deposu temizliği. Dar merdiven ve asansörsüz çıkışlarda güvenli indirme, aynı gün randevu — Fazlalıkat.",
  alternates: { canonical: "/cati-kati-temizligi" },
  openGraph: {
    title: "Çatı Katı Temizliği İstanbul | Fazlalıkat",
    description: "Çatı katı eşya tahliyesi. Güvenli indirme, aynı gün randevu.",
    images: [{ url: "/og-image.png" }],
  },
};

const FAQ_ITEMS = [
  {
    question: "Asansörsüz çatı katından eşya iner mi?",
    answer:
      "Evet. Dar merdiven ve asansörsüz çıkışlarda deneyimli ekip ve ekipmanla güvenli indirme yapıyoruz.",
  },
  {
    question: "Çatı katı temizliği ne kadar sürer?",
    answer:
      "Hacme göre değişir; çoğu iş aynı gün tamamlanır. Fotoğraf ile ön süre ve fiyat tahmini alabilirsiniz.",
  },
  {
    question: "Ortak alanlara zarar verir misiniz?",
    answer:
      "Koruma ekipmanı ve kontrollü taşıma ile ortak alan hasarını önlemeye özen gösteriyoruz; ekiplerimiz sigortalıdır.",
  },
  {
    question: "Teras deposu da dahil mi?",
    answer:
      "Evet. Çatı katı, teras deposu ve benzeri üst kat birikimlerini kapsıyoruz.",
  },
];

export default async function CatiKatiTemizligiPage() {
  const reviews = await getApprovedReviews();
  return (
    <ServiceHub
      title="Çatı Katı Temizliği"
      titleAccent="Hizmeti"
      description="Çatı katı ve teras depolarında biriken eski eşya, kutu ve hurdayı güvenli şekilde indirip tahliye ediyoruz. Dar merdiven ve asansörsüz çıkışlarda İstanbul geneli deneyimliyiz."
      path="/cati-kati-temizligi"
      badge="İstanbul Geneli"
      waMessage="Merhaba, çatı katı temizliği için fiyat almak istiyorum."
      faqs={FAQ_ITEMS}
      highlights={[
        {
          title: "Güvenli indirme",
          body: "Ağır parçaları merdiven veya yük asansörüyle kontrollü indiririz.",
        },
        {
          title: "Tek günde ferahlama",
          body: "Yıllardır dokunulmayan çatı katlarını aynı gün boşaltabiliriz.",
        },
        {
          title: "Sigortalı ekip",
          body: "İş kazası ve nakliye sigortası kapsamında çalışırız.",
        },
        {
          title: "Şeffaf fiyat",
          body: "WhatsApp fotoğrafı ile hızlı teklif; onayınız olmadan işe başlamayız.",
        },
      ]}
      relatedLinks={[
        { href: "/blog/cati-kati-temizligi-istanbul", label: "Çatı katı rehberi" },
        { href: "/depo-temizligi", label: "Depo temizliği" },
        { href: "/ev-bosaltma", label: "Ev boşaltma" },
      ]}
      reviews={reviews}
    />
  );
}
