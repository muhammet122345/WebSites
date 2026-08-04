export const REVIEW_REQUEST_TEMPLATES = [
  {
    id: "short",
    label: "Kısa (WhatsApp)",
    body: `Merhaba, Fazlalıkat ile eşya tahliye hizmetimizi tamamladık. Deneyiminizi 30 saniyede Google'da paylaşır mısınız? Teşekkürler 🙏
{{GOOGLE_REVIEW_URL}}
Site yorumu: https://fazlalikat.com/yorum`,
  },
  {
    id: "full",
    label: "Detaylı (SMS / WhatsApp)",
    body: `Merhaba {{MUSTERI_ADI}},
Bugün İstanbul'daki eşya / çöp tahliye işinizi tamamladık. Memnun kaldıysanız Google yorumunuz yeni müşterilere çok yardımcı oluyor.
Google: {{GOOGLE_REVIEW_URL}}
Sitede de yazabilirsiniz: https://fazlalikat.com/yorum
Teşekkürler — Fazlalıkat`,
  },
  {
    id: "followup",
    label: "2. hatırlatma",
    body: `Merhaba, dünkü hizmetimiz için kısa bir Google yorumu rica etmiştik. Uygun olduğunuzda şu link yeterli:
{{GOOGLE_REVIEW_URL}}
İyi günler — Fazlalıkat`,
  },
] as const;

export const GBP_CHECKLIST = [
  {
    group: "Profil kurulumu",
    items: [
      "İşletme adı: Fazlalıkat (tutarlı NAP)",
      "Birincil kategori: Nakliye hizmeti / Atık yönetimi / Ev eşyası taşıma (GBP’de en yakın doğru kategori)",
      "İkincil: Moloz taşıma, Ev boşaltma benzeri ilgili kategoriler",
      "Adres: Hamidiye Mah. Asil Sk. No:12, Sultanbeyli / İstanbul",
      "Telefonlar: 0532 267 14 05 ve 0531 730 04 83",
      "Web sitesi: https://fazlalikat.com",
      "WhatsApp butonu / mesaj bağlantısı açık",
    ],
  },
  {
    group: "Hizmet alanları",
    items: [
      "Hizmet bölgesi: İstanbul (39 ilçe) — mümkünse ilçe listesi ekle",
      "Avrupa + Anadolu yakası hizmet açıklaması",
      "Hizmetler: eşya tahliye, çöp atım, ev boşaltma, moloz, depo, ofis, çatı katı",
    ],
  },
  {
    group: "İçerik & güven",
    items: [
      "Kapak + logo (marka renkleri)",
      "En az 10 gerçek iş fotoğrafı (önce/sonra, ekip, araç)",
      "Çalışma saatleri: Pzt–Cmt 08–20, Paz 09–18 (schema ile uyumlu)",
      "Q&A: fiyat, aynı gün, kapıdan alım, belediye farkı",
      "Haftada 1 GBP post (teklif / rehber / ilçe)",
    ],
  },
  {
    group: "Yorum motoru",
    items: [
      "Her iş bitiminde WhatsApp şablonu gönder",
      "5★ → Google linki öncelikli; site yorumu ikincil",
      "Olumsuz geri bildirim → önce WhatsApp’ta çöz, public’e zorlama",
      "Onaylı site yorumlarını /yorum ve anasayfada tut",
      "Ayda en az 8–15 yeni Google yorum hedefi",
    ],
  },
] as const;

export type AdKeywordRow = {
  campaign: string;
  adGroup: string;
  keyword: string;
  matchType: "Exact" | "Phrase" | "Broad";
  finalUrl: string;
};

const BASE = "https://fazlalikat.com";

/** Google Ads Editor’a aktarılacak iskelet. */
export const ADS_KEYWORDS: AdKeywordRow[] = [
  // Brand
  { campaign: "01_Brand", adGroup: "Marka", keyword: "fazlalıkat", matchType: "Exact", finalUrl: `${BASE}/` },
  { campaign: "01_Brand", adGroup: "Marka", keyword: "fazlalikat", matchType: "Exact", finalUrl: `${BASE}/` },
  { campaign: "01_Brand", adGroup: "Marka", keyword: "fazlalıkat eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/` },

  // Generic commercial
  { campaign: "02_Generic", adGroup: "Eşya tahliye", keyword: "eşya tahliye istanbul", matchType: "Phrase", finalUrl: `${BASE}/cop-atim-hizmeti` },
  { campaign: "02_Generic", adGroup: "Eşya tahliye", keyword: "ücretli eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/cop-atim-hizmeti` },
  { campaign: "02_Generic", adGroup: "Çöp atım", keyword: "çöp atım hizmeti istanbul", matchType: "Phrase", finalUrl: `${BASE}/cop-atim-hizmeti` },
  { campaign: "02_Generic", adGroup: "Çöp atım", keyword: "evden çöp attırma", matchType: "Phrase", finalUrl: `${BASE}/cop-atim-hizmeti` },
  { campaign: "02_Generic", adGroup: "Ev boşaltma", keyword: "daire boşaltma istanbul", matchType: "Phrase", finalUrl: `${BASE}/ev-bosaltma` },
  { campaign: "02_Generic", adGroup: "Ev boşaltma", keyword: "ev boşaltma fiyatları", matchType: "Phrase", finalUrl: `${BASE}/blog/daire-bosaltma-fiyatlari-2026` },
  { campaign: "02_Generic", adGroup: "Moloz", keyword: "moloz atımı istanbul", matchType: "Phrase", finalUrl: `${BASE}/moloz-atimi` },
  { campaign: "02_Generic", adGroup: "Moloz", keyword: "inşaat molozu taşıma", matchType: "Phrase", finalUrl: `${BASE}/moloz-atimi` },

  // Item intents
  { campaign: "03_Items", adGroup: "Koltuk", keyword: "eski koltuk nereye atılır", matchType: "Phrase", finalUrl: `${BASE}/blog/eski-koltuk-nereye-atilir` },
  { campaign: "03_Items", adGroup: "Koltuk", keyword: "koltuk attırma istanbul", matchType: "Phrase", finalUrl: `${BASE}/blog/eski-koltuk-nereye-atilir` },
  { campaign: "03_Items", adGroup: "Baza", keyword: "eski baza nereye atılır", matchType: "Phrase", finalUrl: `${BASE}/blog/eski-baza-nereye-atilir` },
  { campaign: "03_Items", adGroup: "Yatak", keyword: "eski yatak nereye atılır", matchType: "Phrase", finalUrl: `${BASE}/blog/eski-yatak-nereye-atilir` },
  { campaign: "03_Items", adGroup: "Beyaz eşya", keyword: "eski buzdolabı nereye atılır", matchType: "Phrase", finalUrl: `${BASE}/blog/eski-buzdolabi-ve-beyaz-esya-atma-rehberi` },
  { campaign: "03_Items", adGroup: "Halı", keyword: "eski halı nereye atılır", matchType: "Phrase", finalUrl: `${BASE}/blog/eski-hali-nereye-atilir` },
  { campaign: "03_Items", adGroup: "Fiyat", keyword: "eşya atma ücreti 2026", matchType: "Phrase", finalUrl: `${BASE}/blog/esya-atma-ucreti-2026` },
  { campaign: "03_Items", adGroup: "Fiyat", keyword: "koltuk atma ücreti", matchType: "Phrase", finalUrl: `${BASE}/blog/eski-koltuk-takimi-atma-ucreti` },

  // Problem / alternative intents
  { campaign: "04_Intent", adGroup: "Belediye", keyword: "belediye büyük eşya almıyor", matchType: "Phrase", finalUrl: `${BASE}/blog/belediye-buyuk-esya-almiyor-ne-yapmali` },
  { campaign: "04_Intent", adGroup: "Belediye", keyword: "alo 153 büyük atık", matchType: "Phrase", finalUrl: `${BASE}/blog/alo-153-buyuk-atik-randevu-alternatifi` },
  { campaign: "04_Intent", adGroup: "Yasal", keyword: "çöpe koltuk atmak yasak mı", matchType: "Phrase", finalUrl: `${BASE}/blog/cope-koltuk-atmak-yasak-mi` },
  { campaign: "04_Intent", adGroup: "Hurdacı", keyword: "hurdacı mı profesyonel eşya attırma", matchType: "Phrase", finalUrl: `${BASE}/blog/hurdaci-mi-profesyonel-esya-attirma-hizmeti-mi` },
  { campaign: "04_Intent", adGroup: "Acil", keyword: "aynı gün eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/blog/ayni-gun-esya-tahliye-istanbul` },

  // Side hubs
  { campaign: "05_Yaka", adGroup: "Avrupa", keyword: "avrupa yakası çöp atım", matchType: "Phrase", finalUrl: `${BASE}/avrupa-yakasi-esya-tahliye` },
  { campaign: "05_Yaka", adGroup: "Avrupa", keyword: "avrupa yakası eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/avrupa-yakasi-esya-tahliye` },
  { campaign: "05_Yaka", adGroup: "Anadolu", keyword: "anadolu yakası eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/anadolu-yakasi-esya-tahliye` },
  { campaign: "05_Yaka", adGroup: "Anadolu", keyword: "anadolu yakası çöp atım", matchType: "Phrase", finalUrl: `${BASE}/anadolu-yakasi-esya-tahliye` },

  // Priority districts (Phrase + landing)
  { campaign: "06_Ilce_Avrupa", adGroup: "Beşiktaş", keyword: "beşiktaş eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/besiktas-esya-tahliye` },
  { campaign: "06_Ilce_Avrupa", adGroup: "Beşiktaş", keyword: "beşiktaş eski koltuk nereye atılır", matchType: "Phrase", finalUrl: `${BASE}/besiktas-eski-koltuk-nereye-atilir` },
  { campaign: "06_Ilce_Avrupa", adGroup: "Şişli", keyword: "şişli eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/sisli-esya-tahliye` },
  { campaign: "06_Ilce_Avrupa", adGroup: "Bağcılar", keyword: "bağcılar çöp atım", matchType: "Phrase", finalUrl: `${BASE}/bagcilar-esya-tahliye` },
  { campaign: "06_Ilce_Avrupa", adGroup: "Esenyurt", keyword: "esenyurt eski eşya attırma", matchType: "Phrase", finalUrl: `${BASE}/esenyurt-esya-tahliye` },
  { campaign: "06_Ilce_Avrupa", adGroup: "Küçükçekmece", keyword: "küçükçekmece eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/kucukcekmece-esya-tahliye` },
  { campaign: "06_Ilce_Avrupa", adGroup: "Bakırköy", keyword: "bakırköy hurda mobilya", matchType: "Phrase", finalUrl: `${BASE}/blog/bakirkoy-hurda-mobilya-alanlar` },

  { campaign: "07_Ilce_Anadolu", adGroup: "Kadıköy", keyword: "kadıköy eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/kadikoy-esya-tahliye` },
  { campaign: "07_Ilce_Anadolu", adGroup: "Kadıköy", keyword: "kadıköy eski eşya nereye atılır", matchType: "Phrase", finalUrl: `${BASE}/blog/kadikoy-eski-esya-nereye-atilir` },
  { campaign: "07_Ilce_Anadolu", adGroup: "Üsküdar", keyword: "üsküdar eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/uskudar-esya-tahliye` },
  { campaign: "07_Ilce_Anadolu", adGroup: "Ümraniye", keyword: "ümraniye eski eşya", matchType: "Phrase", finalUrl: `${BASE}/umraniye-esya-tahliye` },
  { campaign: "07_Ilce_Anadolu", adGroup: "Maltepe", keyword: "maltepe eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/maltepe-esya-tahliye` },
  { campaign: "07_Ilce_Anadolu", adGroup: "Kartal", keyword: "kartal eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/kartal-esya-tahliye` },
  { campaign: "07_Ilce_Anadolu", adGroup: "Pendik", keyword: "pendik eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/pendik-esya-tahliye` },
  { campaign: "07_Ilce_Anadolu", adGroup: "Sultanbeyli", keyword: "sultanbeyli eşya tahliye", matchType: "Phrase", finalUrl: `${BASE}/sultanbeyli-esya-tahliye` },
];

export function adsKeywordsToCsv(rows: AdKeywordRow[] = ADS_KEYWORDS): string {
  const header = "Campaign,Ad group,Keyword,Criterion type,Final URL";
  const escape = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const lines = rows.map((r) =>
    [r.campaign, r.adGroup, r.keyword, r.matchType, r.finalUrl].map(escape).join(","),
  );
  return [header, ...lines].join("\n");
}
