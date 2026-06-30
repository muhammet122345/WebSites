import AdminHeader from "../AdminHeader";
import DeleteButton from "../DeleteButton";
import ErrorBanner from "../ErrorBanner";
import { getAllReviews, type Review } from "@/lib/reviews-store";
import { approveReview, rejectReview, removeReview } from "./actions";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-accent-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-4 w-4"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, children }: { review: Review; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-background-elevated p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Stars rating={review.rating} />
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">&ldquo;{review.quote}&rdquo;</p>
          <p className="mt-3 text-sm font-medium">{review.name}</p>
          <p className="text-xs text-muted">
            {review.role} · {new Date(review.createdAt).toLocaleDateString("tr-TR")}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">{children}</div>
      </div>
    </div>
  );
}

export default async function AdminReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const [all, { error }] = await Promise.all([getAllReviews(), searchParams]);
  const pending = all.filter((r) => r.status === "pending");
  const approved = all.filter((r) => r.status === "approved");
  const rejected = all.filter((r) => r.status === "rejected");

  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-4xl">
        <AdminHeader active="/admin/yorumlar" />

        {error && (
          <ErrorBanner message="İşlem gerçekleştirilemedi. Depolama bağlantısında bir sorun olabilir — Vercel Blob bağlantısını ve son deploy'u kontrol edin." />
        )}

        <section>
          <h2 className="font-display text-xl font-semibold">
            Onay Bekleyenler <span className="text-muted">({pending.length})</span>
          </h2>
          <div className="mt-4 space-y-3">
            {pending.map((review) => (
              <ReviewCard key={review.id} review={review}>
                <form action={approveReview.bind(null, review.id)}>
                  <button
                    type="submit"
                    className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[#06070a]"
                  >
                    Onayla
                  </button>
                </form>
                <form action={rejectReview.bind(null, review.id)}>
                  <button
                    type="submit"
                    className="rounded-full border border-line px-4 py-2 text-sm text-muted hover:bg-white/5"
                  >
                    Reddet
                  </button>
                </form>
              </ReviewCard>
            ))}
            {pending.length === 0 && (
              <p className="text-sm text-muted">Onay bekleyen yorum yok.</p>
            )}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold">
            Yayındaki Yorumlar <span className="text-muted">({approved.length})</span>
          </h2>
          <div className="mt-4 space-y-3">
            {approved.map((review) => (
              <ReviewCard key={review.id} review={review}>
                <form action={removeReview.bind(null, review.id)}>
                  <DeleteButton
                    label="Yayından Kaldır"
                    confirmMessage="Bu yorumu yayından kaldırmak istediğinizden emin misiniz?"
                  />
                </form>
              </ReviewCard>
            ))}
            {approved.length === 0 && (
              <p className="text-sm text-muted">Henüz yayında yorum yok.</p>
            )}
          </div>
        </section>

        {rejected.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-xl font-semibold">
              Reddedilenler <span className="text-muted">({rejected.length})</span>
            </h2>
            <div className="mt-4 space-y-3">
              {rejected.map((review) => (
                <ReviewCard key={review.id} review={review}>
                  <form action={approveReview.bind(null, review.id)}>
                    <button
                      type="submit"
                      className="rounded-full border border-line px-4 py-2 text-sm text-muted hover:bg-white/5"
                    >
                      Yayınla
                    </button>
                  </form>
                  <form action={removeReview.bind(null, review.id)}>
                    <DeleteButton confirmMessage="Bu yorumu kalıcı olarak silmek istediğinizden emin misiniz?" />
                  </form>
                </ReviewCard>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
