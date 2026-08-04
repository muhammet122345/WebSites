import type { Metadata } from "next";
import ServiceHub from "@/components/ServiceHub";
import { getApprovedReviews } from "@/lib/reviews-store";

export const revalidate = 300;

export const metadata: Metadata = {
  title: {
    absolute: "Çöp Atım Hizmeti İstanbul | Aynı Gün Kapıdan Alım | Fazlalıkat",
  },
  description:
    "İstanbul'da çöp atım ve hacimli eşya tahliye hizmeti. Eski koltuk, yatak, baza, beyaz eşya ve ev çöpünü daireden alıyoruz. Anadolu & Avrupa Yakası, aynı gün randevu — Fazlalıkat.",
  alternates: { canonical: "/cop-atim-hizmeti" },
  openGraph: {
    title: "Çöp Atım Hizmeti İstanbul | Fazlalıkat",
    description:
      "Hacimli çöp ve eski eşya için kapıdan alım. Aynı gün randevu, şeffaf fiyat.",
    images: [{ url: "/og-image.png" }],
  },
};

const FAQ_ITEMS = [
  {
    question: "Çöp atım hizmeti neyi kapsar?",
    answer:
      "Koltuk, baza, yatak, dolap, beyaz eşya, kutulanmış evsel fazlalık ve hacimli çöpü kapsar. İnşaat molozu için ayrıca moloz atımı hizmetimizi kullanabilirsiniz; karışık yüklerde tek seferde planlanır.",
  },
  {
    question: "Belediye çöp hattından farkı nedir?",
    answer:
      "Belediye hacimli atık hatları çoğu zaman ücretsizdir ama randevu bekletir ve eşyayı kapı önüne indirmenizi ister. Fazlalıkat ücretli profesyonel hizmettir: eşyayı kattan alır, aynı gün planlar, yönetmeliğe uygun bertaraf eder.",
  },
  {
    question: "İstanbul'un her iki yakasında var mısınız?",
    answer:
      "Evet. Avrupa ve Anadolu Yakası'nın tüm ilçelerinde çöp atım / eşya tahliye yapıyoruz. Yaka sayfalarımızdan ilçe listesine inebilirsiniz.",
  },
  {
    question: "Aynı gün gelir misiniz?",
    answer:
      "Müsaitlik durumuna göre çoğu bölgede aynı gün veya ertesi gün randevu açılır. WhatsApp'tan fotoğraf ve adres bilgisi yeterlidir.",
  },
];

export default async function CopAtimHizmetiPage() {
  const reviews = await getApprovedReviews();
  return (
    <ServiceHub
      title="Çöp Atım Hizmeti"
      titleAccent="İstanbul"
      description="Eski eşya ve hacimli çöpü sokağa bırakmadan, kapıdan alıp yasal şekilde tahliye ediyoruz. İstanbul Anadolu ve Avrupa Yakası'nda aynı gün / ertesi gün randevu, şeffaf fiyat, gizli ücret yok."
      path="/cop-atim-hizmeti"
      badge="İstanbul Geneli · Kapıdan Alım"
      areaName="İstanbul"
      waMessage="Merhaba, çöp atım / eşya tahliye hizmeti için fiyat almak istiyorum."
      faqs={FAQ_ITEMS}
      seoParagraphs={[
        "Çöp atım hizmeti arayanlar genelde koltuk, baza, yatak veya daire içi birikmiş hacimli atığı hızla çıkartmak ister. Konteyner yanına bırakmak yasaktır; hurdacılar süngerli mobilyayı sıkça reddeder. Profesyonel kapıdan alım hem cezai riski hem fiziksel yükü kaldırır.",
        "Fiyat; eşya hacmi, kat, asansör ve ilçeye göre değişir. Fotoğraf göndererek dakikalar içinde teklif alın. Ev boşaltma, depo temizliği veya moloz ihtiyacınız varsa aynı ekiple birleştirilebilir.",
      ]}
      highlights={[
        {
          title: "Kapıdan alım",
          body: "Eşyayı merdivenden siz indirmezsiniz. Oda / kattan ekip alır.",
        },
        {
          title: "Aynı gün seçenek",
          body: "Acil taşınma ve kiracı çıkışında hızlı planlama.",
        },
        {
          title: "İki yaka",
          body: "Avrupa ve Anadolu — 39 ilçede hizmet ağı.",
        },
        {
          title: "Şeffaf fiyat",
          body: "Ön teklif nettir; onayınız olmadan ekip hareket etmez.",
        },
      ]}
      relatedLinks={[
        { href: "/avrupa-yakasi-esya-tahliye", label: "Avrupa Yakası" },
        { href: "/anadolu-yakasi-esya-tahliye", label: "Anadolu Yakası" },
        { href: "/ev-bosaltma", label: "Ev boşaltma" },
        { href: "/blog/cop-atim-hizmeti-istanbul", label: "Çöp atım rehberi (blog)" },
        { href: "/blog/eski-baza-nereye-atilir", label: "Eski baza nereye atılır?" },
        { href: "/blog/eski-hali-nereye-atilir", label: "Eski hali nereye atılır?" },
        { href: "/blog/cope-koltuk-atmak-yasak-mi", label: "Çöpe koltuk yasak mı?" },
        { href: "/blog/alo-153-buyuk-atik-randevu-alternatifi", label: "Alo 153 alternatifi" },
        { href: "/ilceler", label: "İlçeler" },
      ]}
      reviews={reviews}
    />
  );
}
