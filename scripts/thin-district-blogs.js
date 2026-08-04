const fs = require("fs");
const path = require("path");
const src = fs.readFileSync(path.join(__dirname, "../src/data/blog-posts.ts"), "utf8");

const posts = [];
const blocks = src.split(/\n  \{\n    slug:/).slice(1);
for (const block of blocks) {
  const slug = (block.match(/^\s*"([^"]+)"/) || [])[1];
  const title = (block.match(/title:\s*"([^"]+)"/) || [])[1];
  const category = (block.match(/category:\s*"([^"]+)"/) || [])[1];
  const bodies = [...block.matchAll(/body:\s*\n?\s*"([^"]*)"/g)].map((x) => x[1]);
  const words = bodies.join(" ").split(/\s+/).filter(Boolean).length;
  const sectionCount = (block.match(/heading:/g) || []).length;
  posts.push({ slug, title, category, words, sectionCount });
}

const districtish = posts
  .filter(
    (p) =>
      p.category === "İlçe Rehberi" ||
      p.category === "Mahalle Rehberi" ||
      /-(eski-esya|cop-atim|hurda|attirma|toplama|nereye-atilir|esya-)/.test(p.slug),
  )
  .sort((a, b) => a.words - b.words);

console.log(
  JSON.stringify(
    {
      total: posts.length,
      districtish: districtish.length,
      thinnest: districtish.slice(0, 20),
      stats: {
        min: districtish[0]?.words,
        p50: districtish[Math.floor(districtish.length / 2)]?.words,
        max: districtish[districtish.length - 1]?.words,
      },
    },
    null,
    2,
  ),
);
