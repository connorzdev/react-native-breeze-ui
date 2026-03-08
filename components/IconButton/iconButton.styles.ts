import { tv } from "tailwind-variants";
import type { ClassValue } from "tailwind-variants";

export type IconButtonVariant = "filled" | "outlined" | "ghost";

export type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonSlotClasses = {
  base?: ClassValue;
  icon?: ClassValue;
};

export type IconButtonStyleConfig = {
  slots: { base: ClassValue; icon: ClassValue };
  variants: {
    variant: Record<IconButtonVariant, IconButtonSlotClasses>;
    size: Record<IconButtonSize, IconButtonSlotClasses>;
  };
  defaultVariants: {
    variant: IconButtonVariant;
    size: IconButtonSize;
  };
};

export const defaultIconButtonStyles = {
  slots: {
    base: "items-center justify-center rounded-full active:opacity-60",
    icon: "",
  },
  variants: {
    variant: {
      filled: { base: "bg-surface border border-outline" },
      outlined: { base: "border border-primary" },
      ghost: { base: "" },
    },
    size: {
      sm: { base: "w-10 h-10", icon: "w-5 h-5" },
      md: { base: "w-14 h-14", icon: "w-6 h-6" },
      lg: { base: "w-16 h-16", icon: "w-7 h-7" },
    },
  },
  defaultVariants: {
    variant: "filled" as IconButtonVariant,
    size: "md" as IconButtonSize,
  },
} satisfies IconButtonStyleConfig;

// Type reference for tv() inference — exported as a type only
const _iconButtonTV = tv(defaultIconButtonStyles);
export type IconButtonTV = typeof _iconButtonTV;
