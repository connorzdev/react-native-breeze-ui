import plugin from "tailwindcss/plugin";
import { THEME_COLORS } from "./theme";

const themePlugin = plugin(({ addBase }) => {
  const toVars = (obj: Record<string, string>) =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [`--${k}`, v]));

  addBase({
    ":root": toVars(THEME_COLORS.light),
    ".dark:root": toVars(THEME_COLORS.dark),
  });
});

export default themePlugin;
