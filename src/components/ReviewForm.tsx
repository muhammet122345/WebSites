"use client";

import { useActionState, useState } from "react";
import { submitReview, type SubmitReviewState } from "@/lib/actions/reviews";

const initialState: SubmitReviewState = {};

function RatingInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`${n} yıldız`}
          className="p-0.5"
        >
          <svg
            viewBox="0 0 20 20"
            fill={n <= value ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
            className={`h-6 w-6 ${n <= value ? "text-accent-2" : "text-muted"}`}
          >
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function ReviewForm() {
  const [state, formAction, pending] = useActionState(submitReview, initialState);
  const [rating, setRating] = useState(5);

  if (state?.success) {
    return (
      <div className="rounded-3xl border border-line bg-background-elevated p-7 text-center">
        <p className="font-display text-base font-semibold">Teşekkürler!</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Yorumunuz alındı. İncelendikten sonra onaylanırsa bu sayfada yayınlanacak.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-3xl border border-line bg-background-elevated p-7">
      <h3 className="font-display text-base font-semibold">Bizi Değerlendirin</h3>
      <p className="mt-1 text-sm text-muted">
        Deneyiminizi paylaşın; onayladıktan sonra bu sayfada yayınlıyoruz.
      </p>

      {/* Honeypot — hidden from real users, bots tend to fill every field. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-muted" htmlFor="review-name">
            Adınız
          </label>
          <input
            id="review-name"
            name="name"
            required
            maxLength={80}
            placeholder="Adınız Soyadınız"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-muted" htmlFor="review-role">
            Konum
          </label>
          <input
            id="review-role"
            name="role"
            required
            maxLength={80}
            placeholder="İstanbul, Kadıköy"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm text-muted">Puanınız</label>
        <RatingInput value={rating} onChange={setRating} />
        <input type="hidden" name="rating" value={rating} />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm text-muted" htmlFor="review-quote">
          Yorumunuz
        </label>
        <textarea
          id="review-quote"
          name="quote"
          required
          maxLength={600}
          rows={4}
          placeholder="Deneyiminizi kısaca anlatın..."
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
        />
      </div>

      {state?.error && <p className="mt-3 text-sm text-red-400">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-5 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105 disabled:opacity-60"
      >
        {pending ? "Gönderiliyor..." : "Yorumu Gönder"}
      </button>
    </form>
  );
}
