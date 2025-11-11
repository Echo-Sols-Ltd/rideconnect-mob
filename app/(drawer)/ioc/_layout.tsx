import { Stack } from "expo-router";

export default function IocLayout() {
     return (
          <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen name="index" />
          </Stack>
     )
}
