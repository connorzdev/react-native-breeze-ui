const { getDefaultConfig } = require("expo/metro-config");
const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");
const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);

const config = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
});

const nativewindConfig = withNativeWind(config, {
  input: "./global.css",
  inlineRem: 16,
});

module.exports = nativewindConfig;
