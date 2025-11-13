import MainBtn from "@/components/mainbtn";
import { Colors } from "@/constants/theme";
import { useResponsive } from "@/hooks/use-responsive";
import useGlobalStyles from "@/hooks/use-styles-global";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";

const { height, width } = Dimensions.get("window")

export default function BookARideMainScreen() {
     const mainStyles = useGlobalStyles()
     const { fs, ms, isTablet } = useResponsive()
     const [expandedSection, setExpandedSection] = useState<string | null>(null)
     const navigate = useRouter()

     const FillLocations = () => {
          return (
               <View style={[mainStyles.standardShadow, { paddingHorizontal: isTablet ? 10 : 5, paddingVertical: 7 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 5 }}>
                         <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', width: '50%', borderBottomWidth: 1, borderRightWidth: 1, borderRadius: 10, paddingHorizontal: 10 }}>
                              <Ionicons name="location-outline" size={15} color={Colors.primary} />
                              <TextInput placeholder="Pickup Location" placeholderTextColor={'#4448'} style={{ width: '90%' }} />
                         </View>
                         <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', width: '48%', borderBottomWidth: 1, borderRightWidth: 1, borderRadius: 10, paddingHorizontal: 10 }}>
                              <Ionicons name="location-outline" size={15} color={Colors.primary} />
                              <TextInput placeholder="Destination Location" placeholderTextColor={'#4448'} style={{ width: '90%' }} />
                         </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', width: '99%', borderBottomWidth: 1, borderRightWidth: 1, borderRadius: 10, paddingHorizontal: 10 }}>
                         <Ionicons name="calendar-outline" size={15} color={Colors.primary} />
                         <TextInput placeholder="Ride date and time" placeholderTextColor={'#4448'} style={{ paddingRight: 20 }} />
                    </View>
               </View>
          )
     }
     
     const TypeOfCar = () => {
          return (
               <View style={[mainStyles.standardShadow, { paddingHorizontal: isTablet ? 10 : 5, paddingVertical: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }]}>
                    <View style={{ borderRadius: 10, borderWidth: 2, borderColor: Colors.primary, paddingHorizontal: isTablet ? 20 : 10, paddingVertical: 5 }}>
                         <View style={{ alignItems: 'center' }}>
                              <Ionicons name="car" size={30} color={Colors.primary} />
                              <Text style={[mainStyles.additionalText]}>5 min</Text>
                         </View>

                         <View style={{ width: '100%', paddingVertical: .5, backgroundColor: `${Colors.primary}55` }} />
                         
                         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
                              <Text style={[mainStyles.normalText, { fontSize: fs(12) }]}>Type:</Text>
                              <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>Mini</Text>
                         </View>
                         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
                              <Text style={[mainStyles.normalText, { fontSize: fs(12) }]}>Price:</Text>
                              <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>1 $/hour</Text>
                         </View>
                         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
                              <Text style={[mainStyles.normalText, { fontSize: fs(12) }]}>Seats:</Text>
                              <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>4</Text>
                         </View>

                         <Ionicons name="checkmark-circle" size={30} color={Colors.primary} style={{ position: 'absolute', top: -12, right: -12 }} />
                    </View>

                    <View style={{ borderRadius: 10, borderWidth: 2, borderColor: Colors.primary, paddingHorizontal: isTablet ? 20 : 10, paddingVertical: 5 }}>
                         <View style={{ alignItems: 'center' }}>
                              <Ionicons name="car" size={30} color={Colors.primary} />
                              <Text style={[mainStyles.additionalText]}>5 min</Text>
                         </View>

                         <View style={{ width: '100%', paddingVertical: .5, backgroundColor: `${Colors.primary}55` }} />
                         
                         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
                              <Text style={[mainStyles.normalText, { fontSize: fs(12) }]}>Type:</Text>
                              <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>Mini</Text>
                         </View>
                         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
                              <Text style={[mainStyles.normalText, { fontSize: fs(12) }]}>Price:</Text>
                              <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>1 $/hour</Text>
                         </View>
                         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
                              <Text style={[mainStyles.normalText, { fontSize: fs(12) }]}>Seats:</Text>
                              <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>4</Text>
                         </View>

                         <Ionicons name="checkmark-circle" size={30} color={Colors.primary} style={{ position: 'absolute', top: -12, right: -12 }} />
                    </View>

                    <View style={{ borderRadius: 10, borderWidth: 2, borderColor: Colors.primary, paddingHorizontal: isTablet ? 20 : 10, paddingVertical: 5 }}>
                         <View style={{ alignItems: 'center' }}>
                              <Ionicons name="car" size={30} color={Colors.primary} />
                              <Text style={[mainStyles.additionalText]}>5 min</Text>
                         </View>

                         <View style={{ width: '100%', paddingVertical: .5, backgroundColor: `${Colors.primary}55` }} />
                         
                         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
                              <Text style={[mainStyles.normalText, { fontSize: fs(12) }]}>Type:</Text>
                              <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>Mini</Text>
                         </View>
                         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
                              <Text style={[mainStyles.normalText, { fontSize: fs(12) }]}>Price:</Text>
                              <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>1 $/hour</Text>
                         </View>
                         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5 }}>
                              <Text style={[mainStyles.normalText, { fontSize: fs(12) }]}>Seats:</Text>
                              <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>4</Text>
                         </View>

                         <Ionicons name="checkmark-circle" size={30} color={Colors.primary} style={{ position: 'absolute', top: -12, right: -12 }} />
                    </View>
               </View>
          )
     }

     const PaymentOptions = () => {
          return (
               <View style={[mainStyles.standardShadow, { paddingHorizontal: isTablet ? 10 : 5, paddingVertical: 7 }]}>
                    <Text style={[mainStyles.normalText]}>Payment Option 1</Text>
                    <Text style={[mainStyles.normalText]}>Payment Option 2</Text>
               </View>
          );
     };
          
     return (
          <ScrollView>
               <View style={[styles.mapContainer]}>
                    <Image source={require("@/assets/images/mapEg.png")} resizeMode="stretch" style={[styles.map]} />
               </View>

               <View style={[styles.options, { paddingHorizontal: isTablet ? ms(40) : 20 }]}>
                    <Text style={[mainStyles.normalHeadings]}>Book your ride!</Text>

                    <View style={{ gap: 5, marginBottom: 20 }}>
                         <Pressable style={[mainStyles.standardShadow, styles.dropdownBtn, { paddingHorizontal: isTablet ? 20 : 10 }]}
                              onPress={() => setExpandedSection(expandedSection === 'locations' ? null : 'locations')}
                         >
                              <Text style={[mainStyles.normalText, { fontWeight: 400 }]}>Locations</Text>
                              <Ionicons name={expandedSection === 'locations' ? 'chevron-up' : 'chevron-forward'} size={20} />
                         </Pressable>

                         {expandedSection === 'locations' && <FillLocations />}

                         <Pressable style={[mainStyles.standardShadow, styles.dropdownBtn, { paddingHorizontal: isTablet ? 20 : 10 }]}
                              onPress={() => setExpandedSection(expandedSection === 'typeOfCar' ? null : 'typeOfCar')}
                         >
                              <Text style={[mainStyles.normalText, { fontWeight: 400 }]}>Type of car</Text>
                              <Ionicons name={expandedSection === 'typeOfCar' ? 'chevron-up' : 'chevron-forward'} size={20} />
                         </Pressable>

                         {expandedSection === 'typeOfCar' && <TypeOfCar />}

                         <Pressable style={[mainStyles.standardShadow, styles.dropdownBtn, { paddingHorizontal: isTablet ? 20 : 10 }]}>
                              <Text style={[mainStyles.normalText, { fontWeight: 400 }]}>Payment</Text>
                              <Ionicons name="chevron-forward" size={20} />
                         </Pressable>
                    </View>

                    <MainBtn hasIcon isprimary title="Book" onclick={() => navigate.push("/sidePages/rideTracking")} />
               </View>
          </ScrollView>
     )
}

const styles = StyleSheet.create({
          mapContainer: {
     },
     map: {
          width: width,
          height: height * 0.4,
          zIndex: -1,
     },
     dropdownBtn: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
     },
     options: {
          backgroundColor: 'white',
          paddingVertical: 30,
          flex: 1,
     }
})