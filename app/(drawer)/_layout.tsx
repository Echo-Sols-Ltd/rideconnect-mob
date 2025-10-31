import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer'
import { Image, StyleSheet, Text, TouchableOpacity, Platform, SafeAreaView as Safe } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { View } from 'react-native';

export default function DashboardLayout() {
     return (
          <SafeAreaView style={{ flex: 1 }}>
               <Drawer screenOptions={{
                    headerShown: true, header: (props) => {
                         return (
                              <View style={[styles.container]}>
                                   <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} >
                                        {/* <Ionicons name=' size={20} color={'black'} /> */}
                                        
                                   </TouchableOpacity>

                                   <Text>{props.route.name.toLocaleUpperCase()}</Text>
                                   
                                   <TouchableOpacity>
                                        {/* <Ionicons name='notifications' /> */}
                                        <Image source={require("@/assets/images/person.png")} resizeMode='contain' style={[styles.profile, { borderColor: Colors.primary }]} />
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
          width: 50,
          height: 50,
          borderRadius: 50,
          borderWidth: 2,
     },
     container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingVertical: Platform.OS === 'android' ? 10 : 10,
          backgroundColor: 'white',
          height: Platform.OS === 'android' ? 'auto' : 'auto',
     }
})