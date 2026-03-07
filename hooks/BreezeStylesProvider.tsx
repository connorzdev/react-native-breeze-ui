import { createContext, useContext, type ReactNode } from "react";
import {
  defaultButtonStyles,
  type ButtonStyleConfig,
} from "@/components/Button/button.styles";

type BreezeStyleOverrides = {
  button?: ButtonStyleConfig;
};

type BreezeContextValue = {
  button: ButtonStyleConfig;
};

const BreezeContext = createContext<BreezeContextValue>({
  button: defaultButtonStyles,
});

export function BreezeStylesProvider({
  children,
  styles = {},
}: {
  children: ReactNode;
  styles?: BreezeStyleOverrides;
}) {
  const button = styles.button ?? defaultButtonStyles;

  return (
    <BreezeContext.Provider value={{ button }}>
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