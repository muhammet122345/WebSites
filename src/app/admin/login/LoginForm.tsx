"use client";

import { useActionState } from "react";
import { login, type LoginState } from "../actions";

const initialState: LoginState = {};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="glass w-full max-w-sm rounded-3xl p-8">
      <h1 className="font-display text-xl font-semibold">Yönetici Girişi</h1>
      <p className="mt-1 text-sm text-muted">Fazlalıkat admin paneline giriş yapın.</p>

      <label className="mt-6 block text-sm text-muted" htmlFor="password">
        Şifre
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:bg-white/10"
      />

      {state?.error && <p className="mt-3 text-sm text-red-400">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {pending ? "Giriş yapılıyor..." : "Giriş Yap"}
      </button>
    </form>
  );
}
