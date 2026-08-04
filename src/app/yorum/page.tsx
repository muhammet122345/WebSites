import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewForm from "@/components/ReviewForm";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/data/content";
import { getApprovedReviews } from "@/lib/reviews-store";
import { breadcrumbSchema } from "@/lib/schema";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Yorum Yazın | Google ve Site Değerlendirmesi",
  description:
    "Fazlalıkat hizmetini değerlendirin. Google yorumu yerel sıralamada, site yorumu ise diğer müşterilere yardımcı olur.",
  alternates: { canonical: "/yorum" },
  robots: { index: true, follow: true },
};

export default async function YorumPage() {
  const reviews = await getApprovedReviews();
  const googleUrl = BRAND.googleReviewUrl;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "Yorum", url: "/yorum" },
        ])}
      />
      <Navbar />
      <main className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Değerlendirme
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Deneyiminizi <span className="text-gradient">paylaşın</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Memnun kaldıysanız iki yerde yorum bırakmanız hem bize hem yeni müşterilere yardımcı
            olur. Google yorumu yerel aramalarda öne çıkmamızı sağlar; site yorumu ise hizmet
            sayfalarımızda görünür.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-accent/30 bg-accent/5 p-6">
              <h2 className="font-display text-lg font-semibold">1. Google yorumu (öncelikli)</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Maps / Business Profile üzerinden 30 saniyelik yorum, İstanbul yerel
                sıralamasındaki en güçlü sinyaldir.
              </p>
              {googleUrl ? (
                <a
                  href={googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-[#06070a]"
                >
                  Google&apos;da yorum yaz
                </a>
              ) : (
                <p className="mt-4 text-xs text-muted">
                  Google linki yakında eklenecek. Şimdilik siteden yorum bırakabilirsiniz.
                </p>
              )}
              {BRAND.googleBusinessUrl ? (
                <p className="mt-3 text-xs text-muted">
                  <a
                    href={BRAND.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Google işletme profilimizi aç
                  </a>
                </p>
              ) : null}
            </div>

            <div className="rounded-3xl border border-line bg-background-elevated p-6">
              <h2 className="font-display text-lg font-semibold">2. Site yorumu</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Onay sonrası anasayfa ve hizmet sayfalarında yayınlanır.
              </p>
              <a
                href="#site-yorum"
                className="mt-5 inline-flex rounded-full border border-line px-6 py-3 text-sm text-muted hover:text-foreground"
              >
                Forma git
              </a>
            </div>
          </div>

          <div id="site-yorum" className="mt-12">
            <ReviewForm />
          </div>

          {reviews.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-2xl font-semibold">Son onaylı yorumlar</h2>
              <ul className="mt-6 space-y-4">
                {reviews.slice(0, 6).map((r) => (
                  <li key={r.id} className="rounded-2xl border border-line bg-background-elevated p-5">
                    <div className="text-xs text-accent">{"★".repeat(r.rating)}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">&ldquo;{r.quote}&rdquo;</p>
                    <p className="mt-3 text-xs text-muted">
                      {r.name} · {r.role}
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/#yorumlar" className="mt-4 inline-block text-sm text-accent hover:underline">
                Tüm yorumlar →
              </Link>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
