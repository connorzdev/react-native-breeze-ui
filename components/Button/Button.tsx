import { Text, Pressable } from "react-native";
import { tv } from "tailwind-variants";
import { useMemo } from "react";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { useBreezeStyles } from "@/hooks/BreezeStylesProvider";
import type { ButtonVariant, ButtonSize, ButtonSlots } from "./button.styles";

export type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  classNames?: ButtonSlots;
}> &
  ComponentPropsWithRef<typeof Pressable>;

export const Button = ({
  variant,
  size,
  children,
  classNames,
  ...props
}: ButtonProps) => {
  const { button: s } = useBreezeStyles();

  const button = useMemo(
    () =>
      tv({
        slots: { base: s.base, label: s.label },
        variants: {
          variant: s.variants,
          size: s.sizes,
        },
        defaultVariants: {
          variant: s.defaultVariant,
          size: s.defaultSize,
        },
      }),
    [s],
  );

  const { base, label } = button({ variant, size });

  return (
    <Pressable className={base({ className: classNames?.base })} {...props}>
      <Text
        selectable={false}
        className={label({ className: classNames?.label })}
      >
        {children}
      </Text>
    </Pressable>
  );
};