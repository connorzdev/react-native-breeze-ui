export const THEME_COLORS = {
  light: {
    primary: "215 100% 22%", // #00356F
    "on-primary": "0 0% 100%", // #FFFFFF
    secondary: "218 30% 24%", // #29364F
    "on-secondary": "0 0% 100%", // #FFFFFF
    error: "0 100% 23%", // #740006
    "on-error": "0 0% 100%", // #FFFFFF
    surface: "240 100% 98%", // #F9F9FF
    "on-surface": "228 13% 7%", // #0F1115
    outline: "225 7% 34%", // #4F525C
    "inverse-surface": "220 6% 20%", // #2F3035
    "inverse-on-surface": "240 8% 95%", // #F1F0F6
    scrim: "0 0% 0%", // #000000
    shadow: "0 0% 0%", // #000000
  },

  dark: {
    primary: "218 100% 90%", // #CDDDFF
    "on-primary": "215 100% 16%", // #002551
    secondary: "220 53% 90%", // #CFDDFC
    "on-secondary": "218 38% 17%", // #18263D
    error: "5 100% 90%", // #FFD2CC
    "on-error": "0 100% 17%", // #540003
    surface: "228 16% 8%", // #121317
    "on-surface": "0 0% 100%", // #FFFFFF
    outline: "224 5% 71%", // #AEB2BD
    "inverse-surface": "240 5% 89%", // #E2E2E8
    "inverse-on-surface": "220 6% 17%", // #282A2E
    scrim: "0 0% 0%", // #000000
    shadow: "0 0% 0%", // #000000
  },
} as const;

// Helper to get resolved HSL value for JS usage (e.g., charts, canvas)
export function hsl(token: string, mode: "light" | "dark" = "light"): string {
  const value =
    THEME_COLORS[mode][token as keyof (typeof THEME_COLORS)["light"]];
  if (!value) return "";
  if (value.includes("rem") || value.includes("px")) return value;
  return `hsl(${value})`;
}
