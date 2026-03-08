import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { Camera, Settings, Search, Heart, Star } from "lucide-react-native";
import { IconButton } from "./IconButton";

const meta = {
  title: "IconButton",
  component: IconButton,
  args: {
    icon: Camera,
  },
  argTypes: {
    variant: {
      options: ["filled", "outlined", "ghost"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: { icon: Settings, variant: "filled" },
};

export const Outlined: Story = {
  args: { icon: Search, variant: "outlined" },
};

export const Ghost: Story = {
  args: { icon: Heart, variant: "ghost" },
};

export const SizeSmall: Story = {
  args: { icon: Star, variant: "filled", size: "sm" },
};

export const SizeMedium: Story = {
  args: { icon: Star, variant: "filled", size: "md" },
};

export const SizeLarge: Story = {
  args: { icon: Star, variant: "filled", size: "lg" },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 12 }}>
      <IconButton icon={Settings} variant="filled" />
      <IconButton icon={Settings} variant="outlined" />
      <IconButton icon={Settings} variant="ghost" />
    </View>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
      <IconButton icon={Star} size="sm" />
      <IconButton icon={Star} size="md" />
      <IconButton icon={Star} size="lg" />
    </View>
  ),
};

export const ClassNamesOverride: Story = {
  args: {
    icon: Heart,
    variant: "filled",
    classNames: {
      base: "bg-error border-error",
      icon: "text-error-foreground",
    },
  },
};
