import { Text as RNText } from "react-native";
import { ComponentProps, useMemo } from "react";
import { TextSlotClasses, TextVariant } from "@/components/Text/text.styles";
import { useBreezeStyles } from "@/hooks/BreezeStylesProvider";
import { tv } from "tailwind-variants";

export type TextProps = ComponentProps<typeof RNText> & {
  variant?: TextVariant;
  classNames?: TextSlotClasses;
};

export function Text({ variant, children, classNames, ...props }: TextProps) {
  const { text: s } = useBreezeStyles();
  const text = useMemo(() => tv(s), [s]);
  const { base } = text({ variant });

  return (
    <RNText {...props} className={base({ className: classNames?.base })}>
      {children}
    </RNText>
  );
}
