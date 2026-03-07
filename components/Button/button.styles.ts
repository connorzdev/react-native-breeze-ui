export type ButtonVariant =
  | "primary"
  | "secondary"
  | "error"
  | "outline"
  | "link"
  | "icon";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonSlots = {
  base?: string;
  label?: string;
};

export type ButtonStyleConfig = {
  base: string;
  label: string;
  variants: Record<ButtonVariant, ButtonSlots>;
  sizes: Record<ButtonSize, ButtonSlots>;
  defaultVariant: ButtonVariant;
  defaultSize: ButtonSize;
};

export const defaultButtonStyles: ButtonStyleConfig = {
  base: "flex flex-row items-center justify-center px-6 py-4 min-w-[128px]",
  label: "",
  variants: {
    primary: {
      base: "bg-primary active:opacity-60",
      label: "text-primary-foreground",
    },
    secondary: {
      base: "bg-secondary active:opacity-60",
      label: "text-secondary-foreground",
    },
    error: {
      base: "bg-error active:opacity-60",
      label: "text-error-foreground",
    },
    outline: {
      base: "border border-primary active:opacity-60",
      label: "text-primary",
    },
    link: {
      base: "active:opacity-60",
      label: "text-primary underline",
    },
    icon: {
      base: "w-[56px] h-[56px] rounded-full bg-surface border border-outline active:opacity-60",
    },
  },
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  defaultVariant: "primary",
  defaultSize: "md",
};