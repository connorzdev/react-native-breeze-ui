import { Stack } from "expo-router";
import { BreezeStylesProvider } from "@/hooks/BreezeStylesProvider";
import "../global.css";

const StorybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

export const unstable_settings = {
  initialRouteName: StorybookEnabled ? "(storybook)/index" : "(pages)/index",
};

export default function RootLayout() {
  return (
    <BreezeStylesProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={StorybookEnabled}>
          <Stack.Screen name="(storybook)/index" />
        </Stack.Protected>

        <Stack.Screen name="(pages)/index" />
      </Stack>
    </BreezeStylesProvider>
  );
}
