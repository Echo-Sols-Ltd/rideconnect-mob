import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@/constants/theme';

export default function DashboardLayout() {
     return (
          <Drawer screenOptions={{
               headerShown: true, header: (props) => {
                    return (
                         <SafeAreaView style={[styles.container]}>
                              <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} >
                                   <Ionicons name='menu' size={20} />
                              </TouchableOpacity>

                              <Text>{props.route.name.toLocaleUpperCase()}</Text>
                              
                              <TouchableOpacity>
                                   {/* <Ionicons name='notifications' /> */}
                                   <Image source={require("@/assets/images/person.png")} resizeMode='contain' style={[styles.profile, { borderColor: Colors.primary }]} />
                              </TouchableOpacity>
                         </SafeAreaView>
                    )
               }
          }}>
               <Drawer.Screen name='home' />
          </Drawer>
     );
}

const styles = StyleSheet.create({
     profile: {
          width: 30,
          height: 30,
          borderRadius: 50,
          borderWidth: 2,
     },
     container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 5,
          backgroundColor: 'white'
     }
})