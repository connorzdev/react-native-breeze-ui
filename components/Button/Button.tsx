import { Pressable, View } from "react-native";
import { tv } from "tailwind-variants";
import { useMemo, type ReactNode } from "react";
import { ComponentPropsWithRef } from "react";
import { useBreezeStyles } from "@/hooks/BreezeStylesProvider";
import type {
  ButtonVariant,
  ButtonColor,
  ButtonSize,
  ButtonSlotClasses,
  ButtonTV,
} from "./button.styles";
import { defaultButtonStyles } from "./button.styles";
import { Text } from "@/components/Text";
import type { TextVariant } from "@/components/Text/text.styles";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  labelVariant?: TextVariant;
  leading?: ReactNode;
  trailing?: ReactNode;
  classNames?: ButtonSlotClasses;
} & ComponentPropsWithRef<typeof Pressable>;

export const Button = ({
  variant,
  color,
  size,
  children,
  labelVariant,
  leading,
  trailing,
  classNames,
  ...props
}: ButtonProps) => {
  const { button: s, text: t } = useBreezeStyles();

  const button = useMemo(
    () => tv(s as unknown as typeof defaultButtonStyles) as ButtonTV,
    [s],
  );

  const {
    base,
    label,
    leading: leadingClass,
    trailing: trailingClass,
  } = button({ variant, color, size });

  const effectiveLabelVariant = labelVariant ?? t.defaultVariants.variant;

  return (
    <Pressable className={base({ className: classNames?.base })} {...props}>
      {leading && (
        <View className={leadingClass({ className: classNames?.leading })}>
          {leading}
        </View>
      )}
      <Text
        selectable={false}
        variant={effectiveLabelVariant}
        classNames={{ base: label({ className: classNames?.label }) }}
      >
        {children}
      </Text>
      {trailing && (
        <View className={trailingClass({ className: classNames?.trailing })}>
          {trailing}
        </View>
      )}
    </Pressable>
  );
};
