import type { Metadata } from "next";
import ServiceHub from "@/components/ServiceHub";
import { getApprovedReviews } from "@/lib/reviews-store";

export const revalidate = 300;

export const metadata: Metadata = {
  title: {
    absolute:
      "İstanbul Avrupa Yakası Eşya Tahliye ve Çöp Atım | Aynı Gün | Fazlalıkat",
  },
  description:
    "İstanbul Avrupa Yakası'nda eski eşya, koltuk, yatak, beyaz eşya ve çöp tahliyesi. Beşiktaş, Şişli, Bağcılar, Esenyurt ve 25 ilçede kapıdan alım, aynı gün randevu — Fazlalıkat.",
  alternates: { canonical: "/avrupa-yakasi-esya-tahliye" },
  openGraph: {
    title: "Avrupa Yakası Eşya Tahliye | Fazlalıkat",
    description:
      "Avrupa Yakası'nda eşya tahliye ve çöp atım. Aynı gün kapıdan alım, şeffaf fiyat.",
    images: [{ url: "/og-image.png" }],
  },
};

const FAQ_ITEMS = [
  {
    question: "Avrupa Yakası'nın hangi ilçelerinde hizmet veriyorsunuz?",
    answer:
      "Beşiktaş, Şişli, Beyoğlu, Fatih, Bakırköy, Bahçelievler, Bağcılar, Güngören, Esenler, Zeytinburnu, Gaziosmanpaşa, Eyüpsultan, Sultangazi, Kağıthane, Sarıyer, Küçükçekmece, Avcılar, Esenyurt, Beylikdüzü, Büyükçekmece, Silivri, Çatalca, Arnavutköy, Başakşehir, Bayrampaşa ve diğer Avrupa Yakası ilçelerinde eşya tahliye yapıyoruz.",
  },
  {
    question: "Aynı gün çöp atım / eşya tahliye mümkün mü?",
    answer:
      "Evet. Müsaitlik durumuna göre çoğu Avrupa Yakası talebini aynı gün veya ertesi gün tamamlıyoruz. WhatsApp'tan fotoğraf, ilçe ve kat bilgisini gönderin.",
  },
  {
    question: "Eşyayı kapı önüne indirmem gerekir mi?",
    answer:
      "Hayır. Ekibimiz koltuk, baza, dolap ve beyaz eşyayı bulunduğu kattan / odadan alır. Asansörsüz binalarda da siz taşımazsınız.",
  },
  {
    question: "Fiyat nasıl belirlenir?",
    answer:
      "Hacim, kat, asansör ve ilçe erişimine göre şeffaf teklif verilir. Onayınız olmadan ekip yola çıkmaz; gizli ücret yoktur.",
  },
];

export default async function AvrupaYakasiPage() {
  const reviews = await getApprovedReviews();
  return (
    <ServiceHub
      title="Avrupa Yakası"
      titleAccent="Eşya Tahliye & Çöp Atım"
      description="İstanbul Avrupa Yakası'nda eski koltuk, yatak, baza, dolap, beyaz eşya ve hacimli çöpü daireden alıp yönetmeliğe uygun bertaraf ediyoruz. Beşiktaş'tan Esenyurt'a, Fatih'ten Sarıyer'e aynı gün / ertesi gün randevu."
      path="/avrupa-yakasi-esya-tahliye"
      badge="Avrupa Yakası · 25+ İlçe"
      side="Avrupa"
      areaName="İstanbul Avrupa Yakası"
      waMessage="Merhaba, Avrupa Yakası eşya tahliye / çöp atım için fiyat almak istiyorum."
      faqs={FAQ_ITEMS}
      seoParagraphs={[
        "Avrupa Yakası'nda belediye büyük atık hatları çoğu zaman randevu bekletir ve eşyayı kapı önüne indirmenizi ister. Hurdacılar ise süngerli koltuk, baza ve yatakları sıkça reddeder. Fazlalıkat ücretli profesyonel tahliye ile eşyayı bulunduğu yerden alır; ceza riskini ve fiziksel yükü ortadan kaldırır.",
        "Levent, Etiler, Nişantaşı, Mecidiyeköy, Ataköy, Halkalı ve büyük site bölgelerinde site yönetimi kurallarına uygun saat planlaması yapıyoruz. Dar sokak ve asansörsüz apartman deneyimimiz vardır. Karışık yüklerde (eşya + moloz + depo) tek seferde çözüm sunarız.",
      ]}
      highlights={[
        {
          title: "Kapıdan / odadan alım",
          body: "Koltuk, baza, dolap ve beyaz eşyayı merdivenden siz indirmezsiniz — ekip yerinde tahliye eder.",
        },
        {
          title: "Aynı gün planlama",
          body: "Yoğun Avrupa Yakası trafiğine göre ekip yönlendirir; acil kiracı çıkışı ve noter tesliminde öncelik veririz.",
        },
        {
          title: "Şeffaf fiyat",
          body: "Fotoğraf ile dakikalar içinde net teklif. Onay sonrası hareket; sürpriz ek ücret yok.",
        },
        {
          title: "Yasal bertaraf",
          body: "Bağış, geri dönüşüm ve lisanslı tesislere uygun teslim — sokağa bırakma yok.",
        },
      ]}
      relatedLinks={[
        { href: "/anadolu-yakasi-esya-tahliye", label: "Anadolu Yakası hizmeti" },
        { href: "/blog/eski-baza-nereye-atilir", label: "Eski baza nereye atılır?" },
        { href: "/blog/besiktas-hurda-mobilya-alanlar", label: "Beşiktaş hurda mobilya" },
        { href: "/ev-bosaltma", label: "Ev boşaltma" },
        { href: "/ilceler", label: "Tüm ilçeler" },
      ]}
      reviews={reviews}
    />
  );
}
