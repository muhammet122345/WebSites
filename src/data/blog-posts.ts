export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  sections: BlogSection[];
};

const TURKISH_MONTHS: Record<string, number> = {
  Oca: 0,
  Şub: 1,
  Mar: 2,
  Nis: 3,
  May: 4,
  Haz: 5,
  Tem: 6,
  Ağu: 7,
  Eyl: 8,
  Eki: 9,
  Kas: 10,
  Ara: 11,
};

export function parsePostDate(post: BlogPost): Date {
  const [day, monthAbbr, year] = post.date.split(" ");
  return new Date(Number(year), TURKISH_MONTHS[monthAbbr] ?? 0, Number(day));
}

const TURKISH_MONTH_ABBR = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];

export function formatPostDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  return `${day} ${TURKISH_MONTH_ABBR[date.getMonth()]} ${date.getFullYear()}`;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "eski-koltuk-nereye-atilir",
    title: "Eski Koltuk Nereye Atılır? Kapıdan Alım Rehberi",
    excerpt:
      "Eski koltuk takımınızdan kurtulmanın belediye, bağış ve kapıdan alım dahil tüm yasal ve pratik yollarını anlatıyoruz.",
    date: "02 Haz 2026",
    category: "Rehber",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Eski koltuğu sokağa atmak neden risklidir?",
        body:
          "Büyükşehir belediye yönetmeliklerine göre eski mobilyaların gelişigüzel sokağa, kaldırıma ya da konteyner yanına bırakılması yasaktır ve para cezası uygulanabilir. Ayrıca yağmur altında bekleyen bir koltuk takımı hem görüntü kirliliği yaratır hem de geri dönüştürülebilir malzemelerin (sünger, ahşap, metal iskelet) değerlendirilmesini zorlaştırır.",
      },
      {
        heading: "Belediye büyükşehir çöp hattı seçeneği",
        body:
          "Çoğu ilçe belediyesi 'büyük atık' veya 'beyaz eşya hattı' üzerinden randevu sistemiyle ücretsiz alım yapar. Dezavantajı, randevu için günler hatta haftalar sürebilmesi ve genellikle binanın önüne kadar eşyayı kendinizin taşıması gerekmesidir; asansörsüz binalarda bu ciddi bir sorun olur.",
      },
      {
        heading: "Bağış kurumlarına teslim",
        body:
          "Koltuk hâlâ kullanılabilir durumdaysa belediyelerin sosyal yardım birimleri veya çeşitli vakıflar ihtiyaç sahiplerine ulaştırmak üzere teslim alabilir. Bu seçenek hem çevreci hem de toplumsal fayda sağlar, ancak kurumların da kendi kapasite ve zaman kısıtları olduğunu unutmamak gerekir.",
      },
      {
        heading: "Kapıdan alım hizmeti ile hızlı çözüm",
        body:
          "Zaman kaybetmek istemiyorsanız, profesyonel bir tahliye ekibi koltuğu bulunduğu kattan alıp aracına yükler, ayrıştırılabilir parçaları geri dönüşüme yönlendirir ve geri kalanını yönetmeliğe uygun şekilde bertaraf eder. Asansörsüz binalarda ya da büyük/ağır takımlarda en pratik çözüm budur.",
      },
      {
        heading: "Fazlalıkat ile süreç nasıl işliyor?",
        body:
          "WhatsApp üzerinden fotoğrafını gönderdiğiniz koltuk takımı için dakikalar içinde fiyat alır, uygun olduğunuz gün ekibimiz adresinize gelip eşyayı kapınızdan teslim alır. Aynı gün randevu çoğu bölgede mümkündür.",
      },
    ],
  },
  {
    slug: "eski-buzdolabi-ve-beyaz-esya-atma-rehberi",
    title: "Eski Buzdolabı ve Beyaz Eşya Nasıl Atılır?",
    excerpt:
      "Buzdolabı, çamaşır makinesi ve diğer beyaz eşyaların çevreye zarar vermeden, yönetmeliğe uygun şekilde nasıl bertaraf edileceğini anlatıyoruz.",
    date: "06 Haz 2026",
    category: "Rehber",
    image: "/images/blog/eskibeyazesyavebuzdolabinereyeatilir.png",
    sections: [
      {
        heading: "Beyaz eşyalar neden normal çöple atılamaz?",
        body:
          "Buzdolabı ve klimalarda bulunan soğutucu gazlar, çamaşır makinelerindeki motor yağları ve devre kartlarındaki ağır metaller, kontrolsüz bertaraf edildiğinde toprağa ve su kaynaklarına ciddi zarar verir. Bu yüzden beyaz eşyalar 'Atık Elektrikli ve Elektronik Eşya (AEEE)' kapsamında özel olarak toplanır.",
      },
      {
        heading: "Lisanslı geri dönüşüm tesisleri",
        body:
          "Beyaz eşyalar lisanslı tesislerde sökülerek metal, plastik ve elektronik bileşenler birbirinden ayrıştırılır. Bu sayede malzemenin büyük kısmı yeniden ekonomiye kazandırılır. Yetkisiz hurdacılara teslim edilen cihazlarda bu ayrıştırma genellikle sağlıksız koşullarda ve çevreye zarar verecek şekilde yapılır.",
      },
      {
        heading: "Yeni cihaz alırken eski cihazı teslim etme hakkı",
        body:
          "Türkiye'de yürürlükteki yönetmelik, yeni bir beyaz eşya satın aldığınızda satıcının eski cihazınızı ücretsiz geri almasını zorunlu kılar. Ancak bu sadece 1'e 1 değişim için geçerlidir ve cihazı evden çıkarıp teslim noktasına ulaştırmak çoğu zaman sizin sorumluluğunuzdadır.",
      },
      {
        heading: "Birden fazla cihazı tek seferde bertaraf etmek",
        body:
          "Yenileme, taşınma veya miras sonrası birden fazla beyaz eşyadan aynı anda kurtulmanız gerektiğinde, her biri için ayrı ayrı randevu almak yerine tek bir ekiple toplu taşıma yapmak hem zaman hem maliyet açısından avantajlıdır.",
      },
      {
        heading: "Fazlalıkat ile beyaz eşya toplama",
        body:
          "Ekibimiz buzdolabı, çamaşır/bulaşık makinesi, fırın ve klima gibi cihazları bulunduğu kattan alır, ağır ve hacimli olanlar için gerekli ekipmanla güvenli taşıma sağlar ve tüm cihazları lisanslı geri dönüşüm noktalarına yönlendirir.",
      },
    ],
  },
  {
    slug: "daire-bosaltma-fiyatlari-2026",
    title: "Daire Boşaltma Fiyatları 2026: Neye Göre Belirlenir?",
    excerpt:
      "Daire boşaltma maliyetini etkileyen faktörleri ve gerçekçi bir fiyat aralığı oluşturmak için bilmeniz gerekenleri derledik.",
    date: "10 Haz 2026",
    category: "Fiyatlandırma",
    image: "https://images.unsplash.com/photo-1663625318264-695d2d04f11a?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        heading: "Alan büyüklüğü ve eşya hacmi",
        body:
          "Fiyatı belirleyen en temel kriter, boşaltılacak alanın metrekaresi ve içindeki eşya yoğunluğudur. 1+1 az eşyalı bir daire ile yıllarca dolup taşmış 4+1 bir ev arasında işçilik ve araç süresi açısından büyük fark vardır.",
      },
      {
        heading: "Kat ve asansör durumu",
        body:
          "Asansörsüz bir binada 4. veya 5. kattan ağır mobilyaları indirmek, asansörlü bir daireye kıyasla belirgin şekilde daha fazla işçilik gerektirir. Bu fark fiyat teklifine yansıtılır; keşif sırasında bu detayı netleştirmek sürpriz ücretlerin önüne geçer.",
      },
      {
        heading: "Atık türü ve bertaraf maliyeti",
        body:
          "Normal ev eşyası ile inşaat molozu, beyaz eşya veya kimyasal içerikli atıkların bertaraf süreci farklıdır. Geri dönüştürülebilir malzemeler maliyeti aşağı çekerken, özel bertaraf gerektiren atıklar (örneğin büyük miktarda yapı kalıntısı) maliyeti artırabilir.",
      },
      {
        heading: "Aciliyet ve randevu zamanı",
        body:
          "Aynı gün veya ertesi gün talep edilen acil işler, planlı şekilde haftalar öncesinden ayarlanan işlere göre genellikle biraz daha yüksek fiyatlandırılır; çünkü ekip ve araç o gün için yeniden organize edilir.",
      },
      {
        heading: "Gerçekçi ve şeffaf teklif nasıl alınır?",
        body:
          "En sağlıklı yöntem, fotoğraf veya kısa bir video ile WhatsApp üzerinden ön bilgi vermek ve ardından ücretsiz keşif talep etmektir. Keşif sonrası verilen net fiyatta sürpriz ek ücret olmamalıdır — Fazlalıkat'ta keşif öncesi verdiğimiz aralık ile keşif sonrası net fiyat arasındaki farkı her zaman önceden açıklarız.",
      },
    ],
  },
  {
    slug: "moloz-atimi-nasil-yapilir",
    title: "Moloz Atımı Nasıl Yapılır? Yönetmelik ve Süreç",
    excerpt:
      "İnşaat ve tadilat sonrası moloz atımında yasal süreç, izinler ve doğru bertaraf yöntemleri hakkında bilmeniz gerekenler.",
    date: "14 Haz 2026",
    category: "Rehber",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Moloz neden normal çöp konteynerine atılamaz?",
        body:
          "Hafriyat ve inşaat-yıkım atıkları, belediye çevre yönetmeliklerinde 'hafriyat toprağı, inşaat ve yıkıntı atıkları' olarak ayrı bir sınıfta tanımlanır. Bu atıkların evsel çöp konteynerlerine veya kaldırıma bırakılması idari para cezası gerektirir.",
      },
      {
        heading: "Hafriyat döküm sahası ve izin süreci",
        body:
          "Büyük miktarlı moloz, belediyenin belirlediği lisanslı hafriyat döküm sahalarına taşınmalıdır. Bireysel olarak bu süreci yönetmek; araç kiralama, sahaya giriş izni ve tartı/fiş işlemleri gibi adımlar nedeniyle vakit alıcıdır.",
      },
      {
        heading: "Ayrıştırma: hangi malzemeler geri dönüştürülebilir?",
        body:
          "Beton, tuğla ve seramik kırıkları öğütülerek dolgu malzemesine dönüştürülebilir; metal aksamlar (demir çubuk, boru) hurda olarak değerlendirilir. Doğru ayrıştırma, hem çevresel etkiyi azaltır hem de bazı durumlarda bertaraf maliyetini düşürür.",
      },
      {
        heading: "Apartman ve site kurallarına dikkat",
        body:
          "Çoğu apartman yönetimi, moloz torbalarının ortak alanda uzun süre bekletilmesine izin vermez. Tadilat öncesi yönetimle koordinasyon kurup, molozun aynı gün veya en kısa sürede taşınacağı bir plan yapmak hem komşu ilişkilerini hem de olası şikayetleri önler.",
      },
      {
        heading: "Fazlalıkat ile moloz atımı süreci",
        body:
          "Ekibimiz molozu kattan/daireden alıp uygun büyük torba veya araçla lisanslı hafriyat sahasına taşır, gerekli tüm evrak ve izin süreçlerini sizin adınıza yürütür. Tadilat takviminize göre aynı gün veya planlı randevu seçeneği sunarız.",
      },
    ],
  },
  {
    slug: "evden-tasinmadan-once-yapilacaklar-listesi",
    title: "Evden Taşınmadan Önce Yapılacaklar Listesi",
    excerpt:
      "Taşınma stresini azaltacak, hiçbir adımı atlamamanız için hazırladığımız adım adım kontrol listesi.",
    date: "18 Haz 2026",
    category: "Taşınma",
    image: "/images/blog/yapilacaklarlistes.png",
    sections: [
      {
        heading: "4 hafta önce: ayıklama ve elden çıkarma",
        body:
          "Taşınmadan en az bir ay önce her odayı tek tek gezip 'taşınacak, bağışlanacak, atılacak' şeklinde üç gruba ayırın. Kullanılmayan eşyaları yeni evinize taşımak hem nakliye maliyetini hem de paketleme süresini artırır.",
      },
      {
        heading: "2-3 hafta önce: fazlalıkların tahliyesi",
        body:
          "Atılacak veya bağışlanacak grup belirlendikten sonra bu eşyaları taşınma gününden önce evden çıkarın. Hem nakliye ekibinin işi kolaylaşır hem de yeni eve sadece gerçekten ihtiyacınız olan eşyalar gider.",
      },
      {
        heading: "1 hafta önce: paketleme ve etiketleme",
        body:
          "Kutuları oda bazında etiketlemek, yeni evde yerleşimi büyük ölçüde hızlandırır. Kırılacak eşyalar için özel işaretleme yapmayı ve değerli/önemli belgeleri kendi yanınızda taşımayı unutmayın.",
      },
      {
        heading: "Taşınma günü: kontrol ve teslim",
        body:
          "Eski evden çıkmadan önce tüm dolap, depo ve balkon gibi alanları tekrar kontrol edin; sayaç ve abonelik devir işlemlerini planlayın. Anahtar teslimi öncesi evin boş ve temiz olduğundan emin olun.",
      },
      {
        heading: "Fazlalıkat ile son temizlik desteği",
        body:
          "Taşınma sırasında geride kalan eşya, kutu veya gereksiz mobilyalar için aynı gün tahliye desteği sunuyoruz; böylece eski evi tertemiz teslim eder, yeni hayatınıza fazlalıksız başlarsınız.",
      },
    ],
  },
  {
    slug: "ofis-tasima-checklist",
    title: "Ofis Taşıma Sürecinde Dikkat Edilmesi Gerekenler",
    excerpt:
      "İş sürekliliğini bozmadan ofis taşımayı planlamak için adım adım hazırladığımız pratik kontrol listesi.",
    date: "21 Haz 2026",
    category: "Taşınma",
    image: "/images/blog/ofisyapilacaklarlistesi.png",
    sections: [
      {
        heading: "Envanter çıkarma ve demirbaş kontrolü",
        body:
          "Taşınmadan önce tüm demirbaşların (masa, sandalye, bilgisayar, sunucu vb.) güncel bir listesini çıkarmak, hem sigorta hem de yeni ofiste hiçbir eşyanın kaybolmadığını teyit etmek için kritiktir.",
      },
      {
        heading: "Hafta sonu veya mesai dışı planlama",
        body:
          "İş sürekliliğini korumak için taşınmayı hafta sonuna veya yoğun olmayan saatlere planlamak yaygın bir tercihtir. Ekiple birlikte net bir zaman çizelgesi belirlemek, çalışanların pazartesi sabahı kesintisiz çalışmaya başlamasını sağlar.",
      },
      {
        heading: "Eski ofisteki fazlalıkların tahliyesi",
        body:
          "Yıllar içinde birikmiş eski evrak, kullanılmayan mobilya ve bozuk elektronik cihazlar genellikle yeni ofise taşınmaz. Bunların taşınma günü öncesinde ayrıca tahliye edilmesi, nakliye ekibinin sadece aktif demirbaşla ilgilenmesini sağlar.",
      },
      {
        heading: "Hassas evrak ve veri güvenliği",
        body:
          "İmha edilecek evrakların güvenli şekilde parçalanması veya yetkili bir firma aracılığıyla imha edilmesi, KVKK ve ticari sır yükümlülükleri açısından önemlidir. Bu süreci nakliye sürecinden ayrı planlamak daha güvenlidir.",
      },
      {
        heading: "Fazlalıkat ile ofis tahliye desteği",
        body:
          "Taşınma öncesi veya sonrası eski ofisteki fazlalıkları (mobilya, elektronik, evrak) sigortalı ekibimizle hızlıca tahliye ediyor, ofisinizi bir sonraki kiracıya veya yeni düzene hazır şekilde teslim ediyoruz.",
      },
    ],
  },
  {
    slug: "bahce-budama-atigi-nereye-atilir",
    title: "Bahçe ve Budama Atığı Nereye Atılır?",
    excerpt:
      "Budama dalları, ot ve yaprak atıklarının doğru bertarafı için bilmeniz gereken yöntemleri anlatıyoruz.",
    date: "24 Haz 2026",
    category: "Rehber",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        heading: "Bahçe atığı normal çöple aynı kategoride mi?",
        body:
          "Hayır. Organik bahçe atıkları (budama dalı, çim, yaprak) evsel katı atıktan ayrı toplanıp kompost veya biyokütle tesislerinde değerlendirilebilir. Büyük miktarda dal ve kütük ise ayrıca parçalanması gereken hacimli atık sınıfına girer.",
      },
      {
        heading: "Küçük çaplı atıklar için belediye çözümleri",
        body:
          "Çoğu ilçe belediyesi, sınırlı miktardaki bahçe atığı için poşetleme kurallarına uyulması koşuluyla düzenli toplama yapar. Ancak büyük budama işleri (ağaç kesimi, kapsamlı peyzaj düzenlemesi) bu kapasiteyi aşar.",
      },
      {
        heading: "Büyük peyzaj ve bahçe düzenlemelerinde toplu taşıma",
        body:
          "Geniş bahçesi olan villa veya siteler için budama sonrası ortaya çıkan dal, kütük ve toprak atığı genellikle tek seferde büyük hacimli bir taşıma gerektirir. Bunu parça parça belediye toplama günlerine bırakmak hem yavaş hem de bahçenin uzun süre dağınık görünmesine sebep olur.",
      },
      {
        heading: "Mevsimsel bakım sonrası hızlı tahliye",
        body:
          "Bahar ve sonbahar bakım dönemlerinde bahçıvanlık firmalarıyla çalışıyorsanız, onların geride bıraktığı atığın aynı gün tahliyesini planlamak bahçenizin her zaman bakımlı görünmesini sağlar.",
      },
      {
        heading: "Fazlalıkat ile bahçe atığı tahliyesi",
        body:
          "Budama dalları, kütükler, çim ve toprak atıklarını bulunduğu yerden alıp uygun bertaraf veya geri dönüşüm noktalarına taşıyoruz; büyük peyzaj projelerinde toplu randevu ile aynı gün tahliye sağlıyoruz.",
      },
    ],
  },
  {
    slug: "kiraci-cikisi-temizlik-rehberi",
    title: "Kiracı Çıkışında Temizlik ve Teslim Rehberi",
    excerpt:
      "Depozitonuzu sorunsuz geri almak için kiracı çıkışında yapılması gereken temizlik ve tahliye adımlarını derledik.",
    date: "27 Haz 2026",
    category: "Taşınma",
    image: "/images/blog/kiracicikisindatemizlik.png",
    sections: [
      {
        heading: "Sözleşmedeki teslim koşullarını kontrol edin",
        body:
          "Kira sözleşmenizde dairenin hangi durumda teslim edilmesi gerektiği genellikle açıkça belirtilir. Bu maddeyi taşınmadan önce tekrar okumak, depozito kesintisine yol açabilecek noktaları önceden tespit etmenizi sağlar.",
      },
      {
        heading: "Kişisel eşya ve fazlalıkların tahliyesi",
        body:
          "Çıkış öncesi tüm kişisel eşyaların, kullanılmayan mobilyaların ve depolanmış kutuların daireden tamamen çıkarılması gerekir. Geride kalan herhangi bir eşya, ev sahibinin depozitodan kesinti yapmasına gerekçe olabilir.",
      },
      {
        heading: "Derin temizlik ve küçük onarımlar",
        body:
          "Mutfak, banyo ve zeminlerin derin temizliği, duvarlardaki küçük çivi delikleri veya boya hasarlarının onarımı, teslim sırasında anlaşmazlık riskini azaltır. Mümkünse teslim öncesi fotoğraflarla dairenin durumunu belgeleyin.",
      },
      {
        heading: "Ortak alan ve depo/kiler kontrolü",
        body:
          "Sadece daire içi değil, kiler, depo veya ortak kullanım alanındaki dolaplar da genellikle teslim kapsamına girer. Bu alanlarda unutulan eşyalar son anda fark edilip taşınma planını bozabilir.",
      },
      {
        heading: "Fazlalıkat ile hızlı çıkış desteği",
        body:
          "Taşınma tarihine yakın bir zamanda geride kalan eşya ve fazlalıkları aynı gün tahliye ediyor, dairenin teslime hazır, boş ve düzenli olmasını sağlıyoruz — böylece depozito sürecinizi sorunsuz tamamlarsınız.",
      },
    ],
  },
  {
    slug: "hurdaci-mi-profesyonel-esya-attirma-hizmeti-mi",
    title: "Hurdacı mı, Profesyonel Eşya Attırma Hizmeti mi?",
    excerpt:
      "Eski eşyalarınızdan kurtulurken hurdacı ile profesyonel tahliye hizmeti arasındaki farkları karşılaştırdık.",
    date: "30 Haz 2026",
    category: "Karşılaştırma",
    image: "/images/blog/eskiesyaattirmak.png",
    sections: [
      {
        heading: "Hurdacılar nasıl çalışır?",
        body:
          "Mahalle hurdacıları genellikle sadece satılabilir metal/hurda değeri olan eşyaları (beyaz eşya, metal aksam) ücretsiz veya küçük bir bedelle alır; koltuk, yatak, ahşap mobilya gibi 'değersiz' gördükleri eşyaları almayı reddedebilir.",
      },
      {
        heading: "Randevu ve güvenilirlik sorunu",
        body:
          "Hurdacılarla randevu genellikle telefonla, net olmayan bir zaman diliminde ayarlanır; gelip gelmeyecekleri garanti değildir ve sigorta/sorumluluk güvencesi sunmazlar. Eşyaya hasar verseler bile genellikle muhatap bulmak zordur.",
      },
      {
        heading: "Profesyonel hizmetin sunduğu fark",
        body:
          "Profesyonel bir tahliye firması her tür eşyayı (değerli olsun olmasın) kabul eder, net bir randevu saati verir, sigortalı çalışır ve atığın nereye gittiğini (geri dönüşüm, bağış, lisanslı bertaraf) şeffaf şekilde açıklar.",
      },
      {
        heading: "Maliyet karşılaştırması",
        body:
          "Hurdacı 'ücretsiz' görünse de sadece işine gelen eşyaları alır, geri kalanı sizin üzerinizde bırakır. Profesyonel hizmette küçük bir ücret karşılığında TÜM eşyalardan tek seferde ve garantili şekilde kurtulursunuz — toplam zaman ve stres maliyeti çoğu zaman daha düşüktür.",
      },
      {
        heading: "Fazlalıkat farkı",
        body:
          "Hangi eşyaya sahip olduğunuzdan bağımsız olarak, evinizdeki veya iş yerinizdeki tüm fazlalıkları aynı randevuda, sigortalı ve şeffaf şekilde tahliye ediyoruz; geri dönüştürülebilir parçaları ayrıştırıyoruz.",
      },
    ],
  },
  {
    slug: "kiraci-esya-birakti-ne-yapmali",
    title: "Kiracı Eşya Bırakıp Gitti, Ne Yapmalıyım?",
    excerpt:
      "Kiracınız çıkarken eşyalarını bırakıp gittiyse hukuki ve pratik olarak izlemeniz gereken adımları anlatıyoruz.",
    date: "02 Tem 2026",
    category: "Rehber",
    image: "/images/blog/kiraciesyabirakipgitti.png",
    sections: [
      {
        heading: "Önce durumu belgeleyin",
        body:
          "Daireyi tekrar kiraya vermeden veya eşyaları taşımadan önce, geride bırakılan eşyaların fotoğraflarını tarih damgalı şekilde çekin. Bu, olası bir anlaşmazlıkta sizi koruyacak ilk adımdır.",
      },
      {
        heading: "Kiracıyla iletişime geçmeyi deneyin",
        body:
          "Mümkünse kiracıya makul bir süre (genellikle 15-30 gün) tanıyıp eşyalarını almasını isteyin. Bu bildirimi yazılı (mesaj/noter) yapmak, ileride 'haber vermeden attınız' iddialarına karşı sizi güvence altına alır.",
      },
      {
        heading: "Süre sonunda eşyaların durumu",
        body:
          "Tanınan süre sonunda eşyalar alınmazsa, genel uygulamada ev sahibi daireyi yeniden kullanıma hazırlamak için eşyaları tahliye edebilir; ancak değerli görünen eşyaları (belge, ziynet vb.) ayrıca güvenli şekilde saklamak ihtiyatlı bir yaklaşımdır.",
      },
      {
        heading: "Daireyi hızlıca yeniden kiraya hazırlamak",
        body:
          "Boş kalan her ay kira geliri kaybı demektir. Eşyaları profesyonel bir ekiple hızlıca tahliye ettirip daireyi temiz ve gösterime hazır hale getirmek, yeni kiracı bulma sürecini kısaltır.",
      },
      {
        heading: "Fazlalıkat ile hızlı tahliye",
        body:
          "Bu tür durumlarda aynı gün keşif ve tahliye desteği sunuyoruz; eşyaları kaldırıp daireyi sizin için kullanıma hazır teslim ediyoruz.",
      },
    ],
  },
  {
    slug: "belediye-buyuk-esya-almiyor-ne-yapmali",
    title: "Belediye Büyük Eşyamı Almıyor, Ne Yapmalıyım?",
    excerpt:
      "Belediye büyük atık hattı randevusu uzadığında veya eşyanızı kabul etmediğinde alternatif çözümleri anlatıyoruz.",
    date: "04 Tem 2026",
    category: "Rehber",
    image: "/images/blog/belediye.png",
    sections: [
      {
        heading: "Belediye neden bazı eşyaları almayabilir?",
        body:
          "Bazı ilçe belediyeleri büyük atık toplamasını belirli gün ve kotalarla sınırlar; inşaat/tadilat atığı, çok büyük hacimli eşya veya tehlikeli madde içeren ürünleri standart hatlardan kabul etmeyebilir.",
      },
      {
        heading: "Randevu süresi neden uzar?",
        body:
          "Yoğun dönemlerde (taşınma sezonu, bayram öncesi) belediye ekiplerine talep arttığından randevu günlerce, hatta haftalarca gecikebilir. Bu süre boyunca eşyanın evde/balkonda bekletilmesi pratik bir sorun yaratır.",
      },
      {
        heading: "Alternatif: özel tahliye hizmeti",
        body:
          "Profesyonel bir eşya tahliye firması, belediyenin kabul etmediği veya yavaş kaldığı durumlarda günler içinde, çoğu zaman aynı gün randevu ile çözüm sunar ve atığı yönetmeliğe uygun şekilde bertaraf eder.",
      },
      {
        heading: "Maliyetin karşılığı nedir?",
        body:
          "Belediye hizmeti ücretsiz olsa da zaman maliyeti yüksektir. Küçük bir ücret karşılığında zamanında, güvenilir ve taşıma dahil bir hizmet almak, özellikle taşınma veya tadilat takvimine bağlı durumlarda çok daha değerlidir.",
      },
      {
        heading: "Fazlalıkat ile hızlı çözüm",
        body:
          "Belediye hattının yetersiz kaldığı durumlarda WhatsApp üzerinden bize ulaşın, çoğu bölgede aynı gün veya ertesi gün randevu ile eşyanızı tahliye edelim.",
      },
    ],
  },
  {
    slug: "eski-esya-attirmak-mumkun-mu",
    title: "Eski Eşya Attırmak Mümkün mü? Süreç Ne Kadar Sürer?",
    excerpt:
      "Eski eşyalardan kurtulma sürecinin ne kadar sürdüğünü ve nelere dikkat etmeniz gerektiğini anlatıyoruz.",
    date: "06 Tem 2026",
    category: "Rehber",
    image: "/images/blog/eskiesyaattirmak.png",
    sections: [
      {
        heading: "Evet, her eşya için bir çözüm var",
        body:
          "Koltuktan beyaz eşyaya, inşaat molozundan ofis demirbaşına kadar pratikte her tür eşya için yasal ve düzenli bir bertaraf veya geri dönüşüm yolu mevcuttur; tek fark süre ve yöntemdir.",
      },
      {
        heading: "Süreç genellikle nasıl işler?",
        body:
          "Fotoğraf ile ön bilgi verilir, fiyat aralığı belirlenir, randevu günü ekip gelip eşyayı alır ve aynı gün içinde bertaraf/geri dönüşüm sürecine yönlendirir. Basit işler için bu süreç toplamda birkaç saat sürebilir.",
      },
      {
        heading: "Süreci uzatan faktörler",
        body:
          "Çok büyük hacimli işler (komple ev/depo boşaltma), asansörsüz binalar veya özel bertaraf gerektiren atıklar (kimyasal, tıbbi atık vb.) süreci uzatabilir; bu durumlarda önceden planlama yapmak önemlidir.",
      },
      {
        heading: "Acil durumlar için hızlandırılmış seçenekler",
        body:
          "Taşınma veya teslim tarihi yaklaşan durumlarda, aynı gün hizmet veren ekiplerle çalışmak süreci saatler içine indirebilir; bu nedenle 7/24 ulaşılabilir bir iletişim hattı tercih etmek önemlidir.",
      },
      {
        heading: "Fazlalıkat ile süreç ne kadar sürer?",
        body:
          "Çoğu standart iş (daire, ofis, depo) için WhatsApp'tan ilk mesajdan tahliyenin tamamlanmasına kadar geçen süre aynı gün içinde sonuçlanır; büyük projelerde net bir takvim önceden netleştirilir.",
      },
    ],
  },
  {
    slug: "eski-tv-nereye-atilir",
    title: "Eski Televizyon Nereye Atılır?",
    excerpt:
      "Eski CRT veya LCD televizyonların güvenli ve yasal şekilde nasıl bertaraf edileceğini anlatıyoruz.",
    date: "08 Tem 2026",
    category: "Rehber",
    image: "/images/blog/eskitvnereyeatilir.png",
    sections: [
      {
        heading: "Televizyonlar neden özel atık sayılır?",
        body:
          "Özellikle eski CRT (tüplü) televizyonlar kurşun ve cam bileşikleri içerir; LCD/LED modellerde ise devre kartları ve bazen cıva içeren arka ışık üniteleri bulunur. Bu yüzden normal çöple atılmaları çevre yönetmeliklerine aykırıdır.",
      },
      {
        heading: "AEEE (elektronik atık) toplama noktaları",
        body:
          "Birçok ilçe belediyesi ve bazı elektronik mağazaları, eski televizyonları AEEE kapsamında ücretsiz teslim almak için toplama noktaları işletir. Ancak büyük ve ağır CRT televizyonları bu noktalara taşımak çoğu kişi için pratik değildir.",
      },
      {
        heading: "Yeni televizyon alırken eski cihazı teslim etme",
        body:
          "Yeni bir televizyon satın aldığınızda satıcının eski cihazınızı (1'e 1 değişim kapsamında) geri alma zorunluluğu vardır, ancak cihazı mağazaya ulaştırmak genellikle sizin sorumluluğunuzdadır.",
      },
      {
        heading: "Birden fazla elektronik cihazı tek seferde bertaraf etmek",
        body:
          "Televizyonla birlikte eski bilgisayar, müzik seti veya diğer elektronik cihazlarınız varsa, tümünü tek bir randevuda topluca bertaraf etmek hem zaman hem maliyet açısından daha mantıklıdır.",
      },
      {
        heading: "Fazlalıkat ile elektronik atık toplama",
        body:
          "Eski televizyon ve diğer elektronik cihazlarınızı bulunduğu yerden alıp lisanslı geri dönüşüm noktalarına yönlendiriyoruz; ağır ve hacimli CRT televizyonlar için de güvenli taşıma sağlıyoruz.",
      },
    ],
  },
  {
    slug: "ahsap-dolap-gardirop-nasil-attirilir",
    title: "Ahşap Dolap ve Gardırop Nasıl Attırılır?",
    excerpt:
      "Büyük ahşap dolap ve gardıropları sökme, taşıma ve bertaraf etme sürecinde dikkat edilmesi gerekenleri anlatıyoruz.",
    date: "10 Tem 2026",
    category: "Rehber",
    image: "/images/blog/mobilyatmahizmeti.png",
    sections: [
      {
        heading: "Neden dolap/gardırop taşıma zordur?",
        body:
          "Büyük gardıroplar genellikle tek parça halinde dar koridor ve merdivenlerden geçmez; sökülmeden taşınmaya çalışıldığında duvarlara, kapı kasalarına zarar verebilir veya eşyanın kendisi kırılabilir.",
      },
      {
        heading: "Sökme işleminde dikkat edilmesi gerekenler",
        body:
          "Vida ve menteşe yerlerinin doğru sökülmesi, parçaların kaybolmaması için etiketlenmesi ve cam/ayna içeren kapakların ayrıca korunması, hem güvenli taşıma hem de eşyanın yeniden kurulabilir olması açısından önemlidir.",
      },
      {
        heading: "Asansörsüz binalarda taşıma",
        body:
          "Asansörsüz bir binada üst kattan büyük bir gardırobu indirmek, doğru ekipman (kayış, kaymaz taban, koruma battaniyesi) ve en az iki kişilik deneyimli bir ekip gerektirir; aksi halde hem eşyaya hem binaya hasar riski yüksektir.",
      },
      {
        heading: "Bertaraf mı, bağış mı?",
        body:
          "Hâlâ sağlam olan ahşap mobilyalar bağış kurumlarına yönlendirilebilir; kullanılamaz durumdaki parçalar ise ahşap geri dönüşüm tesislerinde değerlendirilir. Doğru ayrıştırma çevresel etkiyi azaltır.",
      },
      {
        heading: "Fazlalıkat ile dolap ve gardırop tahliyesi",
        body:
          "Ekibimiz gerekirse dolabı yerinde söker, güvenli şekilde taşır ve durumuna göre bağış veya geri dönüşüm sürecine yönlendirir — duvarlarınıza veya merdivenlerinize zarar vermeden.",
      },
    ],
  },
  {
    slug: "eski-yatak-nereye-atilir",
    title: "Eski Yatak Nereye Atılır? Hijyenik ve Yasal Yöntemler",
    excerpt:
      "Eski yatak ve bazaların hijyen kurallarına uygun, yasal ve pratik şekilde nasıl bertaraf edileceğini anlatıyoruz.",
    date: "13 Tem 2026",
    category: "Rehber",
    image: "/images/blog/eskiyatak.png",
    sections: [
      {
        heading: "Eski yatak neden sıradan bir mobilye gibi atılamaz?",
        body:
          "Yatak; sünger, yay sistemi ve kumaş katmanlarının iç içe geçtiği hacimli bir eşyadır. Kaldırıma bırakıldığında hem yağmurdan hijyenik olmayan bir hâle gelir hem de büyükşehir yönetmeliklerine göre 'gelişigüzel atık bırakma' kapsamında cezai işlem görebilir.",
      },
      {
        heading: "Yay sistemli yataklarda geri dönüşüm",
        body:
          "Yay sistemli yataklarda metal yaylar ayrıştırılıp hurda metal olarak değerlendirilebilir, sünger ve kumaş kısmı ise ayrı bir atık akışına yönlendirilir. Bu ayrıştırma yalnızca uygun ekipmana sahip tesislerde sağlıklı şekilde yapılabilir.",
      },
      {
        heading: "Hijyen ve koku sorunu",
        body:
          "Uzun süre kullanılmış yataklar nem ve bakteri tutabildiğinden, taşıma sırasında naylonla sarılması hem taşıyan ekip hem de bina ortak alanları için önemlidir. Profesyonel ekipler bu konuda standart bir uygulama izler.",
      },
      {
        heading: "Baza ve yatak başlığını birlikte tahliye etmek",
        body:
          "Yatakla birlikte baza ve başlık genellikle aynı anda değiştirildiğinden, bu parçaların hepsini tek seferde tahliye ettirmek hem zaman kazandırır hem de odanın yeni eşyaya hazır hale gelmesini hızlandırır.",
      },
      {
        heading: "Fazlalıkat ile yatak ve baza tahliyesi",
        body:
          "Yatak, baza ve başlığınızı bulunduğu odadan alıp naylonla paketleyerek taşıyor, geri dönüştürülebilir kısımları ayrıştırıp kalanını yönetmeliğe uygun şekilde bertaraf ediyoruz. Aynı gün randevu çoğu bölgede mümkündür.",
      },
    ],
  },
  {
    slug: "eski-camasir-makinesi-nereye-atilir",
    title: "Eski Çamaşır Makinesi Nereye Atılır?",
    excerpt:
      "Eski çamaşır makinesinin AEEE kapsamında nasıl ve nereye teslim edilmesi gerektiğini, dikkat edilmesi gereken noktaları anlatıyoruz.",
    date: "15 Tem 2026",
    category: "Rehber",
    image: "/images/blog/eskicamasirmakinasi.png",
    sections: [
      {
        heading: "Çamaşır makinesi neden özel atık sınıfındadır?",
        body:
          "Çamaşır makinesinin motoru, devre kartı ve metal tamburu Atık Elektrikli ve Elektronik Eşya (AEEE) kapsamına girer. Normal çöple atılması hem yasal olarak sorunlu hem de geri kazanılabilir malzemelerin kaybına yol açar.",
      },
      {
        heading: "Su ve deterjan kalıntısı taşıma sırasında risk yaratır",
        body:
          "Tahliye edilmeden önce makinenin su tahliye hortumundan kalan suyun boşaltılması, hem taşıma sırasında sızıntıyı önler hem de aracın ve diğer eşyaların zarar görmesini engeller.",
      },
      {
        heading: "Yeni cihaz alımında 1'e 1 teslim hakkı",
        body:
          "Yeni bir çamaşır makinesi satın aldığınızda satıcı eski cihazınızı ücretsiz geri almakla yükümlüdür; ancak cihazı kattan indirip teslim noktasına ulaştırmak büyük ölçüde sizin sorumluluğunuzdadır.",
      },
      {
        heading: "Ağırlık ve taşıma zorluğu",
        body:
          "Çamaşır makineleri görece küçük görünse de oldukça ağırdır; merdivenli veya asansörsüz binalarda tek başına taşınması hem yaralanma hem de eşyaya hasar riski taşır.",
      },
      {
        heading: "Fazlalıkat ile çamaşır makinesi tahliyesi",
        body:
          "Eski çamaşır makinenizi mutfak veya banyodan güvenli şekilde alıp lisanslı AEEE geri dönüşüm noktalarına yönlendiriyoruz; gerekirse aynı randevuda diğer beyaz eşyalarınızı da birlikte topluyoruz.",
      },
    ],
  },
  {
    slug: "bodrum-depo-temizligi-istanbul",
    title: "Bodrum ve Depo Temizliği İstanbul: Adım Adım Rehber",
    excerpt:
      "Yıllarca birikmiş bodrum ve depo eşyalarından kurtulmak için izlenecek pratik adımları ve dikkat edilmesi gereken noktaları anlatıyoruz.",
    date: "17 Tem 2026",
    category: "Rehber",
    image: "/images/blog/bodrum.png",
    sections: [
      {
        heading: "Bodrum ve depolar neden zamanla doluşur?",
        body:
          "Mevsimlik eşyalar, kullanılmayan mobilyalar ve 'belki bir gün işe yarar' diye saklanan kutular yıllar içinde bodrum ve depoları doldurur. Bu birikim hem alanı kullanılamaz hale getirir hem de nem/rutubet nedeniyle hijyen sorunu yaratır.",
      },
      {
        heading: "Ayıklama: sakla, bağışla, at",
        body:
          "Temizliğe başlamadan önce eşyaları üç gruba ayırmak işi büyük ölçüde kolaylaştırır. Uzun süredir açılmamış kutular genellikle 'atılacak' veya 'bağışlanacak' grubuna girer.",
      },
      {
        heading: "Ağır ve hacimli eşyaların taşınması",
        body:
          "Eski mobilya, inşaat malzemesi artığı veya ağır metal parçaların depo merdivenlerinden çıkarılması fiziksel olarak zorlayıcıdır ve doğru ekipman olmadan hem eşyaya hem kişiye zarar verebilir.",
      },
      {
        heading: "Nem ve küf kaynaklı atıklara dikkat",
        body:
          "Uzun süre rutubetli ortamda kalmış kumaş, karton ve ahşap eşyalar küflenmiş olabilir; bu tür atıkların ayrı poşetlenerek taşınması hem sağlık hem de diğer eşyaların kirlenmemesi açısından önemlidir.",
      },
      {
        heading: "Fazlalıkat ile bodrum ve depo boşaltma",
        body:
          "Ekibimiz bodrum veya deponuzdaki tüm eşyaları tek seferde alır, geri dönüştürülebilir ve bağışlanabilir parçaları ayrıştırır, alanınızı baştan kullanılabilir hale getirir.",
      },
    ],
  },
  {
    slug: "cati-kati-temizligi-istanbul",
    title: "Çatı Katı Temizliği İstanbul: Nelere Dikkat Edilmeli?",
    excerpt:
      "Çatı katında biriken eski eşya ve molozların güvenli şekilde nasıl temizleneceğini, sürecin nasıl işlediğini anlatıyoruz.",
    date: "19 Tem 2026",
    category: "Rehber",
    image: "/images/blog/catikati.jpeg",
    sections: [
      {
        heading: "Çatı katları neden farklı bir temizlik gerektirir?",
        body:
          "Çatı katları genellikle dar merdiven, eğimli tavan ve sınırlı erişim noktalarına sahiptir; bu da büyük eşyaların çıkarılmasını standart bir kattan çok daha zorlu hale getirir.",
      },
      {
        heading: "Toz, izolasyon malzemesi ve güvenlik",
        body:
          "Yıllarca kullanılmamış çatı katlarında yoğun toz birikimi ve bazen eski izolasyon malzemeleri bulunur; bu ortamda çalışırken maske ve koruyucu ekipman kullanılması sağlık açısından önemlidir.",
      },
      {
        heading: "Yapısal kısıtlar ve taşıma yöntemi",
        body:
          "Eğimli tavan ve düşük yükseklik nedeniyle büyük eşyaların parçalara ayrılması veya farklı bir açıyla manevra edilmesi gerekebilir; bu noktada deneyimli bir ekip zaman kaybını önler.",
      },
      {
        heading: "Çatı katını yeniden kullanıma açmak",
        body:
          "Temizlik sonrası çatı katı; depo, çalışma odası veya misafir odası gibi yeni bir amaçla kullanıma açılabilir. Bunun ilk adımı alanın tamamen boşaltılıp temizlenmesidir.",
      },
      {
        heading: "Fazlalıkat ile çatı katı tahliyesi",
        body:
          "Dar ve erişimi kısıtlı çatı katlarında bile deneyimli ekibimiz eşyaları güvenli şekilde indirir, alanı süpürüp eşyadan arındırılmış olarak teslim eder.",
      },
    ],
  },
  {
    slug: "evsel-kati-atik-attirma-istanbul",
    title: "Evsel Katı Atık Attırma: Hangi Atıklar Bu Kapsama Girer?",
    excerpt:
      "Evsel katı atık kapsamına giren eşyaları ve büyükşehir yönetmeliğine uygun şekilde nasıl tahliye edileceğini anlatıyoruz.",
    date: "21 Tem 2026",
    category: "Rehber",
    image: "/images/blog/evselatik.png",
    sections: [
      {
        heading: "Evsel katı atık nedir, neyi kapsar?",
        body:
          "Evsel katı atık; günlük çöpün yanı sıra mobilya, beyaz eşya, halı ve diğer hacimli ev eşyalarını da kapsayan geniş bir tanımdır. Standart çöp konteynerine sığmayan bu atıklar için ayrı bir toplama süreci işletilir.",
      },
      {
        heading: "Standart çöp toplama ile farkı",
        body:
          "Günlük evsel çöp her gün düzenli olarak toplanırken, hacimli evsel katı atıklar (koltuk, dolap, beyaz eşya) randevu veya özel bir program ile toplanır; bu da süreci normal çöpten ayırır.",
      },
      {
        heading: "Büyük temizlik veya tadilat sonrası atık yoğunluğu",
        body:
          "Genel temizlik, tadilat veya taşınma dönemlerinde evden çıkan atık miktarı günlük seviyenin çok üzerine çıkar; bu durumda tek seferlik toplu bir tahliye planlamak en pratik çözümdür.",
      },
      {
        heading: "Doğru ayrıştırmanın önemi",
        body:
          "Geri dönüştürülebilir malzemelerin (metal, cam, karton) evsel katı atıktan ayrılması, hem çevresel etkiyi azaltır hem de bertaraf sürecini hızlandırır.",
      },
      {
        heading: "Fazlalıkat ile evsel katı atık tahliyesi",
        body:
          "Evinizdeki hacimli evsel katı atıkları tek bir randevuda topluyor, geri dönüştürülebilir kısımları ayrıştırıp kalanını yönetmeliğe uygun şekilde bertaraf ediyoruz.",
      },
    ],
  },
  {
    slug: "komple-evi-nasil-bosaltirim-2026",
    title: "Komple Evi Nasıl Boşaltırım? 2026 Rehberi",
    excerpt:
      "Miras, satış veya kiralama öncesi bir evi baştan sona boşaltmak için izlenecek adımları ve dikkat edilmesi gereken noktaları derledik.",
    date: "23 Tem 2026",
    category: "Rehber",
    image: "/images/blog/kompleevbosatlmarehberi.png",
    sections: [
      {
        heading: "Komple ev boşaltma ne zaman gerekir?",
        body:
          "Miras kalan bir ev, uzun süreli kiracı çıkışı sonrası daire veya satışa hazırlanan bir mülk gibi durumlarda evin içindeki tüm eşyaların tek seferde boşaltılması gerekir.",
      },
      {
        heading: "Önce bir envanter çıkarın",
        body:
          "Boşaltmaya başlamadan önce odaları gezip değerli, duygusal anlamı olan veya saklanması gereken eşyaları ayırmak, geri kalan her şeyin doğrudan tahliye edilmesini kolaylaştırır.",
      },
      {
        heading: "Oda oda mı, tek seferde mi?",
        body:
          "Küçük dairelerde tüm evi tek seferde boşaltmak daha hızlıdır; büyük ve eşya yoğunluğu fazla evlerde ise oda oda ilerlemek karışıklığı azaltır ve hiçbir eşyanın gözden kaçmamasını sağlar.",
      },
      {
        heading: "Süre ve maliyeti etkileyen faktörler",
        body:
          "Evin metrekaresi, kat/asansör durumu ve eşya yoğunluğu hem süreyi hem de maliyeti doğrudan etkiler; net bir teklif almak için keşif öncesi fotoğraf paylaşmak faydalıdır.",
      },
      {
        heading: "Fazlalıkat ile komple ev boşaltma",
        body:
          "Tek bir randevuda eviniz baştan sona boşaltılır; geri dönüştürülebilir ve bağışlanabilir eşyalar ayrıştırılır, ev satışa veya yeni kiracıya hazır şekilde teslim edilir.",
      },
    ],
  },
  {
    slug: "mobilya-atma-hizmeti-nedir",
    title: "Mobilya Atma Hizmeti Nedir? Nasıl Çalışır?",
    excerpt:
      "Koltuk, dolap ve yatak gibi büyük mobilyaları evden çıkarma sürecinin nasıl işlediğini ve nelere dikkat edilmesi gerektiğini anlatıyoruz.",
    date: "25 Tem 2026",
    category: "Rehber",
    image: "/images/blog/mobilyatmahizmeti.png",
    sections: [
      {
        heading: "Mobilya atma hizmeti tam olarak neyi kapsar?",
        body:
          "Bu hizmet; koltuk, dolap, yatak, masa-sandalye gibi büyük hacimli mobilyaların bulunduğu kattan alınıp uygun şekilde bertaraf veya geri dönüşüm sürecine yönlendirilmesini kapsar.",
      },
      {
        heading: "Sökme gerektiren mobilyalar",
        body:
          "Gardırop, mutfak dolabı gibi büyük mobilyalar genellikle dar koridorlardan tek parça geçmediği için önce sökülüp sonra taşınması gerekir; bu adım deneyimli bir ekip olmadan zaman alıcı ve riskli olabilir.",
      },
      {
        heading: "Tek parça mı, toplu mu?",
        body:
          "Tek bir koltuk için randevu almak mümkün olduğu gibi, ev yenileme sonrası birden fazla mobilyanın aynı anda tahliyesi de tek bir ziyarette gerçekleştirilebilir; toplu tahliye genellikle daha avantajlıdır.",
      },
      {
        heading: "Hangi mobilyalar bağışa, hangileri geri dönüşüme gider?",
        body:
          "Hâlâ kullanılabilir durumdaki mobilyalar ihtiyaç sahiplerine yönlendirilebilirken, kırık veya aşırı eskimiş parçalar ahşap/metal geri dönüşüm tesislerinde değerlendirilir.",
      },
      {
        heading: "Fazlalıkat ile mobilya atma süreci",
        body:
          "WhatsApp'tan fotoğraf gönderip fiyat aldıktan sonra, ekibimiz mobilyanızı bulunduğu kattan alır, gerekirse söker, durumuna göre bağış veya geri dönüşüme yönlendirir.",
      },
    ],
  },
  {
    slug: "evden-cop-attirma-hizmeti-nedir",
    title: "Evden Çöp Attırma Hizmeti Nedir?",
    excerpt:
      "Evden çöp attırma hizmetinin standart belediye toplama hizmetinden farkını ve hangi durumlarda tercih edilmesi gerektiğini anlatıyoruz.",
    date: "27 Tem 2026",
    category: "Rehber",
    image: "/images/blog/evdenzopatim.png",
    sections: [
      {
        heading: "Standart çöp toplama yetersiz kaldığında",
        body:
          "Günlük belediye çöp toplama hizmeti, küçük hacimli ve düzenli çöpler için tasarlanmıştır. Genel temizlik, tadilat sonrası kalıntı veya büyük miktarda eşya birikimi gibi durumlarda bu hizmet yetersiz kalır.",
      },
      {
        heading: "Evden çöp attırma hizmeti ne sağlar?",
        body:
          "Bu hizmet, evdeki büyük miktarlı veya hacimli atığın kattan alınıp uygun bertaraf noktasına taşınmasını kapsar; randevu genellikle aynı gün veya ertesi gün için ayarlanabilir.",
      },
      {
        heading: "Hangi tür atıklar bu kapsama girer?",
        body:
          "Eski mobilya, hacimli ambalaj atığı, genel temizlik sonrası çıkan karışık atıklar ve küçük miktarlı tadilat kalıntıları bu hizmetin tipik kapsamındadır.",
      },
      {
        heading: "Taşıma sırasında ayrıştırma yapılır mı?",
        body:
          "Profesyonel bir ekip, taşıma esnasında geri dönüştürülebilir malzemeleri (karton, metal, cam) ayırarak bertaraf edilecek atık hacmini azaltır ve çevresel etkiyi düşürür.",
      },
      {
        heading: "Fazlalıkat ile evden çöp attırma",
        body:
          "Evinizdeki hacimli veya düzensiz birikmiş atıkları tek randevuda topluyor, geri dönüştürülebilir kısımları ayrıştırıp kalanını yönetmeliğe uygun şekilde bertaraf ediyoruz.",
      },
    ],
  },
  {
    slug: "eski-ev-esyalari-nereye-atilir",
    title: "Eski Ev Eşyaları Nereye Atılır? Kapsamlı Rehber",
    excerpt:
      "Koltuktan beyaz eşyaya, kitaptan halıya kadar farklı türde ev eşyalarının doğru bertaraf yollarını tek bir rehberde topladık.",
    date: "29 Tem 2026",
    category: "Rehber",
    image: "/images/blog/eskiesyaattirmak.png",
    sections: [
      {
        heading: "Her eşya türü için farklı bir yol vardır",
        body:
          "Mobilya, beyaz eşya, elektronik, tekstil ve kâğıt atıkların her biri farklı bir bertaraf veya geri dönüşüm akışına sahiptir; bu yüzden 'eski eşya' tek bir kategori gibi düşünülmemelidir.",
      },
      {
        heading: "Hâlâ kullanılabilir eşyalar için bağış",
        body:
          "Sağlam kıyafet, kitap, küçük ev gereci ve mobilyalar yerel vakıf ve belediyelerin sosyal yardım birimlerine ulaştırılabilir; bu hem çevreci hem de toplumsal fayda sağlar.",
      },
      {
        heading: "Elektronik ve beyaz eşya için AEEE noktaları",
        body:
          "Televizyon, buzdolabı, çamaşır makinesi gibi cihazlar Atık Elektrikli ve Elektronik Eşya kapsamında özel toplama noktalarına veya yetkili servislere yönlendirilmelidir.",
      },
      {
        heading: "Tek seferde karışık eşya tahliyesi",
        body:
          "Genel bir ev temizliğinde mobilyadan elektroniğe, tekstilden kâğıda kadar birçok farklı eşya türüyle aynı anda karşılaşılır; bunları tek tek ayrı ayrı yönlendirmek yerine profesyonel bir ekiple tek seferde tahliye ettirmek çok daha pratiktir.",
      },
      {
        heading: "Fazlalıkat ile karışık ev eşyası tahliyesi",
        body:
          "Evinizdeki her türden eski eşyayı tek bir randevuda topluyor, türüne göre bağış, geri dönüşüm veya lisanslı bertaraf noktalarına yönlendiriyoruz.",
      },
    ],
  },
  {
    slug: "atik-esya-toplama-hizmeti-istanbul",
    title: "İstanbul'da Atık Eşya Toplama Hizmeti Nasıl İşler?",
    excerpt:
      "İstanbul genelinde atık eşya toplama sürecinin nasıl planlandığını, randevu ve taşıma adımlarını anlatıyoruz.",
    date: "31 Tem 2026",
    category: "Rehber",
    image: "/images/blog/istanbuldaatikesyatoplamanasılisler.png",
    sections: [
      {
        heading: "Atık eşya toplama hizmeti kimler için uygundur?",
        body:
          "Taşınma, tadilat, miras devri veya genel ev/ofis temizliği yapan herkes için atık eşya toplama hizmeti, eşyaları tek tek elden çıkarma zahmetini ortadan kaldırır.",
      },
      {
        heading: "Talep ve fiyat süreci",
        body:
          "Süreç genellikle eşyaların fotoğraf veya video ile paylaşılması, ön fiyat aralığının belirlenmesi ve ardından randevu gününün netleştirilmesiyle ilerler.",
      },
      {
        heading: "İstanbul'un farklı bölgelerinde erişim",
        body:
          "Avrupa ve Anadolu yakasındaki ilçelerin trafik ve ulaşım koşulları farklılık gösterdiğinden, randevu saatinin bölgeye göre planlanması süreci hızlandırır.",
      },
      {
        heading: "Taşıma sonrası atığın yönlendirilmesi",
        body:
          "Toplanan eşyalar; geri dönüştürülebilir malzeme, bağışlanabilir eşya ve lisanslı bertaraf gerektiren atık olmak üzere üç ana gruba ayrılarak ilgili noktalara yönlendirilir.",
      },
      {
        heading: "Fazlalıkat ile İstanbul genelinde atık eşya toplama",
        body:
          "İstanbul'un birçok ilçesinde aynı gün veya ertesi gün randevu ile atık eşya toplama hizmeti sunuyor, eşyalarınızı şeffaf bir süreçle bertaraf veya geri dönüşüme yönlendiriyoruz.",
      },
    ],
  },
  {
    slug: "esya-atma-ucreti-2026",
    title: "Eşya Atma Ücreti 2026: Fiyatı Neler Belirler?",
    excerpt:
      "Eşya atma ücretinin hangi kriterlere göre değiştiğini ve 2026 için gerçekçi bir fiyat beklentisi oluşturmak için bilmeniz gerekenleri anlatıyoruz.",
    date: "02 Ağu 2026",
    category: "Fiyatlandırma",
    image: "https://images.unsplash.com/photo-1663625318264-695d2d04f11a?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        heading: "Eşya türü ve hacmi",
        body:
          "Tek bir koltuk ile birden fazla oda dolusu eşya arasında işçilik, araç ve zaman açısından büyük fark vardır; fiyat genellikle eşyanın türüne ve toplam hacmine göre belirlenir.",
      },
      {
        heading: "Taşıma mesafesi ve kat durumu",
        body:
          "Eşyanın bulunduğu kat, asansör varlığı ve binadan araca kadar olan mesafe, gereken işçilik süresini doğrudan etkileyen önemli bir faktördür.",
      },
      {
        heading: "Bertaraf türüne göre değişen maliyet",
        body:
          "Geri dönüştürülebilir veya bağışlanabilir eşyalarda maliyet genellikle daha düşük olurken, özel bertaraf gerektiren atıklar (örneğin büyük hacimli inşaat kalıntısı) fiyatı artırabilir.",
      },
      {
        heading: "Randevu zamanlamasının etkisi",
        body:
          "Aynı gün talep edilen acil işler, günler öncesinden planlanan randevulara kıyasla genellikle biraz daha yüksek fiyatlandırılır; bu fark ekip ve araç planlamasının yeniden düzenlenmesinden kaynaklanır.",
      },
      {
        heading: "Fazlalıkat'tan şeffaf fiyat teklifi",
        body:
          "WhatsApp üzerinden gönderdiğiniz fotoğraf veya video ile dakikalar içinde bir fiyat aralığı veriyor, keşif sonrası net fiyatı önceden açıklıyoruz; sürpriz ek ücret uygulamıyoruz.",
      },
    ],
  },
  {
    slug: "cop-atim-hizmeti-istanbul",
    title: "Çöp Atım Hizmeti İstanbul: Nasıl Çalışır?",
    excerpt:
      "İstanbul'da profesyonel çöp atım hizmetinin işleyişini, belediye hizmetinden farkını ve süreç adımlarını anlatıyoruz.",
    date: "04 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/evdenzopatim.png",
    sections: [
      {
        heading: "Belediye hizmeti ile profesyonel hizmet arasındaki fark",
        body:
          "Belediye çöp atım hattı genellikle randevu sırası gerektirir ve eşyayı bina önüne kadar taşımak size kalır; profesyonel hizmet ise eşyayı bulunduğu kattan alıp taşımayı da kapsar.",
      },
      {
        heading: "Hangi durumlarda profesyonel hizmet tercih edilir?",
        body:
          "Asansörsüz binalar, büyük hacimli eşyalar veya zaman kısıtı olan durumlarda (taşınma, kiracı çıkışı, tadilat teslimi) profesyonel çöp atım hizmeti çok daha hızlı bir çözüm sunar.",
      },
      {
        heading: "Süreç nasıl işler?",
        body:
          "Talep WhatsApp üzerinden iletilir, fotoğraf veya video ile ön fiyat verilir, uygun randevu günü ekip gelip atığı alır ve aynı gün içinde bertaraf veya geri dönüşüm sürecine yönlendirir.",
      },
      {
        heading: "İstanbul'un farklı bölgelerinde hizmet",
        body:
          "İstanbul'un Avrupa ve Anadolu yakasındaki ilçelerin ulaşım koşulları farklılık gösterdiğinden, randevu saatinin bölgeye göre planlanması teslim süresini kısaltır.",
      },
      {
        heading: "Fazlalıkat ile çöp atım hizmeti",
        body:
          "İstanbul genelinde aynı gün veya ertesi gün randevu ile çöp atım hizmeti sunuyor, atığınızı yönetmeliğe uygun şekilde bertaraf veya geri dönüşüme yönlendiriyoruz.",
      },
    ],
  },
  {
    slug: "ofis-esyasi-atma-hizmeti-istanbul",
    title: "Ofis Eşyası Atma Hizmeti İstanbul",
    excerpt:
      "Kullanılmayan ofis mobilyası, elektronik ve evrak gibi eşyaların İstanbul'da güvenli şekilde nasıl bertaraf edileceğini anlatıyoruz.",
    date: "06 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/ofisyapilacaklarlistesi.png",
    sections: [
      {
        heading: "Ofislerde hangi eşyalar atılmaya hazır birikir?",
        body:
          "Kullanım dışı masa, sandalye, dolap, bozuk elektronik cihazlar ve eski evraklar zamanla ofis alanını doldurur ve kullanılabilir alanı kısıtlar.",
      },
      {
        heading: "Mesai saatleri dışında çalışma ihtiyacı",
        body:
          "İş sürekliliğini bozmamak için ofis eşyası atma işlemleri genellikle hafta sonu veya mesai dışı saatlerde planlanır; bu sayede çalışanların günlük düzeni etkilenmez.",
      },
      {
        heading: "Elektronik ve evrak için ayrı süreç",
        body:
          "Bozuk bilgisayar, yazıcı gibi elektronik cihazlar AEEE kapsamında değerlendirilirken, hassas evrakların KVKK uyumlu şekilde imha edilmesi ayrı bir süreç gerektirir.",
      },
      {
        heading: "Toplu tahliyenin avantajı",
        body:
          "Ofis yenileme veya taşınma sonrası geride kalan tüm fazlalıkları tek bir randevuda tahliye ettirmek, parça parça çözümlere kıyasla hem daha hızlı hem daha ekonomiktir.",
      },
      {
        heading: "Fazlalıkat ile ofis eşyası atma",
        body:
          "İstanbul'daki ofisinizdeki kullanılmayan mobilya ve elektronik eşyaları sigortalı ekibimizle hızlıca tahliye ediyor, ofisinizi yeni düzene hazır teslim ediyoruz.",
      },
    ],
  },
  {
    slug: "hurda-mobilya-alanlar-istanbul",
    title: "Hurda Mobilya Alanlar İstanbul: Nelere Dikkat Edilmeli?",
    excerpt:
      "İstanbul'da hurda mobilya alan kişi ve firmalarla çalışırken dikkat edilmesi gereken noktaları ve profesyonel alternatifi anlatıyoruz.",
    date: "08 Ağu 2026",
    category: "Karşılaştırma",
    image: "/images/blog/mobilyatmahizmeti.png",
    sections: [
      {
        heading: "Hurda mobilya alanlar kimlerdir?",
        body:
          "Genellikle mahalle hurdacıları veya küçük ikinci el toplayıcıları, satılabilir metal veya ahşap değeri olan mobilyaları ücretsiz ya da küçük bir bedelle almayı tercih eder.",
      },
      {
        heading: "Hangi mobilyalar tercih edilir, hangileri reddedilir?",
        body:
          "Metal iskeletli veya masif ahşap mobilyalar hurdacılar için daha cazip olabilirken, yıpranmış kumaş koltuk veya parçalanmış dolaplar genellikle reddedilir.",
      },
      {
        heading: "Randevu güvenilirliği sorunu",
        body:
          "Hurdacılarla yapılan sözlü randevular net bir zaman garantisi taşımaz; gelip gelmeyecekleri belirsizdir ve herhangi bir sigorta veya sorumluluk güvencesi sunmazlar.",
      },
      {
        heading: "Profesyonel hizmetle karşılaştırma",
        body:
          "Profesyonel bir tahliye firması mobilyanın değerli olup olmadığına bakmadan tüm eşyaları kabul eder, net randevu saati verir ve atığın nereye gittiğini şeffaf şekilde bildirir.",
      },
      {
        heading: "Fazlalıkat farkı",
        body:
          "Hangi durumda olursa olsun mobilyalarınızı aynı randevuda, sigortalı ve şeffaf şekilde tahliye ediyor, geri dönüştürülebilir veya bağışlanabilir parçaları doğru noktalara yönlendiriyoruz.",
      },
    ],
  },
  {
    slug: "besiktas-eski-esya-toplama-hizmeti",
    title: "Beşiktaş Eski Eşya Toplama Hizmeti",
    excerpt:
      "Beşiktaş'ın dar sokakları ve sahil şeridindeki eski binalarda eski eşya tahliyesinin nasıl yapıldığını anlatıyoruz.",
    date: "10 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/besiktaseskiesya.png",
    sections: [
      {
        heading: "Beşiktaş'ta eşya tahliyesini zorlaştıran ne?",
        body:
          "Boğaz hattındaki eski apartmanlar ve sahil şeridine yakın dar sokaklar, büyük bir kamyonun bina önüne kadar yanaşmasını zaman zaman zorlaştırır. Bu yüzden taşıma planı yapılırken sokak genişliği ve park imkânı önceden değerlendirilmelidir.",
      },
      {
        heading: "Eski Boğaz konaklarında dikkat edilmesi gerekenler",
        body:
          "Özellikle sahile yakın eski yapılarda dar merdivenler ve düşük tavanlı girişler, büyük mobilyaların sökülerek taşınmasını gerektirebilir; bu binalarda deneyimli bir ekip çalışmak hasar riskini azaltır.",
      },
      {
        heading: "Yoğun nüfuslu sitelerde randevu planlaması",
        body:
          "Levent ve Etiler sınırındaki yüksek katlı sitelerde ise sorun genellikle asansör kullanım saatleri ve apartman yönetiminden alınması gereken izindir; randevu öncesi bu detayların netleştirilmesi süreci hızlandırır.",
      },
      {
        heading: "Vapur iskelesine yakın bölgelerde ulaşım avantajı",
        body:
          "İskele çevresindeki mahallelerde araç trafiği gün içinde değişkenlik gösterdiğinden, sabah erken saatler genellikle hem taşıma hem de park açısından en uygun zaman dilimidir.",
      },
      {
        heading: "Fazlalıkat ile Beşiktaş'ta eşya tahliyesi",
        body:
          "Beşiktaş'ın dar sokaklarına ve eski bina yapısına uygun ekipmanla çalışıyor, koltuk, dolap, beyaz eşya ve diğer eski eşyalarınızı aynı gün randevu ile bulunduğu kattan alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Beşiktaş bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Beşiktaş içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Beşiktaş genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "bakirkoy-hurda-mobilya-alanlar",
    title: "Bakırköy Hurda Mobilya Alanlar ve Profesyonel Alternatif",
    excerpt:
      "Bakırköy'deki eski apartmanlarda hurda mobilya tahliyesinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "12 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/bakirköykamyon.jpg",
    sections: [
      {
        heading: "Bakırköy'ün eski yapı stoku",
        body:
          "İstanbul'un en köklü ilçelerinden biri olan Bakırköy'de çok sayıda eski apartman bulunur; bu binalarda dar merdivenler ve düşük asansör kapasitesi büyük mobilya taşımalarını zorlaştırır.",
      },
      {
        heading: "Özgürlük Meydanı çevresinde yoğun talep",
        body:
          "Meydan çevresindeki ticari ve konut karışık binalarda hem ofis hem ev eşyası tahliyesi talebi yoğundur; bu bölgede park alanı kısıtlı olduğundan randevu saatini önceden netleştirmek önemlidir.",
      },
      {
        heading: "Sahil şeridine yakın sitelerde asansör koordinasyonu",
        body:
          "Sahile yakın yeni sitelerde bina yönetimiyle asansör kullanım saati için önceden koordinasyon kurmak, taşıma sürecini sorunsuz hale getirir.",
      },
      {
        heading: "Hurdacı yerine profesyonel hizmetin avantajı",
        body:
          "Bölgedeki hurdacılar genellikle sadece metal değeri olan eşyaları alır; koltuk, dolap gibi mobilyaları profesyonel bir ekip her durumda kabul eder ve net randevu saati verir.",
      },
      {
        heading: "Fazlalıkat ile Bakırköy'de hurda mobilya tahliyesi",
        body:
          "Bakırköy'deki eski apartmanlardan ve sahil bölgesindeki sitelerden mobilya, beyaz eşya ve diğer eski eşyaları aynı gün randevu ile alıp doğru bertaraf noktalarına yönlendiriyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Bakırköy bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Bakırköy içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Bakırköy genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "esenler-cop-atim-hizmeti",
    title: "Esenler Çöp Atım Hizmeti",
    excerpt:
      "Esenler'in yoğun toplu konut dokusunda çöp ve eski eşya atımının nasıl planlanması gerektiğini anlatıyoruz.",
    date: "14 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/esenlercopatim.png",
    sections: [
      {
        heading: "Esenler'in yoğun toplu konut yapısı",
        body:
          "Esenler, çok katlı toplu konut ve TOKİ sitelerinin yoğun olduğu bir ilçedir; bu siteler genellikle ortak asansör ve sıkı bina yönetimi kurallarına sahiptir, bu da taşıma için önceden izin almayı gerektirir.",
      },
      {
        heading: "Otogar çevresinde ticari atık yoğunluğu",
        body:
          "Otogar bölgesine yakın işyerlerinde hem ticari hem de evsel atık talebi bir aradadır; bu bölgede çalışırken araç trafiğinin yoğun olduğu saatlerden kaçınmak işi hızlandırır.",
      },
      {
        heading: "Eski mahallelerde dar sokak erişimi",
        body:
          "İlçenin daha eski yerleşim bölgelerinde sokaklar dar olduğundan, büyük araçların yanaşamadığı noktalarda eşyaların kısa mesafede el ile taşınması gerekebilir.",
      },
      {
        heading: "Yoğun nüfus, yoğun talep",
        body:
          "Esenler'in yüksek nüfus yoğunluğu, özellikle hafta sonları randevu taleplerinin artmasına yol açar; bu nedenle hafta içi planlama genellikle daha hızlı sonuç verir.",
      },
      {
        heading: "Fazlalıkat ile Esenler'de çöp atım hizmeti",
        body:
          "Esenler'deki toplu konut sitelerinden ve dar sokaklı eski mahallelerden eski eşya ve çöp atımını aynı gün veya ertesi gün randevu ile gerçekleştiriyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Esenler bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Esenler içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Esenler genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "sultangazi-hurda-mobilya-alanlar",
    title: "Sultangazi Hurda Mobilya Alanlar",
    excerpt:
      "Sultangazi'de hızla değişen kentsel dokuda hurda mobilya tahliyesinin nasıl işlediğini anlatıyoruz.",
    date: "16 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/sultangazi.png",
    sections: [
      {
        heading: "Hızla kentleşen bir ilçe",
        body:
          "Sultangazi'de son yıllarda yeni siteler ile eski, dar sokaklı mahalleler yan yana bulunur; bu karışık doku, her taşıma için farklı bir erişim planı gerektirir.",
      },
      {
        heading: "Yeni sitelerde bina yönetimi kuralları",
        body:
          "Yeni yapılan sitelerde eşya taşıma genellikle belirli saatlerle sınırlandırılmıştır; randevu öncesi bina yönetiminden taşıma izni almak sürecin sorunsuz işlemesini sağlar.",
      },
      {
        heading: "Eski mahallelerde merdiven ve dar geçit sorunu",
        body:
          "İlçenin daha eski kesimlerinde asansörsüz binalar ve dar merdivenler yaygındır; büyük mobilyaların bu tip binalardan çıkarılması deneyimli bir ekip gerektirir.",
      },
      {
        heading: "Hurdacı ile profesyonel hizmet farkı",
        body:
          "Mahalle hurdacıları genellikle yalnızca metal değeri olan eşyaları kabul eder; koltuk, yatak ve dolap gibi mobilyalar için profesyonel bir tahliye hizmeti çok daha güvenilir bir çözümdür.",
      },
      {
        heading: "Fazlalıkat ile Sultangazi'de mobilya tahliyesi",
        body:
          "Sultangazi'nin hem yeni siteleri hem de eski mahallelerinde, bina tipine uygun ekipmanla mobilya ve eski eşya tahliyesi yapıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Sultangazi bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Sultangazi içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Sultangazi genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "gungoren-eski-esya-attirma",
    title: "Güngören Eski Eşya Attırma Hizmeti",
    excerpt:
      "Güngören'in dar sokaklı yerleşim dokusunda eski eşya attırma sürecinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "18 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/gungoren.png",
    sections: [
      {
        heading: "Güngören'in yerleşim dokusu",
        body:
          "Küçük sanayi alanlarıyla iç içe geçmiş dar sokaklı mahalleler, Güngören'de eşya tahliyesini planlarken araç erişimini öncelikli bir konu haline getirir.",
      },
      {
        heading: "Eski apartmanlarda asansör eksikliği",
        body:
          "İlçedeki çoğu eski apartmanda asansör bulunmaz; bu durumda büyük mobilyaların merdivenden güvenli şekilde indirilmesi için doğru ekipman ve deneyim gerekir.",
      },
      {
        heading: "Küçük işyerlerinden çıkan ticari atık",
        body:
          "Sanayi alanına yakın küçük işyerlerinde zaman zaman demirbaş değişimi sonrası ortaya çıkan eski mobilya ve ekipmanlar, evsel eşyalarla birlikte değil ayrı bir süreçte değerlendirilmelidir.",
      },
      {
        heading: "Dar sokaklarda taşıma planı",
        body:
          "Büyük aracın yanaşamadığı sokaklarda eşyaların kısa mesafede taşınabilir parçalara ayrılması, hem süreci hızlandırır hem de bina ve eşyaya hasar riskini azaltır.",
      },
      {
        heading: "Fazlalıkat ile Güngören'de eski eşya attırma",
        body:
          "Güngören'in dar sokaklarına ve asansörsüz bina yapısına uygun şekilde çalışıyor, eski eşyalarınızı aynı gün randevu ile bulunduğu kattan alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Güngören bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Güngören içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Güngören genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "sisli-eski-esya-toplama-hizmeti",
    title: "Şişli Eski Eşya Toplama ve Ev Boşaltma Hizmeti",
    excerpt:
      "Şişli'deki rezidans ve eski apartman karışımı yapıda eski eşya toplama ve ev boşaltma sürecini anlatıyoruz.",
    date: "20 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/sisli.png",
    sections: [
      {
        heading: "Eski apartman ve yeni rezidans bir arada",
        body:
          "Şişli'de hem köklü eski apartmanlar hem de güvenlikli rezidanslar bir arada bulunur; her ikisinde de taşıma için farklı kurallar ve erişim koşulları geçerlidir.",
      },
      {
        heading: "Rezidanslarda güvenlik ve randevu prosedürü",
        body:
          "Rezidans tipi binalarda taşıma için genellikle önceden güvenlik kaydı ve yönetimden yazılı izin istenir; bu adımı randevu öncesi tamamlamak günü kayıpsız geçirmenizi sağlar.",
      },
      {
        heading: "İş merkezlerine yakın ofis eşyası talebi",
        body:
          "Şişli'nin yoğun iş merkezi yapısı nedeniyle bölgede ofis taşınması ve ofis eşyası tahliyesi talebi de evsel taleplerle birlikte sık karşılaşılan bir durumdur.",
      },
      {
        heading: "Merkezi konumun getirdiği trafik faktörü",
        body:
          "Şişli'nin merkezi konumu gün içinde yoğun trafiğe yol açtığından, büyük araçla yapılacak taşımalar için sabah erken saatler genellikle daha verimlidir.",
      },
      {
        heading: "Fazlalıkat ile Şişli'de eşya toplama",
        body:
          "Şişli'deki eski apartmanlardan ve güvenlikli rezidanslardan eşya toplama ve ev boşaltma işlemlerini, bina kurallarına uygun şekilde aynı gün randevu ile gerçekleştiriyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Şişli bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Şişli içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Şişli genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "eyupsultan-eski-esya-toplama",
    title: "Eyüpsultan Eski Eşya Toplama ve Ev Boşaltma Hizmeti",
    excerpt:
      "Eyüpsultan'ın tarihi ve yamaç yerleşim dokusunda eski eşya toplama sürecinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "22 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/eyupsultan.png",
    sections: [
      {
        heading: "Yamaç yerleşim ve eğimli sokaklar",
        body:
          "Eyüpsultan'ın birçok mahallesi eğimli arazi üzerine kurulmuştur; bu da büyük eşyaların eğimli ve dar sokaklardan taşınmasını standart bir düzlük bölgeye göre daha zorlu hale getirir.",
      },
      {
        heading: "Tarihi doku içindeki eski binalar",
        body:
          "Tarihi alanlara yakın eski binalarda dar kapı ve merdiven genişlikleri, büyük mobilyaların sökülerek çıkarılmasını gerektirebilir; bu binalarda dikkatli ve deneyimli bir ekip önemlidir.",
      },
      {
        heading: "Yeni gelişen mahallelerde site yönetimi kuralları",
        body:
          "İlçenin daha yeni gelişen bölgelerindeki sitelerde taşıma saatleri ve asansör kullanımı yönetim tarafından sınırlandırılabilir; randevu öncesi bu kuralların öğrenilmesi süreci hızlandırır.",
      },
      {
        heading: "Mevsimsel erişim zorlukları",
        body:
          "Yağışlı havalarda eğimli sokaklarda araç manevrası zorlaşabileceğinden, bu bölgede taşıma günü planlarken hava koşullarını da dikkate almak faydalıdır.",
      },
      {
        heading: "Fazlalıkat ile Eyüpsultan'da eşya toplama",
        body:
          "Eyüpsultan'ın eğimli ve dar sokaklarına uygun ekipmanla çalışıyor, eski eşyalarınızı ve ev boşaltma ihtiyaçlarınızı aynı gün randevu ile karşılıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Eyüpsultan bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Eyüpsultan içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Eyüpsultan genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "gaziosmanpasa-esya-attirma",
    title: "Gaziosmanpaşa Eşya Attırma Hizmeti",
    excerpt:
      "Gaziosmanpaşa'nın yoğun nüfuslu ve çok katlı eski bina dokusunda eşya attırma sürecini anlatıyoruz.",
    date: "24 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/gaziosmanpasa.png",
    sections: [
      {
        heading: "Yoğun nüfuslu ilçenin getirdiği talep yoğunluğu",
        body:
          "Gaziosmanpaşa'nın yüksek nüfus yoğunluğu, özellikle hafta sonlarında eşya attırma taleplerinin artmasına neden olur; hafta içi randevu planlamak genellikle daha hızlı sonuç verir.",
      },
      {
        heading: "Çok katlı eski binalarda taşıma zorluğu",
        body:
          "İlçedeki çok katlı eski binalarda asansör kapasitesinin sınırlı olması, büyük mobilyaların merdivenden indirilmesini gerekli kılabilir; bu durumda doğru ekipman büyük fark yaratır.",
      },
      {
        heading: "Dar sokaklarda araç erişimi",
        body:
          "Bazı mahallelerde sokakların dar olması, büyük taşıma araçlarının bina önüne kadar yanaşmasını zorlaştırabilir; bu noktada kısa mesafe taşıma planı yapmak gerekir.",
      },
      {
        heading: "Aile büyüklüğüne bağlı eşya hacmi",
        body:
          "Bölgedeki geniş aile yapıları, taşınma veya yenileme dönemlerinde tahliye edilecek eşya hacmini artırabilir; bu da toplu bir randevu planlamasını daha verimli hale getirir.",
      },
      {
        heading: "Fazlalıkat ile Gaziosmanpaşa'da eşya attırma",
        body:
          "Gaziosmanpaşa'nın çok katlı eski binalarına ve dar sokaklarına uygun şekilde çalışıyor, eşyalarınızı aynı gün randevu ile bulunduğu kattan alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Gaziosmanpaşa bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Gaziosmanpaşa içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Gaziosmanpaşa genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "kagithane-eski-esya-nereye-atilir",
    title: "Kağıthane'de Eski Eşya Nereye Atılır?",
    excerpt:
      "Kağıthane'nin vadi yerleşimi ve kentsel dönüşüm bölgelerinde eski eşya tahliyesinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "26 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/kagıthane.png",
    sections: [
      {
        heading: "Vadi yerleşiminin getirdiği erişim farkları",
        body:
          "Kağıthane, dere vadisi etrafında şekillenen bir yerleşim dokusuna sahiptir; bu nedenle bazı mahallelerde yol eğimi ve dar sokaklar taşıma planını etkileyen önemli bir faktördür.",
      },
      {
        heading: "Kentsel dönüşüm bölgelerinde tahliye ihtiyacı",
        body:
          "İlçede aktif kentsel dönüşüm projeleri sürdüğünden, yıkım öncesi dairelerin tamamen boşaltılması ihtiyacı sık karşılaşılan bir durumdur; bu işler genellikle belirli bir teslim tarihine bağlıdır.",
      },
      {
        heading: "Yeni TOKİ sitelerinde bina yönetimi süreci",
        body:
          "Yeni yapılan TOKİ sitelerinde taşıma için bina yönetiminden önceden izin alınması ve asansör kullanım saatinin planlanması gerekir.",
      },
      {
        heading: "Eski mahallelerde asansörsüz bina sorunu",
        body:
          "İlçenin daha eski kesimlerinde asansörsüz binalardan büyük eşya çıkarmak, doğru ekipman ve deneyimli bir ekip gerektiren fiziksel bir zorluktur.",
      },
      {
        heading: "Fazlalıkat ile Kağıthane'de eski eşya tahliyesi",
        body:
          "Kentsel dönüşüm öncesi teslim tarihine bağlı işlerde ve eski mahallelerdeki asansörsüz binalarda hızlı ve güvenli tahliye hizmeti sunuyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Kağıthane bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Kağıthane içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Kağıthane genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "bahcelievler-eski-esya-nereye-atilir",
    title: "Bahçelievler'de Eski Eşya Nereye Atılır?",
    excerpt:
      "Bahçelievler'in yoğun apartmanlaşmış dokusunda eski eşya tahliyesinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "28 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/bahcelievler.png",
    sections: [
      {
        heading: "Merkezi konumun getirdiği yoğun apartmanlaşma",
        body:
          "Bahçelievler, İstanbul'un merkezi ilçelerinden biri olarak yoğun apartmanlaşmış bir dokuya sahiptir; bu da dar sokaklarda park ve taşıma erişimini önemli bir planlama konusu yapar.",
      },
      {
        heading: "Otoyol bağlantılarına yakınlığın avantajı",
        body:
          "İlçenin ana otoyol bağlantılarına yakın olması, taşıma araçlarının şehrin diğer bölgelerine veya bertaraf noktalarına ulaşımını kolaylaştırır.",
      },
      {
        heading: "Eski apartmanlarda kat ve asansör durumu",
        body:
          "Bölgedeki eski apartmanların bir kısmında asansör bulunmaz veya kapasitesi büyük mobilyalar için yetersizdir; bu durumda merdivenden taşıma planı önceden netleştirilmelidir.",
      },
      {
        heading: "Yoğun nüfusun getirdiği randevu talebi",
        body:
          "Yüksek nüfus yoğunluğu nedeniyle özellikle hafta sonları talep arttığından, hafta içi randevu almak genellikle daha hızlı sonuç verir.",
      },
      {
        heading: "Fazlalıkat ile Bahçelievler'de eski eşya tahliyesi",
        body:
          "Bahçelievler'deki yoğun apartman dokusuna uygun şekilde çalışıyor, eski eşyalarınızı aynı gün randevu ile bulunduğu kattan alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Bahçelievler bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Bahçelievler içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Bahçelievler genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "fatih-eski-esya-nereye-atilir",
    title: "Fatih'te Eski Eşya Nereye Atılır?",
    excerpt:
      "Tarihi yarımadanın dar ve eğimli sokaklarında eski eşya tahliyesinin nasıl yapıldığını anlatıyoruz.",
    date: "30 Ağu 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/fatih.png",
    sections: [
      {
        heading: "Tarihi yarımadanın özel yapı dokusu",
        body:
          "Fatih, İstanbul'un en eski yapı stokuna sahip ilçelerinden biridir; tarihi doku içindeki binalarda dar kapı genişlikleri ve düşük tavanlar büyük mobilyaların taşınmasını zorlaştırır.",
      },
      {
        heading: "Dar ve eğimli sokaklarda araç erişimi",
        body:
          "Yarımadanın bazı bölgelerinde sokaklar hem dar hem eğimlidir; büyük bir taşıma aracının bina önüne kadar yanaşması her zaman mümkün olmayabilir, bu durumda kısa mesafe taşıma planlanır.",
      },
      {
        heading: "Eski apartmanlarda asansör eksikliği",
        body:
          "Birçok eski apartmanda asansör bulunmadığından, ağır mobilya ve beyaz eşyaların merdivenden güvenli şekilde indirilmesi deneyimli bir ekip ve doğru ekipman gerektirir.",
      },
      {
        heading: "Turistik bölgelerde zamanlama",
        body:
          "Turistik yoğunluğun arttığı saatlerde dar sokaklarda araç manevrası daha da zorlaşır; bu nedenle sabah erken saatlerde planlanan taşımalar genellikle daha hızlı tamamlanır.",
      },
      {
        heading: "Fazlalıkat ile Fatih'te eski eşya tahliyesi",
        body:
          "Tarihi yarımadanın dar ve eğimli sokaklarına uygun ekipmanla çalışıyor, eski eşyalarınızı bina yapısına zarar vermeden aynı gün randevu ile alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Fatih'te bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Fatih'te içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Fatih'te genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "zeytinburnu-eski-esya-nereye-atilir",
    title: "Zeytinburnu'nda Eski Eşya Nereye Atılır?",
    excerpt:
      "Zeytinburnu'nun sahil ve sanayi karışık dokusunda eski eşya tahliyesinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "01 Eyl 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/zeytinburnu.png",
    sections: [
      {
        heading: "Sahil ve sanayi karışık yerleşim",
        body:
          "Zeytinburnu'nda konut alanları sahil şeridi ve küçük sanayi bölgeleriyle iç içe geçmiştir; bu karışık doku, evsel ve ticari eşya tahliyesinin bazen aynı bölgede farklı kurallarla yürütülmesini gerektirir.",
      },
      {
        heading: "Kentsel dönüşümün hızlandırdığı talep",
        body:
          "İlçede kentsel dönüşüm projeleri hızla ilerlediğinden, yıkım öncesi dairelerin belirli bir tarihe kadar tamamen boşaltılması ihtiyacı sık karşılaşılan bir durumdur.",
      },
      {
        heading: "Tekstil ve küçük imalat atölyelerinden çıkan demirbaş",
        body:
          "Bölgedeki küçük tekstil ve imalat atölyelerinde yenileme sonrası ortaya çıkan eski demirbaşlar, evsel eşyalardan ayrı bir süreçte değerlendirilmesi gereken bir kategoridir.",
      },
      {
        heading: "Sahil şeridine yakın sitelerde randevu kuralları",
        body:
          "Sahile yakın yeni sitelerde taşıma saatleri bina yönetimi tarafından sınırlandırılabilir; randevu öncesi bu kuralların öğrenilmesi günü kayıpsız geçirmenizi sağlar.",
      },
      {
        heading: "Fazlalıkat ile Zeytinburnu'nda eski eşya tahliyesi",
        body:
          "Zeytinburnu'nun karışık yerleşim dokusuna uygun şekilde, kentsel dönüşüm öncesi teslim tarihine bağlı işlerde hızlı tahliye hizmeti sunuyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Zeytinburnu'nda bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Zeytinburnu'nda içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Zeytinburnu'nda genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "esenyurt-eski-esya-attirma",
    title: "Esenyurt Eski Eşya Attırma Hizmeti",
    excerpt:
      "Esenyurt'un hızla büyüyen ve yüksek katlı site dokusunda eski eşya attırma sürecini anlatıyoruz.",
    date: "03 Eyl 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/esenyurteskiesya.png",
    sections: [
      {
        heading: "Hızla büyüyen bir ilçenin getirdiği yoğunluk",
        body:
          "Esenyurt, son yıllarda hızla büyüyen ve yüksek katlı sitelerin yoğunlaştığı bir ilçedir; bu siteler genellikle çok sayıda blok ve ortak asansör kullanımına sahiptir.",
      },
      {
        heading: "Yüksek katlı sitelerde asansör koordinasyonu",
        body:
          "Çok bloklu sitelerde eşya taşıma için asansör kullanım saatinin bina yönetimiyle önceden koordine edilmesi, randevu gününde bekleme süresini azaltır.",
      },
      {
        heading: "Yoğun nüfusun getirdiği talep yoğunluğu",
        body:
          "İlçenin hızlı nüfus artışı, özellikle hafta sonları taşınma ve eşya attırma taleplerinin yoğunlaşmasına neden olur; hafta içi randevu genellikle daha hızlı sonuçlanır.",
      },
      {
        heading: "Geniş yollarda araç erişimi avantajı",
        body:
          "Esenyurt'taki yeni yerleşim bölgelerinin geniş yol yapısı, büyük taşıma araçlarının bina önüne kadar kolayca ulaşmasını sağlar; bu da süreci genellikle hızlandırır.",
      },
      {
        heading: "Fazlalıkat ile Esenyurt'ta eski eşya attırma",
        body:
          "Esenyurt'un yüksek katlı sitelerine uygun şekilde çalışıyor, eski eşyalarınızı bina yönetimiyle koordineli olarak aynı gün randevu ile alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Esenyurt bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Esenyurt içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Esenyurt genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "kucukcekmece-eski-esya-attirma",
    title: "Küçükçekmece Eski Eşya Attırma Hizmeti",
    excerpt:
      "Küçükçekmece'nin göl kıyısı ve geniş ilçe dokusunda eski eşya attırma sürecinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "05 Eyl 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/kucukcekmece.png",
    sections: [
      {
        heading: "Geniş ilçe dokusunun getirdiği çeşitlilik",
        body:
          "Küçükçekmece, İstanbul'un en geniş ilçelerinden biri olduğundan hem eski apartmanları hem de yeni siteleri bir arada barındırır; her bölge için farklı bir taşıma yaklaşımı gerekir.",
      },
      {
        heading: "Göl kıyısına yakın bölgelerde erişim",
        body:
          "Göl kıyısına yakın mahallelerde yol yapısı ve park imkânı değişkenlik gösterir; bu bölgelerde randevu saatini trafik yoğunluğuna göre planlamak faydalıdır.",
      },
      {
        heading: "Eski apartmanlarda merdiven ve asansör durumu",
        body:
          "İlçenin daha eski kesimlerinde asansörsüz binalar yaygındır; büyük mobilyaların bu binalardan çıkarılması doğru ekipman ve deneyimli bir ekip gerektirir.",
      },
      {
        heading: "Yeni sitelerde bina yönetimi süreci",
        body:
          "Yeni yapılan sitelerde taşıma için bina yönetiminden önceden izin alınması ve asansör kullanım saatinin netleştirilmesi süreci hızlandırır.",
      },
      {
        heading: "Fazlalıkat ile Küçükçekmece'de eski eşya attırma",
        body:
          "Küçükçekmece'nin geniş ve çeşitli yapı dokusuna uygun şekilde çalışıyor, eski eşyalarınızı aynı gün randevu ile bulunduğu kattan alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Küçükçekmece bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Küçükçekmece içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Küçükçekmece genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "bagcilar-cop-atim-hizmeti",
    title: "Bağcılar Çöp Atım Hizmeti",
    excerpt:
      "Bağcılar'ın yoğun nüfuslu ve sanayiye yakın dokusunda çöp atım ve eski eşya tahliyesinin nasıl işlediğini anlatıyoruz.",
    date: "07 Eyl 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/bagcilar.png",
    sections: [
      {
        heading: "Yoğun nüfuslu bir ilçede talep yoğunluğu",
        body:
          "Bağcılar, İstanbul'un en yoğun nüfuslu ilçelerinden biridir; bu yoğunluk özellikle hafta sonları çöp atım ve eski eşya tahliyesi taleplerinin artmasına neden olur.",
      },
      {
        heading: "Sanayi alanına yakın bölgelerde ticari atık",
        body:
          "Küçük sanayi sitelerine yakın mahallelerde evsel atığın yanında ticari demirbaş tahliyesi de sık talep edilir; bu iki süreç genellikle ayrı planlanmalıdır.",
      },
      {
        heading: "Eski apartmanlarda asansör kapasitesi",
        body:
          "Bölgedeki eski apartmanların asansör kapasitesi büyük mobilyalar için genellikle yetersizdir; bu durumda merdivenden taşıma planı önceden netleştirilmelidir.",
      },
      {
        heading: "Dar sokaklarda park ve erişim",
        body:
          "Yoğun yapılaşma nedeniyle bazı sokaklarda park alanı sınırlıdır; taşıma aracının bina önüne yanaşabileceği en uygun saatin önceden belirlenmesi süreci hızlandırır.",
      },
      {
        heading: "Fazlalıkat ile Bağcılar'da çöp atım hizmeti",
        body:
          "Bağcılar'ın yoğun yapılaşmış dokusuna uygun şekilde çalışıyor, eski eşya ve çöp atımını aynı gün veya ertesi gün randevu ile gerçekleştiriyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Bağcılar bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Bağcılar içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Bağcılar genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "beylikduzu-eski-esya-attirma",
    title: "Beylikdüzü Eski Eşya Attırma Hizmeti",
    excerpt:
      "Beylikdüzü'nün planlı ve geniş yollu site dokusunda eski eşya attırma sürecini anlatıyoruz.",
    date: "09 Eyl 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/beylikduzu.png",
    sections: [
      {
        heading: "Planlı yerleşim, kolay araç erişimi",
        body:
          "Beylikdüzü, geniş yollar ve planlı site yapısıyla diğer birçok ilçeye kıyasla taşıma araçlarının bina önüne kolayca ulaşmasını sağlar; bu da süreci genellikle daha hızlı hale getirir.",
      },
      {
        heading: "Yeni sitelerde yönetim kuralları",
        body:
          "Bölgedeki yeni siteler genellikle düzenli bina yönetimine sahiptir; eşya taşıma için önceden yönetimden izin almak ve asansör kullanım saatini netleştirmek randevu gününü kolaylaştırır.",
      },
      {
        heading: "Geniş daire metrekareleri",
        body:
          "Beylikdüzü'ndeki konutların genellikle geniş metrekarelere sahip olması, taşınma veya yenileme dönemlerinde tahliye edilecek eşya hacmini artırabilir; bu da toplu randevu planlamasını avantajlı kılar.",
      },
      {
        heading: "Site içi ortak depo alanlarının boşaltılması",
        body:
          "Bazı sitelerde daire sahiplerine tahsis edilen ortak depo alanları zamanla dolar; bu alanların boşaltılması genellikle daire içi tahliyeden ayrı bir randevu gerektirir.",
      },
      {
        heading: "Fazlalıkat ile Beylikdüzü'nde eski eşya attırma",
        body:
          "Beylikdüzü'nün planlı site yapısına uygun şekilde çalışıyor, eski eşyalarınızı ve depo alanlarınızı aynı gün randevu ile tahliye ediyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Beylikdüzü bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Beylikdüzü içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Beylikdüzü genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "avcilar-eski-esya-attirma",
    title: "Avcılar Eski Eşya Attırma Hizmeti",
    excerpt:
      "Avcılar'ın sahil ve üniversite öğrenci yoğun dokusunda eski eşya attırma sürecinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "11 Eyl 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/avcılar.png",
    sections: [
      {
        heading: "Üniversite öğrenci yoğunluğunun getirdiği talep",
        body:
          "Avcılar'da üniversite çevresindeki öğrenci yoğun binalarda dönem başı ve sonu eşya değişimi ve tahliye talepleri belirli aylarda yoğunlaşır.",
      },
      {
        heading: "Kalabalık apartmanlarda asansör kullanımı",
        body:
          "Öğrenci yoğun binalarda çok sayıda dairenin aynı asansörü paylaşması, taşıma saatinin önceden planlanmasını ve bina yönetimiyle koordinasyonu önemli kılar.",
      },
      {
        heading: "Sahil şeridine yakın bölgelerde mevsimsel talep",
        body:
          "Sahile yakın mahallelerde yaz aylarında kısa süreli kiralık dairelerin sezon sonu tahliyesi, eski eşya attırma taleplerini artıran bir başka faktördür.",
      },
      {
        heading: "Küçük daireler, sık taşınma",
        body:
          "Öğrenci ve genç çalışanların yoğun olduğu küçük dairelerde taşınma sıklığı diğer bölgelere göre daha yüksektir; bu da hızlı ve esnek randevu seçeneklerine olan ihtiyacı artırır.",
      },
      {
        heading: "Fazlalıkat ile Avcılar'da eski eşya attırma",
        body:
          "Avcılar'ın öğrenci yoğun ve sahil bölgelerine uygun şekilde, dönem başı/sonu yoğunluğunda hızlı randevu ile eski eşya tahliyesi sunuyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Avcılar bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Avcılar içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Avcılar genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "beyoglu-eski-esya-nereye-atilir",
    title: "Beyoğlu'nda Eski Eşya Nereye Atılır?",
    excerpt:
      "Beyoğlu'nun tarihi ve dik yokuşlu sokaklarında eski eşya tahliyesinin nasıl yapıldığını anlatıyoruz.",
    date: "13 Eyl 2026",
    category: "Bölge Rehberi",
    image: "/images/blog/beyoglu.png",
    sections: [
      {
        heading: "Tarihi ve dik yokuşlu sokak dokusu",
        body:
          "Beyoğlu'nun birçok mahallesi dik yokuşlar ve dar sokaklar üzerine kuruludur; bu yapı, büyük taşıma araçlarının bina önüne kadar yanaşmasını zaman zaman zorlaştırır.",
      },
      {
        heading: "Tarihi binalarda dar giriş ve merdivenler",
        body:
          "Eski ve tarihi binalarda dar kapı genişlikleri ve dönemeçli merdivenler, büyük mobilyaların sökülerek çıkarılmasını gerektirebilir; bu binalarda deneyimli bir ekip hasar riskini azaltır.",
      },
      {
        heading: "Turistik yoğunluğun taşımaya etkisi",
        body:
          "Bölgenin turistik yoğunluğu gün içinde değiştiğinden, sabah erken saatler genellikle hem yaya trafiği hem de araç erişimi açısından taşıma için en uygun zaman dilimidir.",
      },
      {
        heading: "Küçük dairelerde eşya yoğunluğu",
        body:
          "Beyoğlu'ndaki dairelerin çoğu küçük metrekarelere sahip olsa da yıllar içinde biriken eşya hacmi, tahliye sırasında beklenenden fazla zaman alabilir.",
      },
      {
        heading: "Fazlalıkat ile Beyoğlu'nda eski eşya tahliyesi",
        body:
          "Beyoğlu'nun dik yokuşlu ve tarihi sokak dokusuna uygun ekipmanla çalışıyor, eski eşyalarınızı bina ve sokağa zarar vermeden aynı gün randevu ile alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Beyoğlu'nda bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Beyoğlu'nda içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Beyoğlu'nda genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "moloz-nedir",
    title: "Moloz Nedir? İnşaat ve Yıkım Atıkları Rehberi",
    excerpt:
      "Moloz tam olarak neyi kapsar, hangi malzemeler bu sınıfa girer ve neden evsel çöpten ayrı değerlendirilir; temel bilgileri derledik.",
    date: "15 Eyl 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Moloz hangi malzemeleri kapsar?",
        body:
          "Moloz; beton, tuğla, harç, seramik, fayans, alçıpan ve benzeri yapı malzemelerinin tadilat, yıkım veya inşaat sürecinde ortaya çıkan kalıntılarını ifade eder. Ahşap, metal ve cam gibi ayrıştırılabilir parçalar da çoğunlukla moloz içinde karışık halde bulunur.",
      },
      {
        heading: "Moloz neden evsel atıktan ayrı bir sınıftır?",
        body:
          "Büyükşehir belediye yönetmeliklerinde inşaat ve yıkım atıkları ayrı bir kategoride tanımlanır; evsel çöp konteynerine atılması veya kaldırıma bırakılması idari para cezası gerektirir. Bu ayrım, hem toplama sisteminin hem de bertaraf sürecinin farklı işlemesinden kaynaklanır.",
      },
      {
        heading: "Hafif moloz ile ağır moloz farkı",
        body:
          "Alçıpan, seramik kırığı gibi hafif tadilat atıkları ile beton ve tuğla parçaları gibi ağır yıkım molozu, taşıma aracı ve işçilik açısından farklı planlama gerektirir; ağır moloz genellikle daha büyük araç ve daha fazla işçi gücü ister.",
      },
      {
        heading: "Moloz nereye gider?",
        body:
          "Toplanan moloz, belediyenin yetkilendirdiği lisanslı döküm sahalarına taşınır. Buradan beton ve tuğla kırıkları öğütülerek dolgu malzemesine, metal aksamlar ise hurda olarak değerlendirilmek üzere ayrıştırılır.",
      },
      {
        heading: "Fazlalıkat ile moloz tahliyesi",
        body:
          "Tadilat veya yıkım sonrası ortaya çıkan molozu bulunduğu kattan alıyor, türüne göre ayrıştırıp lisanslı döküm sahasına taşıyoruz; çuval bazlı küçük işlerden büyük yıkımlara kadar her ölçekte hizmet veriyoruz.",
      },
    ],
  },
  {
    slug: "hafriyat-nedir",
    title: "Hafriyat Nedir? Moloz ile Farkı Ne?",
    excerpt:
      "Hafriyat kavramını, moloz ile arasındaki farkı ve kazı sonrası çıkan toprak/kayaç malzemenin nasıl yönetildiğini anlatıyoruz.",
    date: "17 Eyl 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Hafriyat tanımı",
        body:
          "Hafriyat, temel kazısı, istinat duvarı veya altyapı çalışmaları sırasında topraktan çıkarılan toprak, kil ve kayaç türü malzemeyi ifade eder. İnşaatın başlangıç aşamasında ortaya çıkan bu malzeme, yapı atığı olan molozdan farklı bir kategoridir.",
      },
      {
        heading: "Hafriyat ile moloz arasındaki temel fark",
        body:
          "Moloz yapı malzemesi kalıntısıyken, hafriyat doğal toprak ve kayaçtır. İkisi de lisanslı sahalara taşınması gereken atıklardır, ancak bazı belediyelerde hafriyat için ayrı döküm sahaları ve farklı tarife uygulanabilir.",
      },
      {
        heading: "Hafriyat hacmi nasıl hesaplanır?",
        body:
          "Kazı alanının derinliği ve yüzölçümü çarpılarak yaklaşık hafriyat hacmi (metreküp) hesaplanır; bu hacim, kaç sefer kamyon veya tır gerekeceğini belirleyen temel veridir.",
      },
      {
        heading: "Hafriyat taşımada zamanlama",
        body:
          "Kazı işlemiyle eşzamanlı olarak hafriyatın düzenli aralıklarla taşınması, şantiye sahasında yığılma ve çalışma alanı sıkışıklığını önler; büyük projelerde bu genellikle günlük veya haftalık sefer planlamasıyla yönetilir.",
      },
      {
        heading: "Fazlalıkat ile hafriyat taşıma",
        body:
          "Kazı çalışmalarınızdan çıkan hafriyatı uygun araçlarla düzenli olarak alıyor, lisanslı döküm sahalarına taşıyoruz; şantiye takviminize uygun sefer planlaması yapabiliyoruz.",
      },
    ],
  },
  {
    slug: "cope-moloz-atmak-yasak-mi",
    title: "Çöpe Moloz Atmak Yasak mı? Bilmeniz Gerekenler",
    excerpt:
      "Moloz ve hafriyatın çöp konteynerine veya kaldırıma bırakılmasının yasal durumunu ve doğru bertaraf yöntemini anlatıyoruz.",
    date: "19 Eyl 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Moloz çöpe atılabilir mi?",
        body:
          "Hayır. Moloz ve hafriyat, büyükşehir belediye yönetmeliklerinde evsel katı atıktan ayrı bir sınıfta tanımlanır; çöp konteynerine, kaldırıma veya boş arsaya bırakılması yasaktır.",
      },
      {
        heading: "Neden bu kadar sıkı denetleniyor?",
        body:
          "Kontrolsüz bırakılan moloz hem görüntü kirliliği hem de yağmur suyu drenajını engelleme gibi altyapı sorunlarına yol açar; bu nedenle belediyeler bu konuda düzenli denetim yapar ve idari para cezası uygular.",
      },
      {
        heading: "Cezadan kaçınmanın yolu",
        body:
          "Moloz, ancak yetkili araç ve lisanslı döküm sahası kullanılarak yasal şekilde bertaraf edilebilir. Tadilat veya yıkım öncesi bu süreci planlamak, iş bitiminde aceleyle yanlış bir karar vermenizi önler.",
      },
      {
        heading: "Apartman ve site kurallarına dikkat",
        body:
          "Çoğu apartman ve site yönetimi, moloz torbalarının ortak alanda uzun süre bekletilmesine izin vermez; bu da yasal bertarafın yanı sıra zamanlama açısından da planlı çalışmayı gerekli kılar.",
      },
      {
        heading: "Fazlalıkat ile yasal ve hızlı çözüm",
        body:
          "Molozunuzu bulunduğu kattan alıp lisanslı döküm sahasına taşıyoruz; tüm süreç yönetmeliğe uygun şekilde ilerler, siz ceza riskiyle uğraşmazsınız.",
      },
    ],
  },
  {
    slug: "insaat-atiklari-nasil-geri-donusturulur",
    title: "İnşaat Atıkları Nasıl Geri Dönüştürülür?",
    excerpt:
      "Beton, tuğla ve metal gibi inşaat atıklarının geri dönüşüm sürecini ve bu sürecin çevresel faydalarını anlatıyoruz.",
    date: "21 Eyl 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Hangi malzemeler geri dönüştürülebilir?",
        body:
          "Beton ve tuğla kırıkları öğütülerek dolgu veya yol alt yapısı malzemesine dönüştürülebilir; demir donatı ve diğer metal aksamlar ise hurda metal olarak değerlendirilir.",
      },
      {
        heading: "Geri dönüşüm tesislerinde süreç",
        body:
          "Lisanslı tesislerde moloz önce büyük parçalara ayrılır, metal aksamlar mıknatıs veya elle ayrıştırılır, kalan beton/tuğla kırma makinelerinden geçirilerek yeniden kullanılabilir agrega haline getirilir.",
      },
      {
        heading: "Geri dönüşümün maliyet avantajı",
        body:
          "Doğru ayrıştırılmış moloz, bazı durumlarda bertaraf maliyetini düşürür; çünkü geri dönüştürülebilir malzeme miktarı arttıkça düzenli depolama alanına giden atık hacmi azalır.",
      },
      {
        heading: "Şantiyede kaynağında ayrıştırmanın önemi",
        body:
          "Moloz, hafriyat sahasında çıktığı anda metal ve diğer malzemelerden ayrılırsa geri dönüşüm tesisindeki işlem süresi kısalır ve verimlilik artar; bu nedenle büyük projelerde kaynağında ayrıştırma teşvik edilir.",
      },
      {
        heading: "Fazlalıkat ile geri dönüşüme yönlendirme",
        body:
          "Topladığımız inşaat atıklarını mümkün olduğunca ayrıştırıp lisanslı geri dönüşüm tesislerine yönlendiriyoruz; bu sayede atığın büyük kısmı yeniden ekonomiye kazandırılıyor.",
      },
    ],
  },
  {
    slug: "belediye-moloz-toplama-hizmeti-nedir",
    title: "Belediye Moloz Toplama Hizmeti Nedir, Nasıl İşler?",
    excerpt:
      "Belediyelerin moloz toplama hizmetinin kapsamını, randevu sürecini ve profesyonel hizmetle farkını anlatıyoruz.",
    date: "23 Eyl 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Belediye moloz toplama hizmeti kapsamı",
        body:
          "Çoğu ilçe belediyesi, sınırlı miktardaki tadilat molozu için randevu sistemiyle ücretsiz veya düşük ücretli toplama hizmeti sunar; genellikle belirli gün ve kotalarla sınırlıdır.",
      },
      {
        heading: "Randevu süreci ve kısıtları",
        body:
          "Belediye hattından randevu almak günler hatta haftalar sürebilir; moloz genellikle bina önüne kadar sizin tarafınızdan taşınmalıdır ve büyük hacimli yıkım atıkları bu hizmetin kapsamı dışında kalabilir.",
      },
      {
        heading: "Hangi durumlarda belediye hizmeti yetersiz kalır?",
        body:
          "Büyük çaplı tadilat, komple yıkım veya acil teslim tarihi olan işlerde belediyenin randevu süresi ve taşıma kısıtları iş takvimini zorlayabilir.",
      },
      {
        heading: "Profesyonel hizmetle farkı",
        body:
          "Profesyonel bir moloz atım firması molozu bulunduğu kattan alır, aynı gün veya ertesi gün randevu sunar ve büyük hacimli işleri de kapsar; belediye hizmetinin sınırlı kaldığı noktalarda tamamlayıcı bir çözümdür.",
      },
      {
        heading: "Fazlalıkat ile hızlı alternatif",
        body:
          "Belediye randevusunun yetersiz kaldığı veya geciktiği durumlarda, WhatsApp üzerinden bize ulaşarak çoğu bölgede aynı gün veya ertesi gün moloz atım hizmeti alabilirsiniz.",
      },
    ],
  },
  {
    slug: "moloz-tasimada-dogru-arac-secimi",
    title: "Moloz Taşımada Doğru Araç Seçimi: Çuval, Kamyonet, Kamyon",
    excerpt:
      "İşin hacmine göre çuval, kamyonet, kamyon veya tır seçimi nasıl yapılır; doğru araç seçiminin maliyete etkisini anlatıyoruz.",
    date: "25 Eyl 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Çuval bazlı taşıma ne zaman yeterli olur?",
        body:
          "Küçük bir banyo tadilatı veya tek oda yenilemesi sonrası ortaya çıkan moloz genellikle birkaç çuvalla taşınabilir; bu yöntem dar sokaklarda ve asansörsüz binalarda da pratik bir çözümdür.",
      },
      {
        heading: "Kamyonet hangi işler için uygundur?",
        body:
          "Orta ölçekli tadilat işlerinde, birkaç oda veya küçük bir dairenin tamamından çıkan moloz için kamyonet hem maliyet hem de manevra kolaylığı açısından dengeli bir seçenektir.",
      },
      {
        heading: "Kamyon ve tır gerektiren durumlar",
        body:
          "Komple yıkım, büyük çaplı inşaat veya bina geneli tadilat gibi işlerde ortaya çıkan moloz hacmi kamyon hatta tır seviyesinde araç gerektirir; bu durumda sefer sayısı ve döküm sahası mesafesi planlamanın merkezine alınmalıdır.",
      },
      {
        heading: "Yanlış araç seçiminin maliyeti",
        body:
          "İhtiyaçtan küçük bir araçla başlamak ek sefer gerektirebilir, ihtiyaçtan büyük bir araçla çalışmak ise gereksiz maliyet doğurur; doğru tahmin için fotoğraf/video ile ön değerlendirme yapmak faydalıdır.",
      },
      {
        heading: "Fazlalıkat ile doğru araç planlaması",
        body:
          "İşinizin hacmine göre çuval, kamyonet, kamyon veya tır seçeneklerinden en uygununu öneriyor, gereksiz sefer veya maliyetin önüne geçiyoruz.",
      },
    ],
  },
  {
    slug: "hafriyat-toplama-islemi-nasil-planlanir",
    title: "Hafriyat Toplama İşlemi Nasıl Planlanır?",
    excerpt:
      "Kazı çalışmaları sırasında hafriyat toplama sürecinin nasıl organize edilmesi gerektiğini, sefer planlamasını anlatıyoruz.",
    date: "27 Eyl 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Kazı öncesi hacim tahmini",
        body:
          "Kazı alanının derinliği ve yüzölçümüne göre yapılan yaklaşık hacim hesabı, kaç araç ve kaç sefer gerekeceğini önceden planlamak için temel veriyi sağlar.",
      },
      {
        heading: "Şantiye sahasında geçici depolama",
        body:
          "Hafriyatın kazıldığı anda taşınamadığı durumlarda, şantiye sahasında düzenli bir geçici depolama alanı ayırmak, çalışma alanının sıkışmasını ve güvenlik risklerini önler.",
      },
      {
        heading: "Sefer sıklığı ve zamanlama",
        body:
          "Büyük kazı projelerinde hafriyatın günlük veya haftalık düzenli seferlerle taşınması, sahada yığılmayı önler ve kazı ekibinin verimli çalışmasını sağlar.",
      },
      {
        heading: "Trafik ve saat kısıtlarına dikkat",
        body:
          "Bazı bölgelerde ağır vasıta trafiği belirli saatlerle sınırlandırılmıştır; sefer planlaması yapılırken bu kısıtların önceden öğrenilmesi gecikmeleri önler.",
      },
      {
        heading: "Fazlalıkat ile hafriyat sefer planlaması",
        body:
          "Şantiyenizin kazı takvimine uygun, düzenli sefer planıyla hafriyatınızı taşıyor, sahanızın sıkışmadan verimli çalışmasını sağlıyoruz.",
      },
    ],
  },
  {
    slug: "avm-rezidans-moloz-atimi",
    title: "AVM ve Rezidanslarda Moloz Atımı Nasıl Yapılır?",
    excerpt:
      "AVM, müze, otopark ve rezidans gibi kurallı alanlarda moloz atımının nasıl planlanması gerektiğini anlatıyoruz.",
    date: "29 Eyl 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Kurallı alanlarda neden farklı bir yaklaşım gerekir?",
        body:
          "AVM, rezidans, otopark veya müze gibi alanlarda yönetim, ziyaretçi ve sakinleri rahatsız etmemek için sıkı saat ve prosedür kuralları uygular; moloz atımı bu kurallara göre planlanmalıdır.",
      },
      {
        heading: "Gece operasyonu ihtiyacı",
        body:
          "Yoğun ziyaretçi trafiği olan AVM gibi alanlarda moloz taşıma genellikle gece veya kapanış saatleri sonrasına planlanır; bu da ekip ve araç organizasyonunun farklı bir takvimle yürütülmesini gerektirir.",
      },
      {
        heading: "Sessiz ve düzenli çalışmanın önemi",
        body:
          "Rezidans gibi yaşam alanlarında gürültü ve kirlilik şikayetlerini önlemek için moloz taşıma sırasında düzenli koruma örtüleri kullanmak ve ortak alanı hızlıca temizlemek önemlidir.",
      },
      {
        heading: "Yönetimden önceden izin alma",
        body:
          "Bu tür alanlarda çalışmaya başlamadan önce bina/AVM yönetiminden yazılı izin almak ve asansör/yük girişi saatlerini netleştirmek, randevu gününde yaşanabilecek gecikmeleri önler.",
      },
      {
        heading: "Fazlalıkat ile hassas alan deneyimi",
        body:
          "AVM, rezidans ve site gibi kurallı alanlarda yönetimin belirlediği saat ve prosedürlere uygun, gerektiğinde gece operasyonuyla sessiz ve düzenli moloz atımı hizmeti sunuyoruz.",
      },
    ],
  },
  {
    slug: "cati-sokum-molozu-nereye-atilir",
    title: "Çatı Söküm Molozu Nereye Atılır?",
    excerpt:
      "Çatı yenileme ve kiremit söküm çalışmaları sonrası ortaya çıkan molozun doğru bertaraf yöntemini anlatıyoruz.",
    date: "01 Eki 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Çatı söküm molozu neden özel bir durumdur?",
        body:
          "Kiremit, ahşap kaplama ve bazı durumlarda eski izolasyon malzemeleri içeren çatı söküm molozu, hem ağır hem de kırılgan parçalardan oluşur; bu da taşıma sırasında ekstra dikkat gerektirir.",
      },
      {
        heading: "Yüksekten indirme güvenliği",
        body:
          "Çatı katından veya çatı üzerinden moloz indirme işlemi, düşme ve hasar riskini azaltmak için güvenli ip/kayış sistemleri ve uygun koruma ekipmanı gerektirir.",
      },
      {
        heading: "Hava koşullarının etkisi",
        body:
          "Yağışlı veya rüzgarlı havalarda çatı söküm molozu taşıma işlemi ertelenmeli veya ekstra güvenlik tedbirleriyle yürütülmelidir; bu noktada ekip deneyimi büyük fark yaratır.",
      },
      {
        heading: "Acil tahliye ihtiyacı",
        body:
          "Çatı yenileme çalışmaları genellikle hava koşullarına bağlı dar bir zaman aralığında yapıldığından, söküm molozunun aynı gün içinde tahliye edilmesi çalışmanın aksamadan sürmesini sağlar.",
      },
      {
        heading: "Fazlalıkat ile çatı söküm molozu tahliyesi",
        body:
          "Çatı yenileme sonrası ortaya çıkan kiremit ve söküm molozunu güvenli ekipmanla indirip aynı gün lisanslı döküm sahasına taşıyoruz.",
      },
    ],
  },
  {
    slug: "tadilat-sonrasi-alcipan-seramik-molozu",
    title: "Tadilat Sonrası Alçıpan ve Seramik Molozu Nasıl Atılır?",
    excerpt:
      "Ev ve ofis tadilatlarından çıkan alçıpan, seramik ve fayans molozunun doğru bertaraf yöntemini anlatıyoruz.",
    date: "03 Eki 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Tadilat molozu neden farklı değerlendirilir?",
        body:
          "Alçıpan, seramik ve fayans kırıkları, yıkım molozuna göre daha hafif ve hacimli olmasına rağmen kırılgan parçalar içerir; bu yüzden poşetleme ve taşıma şekli farklılaşır.",
      },
      {
        heading: "Banyo ve mutfak tadilatına özel durum",
        body:
          "Banyo ve mutfak tadilatlarında çıkan seramik, fayans ve sıhhi tesisat parçaları genellikle birbirine karışık halde bulunur; bu karışımın güvenli şekilde poşetlenmesi taşıma sırasında yaralanma riskini azaltır.",
      },
      {
        heading: "Küçük hacimli işlerde çuval yeterli mi?",
        body:
          "Tek bir banyo veya mutfak yenilemesi sonrası ortaya çıkan moloz genellikle birkaç büyük çuvalla taşınabilir; bu da hem maliyeti hem de işlem süresini kısaltır.",
      },
      {
        heading: "Apartman ortak alanında bekletmeme",
        body:
          "Tadilat molozunun apartman koridorunda veya merdiven boşluğunda uzun süre bekletilmesi hem yönetim kurallarına aykırıdır hem de yaya geçişini engeller; aynı gün tahliye bu riski ortadan kaldırır.",
      },
      {
        heading: "Fazlalıkat ile tadilat molozu tahliyesi",
        body:
          "Banyo, mutfak veya genel tadilat sonrası alçıpan, seramik ve fayans molozunuzu çuval bazlı veya araçla aynı gün tahliye ediyoruz.",
      },
    ],
  },
  {
    slug: "insaat-molozu-geri-donusumunun-cevresel-faydalari",
    title: "İnşaat Molozu Geri Dönüşümünün Çevresel Faydaları",
    excerpt:
      "Moloz geri dönüşümünün doğal kaynak tüketimi ve düzenli depolama alanları üzerindeki etkisini anlatıyoruz.",
    date: "05 Eki 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Doğal kaynak tüketimini azaltma",
        body:
          "Geri dönüştürülmüş beton ve tuğla agregası, yeni dolgu veya yol alt yapısı malzemesi olarak kullanıldığında, doğadan yeni taş ve kum çıkarma ihtiyacını azaltır.",
      },
      {
        heading: "Düzenli depolama alanlarının ömrünü uzatma",
        body:
          "Geri dönüştürülebilir moloz miktarı ne kadar artarsa, düzenli depolama sahalarına giden atık hacmi o kadar azalır; bu da mevcut sahaların daha uzun süre kullanılabilmesini sağlar.",
      },
      {
        heading: "Karbon ayak izine etkisi",
        body:
          "Yerel geri dönüşüm tesislerinde değerlendirilen moloz, uzak mesafelerden yeni hammadde taşımanın yarattığı karbon salımını dolaylı olarak azaltır.",
      },
      {
        heading: "Sürdürülebilir inşaat anlayışına katkısı",
        body:
          "Moloz geri dönüşümünü standart bir süreç haline getiren projeler, sürdürülebilir inşaat sertifikasyonları açısından da olumlu değerlendirilen bir uygulamadır.",
      },
      {
        heading: "Fazlalıkat ile çevre dostu bertaraf",
        body:
          "Topladığımız molozu mümkün olduğunca geri dönüşüme yönlendirerek hem doğal kaynak tüketimini hem de düzenli depolama alanlarına olan yükü azaltmaya katkı sağlıyoruz.",
      },
    ],
  },
  {
    slug: "moloz-atiminda-is-guvenligi",
    title: "Moloz Atımında İş Güvenliği Nelere Dikkat Edilmeli?",
    excerpt:
      "Moloz taşıma ve yükleme sırasında ekip ve bina güvenliğini korumak için alınması gereken önlemleri anlatıyoruz.",
    date: "07 Eki 2026",
    category: "Moloz",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Kişisel koruyucu ekipman kullanımı",
        body:
          "Eldiven, baret, toz maskesi ve uygun ayakkabı, moloz yükleme ve taşıma sırasında kesik, çarpma ve toz solunumu gibi riskleri önemli ölçüde azaltır.",
      },
      {
        heading: "Doğru kaldırma tekniği",
        body:
          "Ağır moloz parçalarının yanlış kaldırma tekniğiyle taşınması bel ve sırt yaralanmalarına yol açabilir; ekip eğitimi bu noktada kalıcı güvenlik kültürünün temelidir.",
      },
      {
        heading: "Asansörsüz binalarda ekstra önlemler",
        body:
          "Üst katlardan moloz indirirken kayış, kaymaz taban ve merdiven koruma örtüleri kullanmak, hem ekibin hem de binanın güvenliğini korur.",
      },
      {
        heading: "Şantiye sahasında çalışma alanı düzeni",
        body:
          "Moloz yığınlarının geçiş yollarını kapatmayacak şekilde düzenlenmesi, hem yaya güvenliğini hem de araç manevra alanını korur.",
      },
      {
        heading: "Fazlalıkat ile güvenli moloz atımı",
        body:
          "Ekibimiz tüm moloz atım işlerinde kişisel koruyucu ekipman, doğru kaldırma tekniği ve bina koruma önlemleriyle güvenli bir süreç yürütür.",
      },
    ],
  },
  {
    slug: "ev-cop-tasima-nasil-yapilir",
    title: "Ev Çöp Taşıma Nasıl Yapılır? Fiyatlar ve Pratik Yöntemler",
    excerpt:
      "Evden çıkan büyük hacimli çöp ve eski eşyaları kaldırım yerine doğru ve hızlı şekilde taşıtmanın yöntemlerini, fiyat aralığını ve dikkat edilmesi gerekenleri anlatıyoruz.",
    date: "09 Eki 2026",
    category: "Rehber",
    image: "/images/blog/evdenzopatim.png",
    sections: [
      {
        heading: "Ev çöp taşıma ne zaman gerekir?",
        body:
          "Taşınma, tadilat, yenileme veya genel temizlik sırasında evden çıkan büyük hacimli çöp ve eski eşyalar normal çöp poşetiyle atılamaz; bu durumlarda ev çöp taşıma hizmetine ihtiyaç duyulur.",
      },
      {
        heading: "Belediye kanalıyla ev çöp taşıma",
        body:
          "Çoğu belediye, büyükşehir çöp hattı üzerinden randevu sistemiyle ücretsiz büyük atık alımı yapar; dezavantajı randevu süresinin uzun olması ve eşyanın bina önüne kadar sizin tarafınızdan taşınması gerekliliğidir.",
      },
      {
        heading: "Profesyonel ev çöp taşıma hizmeti ile hızlı çözüm",
        body:
          "Profesyonel bir ekip, çöp ve eşyaları bulunduğu kattan alıp aracına yükler; asansörsüz binalarda veya acil durumlarda en pratik çözüm bu yöntemdir, genellikle aynı gün randevu mümkündür.",
      },
      {
        heading: "Ev çöp taşıma fiyatları neye göre belirlenir?",
        body:
          "Fiyat; çöpün hacmine, kat/asansör durumuna, taşınacağı mesafeye ve atık tipine göre değişir. Keşif sonrası net bir fiyat verilmesi, sürpriz ek ücret çıkmaması için önemlidir.",
      },
      {
        heading: "Fazlalıkat ile ev çöp taşıma süreci",
        body:
          "WhatsApp üzerinden fotoğraf gönderip dakikalar içinde fiyat alır, uygun olduğunuz gün ekibimiz adresinize gelip çöp ve eşyalarınızı kapınızdan teslim alır; aynı gün randevu çoğu bölgede mümkündür.",
      },
    ],
  },
  {
    slug: "erenkoy-eski-esya-toplama-hizmeti",
    title: "Erenköy Eski Eşya Toplama Hizmeti",
    excerpt:
      "Erenköy'ün köklü apartmanları ve geniş aile yapısında eski eşya toplama sürecinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "11 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/erenkoy.png",
    sections: [
      {
        heading: "Erenköy'de eski eşya neden birikir?",
        body:
          "Erenköy, İstanbul'un en köklü yerleşim bölgelerinden biri olduğu için aynı ailenin nesiller boyu oturduğu geniş daireler yaygındır. Miras, tadilat veya kuşak değişimi sonrası birikmiş mobilya ve eşya hacmi, tek seferde kaldırılması gereken büyük miktarlara ulaşabilir.",
      },
      {
        heading: "Bağdat Caddesi çevresinde taşıma zorlukları",
        body:
          "Bağdat Caddesi'ne yakın sokaklarda park yeri kısıtlı olduğundan, büyük taşıma araçlarının bina önüne yanaşması için randevu saatinin doğru planlanması gerekir; özellikle öğleden sonra trafiğin yoğunlaştığı saatlerde bu daha da önem kazanır.",
      },
      {
        heading: "Eski apartmanlarda asansör ve kat sorunu",
        body:
          "Erenköy'ün 1960-80 arası inşa edilmiş apartmanlarının bir kısmında asansör dar veya yoktur; bu da büyük mobilyaların merdivenden indirilmesini gerektirir ve deneyimli ekip ihtiyacını artırır.",
      },
      {
        heading: "Belediye mi, hurdacı mı, profesyonel ekip mi?",
        body:
          "Belediye büyük atık hattı haftalar sürebilir, hurdacılar sadece metal değeri olan parçaları kabul eder; profesyonel bir tahliye ekibi ise eşyanın tamamını tek seferde, net randevu saatiyle alır.",
      },
      {
        heading: "Fazlalıkat ile Erenköy'de eşya toplama",
        body:
          "Erenköy'ün köklü apartman dokusuna ve dar park koşullarına uygun şekilde çalışıyor, eski eşyalarınızı aynı gün randevu ile bulunduğu kattan alıp doğru bertaraf noktalarına yönlendiriyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Erenköy bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Erenköy içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Erenköy genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "suadiyede-eski-esya-nereye-atilir",
    title: "Suadiye'de Eski Eşya Nereye Atılır?",
    excerpt:
      "Suadiye'nin sahil hattındaki butik apartmanlarında ve sitelerde eski eşyanın doğru ve hızlı şekilde nasıl tahliye edileceğini anlatıyoruz.",
    date: "13 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/suadiye.png",
    sections: [
      {
        heading: "Suadiye'de eski eşya atımı neden farklıdır?",
        body:
          "Suadiye, Bağdat Caddesi'nin en hareketli kesimlerinden biri olduğu için hem yüksek değerli rezidanslar hem de eski yapı stoklu butik apartmanlar bir arada bulunur; bu çeşitlilik tahliye sürecinde farklı yaklaşımlar gerektirir.",
      },
      {
        heading: "Sahil hattındaki sitelerde randevu kuralları",
        body:
          "Deniz manzaralı sitelerin çoğunda yük asansörü kullanım saatleri ve araç giriş kuralları yönetim tarafından belirlenir; randevu öncesi bu detayların netleştirilmesi günü kayıpsız geçirmenizi sağlar.",
      },
      {
        heading: "Dar sokaklarda araç erişimi",
        body:
          "Bağdat Caddesi'ne paralel ara sokakların bir kısmı tek yönlü ve dardır; büyük araç yerine küçük araçla esnek planlama yapmak süreci hızlandırır.",
      },
      {
        heading: "Bağışlanabilir eşyaların değerlendirilmesi",
        body:
          "Suadiye'deki hâlâ kullanılabilir durumdaki mobilyalar, belediyenin sosyal yardım birimleri veya çeşitli vakıflar aracılığıyla ihtiyaç sahiplerine ulaştırılabilir.",
      },
      {
        heading: "Fazlalıkat ile Suadiye'de eşya tahliyesi",
        body:
          "Suadiye'nin hem site hem butik apartman dokusuna uygun ekipmanla çalışıyor, eski eşyalarınızı aynı gün randevu ile alıp geri dönüştürülebilir parçaları doğru noktalara yönlendiriyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Suadiye bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Suadiye içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Suadiye genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "ciftehavuzlar-esya-tahliye-hizmeti",
    title: "Çiftehavuzlar Eşya Tahliye Hizmeti",
    excerpt:
      "Çiftehavuzlar'ın sakin ve dar sokaklı yerleşim dokusunda eşya tahliyesinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "15 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/cifehavuzlar.png",
    sections: [
      {
        heading: "Çiftehavuzlar'ın yerleşim dokusu",
        body:
          "Çiftehavuzlar, Bağdat Caddesi ile sahil arasında kalan sakin ve büyük ölçüde aile apartmanlarından oluşan bir mahalledir; bu yapı, tahliye sırasında komşularla uyumlu, sessiz bir çalışma temposu gerektirir.",
      },
      {
        heading: "Dar sokaklarda park ve manevra",
        body:
          "Mahallenin iç sokakları dar olduğundan, büyük taşıma araçlarının yerine küçük ve orta boy araçlarla esnek manevra yapmak çoğu zaman daha pratik bir çözümdür.",
      },
      {
        heading: "Eski eşya ile yeni tadilat atığının ayrımı",
        body:
          "Tadilat geçiren dairelerde mobilya ile birlikte inşaat atığı da çıkabilir; bu iki atık türünün ayrı değerlendirilmesi bertaraf sürecini hızlandırır ve maliyeti netleştirir.",
      },
      {
        heading: "Komşularla uyumlu randevu saatleri",
        body:
          "Sakin bir yerleşim olması nedeniyle, sabah erken veya öğle sonrası saatlerde planlanan taşımalar hem komşuluk ilişkilerini hem de trafik akışını koruyarak süreci kolaylaştırır.",
      },
      {
        heading: "Fazlalıkat ile Çiftehavuzlar'da eşya tahliyesi",
        body:
          "Çiftehavuzlar'ın dar sokaklarına ve sakin yapısına uygun şekilde, sessiz ve düzenli çalışarak eski eşyalarınızı aynı gün randevu ile alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Çiftehavuzlar bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Çiftehavuzlar içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Çiftehavuzlar genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "kalamis-eski-esya-toplama-ve-tahliye-hizmeti",
    title: "Kalamış Eski Eşya Toplama ve Tahliye Hizmeti",
    excerpt:
      "Kalamış'ın marina çevresindeki site ve apartman karışımı dokusunda eski eşya toplama sürecini anlatıyoruz.",
    date: "17 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/kalamis.png",
    sections: [
      {
        heading: "Kalamış'ta eşya tahliyesi neden özen ister?",
        body:
          "Kalamış Marina çevresi, hem yüksek katlı siteleri hem de Fenerbahçe'ye yakın eski apartmanlarıyla karma bir yapı sergiler; bu çeşitlilik her binaya uygun farklı ekipman ve yaklaşım gerektirir.",
      },
      {
        heading: "Marina ve sahil bölgesinde araç erişimi",
        body:
          "Sahil yoluna yakın bloklarda araç park ve yanaşma noktaları kısıtlı olabilir; randevu saatinin gün içindeki sahil trafiğine göre planlanması süreci hızlandırır.",
      },
      {
        heading: "Sitelerde yük asansörü kuralları",
        body:
          "Kalamış'taki rezidans ve sitelerin çoğunda yük asansörü kullanımı yönetim tarafından belirli saatlerle sınırlandırılır; bu kurallara uygun çalışmak hem bina hem de eşya güvenliğini korur.",
      },
      {
        heading: "Eski apartmanlarda merdivenden taşıma",
        body:
          "Fenerbahçe sınırına yakın bazı eski apartmanlarda asansör dar veya yoktur; bu binalarda deneyimli ekip ve doğru ekipmanla merdivenden indirme gerekir.",
      },
      {
        heading: "Fazlalıkat ile Kalamış'ta eşya tahliyesi",
        body:
          "Kalamış'ın site ve eski apartman karışımı dokusuna uygun ekipmanla çalışıyor, eşyalarınızı aynı gün randevu ile bulunduğu kattan alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Kalamış bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Kalamış içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Kalamış genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "caddebostan-hurda-mobilya-alanlar",
    title: "Caddebostan Hurda Mobilya Alanlar ve Profesyonel Alternatif",
    excerpt:
      "Caddebostan'ın sahil hattındaki yoğun apartman yerleşiminde hurda mobilya tahliyesinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "19 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/caddebostanhurda.png",
    sections: [
      {
        heading: "Caddebostan'da hurda mobilya neden birikir?",
        body:
          "Caddebostan, Bağdat Caddesi'nin en yoğun ve talebin yüksek olduğu kesimlerinden biridir; sık kiracı değişimi ve yenileme dönemlerinde mobilya ve beyaz eşya birikimi hızla artar.",
      },
      {
        heading: "Hurdacılar yalnızca metal değeri olan eşyaları alır",
        body:
          "Bölgedeki hurdacılar genellikle sadece metal aksamı olan parçaları kabul eder; koltuk, dolap ve yatak gibi mobilyalar için bu seçenek çoğu zaman yetersiz kalır.",
      },
      {
        heading: "Sahil hattındaki sitelerde randevu yoğunluğu",
        body:
          "Talebin yüksek olduğu Caddebostan'da randevu yoğunluğuna göre öncelikli planlama yapmak, özellikle hafta sonları beklemeden hizmet almanın anahtarıdır.",
      },
      {
        heading: "Apartman ve site karışımı yapıda taşıma",
        body:
          "Hem eski apartmanlarda hem yeni sitelerde farklı kurallar geçerlidir; bina tipine göre doğru ekipman ve randevu saati seçmek süreci kolaylaştırır.",
      },
      {
        heading: "Fazlalıkat ile Caddebostan'da hurda mobilya tahliyesi",
        body:
          "Caddebostan'ın sahil hattındaki yoğun apartman ve site yerleşimine uygun şekilde, mobilya ve eski eşyaları aynı gün randevu ile alıp doğru bertaraf noktalarına yönlendiriyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Caddebostan bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Caddebostan içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Caddebostan genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "bostanci-cop-atim-ve-eski-esya-toplama-hizmeti",
    title: "Bostancı Çöp Atım ve Eski Eşya Toplama Hizmeti",
    excerpt:
      "Bostancı'nın iskele ve E5 çevresindeki yoğun yerleşim dokusunda çöp atım ve eski eşya toplama sürecini anlatıyoruz.",
    date: "21 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/bostancicop.png",
    sections: [
      {
        heading: "Bostancı'nın ulaşım yoğunluğu eşya tahliyesini nasıl etkiler?",
        body:
          "Bostancı, hem İDO iskelesi hem de E5 bağlantısı nedeniyle gün içinde yoğun bir trafiğe sahiptir; bu da büyük araçla yapılacak taşımalarda doğru saat planlamasını kritik hale getirir.",
      },
      {
        heading: "Yüksek katlı siteler ve eski apartmanların bir aradalığı",
        body:
          "Sahil şeridindeki yeni rezidanslar ile iç kesimlerdeki eski apartmanlar bir arada bulunduğundan, her binanın asansör ve park kurallarına göre ayrı planlama yapılması gerekir.",
      },
      {
        heading: "Sabah erken saatlerin avantajı",
        body:
          "İskele çevresindeki yoğunluk öğleden sonra arttığından, sabah erken saatlerde planlanan randevular hem park hem de taşıma açısından daha hızlı sonuçlanır.",
      },
      {
        heading: "Çöp ve eski eşya ayrımı",
        body:
          "Taşınma veya yenileme sırasında çıkan çöp ile hâlâ kullanılabilir eski eşyanın ayrı değerlendirilmesi, geri dönüşüm oranını artırır ve maliyeti netleştirir.",
      },
      {
        heading: "Fazlalıkat ile Bostancı'da çöp ve eski eşya toplama",
        body:
          "Bostancı'nın yoğun ulaşım ve karma bina dokusuna uygun şekilde çalışıyor, çöp ve eski eşyalarınızı aynı gün randevu ile bulunduğu kattan alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Bostancı bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Bostancı içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Bostancı genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "etiler-eski-esya-toplama-hizmeti",
    title: "Etiler Eski Eşya Toplama Hizmeti",
    excerpt:
      "Etiler'deki rezidans ve plaza yoğun bölgesinde eski eşya toplama sürecinin kurallara uygun nasıl yürütüldüğünü anlatıyoruz.",
    date: "23 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/etiler.png",
    sections: [
      {
        heading: "Etiler'de eski eşya toplama neden farklı planlanır?",
        body:
          "Etiler, yüksek katlı rezidansları ve sıkı site yönetim kurallarıyla bilinir; bu nedenle eşya tahliyesi öncesinde yönetimden onay almak sürecin ilk adımıdır.",
      },
      {
        heading: "Sıkı site kurallarına uygun, sessiz çalışma",
        body:
          "Rezidans sakinlerinin huzurunu bozmamak için taşıma saatleri genellikle belirli aralıklarla sınırlandırılır; bu kurallara uygun, sessiz ve hızlı çalışmak komşu şikayetlerinin önüne geçer.",
      },
      {
        heading: "Yokuşlu sokaklarda araç erişimi",
        body:
          "Etiler'in yokuşlu ve dar sokaklarında büyük araçların manevrası zorlaşabilir; küçük araçla esnek planlama yapmak süreci kolaylaştırır.",
      },
      {
        heading: "Ofis ve plaza taşımalarında deneyim",
        body:
          "Bölgedeki plaza yoğunluğu nedeniyle kurumsal eşya ve ofis malzemesi tahliyeleri de sık talep edilir; bu işler genellikle mesai saatleri dışında planlanır.",
      },
      {
        heading: "Fazlalıkat ile Etiler'de eski eşya toplama",
        body:
          "Etiler'deki rezidans ve sitelerin sıkı kurallarına uygun olarak, komşulara rahatsızlık vermeden sessiz ve hızlı şekilde eski eşyalarınızı topluyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Etiler bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Etiler içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Etiler genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "bebekte-eski-esya-nereye-atilir",
    title: "Bebek'te Eski Eşya Nereye Atılır?",
    excerpt:
      "Bebek'in sahil şeridindeki villa ve butik apartmanlarında eski eşyanın doğru ve özenli şekilde nasıl tahliye edileceğini anlatıyoruz.",
    date: "25 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/bebek.png",
    sections: [
      {
        heading: "Bebek'te eski eşya atımı neden özel bir yaklaşım gerektirir?",
        body:
          "Bebek, hem tarihi villalara hem de butik apartmanlara ev sahipliği yapan, Boğaz manzaralı prestijli bir mahalledir; bu binalarda eşyaların özenli ve hasarsız taşınması büyük önem taşır.",
      },
      {
        heading: "Dar sahil sokaklarında araç kısıtları",
        body:
          "Sahil şeridine paralel sokaklar dar ve bazı saatlerde araç trafiğine kapalı olabilir; bu nedenle küçük araçla esnek erişim planlamak gerekir.",
      },
      {
        heading: "Villalarda bahçe ve iç mekân atığının birlikte tahliyesi",
        body:
          "Bebek'teki bahçeli villalarda iç mekân eşyalarıyla birlikte bahçe atıklarının da tek seferde alınması, ayrı ayrı randevu almaktan daha pratiktir.",
      },
      {
        heading: "Butik apartmanlarda asansör ve kat sorunu",
        body:
          "Tarihi dokudaki bazı butik apartmanlarda asansör dar veya yoktur; bu binalarda deneyimli ekip ve doğru ekipmanla özenli taşıma şarttır.",
      },
      {
        heading: "Fazlalıkat ile Bebek'te eski eşya tahliyesi",
        body:
          "Bebek'in sahil şeridindeki villa ve butik apartmanlarında, dar sokaklara rağmen özenli ve hasarsız taşıma sağlayarak eski eşyalarınızı aynı gün randevu ile alıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Bebek'te bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Bebek'te içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Bebek'te genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "ulus-villa-esya-tahliye-hizmeti",
    title: "Ulus Villa Eşya Tahliye Hizmeti",
    excerpt:
      "Ulus'un geniş bahçeli villa dokusunda eşya tahliyesinin nasıl planlanması gerektiğini anlatıyoruz.",
    date: "27 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/ulus.png",
    sections: [
      {
        heading: "Ulus'ta villa eşya tahliyesi neden farklıdır?",
        body:
          "Ulus, geniş bahçeli müstakil villalarıyla bilinen, Boğaz'a yakın yamaç bir mahalledir; bu tip yapılarda eşya hacmi standart bir daireye göre çok daha fazla olabilir.",
      },
      {
        heading: "Geniş bahçeli evlerde iç mekân ve bahçe atığı",
        body:
          "Villalarda hem iç mekân mobilyaları hem de bahçe atıkları (budama artığı, eski bahçe mobilyası) bir arada bulunur; bunların tek seferde, aynı ekiple tahliye edilmesi zaman kazandırır.",
      },
      {
        heading: "Sakin ve yokuşlu sokaklarda araç planlaması",
        body:
          "Ulus'un sakin ve yokuşlu sokaklarında geniş araç erişimi genellikle kolaydır, ancak randevu saatinin önceden netleştirilmesi park ve manevra açısından önemlidir.",
      },
      {
        heading: "Miras veya el değiştiren villalarda toplu tahliye",
        body:
          "Miras kalan veya satış öncesi boşaltılan villalarda, çok sayıda eşyanın aynı anda tahliye edilmesi gerekebilir; bu büyük hacimli işler için planlı bir ekip organizasyonu şarttır.",
      },
      {
        heading: "Fazlalıkat ile Ulus'ta villa eşya tahliyesi",
        body:
          "Ulus'un geniş bahçeli villa dokusuna uygun ekipmanla çalışıyor, iç mekân ve bahçe atıklarını birlikte, aynı gün randevu ile tahliye ediyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Ulus Villa bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Ulus Villa içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Ulus Villa genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "nisantasi-eski-esya-toplama-ve-ev-bosaltma-hizmeti",
    title: "Nişantaşı Eski Eşya Toplama ve Ev Boşaltma Hizmeti",
    excerpt:
      "Nişantaşı'ndaki lüks rezidans ve butik apartmanlarda eski eşya toplama ve ev boşaltma sürecini anlatıyoruz.",
    date: "29 Eki 2026",
    category: "Mahalle Rehberi",
    image: "/images/blog/nisantasi.png",
    sections: [
      {
        heading: "Nişantaşı'nda eşya tahliyesi neden özenli planlanır?",
        body:
          "Nişantaşı, lüks rezidansları ve butik apartmanlarıyla İstanbul'un en prestijli alışveriş ve yaşam bölgelerinden biridir; bu binalarda hem güvenlik hem de görgü kuralları taşıma sürecini doğrudan etkiler.",
      },
      {
        heading: "Dar tek yönlü sokaklarda park sorunu",
        body:
          "Mahallenin yoğun alışveriş trafiğine sahip dar ve çoğunlukla tek yönlü sokaklarında park yeri bulmak zordur; bu nedenle randevu saatinin trafiğin az olduğu saatlere göre planlanması önemlidir.",
      },
      {
        heading: "Rezidans yönetimlerinin sıkı kuralları",
        body:
          "Çoğu rezidans, yük asansörü kullanım saatlerini ve taşıma izinlerini önceden talep eder; bu kurallara uygun çalışmak hem süreci hızlandırır hem de bina yönetimiyle sorun yaşanmasını önler.",
      },
      {
        heading: "Butik apartmanlarda özenli taşıma ihtiyacı",
        body:
          "Tarihi dokudaki butik apartmanların bir kısmında dar merdiven ve küçük asansörler bulunur; bu binalarda deneyimli ekip ve doğru ekipmanla hasarsız taşıma yapılması gerekir.",
      },
      {
        heading: "Fazlalıkat ile Nişantaşı'nda eşya toplama",
        body:
          "Nişantaşı'ndaki lüks rezidans ve butik apartmanlarda, planlı ekip yönlendirmesiyle süreci hızlı ve temiz tamamlayarak eski eşyalarınızı ve ev boşaltma ihtiyaçlarınızı karşılıyoruz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Nişantaşı bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Nişantaşı içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Nişantaşı genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "asansorsuz-binadan-esya-indirme",
    title: "Asansörsüz Binadan Eşya İndirme: Güvenli ve Hızlı Çözüm",
    excerpt:
      "Asansörü olmayan veya dar asansörlü binalarda koltuk, dolap ve beyaz eşya nasıl indirilir? Profesyonel ekip ile riskleri ve maliyeti anlatıyoruz.",
    date: "03 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Asansörsüz kat neden maliyeti etkiler?",
        body:
          "Merdiven indirme işçilik, süre ve ekip sayısını artırır. 3. kat ve üzeri, özellikle köşe koltuk ve dolaplarda iki kişi yerine üç kişilik ekip gerekebilir. Bu yüzden fiyat teklifinde kat ve asansör durumu baştan sorulur.",
      },
      {
        heading: "Kendiniz indirmeye çalışmanın riskleri",
        body:
          "Merdivende kayma, duvar sıvası hasarı, kapı kasası kırığı ve bel/omuz yaralanmaları sık görülür. Apartman yönetimi hasarı sizden talep edebilir. Sigortalı profesyonel ekip hem sizi hem komşuları korur.",
      },
      {
        heading: "Doğru ekipman fark yaratır",
        body:
          "Kayış, taşıma arabası, koruyucu battaniye ve dar koridor manevrası deneyimi süreci hızlandırır. Fazlalıkat asansörsüz binalarda eşyayı bulunduğu odadan alır; siz kapıya taşımak zorunda kalmazsınız.",
      },
      {
        heading: "İstanbul'da aynı gün planlama",
        body:
          "WhatsApp'tan fotoğraf, ilçe, kat ve 'asansör yok' bilgisini yazın. Anadolu ve Avrupa Yakası'nda çoğu bölgede aynı gün veya ertesi gün randevu açılır; net fiyat önceden verilir.",
      },
    ],
  },
  {
    slug: "ayni-gun-esya-tahliye-istanbul",
    title: "Aynı Gün Eşya Tahliye İstanbul | Acil Kapıdan Alım",
    excerpt:
      "Taşınma, kiracı çıkışı veya zabıta riski nedeniyle aynı gün eski eşya tahliyesi mi lazım? İstanbul'da acil kapıdan alım sürecini anlatıyoruz.",
    date: "03 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/esyaatmaucreti.png",
    sections: [
      {
        heading: "Ne zaman aynı gün gerekir?",
        body:
          "Noter teslimi, kiracı çıkışı, tadilat başlangıcı veya sokağa bırakılmış eşya şikâyeti gibi durumlarda belediye randevusu yetişmeyebilir. Ücretli profesyonel tahliye bu boşluğu doldurur.",
      },
      {
        heading: "Aynı gün için ne bilgisi gerekir?",
        body:
          "Eşya fotoğrafları, ilçe, tam adres/mahalle, kat, asansör ve tercih edilen saat aralığı yeterlidir. Karma yüklerde (koltuk + beyaz eşya + moloz) tek seferde plan yapılır.",
      },
      {
        heading: "Hangi yakalar kapsanıyor?",
        body:
          "Fazlalıkat hem Anadolu hem Avrupa Yakası'nda çalışır. Kadıköy, Üsküdar, Ümraniye, Sultanbeyli, Beşiktaş, Şişli, Bağcılar, Esenyurt ve diğer 39 ilçede acil talepler değerlendirilir.",
      },
      {
        heading: "Fiyat ve onay",
        body:
          "Ön teklif WhatsApp üzerinden verilir; onayınız olmadan ekip hareket etmez. Gizli ücret yoktur. Kullanılabilir eşyalar bağışa yönlendirilebilir.",
      },
    ],
  },
  {
    slug: "kadikoy-eski-esya-nereye-atilir",
    title: "Kadıköy Eski Eşya Nereye Atılır? Kapıdan Alım Rehberi",
    excerpt:
      "Kadıköy'de eski koltuk, yatak ve beyaz eşyayı yasal ve hızlı şekilde nasıl attırırsınız? Belediye, hurdacı ve profesyonel tahliye karşılaştırması.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Kadıköy'de sokağa bırakmak yasak",
        body:
          "Moda, Caferağa, Fenerbahçe, Göztepe ve Bostancı'da kaldırıma veya konteyner yanına hacimli atık bırakmak zabıta cezası riski taşır. Doğru kanal belediye hattı veya kapıdan profesyonel alımdır.",
      },
      {
        heading: "Belediye vs profesyonel alım",
        body:
          "Belediye randevusu ücretsiz olabilir ama eşyayı kapı önüne indirmeniz gerekir ve bekleme süresi uzayabilir. Fazlalıkat Kadıköy'de eşyayı daireden alır; aynı gün / ertesi gün seçenekleri sunar.",
      },
      {
        heading: "Popüler talepler",
        body:
          "Eski koltuk takımı, yatak, dolap, buzdolabı, daire boşaltma ve tadilat molozu en sık talep edilen hizmetlerdir. Combo sayfalarımızdan mahalle bazlı bilgi alabilirsiniz.",
      },
      {
        heading: "Nasıl teklif alınır?",
        body:
          "WhatsApp'a fotoğraf + 'Kadıköy' + kat yazın. Net fiyat dakikalar içinde gelir; onay sonrası ekip adresinize yönlendirilir.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Kadıköy bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Kadıköy içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Kadıköy genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "umraniye-eski-esya-nereye-atilir",
    title: "Ümraniye Eski Eşya Nereye Atılır? Tahliye Rehberi",
    excerpt:
      "Ümraniye'de eski eşya, mobilya ve moloz atımı için belediye ve profesyonel kapıdan alım seçeneklerini karşılaştırıyoruz.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Ümraniye'de hacimli atık sorunu",
        body:
          "Yoğun site ve apartman dokusunda eski koltuk, depo birikimi ve tadilat molozu sık görülür. Sokağa bırakmak yasaktır; site yönetimi de görüntü kirliliğine tolerans göstermez.",
      },
      {
        heading: "Kapıdan alım avantajı",
        body:
          "Asansörsüz bloklarda eşyayı merdivenden siz indirmek zorunda kalmazsınız. Fazlalıkat Ümraniye genelinde kapıdan / odadan alım yapar.",
      },
      {
        heading: "Depo ve çatı katı",
        body:
          "Bodrum ve çatı katı temizliği tek seferde planlanabilir. Karışık yüklerde (eşya + moloz) tek araçla çözüm en ekonomik yoldur.",
      },
      {
        heading: "Teklif alma",
        body:
          "Fotoğraf, mahalle ve kat bilgisiyle WhatsApp'tan teklif alın. Aynı gün randevu çoğu talepte mümkündür.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Ümraniye bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Ümraniye içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Ümraniye genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "sultanbeyli-eski-esya-nereye-atilir",
    title: "Sultanbeyli Eski Eşya Nereye Atılır? Yerel Rehber",
    excerpt:
      "Sultanbeyli'de eski eşya ve mobilya tahliyesi: belediye hattı, hurdacı ve Fazlalıkat kapıdan alım seçenekleri.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Sultanbeyli'de yasal çözüm",
        body:
          "Eski koltuk, yatak ve beyaz eşyayı kaldırıma bırakmak cezai risk taşır. Belediye büyük atık hattı veya profesyonel tahliye doğru kanallardır.",
      },
      {
        heading: "Neden Fazlalıkat?",
        body:
          "Operasyon merkezimize yakın bölgede hızlı ekip yönlendirmesi yapılır. Eşyayı bulunduğu kattan alır, net fiyat verir, gizli ücret uygulamaz.",
      },
      {
        heading: "Daire ve depo boşaltma",
        body:
          "Kiracı çıkışı, miras sonrası ev ve depo temizliği tek seferde yapılabilir. Moloz varsa aynı ekiple taşınır.",
      },
      {
        heading: "İletişim",
        body:
          "WhatsApp'tan fotoğraf göndererek dakikalar içinde Sultanbeyli eşya tahliye teklifi alın. Aynı gün / ertesi gün randevu açılır.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Sultanbeyli bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Sultanbeyli içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Sultanbeyli genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "eski-koltuk-takimi-atma-ucreti",
    title: "Eski Koltuk Takımı Atma Ücreti 2026 | Ne Kadar?",
    excerpt:
      "3'lü koltuk, köşe takım ve kanepe atma ücreti 2026'da neye göre değişir? Kat, asansör ve ilçe faktörlerini açıklıyoruz.",
    date: "03 Ağu 2026",
    category: "Fiyat",
    image: "/images/blog/esyaatmaucreti.png",
    sections: [
      {
        heading: "Sabit fiyat neden yoktur?",
        body:
          "Tek kanepe ile 3+3+1 takım veya L köşe takım farklı hacim ve işçilik ister. Zemin kat asansörlü ile 5. kat asansörsüz aynı fiyat olamaz.",
      },
      {
        heading: "Fiyatı etkileyen 5 faktör",
        body:
          "1) Parça sayısı ve boyut, 2) Kat, 3) Asansör var/yok, 4) İlçe erişimi, 5) Aynı seferde ek eşya (yatak, dolap, beyaz eşya). Fotoğraf ile ön teklif en doğru yöntemdir.",
      },
      {
        heading: "Belediye ücretsiz ama...",
        body:
          "Ücretsiz belediye alımı çoğu zaman kapı önüne indirme ve uzun randevu ister. Zaman ve fiziksel yükü hesaba katınca profesyonel hizmet daha pratik olabilir.",
      },
      {
        heading: "Net teklif nasıl alınır?",
        body:
          "WhatsApp'a koltuk fotoğrafları, ilçe ve kat yazın. Fazlalıkat gizli ücret olmadan net fiyat verir; onayınızdan sonra ekip gelir.",
      },
    ],
  },
  {
    slug: "copatim-alternatifi-neden-fazlalikat",
    title: "Ücretli Eşya Tahliyede Doğru Firma Nasıl Seçilir?",
    excerpt:
      "İstanbul'da ücretli çöp/eşya atım firması seçerken bakmanız gerekenler: kapıdan alım, şeffaf fiyat, iki yaka kapsamı ve yasal bertaraf.",
    date: "03 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Kapıdan alım vaadi gerçek mi?",
        body:
          "Bazı firmalar 'alım' der ama eşyayı sokağa indirmenizi bekler. Sözleşmede / teklifte 'odadan / kattan alım' net yazılmalıdır. Fazlalıkat eşyayı bulunduğu yerden alır.",
      },
      {
        heading: "Tek yaka mı, tüm İstanbul mu?",
        body:
          "Sadece Avrupa veya sadece Anadolu odaklı firmalar acil taleplerde sizi bekletebilir. Fazlalıkat 39 ilçede hizmet verir.",
      },
      {
        heading: "Şeffaf fiyat kontrol listesi",
        body:
          "Kat, asansör, hacim ve ilçe sorulmadan verilen 'çok ucuz' teklifler sonradan şişebilir. Fotoğrafla net teklif + onay sonrası hareket eden ekipler tercih edilmelidir.",
      },
      {
        heading: "Bertaraf ve bağış",
        body:
          "Kullanılabilir eşya bağışa, geri dönüştürülebilir malzeme ayrıştırmaya yönlendirilmelidir. Sadece 'arabaya yükleyip götürme' yeterli değildir.",
      },
    ],
  },
  {
    slug: "eski-baza-nereye-atilir",
    title: "Eski Baza Nereye Atılır? Kapıdan Alım Rehberi",
    excerpt:
      "Eski baza, baza+şilte ve karyola İstanbul'da nereye atılır? Belediye, hurdacı ve kapıdan profesyonel alım seçeneklerini karşılaştırıyoruz.",
    date: "03 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/eskiyatak.png",
    sections: [
      {
        heading: "Baza neden ayrı bir sorun?",
        body:
          "Baza ve baza takımları yataktan daha hacimli ve ağırdır; sünger, ahşap/metal iskelet ve bazen çekmeceli gövde içerir. Hurdacılar çoğu zaman bazayı almaz çünkü hurda değeri düşüktür. Sokağa veya konteyner yanına bırakmak ise belediye yönetmeliklerine aykırıdır ve idari para cezası riski taşır.",
      },
      {
        heading: "Belediye büyük atık hattı",
        body:
          "İlçe belediyeleri veya Alo 153 üzerinden hacimli atık randevusu alınabilir. Ücretsiz olması avantajdır; ancak randevu günler sürebilir ve bazayı genellikle kapı önüne indirmeniz beklenir. Asansörsüz katlarda bu adım tek başına engel olur.",
      },
      {
        heading: "Baza + şilte + yatak birlikte mi?",
        body:
          "Çoğu taşınmada baza, şilte ve eski yatak aynı anda çıkar. Profesyonel tahliyede bunları tek seferde almak hem daha ucuz hem daha hızlıdır. Aynı randevuya dolap veya koltuk da eklenebilir.",
      },
      {
        heading: "Kapıdan alım süreci",
        body:
          "WhatsApp'tan baza fotoğrafı, ilçe, kat ve asansör bilgisini gönderin. Fazlalıkat net fiyat verir; onayınızdan sonra ekip adrese gelir, bazayı odadan alır ve yönetmeliğe uygun bertaraf veya geri dönüşüme yönlendirir. İstanbul Anadolu ve Avrupa Yakası'nda aynı gün / ertesi gün seçenekleri vardır.",
      },
      {
        heading: "Fiyatı ne etkiler?",
        body:
          "Tek baza ile çift kişilik baza+başlık seti farklı hacim ister. Kat sayısı, asansör yokluğu ve dar koridor işçilik ekler. En doğru yol fotoğrafla ön tekliftir; gizli ücret uygulanmaz.",
      },
    ],
  },
  {
    slug: "kiraci-tahliyesi-sonrasi-daire-temizligi",
    title: "Kiracı Tahliyesi Sonrası Daire Temizliği ve Eşya Boşaltma",
    excerpt:
      "Kiracı çıktı, geride koltuk yatak dolap mı kaldı? Tahliye sonrası daireyi hızla boşaltıp yeni kiracıya veya satışa hazır hale getirmenin yolları.",
    date: "03 Ağu 2026",
    category: "Taşınma",
    image: "/images/blog/kiracicikisindatemizlik.png",
    sections: [
      {
        heading: "Tahliye sonrası en sık senaryo",
        body:
          "Kiracı noter ile çıktıktan sonra dairede kullanılamaz koltuk, baza, kırık dolap, beyaz eşya veya depo birikimi kalabilir. Ev sahibi hem görüntü hem zaman baskısı yaşar; yeni kiralama veya satış ilanı için dairenin boş olması gerekir.",
      },
      {
        heading: "Ne yapmamalısınız?",
        body:
          "Eşyaları kaldırıma veya çöp konteynerine bırakmak zabıta cezası ve komşu şikâyeti riski taşır. 'Hurdacı ücretsiz alır' beklentisi de çoğu zaman boşa çıkar; süngerli mobilya ve yatak reddedilir, daire yine yarı dolu kalır.",
      },
      {
        heading: "Doğru sıra: fotoğraf → teklif → boşaltma → temizlik",
        body:
          "1) Odaların fotoğrafını çekin. 2) WhatsApp ile Fazlalıkat'tan teklif alın. 3) Aynı gün veya ertesi gün eşya tahliyesi planlayın. 4) Boşalan dairede derin temizlik ve küçük boya/tamirat ile teslime hazır hale getirin. Bu sıra depozito ve yeniden kiralama sürecini kısaltır.",
      },
      {
        heading: "Site ve apartman kuralları",
        body:
          "Birçok sitede yük asansörü saati ve araç giriş izni gerekir. Profesyonel ekip randevuyu bu kurallara göre ayarlar; koridor ve asansörü temiz bırakır.",
      },
      {
        heading: "Fazlalıkat ile tahliye sonrası çözüm",
        body:
          "İstanbul'un her iki yakasında kiracıdan kalan eşyayı kapıdan alıyor, daireyi boş teslime yaklaştırıyoruz. Moloz veya depo varsa aynı seferde planlanabilir. İlgili rehber: kiracı eşya bıraktı ne yapmalı ve kiracı çıkışı temizlik yazılarımız.",
      },
    ],
  },
  {
    slug: "besiktas-hurda-mobilya-alanlar",
    title: "Beşiktaş Hurda Mobilya Alanlar | Koltuk, Yatak, Baza Toplama",
    excerpt:
      "Beşiktaş'ta hurda mobilya, eski koltuk, yatak ve baza için kapıdan alım. Levent, Etiler, Bebek, Ortaköy ve tüm mahallelerde aynı gün seçenek.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/besiktaseskiesya.png",
    sections: [
      {
        heading: "Beşiktaş'ta 'hurda mobilya alan' ne demek?",
        body:
          "Arama yapanlar genelde eski koltuk, baza, dolap ve işe yaramayan mobilyayı evden çıkartacak adres arar. Klasik hurdacı metal değeri olmayan süngerli eşyayı almaz. Fazlalıkat Beşiktaş'ta bu eşyaları daireden alıp bertaraf veya bağışa yönlendirir — ücretli, net fiyatlı, kapıdan.",
      },
      {
        heading: "Levent, Etiler, Bebek, Ortaköy",
        body:
          "Rezidans ve site yoğun bölgelerde yönetim kuralları, yük asansörü rezervasyonu ve dar otopark planlamayı etkiler. Randevuyu buna göre kuruyoruz. Bebek ve Ortaköy'ün dar sokaklarında uygun araç seçimi kritiktir.",
      },
      {
        heading: "Neleri alıyoruz?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri. Hacimli çöp ve küçük tadilat molozu da aynı seferde değerlendirilebilir.",
      },
      {
        heading: "Belediye vs profesyonel alım",
        body:
          "Belediye hattı ücretsiz olabilir ama eşyayı kapıya indirmek size kalır ve randevu gecikebilir. Acil taşınma veya asansörsüz katlarda kapıdan alım daha pratiktir.",
      },
      {
        heading: "Teklif nasıl alınır?",
        body:
          "WhatsApp'a 'Beşiktaş' + mahalle + kat + fotoğraf yazın. Dakikalar içinde fiyat alırsınız. Detay için Beşiktaş eşya tahliye sayfamız ve eski baza rehberimize de bakabilirsiniz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Beşiktaş bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Beşiktaş içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Beşiktaş genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "eski-hali-nereye-atilir",    title: "Eski Halı Nereye Atılır? Kapıdan Alım ve Bertaraf Rehberi",
    excerpt:
      "Eski halı, kilim ve runner İstanbul'da nereye atılır? Belediye, bağış ve profesyonel kapıdan alım seçeneklerini anlatıyoruz.",
    date: "03 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/eskiesyaattirmak.png",
    sections: [
      {
        heading: "Halıyı çöpe atmak doğru mu?",
        body:
          "Büyük halı ve kilimler konteynere sığmaz; kaldırıma bırakmak görüntü kirliliği ve zabıta cezası riski yaratır. Sentetik halılarda toz ve akar birikimi de çevre ve sağlık açısından kontrolsüz bertarafı istenmez.",
      },
      {
        heading: "Belediye ve bağış seçenekleri",
        body:
          "Bazı ilçe belediyeleri hacimli atık kapsamında halı alabilir; randevu ve kapı önüne indirme şartı çoğu zaman geçerlidir. Kullanılabilir durumdaki halılar sosyal yardım birimlerine veya vakıflara bağışlanabilir — kurumların kapasitesi sınırlıdır.",
      },
      {
        heading: "Halı + mobilya aynı seferde",
        body:
          "Taşınmada genelde halı, koltuk, baza ve dolap birlikte çıkar. Tek seferde profesyonel tahliye, ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      },
      {
        heading: "Kapıdan alım nasıl işler?",
        body:
          "WhatsApp'tan fotoğraf, ölçüye yakın bilgi, ilçe ve kat gönderin. Fazlalıkat halıyı daireden alır; Anadolu ve Avrupa Yakası'nda aynı gün / ertesi gün planlama yapılabilir. Gizli ücret yoktur.",
      },
      {
        heading: "İlgili rehberler",
        body:
          "Eski koltuk, eski baza ve ev boşaltma yazılarımızla birlikte okuyun. İlçenize özel sayfadan da WhatsApp teklifi açabilirsiniz.",
      },
    ],
  },
  {
    slug: "besiktas-eski-baza-nereye-atilir",
    title: "Beşiktaş Eski Baza Nereye Atılır? Aynı Gün Kapıdan Alım",
    excerpt:
      "Beşiktaş'ta eski baza, şilte ve karyola nasıl attırılır? Levent, Etiler, Bebek, Ortaköy dahil kapıdan alım rehberi.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/besiktaseskiesya.png",
    sections: [
      {
        heading: "Beşiktaş'ta baza sokağa bırakılır mı?",
        body:
          "Hayır. Hacimli atığın kaldırıma veya konteyner yanına bırakılması yasaktır. Belediye randevusu veya profesyonel kapıdan alım doğru kanallardır.",
      },
      {
        heading: "Levent–Etiler–Bebek farkı",
        body:
          "Rezidanslarda yük asansörü saati ve güvenlik kaydı gerekir; Bebek/Ortaköy'de dar sokak araç tipini etkiler. Fazlalıkat randevuyu bu koşullara göre planlar.",
      },
      {
        heading: "Baza + yatak + dolap",
        body:
          "Tek baza yerine oda boşaltma daha sık görülür. Karışık yükü tek seferde almak maliyeti düşürür. Hurdacılar bazayı çoğu zaman almaz.",
      },
      {
        heading: "Teklif ve randevu",
        body:
          "WhatsApp'a Beşiktaş mahallesi, kat, asansör ve fotoğraf yazın. Aynı gün / ertesi gün seçenekleri için fiyat anında netleşir. Detay: eski baza rehberi ve Beşiktaş hurda mobilya yazımız.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Beşiktaş bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Beşiktaş içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Beşiktaş genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "sisli-eski-baza-nereye-atilir",
    title: "Şişli Eski Baza Nereye Atılır? Kapıdan Alım Rehberi",
    excerpt:
      "Şişli'de eski baza ve yatak takımı nereye atılır? Mecidiyeköy, Nişantaşı, Osmanbey dahil aynı gün kapıdan alım.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/sisli.png",
    sections: [
      {
        heading: "Şişli'de yasal çözüm",
        body:
          "Eski bazayı sokağa bırakmak cezai risk taşır. Belediye hattı veya profesyonel tahliye tercih edilmelidir. Asansörsüz apartmanlarda kapıdan alım en pratik yoldur.",
      },
      {
        heading: "Nişantaşı ve Mecidiyeköy",
        body:
          "Yoğun trafik, site kuralları ve dar merdivenler planlamayı etkiler. Randevu saatini buna göre ayarlıyoruz; eşyayı odadan biz alıyoruz.",
      },
      {
        heading: "Fiyat sinyali",
        body:
          "Kat, asansör ve baza boyutu ücreti belirler. Fotoğraf ile ön teklif verilir; onay olmadan ekip yola çıkmaz.",
      },
      {
        heading: "Nasıl başlanır?",
        body:
          "WhatsApp'tan 'Şişli' + mahalle + fotoğraf gönderin. Şişli eşya toplama ve eski baza genel rehberlerimizle birlikte okuyabilirsiniz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Şişli bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Şişli içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Şişli genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "gungoren-eski-esya-toplama",
    title: "Güngören Eski Eşya Toplama | Ev Boşaltma ve Aynı Gün Alım",
    excerpt:
      "Güngören'de eski eşya toplama, koltuk-yatak-baza alımı ve daire boşaltma. Merter, Gençosman, Akıncılar dahil kapıdan hizmet.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/gungoren.png",
    sections: [
      {
        heading: "Toplama ile attırma aynı mı?",
        body:
          "Aramalarda 'eski eşya toplama' ve 'eski eşya attırma' aynı ihtiyacı ifade eder: eşyayı daireden çıkarıp yasal şekilde uzaklaştırmak. Fazlalıkat Güngören'de kapıdan alım yapar; siz merdivenden indirmezsiniz.",
      },
      {
        heading: "Hangi mahalleler?",
        body:
          "Merter, Gençosman, Akıncılar, Güneştepe ve çevre mahallelerde aynı gün / ertesi gün randevu değerlendirilir. Site giriş ve asansör kurallarına uyarız.",
      },
      {
        heading: "Neler toplanır?",
        body:
          "Koltuk, baza, yatak, dolap, beyaz eşya, hacimli çöp ve kiracıdan kalan karışık yük. Depo temizliği de aynı ekiple planlanabilir.",
      },
      {
        heading: "Teklif",
        body:
          "Fotoğraf + kat + mahalle bilgisiyle WhatsApp'tan net fiyat alın. Güngören eski eşya attırma yazımız ve ilçe tahliye sayfamızla birlikte inceleyin.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Güngören bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Güngören içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Güngören genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "kadikoy-eski-baza-nereye-atilir",
    title: "Kadıköy Eski Baza Nereye Atılır? Kapıdan Alım Rehberi",
    excerpt:
      "Kadıköy'de eski baza, şilte ve karyola nasıl attırılır? Moda, Göztepe, Caddebostan, Fenerbahçe dahil aynı gün kapıdan alım.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/eskiyatak.png",
    sections: [
      {
        heading: "Kadıköy'de bazayı sokağa bırakmak",
        body:
          "Moda, Caferağa, Fenerbahçe, Göztepe ve Caddebostan'da hacimli atığı kaldırıma bırakmak zabıta ve komşu şikâyeti riski taşır. Doğru kanal belediye hattı veya kapıdan profesyonel alımdır.",
      },
      {
        heading: "Dar apartman ve asansörsüz katlar",
        body:
          "Kadıköy'ün eski apartman stokunda asansörsüz üst katlar sık görülür. Baza ağır ve hacimlidir; merdivenden amatör indirme hasar ve yaralanma riski yaratır. Fazlalıkat bazayı odadan alır.",
      },
      {
        heading: "Baza + yatak + oda boşaltma",
        body:
          "Taşınmada baza genelde şilte ve eski yatakla birlikte çıkar. Tek seferde almak ayrı ayrı çözümden daha ekonomiktir. Koltuk veya dolap da aynı randevuya eklenebilir.",
      },
      {
        heading: "Teklif nasıl alınır?",
        body:
          "WhatsApp'a 'Kadıköy' + mahalle + kat + fotoğraf yazın. Aynı gün / ertesi gün seçenekleri için net fiyat alırsınız. Genel baza rehberi ve Kadıköy eski eşya yazımızla birlikte okuyun.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Kadıköy bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Kadıköy içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Kadıköy genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "uskudar-eski-esya-nereye-atilir",
    title: "Üsküdar Eski Eşya Nereye Atılır? Tahliye Rehberi",
    excerpt:
      "Üsküdar'da eski koltuk, yatak, baza ve dolap nereye atılır? Altunizade, Çengelköy, Kuzguncuk, Bağlarbaşı dahil kapıdan alım.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Üsküdar'da yasal çözüm",
        body:
          "Eski eşyayı konteyner yanına bırakmak yasaktır. Belediye büyük atık randevusu veya profesyonel kapıdan alım tercih edilmelidir. Yokuşlu ve tarihi sokaklarda taşıma planı kritiktir.",
      },
      {
        heading: "Altunizade, Çengelköy, Kuzguncuk",
        body:
          "Site yoğun Altunizade ile Boğaz mahallelerinin dar sokakları farklı araç ve ekip planı ister. Fazlalıkat randevuyu mahalle koşullarına göre ayarlar; eşyayı kattan alır.",
      },
      {
        heading: "Daire ve depo boşaltma",
        body:
          "Kiracı çıkışı, miras sonrası ev ve kiler/depo birikimleri tek seferde planlanabilir. Moloz varsa aynı ekiple değerlendirilir.",
      },
      {
        heading: "WhatsApp teklif",
        body:
          "Fotoğraf, mahalle ve kat bilgisiyle dakikalar içinde fiyat alın. Anadolu Yakası hub'ımızdan diğer ilçelere de geçebilirsiniz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Üsküdar bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Üsküdar içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Üsküdar genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "maltepe-eski-esya-nereye-atilir",
    title: "Maltepe Eski Eşya Nereye Atılır? Kapıdan Alım",
    excerpt:
      "Maltepe'de eski eşya, koltuk ve baza tahliyesi. Bağlarbaşı, Cevizli, Altayçeşme, Zümrütevler dahil aynı gün seçenek.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Maltepe'de hacimli atık",
        body:
          "Sahil hattı ve yoğun apartman dokusunda eski koltuk, baza ve beyaz eşya sık çıkar. Sokağa bırakmak cezai risk taşır; kapıdan alım en hızlı yasal çözümdür.",
      },
      {
        heading: "Mahalleler",
        body:
          "Bağlarbaşı, Cevizli, Altayçeşme ve Zümrütevler başta olmak üzere Maltepe geneline hizmet veriyoruz. Site asansör saatlerine uygun planlama yapılır.",
      },
      {
        heading: "Fiyat",
        body:
          "Hacim, kat ve asansör durumu ücreti belirler. Fotoğraf ile ön teklif; onayınız olmadan ekip yola çıkmaz.",
      },
      {
        heading: "Nasıl başlanır?",
        body:
          "WhatsApp'tan 'Maltepe' yazıp fotoğraf gönderin. Kartal ve Pendik komşu ilçe rehberlerimizle birlikte okuyabilirsiniz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Maltepe bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Maltepe içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Maltepe genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "kartal-eski-esya-nereye-atilir",
    title: "Kartal Eski Eşya Nereye Atılır? Ev Boşaltma Rehberi",
    excerpt:
      "Kartal'da eski eşya nereye atılır? Yakacık, Soğanlık ve kentsel dönüşüm bölgelerinde kapıdan tahliye.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Kartal'da doğru kanal",
        body:
          "Eski koltuk, baza ve dolabı kaldırıma bırakmak yasaktır. Belediye randevusu gecikebilir; acil boşaltmalarda profesyonel kapıdan alım tercih edilir.",
      },
      {
        heading: "Kentsel dönüşüm ve tadilat",
        body:
          "Yakacık–Soğanlık aksında dönüşüm ve tadilat molozu sık görülür. Eşya + moloz karışık yükü tek seferde planlanabilir.",
      },
      {
        heading: "Kapıdan alım",
        body:
          "Ekibimiz eşyayı odadan alır; asansörsüz katlarda da siz taşımazsınız. Aynı gün / ertesi gün randevu müsaitliğe göre açılır.",
      },
      {
        heading: "Teklif",
        body:
          "WhatsApp'a mahalle, kat ve fotoğraf gönderin. Maltepe ve Pendik yazılarımızla komşu ilçe seçeneklerini de görün.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Kartal bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Kartal içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Kartal genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "pendik-eski-esya-nereye-atilir",
    title: "Pendik Eski Eşya Nereye Atılır? Aynı Gün Tahliye",
    excerpt:
      "Pendik'te eski eşya, mobilya ve baza tahliyesi. Kaynarca, Bahçelievler, Güzelyalı, Yenişehir dahil kapıdan alım.",
    date: "03 Ağu 2026",
    category: "İlçe Rehberi",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Pendik'te eşya atma sorunu",
        body:
          "Sahil ve yoğun yerleşimde hacimli atık sokağa bırakıldığında hem ceza hem görüntü kirliliği oluşur. Yasal çözüm belediye hattı veya profesyonel tahliyedir.",
      },
      {
        heading: "Hizmet kapsamı",
        body:
          "Koltuk, baza, yatak, dolap, beyaz eşya, daire boşaltma ve depo temizliği. Kaynarca, Güzelyalı ve Yenişehir dahil Pendik geneline ulaşıyoruz.",
      },
      {
        heading: "Aynı gün planlama",
        body:
          "Kiracı çıkışı ve taşınma tarihlerinde müsaitlik durumuna göre aynı gün ekip yönlendirilir. Şeffaf fiyat, gizli ücret yok.",
      },
      {
        heading: "İletişim",
        body:
          "Fotoğraf + adres bilgisiyle WhatsApp teklifi alın. Anadolu Yakası eşya tahliye hub'ından tüm ilçe listesine ulaşabilirsiniz.",
      },
      {
        heading: "Süreç, fiyat ve WhatsApp teklifi",
        body:
          "Pendik bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. Pendik içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri Pendik genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }
    ],
  },
  {
    slug: "cope-koltuk-atmak-yasak-mi",
    title: "Çöpe Koltuk Atmak Yasak mı? Ceza Riski ve Yasal Alternatifler",
    excerpt:
      "İstanbul'da çöpe koltuk atmak yasak mı? Konteyner yanına bırakmanın cezası ve belediye / kapıdan alım alternatiflerini anlatıyoruz.",
    date: "03 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/belediye.png",
    sections: [
      {
        heading: "Kısa cevap: evet, gelişigüzel atmak yasaktır",
        body:
          "İlçe belediyelerinin emir ve yasak düzenlemelerinde hacimli atıkların (koltuk, yatak, dolap vb.) çöp konteynerine veya kaldırıma bırakılması genelde yasak kapsamındadır. Zabıta tespiti halinde idari para cezası uygulanabilir; yağmurda bekleyen mobilya hem görüntü kirliliği hem komşu şikâyeti üretir.",
      },
      {
        heading: "Belediye büyük / hacimli atık hattı",
        body:
          "Ücretsiz veya düşük maliyetli belediye toplama randevusu alınabilir (ilçeye göre Alo 153 veya ilçe hattı). Dezavantajı: bekleme süresi ve çoğu zaman eşyayı kapı önüne indirmeniz gerekmesi. Asansörsüz katlarda bu şart tek başına engel olur.",
      },
      {
        heading: "Profesyonel kapıdan alım",
        body:
          "Ücretli eşya tahliye hizmeti koltuğu bulunduğu odadan alır, aynı gün planlayabilir ve yönetmeliğe uygun bertaraf / bağış sürecini üstlenir. Ceza riskini ve fiziksel yükü birlikte kaldırır.",
      },
      {
        heading: "Ne yapmalısınız?",
        body:
          "1) Sokağa bırakmayın. 2) Belediye randevusunu veya WhatsApp ile Fazlalıkat teklifini karşılaştırın. 3) Fotoğraf + kat bilgisiyle net fiyat alın. İlgili: eski koltuk nereye atılır ve Alo 153 alternatifi yazılarımız.",
      },
    ],
  },
  {
    slug: "alo-153-buyuk-atik-randevu-alternatifi",
    title: "Alo 153 Büyük Atık Randevusu Alternatifi | Aynı Gün Kapıdan Alım",
    excerpt:
      "Alo 153 veya belediye büyük atık randevusu yetişmiyor mu? İstanbul'da aynı gün kapıdan eşya tahliye alternatifi nasıl çalışır?",
    date: "03 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/belediye.png",
    sections: [
      {
        heading: "Alo 153 ne işe yarar?",
        body:
          "İstanbul'da hacimli atık talebi için yaygın başlangıç noktalarından biri İBB Çözüm Merkezi / Alo 153'tür; süreç ilçeye göre değişir. Randevu verildiğinde genelde eşyayı kapı önüne hazırlamanız beklenir.",
      },
      {
        heading: "Ne zaman alternatif gerekir?",
        body:
          "Taşınma / noter tarihi yakınsa, asansör yoksa, kota veya randevu gecikiyorsa, karışık yük (koltuk+baza+dolap+moloz) varsa profesyonel kapıdan alım daha pratiktir.",
      },
      {
        heading: "Fazlalıkat alternatifi nasıl işler?",
        body:
          "WhatsApp'tan fotoğraf gönderirsiniz; dakikalar içinde net teklif alırsınız. Onay sonrası ekip adrese gelir, eşyayı kattan alır. Anadolu ve Avrupa Yakası'nda aynı gün / ertesi gün seçenekleri değerlendirilir.",
      },
      {
        heading: "Ücretli mi, ücretsiz mi?",
        body:
          "Belediye hattı çoğu senaryoda ücretsizdir ama zaman ve indirme yükü size kalır. Fazlalıkat ücretlidir; karşılığında hız, kapıdan alım ve şeffaf fiyattır. İkisi de yasal kanaldır — ihtiyaca göre seçin.",
      },
    ],
  },
  {
    slug: "eski-cek-yat-nereye-atilir",
    title: "Eski Çekyat Nereye Atılır? Kapıdan Alım Rehberi",
    excerpt:
      "Eski çekyat ve açılır kanepe İstanbul'da nereye atılır? Hurdacı almazsa ne yapılır? Belediye ve profesyonel tahliye seçenekleri.",
    date: "03 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/eskikoltukrehber.png",
    sections: [
      {
        heading: "Çekyat neden zor atılır?",
        body:
          "Çekyat hem koltuk hem yatak işlevi görür; sünger, metal iskelet ve mekanizma içerir. Hurdacılar çoğu zaman almaz. Konteynere sığmaz; sokağa bırakmak yasaktır.",
      },
      {
        heading: "Belediye vs kapıdan alım",
        body:
          "Belediye randevusu ücretsiz olabilir ama çekyatı kapıya indirmek size kalır. Dar koridor ve asansörsüz katlarda profesyonel ekip daha güvenlidir.",
      },
      {
        heading: "Çekyat + baza + koltuk",
        body:
          "Salon boşaltmalarında çekyat sıkça baza ve koltukla birlikte çıkar. Tek seferde tahliye maliyeti düşürür. Fotoğraf ile ön teklif alın.",
      },
      {
        heading: "Fazlalıkat süreci",
        body:
          "İlçe, kat, asansör ve fotoğrafı WhatsApp'a gönderin. Aynı gün planlama çoğu bölgede mümkündür. Eski koltuk ve eski baza rehberlerimizle birlikte okuyun.",
      },
    ],
  },
  {
    slug: "site-yonetimi-icin-esya-tahliye",
    title: "Site Yönetimi İçin Toplu Eşya Tahliye Hizmeti",
    excerpt:
      "Site ve apartman yönetimleri için ortak alan, depo ve dairelerden toplu eski eşya / çöp tahliyesi nasıl planlanır?",
    date: "03 Ağu 2026",
    category: "Hizmet",
    image: "/images/blog/kompleevbosatlmarehberi.png",
    sections: [
      {
        heading: "Yönetimlerin en sık sorunu",
        body:
          "Ortak depoda biriken eşya, tadilat artığı, terk edilmiş mobilya ve koridor engelleri hem güvenlik hem görüntü sorunudur. Tek tek sakinlere bırakmak süreci uzatır; toplu randevu daha verimlidir.",
      },
      {
        heading: "Nasıl planlanır?",
        body:
          "Yönetim fotoğraf veya envanter listesi gönderir; yük asansörü saati ve araç giriş izni netleştirilir. Fazlalıkat belirlenen günde birden fazla daire / depo noktasını sırayla tahliye edebilir.",
      },
      {
        heading: "Fiyatlandırma",
        body:
          "Toplam hacim, kat dağılımı ve nokta sayısına göre teklif verilir. Şeffaf fiyat; sürpriz ek ücret uygulanmaz. Fatura / dekont ihtiyacı için önceden belirtin.",
      },
      {
        heading: "İletişim",
        body:
          "WhatsApp'tan 'site yönetimi / toplu tahliye' yazıp site adı ve fotoğrafları gönderin. Depo ve çatı katı hub'larımız da yönetim taleplerine uygundur.",
      },
    ],
  },
  {
    slug: "tadilat-sonrasi-ev-bosaltma",
    title: "Tadilat Sonrası Ev Boşaltma ve Moloz Temizliği",
    excerpt:
      "Tadilat bitti, geride alçıpan, seramik, ambalaj ve eski mobilya mı kaldı? Ev boşaltma + moloz tahliyesini tek seferde planlayın.",
    date: "03 Ağu 2026",
    category: "Rehber",
    image: "/images/blog/moloz.png",
    sections: [
      {
        heading: "Tadilat sonrası tipik yük",
        body:
          "Sökülen mutfak dolabı, eski lavabo, alçıpan/seramik kırığı, boya kutusu, ambalaj ve kullanılmayan mobilya aynı anda birikir. Bunları konteynere atmak yasaktır; moloz ile eşya ayrı kanallarda da çözülebilir ama tek ekip daha hızlıdır.",
      },
      {
        heading: "Neden tek seferde?",
        body:
          "Ayrı hurdacı + ayrı moloz + kendi taşımanız hem maliyet hem zaman kaybettirir. Fazlalıkat eşya tahliye ve moloz atımını aynı randevuda planlayabilir; araç tipi hacme göre seçilir.",
      },
      {
        heading: "Site kuralları",
        body:
          "Birçok sitede tadilat saati ve moloz çıkış izni vardır. Randevuyu buna göre kurar, ortak alanları temiz bırakırız.",
      },
      {
        heading: "Teklif",
        body:
          "Oda / balkon fotoğrafları + ilçe + kat bilgisiyle WhatsApp'tan fiyat alın. Moloz atımı ve ev boşaltma sayfalarımızla birlikte inceleyin.",
      },
    ],
  },
];
