import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BRAND } from "@/data/content";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">404</span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Bu sayfa <span className="text-gradient">bulunamadı.</span>
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Anasayfaya dönüp aradığınızı
          bulabilir veya bize doğrudan ulaşabilirsiniz.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-accent px-7 py-4 font-display text-sm font-semibold text-[#06070a] transition-transform hover:scale-105"
          >
            Anasayfaya Dön
          </Link>
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full glass px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
          <Link href="/ilceler" className="hover:text-foreground">
            İlçeler
          </Link>
          <span>·</span>
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <span>·</span>
          <Link href="/ev-bosaltma" className="hover:text-foreground">
            Ev Boşaltma
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
