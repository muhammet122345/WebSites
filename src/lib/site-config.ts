import { promises as fs } from "fs";
import path from "path";

export type SiteColors = {
  background: string;
  backgroundElevated: string;
  foreground: string;
  muted: string;
  accent: string;
  accent2: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroContent = {
  badge: string;
  headlineLine1: string;
  headlineAccent: string;
  headlineSuffix: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: HeroStat[];
};

export type SiteConfig = {
  colors: SiteColors;
  hero: HeroContent;
};

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  colors: {
    background: "#07080a",
    backgroundElevated: "#0d0f12",
    foreground: "#f5f6f3",
    muted: "#9aa0a6",
    accent: "#c6ff5e",
    accent2: "#f2b94d",
  },
  hero: {
    badge: "İstanbul Anadolu & Avrupa Yakası Premium Tahliye Hizmeti",
    headlineLine1: "Fazlalıklarınızdan",
    headlineAccent: "tek bir günde",
    headlineSuffix: "kurtulun.",
    description:
      "Ev, ofis, depo ve çatı katlarınızdaki fazlalıkları İstanbul'un Anadolu ve Avrupa Yakası'nın tamamında, sigortalı profesyonel ekibimizle aynı gün tahliye ediyoruz. İlçe, kat ve eşya sayısına göre şeffaf fiyatlandırma, çevre dostu bertaraf, kusursuz teslim.",
    ctaPrimary: "Ücretsiz Fiyat Al",
    ctaSecondary: "Nasıl Çalışır?",
    stats: [
      { value: "12.450+", label: "Tamamlanan İş" },
      { value: "4.9 / 5", label: "Müşteri Puanı" },
      { value: "1 Saat", label: "Ortalama Yanıt" },
    ],
  },
};

const CONFIG_PATH = path.join(process.cwd(), "data", "site-config.json");

function mergeConfig(partial: Partial<SiteConfig> | null): SiteConfig {
  if (!partial) return DEFAULT_SITE_CONFIG;
  return {
    colors: { ...DEFAULT_SITE_CONFIG.colors, ...partial.colors },
    hero: {
      ...DEFAULT_SITE_CONFIG.hero,
      ...partial.hero,
      stats:
        partial.hero?.stats && partial.hero.stats.length > 0
          ? partial.hero.stats
          : DEFAULT_SITE_CONFIG.hero.stats,
    },
  };
}

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const raw = await fs.readFile(CONFIG_PATH, "utf-8");
    const parsed = JSON.parse(raw) as Partial<SiteConfig>;
    return mergeConfig(parsed);
  } catch {
    return DEFAULT_SITE_CONFIG;
  }
}

export async function saveSiteConfig(config: SiteConfig): Promise<void> {
  await fs.mkdir(path.dirname(CONFIG_PATH), { recursive: true });
  await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
}
