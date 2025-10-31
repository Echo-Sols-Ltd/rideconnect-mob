import { Stack } from "expo-router";

export default function ParcelLayout() {
     return (
          <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen name="index" />
          </Stack>
     )
}