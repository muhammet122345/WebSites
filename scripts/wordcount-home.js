const http = require("http");

function get(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

(async () => {
  const html = await get("http://127.0.0.1:3456/");
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  const mainText = strip(mainMatch ? mainMatch[0] : html);
  const bodyText = strip(html);
  console.log("main_words", mainText.split(/\s+/).filter(Boolean).length);
  console.log("body_words", bodyText.split(/\s+/).filter(Boolean).length);
  console.log("has_seo", html.includes("İstanbul Eşya Tahliye Rehberi"));
  console.log("has_compare", html.includes("Belediye mi, hurdacı mı"));
  console.log("has_kat", html.includes("Asansör"));
})();
