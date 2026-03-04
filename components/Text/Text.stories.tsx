import type { Meta, StoryObj } from "@storybook/react-native";

import { Text } from "./Text";

const meta = {
  component: Text,
  title: "Text",
  args: {
    children: "123",
    className: "",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
