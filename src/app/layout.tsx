import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { getSiteConfig } from "@/lib/site-config";
import { getApprovedReviews } from "@/lib/reviews-store";
import { organizationSchema, websiteSchema, SITE_URL } from "@/lib/schema";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fazlalıkat | Ücretli Eşya, Moloz ve Çöp Tahliye Hizmeti",
    template: "%s | Fazlalıkat",
  },
  description:
    "Ev, ofis, depo ve çatı katlarınızdaki fazlalıklardan aynı gün kurtulun. İstanbul Anadolu ve Avrupa Yakası'nda profesyonel eşya tahliye, moloz atımı ve çöp toplama — Fazlalıkat.",
  keywords: [
    "eşya tahliye",
    "moloz atımı",
    "ev boşaltma",
    "depo temizliği",
    "çöp atımı",
    "eski eşya nereye atılır",
    "eski koltuk nereye atılır",
    "ücretli eşya tahliye İstanbul",
    "fazlalıkat",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Fazlalıkat",
    title: "Fazlalıkat | Ücretli Eşya, Moloz ve Çöp Tahliye Hizmeti",
    description:
      "Ev, ofis, depo ve çatı katlarınızdaki fazlalıklardan aynı gün kurtulun. İstanbul geneli profesyonel tahliye.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fazlalıkat — Ücretli eşya, moloz ve çöp tahliye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fazlalıkat | Ücretli Eşya, Moloz ve Çöp Tahliye Hizmeti",
    description:
      "Ev, ofis, depo ve çatı katlarınızdaki fazlalıklardan aynı gün kurtulun.",
    images: ["/og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [{ colors }, reviews] = await Promise.all([
    getSiteConfig(),
    getApprovedReviews(),
  ]);

  return (
    <html
      lang="tr"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
      style={
        {
          "--background": colors.background,
          "--background-elevated": colors.backgroundElevated,
          "--foreground": colors.foreground,
          "--muted": colors.muted,
          "--accent": colors.accent,
          "--accent-2": colors.accent2,
        } as React.CSSProperties
      }
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VN8R73M6NP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VN8R73M6NP');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema(reviews)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <SmoothScroll>
          {children}
          <WhatsAppButton />
          <CallButton />
        </SmoothScroll>
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
