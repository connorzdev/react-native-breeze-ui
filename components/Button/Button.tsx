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
    size: {
      sm: "",
      md: "",
      lg: "",
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

export const Button = ({ variant, size, children, ...props }: ButtonProps) => {
  const { base, label } = button({ variant, size });
  const isIconButton = variant === "icon";

  return (
    <Pressable className={base()} {...props}>
      <Text selectable={false} className={label()}>
        {children}
      </Text>
    </Pressable>
  );
};

function CompoundButtonInner() {
  return (
    <>
      {/*Leading Slot*/}
      <Text selectable={false}></Text>
      {/*Trailing Slot*/}
    </>
  );
}

function IconButtonInner() {
  // return <>{icon child node}</>
}
