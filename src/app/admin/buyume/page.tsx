import AdminHeader from "../AdminHeader";
import CopyButton from "@/components/CopyButton";
import { BRAND } from "@/data/content";
import {
  ADS_KEYWORDS,
  GBP_CHECKLIST,
  REVIEW_REQUEST_TEMPLATES,
  adsKeywordsToCsv,
} from "@/data/growth";

export const dynamic = "force-dynamic";

function fillTemplate(body: string) {
  return body
    .replaceAll("{{GOOGLE_REVIEW_URL}}", BRAND.googleReviewUrl || "https://fazlalikat.com/yorum")
    .replaceAll("{{MUSTERI_ADI}}", "");
}

export default function AdminGrowthPage() {
  const csv = adsKeywordsToCsv();
  const csvHref = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;

  return (
    <div className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto max-w-5xl">
        <AdminHeader active="/admin/buyume" />

        <section className="mb-12 rounded-3xl border border-line bg-background-elevated p-6">
          <h2 className="font-display text-xl font-semibold">1) Google Business Profile</h2>
          <p className="mt-2 text-sm text-muted">
            Env: <code className="text-accent">NEXT_PUBLIC_GOOGLE_REVIEW_URL</code> ve{" "}
            <code className="text-accent">NEXT_PUBLIC_GOOGLE_BUSINESS_URL</code>. Şu an review linki:{" "}
            {BRAND.googleReviewUrl ? (
              <a href={BRAND.googleReviewUrl} className="text-accent hover:underline" target="_blank" rel="noreferrer">
                tanımlı
              </a>
            ) : (
              <span className="text-red-400">eksik</span>
            )}
          </p>
          <div className="mt-6 space-y-8">
            {GBP_CHECKLIST.map((group) => (
              <div key={group.group}>
                <h3 className="font-display text-sm font-semibold text-accent">{group.group}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-line bg-background-elevated p-6">
          <h2 className="font-display text-xl font-semibold">2) Yorum talep şablonları</h2>
          <p className="mt-2 text-sm text-muted">
            İş bitince müşteriye WhatsApp/SMS ile gönderin. Önce Google, sonra{" "}
            <a href="/yorum" className="text-accent hover:underline">
              /yorum
            </a>
            .
          </p>
          <div className="mt-6 space-y-6">
            {REVIEW_REQUEST_TEMPLATES.map((t) => {
              const text = fillTemplate(t.body);
              return (
                <div key={t.id} className="rounded-2xl border border-line p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-sm font-semibold">{t.label}</h3>
                    <CopyButton text={text} />
                  </div>
                  <pre className="mt-3 whitespace-pre-wrap text-xs leading-relaxed text-muted">{text}</pre>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-line bg-background-elevated p-6">
          <h2 className="font-display text-xl font-semibold">3) Google Ads keyword iskeleti</h2>
          <p className="mt-2 text-sm text-muted">
            {ADS_KEYWORDS.length} kelime · 7 kampanya. Google Ads Editor&apos;a CSV olarak aktarın.
            Exact/Phrase ağırlıklı; Broad ile başlamayın.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={csvHref}
              download="fazlalikat-google-ads-keywords.csv"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#06070a]"
            >
              CSV indir
            </a>
            <CopyButton text={csv} label="CSV kopyala" />
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-xs">
              <thead className="text-muted">
                <tr>
                  <th className="px-2 py-2">Campaign</th>
                  <th className="px-2 py-2">Ad group</th>
                  <th className="px-2 py-2">Keyword</th>
                  <th className="px-2 py-2">Match</th>
                  <th className="px-2 py-2">URL</th>
                </tr>
              </thead>
              <tbody>
                {ADS_KEYWORDS.map((r) => (
                  <tr key={`${r.campaign}-${r.adGroup}-${r.keyword}`} className="border-t border-line">
                    <td className="px-2 py-2">{r.campaign}</td>
                    <td className="px-2 py-2">{r.adGroup}</td>
                    <td className="px-2 py-2 text-foreground">{r.keyword}</td>
                    <td className="px-2 py-2">{r.matchType}</td>
                    <td className="px-2 py-2 text-muted">{r.finalUrl.replace("https://fazlalikat.com", "")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
