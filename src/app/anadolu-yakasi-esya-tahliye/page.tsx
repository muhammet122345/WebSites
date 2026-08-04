import type { Metadata } from "next";
import ServiceHub from "@/components/ServiceHub";
import { getApprovedReviews } from "@/lib/reviews-store";

export const revalidate = 300;

export const metadata: Metadata = {
  title: {
    absolute:
      "İstanbul Anadolu Yakası Eşya Tahliye ve Çöp Atım | Aynı Gün | Fazlalıkat",
  },
  description:
    "İstanbul Anadolu Yakası'nda eski eşya, koltuk, yatak, baza ve çöp tahliyesi. Kadıköy, Üsküdar, Ümraniye, Maltepe, Kartal, Sultanbeyli ve tüm Anadolu ilçelerinde kapıdan alım — Fazlalıkat.",
  alternates: { canonical: "/anadolu-yakasi-esya-tahliye" },
  openGraph: {
    title: "Anadolu Yakası Eşya Tahliye | Fazlalıkat",
    description:
      "Anadolu Yakası'nda eşya tahliye ve çöp atım. Aynı gün kapıdan alım, şeffaf fiyat.",
    images: [{ url: "/og-image.png" }],
  },
};

const FAQ_ITEMS = [
  {
    question: "Anadolu Yakası'nda hangi ilçelerde çalışıyorsunuz?",
    answer:
      "Kadıköy, Üsküdar, Ataşehir, Ümraniye, Maltepe, Kartal, Pendik, Tuzla, Sultanbeyli, Sancaktepe, Çekmeköy, Beykoz, Şile, Adalar ve diğer tüm Anadolu Yakası ilçelerinde eşya tahliye ve çöp atım hizmeti veriyoruz.",
  },
  {
    question: "Kadıköy / Üsküdar / Ümraniye'de aynı gün gelir misiniz?",
    answer:
      "Evet. Operasyon ağımız Anadolu Yakası'nda yoğundur; müsaitlik durumuna göre aynı gün veya ertesi gün randevu açılır.",
  },
  {
    question: "Moda, Suadiye, Bostancı gibi mahallelerde de hizmet var mı?",
    answer:
      "Evet. Kadıköy ve çevre mahallelerde (Moda, Caferağa, Fenerbahçe, Göztepe, Erenköy, Suadiye, Caddebostan, Bostancı) kapıdan alım yapıyoruz.",
  },
  {
    question: "Moloz ve eşyayı birlikte alır mısınız?",
    answer:
      "Evet. Tadilat sonrası eşya + alçıpan/seramik molozu aynı seferde planlanabilir. Araç tipi hacme göre seçilir.",
  },
];

export default async function AnadoluYakasiPage() {
  const reviews = await getApprovedReviews();
  return (
    <ServiceHub
      title="Anadolu Yakası"
      titleAccent="Eşya Tahliye & Çöp Atım"
      description="İstanbul Anadolu Yakası'nda eski eşya, mobilya, beyaz eşya ve hacimli çöpü bulunduğu kattan alıyoruz. Kadıköy'den Pendik'e, Üsküdar'dan Sultanbeyli'ye aynı gün / ertesi gün tahliye — her iki yakada tam kapsam."
      path="/anadolu-yakasi-esya-tahliye"
      badge="Anadolu Yakası · Tüm İlçeler"
      side="Anadolu"
      areaName="İstanbul Anadolu Yakası"
      waMessage="Merhaba, Anadolu Yakası eşya tahliye / çöp atım için fiyat almak istiyorum."
      faqs={FAQ_ITEMS}
      seoParagraphs={[
        "Anadolu Yakası'nda eski koltuk, baza veya daire boşaltma ihtiyacı çoğu zaman taşınma ve kiracı çıkışına denk gelir. Belediye randevusu yetişmezse eşyayı sokağa bırakmak cezai risk taşır. Fazlalıkat, Anadolu Yakası'nın tamamında kapıdan profesyonel alım sunar.",
        "Ümraniye ve Ataşehir'deki site bloklarından Kadıköy'ün dar apartman merdivenlerine, Maltepe–Kartal–Pendik aksındaki yoğun taleplere kadar ekip ve araç planını bölgeye göre yapıyoruz. Depo, çatı katı ve ofis boşaltma da aynı hizmet ağı içindedir.",
      ]}
      highlights={[
        {
          title: "Tam yaka kapsamı",
          body: "Sadece merkez ilçeler değil; Sultanbeyli, Sancaktepe, Çekmeköy, Tuzla ve Şile dahil tüm Anadolu ilçeleri.",
        },
        {
          title: "Mahalle deneyimi",
          body: "Moda, Suadiye, Erenköy, Kozyatağı, Altunizade gibi yoğun mahallelerde site/apartman kurallarına uyumlu çalışma.",
        },
        {
          title: "Aynı gün seçenek",
          body: "Acil noter, kiracı teslimi ve tadilat başlangıcında hızlı yönlendirme.",
        },
        {
          title: "Şeffaf teklif",
          body: "WhatsApp fotoğrafı ile net fiyat; onayınız olmadan ekip hareket etmez.",
        },
      ]}
      relatedLinks={[
        { href: "/avrupa-yakasi-esya-tahliye", label: "Avrupa Yakası hizmeti" },
        { href: "/blog/kadikoy-eski-esya-nereye-atilir", label: "Kadıköy eski eşya rehberi" },
        { href: "/blog/kadikoy-eski-baza-nereye-atilir", label: "Kadıköy eski baza" },
        { href: "/blog/uskudar-eski-esya-nereye-atilir", label: "Üsküdar rehberi" },
        { href: "/blog/maltepe-eski-esya-nereye-atilir", label: "Maltepe rehberi" },
        { href: "/blog/umraniye-eski-esya-nereye-atilir", label: "Ümraniye rehberi" },
        { href: "/blog/sultanbeyli-eski-esya-nereye-atilir", label: "Sultanbeyli rehberi" },
        { href: "/moloz-atimi", label: "Moloz atımı" },
        { href: "/ilceler", label: "Tüm ilçeler" },
      ]}
      reviews={reviews}
    />
  );
}
