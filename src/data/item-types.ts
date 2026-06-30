export type ItemSection = {
  heading: string;
  body: string;
};

export type ItemType = {
  key: string;
  suffix: string;
  label: string;
  titleSuffix: string;
  intro: string;
  sections: ItemSection[];
};

export const ITEM_TYPES: ItemType[] = [
  {
    key: "koltuk",
    suffix: "eski-koltuk-nereye-atilir",
    label: "Eski Koltuk",
    titleSuffix: "Eski Koltuk Nereye Atılır?",
    intro:
      "Eski koltuk takımınızı sokağa bırakmak yerine, kapınızdan alıp yönetmeliğe uygun şekilde bertaraf veya bağışa yönlendiren bir ekiple çalışmak hem pratik hem de yasal açıdan doğru çözümdür.",
    sections: [
      {
        heading: "Sokağa bırakmak neden risklidir?",
        body:
          "Belediye yönetmeliklerine göre eski mobilyaların kaldırıma veya konteyner yanına bırakılması para cezası gerektirir ve görüntü kirliliği yaratır.",
      },
      {
        heading: "Kapıdan alım ile hızlı çözüm",
        body:
          "Koltuk takımı bulunduğu kattan alınır, sağlam parçalar bağışa, geri kalanı geri dönüşüme veya lisanslı bertarafa yönlendirilir; asansörsüz binalarda en pratik seçenektir.",
      },
      {
        heading: "Ne kadar sürer?",
        body:
          "WhatsApp'tan fotoğraf gönderip fiyat aldıktan sonra, uygun olduğunuz gün ekip gelir; çoğu durumda aynı gün veya ertesi gün randevu mümkündür.",
      },
    ],
  },
  {
    key: "beyaz-esya",
    suffix: "beyaz-esya-toplama",
    label: "Beyaz Eşya",
    titleSuffix: "Beyaz Eşya Toplama Hizmeti",
    intro:
      "Buzdolabı, çamaşır makinesi ve diğer beyaz eşyalarınızı AEEE yönetmeliğine uygun şekilde, soğutucu gaz ve devre kartı gibi zararlı bileşenlere dikkat ederek topluyoruz.",
    sections: [
      {
        heading: "Beyaz eşyalar neden özel işlem gerektirir?",
        body:
          "Buzdolabı ve klimalardaki soğutucu gazlar, çamaşır makinelerindeki motor ve devre kartları kontrolsüz bertaraf edildiğinde çevreye zarar verir; bu nedenle lisanslı tesislerde ayrıştırılmaları gerekir.",
      },
      {
        heading: "Tek seferde toplu taşıma",
        body:
          "Taşınma veya yenileme sırasında birden fazla beyaz eşyayı aynı anda tahliye etmek, her biri için ayrı randevu almaktan hem daha hızlı hem daha ekonomiktir.",
      },
      {
        heading: "Ağır eşyalar için güvenli taşıma",
        body:
          "Ekibimiz buzdolabı ve çamaşır makinesi gibi ağır cihazları gerekli ekipmanla, merdiven veya asansörsüz katlardan dahi güvenle taşır.",
      },
    ],
  },
  {
    key: "moloz",
    suffix: "insaat-molozu-atimi",
    label: "İnşaat Molozu",
    titleSuffix: "İnşaat Molozu Atımı Hizmeti",
    intro:
      "Tadilat, yıkım veya inşaat sonrası ortaya çıkan moloz ve hafriyatı, lisanslı araçlarla bulunduğu kattan alıp yasal döküm sahalarına taşıyoruz; çuval bazlı küçük işlerden kamyon/tır gerektiren büyük yıkımlara kadar her ölçekte çözüm sunuyoruz.",
    sections: [
      {
        heading: "Moloz neden normal çöp konteynerine atılamaz?",
        body:
          "İnşaat ve yıkım atıkları belediye yönetmeliklerinde ayrı bir atık sınıfında tanımlanır; evsel çöp konteynerine veya kaldırıma bırakılması idari para cezası gerektirir ve şehir genelinde sıkı denetlenir.",
      },
      {
        heading: "Çuval, kamyonet veya kamyon: doğru araç seçimi",
        body:
          "Birkaç çuvalla taşınabilecek küçük bir tadilat molozu ile komple yıkım sonrası ortaya çıkan hafriyat farklı araç ve ekip ihtiyacı doğurur; doğru araç seçimi hem maliyeti hem de süreyi doğrudan etkiler.",
      },
      {
        heading: "Asansörsüz binalarda ve hassas alanlarda moloz alımı",
        body:
          "Üst katlardan moloz indirme, doğru ekipman olmadan bina ve eşyaya hasar riski taşır; AVM, rezidans veya site gibi kurallı alanlarda ise belirlenen saatlerde sessiz ve düzenli çalışma önemlidir.",
      },
    ],
  },
  {
    key: "mobilya",
    suffix: "mobilya-dolap-attirma",
    label: "Mobilya & Dolap",
    titleSuffix: "Mobilya ve Dolap Attırma Hizmeti",
    intro:
      "Büyük gardırop, dolap ve diğer ahşap mobilyalarınızı yerinde söküyor, bulunduğu kattan kendi ekibimizle alıp tahliye ediyor, durumuna göre bağış veya geri dönüşüme yönlendiriyoruz — siz hiçbir şeyi kapıya çıkarmazsınız.",
    sections: [
      {
        heading: "Sökme ve tahliye neden uzmanlık ister?",
        body:
          "Büyük gardıroplar tek parça halinde dar koridorlardan geçmeyebilir; doğru sökme ve etiketleme, eşyanın ve binanın hasar görmeden çıkarılmasını sağlar.",
      },
      {
        heading: "Bağış mı, geri dönüşüm mü?",
        body:
          "Sağlam mobilyalar ihtiyaç sahiplerine ulaştırılmak üzere bağış kurumlarına yönlendirilir; kullanılamaz durumdaki parçalar ahşap geri dönüşüm tesislerinde değerlendirilir.",
      },
      {
        heading: "Asansörsüz binalarda güvenli tahliye",
        body:
          "Deneyimli ekibimiz, kayış ve koruma ekipmanlarıyla en üst katlardan dahi büyük mobilyaları kendisi indirir; siz tek bir adım bile taşımazsınız.",
      },
    ],
  },
];

export function getItemTypeBySuffix(suffix: string): ItemType | undefined {
  return ITEM_TYPES.find((i) => i.suffix === suffix);
}
