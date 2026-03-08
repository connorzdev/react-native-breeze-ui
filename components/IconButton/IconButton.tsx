import { Pressable } from "react-native";
import { tv } from "tailwind-variants";
import { useMemo } from "react";
import { ComponentPropsWithRef } from "react";
import { useBreezeStyles } from "@/hooks/BreezeStylesProvider";
import type { IconButtonVariant, IconButtonSize, IconButtonSlotClasses, IconButtonTV } from "./iconButton.styles";
import { defaultIconButtonStyles } from "./iconButton.styles";
import { Icon } from "@/components/Icon";
import type { LucideIcon } from "lucide-react-native";

export type IconButtonProps = {
  icon: LucideIcon;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  classNames?: IconButtonSlotClasses;
} & ComponentPropsWithRef<typeof Pressable>;

export const IconButton = ({
  icon,
  variant,
  size,
  classNames,
  ...props
}: IconButtonProps) => {
  const { iconButton: s } = useBreezeStyles();

  const button = useMemo(
    () => tv(s as unknown as typeof defaultIconButtonStyles) as IconButtonTV,
    [s],
  );

  const { base, icon: iconClass } = button({ variant, size });

  return (
    <Pressable className={base({ className: classNames?.base })} {...props}>
      <Icon as={icon} className={iconClass({ className: classNames?.icon })} />
    </Pressable>
  );
};
