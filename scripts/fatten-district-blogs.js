/**
 * Append 3 SEO sections to İlçe / Mahalle / Bölge guide posts.
 * Idempotent via marker heading.
 */
const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "../src/data/blog-posts.ts");
const MARKER = "Süreç, fiyat ve WhatsApp teklifi";
const TARGET = new Set(["İlçe Rehberi", "Mahalle Rehberi", "Bölge Rehberi"]);

let src = fs.readFileSync(FILE, "utf8");

function placeNameFromTitle(title) {
  const cleaned = title.split("|")[0].trim();
  const m = cleaned.match(
    /^(.+?)(?:'de|'da|’de|’da)?(?:\s+Eski|\s+Çöp|\s+Hurda|\s+Eşya|\s+Ev\b)/,
  );
  if (m) return m[1].replace(/'de$|'da$|’de$|’da$/g, "").trim();
  return cleaned.split(/\s+/).slice(0, 2).join(" ");
}

function extras(place) {
  return `
      {
        heading: "${MARKER}",
        body:
          "${place} bölgesinde eşya tahliyesi için WhatsApp'a mahalle, kat, asansör durumu ve fotoğrafları gönderin. Dakikalar içinde net teklif alırsınız; onayınız olmadan ekip yola çıkmaz. Aynı gün veya ertesi gün randevu müsaitliğe göre açılır. Gizli ücret uygulanmaz.",
      },
      {
        heading: "Belediye hattı mı, kapıdan alım mı?",
        body:
          "Belediye büyük atık / hacimli atık hatları çoğu zaman ücretsizdir ancak randevu bekletebilir ve eşyayı kapı önüne indirmenizi isteyebilir. ${place} içinde asansörsüz kat, dar merdiven veya acil taşınma varsa profesyonel kapıdan alım hem daha hızlı hem daha güvenlidir. Hurdacılar süngerli koltuk, baza ve yatağı sıkça reddeder.",
      },
      {
        heading: "Hangi eşyalar tek seferde alınır?",
        body:
          "Koltuk takımı, kanepe, baza, yatak, dolap, gardırop, beyaz eşya, TV ve karışık ev boşaltma yükleri ${place} genelinde tek randevuda alınabilir. Depo / çatı katı birikimi veya küçük tadilat molozu varsa aynı ekiple planlanır; ayrı ayrı çözüm aramaktan daha ekonomiktir.",
      }`;
}

const startToken = "\n  {\n    slug: ";
const chunks = src.split(startToken);
const head = chunks[0];
const posts = chunks.slice(1);

let fattened = 0;
const next = posts.map((block) => {
  const title = (block.match(/title:\s*"([^"]+)"/) || [])[1] || "";
  const category = (block.match(/category:\s*"([^"]+)"/) || [])[1] || "";
  if (!TARGET.has(category) || block.includes(MARKER)) return block;

  const place = placeNameFromTitle(title).replace(/"/g, '\\"');
  const closeIdx = block.lastIndexOf("\n    ],");
  if (closeIdx === -1) return block;

  fattened++;
  return block.slice(0, closeIdx) + "," + extras(place) + block.slice(closeIdx);
});

fs.writeFileSync(FILE, head + startToken + next.join(startToken));
console.log(JSON.stringify({ fattened, posts: posts.length }));
