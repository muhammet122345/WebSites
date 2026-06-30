import crypto from "crypto";
import { readStore, writeStore } from "./blob-store";
import { TESTIMONIALS } from "@/data/content";

export type ReviewStatus = "pending" | "approved" | "rejected";

export type Review = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  status: ReviewStatus;
  createdAt: string;
};

const STORE_KEY = "reviews";

function seedReviews(): Review[] {
  return TESTIMONIALS.map((t, i) => ({
    id: `seed-${i}`,
    name: t.name,
    role: t.role,
    quote: t.quote,
    rating: t.rating,
    status: "approved" as const,
    createdAt: new Date("2026-01-01").toISOString(),
  }));
}

export async function getAllReviews(): Promise<Review[]> {
  return readStore<Review[]>(STORE_KEY, seedReviews());
}

export async function getApprovedReviews(): Promise<Review[]> {
  const all = await getAllReviews();
  return all.filter((r) => r.status === "approved");
}

export async function getPendingReviews(): Promise<Review[]> {
  const all = await getAllReviews();
  return all.filter((r) => r.status === "pending");
}

export type NewReviewInput = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export async function addReview(input: NewReviewInput): Promise<Review> {
  const all = await getAllReviews();
  const review: Review = {
    id: crypto.randomUUID(),
    name: input.name.trim().slice(0, 80),
    role: input.role.trim().slice(0, 80),
    quote: input.quote.trim().slice(0, 600),
    rating: Math.min(5, Math.max(1, Math.round(input.rating))),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  await writeStore(STORE_KEY, [review, ...all]);
  return review;
}

export async function setReviewStatus(id: string, status: ReviewStatus): Promise<void> {
  const all = await getAllReviews();
  const next = all.map((r) => (r.id === id ? { ...r, status } : r));
  await writeStore(STORE_KEY, next);
}

export async function deleteReview(id: string): Promise<void> {
  const all = await getAllReviews();
  await writeStore(STORE_KEY, all.filter((r) => r.id !== id));
}
