import { BRAND, SERVICES } from "@/data/content";
import { DISTRICTS } from "@/data/districts";
import type { Review } from "@/lib/reviews-store";

export const SITE_URL = "https://fazlalikat.com";

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function blogCollectionSchema(posts: { title: string; slug: string; date: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fazlalıkat Blog",
    url: `${SITE_URL}/blog`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    provider: {
      "@type": "MovingCompany",
      name: BRAND.name,
      telephone: BRAND.phoneHref,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: opts.areaName ?? "İstanbul",
    },
    serviceType: "Eşya tahliye ve atık toplama",
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function organizationSchema(reviews?: Review[]) {
  const approved = reviews?.filter((r) => r.status === "approved" && r.rating > 0) ?? [];
  const aggregate =
    approved.length > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: Number(
              (
                approved.reduce((sum, r) => sum + r.rating, 0) / approved.length
              ).toFixed(1),
            ),
            reviewCount: approved.length,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {};

  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: BRAND.name,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo.png`,
    telephone: [BRAND.phoneHref, BRAND.phoneHref2],
    email: BRAND.email,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address,
      addressLocality: "Sultanbeyli",
      addressRegion: "İstanbul",
      postalCode: "34935",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9606,
      longitude: 29.2675,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: DISTRICTS.map((d) => ({
      "@type": "AdministrativeArea",
      name: `${d.name}, İstanbul`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tahliye Hizmetleri",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    ...aggregate,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: SITE_URL,
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      url: SITE_URL,
    },
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  const imageUrl = opts.image.startsWith("http") ? opts.image : `${SITE_URL}${opts.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: imageUrl,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: BRAND.name },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${opts.slug}`,
    },
  };
}
