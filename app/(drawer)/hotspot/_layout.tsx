import { Stack } from "expo-router";

export default function HotspotPreditionLayout() {
     return (
          <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen name="index" />
          </Stack>
     )
}
