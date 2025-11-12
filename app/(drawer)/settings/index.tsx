import { useResponsive } from "@/hooks/use-responsive";
import useGlobalStyles from "@/hooks/use-styles-global";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsHomeSecreen() {
     const { fs, ms, isTablet } = useResponsive()
     const mainStyles = useGlobalStyles()

     return (
          <View style={[styles.container, { paddingHorizontal: isTablet ? 40 : 20 }]}>
               <Text style={[mainStyles.normalHeadings]}>GENERAL</Text>

               <View style={{ gap: 5 }}>
                    <View style={[styles.option, mainStyles.standardShadow]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="person" size={20} />
                              <Text style={{ fontSize: fs(14) }}>Account</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <View style={[styles.option, mainStyles.standardShadow]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="notifications" size={20} />
                              <Text style={{ fontSize: fs(14) }}>Notifications</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <View style={[styles.option, mainStyles.standardShadow]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="log-out-outline" size={20} />
                              <Text style={{ fontSize: fs(14) }}>Logout</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <View style={[styles.option, mainStyles.standardShadow]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="trash" size={20} color={'#FF2222'} />
                              <Text style={{ fontSize: fs(14), color: '#FF2222' }}>Delete Account</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} color={'#FF2222'} />
                    </View>
               </View>

               <Text style={[mainStyles.normalHeadings, { marginTop: 10 }]}>FEEDBACK</Text>

               <View style={{ gap: 5 }}>
                    <View style={[styles.option, mainStyles.standardShadow]}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                              <Ionicons name="bug" size={20} />
                              <Text style={{ fontSize: fs(14) }}>Report a bug</Text>
                         </View>
                         <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <View style={[styles.option, mainStyles.standardShadow]}>
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
          gap: 10,
     },
     option: {
          paddingHorizontal: 10,
          paddingVertical: 10,
          elevation: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
     }
})