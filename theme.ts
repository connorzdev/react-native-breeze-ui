export const THEME_COLORS = {
  light: {
    background: "0 0% 100%", // #FFFFFF
    foreground: "228 13% 7%", // #0F1115
    primary: "215 100% 22%", // #00356F
    "primary-foreground": "0 0% 100%", // #FFFFFF
    secondary: "218 30% 24%", // #29364F
    "secondary-foreground": "0 0% 100%", // #FFFFFF
    error: "0 100% 23%", // #740006
    "error-foreground": "0 0% 100%", // #FFFFFF
    surface: "240 100% 98%", // #F9F9FF
    "surface-foreground": "228 13% 7%", // #0F1115
    outline: "225 7% 34%", // #4F525C
    "inverse-surface": "220 6% 20%", // #2F3035
    "inverse-surface-foreground": "240 8% 95%", // #F1F0F6
    scrim: "0 0% 0%", // #000000
    shadow: "0 0% 0%", // #000000
  },

  dark: {
    background: "228 16% 6%", // #0E0F14
    foreground: "0 0% 100%", // #FFFFFF
    primary: "218 100% 90%", // #CDDDFF
    "primary-foreground": "215 100% 16%", // #002551
    secondary: "220 53% 90%", // #CFDDFC
    "secondary-foreground": "218 38% 17%", // #18263D
    error: "5 100% 90%", // #FFD2CC
    "error-foreground": "0 100% 17%", // #540003
    surface: "228 16% 8%", // #121317
    "surface-foreground": "0 0% 100%", // #FFFFFF
    outline: "224 5% 71%", // #AEB2BD
    "inverse-surface": "240 5% 89%", // #E2E2E8
    "inverse-surface-foreground": "220 6% 17%", // #282A2E
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
