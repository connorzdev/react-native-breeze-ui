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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--on-primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--on-secondary))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--on-error))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--on-surface))",
        },
        outline: "hsl(var(--outline))",
        "inverse-surface": {
          DEFAULT: "hsl(var(--inverse-surface))",
          foreground: "hsl(var(--inverse-on-surface))",
        },
        scrim: "hsl(var(--scrim))",
        shadow: "hsl(var(--shadow))",
      },
    },
  },
  plugins: [require("./tailwind-theme-plugin").default],
};
