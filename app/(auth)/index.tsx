import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { Colors } from "@/constants/theme";
import { LinearGradient } from 'expo-linear-gradient'
const { height, width } = Dimensions.get('screen')

export default function OnboardingScreen() {
     const StartButton = () => {
          return (
               <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.primary}]}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 500 }}>Start</Text>
               </TouchableOpacity>
          )
     }

     return (
          <SafeAreaView style={{ flex: 1, justifyContent: 'center', paddingVertical: 10 }}>
               <LinearGradient colors={[Colors.primary, Colors.secondary, Colors.default]} locations={[0, 0.8, 1]} style={[styles.container]}>
                    <Image source={require('@/assets/images/car.png')} style={{ resizeMode: 'contain', height: '50%' }} />

                    <View style={{ alignItems: 'center', gap: 30, justifyContent: 'center' }}>
                         <Text style={{ fontSize: 20, color: Colors.primary, fontWeight: 500 }}>R
                              <Text style={{ color: 'white', borderBottomColor: 'white', borderBottomWidth: 2 }}>ideConnect</Text>
                         </Text>

                         <Text style={{ fontSize: 14, color: 'white', paddingHorizontal: 30, display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 5 }}>
                              <Text>Premium Car Rides.Premium Car Rides.</Text>
                              <Text>Premium Car Rides.Premium .</Text>
                         </Text>

                         <StartButton />
                    </View>

               </LinearGradient>
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     container: {
          paddingHorizontal: 20,
          paddingVertical: 40,
          flexDirection: 'column',
          gap: 12,
          justifyContent: 'center',
          alignItems: 'center',
          height
     },
     btn: {
          borderRadius: 100,
          borderWidth: 2,
          borderColor: '#FFFFFF',
          height: 80,
          width: 80,
          justifyContent: 'center',
          alignItems: 'center',
     }
})