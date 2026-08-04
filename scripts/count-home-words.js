const fs = require("fs");

function extractStrings(src) {
  const out = [];
  const re = /"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'/g;
  let m;
  while ((m = re.exec(src))) out.push((m[1] ?? m[2]).replace(/\\n/g, " "));
  return out;
}

function wordCount(text) {
  return text
    .split(/\s+/)
    .filter((w) => /[A-Za-zĞğİıŞşÜüÖöÇçÀ-ÿ]/.test(w)).length;
}

const site = JSON.parse(fs.readFileSync("data/site-config.json", "utf8"));
function flatten(o, acc = []) {
  if (typeof o === "string") acc.push(o);
  else if (Array.isArray(o)) o.forEach((x) => flatten(x, acc));
  else if (o && typeof o === "object") Object.values(o).forEach((x) => flatten(x, acc));
  return acc;
}

const content = fs.readFileSync("src/data/content.ts", "utf8");
const districts = fs.readFileSync("src/data/districts.ts", "utf8");
const page = fs.readFileSync("src/app/page.tsx", "utf8");
const footer = fs.readFileSync("src/components/Footer.tsx", "utf8");
const hero = fs.readFileSync("src/components/Hero.tsx", "utf8");
const calc = fs.readFileSync("src/components/PriceCalculator.tsx", "utf8");
const process = fs.readFileSync("src/components/Process.tsx", "utf8");
const cta = fs.readFileSync("src/components/CTA.tsx", "utf8");
const services = fs.readFileSync("src/components/Services.tsx", "utf8");
const stats = fs.readFileSync("src/components/Stats.tsx", "utf8");
const gallery = fs.readFileSync("src/components/Gallery.tsx", "utf8");
const blog = fs.readFileSync("src/components/Blog.tsx", "utf8");
const nav = fs.readFileSync("src/components/Navbar.tsx", "utf8");
const testimonials = fs.readFileSync("src/components/Testimonials.tsx", "utf8");

// Content arrays used on homepage
function section(name) {
  const re = new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\n\\];`);
  const m = content.match(re);
  return m ? m[1] : "";
}

const districtNames = [...districts.matchAll(/name: "([^"]+)"/g)].map((m) => m[1]);

const parts = {
  heroConfig: wordCount(flatten(site.hero).join(" ")),
  servicesData: wordCount(extractStrings(section("SERVICES")).join(" ")),
  processData: wordCount(extractStrings(section("PROCESS_STEPS")).join(" ")),
  faqData: wordCount(extractStrings(section("FAQ")).join(" ")),
  testimonialsData: wordCount(extractStrings(section("TESTIMONIALS")).join(" ")),
  galleryData: wordCount(extractStrings(section("GALLERY")).join(" ")),
  brandNav: wordCount(extractStrings(section("NAV_LINKS") + section("BRAND") || "").join(" ") || extractStrings(content.match(/export const BRAND[\s\S]*?\};/)?.[0] || "").join(" ")),
  districtNamesFooter: wordCount(districtNames.join(" ")),
  uiChrome: wordCount(
    extractStrings(
      [page, footer, hero, calc, process, cta, services, stats, gallery, blog, nav, testimonials].join("\n"),
    ).join(" "),
  ),
};

// Blog on homepage shows 3 posts: title+excerpt roughly — use average from blog-posts first 3
const blogPosts = fs.readFileSync("src/data/blog-posts.ts", "utf8");
const titles = [...blogPosts.matchAll(/title: "([^"]+)"/g)].slice(0, 3).map((m) => m[1]);
const excerpts = [...blogPosts.matchAll(/excerpt:\s*\n?\s*"([^"]+)"/g)].slice(0, 3).map((m) => m[1]);
if (excerpts.length < 3) {
  // try single-line excerpts
  const ex2 = [...blogPosts.matchAll(/excerpt:\s*"((?:\\.|[^"\\])*)"/g)].slice(0, 3).map((m) => m[1]);
  parts.blogTeasers = wordCount([...titles, ...ex2].join(" "));
} else {
  parts.blogTeasers = wordCount([...titles, ...excerpts].join(" "));
}

const total =
  parts.heroConfig +
  parts.servicesData +
  parts.processData +
  parts.faqData +
  parts.testimonialsData +
  parts.galleryData +
  parts.brandNav +
  parts.districtNamesFooter +
  parts.blogTeasers +
  // UI chrome has code noise; discount
  Math.round(parts.uiChrome * 0.35);

console.log(JSON.stringify({ parts, estimatedVisibleWords: total }, null, 2));
