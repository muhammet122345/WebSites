import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { getSiteConfig } from "@/lib/site-config";
import { BRAND } from "@/data/content";
import "./globals.css";

const SITE_URL = "https://fazlalikat.com";

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
    "Ev, ofis, depo ve çatı katlarınızdaki fazlalıklardan aynı gün kurtulun. Türkiye'nin profesyonel tahliye ve temizlik ekibi Fazlalıkat ile alanınızı yeniden kazanın.",
  keywords: [
    "eşya tahliye",
    "moloz atımı",
    "ev boşaltma",
    "depo temizliği",
    "çöp atımı",
    "eski eşya nereye atılır",
    "fazlalıkat",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Fazlalıkat",
    title: "Fazlalıkat | Ücretli Eşya, Moloz ve Çöp Tahliye Hizmeti",
    description:
      "Ev, ofis, depo ve çatı katlarınızdaki fazlalıklardan aynı gün kurtulun.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fazlalıkat | Ücretli Eşya, Moloz ve Çöp Tahliye Hizmeti",
    description:
      "Ev, ofis, depo ve çatı katlarınızdaki fazlalıklardan aynı gün kurtulun.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: BRAND.name,
  url: SITE_URL,
  telephone: BRAND.phoneHref,
  email: BRAND.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address,
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
  priceRange: "₺₺",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND.name,
  url: SITE_URL,
  inLanguage: "tr-TR",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { colors } = await getSiteConfig();

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
