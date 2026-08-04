const https = require("https");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0 SEOGap/1.0" } }, (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve({ status: res.statusCode, body: d, location: res.headers.location }));
      })
      .on("error", reject);
  });
}

function pathKey(url) {
  try {
    return decodeURIComponent(new URL(url).pathname)
      .replace(/\.html?$/i, "")
      .replace(/\/$/, "")
      .replace(/^\//, "")
      .toLowerCase();
  } catch {
    return url;
  }
}

function normalize(s) {
  return s
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractBlogSlugs(src) {
  const out = [];
  const re = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}

function extractDistrictSlugs(src) {
  const out = [];
  const re = /slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return [...new Set(out)];
}

function extractSuffixes(src) {
  const out = [];
  const re = /suffix:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}

function coverageScore(copatimKey, ourKeys) {
  const n = normalize(copatimKey.replace(/^blog\//, ""));
  if (ourKeys.has(n)) return { level: "exact", match: n };
  // partial: all significant tokens present in some our key
  const tokens = n.split("-").filter((t) => t.length > 2 && !["html", "hizmeti", "hizmet", "istanbul"].includes(t));
  let best = null;
  for (const k of ourKeys) {
    let hit = 0;
    for (const t of tokens) if (k.includes(t)) hit++;
    const ratio = tokens.length ? hit / tokens.length : 0;
    if (!best || ratio > best.ratio) best = { key: k, ratio, hit, tokens: tokens.length };
  }
  if (best && best.ratio >= 0.75) return { level: "strong", match: best.key, ratio: best.ratio };
  if (best && best.ratio >= 0.5) return { level: "partial", match: best.key, ratio: best.ratio };
  return { level: "gap", match: best?.key || null, ratio: best?.ratio || 0 };
}

(async () => {
  const { body: xml } = await get("https://copatim.com/sitemap.xml");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  fs.writeFileSync(path.join(__dirname, "copatim-urls.json"), JSON.stringify(locs, null, 2));

  const blogSrc = fs.readFileSync(path.join(ROOT, "src/data/blog-posts.ts"), "utf8");
  const distSrc = fs.readFileSync(path.join(ROOT, "src/data/districts.ts"), "utf8");
  const itemSrc = fs.readFileSync(path.join(ROOT, "src/data/item-types.ts"), "utf8");

  const blogs = extractBlogSlugs(blogSrc);
  const districts = extractDistrictSlugs(distSrc);
  const suffixes = extractSuffixes(itemSrc);

  const our = new Set([
    ...blogs.map(normalize),
    ...districts.map((d) => normalize(`${d}-esya-tahliye`)),
    ...districts.map((d) => normalize(`${d}-cop-atim`)),
    ...districts.map((d) => normalize(`${d}-cop-atim-hizmeti`)),
    ...districts.flatMap((d) => suffixes.map((s) => normalize(`${d}-${s}`))),
    ...[
      "ev-bosaltma",
      "moloz-atimi",
      "depo-temizligi",
      "ofis-bosaltma",
      "cati-kati-temizligi",
      "ilceler",
      "blog",
      "cop-atim-hizmeti-istanbul",
      "istanbul-avrupa-yakasi-cop-atim-hizmeti",
    ].map(normalize),
  ]);

  // also map common synonym covers we already have as blogs
  for (const b of blogs) {
    our.add(normalize(b));
    // without year
    our.add(normalize(b.replace(/-2026$/, "")));
  }

  const rows = locs.map((url) => {
    const key = pathKey(url);
    const kind = key.startsWith("blog/") ? "blog" : key === "" ? "home" : "page";
    const cov = coverageScore(key, our);
    return { url, key, kind, ...cov };
  });

  const gaps = rows.filter((r) => r.level === "gap");
  const partial = rows.filter((r) => r.level === "partial");
  const strong = rows.filter((r) => r.level === "strong" || r.level === "exact");

  // Unique topical gaps (dedupe by normalized topic without district)
  const gapTopics = gaps.map((g) => ({
    key: g.key,
    topic: g.key.replace(/^blog\//, ""),
    url: g.url,
    kind: g.kind,
    nearest: g.match,
    ratio: g.ratio,
  }));

  const report = {
    copatimTotal: locs.length,
    ourBlogs: blogs.length,
    ourDistricts: districts.length,
    ourCombos: districts.length * suffixes.length,
    coveredExactOrStrong: strong.length,
    partial: partial.length,
    gaps: gaps.length,
    gapList: gapTopics,
    partialList: partial.map((p) => ({ key: p.key, match: p.match, ratio: p.ratio })),
  };

  fs.writeFileSync(path.join(__dirname, "copatim-keyword-gap.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({
    copatimTotal: report.copatimTotal,
    coveredExactOrStrong: report.coveredExactOrStrong,
    partial: report.partial,
    gaps: report.gaps,
    gapList: report.gapList,
    partialList: report.partialList,
  }, null, 2));
})();
