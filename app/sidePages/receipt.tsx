import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';
import MainBtn from '@/components/mainbtn';

export default function ReceiptScreen() {
    const { fs, ms, isTablet } = useResponsive();
    const mainStyles = useGlobalStyles();
    const router = useRouter();

    const receiptData = [
        { label: 'Booking ID:', value: '#123456' },
        { label: 'Booking ID:', value: '#123456' },
        { label: 'Booking ID:', value: '#123456' },
        { label: 'Booking ID:', value: '#123456' },
    ];

    const ReceiptCard = ({ items }: { items: typeof receiptData }) => {
        return (
            <View style={[styles.receiptCard, mainStyles.standardShadow, {
                backgroundColor: Colors.background,
                padding: ms(20),
                marginBottom: ms(15),
                borderRadius: 12
            }]}>
                {items.map((item, index) => (
                    <View key={index} style={[styles.receiptRow, { 
                        paddingVertical: ms(8),
                        borderBottomWidth: index < items.length - 1 ? 1 : 0,
                        borderBottomColor: `${Colors.default}10`
                    }]}>
                        <Text style={[mainStyles.additionalText, { fontSize: fs(13) }]}>
                            {item.label}
                        </Text>
                        <Text style={[mainStyles.normalText, { 
                            fontSize: fs(13), 
                            fontWeight: '600',
                            color: Colors.default
                        }]}>
                            {item.value}
                        </Text>
                    </View>
                ))}
            </View>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: Colors.background }]}>
            <ScrollView 
                style={{ flex: 1 }}
                contentContainerStyle={{ 
                    paddingHorizontal: isTablet ? ms(40) : ms(20),
                    paddingTop: ms(20),
                    paddingBottom: ms(30)
                }}
                showsVerticalScrollIndicator={false}
            >
                {/* Barcode Section */}
                <View style={[styles.barcodeSection, {
                    alignItems: 'center',
                    marginBottom: ms(30)
                }]}>
                    <Image 
                        source={require('@/assets/images/barcode.png')} 
                        style={[styles.barcodeImage, {
                            width: isTablet ? ms(250) : ms(200),
                            height: isTablet ? ms(100) : ms(80),
                            marginBottom: ms(20)
                        }]}
                        resizeMode="contain"
                    />
                </View>

                {/* Receipt Cards */}
                <ReceiptCard items={receiptData} />
                
                <ReceiptCard items={[
                    { label: 'Booking ID:', value: '#123456' },
                    { label: 'Booking ID:', value: '#123456' },
                    { label: 'Booking ID:', value: '#123456' },
                ]} />
                
                <ReceiptCard items={[
                    { label: 'Booking ID:', value: '#123456' },
                    { label: 'Booking ID:', value: '#123456' },
                    { label: 'Booking ID:', value: '#123456' },
                ]} />

                {/* Download Button */}
                <View style={{ marginTop: ms(20) }}>
                    <MainBtn 
                        title="Download Receipt" 
                        isprimary={true}
                        isFullWidth={true}
                        hasIcon={true}
                        onclick={() => {
                            // Handle download receipt
                            console.log('Download receipt');
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    barcodeSection: {
        paddingVertical: 20,
    },
    barcodeImage: {
        // Additional styling if needed
    },
    receiptCard: {
        // Card styling handled inline with mainStyles.standardShadow
    },
    receiptRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
