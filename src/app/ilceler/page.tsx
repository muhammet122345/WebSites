import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { DISTRICTS, districtPath } from "@/data/districts";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hizmet Verdiğimiz İstanbul İlçeleri",
  description:
    "Fazlalıkat, İstanbul'un Avrupa ve Anadolu yakasındaki tüm ilçelerinde eşya tahliye ve çöp atım hizmeti veriyor. Bölgenizi seçip detaylı bilgi alın.",
};

export default function DistrictsIndexPage() {
  const avrupa = DISTRICTS.filter((d) => d.side === "Avrupa");
  const anadolu = DISTRICTS.filter((d) => d.side === "Anadolu");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: "/" },
          { name: "İlçeler", url: "/ilceler" },
        ])}
      />
      <Navbar />
      <main className="px-6 pb-28 pt-32">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Hizmet Bölgesi
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            İstanbul&apos;un her ilçesinde
            <br />
            <span className="text-gradient">yanınızdayız.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            Aşağıdaki ilçelerden size en yakın olanı seçin; o bölgeye özel hizmet
            detaylarını ve anında WhatsApp&apos;tan teklif alma seçeneğini görün.
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 font-display text-lg font-semibold text-foreground/90">
                Avrupa Yakası
              </h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {avrupa.map((d) => (
                  <Link
                    key={d.slug}
                    href={districtPath(d)}
                    className="rounded-xl bg-white/5 px-4 py-3 text-sm text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-5 font-display text-lg font-semibold text-foreground/90">
                Anadolu Yakası
              </h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {anadolu.map((d) => (
                  <Link
                    key={d.slug}
                    href={districtPath(d)}
                    className="rounded-xl bg-white/5 px-4 py-3 text-sm text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
