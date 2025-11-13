import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function BookARideLayout() {
     return (
          <Stack>
               <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
     )
}