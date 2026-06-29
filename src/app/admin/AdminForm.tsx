"use client";

import { useActionState } from "react";
import { updateConfig, type SaveState } from "./actions";
import type { SiteConfig } from "@/lib/site-config";

const initialState: SaveState = {};

const COLOR_FIELDS: { key: keyof SiteConfig["colors"]; label: string }[] = [
  { key: "background", label: "Arka Plan" },
  { key: "backgroundElevated", label: "Arka Plan (Kart/Yüzey)" },
  { key: "foreground", label: "Yazı Rengi" },
  { key: "muted", label: "İkincil Yazı Rengi" },
  { key: "accent", label: "Vurgu Rengi (Lime)" },
  { key: "accent2", label: "Vurgu Rengi 2 (Amber)" },
];

export default function AdminForm({ config }: { config: SiteConfig }) {
  const [state, formAction, pending] = useActionState(updateConfig, initialState);

  return (
    <form action={formAction} className="space-y-10">
      <section className="glass rounded-3xl p-7">
        <h2 className="font-display text-lg font-semibold">Hero Bölümü</h2>
        <p className="mt-1 text-sm text-muted">Ana sayfanın en üstündeki başlık ve metinler.</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Üst Rozet Yazısı" name="badge" defaultValue={config.hero.badge} />
          <Field label="Birincil Buton Yazısı" name="ctaPrimary" defaultValue={config.hero.ctaPrimary} />
          <Field label="Başlık - 1. Satır" name="headlineLine1" defaultValue={config.hero.headlineLine1} />
          <Field label="İkincil Buton Yazısı" name="ctaSecondary" defaultValue={config.hero.ctaSecondary} />
          <Field
            label="Başlık - Vurgulu Kısım"
            name="headlineAccent"
            defaultValue={config.hero.headlineAccent}
          />
          <Field label="Başlık - Bitiş" name="headlineSuffix" defaultValue={config.hero.headlineSuffix} />
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm text-muted">Açıklama Metni</label>
          <textarea
            name="description"
            defaultValue={config.hero.description}
            rows={3}
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
          />
        </div>

        <div className="mt-6">
          <label className="mb-3 block text-sm text-muted">İstatistik Kutuları</label>
          <div className="space-y-3">
            {config.hero.stats.map((stat, i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                <input
                  name="statValue"
                  defaultValue={stat.value}
                  placeholder="Değer (örn. 12.450+)"
                  className="rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
                />
                <input
                  name="statLabel"
                  defaultValue={stat.label}
                  placeholder="Etiket (örn. Tamamlanan İş)"
                  className="rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass rounded-3xl p-7">
        <h2 className="font-display text-lg font-semibold">Site Renkleri</h2>
        <p className="mt-1 text-sm text-muted">Tüm sitede kullanılan tema renkleri.</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COLOR_FIELDS.map((field) => (
            <div key={field.key}>
              <label className="mb-2 block text-sm text-muted">{field.label}</label>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2">
                <input
                  type="color"
                  name={field.key}
                  defaultValue={config.colors[field.key]}
                  className="h-9 w-9 cursor-pointer rounded-lg border-0 bg-transparent"
                />
                <span className="text-sm text-foreground/80">{config.colors[field.key]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-accent px-7 py-3 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105 disabled:opacity-60"
        >
          {pending ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
        </button>
        {state?.success && <span className="text-sm text-accent">Kaydedildi.</span>}
        {state?.error && <span className="text-sm text-red-400">{state.error}</span>}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
}: {
  label: string;
  name: string;
  defaultValue: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-muted">{label}</label>
      <input
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
      />
    </div>
  );
}
