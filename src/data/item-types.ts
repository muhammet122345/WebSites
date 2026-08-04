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
  hubPath?: string;
  relatedBlogSlugs?: string[];
  sections: ItemSection[];
};

export const ITEM_TYPES: ItemType[] = [
  {
    key: "koltuk",
    suffix: "eski-koltuk-nereye-atilir",
    label: "Eski Koltuk",
    titleSuffix: "Eski Koltuk Nereye Atılır?",
    hubPath: "/ev-bosaltma",
    relatedBlogSlugs: ["eski-koltuk-nereye-atilir", "mobilya-atma-hizmeti-nedir"],
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
    hubPath: "/ev-bosaltma",
    relatedBlogSlugs: [
      "eski-buzdolabi-ve-beyaz-esya-atma-rehberi",
      "eski-camasir-makinesi-nereye-atilir",
    ],
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
    hubPath: "/moloz-atimi",
    relatedBlogSlugs: ["moloz-atimi-nasil-yapilir"],
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
    hubPath: "/ev-bosaltma",
    relatedBlogSlugs: ["ahsap-dolap-gardirop-nasil-attirilir", "mobilya-atma-hizmeti-nedir"],
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
  {
    key: "yatak",
    suffix: "eski-yatak-nereye-atilir",
    label: "Eski Yatak & Baza",
    titleSuffix: "Eski Yatak Nereye Atılır?",
    hubPath: "/ev-bosaltma",
    relatedBlogSlugs: ["eski-yatak-nereye-atilir"],
    intro:
      "Eski yatak, baza ve şilte hacimli atık sınıfındadır; sokağa bırakmak yasaktır. Kapıdan alım ile bulunduğu kattan alınıp yönetmeliğe uygun şekilde bertaraf edilir.",
    sections: [
      {
        heading: "Yatak neden çöpe atılamaz?",
        body:
          "Yatak ve baza konteynere sığmaz; kaldırıma bırakılması görüntü kirliliği ve idari para cezası riski yaratır. Belediye alımı da genellikle kapı önüne indirmeyi şart koşar.",
      },
      {
        heading: "Baza ve yatak birlikte alınır mı?",
        body:
          "Evet. Yatak, baza, şilte ve bazalı yatak setlerini aynı seferde alıyoruz; gerekirse yerinde söküm yapıyoruz.",
      },
      {
        heading: "Hijyen ve taşıma",
        body:
          "Ekibimiz yatakları koruyucu örtü ve uygun ekipmanla taşır; asansörsüz binalarda merdiven indirme deneyimimiz vardır.",
      },
    ],
  },
  {
    key: "daire",
    suffix: "daire-bosaltma",
    label: "Daire Boşaltma",
    titleSuffix: "Daire Boşaltma Hizmeti",
    hubPath: "/ev-bosaltma",
    relatedBlogSlugs: ["daire-bosaltma-fiyatlari-2026", "komple-evi-nasil-bosaltirim-2026"],
    intro:
      "Taşınma, miras, satış veya kiracı çıkışı öncesi dairenizdeki tüm fazlalıkları tek seferde tahliye ediyoruz; mobilyadan beyaz eşyaya kadar komple boşaltma mümkündür.",
    sections: [
      {
        heading: "Komple mi, kısmi mi?",
        body:
          "Tüm evi boşaltabilir veya yalnızca atılacak eşyaları seçebilirsiniz. Keşif veya fotoğraf sonrası net kapsam ve fiyat belirlenir.",
      },
      {
        heading: "Ne kadar sürer?",
        body:
          "Standart bir daire çoğu zaman aynı gün, birkaç saat içinde tamamlanır. Yoğun eşya veya asansörsüz katlarda süre keşif sonrası netleşir.",
      },
      {
        heading: "Kiracı çıkışı ve depozito",
        body:
          "Kira bitiminde bırakılan eşyaları hızla temizleyerek dairenin teslimini ve depozito sürecini kolaylaştırıyoruz.",
      },
    ],
  },
  {
    key: "depo",
    suffix: "depo-temizligi",
    label: "Depo Temizliği",
    titleSuffix: "Depo Temizliği ve Boşaltma",
    hubPath: "/depo-temizligi",
    relatedBlogSlugs: ["bodrum-depo-temizligi-istanbul"],
    intro:
      "Yıllardır biriken kutu, hurda, eski mobilya ve kullanılmayan malzemeleri depodan çıkarıp alanınızı yeniden kullanılabilir hale getiriyoruz.",
    sections: [
      {
        heading: "Depo neden özel plan ister?",
        body:
          "Dar koridor, düşük tavan ve karışık yığınlar taşımayı zorlaştırır; doğru ekip ve araç seçimi süreyi kısaltır.",
      },
      {
        heading: "Ayrıştırma ve bertaraf",
        body:
          "Kullanılabilir eşyalar bağışa, geri dönüştürülebilir malzemeler ilgili tesislere, kalan atıklar lisanslı bertarafa yönlendirilir.",
      },
      {
        heading: "Bodrum ve site depoları",
        body:
          "Site depo kurallarına uygun randevuyla çalışıyor; bodrum katlarında merdiven ve dar geçişlere göre ekipman kullanıyoruz.",
      },
    ],
  },
  {
    key: "ofis",
    suffix: "ofis-bosaltma",
    label: "Ofis Boşaltma",
    titleSuffix: "Ofis Boşaltma ve Demirbaş Tahliyesi",
    hubPath: "/ofis-bosaltma",
    relatedBlogSlugs: ["ofis-tasima-checklist", "ofis-esyasi-atma-hizmeti-istanbul"],
    intro:
      "İş yeri taşınması veya kapanışında masa, sandalye, dolap, arşiv ve elektronik demirbaşları profesyonel ekiple hızlı ve düzenli tahliye ediyoruz.",
    sections: [
      {
        heading: "Mesai saatlerine uyum",
        body:
          "Plaza ve iş merkezlerinde bina yönetim kurallarına ve asansör rezervasyonlarına uygun planlı çalışıyoruz.",
      },
      {
        heading: "Demirbaş ve elektronik",
        body:
          "Ofis mobilyalarının yanı sıra bilgisayar, yazıcı ve elektronik atıkları AEEE kurallarına uygun topluyoruz.",
      },
      {
        heading: "Tek seferde teslim",
        body:
          "Taşınma gününde gecikme yaşamamanız için ekip ve araç kapasitesini önceden netleştiriyoruz.",
      },
    ],
  },
  {
    key: "cati",
    suffix: "cati-kati-temizligi",
    label: "Çatı Katı Temizliği",
    titleSuffix: "Çatı Katı Temizliği Hizmeti",
    hubPath: "/cati-kati-temizligi",
    relatedBlogSlugs: ["cati-kati-temizligi-istanbul"],
    intro:
      "Çatı katı ve teras depolarında biriken eski eşya, kutu ve hurdayı güvenli şekilde indirip tahliye ediyoruz; dar merdiven ve asansörsüz çıkışlarda deneyimliyiz.",
    sections: [
      {
        heading: "Erişim zorluğu",
        body:
          "Çatı katına çıkış çoğu binada dardır; doğru ekipman ve personel olmadan eşya indirmek risklidir.",
      },
      {
        heading: "Hızlı ferahlama",
        body:
          "Yıllardır dokunulmayan çatı katlarını tek günde boşaltıp alanı yeniden kullanılabilir hale getiriyoruz.",
      },
      {
        heading: "Güvenli indirme",
        body:
          "Ağır parçaları merdiven veya yük asansörüyle kontrollü indiriyor; bina ortak alanlarına zarar vermemeye özen gösteriyoruz.",
      },
    ],
  },
];

export function getItemTypeBySuffix(suffix: string): ItemType | undefined {
  return ITEM_TYPES.find((i) => i.suffix === suffix);
}
