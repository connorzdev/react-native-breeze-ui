import { createContext, useContext, type ReactNode } from "react";
import {
  defaultButtonStyles,
  type ButtonStyleConfig,
} from "@/components/Button/button.styles";
import {
  defaultTextStyles,
  type TextStyleConfig,
} from "@/components/Text/text.styles";
import {
  defaultIconButtonStyles,
  type IconButtonStyleConfig,
} from "@/components/IconButton";

type BreezeStyleOverrides = {
  button?: ButtonStyleConfig;
  iconButton?: IconButtonStyleConfig;
  text?: TextStyleConfig;
};

type BreezeContextValue = {
  button: ButtonStyleConfig;
  iconButton: IconButtonStyleConfig;
  text: TextStyleConfig;
};

const BreezeContext = createContext<BreezeContextValue>({
  button: defaultButtonStyles,
  iconButton: defaultIconButtonStyles,
  text: defaultTextStyles,
});

export function BreezeStylesProvider({
  children,
  styles = {},
}: {
  children: ReactNode;
  styles?: BreezeStyleOverrides;
}) {
  const button = styles.button ?? defaultButtonStyles;
  const iconButton = styles.iconButton ?? defaultIconButtonStyles;
  const text = styles.text ?? defaultTextStyles;

  return (
    <BreezeContext.Provider value={{ button, iconButton, text }}>
      {children}
    </BreezeContext.Provider>
  );
}

export function useBreezeStyles() {
  const ctx = useContext(BreezeContext);
  if (!ctx)
    throw new Error("useBreezeStyles must be used within BreezeStylesProvider");
  return ctx;
}
