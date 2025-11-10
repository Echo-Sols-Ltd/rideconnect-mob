import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer'
import { Image, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { View } from 'react-native';
import { useResponsive } from '@/hooks/use-responsive';

export default function DashboardLayout() {
     const { fs, ms, isTablet } = useResponsive()
     
     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
               <Drawer screenOptions={{ headerShown: false }}>
                    <Drawer.Screen name='home' options={{
                         headerShown: true,
                         header: (props) => {
                              return (
                                   <View style={[styles.container, { paddingHorizontal: ms(isTablet ? 40 : 20) }]}>
                                        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} >
                                             <Ionicons name='stats-chart' size={fs(20)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                                        </TouchableOpacity>
                    
                                        <Text style={{ fontSize: fs(16), fontWeight: 500 }}>{props.route.name.toLocaleUpperCase().toString()}</Text>
                                                       
                                        <TouchableOpacity>
                                             <Image source={require("@/assets/images/person.png")} resizeMode='contain'
                                                  style={[styles.profile, { borderColor: Colors.primary, width: ms(isTablet ? 40 : 50), height: ms(isTablet ? 40 : 50) }]}
                                             />
                                        </TouchableOpacity>
                                   </View>
                              )
                         } 
                    }} />
                    <Drawer.Screen name='parcels' options={{
                         headerShown: true,
                         header: (props) => {
                              return (
                                   <View style={[styles.container, { paddingHorizontal: ms(isTablet ? 40 : 20), backgroundColor: Colors.primary }]}>
                                        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={[styles.menuBlue]} >
                                             <Ionicons name='stats-chart' size={fs(20)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                                        </TouchableOpacity>

                                        <Text style={{ fontSize: fs(16), fontWeight: 500, color: Colors.background }}>{props.route.name.toLocaleUpperCase().toString()}</Text>

                                        <Ionicons name='notifications' size={20} color={Colors.background} style={{
                                             backgroundColor: `${Colors.background}22`, padding: 5, borderRadius: 10
                                        }} />
                                   </View>
                              )
                         }
                    }} />
                    <Drawer.Screen name='settings' options={{
                         headerShown: true,
                         header: (props) => {
                              return (
                                   <View style={[styles.container, { paddingHorizontal: ms(isTablet ? 40 : 20), backgroundColor: Colors.primary }]}>
                                        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={[styles.menuBlue]} >
                                             <Ionicons name='stats-chart' size={fs(20)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                                        </TouchableOpacity>

                                        <Text style={{ fontSize: fs(16), fontWeight: 500, color: Colors.background }}>{props.route.name.toLocaleUpperCase().toString()}</Text>

                                        <Ionicons name='notifications' size={20} color={Colors.background} style={{
                                             backgroundColor: `${Colors.background}22`, padding: 5, borderRadius: 10
                                        }} />
                                   </View>
                              )
                         }
                    }} />
               </Drawer>
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     profile: {
          borderRadius: 50,
          borderWidth: 2,
     },
     container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: Platform.OS === 'android' ? 20 : 10,
          backgroundColor: 'white',
          height: Platform.OS === 'android' ? 'auto' : 'auto',
     },
     menuBlue: {
          borderRadius: 50,
          paddingHorizontal: 6,
          paddingVertical: 6,
          backgroundColor: Colors.background,
     }
})