const fs = require("fs");
const path = require("path");

// Lightweight CSV export without TS import (build-time friendly via duplicated data pull)
const growthPath = path.join(__dirname, "../src/data/growth.ts");
const src = fs.readFileSync(growthPath, "utf8");

// Extract ADS_KEYWORDS array body roughly by evaluating via dynamic import is better —
// use node with next/tsx unavailable: parse Final URLs from the TS source with regex.
const rows = [];
const re =
  /\{\s*campaign:\s*"([^"]+)",\s*adGroup:\s*"([^"]+)",\s*keyword:\s*"([^"]+)",\s*matchType:\s*"([^"]+)",\s*finalUrl:\s*`([^`]+)`\s*\}/g;
let m;
while ((m = re.exec(src))) {
  rows.push({
    campaign: m[1],
    adGroup: m[2],
    keyword: m[3],
    matchType: m[4],
    finalUrl: m[5].replace("${BASE}", "https://fazlalikat.com"),
  });
}

const escape = (v) => `"${String(v).replace(/"/g, '""')}"`;
const header = "Campaign,Ad group,Keyword,Criterion type,Final URL";
const lines = rows.map((r) =>
  [r.campaign, r.adGroup, r.keyword, r.matchType, r.finalUrl].map(escape).join(","),
);
const out = path.join(__dirname, "fazlalikat-google-ads-keywords.csv");
fs.writeFileSync(out, [header, ...lines].join("\n"), "utf8");
console.log(JSON.stringify({ rows: rows.length, out }));
