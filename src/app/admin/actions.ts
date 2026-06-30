"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, createSessionToken, verifyPassword } from "@/lib/admin-auth";

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
