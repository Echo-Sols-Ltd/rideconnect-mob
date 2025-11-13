import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';

interface MenuItem {
    id: string;
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    route: string;
    isActive?: boolean;
}

export default function CustomDrawer(props: DrawerContentComponentProps) {
    const { fs, ms, isTablet } = useResponsive();
    const mainStyles = useGlobalStyles();
    const router = useRouter();

    const menuItems: MenuItem[] = [
        {
            id: 'home',
            title: 'Home',
            icon: 'menu',
            route: '/(drawer)/home',
        },
        {
            id: 'book',
            title: 'Book a ride',
            icon: 'menu',
            route: '/(drawer)/hotspot',
        },
        {
            id: 'share',
            title: 'Share your ride',
            icon: 'menu',
            route: '/(drawer)/ioc',
        },
        {
            id: 'package',
            title: 'Package delivery',
            icon: 'menu',
            route: '/(drawer)/parcels',
        },
        {
            id: 'payments',
            title: 'Payments',
            icon: 'menu',
            route: '/(drawer)/payments',
        },
        {
            id: 'settings',
            title: 'Settings',
            icon: 'menu',
            route: '/(drawer)/settings',
        },
    ];

    const handleNavigation = (route: string) => {
        props.navigation.closeDrawer();
        router.push(route as any);
    };

    const handleLogout = () => {
        props.navigation.closeDrawer();
        // Navigate to auth screens
        router.replace('/(auth)/signin');
    };

    const ProfileSection = () => {
        return (
            <View style={[styles.profileSection, { 
                paddingHorizontal: isTablet ? ms(30) : ms(20),
                paddingTop: ms(20),
                paddingBottom: ms(30)
            }]}>
                {/* App Title */}
                <Text style={[styles.appTitle, { 
                    fontSize: fs(18),
                    color: Colors.background,
                    fontWeight: '600',
                    marginBottom: ms(25)
                }]}>
                    RideConnect
                </Text>

                {/* User Profile */}
                <View style={[styles.userProfile, { 
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <Image 
                            source={require('@/assets/images/person.png')} 
                            style={[styles.profileImage, {
                                width: isTablet ? ms(50) : ms(40),
                                height: isTablet ? ms(50) : ms(40),
                                borderRadius: isTablet ? ms(25) : ms(20),
                                marginRight: ms(12)
                            }]}
                            resizeMode="cover"
                        />
                        
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.userName, { 
                                fontSize: fs(14),
                                color: Colors.background,
                                fontWeight: '500',
                                marginBottom: ms(2)
                            }]}>
                                Mr John Doe
                            </Text>
                            <Text style={[styles.userRole, { 
                                fontSize: fs(12),
                                color: `${Colors.background}70`
                            }]}>
                                Passenger
                            </Text>
                        </View>
                    </View>

                    {/* Switch Account */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.switchText, { 
                            fontSize: fs(11),
                            color: `${Colors.background}70`,
                            marginBottom: ms(5)
                        }]}>
                            Switch Account
                        </Text>
                        <Pressable style={[styles.switchButton, {
                            backgroundColor: `${Colors.background}20`,
                            width: ms(35),
                            height: ms(35),
                            borderRadius: ms(17.5),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }]}>
                            <Ionicons name="chevron-forward" size={16} color={Colors.background} />
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    };

    const MenuItem = ({ item }: { item: MenuItem }) => {
        const isActive = props.state.routeNames[props.state.index] === item.id;
        
        return (
            <Pressable 
                style={[styles.menuItem, { 
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: isTablet ? ms(30) : ms(20),
                    paddingVertical: ms(12),
                    backgroundColor: isActive ? `${Colors.background}10` : 'transparent'
                }]}
                onPress={() => handleNavigation(item.route)}
            >
                <Ionicons 
                    name={item.icon} 
                    size={isTablet ? 22 : 18} 
                    color={Colors.background} 
                    style={{ marginRight: ms(15) }}
                />
                <Text style={[styles.menuText, { 
                    fontSize: fs(14),
                    color: Colors.background,
                    fontWeight: isActive ? '600' : '400'
                }]}>
                    {item.title}
                </Text>
            </Pressable>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: Colors.primary }]}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {/* Profile Section */}
                <ProfileSection />

                {/* Menu Items */}
                <View style={[styles.menuSection, { paddingVertical: ms(10) }]}>
                    {menuItems.map((item) => (
                        <MenuItem key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>

            {/* Logout Section */}
            <View style={[styles.logoutSection, { 
                paddingHorizontal: isTablet ? ms(30) : ms(20),
                paddingBottom: ms(30),
                paddingTop: ms(20)
            }]}>
                <Pressable 
                    style={[styles.logoutButton, { 
                        flexDirection: 'row',
                        alignItems: 'center'
                    }]}
                    onPress={handleLogout}
                >
                    <Ionicons 
                        name="log-out" 
                        size={isTablet ? 22 : 18} 
                        color="#FF4444" 
                        style={{ marginRight: ms(15) }}
                    />
                    <Text style={[styles.logoutText, { 
                        fontSize: fs(14),
                        color: '#FF4444',
                        fontWeight: '500'
                    }]}>
                        Log out
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileSection: {
        // Styling handled inline
    },
    appTitle: {
        // Styling handled inline
    },
    userProfile: {
        // Styling handled inline
    },
    profileImage: {
        // Styling handled inline
    },
    userName: {
        // Styling handled inline
    },
    userRole: {
        // Styling handled inline
    },
    switchText: {
        // Styling handled inline
    },
    switchButton: {
        // Styling handled inline
    },
    menuSection: {
        // Styling handled inline
    },
    menuItem: {
        // Styling handled inline
    },
    menuText: {
        // Styling handled inline
    },
    logoutSection: {
        // Styling handled inline
    },
    logoutButton: {
        // Styling handled inline
    },
    logoutText: {
        // Styling handled inline
    },
});
