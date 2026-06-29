"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, createSessionToken, verifyPassword } from "@/lib/admin-auth";
import { getSiteConfig, saveSiteConfig, type SiteConfig } from "@/lib/site-config";

export type LoginState = { error?: string };

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");

  if (!verifyPassword(password)) {
    return { error: "Şifre yanlış." };
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/admin");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
  redirect("/admin/login");
}

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
    revalidatePath("/admin");

    return { success: true };
  } catch {
    return { error: "Kaydedilirken bir hata oluştu." };
  }
}
