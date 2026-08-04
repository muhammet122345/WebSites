/**
 * Offline technical SEO audit for Fazlalıkat (Webproject).
 * Run: node scripts/seo-tech-audit.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");

function read(p) {
  return fs.readFileSync(p, "utf8");
}

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(tsx|ts|jsx|js)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

function extractSlugsFromBlogPosts(src) {
  const re = /slug:\s*"([^"]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}

function extractDistrictSlugs(src) {
  const re = /slug:\s*"([a-z0-9-]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) {
    // skip non-district like keys in same file — districts.ts only has district slugs in objects
    if (!["string"].includes(m[1])) out.push(m[1]);
  }
  return [...new Set(out)].filter((s) => !s.includes("_"));
}

function extractItemSuffixes(src) {
  const re = /suffix:\s*"([^"]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}

function extractHrefs(fileSrc) {
  const hrefs = [];
  const re = /href=\{?["'`](\/[^"'`?#]*)/g;
  let m;
  while ((m = re.exec(fileSrc))) hrefs.push(m[1]);
  return hrefs;
}

function pageHasCanonical(fileSrc) {
  return /canonical\s*:/.test(fileSrc);
}

function pageHasMetadata(fileSrc) {
  return /export const metadata|generateMetadata/.test(fileSrc);
}

const findings = [];
function add(sev, area, msg, fix) {
  findings.push({ sev, area, msg, fix });
}

// --- Inventory ---
const districtsSrc = read(path.join(SRC, "data/districts.ts"));
const itemsSrc = read(path.join(SRC, "data/item-types.ts"));
const blogSrc = read(path.join(SRC, "data/blog-posts.ts"));
const layoutSrc = read(path.join(SRC, "app/layout.tsx"));
const robotsSrc = read(path.join(SRC, "app/robots.ts"));
const sitemapSrc = read(path.join(SRC, "app/sitemap.ts"));

const districtSlugs = extractDistrictSlugs(districtsSrc);
const suffixes = extractItemSuffixes(itemsSrc);
const blogSlugs = extractSlugsFromBlogPosts(blogSrc);
const comboSlugs = [];
for (const d of districtSlugs) for (const s of suffixes) comboSlugs.push(`${d}-${s}`);

const districtPaths = districtSlugs.map((d) => `${d}-esya-tahliye`);
const staticPaths = [
  "/",
  "/ev-bosaltma",
  "/moloz-atimi",
  "/depo-temizligi",
  "/ofis-bosaltma",
  "/cati-kati-temizligi",
  "/avrupa-yakasi-esya-tahliye",
  "/anadolu-yakasi-esya-tahliye",
  "/cop-atim-hizmeti",
  "/ilceler",
  "/blog",
  "/hakkimizda",
  "/yorum",
  "/gizlilik-politikasi",
  "/kullanim-sartlari",
  "/cerez-politikasi",
];

const known = new Set([
  ...staticPaths,
  ...districtPaths.map((p) => `/${p}`),
  ...comboSlugs.map((p) => `/${p}`),
  ...blogSlugs.map((p) => `/blog/${p}`),
]);

// Root canonical issue
if (/canonical:\s*SITE_URL/.test(layoutSrc) || /canonical:\s*["']https:\/\/fazlalikat\.com["']/.test(layoutSrc)) {
  add(
    "critical",
    "canonical",
    "Root layout sets canonical to homepage URL. Pages without their own canonical (e.g. /ilceler) may inherit homepage as canonical — duplicate/self-cannibalization risk.",
    "Remove canonical from root layout; set it only on src/app/page.tsx (or each page).",
  );
}

// robots
if (!/disallow:\s*\[["']\/admin/.test(robotsSrc.replace(/\s+/g, ""))) {
  add("warn", "robots", "Admin disallow pattern check failed", "Verify robots.ts");
}
if (!/\/admin\//.test(robotsSrc) && !/\/admin/.test(robotsSrc)) {
  add("warn", "robots", "Admin not disallowed", "Add /admin to disallow");
} else {
  // suggest broader
  if (!robotsSrc.includes('"/admin/"') && !robotsSrc.includes("'/admin/'")) {
    add(
      "info",
      "robots",
      "robots disallows /admin — Next MetadataRoute may match prefix; confirm /admin/login is blocked.",
      "Prefer disallow: ['/admin', '/admin/'] explicitly if needed.",
    );
  }
}

// sitemap legal pages vs noindex
// Check pages missing canonical
const appPages = walk(path.join(SRC, "app")).filter((p) => p.endsWith("page.tsx") && !p.includes(`${path.sep}admin${path.sep}`));
for (const p of appPages) {
  const rel = path.relative(path.join(SRC, "app"), p).replace(/\\/g, "/");
  const src = read(p);
  if (rel === "page.tsx") continue; // home uses layout
  if (rel.startsWith("admin")) continue;
  if (!pageHasMetadata(src)) {
    add("warn", "metadata", `No metadata export: app/${rel}`, "Add title, description, canonical");
  } else if (!pageHasCanonical(src) && rel !== "page.tsx") {
    add("critical", "canonical", `Missing canonical: app/${rel}`, "Add alternates.canonical");
  }
}

// slug collisions
const allPublic = [...districtPaths, ...comboSlugs];
const seen = new Map();
for (const s of allPublic) {
  if (seen.has(s)) add("critical", "slug", `Duplicate route slug: ${s}`, "Deduplicate generateStaticParams");
  else seen.set(s, 1);
}
for (const s of allPublic) {
  if (staticPaths.includes(`/${s}`) || staticPaths.includes(s)) {
    add("critical", "slug", `Slug collides with static route: ${s}`, "Rename slug or static path");
  }
}
const blogDup = blogSlugs.filter((s, i) => blogSlugs.indexOf(s) !== i);
for (const s of [...new Set(blogDup)]) {
  add("critical", "slug", `Duplicate blog slug: ${s}`, "Fix blog-posts.ts");
}

// title uniqueness for combos — pattern based
const titleTemplate = /template:\s*"%s \| Fazlalıkat"/.test(layoutSrc);
if (!titleTemplate) add("warn", "title", "Missing title template", "Add template in layout");

// OG image
const ogPng = path.join(ROOT, "public/og-image.png");
const ogSvg = path.join(ROOT, "public/og-image.svg");
if (fs.existsSync(ogPng)) {
  if (layoutSrc.includes("og-image.svg")) {
    add("warn", "og", "Layout still references og-image.svg while PNG exists", "Point metadata to /og-image.png");
  }
} else if (fs.existsSync(ogSvg)) {
  add(
    "warn",
    "og",
    "OG image is SVG. Facebook/LinkedIn/Twitter often reject SVG — prefer PNG or JPG 1200×630.",
    "Export public/og-image.png and reference it in layout + pages.",
  );
} else {
  add("critical", "og", "No OG image in public/", "Add public/og-image.png (1200×630)");
}

// Internal href scan
const files = walk(SRC);
const broken = new Map();
const skipPrefixes = ["/admin", "/#", "/icon", "http", "tel:", "mailto:", "https:"];
for (const f of files) {
  if (f.includes(`${path.sep}admin${path.sep}`)) continue;
  const hrefs = extractHrefs(read(f));
  for (let h of hrefs) {
    if (skipPrefixes.some((p) => h.startsWith(p))) continue;
    if (h.includes("${") || h.includes("{")) continue;
    // normalize trailing slash
    if (h.length > 1 && h.endsWith("/")) h = h.slice(0, -1);
    if (h === "" || h === "/") continue;
    if (!known.has(h)) {
      const key = h;
      if (!broken.has(key)) broken.set(key, []);
      broken.get(key).push(path.relative(ROOT, f));
    }
  }
}

for (const [h, filesHit] of [...broken.entries()].sort()) {
  // allow dynamic districtPath constructions partially
  if (h.includes("esya-tahliye") || h.match(/^\/[a-z0-9-]+$/)) {
    // still report if not in known
  }
  add(
    "warn",
    "links",
    `Possible broken/unknown internal link: ${h} (from ${filesHit.slice(0, 3).join(", ")}${filesHit.length > 3 ? "…" : ""})`,
    "Fix href or add page to sitemap inventory",
  );
}

// admin noindex
const adminLayout = path.join(SRC, "app/admin/layout.tsx");
if (fs.existsSync(adminLayout)) {
  const a = read(adminLayout);
  if (!/noindex|robots:\s*\{\s*index:\s*false/.test(a)) {
    add(
      "warn",
      "admin",
      "Admin layout missing robots: { index: false }",
      "Add noindex metadata on admin layout even with robots.txt disallow",
    );
  }
} else {
  add("info", "admin", "No admin/layout.tsx — check admin/page metadata for noindex", "");
}

// homepage metadata
const homePage = read(path.join(SRC, "app/page.tsx"));
if (!/export const metadata|generateMetadata/.test(homePage)) {
  add(
    "info",
    "home",
    "Homepage relies on root layout metadata (OK if canonical fixed to home-only).",
    "",
  );
}

// standalone warning
const nextCfg = read(path.join(ROOT, "next.config.ts"));
if (/output:\s*["']standalone["']/.test(nextCfg)) {
  add(
    "info",
    "deploy",
    "next.config uses output:standalone — local `next start` warns; production should use node .next/standalone/server.js",
    "Document in deploy runbook",
  );
}

// summary counts
const sitemapEstimate = staticPaths.length + districtPaths.length + comboSlugs.length + blogSlugs.length;

const report = {
  inventory: {
    districts: districtSlugs.length,
    itemTypes: suffixes.length,
    combos: comboSlugs.length,
    blogs: blogSlugs.length,
    static: staticPaths.length,
    sitemapEstimate,
  },
  findings: findings.sort((a, b) => {
    const o = { critical: 0, warn: 1, info: 2 };
    return o[a.sev] - o[b.sev];
  }),
};

console.log(JSON.stringify(report, null, 2));
console.log("\n--- SUMMARY ---");
console.log(
  `critical=${findings.filter((f) => f.sev === "critical").length} warn=${findings.filter((f) => f.sev === "warn").length} info=${findings.filter((f) => f.sev === "info").length}`,
);
console.log(`sitemap≈${sitemapEstimate} URLs | districts=${districtSlugs.length} combos=${comboSlugs.length} blogs=${blogSlugs.length}`);
