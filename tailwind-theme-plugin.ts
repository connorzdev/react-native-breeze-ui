import plugin from "tailwindcss/plugin";

type ThemeColors = {
  light: Record<string, string>;
  dark: Record<string, string>;
};

type PluginOptions = { theme: ThemeColors };

export function createThemePlugin(options: PluginOptions) {
  let themeColors: ThemeColors;

  if (options.theme) {
    themeColors = options.theme;
  } else {
    throw new Error(
      `[react-native-breeze-ui] Could not load theme. Make sure the file exists and exports a valid theme object.`,
    );
  }

  const toVars = (obj: Record<string, string>) =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [`--${k}`, v]));

  return plugin(({ addBase }) => {
    addBase({
      ":root": toVars(themeColors.light),
      ".dark:root": toVars(themeColors.dark),
    });
  });
}
