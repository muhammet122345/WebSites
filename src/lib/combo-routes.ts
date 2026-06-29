import { DISTRICTS, type District } from "@/data/districts";
import { ITEM_TYPES, type ItemType } from "@/data/item-types";

export const PRIORITY_DISTRICT_SLUGS = [
  "kadikoy",
  "uskudar",
  "besiktas",
  "sisli",
  "bagcilar",
  "basaksehir",
  "bahcelievler",
  "pendik",
  "umraniye",
  "maltepe",
  "atasehir",
  "beylikduzu",
];

export type ComboRoute = { district: District; itemType: ItemType; slug: string };

export function getComboRoutes(): ComboRoute[] {
  const priorityDistricts = DISTRICTS.filter((d) => PRIORITY_DISTRICT_SLUGS.includes(d.slug));
  const combos: ComboRoute[] = [];
  for (const district of priorityDistricts) {
    for (const itemType of ITEM_TYPES) {
      combos.push({ district, itemType, slug: `${district.slug}-${itemType.suffix}` });
    }
  }
  return combos;
}

export function resolveComboSlug(slug: string): ComboRoute | undefined {
  return getComboRoutes().find((c) => c.slug === slug);
}

export function getCombosForDistrict(districtSlug: string): ComboRoute[] {
  return getComboRoutes().filter((c) => c.district.slug === districtSlug);
}
