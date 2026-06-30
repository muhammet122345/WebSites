"use client";

export default function DeleteButton({
  label = "Sil",
  confirmMessage = "Bu kaydı silmek istediğinizden emin misiniz?",
}: {
  label?: string;
  confirmMessage?: string;
}) {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!confirm(confirmMessage)) {
          e.preventDefault();
        }
      }}
      className="rounded-full border border-red-500/30 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
    >
      {label}
    </button>
  );
}
