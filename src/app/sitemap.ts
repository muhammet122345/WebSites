import type { MetadataRoute } from "next";
import { DISTRICTS, districtPath } from "@/data/districts";
import { parsePostDate } from "@/data/blog-posts";
import { getAllBlogPosts } from "@/lib/blog-store";
import { getComboRoutes } from "@/lib/combo-routes";

const BASE_URL = "https://fazlalikat.com";

const CONTENT_LAST_UPDATED = new Date("2026-08-03");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const blogPosts = await getAllBlogPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/ev-bosaltma`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/moloz-atimi`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/depo-temizligi`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ofis-bosaltma`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cati-kati-temizligi`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/avrupa-yakasi-esya-tahliye`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/anadolu-yakasi-esya-tahliye`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/cop-atim-hizmeti`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ilceler`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/yorum`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "weekly", priority: 0.55 },
    { url: `${BASE_URL}/gizlilik-politikasi`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/kullanim-sartlari`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/cerez-politikasi`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];

  const districtRoutes: MetadataRoute.Sitemap = DISTRICTS.map((d) => ({
    url: `${BASE_URL}${districtPath(d)}`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => {
    const postDate = parsePostDate(p);
    return {
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: postDate.getTime() <= now.getTime() ? postDate : now,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  const comboRoutes: MetadataRoute.Sitemap = getComboRoutes().map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...districtRoutes, ...blogRoutes, ...comboRoutes];
}
