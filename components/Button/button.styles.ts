import { tv } from "tailwind-variants";
import type { ClassValue } from "tailwind-variants";

export type ButtonVariant = "filled" | "outline" | "link" | "ghost";
export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonSlotClasses = {
  base?: ClassValue;
  label?: ClassValue;
  leading?: ClassValue;
  trailing?: ClassValue;
};

export type ButtonStyleConfig = {
  slots: {
    base: ClassValue;
    label: ClassValue;
    leading: ClassValue;
    trailing: ClassValue;
  };
  variants: {
    variant: Record<ButtonVariant, ButtonSlotClasses>;
    color: Record<ButtonColor, ButtonSlotClasses>;
    size: Record<ButtonSize, ButtonSlotClasses>;
  };
  compoundVariants: Array<{
    variant?: ButtonVariant;
    color?: ButtonColor;
    class: ButtonSlotClasses;
  }>;
  defaultVariants: {
    variant: ButtonVariant;
    color: ButtonColor;
    size: ButtonSize;
  };
};

export const defaultButtonStyles = {
  slots: {
    base: "flex flex-row items-center justify-center gap-2 min-w-[64px] rounded-lg",
    label: "text-foreground",
    leading: "",
    trailing: "",
  },
  variants: {
    variant: {
      filled: { base: "active:opacity-60" },
      outline: { base: "border active:opacity-60" },
      link: { base: "active:opacity-60 p-0 min-w-0" },
      ghost: { base: "active:opacity-60" },
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
    },
    size: {
      sm: { base: "px-2 py-1", label: "text-sm" },
      md: { base: "px-4 py-2 ", label: "text-base" },
      lg: { base: "px-6 py-3", label: "text-lg" },
    },
  },
  compoundVariants: [
    // filled — colored background + foreground text
    {
      variant: "filled",
      color: "primary",
      class: { base: "bg-primary", label: "text-primary-foreground" },
    },
    {
      variant: "filled",
      color: "secondary",
      class: { base: "bg-secondary", label: "text-secondary-foreground" },
    },
    {
      variant: "filled",
      color: "success",
      class: { base: "bg-success", label: "text-success-foreground" },
    },
    {
      variant: "filled",
      color: "warning",
      class: { base: "bg-warning", label: "text-warning-foreground" },
    },
    {
      variant: "filled",
      color: "error",
      class: { base: "bg-error", label: "text-error-foreground" },
    },
    // outline — colored border + colored text
    {
      variant: "outline",
      color: "primary",
      class: { base: "border-primary", label: "text-primary" },
    },
    {
      variant: "outline",
      color: "secondary",
      class: { base: "border-secondary", label: "text-secondary" },
    },
    {
      variant: "outline",
      color: "success",
      class: { base: "border-success", label: "text-success" },
    },
    {
      variant: "outline",
      color: "warning",
      class: { base: "border-warning", label: "text-warning" },
    },
    {
      variant: "outline",
      color: "error",
      class: { base: "border-error", label: "text-error" },
    },
    // ghost — tinted background + colored text
    {
      variant: "ghost",
      color: "primary",
      class: { base: "bg-primary/10", label: "text-primary" },
    },
    {
      variant: "ghost",
      color: "secondary",
      class: { base: "bg-secondary/10", label: "text-secondary" },
    },
    {
      variant: "ghost",
      color: "success",
      class: { base: "bg-success/10", label: "text-success" },
    },
    {
      variant: "ghost",
      color: "warning",
      class: { base: "bg-warning/10", label: "text-warning" },
    },
    {
      variant: "ghost",
      color: "error",
      class: { base: "bg-error/10", label: "text-error" },
    },
    // link — colored underlined text only
    {
      variant: "link",
      color: "primary",
      class: { label: "text-primary underline" },
    },
    {
      variant: "link",
      color: "secondary",
      class: { label: "text-secondary underline" },
    },
    {
      variant: "link",
      color: "success",
      class: { label: "text-success underline" },
    },
    {
      variant: "link",
      color: "warning",
      class: { label: "text-warning underline" },
    },
    {
      variant: "link",
      color: "error",
      class: { label: "text-error underline" },
    },
  ],
  defaultVariants: {
    variant: "filled" as ButtonVariant,
    color: "primary" as ButtonColor,
    size: "md" as ButtonSize,
  },
} satisfies ButtonStyleConfig;

// Type reference for tv() inference — exported as a type only
const _buttonTV = tv(defaultButtonStyles);
export type ButtonTV = typeof _buttonTV;
