import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, StatusBar } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';

export default function CallingScreen() {
    const { fs, ms, isTablet } = useResponsive();
    const mainStyles = useGlobalStyles();
    const router = useRouter();
    const params = useLocalSearchParams();
    
    // Get user data from params or use default
    const userName = params.name as string || 'Alshababu';
    const userImage = params.image as string || require('@/assets/images/person.png');
    
    const [callDuration, setCallDuration] = useState(0);
    const [isCallActive, setIsCallActive] = useState(true);

    // Timer for call duration
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isCallActive) {
            interval = setInterval(() => {
                setCallDuration(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isCallActive]);

    // Format time as MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleEndCall = () => {
        setIsCallActive(false);
        // Navigate back or to a specific screen
        router.back();
    };

    const handleMute = () => {
        // Handle mute functionality
        console.log('Mute toggled');
    };

    const handleSpeaker = () => {
        // Handle speaker functionality
        console.log('Speaker toggled');
    };

    return (
        <View style={[styles.container, { backgroundColor: Colors.primary }]}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            
            {/* Back Button */}
            <Pressable 
                style={[styles.backButton, { 
                    top: isTablet ? ms(60) : ms(50),
                    left: isTablet ? ms(40) : ms(20)
                }]}
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={24} color={Colors.background} />
            </Pressable>

            {/* Main Content */}
            <View style={[styles.content, { 
                paddingHorizontal: isTablet ? ms(60) : ms(30),
                paddingTop: isTablet ? ms(120) : ms(100)
            }]}>
                {/* Profile Section */}
                <View style={[styles.profileSection, { marginBottom: ms(40) }]}>
                    {/* Profile Image with Circle Background */}
                    <View style={[styles.profileImageContainer, {
                        width: isTablet ? ms(180) : ms(140),
                        height: isTablet ? ms(180) : ms(140),
                        borderRadius: isTablet ? ms(90) : ms(70),
                        backgroundColor: `${Colors.background}20`,
                        marginBottom: ms(30)
                    }]}>
                        <View style={[styles.innerCircle, {
                            width: isTablet ? ms(120) : ms(90),
                            height: isTablet ? ms(120) : ms(90),
                            borderRadius: isTablet ? ms(60) : ms(45),
                            backgroundColor: `${Colors.background}30`
                        }]}>
                            <Image 
                                source={typeof userImage === 'string' ? { uri: userImage } : userImage}
                                style={[styles.profileImage, {
                                    width: isTablet ? ms(80) : ms(60),
                                    height: isTablet ? ms(80) : ms(60),
                                    borderRadius: isTablet ? ms(40) : ms(30)
                                }]}
                                resizeMode="cover"
                            />
                        </View>
                    </View>

                    {/* User Name */}
                    <Text style={[styles.userName, { 
                        fontSize: fs(20),
                        color: Colors.background,
                        fontWeight: '500',
                        marginBottom: ms(8)
                    }]}>
                        {userName}
                    </Text>

                    {/* Call Duration */}
                    <Text style={[styles.callDuration, { 
                        fontSize: fs(16),
                        color: `${Colors.background}80`
                    }]}>
                        {formatTime(callDuration)}
                    </Text>
                </View>
            </View>

            {/* Bottom Controls */}
            <View style={[styles.controlsContainer, { 
                paddingHorizontal: isTablet ? ms(60) : ms(30),
                paddingBottom: isTablet ? ms(60) : ms(40)
            }]}>
                <View style={[styles.controlsRow, { gap: ms(40) }]}>
                    {/* Mute Button */}
                    <Pressable 
                        style={[styles.controlButton, {
                            backgroundColor: `${Colors.background}20`,
                            width: isTablet ? ms(60) : ms(50),
                            height: isTablet ? ms(60) : ms(50),
                            borderRadius: isTablet ? ms(30) : ms(25)
                        }]}
                        onPress={handleMute}
                    >
                        <Ionicons name="mic-off" size={isTablet ? 28 : 24} color={Colors.background} />
                    </Pressable>

                    {/* End Call Button */}
                    <Pressable 
                        style={[styles.endCallButton, {
                            backgroundColor: '#FF4444',
                            width: isTablet ? ms(70) : ms(60),
                            height: isTablet ? ms(70) : ms(60),
                            borderRadius: isTablet ? ms(35) : ms(30)
                        }]}
                        onPress={handleEndCall}
                    >
                        <Ionicons name="call" size={isTablet ? 32 : 28} color={Colors.background} />
                    </Pressable>

                    {/* Speaker Button */}
                    <Pressable 
                        style={[styles.controlButton, {
                            backgroundColor: `${Colors.background}20`,
                            width: isTablet ? ms(60) : ms(50),
                            height: isTablet ? ms(60) : ms(50),
                            borderRadius: isTablet ? ms(30) : ms(25)
                        }]}
                        onPress={handleSpeaker}
                    >
                        <Ionicons name="volume-high" size={isTablet ? 28 : 24} color={Colors.background} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        position: 'absolute',
        zIndex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileSection: {
        alignItems: 'center',
    },
    profileImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        // Additional styling if needed
    },
    userName: {
        textAlign: 'center',
    },
    callDuration: {
        textAlign: 'center',
    },
    controlsContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    controlsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    endCallButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
