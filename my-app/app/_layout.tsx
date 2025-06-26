import { Stack, Tabs } from "expo-router";
import "@/global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
    </Stack>
  );
}
