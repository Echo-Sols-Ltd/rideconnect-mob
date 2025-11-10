import { Colors } from "@/constants/theme";
import { useResponsive } from "@/hooks/use-responsive";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsHomeSecreen() {
     const { fs, ms, isTablet } = useResponsive()
     return (
          <View style={[styles.container, { paddingHorizontal: isTablet ? 40 : 20 }]}>
               <Text style={{ fontSize: fs(18), fontWeight: 500 }}>GENERAL</Text>

               <View style={{ gap: 5 }}>
                    <View style={[styles.option]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="person" size={20} />
                              <Text style={{ fontSize: fs(14) }}>Account</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <View style={[styles.option]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="notifications" size={20} />
                              <Text style={{ fontSize: fs(14) }}>Notifications</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <View style={[styles.option]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="log-out-outline" size={20} />
                              <Text style={{ fontSize: fs(14) }}>Logout</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <View style={[styles.option]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="trash" size={20} color={'#FF2222'} />
                              <Text style={{ fontSize: fs(14), color: '#FF2222' }}>Delete Account</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} color={'#FF2222'} />
                    </View>
               </View>

               <Text style={{ fontSize: fs(18), fontWeight: 500 }}>FEEDBACK</Text>

               <View style={{ gap: 5 }}>
                    <View style={[styles.option]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="bug" size={20} />
                              <Text style={{ fontSize: fs(14) }}>Report a bug</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <View style={[styles.option]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="return-up-forward" size={20} />
                              <Text style={{ fontSize: fs(14) }}>Send Feedback</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} />
                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingVertical: 30,
          gap: 20,
     },
     title: {
          fontSize: 20,
          fontWeight: 500,
     },
     option: {
          paddingHorizontal: 20,
          paddingVertical: 10,
          elevation: 1,
          shadowColor: '#444',
          shadowOffset: { height: 2, width: 1 },
          shadowRadius: 10,
          borderRadius: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
     }
})