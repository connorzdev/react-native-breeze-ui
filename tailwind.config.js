const { default: createThemePlugin } = require("./tailwind-theme-plugin");
const { THEME_COLORS } = require("./theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./.rnstorybook/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [{ pattern: /.*/ }],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--surface-foreground))",
        },
        outline: "hsl(var(--outline))",
        "inverse-surface": {
          DEFAULT: "hsl(var(--inverse-surface))",
          foreground: "hsl(var(--inverse-surface-foreground))",
        },
        scrim: "hsl(var(--scrim))",
        shadow: "hsl(var(--shadow))",
      },
    },
  },
  plugins: [createThemePlugin({ theme: THEME_COLORS })],
};
