import MainBtn from "@/components/mainbtn";
import { Colors } from "@/constants/theme";
import { useResponsive } from "@/hooks/use-responsive";
import useGlobalStyles from "@/hooks/use-styles-global";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, TextInput, View, Text, ScrollView, Animated } from "react-native";

const { height, width } = Dimensions.get("window")

export default function HotspotPredictionMainScreen() {
     const { fs, ms, isTablet } = useResponsive()
     const [searchStart, setSearchStart] = useState<string>('')
     const [searchStop, setSearchStop] = useState<string>('')
     const [isSearchFocused, setIsSearchFocused] = useState(false);
     const mainStyles = useGlobalStyles()
     const slideAnim = new Animated.Value(height);
     const navigate = useRouter()

     const handleFocus = () => {
          setIsSearchFocused(true);
          Animated.timing(slideAnim, {
               toValue: 0,
               duration: 300,
               useNativeDriver: false,
          }).start();
     };

     const handleBlur = () => {
          setIsSearchFocused(false);
          Animated.timing(slideAnim, {
               toValue: height, // Slide down off-screen
               duration: 300,
               useNativeDriver: false,
          }).start();
     };

     const ReceiptScreen = () => {
          return (
               <Animated.View style={[styles.receiptContainer, { transform: [{ translateY: slideAnim }] }]}>
                    <View style={{ paddingHorizontal: isTablet ? ms(40) : 20, paddingVertical: 30, backgroundColor: `${Colors.primary}55`, gap: 5 }}>
                         <Text style={[mainStyles.normalHeadings]}><Ionicons name="arrow-back" size={18} onPress={handleBlur} /> Search</Text>
                         <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.background, borderRadius: 10, paddingHorizontal: isTablet ? 20 : 10 }}>
                              <Ionicons name="ellipse" size={14} color={Colors.primary} />
                              <TextInput placeholder="Pickup Location" placeholderTextColor={"#4448"} value={searchStart} onChangeText={setSearchStart} />
                         </View>
                         <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.background, borderRadius: 10, paddingHorizontal: isTablet ? 20 : 10 }}>
                              <Ionicons name="location" size={15} color={Colors.primary} />
                              <TextInput placeholder="Destination location" placeholderTextColor={"#4448"} value={searchStop} onChangeText={setSearchStop} />
                         </View>
                    </View>

                    <View style={{ paddingHorizontal: isTablet ? ms(40) : 20, paddingVertical: 30 }}>
                         <Text style={[mainStyles.normalHeadings]}>Available Rides</Text>

                         <View style={{ paddingVertical: 10 }}>
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
                                   <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: 5 }}>
                                        <View style={[mainStyles.centered]}>
                                             <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                             <Text style={[mainStyles.normalText]}>1.25$</Text>
                                        </View>

                                        <View style={{ height: '100%', paddingHorizontal: 1, backgroundColor: Colors.primary }}></View>

                                        <View style={[mainStyles.centered]}>
                                             <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                             <Text style={[mainStyles.normalText]}>1.25$</Text>
                                        </View>

                                        <View style={{ height: '100%', paddingHorizontal: 1, backgroundColor: Colors.primary }}></View>

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
                                   <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: 5 }}>
                                        <View style={[mainStyles.centered]}>
                                             <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                             <Text style={[mainStyles.normalText]}>1.25$</Text>
                                        </View>

                                        <View style={{ height: '100%', paddingHorizontal: 1, backgroundColor: Colors.primary }}></View>

                                        <View style={[mainStyles.centered]}>
                                             <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                             <Text style={[mainStyles.normalText]}>1.25$</Text>
                                        </View>

                                        <View style={{ height: '100%', paddingHorizontal: 1, backgroundColor: Colors.primary }}></View>

                                        <View style={[mainStyles.centered]}>
                                             <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                             <Text style={[mainStyles.normalText]}>1.25$</Text>
                                        </View>
                                   </View>
                              </View>
                         </View>
                    </View>
               </Animated.View>
          );
     };

     return (
          <ScrollView style={{ flex: 1 }}>
               <View style={[styles.mapContainer]}>
                    <Image source={require("@/assets/images/mapEg.png")} resizeMode="stretch" style={[styles.map]} />
               </View>

               <View style={[styles.search, { marginHorizontal: isTablet ? ms(40) : 20, paddingHorizontal: isTablet ? ms(20) : ms(10) }]}>
                    <Ionicons name="search" size={20} color={Colors.primary} />
                    <Pressable onPress={handleFocus} style={[styles.searcgInputs, { width: isTablet ? '100%' : '90%' }]}>
                         <Text style={[mainStyles.normalText, { color: '#4448' }]}>Where are you going?</Text>
                    </Pressable>
               </View>

               <View style={{ position: 'absolute', right: isTablet ? ms(40) : 20, top: 0 }}>
                    <MainBtn isprimary title="Post a Ride" onclick={() => navigate.push("/(drawer)/ioc")} />
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
                              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: 5 }}>
                                   <View style={[mainStyles.centered]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>

                                   <View style={{ height: '100%', paddingHorizontal: 1, backgroundColor: Colors.primary }}></View>

                                   <View style={[mainStyles.centered]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>

                                   <View style={{ height: '100%', paddingHorizontal: 1, backgroundColor: Colors.primary }}></View>

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
                              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: 5 }}>
                                   <View style={[mainStyles.centered]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>

                                   <View style={{ height: '100%', paddingHorizontal: 1, backgroundColor: Colors.primary }}></View>

                                   <View style={[mainStyles.centered]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>

                                   <View style={{ height: '100%', paddingHorizontal: 1, backgroundColor: Colors.primary }}></View>

                                   <View style={[mainStyles.centered]}>
                                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                                        <Text style={[mainStyles.normalText]}>1.25$</Text>
                                   </View>
                              </View>
                         </View>
                    </View>
               </View>
               {/* {<ReceiptScreen />} */}
               {isSearchFocused && <ReceiptScreen />}
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
          // elevation: 1,
          borderRadius: 3,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: '10%',
          paddingVertical: 10
     },
     searcgInputs: {
          paddingHorizontal: 10,
          color: Colors.primary,
     },
     nearbys: {
          borderRadius: 3, elevation: 1,
     },
     receiptContainer: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: Colors.background,
          flex: 1,
          zIndex: 2,
     },
})