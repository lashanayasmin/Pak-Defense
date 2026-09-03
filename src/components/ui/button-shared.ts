/**
 * Shared "button-like" styles used by both the `<Button>` (native button)
 * and `<ButtonLink>` (anchor) components.
 *
 * The component-specific variants (colors / sizes) intentionally live in
 * each component so a change to one never silently alters the other.
 */

export const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const buttonSizes = {
  default: "h-11 px-6",
  sm: "h-9 px-4 text-xs",
  icon: "h-10 w-10",
} as const;
