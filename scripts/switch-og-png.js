const fs = require("fs");
const path = require("path");

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

let files = 0;
for (const f of walk(path.join(__dirname, "../src"))) {
  let s = fs.readFileSync(f, "utf8");
  if (!s.includes("og-image.svg")) continue;
  fs.writeFileSync(f, s.replaceAll("og-image.svg", "og-image.png"));
  files++;
}

const schemaPath = path.join(__dirname, "../src/lib/schema.ts");
let schema = fs.readFileSync(schemaPath, "utf8");
schema = schema.replace(
  /image: `\$\{SITE_URL\}\/og-image\.png`,\n    logo: `\$\{SITE_URL\}\/og-image\.png`/,
  "image: `${SITE_URL}/og-image.png`,\n    logo: `${SITE_URL}/logo.png`",
);
schema = schema.replace(
  /url: `\$\{SITE_URL\}\/og-image\.png`/,
  "url: `${SITE_URL}/logo.png`",
);
fs.writeFileSync(schemaPath, schema);

console.log(JSON.stringify({ filesUpdated: files }));
