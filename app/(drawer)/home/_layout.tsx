import { Colors } from "@/constants/theme";
import { useResponsive } from "@/hooks/use-responsive";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { Image, Platform, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function HomeLayout() {
     const { fs, ms, isTablet } = useResponsive()
     return (
          <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen name="index" />
          </Stack>
     )
}