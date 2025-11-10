import { Colors } from "@/constants/theme";
import { useResponsive } from "@/hooks/use-responsive";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";

export default function ParcelScreen() {
     const { fs, ms, isTablet } = useResponsive()

     return (
          <View>
               <View style={[styles.container]}>
                    <View style={{ backgroundColor: '#FFF5', paddingHorizontal: 10, paddingVertical: 1, borderRadius: 15, alignItems: 'center', flexDirection: 'row' }}>
                         <Ionicons name="search" size={22} color={'#FFF'} />
                         <TextInput style={{ width: '90%', color: '#FFF', paddingHorizontal: 10 }} placeholder="Search my parcels" placeholderTextColor={'#DDD'} />
                    </View>
               </View>
               <View></View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: Colors.primary,
          paddingHorizontal: 20,
          paddingVertical: 10,
          paddingBottom: 20,
     }
})