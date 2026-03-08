import type { Meta, StoryObj } from "@storybook/react-native";
import { fn } from "storybook/test";
import { View } from "react-native";
import {
  Search,
  ArrowRight,
  Download,
  Trash2,
  Check,
} from "lucide-react-native";
import { Button } from "./Button";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";
import type { ButtonColor, ButtonVariant } from "./button.styles";

const VARIANTS = [
  "filled",
  "outline",
  "ghost",
  "link",
] as const satisfies ButtonVariant[];
const COLORS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
] as const satisfies ButtonColor[];

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    onPress: fn(),
  },
  argTypes: {
    variant: {
      options: VARIANTS,
      control: { type: "radio" },
    },
    color: {
      options: COLORS,
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    labelVariant: {
      options: [
        "display",
        "title1",
        "title2",
        "title3",
        "subtitle",
        "headline",
        "label",
        "body",
        "footnote",
        "caption",
      ],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          padding: 24,
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Playground ---

export const Playground: Story = {
  args: {
    children: "Click me",
    variant: "filled",
    color: "primary",
    size: "md",
  },
};

// --- Variant showcase ---

export const AllVariants: Story = {
  args: { color: "primary" },
  render: (args) => (
    <View style={{ gap: 12, width: "100%" }}>
      {VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </View>
  ),
};

// --- Color showcase ---

export const AllColors: Story = {
  args: { variant: "filled" },
  render: (args) => (
    <View style={{ gap: 12, width: "100%" }}>
      {COLORS.map((color) => (
        <Button key={color} {...args} color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </View>
  ),
};

// --- Full matrix ---

export const ColorMatrix: Story = {
  args: { size: "sm" },
  render: (args) => (
    <View style={{ gap: 20, width: "100%" }}>
      {VARIANTS.map((variant) => (
        <View key={variant} style={{ gap: 6 }}>
          <Text variant="caption">{variant.toUpperCase()}</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {COLORS.map((color) => (
              <Button key={color} {...args} variant={variant} color={color}>
                {color}
              </Button>
            ))}
          </View>
        </View>
      ))}
    </View>
  ),
};

// --- Sizes ---

export const Sizes: Story = {
  args: { variant: "filled", color: "primary" },
  render: (args) => (
    <View style={{ gap: 12, alignItems: "center" }}>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </View>
  ),
};

// --- With icons ---

export const WithLeadingIcon: Story = {
  args: {
    children: "Search",
    variant: "filled",
    color: "primary",
    leading: <Icon as={Search} className="text-primary-foreground" />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: "Continue",
    variant: "filled",
    color: "primary",
    trailing: <Icon as={ArrowRight} className="text-primary-foreground" />,
  },
};

export const OutlineWithIcons: Story = {
  args: {
    children: "Download",
    variant: "outline",
    color: "primary",
    leading: <Icon as={Download} className="text-primary" />,
    trailing: <Icon as={ArrowRight} className="text-primary" />,
  },
};

// --- Real-world patterns ---

export const FormActions: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 12 }}>
      <Button variant="outline" color="secondary">
        Cancel
      </Button>
      <Button
        variant="filled"
        color="primary"
        trailing={<Icon as={Check} className="text-primary-foreground" />}
      >
        Save
      </Button>
    </View>
  ),
};

export const DestructiveAction: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 12 }}>
      <Button
        variant="ghost"
        color="error"
        leading={<Icon as={Trash2} className="text-error" />}
      >
        Delete
      </Button>
      <Button variant="filled" color="error">
        Confirm Delete
      </Button>
    </View>
  ),
};

export const StatusActions: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
      <Button variant="filled" color="success" size="sm">
        Approve
      </Button>
      <Button variant="filled" color="warning" size="sm">
        Review
      </Button>
      <Button variant="filled" color="error" size="sm">
        Reject
      </Button>
    </View>
  ),
};
