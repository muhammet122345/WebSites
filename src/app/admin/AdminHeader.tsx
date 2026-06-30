import Link from "next/link";
import { logout } from "./actions";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/yorumlar", label: "Yorumlar" },
  { href: "/admin/site", label: "Site Ayarları" },
];

export default function AdminHeader({ active }: { active: string }) {
  return (
    <div className="mb-10 flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Fazlalıkat Admin</h1>
        <p className="mt-1 text-sm text-muted">
          <Link href="/" target="_blank" className="underline hover:text-accent">
            Siteyi görüntüle
          </Link>
        </p>
        <nav className="mt-4 flex flex-wrap gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === item.href
                  ? "bg-accent font-semibold text-[#06070a]"
                  : "border border-line text-muted hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
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
  );
}
