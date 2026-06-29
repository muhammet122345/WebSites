import Link from "next/link";
import { getSiteConfig } from "@/lib/site-config";
import { logout } from "./actions";
import AdminForm from "./AdminForm";

export default async function AdminPage() {
  const config = await getSiteConfig();

  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-semibold">Fazlalıkat Admin</h1>
            <p className="mt-1 text-sm text-muted">
              <Link href="/" target="_blank" className="underline hover:text-accent">
                Siteyi görüntüle
              </Link>
            </p>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-muted hover:bg-white/5"
            >
              Çıkış Yap
            </button>
          </form>
        </div>

        <AdminForm config={config} />
      </div>
    </div>
  );
}
