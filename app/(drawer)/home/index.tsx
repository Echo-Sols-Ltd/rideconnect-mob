import MainBtn from "@/components/mainbtn";
import { Colors } from "@/constants/theme";
import { businessData } from "@/data/ourBusiness";
import { useResponsive } from "@/hooks/use-responsive";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Platform, ScrollView } from "react-native";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function HomeScreen() {
     const { ms, isTablet, fs } = useResponsive();
     const navigate = useRouter()

     const Decorations = (borderW: number, opacity: number, top: number, right: number, dimensions: number) => {
          return <View style={{
               borderWidth: ms(borderW), opacity: ms(opacity), position: 'absolute', top: ms(top),
               right: ms(right), borderRadius: 200, width: ms(dimensions), height: ms(dimensions), borderColor: Colors.background
          }}></View>
     }
     
     const UpcomingRide = () => {
          return (
               <View style={[styles.upcoming, { backgroundColor: Colors.primary }]}>
                    <View>
                         <Text style={{ color: Colors.background, fontSize: fs(14), fontWeight: 500 }}>Upcoming Ride</Text>

                         <View style={{ gap: 2, paddingLeft: 5, marginTop: 10 }}>
                              <Text style={{ color: Colors.background, fontSize: fs(12) }}>Wed, 12:00 pm</Text>
                              <Text style={{ color: Colors.background, fontSize: fs(12) }}>Kigali, Westland</Text>

                              <View style={{ maxWidth: '35%' }}>
                                   <Pressable style={{ marginTop: 10, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 10, backgroundColor: Colors.background, width: 'auto' }}>
                                        <Text style={{ color: Colors.default, fontSize: fs(12), textAlign: 'center' }}>View Details</Text>
                                   </Pressable>
                              </View>
                         </View>
                    </View>
                    <View style={[styles.relativeImg]}>
                         {/* <View style={{ position: 'relative', width: '100%', height: '100%' }}>
                              {Decorations(15, .6, -130, -20, 100)}
                              {Decorations(5, .4, -130, 150, 40)}
                              {Decorations(2, .4, -50, 160, 30)}
                         </View> */}
                         <Image source={require('@/assets/images/person.png')} resizeMode="contain" style={[styles.relativePic]} />
                    </View>
               </View>
          )
     }

     const BookARide = () => {
          return (
               <View style={[styles.book, { backgroundColor: '#40ccf775' }]}>
                    <Text style={{ fontSize: fs(14), fontWeight: 500 }}>Book a ride!</Text>
                    <Text style={{ fontSize: fs(12), fontWeight: 300, color: '#333c' }}>Get there safe with rideconnect.</Text>

                    <View style={{ flexDirection: 'row', gap: ms(10), paddingVertical: ms(10) }}>
                         <View style={{ backgroundColor: Colors.background, borderRadius: 5, width: '49%', paddingVertical: ms(5), paddingHorizontal: 10, position: 'relative', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                              <Ionicons name="location-sharp" size={ms(16)} color={Colors.primary} />
                              <TextInput placeholder="Pickup location" style={{ fontSize: fs(12), width: '100%' }} placeholderTextColor={'#444a'} />
                         </View>
                         <View style={{ backgroundColor: Colors.background, borderRadius: 5, width: '49%', paddingVertical: ms(5), paddingHorizontal: 10, position: 'relative', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                              <Ionicons name="location-sharp" size={ms(16)} color={Colors.primary} />
                              <TextInput placeholder="Pickup location" style={{ fontSize: fs(12), width: '100%' }} placeholderTextColor={'#444a'} />
                         </View>
                    </View>
                    <View style={{ backgroundColor: Colors.background, borderRadius: 5, width: 'auto', paddingVertical: ms(5), paddingHorizontal: 10, position: 'relative', flexDirection: 'row', gap: 5, marginBottom: ms(20), alignItems: 'center' }}>
                         <Ionicons name="calendar" size={ms(16)} color={Colors.primary} />
                         <TextInput placeholder="Ride date and time" style={{ fontSize: fs(12), width: '100%' }} placeholderTextColor={'#444a'} />
                    </View>

                    <MainBtn title="Book" isprimary hasIcon onclick={() => navigate.push("/(drawer)/ioc")} />
               </View>
          )
     }

     const KnowOurBusiness = () => {
          return (
               <View style={{ gap: ms(isTablet ? ms(10) : 5), flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {businessData.map((item) => (
                         <View key={item.id} style={[styles.business, { paddingVertical: ms(10), paddingHorizontal: ms(12), gap: ms(5) }]}>
                              <Ionicons name="calendar" size={40} color={Colors.tertiary} />
                              <Text style={{ color: Colors.tertiary, textAlign: 'center', fontSize: fs(12) }}> {item.title} </Text>
                         </View>
                    ))}
               </View>
          )
     }

     return (
          <ScrollView style={{ flex: 1 }}>
               <View style={[styles.container, { paddingHorizontal: ms(isTablet ? 40 : 15) }]}>
                    <UpcomingRide />

                    <BookARide />

                    <Text style={{ fontSize: fs(14), fontWeight: 500 }}>Know our services</Text>
                    <KnowOurBusiness />
               </View>
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     container: {
          paddingVertical: 50,
          backgroundColor: 'white',
          flex: 1,
          gap: 30,
     },
     upcoming: {
          marginTop: 40,
          paddingVertical: 20, 
          paddingHorizontal: 15,
          borderRadius: 20,
          shadowColor: '#444',
          shadowOffset: { height: 10, width: 0 },
          boxShadow: '0px 4px 6px #000000',
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 5,
     },
     relativeImg: {
          position: 'relative',
     },
     relativePic: {
          position: 'absolute',
          bottom: Platform.OS === 'web' ? -30 : -20,
          right: -30
     },
     book: {
          borderRadius: 20,
          paddingHorizontal: 15,
          paddingVertical: 30,
          shadowColor: '#444',
          shadowOffset: { height: 2, width: 2 },
          shadowOpacity: .3,
          elevation: 0
     },
     business: {
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          shadowColor: '#444',
          shadowOffset: { height: 4, width: 2 },
          boxShadow: '0px 4px 6px #000000A0',
          shadowOpacity: 1,
          shadowRadius: 1,
          // elevation: 1,
          marginTop: 7,
     }
})