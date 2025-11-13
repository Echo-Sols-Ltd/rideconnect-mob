import { useResponsive } from "@/hooks/use-responsive";
import useGlobalStyles from "@/hooks/use-styles-global";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function BookARideMainScreen() {
     const mainStyles = useGlobalStyles()
     const { fs, ms, isTablet } = useResponsive()
     
     return (
          <View>
               <Text>Book a ride</Text>
          </View>
     )
}

const styles = StyleSheet.create({
     
})