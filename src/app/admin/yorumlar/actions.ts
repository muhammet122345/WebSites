"use server";

import { revalidatePath } from "next/cache";
import { deleteReview, setReviewStatus } from "@/lib/reviews-store";

function revalidatePublicPages() {
  revalidatePath("/");
  revalidatePath("/ev-bosaltma");
  revalidatePath("/moloz-atimi");
}

export async function approveReview(id: string, _formData: FormData) {
  await setReviewStatus(id, "approved");
  revalidatePath("/admin/yorumlar");
  revalidatePath("/admin");
  revalidatePublicPages();
}

export async function rejectReview(id: string, _formData: FormData) {
  await setReviewStatus(id, "rejected");
  revalidatePath("/admin/yorumlar");
  revalidatePath("/admin");
  revalidatePublicPages();
}

export async function removeReview(id: string, _formData: FormData) {
  await deleteReview(id);
  revalidatePath("/admin/yorumlar");
  revalidatePath("/admin");
  revalidatePublicPages();
}
