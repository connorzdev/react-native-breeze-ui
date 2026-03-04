import { Text as RNText } from "react-native";
import { ComponentProps } from "react";

export function Text({ children, ...props }: ComponentProps<typeof RNText>) {
  return <RNText {...props}>{children}</RNText>;
}
