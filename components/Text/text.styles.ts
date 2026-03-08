import type { ClassValue } from "tailwind-variants";

export type TextVariant =
  | "display"
  | "title1"
  | "title2"
  | "title3"
  | "subtitle"
  | "headline"
  | "label"
  | "body"
  | "footnote"
  | "caption"
  | "error";

export type TextSlotClasses = {
  base?: ClassValue;
};

export type TextStyleConfig = {
  slots: { base: ClassValue };
  variants: {
    variant: Record<TextVariant, TextSlotClasses>;
  };
  defaultVariants: {
    variant: TextVariant;
  };
};

export const defaultTextStyles = {
  slots: {
    base: "text-foreground",
  },
  variants: {
    variant: {
      display: { base: "text-5xl font-light tracking-tight" },
      title1: { base: "text-4xl font-normal" },
      title2: { base: "text-3xl font-normal" },
      title3: { base: "text-2xl font-normal" },
      subtitle: { base: "text-xl font-medium" },
      headline: { base: "text-base font-semibold" },
      label: { base: "text-sm font-medium" },
      body: { base: "text-base font-normal" },
      footnote: { base: "text-sm font-normal" },
      caption: { base: "text-xs font-normal" },
      error: { base: "text-xs font-normal text-error" },
    },
  },
  defaultVariants: {
    variant: "body" as TextVariant,
  },
} satisfies TextStyleConfig;
