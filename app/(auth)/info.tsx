import MainBtn from "@/components/mainbtn";
import { Colors } from "@/constants/theme";
import { Dimensions, Image, Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('screen')

export default function InfoScreen() {
     return (
          <SafeAreaView style={[styles.container]}>
               <Image source={require('@/assets/images/truck.png')} resizeMode="contain" resizeMethod="resize" style={{ height: '60%', marginTop: 70, width: width > 500 ? '100%' : '60%' }} />

               <View style={[styles.content]}>
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>Your Ultimate <Text style={{ color: Colors.primary }}>Car rides</Text> </Text>
                    <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 10 }}>Experience</Text>

                    <Text style={{
                         fontSize: 14, color: Colors.tertiary, paddingHorizontal: 30,
                         display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 1,
                         marginBottom: 20
                    }}>
                         <Text>Premium Car Rides.</Text>
                         <Text>Premium Car Rides.Premium .</Text>
                    </Text>

                    <MainBtn isprimary hasIcon isFullWidth />

                    <Text style={{ fontSize: 14, color: Colors.tertiary, marginTop: 20, fontWeight: 500 }}>Already have an account?
                         <Text style={{ color: Colors.primary }}> Sign In</Text>
                    </Text>
               </View>
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     container: {
          paddingVertical: 30,
          justifyContent: 'center',
          // alignItems: 'center',
          flex: 1,
     },
     content: {
          paddingHorizontal: 50,
          paddingVertical: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
     },

})