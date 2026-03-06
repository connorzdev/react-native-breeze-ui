import type { StorybookConfig } from "@storybook/react-native-web-vite";

const main: StorybookConfig = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y"
  ],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      pluginReactOptions: {
        jsxRuntime: "automatic",
        jsxImportSource: "nativewind",
        babel: {
          presets: ["nativewind/babel"],
          plugins: [
            "@babel/plugin-transform-class-static-block",
            "@babel/plugin-transform-export-namespace-from",
            "react-native-worklets/plugin",
          ],
        },
      },
    },
  },
};

export default main;
