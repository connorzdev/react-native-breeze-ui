import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Camera, AlarmClockIcon } from "lucide-react-native";

import { Icon } from "./Icon";

const meta = {
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardIcon: Story = {
  args: {
    as: Camera,
    className: "text-primary",
    size: 24,
    strokeWidth: 2,
    absoluteStrokeWidth: false,
  },
  argTypes: {
    as: {
      options: ["Camera", "AlarmClockIcon"],
      control: { type: "radio" },
      description: "The lucide icon component",
      mapping: {
        Camera: Camera,
        AlarmClockIcon: AlarmClockIcon,
      },
    },
    size: {
      table: {
        defaultValue: {
          summary: "24",
        },
      },
    },
    strokeWidth: {
      table: {
        defaultValue: {
          summary: "2",
        },
      },
    },
    absoluteStrokeWidth: {
      control: { type: "boolean" },
      description:
        "When adjusting the size prop the size of the stroke width will be relative to the size of the icon, this is the default SVG behavior. The absoluteStrokeWidth prop is introduced to adjust this behavior to make the stroke width constant no matter the size of the icon.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
};
