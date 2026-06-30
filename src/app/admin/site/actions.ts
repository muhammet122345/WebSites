"use server";

import { revalidatePath } from "next/cache";
import { getSiteConfig, saveSiteConfig, type SiteConfig } from "@/lib/site-config";

export type SaveState = { success?: boolean; error?: string };

export async function updateConfig(_prevState: SaveState, formData: FormData): Promise<SaveState> {
  try {
    const current = await getSiteConfig();

    const statValues = formData.getAll("statValue").map(String);
    const statLabels = formData.getAll("statLabel").map(String);
    const stats = statValues.map((value, i) => ({
      value,
      label: statLabels[i] ?? "",
    }));

    const next: SiteConfig = {
      colors: {
        background: String(formData.get("background") ?? current.colors.background),
        backgroundElevated: String(formData.get("backgroundElevated") ?? current.colors.backgroundElevated),
        foreground: String(formData.get("foreground") ?? current.colors.foreground),
        muted: String(formData.get("muted") ?? current.colors.muted),
        accent: String(formData.get("accent") ?? current.colors.accent),
        accent2: String(formData.get("accent2") ?? current.colors.accent2),
      },
      hero: {
        badge: String(formData.get("badge") ?? current.hero.badge),
        badge2: String(formData.get("badge2") ?? current.hero.badge2),
        headlineLine1: String(formData.get("headlineLine1") ?? current.hero.headlineLine1),
        headlineAccent: String(formData.get("headlineAccent") ?? current.hero.headlineAccent),
        headlineSuffix: String(formData.get("headlineSuffix") ?? current.hero.headlineSuffix),
        description: String(formData.get("description") ?? current.hero.description),
        ctaPrimary: String(formData.get("ctaPrimary") ?? current.hero.ctaPrimary),
        ctaSecondary: String(formData.get("ctaSecondary") ?? current.hero.ctaSecondary),
        stats: stats.length > 0 ? stats : current.hero.stats,
      },
    };

    await saveSiteConfig(next);
    revalidatePath("/");
    revalidatePath("/admin/site");

    return { success: true };
  } catch (err) {
    console.error("updateConfig failed:", err);
    return { error: "Kaydedilirken bir hata oluştu." };
  }
}
