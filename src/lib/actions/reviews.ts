"use server";

import { revalidatePath } from "next/cache";
import { addReview } from "@/lib/reviews-store";

export type SubmitReviewState = { success?: boolean; error?: string };

export async function submitReview(
  _prevState: SubmitReviewState,
  formData: FormData
): Promise<SubmitReviewState> {
  // Honeypot: a real visitor never fills this hidden field.
  if (String(formData.get("website") ?? "").trim() !== "") {
    return { success: true };
  }

  const name = String(formData.get("name") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim();
  const quote = String(formData.get("quote") ?? "").trim();
  const rating = Number(formData.get("rating") ?? 0);

  if (!name || !role || !quote) {
    return { error: "Lütfen tüm alanları doldurun." };
  }
  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return { error: "Lütfen 1-5 arasında bir puan seçin." };
  }

  try {
    await addReview({ name, role, quote, rating });
    revalidatePath("/admin/yorumlar");
    revalidatePath("/admin");
    return { success: true };
  } catch (err) {
    console.error("submitReview failed:", err);
    return { error: "Yorumunuz gönderilemedi, lütfen tekrar deneyin." };
  }
}
