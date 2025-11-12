import { Colors } from "@/constants/theme";
import { useResponsive } from "@/hooks/use-responsive";
import useGlobalStyles from "@/hooks/use-styles-global";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ParcelScreen() {
     const { fs, ms, isTablet } = useResponsive()
     const mainStyles = useGlobalStyles()

     const TravelOverview = () => {
          return (
               <View style={[styles.travel, { marginHorizontal: isTablet ? ms(40) : 20 }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                         <Text style={{ display: 'flex', flexDirection: 'row', gap: 5, fontSize: fs(13), fontWeight: 500 }}><Ionicons name="grid-outline" size={14} /> GR12345</Text>
                         <Text style={{ color: '#FF8235', fontSize: fs(13) }}><Ionicons name="stop" size={12} style={{ borderRadius: 10 }} /> On the way</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: ms(10) }}>
                         <View style={[styles.round, { width: isTablet ? 50 : 30, height: isTablet ? 50 : 30 }]}>
                              <Ionicons name="bus" size={20} color={Colors.background} />
                         </View>
                         <View style={[styles.line, { backgroundColor: `${Colors.primary}55` }]}></View>
                         <View style={[styles.round, { backgroundColor: `${Colors.primary}55`, width: isTablet ? 50 : 30, height: isTablet ? 50 : 30 }]}></View>
                         <View style={[styles.line, { backgroundColor: `${Colors.primary}55` }]}></View>
                         <View style={[styles.round, { backgroundColor: `${Colors.primary}55`, width: isTablet ? 50 : 30, height: isTablet ? 50 : 30 }]}></View>
                         <View style={[styles.line, { backgroundColor: `${Colors.primary}55` }]}></View>
                         <View style={[styles.round, { backgroundColor: `${Colors.primary}55`, width: isTablet ? 50 : 30, height: isTablet ? 50 : 30 }]}></View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[mainStyles.additionalText]}>12 Mar 2023</Text>
                              <Text style={[mainStyles.normalText]}>Moscow</Text>
                         </View>
                        
                         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[mainStyles.additionalText]}>15 Dec 2024</Text>
                              <Text style={[mainStyles.normalText]}>Kigali</Text>
                         </View>
                    </View>
               </View>
          )
     }

     const Tracking = () => {
          return (
               <View style={{ paddingHorizontal: isTablet ? ms(40) : 20, paddingTop: isTablet ? 20 : 10 }}>
                    <Text style={[mainStyles.normalHeadings, { marginBottom: isTablet ? 20 : 5 }]}>Tracking</Text>

                    <View style={{ gap: 5 }}>
                         <View style={[mainStyles.standardShadow, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: isTablet ? ms(5) : 10, paddingVertical: 5 }]}>
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                   <Ionicons name="call" size={isTablet ? 30 : 20} color={Colors.primary} style={{ padding: 5, backgroundColor: `${Colors.primary}33`, borderRadius: 50 }} />
                                   <View>
                                        <Text style={{ fontSize: fs(14) }}>#ID1234</Text>
                                        <Text style={{ color: `${Colors.primary}66`, fontSize: fs(12) }}>Mainbox main</Text>
                                   </View>
                              </View>
                              <Text style={{ fontSize: fs(14), color: '#03A700' }}><Ionicons name="stop" size={14} /> Delivered</Text>
                         </View>
                         <View style={[mainStyles.standardShadow, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: isTablet ? ms(5) : 10, paddingVertical: 5 }]}>
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                   <Ionicons name="call" size={isTablet ? 30 : 20} color={Colors.primary} style={{ padding: 5, backgroundColor: `${Colors.primary}33`, borderRadius: 50 }} />
                                   <View>
                                        <Text style={{ fontSize: fs(14) }}>#ID1234</Text>
                                        <Text style={{ color: `${Colors.primary}66`, fontSize: fs(12) }}>Mainbox main</Text>
                                   </View>
                              </View>
                              <Text style={{ fontSize: fs(14), color: '#03A700' }}><Ionicons name="stop" size={14} /> Delivered</Text>
                         </View>
                         <View style={[mainStyles.standardShadow, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: isTablet ? ms(5) : 10, paddingVertical: 5 }]}>
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                   <Ionicons name="call" size={isTablet ? 30 : 20} color={Colors.primary} style={{ padding: 5, backgroundColor: `${Colors.primary}33`, borderRadius: 50 }} />
                                   <View>
                                        <Text style={{ fontSize: fs(14) }}>#ID1234</Text>
                                        <Text style={{ color: `${Colors.primary}66`, fontSize: fs(12) }}>Mainbox main</Text>
                                   </View>
                              </View>
                              <Text style={{ fontSize: fs(14), color: '#FF8235' }}><Ionicons name="stop" size={14} /> On the way</Text>
                         </View>
                         <View style={[mainStyles.standardShadow, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: isTablet ? ms(5) : 10, paddingVertical: 5 }]}>
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                   <Ionicons name="call" size={isTablet ? 30 : 20} color={Colors.primary} style={{ padding: 5, backgroundColor: `${Colors.primary}33`, borderRadius: 50 }} />
                                   <View>
                                        <Text style={{ fontSize: fs(14) }}>#ID1234</Text>
                                        <Text style={{ color: `${Colors.primary}66`, fontSize: fs(12) }}>Mainbox main</Text>
                                   </View>
                              </View>
                              <Text style={{ fontSize: fs(14), color: '#FF2F2F' }}><Ionicons name="stop" size={14} /> Not yet</Text>
                         </View>
                    </View>
               </View>
          )
     }

     return (
          <View style={{ gap: isTablet ? 30 : 10 }}>
               <View style={[styles.container, { paddingHorizontal: isTablet ? ms(40) : 20 }]}>
                    <View style={{ backgroundColor: '#FFF5', paddingHorizontal: 10, borderRadius: 15, alignItems: 'center', flexDirection: 'row' }}>
                         <Ionicons name="search" size={22} color={'#FFF'} />
                         <TextInput style={{ width: '90%', color: '#FFF', paddingHorizontal: 10 }} placeholder="Search my parcels" placeholderTextColor={'#DDD'} />
                    </View>
               </View>
               <TravelOverview />
               <Tracking />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: Colors.primary,
          paddingHorizontal: 20,
          paddingBottom: 20,
     },
     travel: {
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 20,
          gap: 5,
          backgroundColor: `${Colors.primary}33`,
     },
     round: {
          borderRadius: 100,
          backgroundColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
     },
     line: {
          height: 4,
          backgroundColor: Colors.primary,
          paddingHorizontal: '10%'
     }
})