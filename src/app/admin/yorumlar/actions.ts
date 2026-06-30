"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteReview, setReviewStatus } from "@/lib/reviews-store";

function revalidatePublicPages() {
  revalidatePath("/");
  revalidatePath("/ev-bosaltma");
  revalidatePath("/moloz-atimi");
}

export async function approveReview(id: string, _formData: FormData) {
  try {
    await setReviewStatus(id, "approved");
  } catch (err) {
    console.error("approveReview failed:", err);
    redirect("/admin/yorumlar?error=1");
  }
  revalidatePath("/admin/yorumlar");
  revalidatePath("/admin");
  revalidatePublicPages();
}

export async function rejectReview(id: string, _formData: FormData) {
  try {
    await setReviewStatus(id, "rejected");
  } catch (err) {
    console.error("rejectReview failed:", err);
    redirect("/admin/yorumlar?error=1");
  }
  revalidatePath("/admin/yorumlar");
  revalidatePath("/admin");
  revalidatePublicPages();
}

export async function removeReview(id: string, _formData: FormData) {
  try {
    await deleteReview(id);
  } catch (err) {
    console.error("removeReview failed:", err);
    redirect("/admin/yorumlar?error=1");
  }
  revalidatePath("/admin/yorumlar");
  revalidatePath("/admin");
  revalidatePublicPages();
}
