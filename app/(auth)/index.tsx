import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Platform } from "react-native";
import { Colors } from "@/constants/theme";
import { LinearGradient } from 'expo-linear-gradient'
import { Link, useRouter } from "expo-router";
const { height, width } = Dimensions.get('screen')

export default function OnboardingScreen() {
     const navigate = useRouter()

     const StartButton = () => {
          return (
               <>
                    {Platform.OS === 'android' ? (
                         <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.primary }]} onPress={() => navigate.navigate('/(auth)/info')}>
                              <Text style={{ fontSize: 18, fontWeight: 500, color: 'white' }}>Start</Text>
                         </TouchableOpacity>
                    ) : (
                         <Link style={[styles.btn, { backgroundColor: Colors.primary, color: 'white' }]} href={'/(auth)/info'}>Start</Link>
                    )}
               </>
          )
     }

     return (
          <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 10 }}>
               <LinearGradient colors={[Colors.primary, Colors.secondary, Colors.default]} locations={[0, 0.8, 1]} style={[styles.container]}>
                    <Image source={require('@/assets/images/car.png')} style={{ resizeMode: 'contain', height: '50%' }} />

                    
                    <View style={{ alignItems: 'center', gap: 30, justifyContent: 'center' }}>
                         <Text style={{ fontSize: 20, color: Colors.primary, fontWeight: 500 }}>R
                              <Text style={{ color: 'white' }}>ideC
                                   <Text style={{ borderBottomColor: 'white', borderBottomWidth: 3 }}>onne</Text>
                              ct</Text>
                         </Text>

                         <Text style={{ fontSize: 14, color: 'white', paddingHorizontal: 30, display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 5 }}>
                              <Text>Premium Car Rides.Premium Car Rides.</Text>
                              <Text>Premium Car Rides.Premium .</Text>
                         </Text>

                         <StartButton />
                    </View>

               </LinearGradient>
          </View>
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          fontWeight: 500,
     }
})