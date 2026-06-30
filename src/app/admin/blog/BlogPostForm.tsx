"use client";

import { useActionState, useState } from "react";
import type { BlogPost } from "@/data/blog-posts";
import type { BlogFormState } from "./actions";

const CATEGORIES = [
  "Bölge Rehberi",
  "Mahalle Rehberi",
  "Rehber",
  "Taşınma",
  "Moloz",
  "Fiyatlandırma",
  "Karşılaştırma",
];

type SectionRow = { key: string; heading: string; body: string };

let rowCounter = 0;
function newRow(heading = "", body = ""): SectionRow {
  rowCounter += 1;
  return { key: `row-${rowCounter}-${Date.now()}`, heading, body };
}

export default function BlogPostForm({
  post,
  action,
  submitLabel,
  pendingLabel,
}: {
  post?: BlogPost;
  action: (prevState: BlogFormState, formData: FormData) => Promise<BlogFormState>;
  submitLabel: string;
  pendingLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, {} as BlogFormState);
  const [sections, setSections] = useState<SectionRow[]>(() =>
    post && post.sections.length > 0
      ? post.sections.map((s) => newRow(s.heading, s.body))
      : [newRow()]
  );

  function addSection() {
    setSections((rows) => [...rows, newRow()]);
  }
  function removeSection(key: string) {
    setSections((rows) => (rows.length > 1 ? rows.filter((r) => r.key !== key) : rows));
  }
  function updateSection(key: string, field: "heading" | "body", value: string) {
    setSections((rows) => rows.map((r) => (r.key === key ? { ...r, [field]: value } : r)));
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-muted" htmlFor="title">
            Başlık
          </label>
          <input
            id="title"
            name="title"
            required
            defaultValue={post?.title}
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-muted" htmlFor="slug">
            Slug (URL)
          </label>
          <input
            id="slug"
            name="slug"
            required
            pattern="[a-z0-9-]+"
            placeholder="erenkoy-esya-toplama-hizmeti"
            defaultValue={post?.slug}
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-muted" htmlFor="excerpt">
          Özet
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          required
          rows={2}
          defaultValue={post?.excerpt}
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-muted" htmlFor="category">
            Kategori
          </label>
          <input
            id="category"
            name="category"
            required
            list="category-options"
            defaultValue={post?.category}
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
          />
          <datalist id="category-options">
            {CATEGORIES.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="mb-2 block text-sm text-muted" htmlFor="image">
            Görsel URL
          </label>
          <input
            id="image"
            name="image"
            required
            placeholder="https://images.unsplash.com/... veya /images/..."
            defaultValue={post?.image}
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
          />
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm text-muted">Bölümler (başlık + metin)</label>
          <button
            type="button"
            onClick={addSection}
            className="rounded-full border border-line px-4 py-1.5 text-xs text-muted hover:bg-white/5"
          >
            + Bölüm Ekle
          </button>
        </div>
        <div className="space-y-4">
          {sections.map((row) => (
            <div key={row.key} className="rounded-2xl border border-line bg-white/[0.02] p-4">
              <div className="flex items-center justify-between gap-3">
                <input
                  name="sectionHeading"
                  required
                  placeholder="Bölüm başlığı"
                  value={row.heading}
                  onChange={(e) => updateSection(row.key, "heading", e.target.value)}
                  className="w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm outline-none focus:bg-white/10"
                />
                <button
                  type="button"
                  onClick={() => removeSection(row.key)}
                  className="shrink-0 rounded-full border border-line px-3 py-2 text-xs text-muted hover:bg-white/5"
                >
                  Kaldır
                </button>
              </div>
              <textarea
                name="sectionBody"
                required
                rows={3}
                placeholder="Bölüm metni"
                value={row.body}
                onChange={(e) => updateSection(row.key, "body", e.target.value)}
                className="mt-2 w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm outline-none focus:bg-white/10"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-accent px-7 py-3 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105 disabled:opacity-60"
        >
          {pending ? pendingLabel : submitLabel}
        </button>
        {state?.error && <span className="text-sm text-red-400">{state.error}</span>}
      </div>
    </form>
  );
}
