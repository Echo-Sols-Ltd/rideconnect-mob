import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer'
import { Image, StyleSheet, Text, TouchableOpacity, Platform, SafeAreaView as Safe } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { View } from 'react-native';
import { useResponsive } from '@/hooks/use-responsive';

export default function DashboardLayout() {
     const { fs, ms, isTablet } = useResponsive()
     
     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
               <Drawer screenOptions={{
                    headerShown: true, header: (props) => {
                         return (
                              <View style={[styles.container, { paddingHorizontal: ms(isTablet ? 40 : 20) }]}>
                                   <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} >
                                        <Ionicons name='stats-chart' size={fs(20)} color={'black'} style={{ transform: [{ rotate: '90deg' }] }} />
                                   </TouchableOpacity>

                                   <Text style={{ fontSize: fs(16), fontWeight: 500 }}>{props.route.name.toLocaleUpperCase().toString()}</Text>
                                   
                                   <TouchableOpacity>
                                        {/* <Ionicons name='notifications' /> */}
                                        <Image source={require("@/assets/images/person.png")} resizeMode='contain'
                                             style={[styles.profile, { borderColor: Colors.primary, width: ms(isTablet ? 40 : 50), height: ms(isTablet ? 40 : 50) }]}
                                        />
                                   </TouchableOpacity>
                              </View>
                         )
                    }
               }}>
                    <Drawer.Screen name='home' />
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
          paddingVertical: Platform.OS === 'android' ? 10 : 10,
          backgroundColor: 'white',
          height: Platform.OS === 'android' ? 'auto' : 'auto',
     }
})