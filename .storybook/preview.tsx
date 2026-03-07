import type { Preview } from "@storybook/react-native";
import { BreezeStylesProvider } from "@/hooks/BreezeStylesProvider";
import "../global.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <BreezeStylesProvider>
        <Story />
      </BreezeStylesProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "plain",
      values: [
        { name: "plain", value: "white" },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
      ],
    },
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
