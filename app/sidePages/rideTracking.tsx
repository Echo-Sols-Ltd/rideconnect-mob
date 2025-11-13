import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';
import MainBtn from '@/components/mainbtn';

export default function RideTrackingScreen() {
    const { fs, ms, isTablet } = useResponsive();
    const mainStyles = useGlobalStyles();
    const router = useRouter();
    const [showRideDetails, setShowRideDetails] = useState(false);

    const RideDetailsModal = () => {
        return (
            <Modal
                visible={showRideDetails}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowRideDetails(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContent, { 
                        paddingHorizontal: ms(20), 
                        paddingVertical: ms(20),
                        borderRadius: 15,
                        backgroundColor: Colors.background
                    }]}>
                        <Ionicons name="close" size={24} color="black" onPress={() => setShowRideDetails(false)} style={{ alignSelf: 'flex-end' }} />
                        <Text style={[mainStyles.normalHeadings, { marginBottom: ms(15) }]}>
                            Ride Details
                        </Text>
                        
                        <View style={{ gap: ms(10), marginBottom: ms(20) }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[mainStyles.additionalText]}>To:</Text>
                                <Text style={[mainStyles.normalText]}>Price per hour</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[mainStyles.additionalText]}>At:</Text>
                                <Text style={[mainStyles.normalText]}>Price per hour</Text>
                            </View>
                        </View>

                        <MainBtn 
                            title="Cancel Ride" 
                            isprimary={true}
                            isFullWidth={true}
                            hasIcon={true}
                            onclick={() => setShowRideDetails(false)}
                        />
                    </View>
                </View>
            </Modal>
        );
    };

    const DriverInfoCard = () => {
        return (
            <View style={[styles.driverCard, mainStyles.standardShadow, { 
                backgroundColor: Colors.background,
                padding: ms(15),
                marginBottom: ms(15)
            }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: ms(15) }}>
                    <Text style={[mainStyles.normalHeadings]}>Driver arrived</Text>
                    <Text style={[mainStyles.additionalText]}>5 min away</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: ms(15), marginBottom: ms(15) }}>
                    <Image 
                        source={require('@/assets/images/person.png')} 
                        style={[mainStyles.profileImageOrIcon, { width: ms(50), height: ms(50) }]}
                        resizeMode="cover"
                    />
                    
                    <View style={{ flex: 1 }}>
                        <Text style={[mainStyles.normalText, { fontSize: fs(14), fontWeight: '500' }]}>
                            Like Jenny
                        </Text>
                        <Text style={[mainStyles.additionalText]}>Mini</Text>
                    </View>

                    <View style={{ flexDirection: 'row', gap: ms(10) }}>
                        <Pressable style={[styles.actionButton, { backgroundColor: `${Colors.primary}20` }]}>
                            <Ionicons name="call" size={20} color={Colors.primary} />
                        </Pressable>
                        <Pressable style={[styles.actionButton, { backgroundColor: `${Colors.primary}20` }]}>
                            <Ionicons name="chatbubble" size={20} color={Colors.primary} />
                        </Pressable>
                    </View>
                </View>

                <View style={{ gap: ms(10) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: ms(8) }}>
                        <Ionicons name="ellipse" size={12} color={Colors.primary} />
                        <Text style={[mainStyles.normalText]}>From:</Text>
                    </View>
                    <Text style={[mainStyles.normalText, { marginLeft: ms(20), fontWeight: '500' }]}>
                        Kigali, West
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: ms(8), marginTop: ms(5) }}>
                        <Ionicons name="location" size={12} color={Colors.primary} />
                        <Text style={[mainStyles.normalText]}>To:</Text>
                    </View>
                    <Text style={[mainStyles.normalText, { marginLeft: ms(20), fontWeight: '500' }]}>
                        Kigali, West
                    </Text>
                </View>
            </View>
        );
    };

    const PricingInfo = () => {
        return (
            <View style={[styles.pricingCard, mainStyles.standardShadow, { 
                backgroundColor: Colors.background,
                padding: ms(15),
                marginBottom: ms(20)
            }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={[mainStyles.centered]}>
                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                        <Text style={[mainStyles.normalText, { fontWeight: '500' }]}>1.25$</Text>
                    </View>

                    <View style={{ width: 1, height: ms(30), backgroundColor: `${Colors.primary}40` }} />

                    <View style={[mainStyles.centered]}>
                        <Text style={[mainStyles.additionalText]}>Car Number</Text>
                        <Text style={[mainStyles.normalText, { fontWeight: '500' }]}>1.25$</Text>
                    </View>

                    <View style={{ width: 1, height: ms(30), backgroundColor: `${Colors.primary}40` }} />

                    <View style={[mainStyles.centered]}>
                        <Text style={[mainStyles.additionalText]}>Price per hour</Text>
                        <Text style={[mainStyles.normalText, { fontWeight: '500' }]}>1.25$</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Map Background */}
            <View style={styles.mapContainer}>
                <Image 
                    source={require('@/assets/images/mapEg.png')} 
                    style={styles.mapImage}
                    resizeMode="cover"
                />
                
                {/* Ride Details Button */}
                <Pressable 
                    style={[styles.rideDetailsButton]}
                    onPress={() => setShowRideDetails(true)}
                >
                    <Text style={[mainStyles.normalText, { color: Colors.background }]}>
                        Ride Details
                    </Text>
                </Pressable>
            </View>

            {/* Bottom Content */}
            <View style={[styles.bottomContent, { 
                paddingHorizontal: isTablet ? ms(40) : ms(20),
                paddingTop: ms(20),
                paddingBottom: ms(30),
                backgroundColor: Colors.background
            }]}>
                <DriverInfoCard />
                <PricingInfo />
                
                <Pressable style={[styles.viewReceiptButton, { 
                    backgroundColor: `${Colors.primary}20`,
                    paddingVertical: ms(12),
                    borderRadius: 25
                }]}>
                    <Text style={[mainStyles.normalText, { 
                        color: Colors.primary, 
                        textAlign: 'center',
                        fontWeight: '500'
                    }]}>
                        View Receipt
                    </Text>
                </Pressable>
            </View>

            <RideDetailsModal />
        </View>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 0.4,
        position: 'relative',
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
    },
    rideDetailsButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        backgroundColor: Colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        zIndex: 1,
    },
    bottomContent: {
        flex: 0.6,
        backgroundColor: Colors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
    },
    driverCard: {
        borderRadius: 10,
    },
    pricingCard: {
        borderRadius: 10,
    },
    actionButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewReceiptButton: {
        width: '100%',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalContent: {
        width: '90%',
        maxWidth: 400,
    },
});
