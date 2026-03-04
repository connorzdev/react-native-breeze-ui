/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./.rnstorybook/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [{ pattern: /.*/ }],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
