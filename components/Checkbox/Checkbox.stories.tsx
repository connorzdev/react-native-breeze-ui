import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import { Checkbox } from "./Checkbox";
import { View } from "react-native";
import { fn } from "storybook/test";

const meta = {
  component: Checkbox,
  args: {
    checkboxType: "filled",
    size: 20,
    label: "I accept the Terms and Conditions.",
  },
  argTypes: {
    checkboxType: {
      options: ["filled", "outline"],
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "number" },
    },
    label: {
      control: { type: "text" },
    },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UncontrolledCheckbox: Story = {};

export const ControlledCheckbox: Story = {
  args: {
    onChange: fn(),
    isChecked: false,
  },
  argTypes: {
    isChecked: {
      control: { type: "boolean" },
    },
  },
};
