import type { LucideIcon, LucideProps } from "lucide-react-native";
import { cn } from "tailwind-variants";
import { cssInterop } from "nativewind";

type IconProps = LucideProps & {
  as: LucideIcon;
};

function IconImpl({ as: IconComponent, ...props }: IconProps) {
  return <IconComponent {...props} />;
}

cssInterop(IconImpl, {
  className: {
    target: "style",
    nativeStyleToProp: {
      height: "size",
      width: "size",
    },
  },
});

export function Icon({
  as: IconComponent,
  className,
  size,
  ...props
}: IconProps) {
  return (
    <IconImpl
      as={IconComponent}
      className={cn("text-surface-foreground", className)}
      size={size}
      {...props}
    />
  );
}
