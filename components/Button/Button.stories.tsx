import type { Meta, StoryObj } from "@storybook/react-native";
import { fn } from "storybook/test";
import { View } from "react-native";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "Hello world",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "error", "outline", "link", "icon"],
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onPress: fn(),
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    onPress: fn(),
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const error: Story = {
  args: {
    onPress: fn(),
    children: "Error Button",
    variant: "error",
  },
};

export const outline: Story = {
  args: {
    onPress: fn(),
    children: "Outline Button",
    variant: "outline",
  },
};

export const link: Story = {
  args: {
    onPress: fn(),
    children: "Link Button",
    variant: "link",
  },
};

export const icon: Story = {
  args: {
    onPress: fn(),
    children: "1",
    variant: "icon",
  },
};

export const ClassNamesOverride: Story = {
  args: {
    onPress: fn(),
    children: "Custom Button",
    variant: "primary",
    classNames: {
      base: "rounded-full px-10",
      label: "text-xl font-bold tracking-widest",
    },
  },
};

export const ClassNamesLabelOnly: Story = {
  args: {
    onPress: fn(),
    children: "Label Override",
    variant: "secondary",
    classNames: {
      label: "italic underline",
    },
  },
};

export const ClassNamesBaseOnly: Story = {
  args: {
    onPress: fn(),
    children: "Base Override",
    variant: "outline",
    classNames: {
      base: "border-4 rounded-none",
    },
  },
};

