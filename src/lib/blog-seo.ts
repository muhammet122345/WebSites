import type { BlogPost } from "@/data/blog-posts";
import { DISTRICTS, districtPath, type District } from "@/data/districts";
import { getCombosForDistrict } from "@/lib/combo-routes";

export type BlogFaq = { question: string; answer: string };

const NEIGHBORHOOD_SLUG_TO_DISTRICT: Record<string, string> = {
  erenkoy: "kadikoy",
  suadiye: "kadikoy",
  ciftehavuzlar: "kadikoy",
  kalamis: "kadikoy",
  caddebostan: "kadikoy",
  bostanci: "kadikoy",
  moda: "kadikoy",
  fenerbahce: "kadikoy",
  goztepe: "kadikoy",
  etiler: "besiktas",
  bebek: "besiktas",
  ulus: "besiktas",
  levent: "besiktas",
  ortakoy: "besiktas",
  nisantasi: "sisli",
  mecidiyekoy: "sisli",
};

function normalizeTr(s: string) {
  return s
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

/** Resolve district for ilçe/mahalle posts from slug, title, or neighborhood map. */
export function resolveDistrictForPost(post: BlogPost): District | undefined {
  const slug = normalizeTr(post.slug);
  const title = normalizeTr(post.title);
  const hay = `${slug} ${title} ${normalizeTr(post.excerpt)}`;

  for (const [hood, districtSlug] of Object.entries(NEIGHBORHOOD_SLUG_TO_DISTRICT)) {
    if (slug.startsWith(hood) || hay.includes(hood)) {
      return DISTRICTS.find((d) => d.slug === districtSlug);
    }
  }

  const bySlug = DISTRICTS.find((d) => slug.startsWith(d.slug) || slug.includes(`-${d.slug}-`));
  if (bySlug) return bySlug;

  return DISTRICTS.find((d) => {
    const n = normalizeTr(d.name);
    return hay.includes(n) || hay.includes(d.slug);
  });
}

function isLocalGuide(post: BlogPost) {
  return (
    post.category === "İlçe Rehberi" ||
    post.category === "Mahalle Rehberi" ||
    post.category === "Bölge Rehberi" ||
    Boolean(resolveDistrictForPost(post))
  );
}

/** Generate FAQs from post content + brand CTA — applies hard SEO to every article. */
export function blogFaqsFor(post: BlogPost): BlogFaq[] {
  const topic = post.title.replace(/\s*\|\s*.*$/, "");
  const district = resolveDistrictForPost(post);
  const base: BlogFaq[] = [
    {
      question: `${topic} — en hızlı yasal çözüm nedir?`,
      answer: `${post.excerpt} Fazlalıkat İstanbul Anadolu ve Avrupa Yakası'nda kapıdan alım yapar; WhatsApp'tan fotoğraf göndererek aynı gün veya ertesi gün randevu alabilirsiniz.`,
    },
    {
      question: "Eşyayı sokağa veya çöp konteynerine bırakabilir miyim?",
      answer:
        "Hayır. Hacimli atıkların kaldırıma veya konteyner yanına bırakılması belediye yönetmeliklerine aykırıdır ve idari para cezası riski taşır. Kapıdan profesyonel alım hem yasal hem pratik çözümdür.",
    },
    {
      question: "Fiyat nasıl belirlenir?",
      answer:
        "Fiyat; eşya hacmi/türü, kat ve asansör durumu, ilçe erişimi ve varsa moloz miktarına göre değişir. Fotoğraf ile ön teklif verilir; onayınız olmadan ekip yola çıkmaz.",
    },
    {
      question: "Eşyaları kapıya kendim mi indirmeliyim?",
      answer:
        "Hayır. Ekibimiz adresinize gelir, eşyaları odadan veya kattan kendi imkanlarıyla çıkarır. Asansörsüz binalarda da siz taşımazsınız.",
    },
  ];

  if (!district) return base;

  return [
    ...base,
    {
      question: `${district.name}'de hangi mahallelerde hizmet var?`,
      answer: `${district.neighborhoods.join(", ")} başta olmak üzere ${district.name} ${district.side} Yakası'nın tamamında eşya tahliye, çöp atım, depo ve daire boşaltma yapıyoruz. ${district.localNote}`,
    },
    {
      question: `${district.name}'de aynı gün gelir misiniz?`,
      answer: `Müsaitlik durumuna göre ${district.name} taleplerinin çoğunu aynı gün veya ertesi gün tamamlıyoruz. WhatsApp'tan fotoğraf, mahalle ve kat bilgisini gönderin.`,
    },
  ];
}

export function relatedDistrictsForPost(post: BlogPost, limit = 8) {
  const matched = resolveDistrictForPost(post);
  const base = matched
    ? [
        matched,
        ...DISTRICTS.filter((d) => d.side === matched.side && d.slug !== matched.slug),
      ]
    : DISTRICTS.filter((d) =>
        ["kadikoy", "uskudar", "besiktas", "sisli", "sultanbeyli", "esenyurt", "bagcilar", "umraniye"].includes(
          d.slug,
        ),
      );

  return base.slice(0, limit).map((d) => ({
    name: d.name,
    href: districtPath(d),
    combos: getCombosForDistrict(d.slug).slice(0, 4),
  }));
}

export function relatedPostsFor(post: BlogPost, all: BlogPost[], limit = 4): BlogPost[] {
  const tokens = new Set(
    `${post.slug} ${post.category} ${post.title}`
      .toLocaleLowerCase("tr-TR")
      .split(/[^a-z0-9ğüşıöç]+/i)
      .filter((t) => t.length > 3),
  );
  return all
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const hay = `${p.slug} ${p.title} ${p.category}`.toLocaleLowerCase("tr-TR");
      let score = p.category === post.category ? 2 : 0;
      for (const t of tokens) if (hay.includes(t)) score += 1;
      return { p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}

/** Extra long-form paragraphs injected under thin posts for SERP depth. */
export function blogDepthBlocks(post: BlogPost): { heading: string; body: string }[] {
  const district = resolveDistrictForPost(post);

  if (district && isLocalGuide(post)) {
    const hoodList = district.neighborhoods.join(", ");
    const notes = district.neighborhoodNotes
      .slice(0, 4)
      .map((n) => `${n.name}: ${n.note}`)
      .join(" ");
    const combos = getCombosForDistrict(district.slug)
      .slice(0, 5)
      .map((c) => `${district.name} ${c.itemType.label.toLocaleLowerCase("tr-TR")}`)
      .join(", ");
    const path = districtPath(district);

    return [
      {
        heading: `${district.name}'de eski eşya nereye atılır?`,
        body: `${district.name}, İstanbul ${district.side} Yakası'nda ${district.characteristic} ile tanınır. Eski koltuk, baza, yatak, dolap veya beyaz eşyayı kaldırıma / konteyner yanına bırakmak yönetmeliklere aykırıdır ve idari para cezası riski taşır. Belediye büyük atık hattı ücretsiz olabilir ama çoğu zaman randevu bekletir ve eşyayı kapı önüne indirmenizi ister. Fazlalıkat ${district.name}'de eşyayı bulunduğu kattan alır; ${path} sayfasından veya WhatsApp'tan aynı gün teklif açabilirsiniz.`,
      },
      {
        heading: `Mahalleler: ${hoodList}`,
        body: `${district.localNote} ${notes} Bu mahallelerde site yönetimi kuralları, yük asansörü saati ve dar sokak erişimi randevu planını etkiler; ekibimiz koşullara göre araç ve personel seçer.`,
      },
      {
        heading: "Belediye, hurdacı ve profesyonel tahliye karşılaştırması",
        body: `Belediye hattı doğru bir yasal kanaldır ancak asansörsüz katlarda fiziksel yük size kalır. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder; daire yarı dolu kalır. Profesyonel kapıdan alım ${district.name}'de tüm eşya tiplerini tek seferde alır, şeffaf fiyat verir ve yönetmeliğe uygun bertaraf / bağış sürecini üstlenir.`,
      },
      {
        heading: `${district.name}'de süreç nasıl işler?`,
        body: `1) WhatsApp'a mahalle, kat, asansör ve eşya fotoğraflarını gönderin. 2) Dakikalar içinde net teklif alın — onayınız olmadan ekip yola çıkmaz. 3) Anlaşılan saatte sigortalı ekip gelir; koltuk, baza, dolap ve beyaz eşyayı odadan alır. 4) Kullanılabilir parçalar bağışa, geri dönüştürülebilir malzemeler ayrıştırmaya, kalan atık lisanslı tesise yönlendirilir. ${district.name} ${district.side} Yakası taleplerinde aynı gün / ertesi gün seçenekleri müsaitliğe göre açılır.`,
      },
      {
        heading: "Fiyatı ne belirler?",
        body: `Ücret; eşya hacmi (tek kanepe vs. takım), kat ve asansör, ${district.name} erişim koşulları (dar sokak, site girişi) ve aynı seferdeki ek kalemlere (moloz, depo) göre değişir. Sabit 'herkese aynı fiyat' yoktur; fotoğraf ile ön teklif en doğru yöntemdir. Gizli ücret uygulanmaz.`,
      },
      {
        heading: `${district.name} için sık talep edilen hizmetler`,
        body: `Popüler aramalar: ${combos}. Ayrıca daire boşaltma, depo / çatı katı temizliği ve tadilat sonrası moloz+eşya karışık yükleri tek ekiple planlanabilir. Komşu ilçeler ve yaka hub'larımızdan da devam edebilirsiniz.`,
      },
    ];
  }

  return [
    {
      heading: "İstanbul'da bu sorunu yaşayanlar ne yapmalı?",
      body: `${post.title} konusunda doğru adım; eşyayı sokağa bırakmadan önce belediye hattı, bağış veya profesyonel kapıdan alım seçeneklerini karşılaştırmaktır. Belediye randevusu uzun sürebilir ve eşyayı kapı önüne indirmeniz gerekir. Fazlalıkat ise aynı gün planlama, şeffaf fiyat ve yönetmeliğe uygun bertaraf sunar. Anadolu ve Avrupa Yakası'nın tüm ilçelerinde hizmet veririz.`,
    },
    {
      heading: "Neden profesyonel tahliye?",
      body: "Asansörsüz katlar, dar koridorlar, köşe koltuk ve ağır beyaz eşya amatör taşımayı riskli hale getirir. Sigortalı ekip, doğru ekipman ve lisanslı bertaraf hem bina hasarını hem cezai riski azaltır. Karışık yüklerde (mobilya + moloz + depo) tek seferde çözüm en ekonomik yoldur.",
    },
    {
      heading: "Teklif almak için ne gerekir?",
      body: "WhatsApp'a eşya fotoğrafları, ilçe/mahalle, kat ve asansör bilgisini yazmanız yeterlidir. Dakikalar içinde net fiyat alırsınız; onayınız olmadan ekip hareket etmez. Avrupa ve Anadolu yakası hub sayfalarımızdan bölgenize özel linklere de ulaşabilirsiniz.",
    },
  ];
}
