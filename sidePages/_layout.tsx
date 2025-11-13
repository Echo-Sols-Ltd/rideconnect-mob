import { useResponsive } from "@/hooks/use-responsive";
import useGlobalStyles from "@/hooks/use-styles-global";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function SidePagesLayout() {
     const { fs, ms, isTablet } = useResponsive()
     const mainStyles = useGlobalStyles()
     
     return (
          <Stack>
               <Stack.Screen name="bookARideDetails" options={{
                    header: (props) => {
                         return (
                              <TouchableOpacity onPress={() => props.navigation.goBack()} style={[mainStyles.menuIcon]} >
                                   <Ionicons name='arrow-back' size={isTablet ? fs(20) : fs(15)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                              </TouchableOpacity>
                         )
                    }
               }} />
          </Stack>
     )
}