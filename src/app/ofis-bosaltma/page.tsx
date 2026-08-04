import type { Metadata } from "next";
import ServiceHub from "@/components/ServiceHub";
import { getApprovedReviews } from "@/lib/reviews-store";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Ofis Boşaltma İstanbul | Demirbaş ve Ofis Eşyası Tahliyesi",
  description:
    "İstanbul'da ofis boşaltma ve demirbaş tahliyesi. Plaza ve iş merkezi kurallarına uygun, aynı gün randevu, şeffaf fiyat — Fazlalıkat.",
  alternates: { canonical: "/ofis-bosaltma" },
  openGraph: {
    title: "Ofis Boşaltma İstanbul | Fazlalıkat",
    description: "Ofis demirbaş ve eşya tahliyesi. Aynı gün randevu.",
    images: [{ url: "/og-image.png" }],
  },
};

const FAQ_ITEMS = [
  {
    question: "Ofis boşaltma mesai dışında yapılır mı?",
    answer:
      "Evet. Bina yönetiminin izin verdiği saatlerde, gerekirse akşam veya hafta sonu planlaması yapılabilir.",
  },
  {
    question: "Elektronik demirbaş da alınıyor mu?",
    answer:
      "Evet. Bilgisayar, yazıcı ve diğer elektronik atıklar AEEE kurallarına uygun toplanır.",
  },
  {
    question: "Plaza asansör rezervasyonu sizde mi?",
    answer:
      "Yönetim prosedürüne göre sizin veya bizim tarafımızdan koordine edilir; deneyimli ekibimiz süreçte yanınızda olur.",
  },
  {
    question: "Fiyat nasıl belirlenir?",
    answer:
      "Metrekare, demirbaş hacmi, kat ve bina kurallarına göre. Fotoğraf veya keşif sonrası net teklif verilir.",
  },
];

export default async function OfisBosaltmaPage() {
  const reviews = await getApprovedReviews();
  return (
    <ServiceHub
      title="Ofis Boşaltma"
      titleAccent="ve Demirbaş Tahliyesi"
      description="İş yeri taşınması veya kapanışında masa, sandalye, dolap, arşiv ve elektronik demirbaşları profesyonel ekiple hızlı ve düzenli tahliye ediyoruz. İstanbul geneli plaza ve iş merkezlerinde deneyimliyiz."
      path="/ofis-bosaltma"
      badge="İstanbul Geneli · Kurumsal"
      waMessage="Merhaba, ofis boşaltma / demirbaş tahliyesi için fiyat almak istiyorum."
      faqs={FAQ_ITEMS}
      highlights={[
        {
          title: "Bina kurallarına uyum",
          body: "Plaza ve iş merkezi asansör/saat kurallarına uygun planlı çalışırız.",
        },
        {
          title: "Hızlı taşınma günü",
          body: "Ekip ve araç kapasitesini önceden netleştirerek gecikmeyi önleriz.",
        },
        {
          title: "Elektronik atık",
          body: "Ofis elektroniğini yönetmeliğe uygun toplar ve yönlendiririz.",
        },
        {
          title: "Şeffaf teklif",
          body: "Keşif veya fotoğraf sonrası net fiyat; sürpriz ek ücret yok.",
        },
      ]}
      relatedLinks={[
        { href: "/blog/ofis-tasima-checklist", label: "Ofis taşıma checklist" },
        { href: "/blog/ofis-esyasi-atma-hizmeti-istanbul", label: "Ofis eşyası atma rehberi" },
        { href: "/ev-bosaltma", label: "Ev boşaltma" },
      ]}
      reviews={reviews}
    />
  );
}
