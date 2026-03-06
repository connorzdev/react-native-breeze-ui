import { cn, tv, type VariantProps } from "tailwind-variants";
import { Pressable, Text, View } from "react-native";
import { Icon } from "../Icon/Icon";
import { Check } from "lucide-react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useState } from "react";

export const checkbox = tv({
  slots: {
    base: "flex flex-row gap-2 items-center",
    indicatorBase: "flex border-2 rounded-md items-center justify-center p-0.5",
    indicator: "",
    label: "select-none",
  },
  variants: {
    checkboxType: {
      filled: {
        indicatorBase: "border-primary",
        indicator: "text-primary-foreground",
      },
      outline: {
        indicatorBase: "bg-transparent border-primary",
        indicator: "text-primary",
      },
    },
    checked: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      checkboxType: "filled",
      checked: true,
      class: { indicatorBase: "bg-primary" },
    },
    {
      checkboxType: "filled",
      checked: false,
      class: { indicatorBase: "bg-transparent" },
    },
  ],
  defaultVariants: {
    checkboxType: "filled",
  },
});

type CheckboxVariants = Omit<VariantProps<typeof checkbox>, "checked">;

export type CheckboxProps = CheckboxVariants & {
  label?: string | null;
  size?: number;
  isChecked?: boolean | null;
  disabled?: boolean | null;
  onChange?: (checked: boolean) => void;
};

export function Checkbox({
  isChecked,
  disabled,
  onChange,
  checkboxType,
  size = 20,
  label: labelValue,
}: CheckboxProps) {
  const { checked, toggle } = useCheckboxState({ isChecked, onChange });
  const { base, indicatorBase, indicator, label } = checkbox({
    checkboxType,
    checked,
  });

  return (
    <Pressable
      className={cn(base())}
      onPress={toggle}
      disabled={!!disabled}
      aria-disabled={!!disabled}
      aria-checked={checked}
      role="checkbox"
    >
      <View
        className={cn(indicatorBase())}
        style={{ width: size, height: size }}
      >
        {checked && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Icon
              as={Check}
              className={indicator()}
              size={Math.max(size - 4, 0)}
            />
          </Animated.View>
        )}
      </View>
      {labelValue && <Text className={label()}>{labelValue}</Text>}
    </Pressable>
  );
}

function useCheckboxState({
  isChecked,
  onChange,
}: Pick<CheckboxProps, "isChecked" | "onChange">) {
  const isControlled = isChecked != null;
  const [internalChecked, setInternalChecked] = useState(false);

  const checked = isControlled ? isChecked! : internalChecked;

  const toggle = () => {
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  return { checked, toggle };
}
