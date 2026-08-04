import type { District } from "@/data/districts";
import type { ItemType } from "@/data/item-types";
import { districtPath } from "@/data/districts";

export type FaqItem = { question: string; answer: string };

export function districtTitle(district: District): string {
  return `${district.name} Eşya Tahliye ve Çöp Atım Hizmeti | Aynı Gün Kapıdan Alım`;
}

export function districtDescription(district: District): string {
  const hoods = district.neighborhoods.slice(0, 3).join(", ");
  return `${district.name} ${district.side} Yakası'nda eski eşya, mobilya, beyaz eşya ve çöp tahliyesi. ${hoods} mahallelerinde aynı gün randevu, şeffaf fiyat. Fazlalıkat.`;
}

export function comboTitle(district: District, itemType: ItemType): string {
  return `${district.name} ${itemType.titleSuffix} | Aynı Gün Kapıdan Alım`;
}

export function comboDescription(district: District, itemType: ItemType): string {
  return `${district.name}'de ${itemType.label.toLowerCase()} için kapıdan alım. ${district.neighborhoods.slice(0, 2).join(", ")} ve çevresinde aynı gün randevu, şeffaf fiyat. Fazlalıkat.`;
}

export function districtFaqs(district: District): FaqItem[] {
  const path = districtPath(district);
  return [
    {
      question: `${district.name}'de eski eşya nereye atılır?`,
      answer: `${district.name}'de eski koltuk, yatak, dolap veya beyaz eşyayı sokağa bırakmak yasaktır. Belediye büyük atık hattı randevu bekletebilir ve genellikle kapı önüne indirmenizi ister. Fazlalıkat, ${district.name} ${district.side} Yakası'nda eşyayı bulunduğu kattan alır; ${path} sayfasından veya WhatsApp'tan aynı gün teklif alabilirsiniz.`,
    },
    {
      question: `${district.name}'de aynı gün eşya tahliye yapılır mı?`,
      answer: `Evet. ${district.localNote} Müsaitlik durumuna göre çoğu talebi aynı gün veya ertesi gün tamamlıyoruz.`,
    },
    {
      question: `${district.name} hangi mahallelerde hizmet veriyorsunuz?`,
      answer: `${district.neighborhoods.join(", ")} başta olmak üzere ${district.name}'in tüm mahallelerinde ev, ofis, depo ve çatı katı tahliyesi yapıyoruz.`,
    },
    {
      question: `${district.name}'de fiyat nasıl hesaplanır?`,
      answer: `Fiyat; eşya hacmi, kat/asansör durumu ve ${district.name}'in erişim koşullarına göre belirlenir. WhatsApp'tan fotoğraf göndererek 5 dakikada net, bağlayıcısız teklif alırsınız; gizli ücret yoktur.`,
    },
    {
      question: "Eşyaları kapıya kendim mi çıkarmam gerekir?",
      answer:
        "Hayır. Ekibimiz adresinize gelir, eşyaları odadan veya kattan kendi imkanlarıyla çıkarır. Asansörsüz binalarda da siz hiçbir şey taşımazsınız.",
    },
  ];
}

export function comboFaqs(district: District, itemType: ItemType): FaqItem[] {
  return [
    {
      question: `${district.name}'de ${itemType.label.toLowerCase()} nasıl attırılır?`,
      answer: `${itemType.intro} ${district.name}'de WhatsApp'tan fotoğraf gönderip fiyat aldıktan sonra ekibimiz adrese gelir; ${district.neighborhoods[0]} ve diğer mahallelerde kapıdan alım yapılır.`,
    },
    {
      question: `${district.name}'de ${itemType.label.toLowerCase()} aynı gün alınır mı?`,
      answer: `Evet. ${district.localNote} ${itemType.label} taleplerinde de müsaitlik durumuna göre aynı gün veya ertesi gün randevu veriyoruz.`,
    },
    {
      question: "Belediye veya hurdacı yeterince çözüm olur mu?",
      answer:
        "Belediye genellikle eşyayı kapı önüne indirmenizi ister ve randevu günler sürebilir. Hurdacılar sünger/kumaş içeren eşyaları çoğu zaman almaz. Profesyonel kapıdan alım hem yasal hem pratik çözümdür.",
    },
    {
      question: "Fiyat neye göre değişir?",
      answer: `${itemType.label} adedi/hacmi, kat ve asansör durumu, ${district.name}'deki erişim koşulları fiyatı etkiler. Fotoğrafla ön teklif verilir; onayınız olmadan ekip yola çıkmaz.`,
    },
  ];
}

export function howToSteps(districtName: string) {
  return [
    {
      name: "WhatsApp'tan bilgi gönderin",
      text: `${districtName} ilçesini, katı ve eşya fotoğraflarını WhatsApp hattımıza iletin.`,
    },
    {
      name: "Net fiyat alın",
      text: "Dakikalar içinde şeffaf teklif alın; onaylamadan hiçbir ücret işlemez.",
    },
    {
      name: "Kapıdan tahliye",
      text: "Anlaştığınız saatte ekip gelir, eşyaları bulunduğu yerden alır ve alanı kullanıma hazır bırakır.",
    },
  ];
}

export function nearbyDistricts(district: District, all: District[], limit = 6): District[] {
  return all
    .filter((d) => d.side === district.side && d.slug !== district.slug)
    .slice(0, limit);
}
