import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { Text } from "./Text";

const meta = {
  component: Text,
  title: "Text",
  args: {
    children: "The quick brown fox",
  },
  argTypes: {
    variant: {
      options: ["display", "title1", "title2", "title3", "subtitle", "headline", "label", "body", "footnote", "caption", "error"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "flex-start", justifyContent: "center", flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Text variant="display">Display</Text>
      <Text variant="title1">Title 1</Text>
      <Text variant="title2">Title 2</Text>
      <Text variant="title3">Title 3</Text>
      <Text variant="subtitle">Subtitle</Text>
      <Text variant="headline">Headline</Text>
      <Text variant="label">Label</Text>
      <Text variant="body">Body</Text>
      <Text variant="footnote">Footnote</Text>
      <Text variant="caption">Caption</Text>
      <Text variant="error">Error</Text>
    </View>
  ),
};
