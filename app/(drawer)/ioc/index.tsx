import MainBtn from "@/components/mainbtn";
import { Colors } from "@/constants/theme";
import { useResponsive } from "@/hooks/use-responsive";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dispatch, SetStateAction, useState } from "react";
import { Dimensions, Image, StyleSheet, TextInput, View } from "react-native";
import { ScrollView, Text } from "react-native";

const { height, width } = Dimensions.get("window")

export default function IocMainScreen() {
     const { fs, ms, isTablet } = useResponsive()
     const [searchPlace, setSearchPlace] = useState<string>('')

     return (
          <View style={{  }}>
               <View style={[styles.mapContainer]}>
                    <Image source={require("@/assets/images/mapEg.png")} resizeMode="stretch" style={[styles.map]} />
               </View>

               <View style={[styles.search, { marginHorizontal: isTablet ? ms(40) : 20, paddingHorizontal: isTablet ? ms(20) : ms(10) }]}>
                    <Ionicons name="search" size={20} color={Colors.primary} />
                    <TextInput value={searchPlace} onChangeText={setSearchPlace} style={[styles.searcgInputs]} placeholder="Where are you going?" placeholderTextColor={'#4448'} />
               </View>

               <View style={{ position: 'absolute', right: isTablet ? ms(40) : 20, top: 0 }}>
                    <MainBtn isprimary title="Post a Ride" />
               </View>

               <View style={{ paddingHorizontal: isTablet ? ms(40) : 20, backgroundColor: 'white', paddingVertical: 30 }}>
                    <Text style={{ fontSize: fs(16), fontWeight: 500 }}>Nearby rides</Text>

                    <ScrollView>
                         <View style={[styles.nearbys, { paddingHorizontal: fs(20), paddingVertical: fs(10) }]}>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5, paddingHorizontal: 20 }}>
                                   <View style={{ borderRightColor: `${Colors.primary}55`, borderRightWidth: 2, paddingRight: 40 }}>
                                        <Text style={{ fontSize: fs(13), fontWeight: 500, color: `${Colors.primary}66` }}>Price per hour</Text>
                                        <Text style={{ fontSize: fs(14), fontWeight: 500 }}>1.25$</Text>
                                   </View>
                                   <View style={{ borderRightColor: `${Colors.primary}55`, borderRightWidth: 2, paddingRight: 40 }}>
                                        <Text style={{ fontSize: fs(13), fontWeight: 500, color: `${Colors.primary}66` }}>Price per hour</Text>
                                        <Text style={{ fontSize: fs(14), fontWeight: 500 }}>1.25$</Text>
                                   </View>
                                   <View>
                                        <Text style={{ fontSize: fs(13), fontWeight: 500, color: `${Colors.primary}66` }}>Price per hour</Text>
                                        <Text style={{ fontSize: fs(14), fontWeight: 500 }}>1.25$</Text>
                                   </View>
                              </View>
                         </View>
                    </ScrollView>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     mapContainer: {
          position: 'relative',
     },
     map: {
          width: width,
          height: height * 0.5,
          zIndex: -1,
     },
     search: {
          elevation: 1,
          borderRadius: 3,
          paddingVertical: 7,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: '10%'
     },
     searcgInputs: {
          width: '100%',
          paddingHorizontal: 10,
          color: Colors.primary,
     },
     nearbys: {
          borderRadius: 3, elevation: 1,
     }
})