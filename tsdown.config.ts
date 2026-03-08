import { defineConfig } from "tsdown";
import { execSync } from "node:child_process";

export default defineConfig({
  entry: ["index.ts", "tailwind-theme-plugin.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  inputOptions: {
    transform: {
      jsx: { importSource: "nativewind" },
    },
  },
  hooks: {
    "build:done": async () => {
      console.log("Build done, publish to yalc");
      execSync("yalc publish --private", { stdio: "inherit" });
    },
  },
});
