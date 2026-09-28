import type { HeroTone } from "@/components/page-hero";
import type { ForceSlug } from "@/lib/content/types";

export interface ForceTheme {
  /** Hero colour theme. */
  hero: HeroTone;
  /** Badge variant name. */
  chip: "army" | "navy" | "sky" | "gold";

  /* Card surfaces */
  wash: string;
  bar: string;
  tile: string;
  tileRing: string;
  iconInk: string;
  hoverBorder: string;
  hoverShadow: string;
  link: string;

  /* Solid accent, for numbers and pills */
  solid: string;
  solidInk: string;

  /* Soft accent, for tinted panels */
  softBg: string;
  softRing: string;
  softText: string;
}

/** Single source of truth for the colour identity of each category. */
export const FORCE_THEME: Record<ForceSlug, ForceTheme> = {
  army: {
    hero: "army",
    chip: "army",
    wash: "from-white via-white to-army-50/70",
    bar: "bg-gradient-to-r from-army-400 via-army-600 to-army-900",
    tile: "bg-gradient-to-br from-army-100 to-army-50",
    tileRing: "ring-army-200",
    iconInk: "text-army-800",
    hoverBorder: "hover:border-army-500",
    hoverShadow: "hover:shadow-army-300/50",
    link: "text-army-700",
    solid: "bg-army-600",
    solidInk: "text-white",
    softBg: "bg-army-50",
    softRing: "ring-army-200",
    softText: "text-army-800",
  },
  navy: {
    hero: "navy",
    chip: "navy",
    wash: "from-white via-white to-navy-50/70",
    bar: "bg-gradient-to-r from-navy-400 via-navy-600 to-navy-900",
    tile: "bg-gradient-to-br from-navy-100 to-navy-50",
    tileRing: "ring-navy-200",
    iconInk: "text-navy-800",
    hoverBorder: "hover:border-navy-500",
    hoverShadow: "hover:shadow-navy-300/50",
    link: "text-navy-700",
    solid: "bg-navy-700",
    solidInk: "text-white",
    softBg: "bg-navy-50",
    softRing: "ring-navy-200",
    softText: "text-navy-800",
  },
  airforce: {
    hero: "sky",
    chip: "sky",
    wash: "from-white via-white to-sky-50/70",
    bar: "bg-gradient-to-r from-sky-400 via-sky-600 to-sky-900",
    tile: "bg-gradient-to-br from-sky-100 to-sky-50",
    tileRing: "ring-sky-200",
    iconInk: "text-sky-800",
    hoverBorder: "hover:border-sky-500",
    hoverShadow: "hover:shadow-sky-300/50",
    link: "text-sky-700",
    solid: "bg-sky-700",
    solidInk: "text-white",
    softBg: "bg-sky-50",
    softRing: "ring-sky-200",
    softText: "text-sky-800",
  },
  colleges: {
    hero: "gold",
    chip: "gold",
    wash: "from-white via-white to-gold-50/70",
    bar: "bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700",
    tile: "bg-gradient-to-br from-gold-100 to-gold-50",
    tileRing: "ring-gold-200",
    iconInk: "text-gold-800",
    hoverBorder: "hover:border-gold-500",
    hoverShadow: "hover:shadow-gold-300/50",
    link: "text-gold-700",
    solid: "bg-gold-600",
    solidInk: "text-white",
    softBg: "bg-gold-50",
    softRing: "ring-gold-200",
    softText: "text-gold-800",
  },
};
