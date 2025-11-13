import { Stack } from "expo-router";

export default function BookARideLayout() {
     return (
          <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen name="index" />
          </Stack>
     )
}