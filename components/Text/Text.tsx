import { Text as RNText } from "react-native";
import { ComponentProps } from "react";

export type TextProps = ComponentProps<typeof RNText> & {
  className?: string;
};

export function Text({ children, className, ...props }: TextProps) {
  return (
    <RNText {...props} className={className}>
      {children}
    </RNText>
  );
}
