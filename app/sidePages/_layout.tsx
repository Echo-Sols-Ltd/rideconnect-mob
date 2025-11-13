import { Colors } from "@/constants/theme";
import { useResponsive } from "@/hooks/use-responsive";
import useGlobalStyles from "@/hooks/use-styles-global";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function SidePagesLayout() {
     const { fs, ms, isTablet } = useResponsive()
     const mainStyles = useGlobalStyles()
     
     return (
          <Stack screenOptions={{ headerShown: true }}>
               <Stack.Screen name="rideTracking" options={{
                    headerShown: true,
                    header: (props) => {
                         return (
                              <View style={{ marginTop: 40, position: 'absolute', top: 0, left: isTablet ? ms(40) : 20 }}>
                                   <Ionicons name="arrow-back" size={isTablet ? fs(30) : fs(20)} color={'black'} 
                                        onPress={() => props.navigation.goBack()} 
                                        style={{ backgroundColor: Colors.background, padding: 10, borderRadius: 40 }}
                                   />
                              </View>
                         )
                    }
               }} />
               <Stack.Screen name="receipt" options={({ navigation }) => ({
                    headerShown: true,
                    title: "Receipt for ride A1",
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                         <TouchableOpacity 
                              onPress={() => navigation.goBack()}
                              style={{ marginLeft: isTablet ? ms(20) : 10 }}
                         >
                              <Ionicons name="arrow-back" size={20} color={Colors.default} />
                         </TouchableOpacity>
                    ),
                    headerStyle: {
                         backgroundColor: Colors.background,
                    },
                    headerTitleStyle: {
                         fontSize: fs(16),
                         fontWeight: '500',
                         color: Colors.default,
                    },
               })} />
               <Stack.Screen name="calling" options={{
                    headerShown: false
               }} />
          </Stack>
     )
}