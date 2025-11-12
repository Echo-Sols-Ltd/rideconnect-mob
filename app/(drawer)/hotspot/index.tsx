import MainBtn from "@/components/mainbtn";
import { Colors } from "@/constants/theme";
import { useResponsive } from "@/hooks/use-responsive";
import useGlobalStyles from "@/hooks/use-styles-global";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";

const { height, width } = Dimensions.get("window")

export default function HotspotPredictionMainScreen() {
     const { fs, ms, isTablet } = useResponsive()
     const [searchPlace, setSearchPlace] = useState<string>('')
     const mainStyles = useGlobalStyles()

     return (
          <ScrollView style={{ flex: 1 }}>
               <View style={[styles.mapContainer]}>
                    <Image source={require("@/assets/images/mapEg.png")} resizeMode="stretch" style={[styles.map]} />
               </View>

               <View style={[styles.search, { marginHorizontal: isTablet ? ms(40) : 20, paddingHorizontal: isTablet ? ms(20) : ms(10) }]}>
                    <Ionicons name="search" size={20} color={Colors.primary} />
                    <TextInput value={searchPlace} onChangeText={setSearchPlace} style={[styles.searcgInputs, { width: isTablet ? '100%' : '90%' }]} placeholder="Where are you going?" placeholderTextColor={'#4448'} />
               </View>

               <View style={{ position: 'absolute', right: isTablet ? ms(40) : 20, top: 0 }}>
                    <MainBtn isprimary title="Post a Ride" />
               </View>

               <View style={{ paddingHorizontal: isTablet ? ms(40) : 20, backgroundColor: 'white', paddingVertical: 30 }}>
                    <Text style={[mainStyles.normalHeadings, { marginBottom: 10 }]}>Nearby rides</Text>

                    <View style={{ height: '100%', overflow: 'scroll' }}>
                         <View style={[styles.nearbys, mainStyles.standardShadow, { paddingHorizontal: isTablet ? fs(20) : 10, paddingVertical: fs(10) }]}>
                              <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                                   <Image source={require("@/assets/images/person.png")} resizeMode="contain" style={[mainStyles.profileImageOrIcon]} />

                                   <View style={{ marginBottom: 10 }}>
                                        <View>
                                             <Text style={[mainStyles.normalText]}>Like Jenny</Text>
                                             <Text style={[mainStyles.additionalText]}>Mini</Text>
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                             <Text style={[mainStyles.normalText, mainStyles.centered]}><Ionicons name="ellipse" size={13} color={Colors.primary} /> Kigali, West</Text>
                                             <Text style={[mainStyles.normalText]}><Ionicons name="location" size={13} color={Colors.primary} /> Kigali, West</Text>
                                        </View>
                                   </View>
                                   <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                             <Pressable style={{ borderRadius: 5, paddingHorizontal: 20, paddingVertical: 5, backgroundColor: `${Colors.primary}55` }}>
                                                  <Text style={{ fontSize: fs(13), color: Colors.primary }}>Request</Text>
                                             </Pressable>
                                             <Ionicons name="call" size={20} color={Colors.primary} />
                                        </View>

                                        <View style={{ justifyContent: 'center', marginTop: 18 }}>
                                             <Text style={[mainStyles.additionalText]}>9:30 am</Text>
                                             <Text style={[mainStyles.additionalText]}>9:30 am</Text>
                                        </View>
                                   </View>
                              </View>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
                                   <View style={[mainStyles.centered, { borderRightColor: `${Colors.primary}55`, borderRightWidth: 2, paddingRight: isTablet ? 40 : 7 }]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>
                                   <View style={[mainStyles.centered, { borderRightColor: `${Colors.primary}55`, borderRightWidth: 2, paddingRight: isTablet ? 40 : 7 }]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>
                                   <View style={[mainStyles.centered]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>
                              </View>
                         </View>
                         
                         <View style={[styles.nearbys, mainStyles.standardShadow, { paddingHorizontal: isTablet ? fs(20) : 10, paddingVertical: fs(10), marginTop: 10 }]}>
                              <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                                   <Image source={require("@/assets/images/person.png")} resizeMode="contain" style={[mainStyles.profileImageOrIcon]} />

                                   <View style={{ marginBottom: 10 }}>
                                        <View>
                                             <Text style={[mainStyles.normalText]}>Like Jenny</Text>
                                             <Text style={[mainStyles.additionalText]}>Mini</Text>
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                             <Text style={[mainStyles.normalText, mainStyles.centered]}><Ionicons name="ellipse" size={13} color={Colors.primary} /> Kigali, West</Text>
                                             <Text style={[mainStyles.normalText]}><Ionicons name="location" size={13} color={Colors.primary} /> Kigali, West</Text>
                                        </View>
                                   </View>
                                   <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                             <Pressable style={{ borderRadius: 5, paddingHorizontal: 20, paddingVertical: 5, backgroundColor: `${Colors.primary}55` }}>
                                                  <Text style={{ fontSize: fs(13), color: Colors.primary }}>Request</Text>
                                             </Pressable>
                                             <Ionicons name="call" size={20} color={Colors.primary} />
                                        </View>

                                        <View style={{ justifyContent: 'center', marginTop: 18 }}>
                                             <Text style={[mainStyles.additionalText]}>9:30 am</Text>
                                             <Text style={[mainStyles.additionalText]}>9:30 am</Text>
                                        </View>
                                   </View>
                              </View>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
                                   <View style={[mainStyles.centered, { borderRightColor: `${Colors.primary}55`, borderRightWidth: 2, paddingRight: isTablet ? 40 : 7 }]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>
                                   <View style={[mainStyles.centered, { borderRightColor: `${Colors.primary}55`, borderRightWidth: 2, paddingRight: isTablet ? 40 : 7 }]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>
                                   <View style={[mainStyles.centered]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>
                              </View>
                         </View>
                    </View>
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
     search: {
          elevation: 1,
          borderRadius: 3,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: '10%'
     },
     searcgInputs: {
          paddingHorizontal: 10,
          color: Colors.primary,
     },
     nearbys: {
          borderRadius: 3, elevation: 1,
     },
})