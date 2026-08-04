import Link from "next/link";
import { DISTRICTS, districtPath } from "@/data/districts";

const COMPARE_ROWS = [
  {
    label: "Eşyayı daireden alır mı?",
    belediye: "Genelde hayır — kapı önüne indirmeniz gerekir",
    hurdaci: "Seçici — çoğu mobilyayı almaz",
    biz: "Evet — bulunduğu kattan alırız",
  },
  {
    label: "Aynı gün randevu",
    belediye: "Sıklıkla günler/haftalar",
    hurdaci: "Belirsiz",
    biz: "Çoğu bölgede aynı gün / ertesi gün",
  },
  {
    label: "Şeffaf fiyat",
    belediye: "Ücretsiz ama kısıtlı",
    hurdaci: "Pazarlık / belirsiz",
    biz: "Fotoğrafla net teklif, gizli ücret yok",
  },
  {
    label: "Moloz & hacimli atık",
    belediye: "Ayrı hat / kısıtlı",
    hurdaci: "Genelde hayır",
    biz: "Eşya + moloz + depo tek ekip",
  },
  {
    label: "Yasal risk",
    belediye: "Doğru kanal",
    hurdaci: "Sokak bırakma riski devam edebilir",
    biz: "Yönetmeliğe uygun bertaraf / bağış",
  },
];

const WHAT_WE_TAKE = [
  "Koltuk, kanepe, çekyat ve köşe takımları",
  "Yatak, baza, şilte ve baza setleri",
  "Dolap, gardırop, şifonyer, kitaplık",
  "Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın",
  "TV, elektronik ve küçük ev aletleri",
  "Ofis masası, sandalyesi, arşiv dolabı",
  "Depo / çatı katı / bodrum birikimleri",
  "Tadilat ve inşaat molozu (çuval–kamyon)",
  "Bahçe budama atığı ve yeşil alan temizliği",
  "Kiracıdan kalan veya miras sonrası ev eşyası",
];

const HOW_STEPS = [
  {
    title: "1. Fotoğraf ve adres bilgisi",
    body:
      "WhatsApp hattımıza eşya veya alan fotoğraflarını, ilçeyi, katı ve asansör durumunu yazın. İsterseniz sitedeki fiyat hesaplayıcıyı da kullanabilirsiniz. Bu bilgiler doğru araç ve ekip planı için yeterlidir.",
  },
  {
    title: "2. Dakikalar içinde net teklif",
    body:
      "Hacim, kat, asansör ve ilçeye göre şeffaf fiyat iletiriz. Onayınız olmadan ekip yola çıkmaz; keşif sonrası sürpriz ek ücret uygulamayız. Kullanılabilir eşyalarda bağış veya hurda değerlendirmesi de konuşulabilir.",
  },
  {
    title: "3. Kapıdan / odadan alım",
    body:
      "Anlaştığınız saatte sigortalı ekip gelir. Eşyaları siz kapıya indirmezsiniz — koltuk, dolap, beyaz eşya ve molozu bulunduğu yerden alırız. Asansörsüz binalarda merdiven indirme deneyimimiz vardır.",
  },
  {
    title: "4. Bertaraf, bağış veya geri dönüşüm",
    body:
      "Sağlam parçalar bağışa yönlendirilebilir; geri dönüştürülebilir malzemeler ayrıştırılır; kalan atıklar lisanslı tesislere veya döküm sahalarına yönetmeliğe uygun teslim edilir. Alanınızı kullanıma hazır bırakırız.",
  },
];

export default function HomeSeoContent() {
  const avrupa = DISTRICTS.filter((d) => d.side === "Avrupa");
  const anadolu = DISTRICTS.filter((d) => d.side === "Anadolu");

  return (
    <section className="relative px-6 py-28" aria-labelledby="seo-rehber-baslik">
      <div className="mx-auto max-w-7xl space-y-24">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            İstanbul Eşya Tahliye Rehberi
          </span>
          <h2
            id="seo-rehber-baslik"
            className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Eski eşya, mobilya ve moloz
            <br />
            <span className="text-gradient">nereye atılır?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            İstanbul&apos;da eski koltuk, yatak, dolap veya beyaz eşyayı çöp konteynerine ya da
            kaldırıma bırakmak yasaktır ve idari para cezasına yol açabilir. Belediye büyük atık
            hatları çoğu zaman randevu bekletir ve eşyayı kapı önüne indirmenizi ister. Hurdacılar
            ise süngerli mobilya ve yatak gibi ürünleri sıkça reddeder.{" "}
            <strong className="text-foreground">Fazlalıkat</strong>, Anadolu ve Avrupa Yakası&apos;nın
            tamamında eşyayı bulunduğu kattan alıp aynı gün veya ertesi gün tahliye eder; moloz,
            depo ve ofis boşaltmayı da tek ekiple çözer.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Ücretli eşya tahliye hizmeti; taşınma, kiracı çıkışı, miras sonrası ev boşaltma, tadilat
            molozu ve çatı katı temizliği gibi senaryolarda en hızlı yasal çözümdür. Fiyat; ilçe,
            kat, asansör ve hacme göre belirlenir — WhatsApp&apos;tan fotoğraf göndererek dakikalar
            içinde teklif alabilirsiniz. Detaylı süreçler için{" "}
            <Link href="/ev-bosaltma" className="text-accent hover:underline">
              ev boşaltma
            </Link>
            ,{" "}
            <Link href="/moloz-atimi" className="text-accent hover:underline">
              moloz atımı
            </Link>
            ,{" "}
            <Link href="/depo-temizligi" className="text-accent hover:underline">
              depo temizliği
            </Link>{" "}
            ve{" "}
            <Link href="/blog" className="text-accent hover:underline">
              rehber yazılarımıza
            </Link>{" "}
            göz atın.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Belediye mi, hurdacı mı, profesyonel tahliye mi?
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Doğru kanal ihtiyacınıza göre değişir. Aşağıdaki karşılaştırma, İstanbul&apos;da en sık
            sorulan &quot;eski eşya nereye atılır?&quot; sorusuna pratik yanıt verir.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-background-elevated text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Kriter</th>
                  <th className="px-4 py-3 font-medium">Belediye</th>
                  <th className="px-4 py-3 font-medium">Hurdacı</th>
                  <th className="px-4 py-3 font-medium text-accent">Fazlalıkat</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.label} className="border-t border-line">
                    <td className="px-4 py-3 font-medium text-foreground">{row.label}</td>
                    <td className="px-4 py-3 text-muted">{row.belediye}</td>
                    <td className="px-4 py-3 text-muted">{row.hurdaci}</td>
                    <td className="px-4 py-3 text-foreground">{row.biz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Neleri tahliye ediyoruz?
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Tek seferde karışık yük alabiliriz. Aşağıdaki liste sık talep edilen kalemlerdir;
              fotoğraf gönderdiğiniz her senaryoyu ayrıca değerlendiririz.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {WHAT_WE_TAKE.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Süreç nasıl işler?
            </h2>
            <div className="mt-6 space-y-6">
              {HOW_STEPS.map((step) => (
                <div key={step.title}>
                  <h3 className="font-display text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Fiyatı ne belirler? (2026)
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Sabit &quot;herkese aynı ücret&quot; yoktur. İstanbul&apos;da eşya atma ücreti; eşya
            hacmi ve türü (koltuk takımı vs. tek yatak), bulunduğu kat ve asansör durumu, ilçe /
            erişim (dar sokak, site kuralları), moloz varsa araç tipi (çuval, kamyonet, kamyon) ve
            aynı seferde alınacak ek kalemlere göre değişir.{" "}
            <Link href="/blog/esya-atma-ucreti-2026" className="text-accent hover:underline">
              Eşya atma ücreti 2026 rehberimizde
            </Link>{" "}
            ve{" "}
            <Link href="/blog/daire-bosaltma-fiyatlari-2026" className="text-accent hover:underline">
              daire boşaltma fiyatları
            </Link>{" "}
            yazımızda faktörleri ayrıntılı anlattık. En doğru yol: fotoğraf + ilçe + kat bilgisiyle
            WhatsApp teklifi.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Hacim & tür",
                b: "Koltuk takımı, dolap sökümü veya beyaz eşya sayısı fiyatı doğrudan etkiler.",
              },
              {
                t: "Kat / asansör",
                b: "Asansörsüz üst katlar işçilik ve süre ekler; bunu baştan söyleriz.",
              },
              {
                t: "İlçe & erişim",
                b: "Dar sokak, site randevusu veya plaza kuralları planlamayı etkiler.",
              },
              {
                t: "Moloz / karışık yük",
                b: "Eşya + moloz aynı seferde alınabilir; araç tipi maliyeti belirler.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-line bg-background-elevated p-5">
                <h3 className="font-display text-sm font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.b}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            İstanbul&apos;un her ilçesinde hizmet
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            39 ilçenin tamamında eşya tahliye, çöp atım, depo ve moloz hizmeti veriyoruz. İlçenize
            özel sayfadan mahalle detaylarını ve WhatsApp teklifini açabilirsiniz.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold">Avrupa Yakası</h3>
              <div className="flex flex-wrap gap-2">
                {avrupa.map((d) => (
                  <Link
                    key={d.slug}
                    href={districtPath(d)}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {d.name} eşya tahliye
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold">Anadolu Yakası</h3>
              <div className="flex flex-wrap gap-2">
                {anadolu.map((d) => (
                  <Link
                    key={d.slug}
                    href={districtPath(d)}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {d.name} eşya tahliye
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">
            Yaka hub&apos;ları:{" "}
            <Link href="/avrupa-yakasi-esya-tahliye" className="text-accent hover:underline">
              Avrupa Yakası eşya tahliye
            </Link>
            ,{" "}
            <Link href="/anadolu-yakasi-esya-tahliye" className="text-accent hover:underline">
              Anadolu Yakası eşya tahliye
            </Link>
            . Popüler long-tail:{" "}
            <Link href="/kadikoy-eski-koltuk-nereye-atilir" className="text-accent hover:underline">
              Kadıköy eski koltuk
            </Link>
            ,{" "}
            <Link href="/besiktas-eski-koltuk-nereye-atilir" className="text-accent hover:underline">
              Beşiktaş eski koltuk
            </Link>
            ,{" "}
            <Link href="/sisli-eski-yatak-nereye-atilir" className="text-accent hover:underline">
              Şişli eski yatak
            </Link>
            ,{" "}
            <Link href="/blog/eski-baza-nereye-atilir" className="text-accent hover:underline">
              eski baza nereye atılır
            </Link>
            ,{" "}
            <Link href="/sultanbeyli-esya-tahliye" className="text-accent hover:underline">
              Sultanbeyli eşya tahliye
            </Link>
            . Tüm liste:{" "}
            <Link href="/ilceler" className="text-accent hover:underline">
              ilçeler sayfası
            </Link>
            .
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-background-elevated p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Sokağa eşya bırakmanın riski
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Büyükşehir ve ilçe belediye yönetmeliklerinde hacimli atıkların konteyner yanına,
            kaldırıma veya boş arsaya bırakılması yasak kapsamındadır. Zabıta tespiti halinde idari
            para cezası uygulanabilir; yağmurda bekleyen mobilya hem görüntü kirliliği hem komşu
            şikâyeti üretir. Belediye hattı doğru bir seçenektir ancak eşyayı merdivenden indirmek
            sizin sorumluluğunuzda kalır. Profesyonel kapıdan alım, cezayı ve fiziksel yükü birlikte
            ortadan kaldırır. Daha fazla bilgi:{" "}
            <Link
              href="/blog/belediye-buyuk-esya-almiyor-ne-yapmali"
              className="text-accent hover:underline"
            >
              belediye büyük eşya almıyor mu?
            </Link>{" "}
            ve{" "}
            <Link href="/blog/eski-esya-attirmak-mumkun-mu" className="text-accent hover:underline">
              eski eşya attırmak mümkün mü?
            </Link>
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Kimler bu hizmeti kullanır?
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Taşınan aileler, kiracı çıkışını hızlandırmak isteyen ev sahipleri, miras sonrası evi
            boşaltan yakınlar, tadilat öncesi moloz temizliği yapanlar, ofis taşıyan şirketler ve
            site yönetimleri Fazlalıkat&apos;ı tercih eder. Ortak ihtiyaç: eşyayı merdivenden kendi
            başlarına indirmeden, yasal ve hızlı şekilde alandan çıkarmak. Özellikle asansörsüz
            binalarda ve acil noter / teslim tarihlerinde aynı gün planlama kritik hale gelir.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Hizmet yelpazemiz{" "}
            <Link href="/ev-bosaltma" className="text-accent hover:underline">
              ev / daire boşaltma
            </Link>
            ,{" "}
            <Link href="/moloz-atimi" className="text-accent hover:underline">
              inşaat molozu
            </Link>
            ,{" "}
            <Link href="/cop-atim-hizmeti" className="text-accent hover:underline">
              çöp atım hizmeti
            </Link>
            ,{" "}
            <Link href="/depo-temizligi" className="text-accent hover:underline">
              depo / bodrum
            </Link>
            ,{" "}
            <Link href="/ofis-bosaltma" className="text-accent hover:underline">
              ofis boşaltma
            </Link>{" "}
            ve{" "}
            <Link href="/cati-kati-temizligi" className="text-accent hover:underline">
              çatı katı temizliği
            </Link>{" "}
            ile sınırlı değildir; fotoğraf gönderdiğiniz her senaryoyu değerlendiririz. Rehber
            içeriklerimizde{" "}
            <Link href="/blog/eski-koltuk-nereye-atilir" className="text-accent hover:underline">
              eski koltuk nereye atılır
            </Link>
            ,{" "}
            <Link href="/blog/cope-koltuk-atmak-yasak-mi" className="text-accent hover:underline">
              çöpe koltuk yasak mı
            </Link>
            ,{" "}
            <Link href="/blog/alo-153-buyuk-atik-randevu-alternatifi" className="text-accent hover:underline">
              Alo 153 alternatifi
            </Link>
            ,{" "}
            <Link href="/blog/eski-yatak-nereye-atilir" className="text-accent hover:underline">
              eski yatak
            </Link>
            ,{" "}
            <Link href="/blog/asansorsuz-binadan-esya-indirme" className="text-accent hover:underline">
              asansörsüz indirme
            </Link>{" "}
            ve{" "}
            <Link href="/blog/ayni-gun-esya-tahliye-istanbul" className="text-accent hover:underline">
              aynı gün tahliye
            </Link>{" "}
            konularını ayrıntılı işledik.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Google&apos;da &quot;eski eşya nereye atılır&quot;, &quot;eşya atma ücreti&quot;,
            &quot;daire boşaltma fiyatları&quot; veya ilçe + eşya tipi aramalarında doğru bilgiye
            ulaşmak için hem ana sayfamızdaki rehberi hem de ilçe ve combo sayfalarımızı kullanın.
            Her sayfada WhatsApp teklif ve fiyat hesaplayıcıya tek tıkla ulaşabilirsiniz. Amaç;
            sizi cezai riskten, fiziksel yükten ve belirsiz fiyattan koruyarak alanı aynı gün
            kullanıma hazır hale getirmektir.
          </p>
        </div>
      </div>
    </section>
  );
}
