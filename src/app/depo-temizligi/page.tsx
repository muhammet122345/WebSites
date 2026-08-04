import type { Metadata } from "next";
import ServiceHub from "@/components/ServiceHub";
import { getApprovedReviews } from "@/lib/reviews-store";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Depo Temizliği İstanbul | Bodrum ve Depo Boşaltma",
  description:
    "İstanbul'da depo ve bodrum temizliği. Biriken kutu, hurda ve eski mobilyaları aynı gün tahliye edin. Şeffaf fiyat, kapıdan alım — Fazlalıkat.",
  alternates: { canonical: "/depo-temizligi" },
  openGraph: {
    title: "Depo Temizliği İstanbul | Fazlalıkat",
    description: "Depo ve bodrum boşaltma. Aynı gün randevu, şeffaf fiyat.",
    images: [{ url: "/og-image.png" }],
  },
};

const FAQ_ITEMS = [
  {
    question: "Depo temizliği ne kadar sürer?",
    answer:
      "Depo büyüklüğü ve eşya yoğunluğuna göre değişir; çoğu standart depo aynı gün içinde tamamlanır. Fotoğraf göndererek süre ve fiyat tahmini alabilirsiniz.",
  },
  {
    question: "Site deposu kurallarına uyuyor musunuz?",
    answer:
      "Evet. Site yönetimlerinin belirlediği saat, asansör ve araç giriş kurallarına uygun randevulu çalışıyoruz.",
  },
  {
    question: "Kullanılabilir eşyalar ne oluyor?",
    answer:
      "Sağlam eşyalar bağışa yönlendirilebilir; geri dönüştürülebilir malzemeler ayrıştırılır, kalan atıklar lisanslı tesislere teslim edilir.",
  },
  {
    question: "Bodrum katı da dahil mi?",
    answer:
      "Evet. Bodrum ve dar erişimli depolarda merdiven ve ekipmanla güvenli tahliye sağlıyoruz.",
  },
];

export default async function DepoTemizligiPage() {
  const reviews = await getApprovedReviews();
  return (
    <ServiceHub
      title="Depo Temizliği"
      titleAccent="ve Boşaltma"
      description="Yıllardır biriken kutu, hurda, eski mobilya ve kullanılmayan malzemeleri depodan çıkarıp alanınızı yeniden kullanılabilir hale getiriyoruz. İstanbul Anadolu ve Avrupa Yakası'nda aynı gün randevu."
      path="/depo-temizligi"
      badge="İstanbul Geneli"
      waMessage="Merhaba, depo / bodrum temizliği için fiyat almak istiyorum."
      faqs={FAQ_ITEMS}
      highlights={[
        {
          title: "Kapıdan / depodan alım",
          body: "Eşyaları koridora veya kapıya indirmeniz gerekmez; ekip bulunduğu yerden alır.",
        },
        {
          title: "Ayrıştırma",
          body: "Bağış, geri dönüşüm ve lisanslı bertaraf — karışık yığınları tek seferde yönetiriz.",
        },
        {
          title: "Site uyumu",
          body: "Yönetim kurallarına uygun saat ve asansör planlaması ile çalışırız.",
        },
        {
          title: "Şeffaf fiyat",
          body: "WhatsApp fotoğrafı veya keşif sonrası net teklif; gizli ücret yok.",
        },
      ]}
      relatedLinks={[
        { href: "/blog/bodrum-depo-temizligi-istanbul", label: "Bodrum & depo rehberi" },
        { href: "/ev-bosaltma", label: "Ev boşaltma" },
        { href: "/cati-kati-temizligi", label: "Çatı katı temizliği" },
      ]}
      reviews={reviews}
    />
  );
}
