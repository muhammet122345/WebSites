import type { MetadataRoute } from "next";
import { DISTRICTS, districtPath } from "@/data/districts";
import { BLOG_POSTS, parsePostDate } from "@/data/blog-posts";
import { getComboRoutes } from "@/lib/combo-routes";

const BASE_URL = "https://fazlalikat.com";

// Fixed reference date for routes without an inherent per-item date
// (district/combo pages). Bump this only when their shared content
// actually changes, so lastmod stays a meaningful freshness signal
// instead of "now" on every build.
const CONTENT_LAST_UPDATED = new Date("2026-06-29");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/ev-bosaltma`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/moloz-atimi`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ilceler`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/gizlilik-politikasi`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/kullanim-sartlari`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/cerez-politikasi`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];

  const districtRoutes: MetadataRoute.Sitemap = DISTRICTS.map((d) => ({
    url: `${BASE_URL}${districtPath(d)}`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => {
    const postDate = parsePostDate(p);
    return {
      url: `${BASE_URL}/blog/${p.slug}`,
      // Never report a lastmod in the future — clamp to now for posts dated ahead.
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
