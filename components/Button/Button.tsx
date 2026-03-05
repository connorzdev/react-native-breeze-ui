import { Text, Pressable } from "react-native";
import { tv, type VariantProps } from "tailwind-variants";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

export const button = tv({
  slots: {
    base: "flex flex-row items-center justify-center px-6 py-4 min-w-[56px]",
    label: "",
  },
  variants: {
    variant: {
      primary: {
        base: "bg-primary active:opacity-60",
        label: "text-primary-foreground",
      },
      secondary: {
        base: "bg-secondary active:opacity-60",
        label: "text-secondary-foreground",
      },
    },
    size: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    isIconButton: {
      true: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = PropsWithChildren<ButtonVariants> &
  ComponentPropsWithRef<typeof Pressable>;

export const Button = ({
  variant,
  size,
  isIconButton,
  children,
  ...props
}: ButtonProps) => {
  const { base, label } = button({ variant, size, isIconButton });

  return (
    <Pressable className={base()} {...props}>
      <Text selectable={false} className={label()}>
        {children}
      </Text>
    </Pressable>
  );
};
