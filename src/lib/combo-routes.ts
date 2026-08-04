import { DISTRICTS, type District } from "@/data/districts";
import { ITEM_TYPES, type ItemType } from "@/data/item-types";

/** @deprecated Full matrix is used; kept for any legacy imports. */
export const PRIORITY_DISTRICT_SLUGS = DISTRICTS.map((d) => d.slug);

export type ComboRoute = { district: District; itemType: ItemType; slug: string };

export function getComboRoutes(): ComboRoute[] {
  const combos: ComboRoute[] = [];
  for (const district of DISTRICTS) {
    for (const itemType of ITEM_TYPES) {
      combos.push({
        district,
        itemType,
        slug: `${district.slug}-${itemType.suffix}`,
      });
    }
  }
  return combos;
}

export function resolveComboSlug(slug: string): ComboRoute | undefined {
  // Avoid building the full matrix on every lookup — parse slug instead.
  for (const itemType of ITEM_TYPES) {
    const suffix = `-${itemType.suffix}`;
    if (!slug.endsWith(suffix)) continue;
    const districtSlug = slug.slice(0, -suffix.length);
    const district = DISTRICTS.find((d) => d.slug === districtSlug);
    if (district) return { district, itemType, slug };
  }
  return undefined;
}

export function getCombosForDistrict(districtSlug: string): ComboRoute[] {
  const district = DISTRICTS.find((d) => d.slug === districtSlug);
  if (!district) return [];
  return ITEM_TYPES.map((itemType) => ({
    district,
    itemType,
    slug: `${district.slug}-${itemType.suffix}`,
  }));
}
