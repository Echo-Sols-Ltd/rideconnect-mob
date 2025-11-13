import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer'
import { Image, StyleSheet, Text, TouchableOpacity, Platform, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { View } from 'react-native';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';

export default function DashboardLayout() {
     const { fs, ms, isTablet } = useResponsive()
     const color = useColorScheme()
     const mainStyles = useGlobalStyles()
     
     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: color == 'light' ? Colors.background : Colors.default }}>
               <Drawer screenOptions={{ headerShown: false }}>
                    <Drawer.Screen name='home' options={{
                         headerShown: true,
                         header: (props) => {
                              return (
                                   <View style={[styles.container, { paddingHorizontal: ms(isTablet ? 40 : 20) }]}>
                                        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={[mainStyles.menuIcon]} >
                                             <Ionicons name='stats-chart' size={isTablet ? fs(20) : fs(15)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                                        </TouchableOpacity>
                    
                                        <Text style={[mainStyles.normalText]}>{props.route.name.toLocaleUpperCase().toString()}</Text>

                                        <Image source={require("@/assets/images/person.png")} resizeMode='contain'
                                             style={[mainStyles.profileImageOrIcon]}
                                        />
                                   </View>
                              )
                         } 
                    }} />
                    <Drawer.Screen name='parcels' options={{
                         headerShown: true,
                         header: (props) => {
                              return (
                                   <View style={[styles.container, { paddingHorizontal: ms(isTablet ? 40 : 20), backgroundColor: Colors.primary }]}>
                                        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={[mainStyles.menuIcon]} >
                                             <Ionicons name='stats-chart' size={isTablet ? fs(20) : fs(15)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                                        </TouchableOpacity>

                                        <Text style={[mainStyles.normalText, { color: Colors.background }]}>{props.route.name.toLocaleUpperCase().toString()}</Text>

                                        <Ionicons name='notifications' size={isTablet ? 20 : 15} color={Colors.background} style={{
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
                                        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={[mainStyles.menuIcon]} >
                                             <Ionicons name='stats-chart' size={isTablet ? fs(20) : fs(15)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                                        </TouchableOpacity>

                                        <Text style={[mainStyles.normalText, { color: Colors.background }]}>{props.route.name.toLocaleUpperCase().toString()}</Text>

                                        <Ionicons name='notifications' size={isTablet ? 20 : 15} color={Colors.background} style={{
                                             backgroundColor: `${Colors.background}22`, padding: 5, borderRadius: 10
                                        }} />
                                   </View>
                              )
                         }
                    }} />
                    <Drawer.Screen name='hotspot' options={{
                         headerShown: true,
                         header: (props) => {
                              return (
                                   <View style={[styles.container, { paddingHorizontal: ms(isTablet ? 40 : 20), backgroundColor: 'transparent', paddingVertical: isTablet ? ms(20) : 5 }]}>
                                        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={[mainStyles.menuIcon]} >
                                             <Ionicons name='stats-chart' size={isTablet ? fs(20) : fs(15)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                                        </TouchableOpacity>
                                   </View>
                              )
                         }
                    }} />
                    <Drawer.Screen name='ioc' options={{
                         headerShown: true,
                         header: (props) => {
                              return (
                                   <View style={[styles.container, { paddingHorizontal: ms(isTablet ? 40 : 20), backgroundColor: 'transparent', paddingVertical: isTablet ? ms(20) : 5 }]}>
                                        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={[mainStyles.menuIcon]} >
                                             <Ionicons name='stats-chart' size={isTablet ? fs(20) : fs(15)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                                        </TouchableOpacity>
                                   </View>
                              )
                         }
                    }} />
               </Drawer>
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: Platform.OS === 'android' ? 20 : 10,
          backgroundColor: 'white',
          height: Platform.OS === 'android' ? 'auto' : 'auto',
     },
})