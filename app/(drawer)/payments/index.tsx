import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';
import MainBtn from '@/components/mainbtn';

export default function PaymentsScreen() {
    const { fs, ms, isTablet } = useResponsive();
    const mainStyles = useGlobalStyles();
    const router = useRouter();
    
    const [walletBalance] = useState(100.00);
    const [selectedCurrency, setSelectedCurrency] = useState('Us Dollars');
    
    const transactions = [
        {
            id: 1,
            type: 'Trip',
            destination: 'To: Rubavu Mall',
            amount: '100.00$',
            date: '10th April 25',
            icon: 'arrow-down'
        },
        {
            id: 2,
            type: 'Trip',
            destination: 'To: Rubavu Mall',
            amount: '100.00$',
            date: '10th April 25',
            icon: 'arrow-down'
        },
        {
            id: 3,
            type: 'Trip',
            destination: 'To: Rubavu Mall',
            amount: '100.00$',
            date: '10th April 25',
            icon: 'arrow-down'
        },
        {
            id: 4,
            type: 'Trip',
            destination: 'To: Rubavu Mall',
            amount: '100.00$',
            date: '10th April 25',
            icon: 'arrow-down'
        },
    ];

    const WalletSection = () => {
        return (
            <View style={[styles.walletSection, { 
                backgroundColor: Colors.primary,
                paddingHorizontal: isTablet ? ms(40) : ms(20),
                paddingTop: ms(20),
                paddingBottom: ms(30),
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
            }]}>
                {/* Wallet Balance */}
                <View style={[styles.balanceSection, { 
                    alignItems: 'center',
                    marginBottom: ms(30)
                }]}>
                    <Text style={[styles.balanceLabel, { 
                        fontSize: fs(14),
                        color: `${Colors.background}80`,
                        marginBottom: ms(8)
                    }]}>
                        Your wallet balance
                    </Text>
                    
                    <Text style={[styles.balanceAmount, { 
                        fontSize: fs(32),
                        color: Colors.background,
                        fontWeight: '600'
                    }]}>
                        ${walletBalance.toFixed(2)}
                    </Text>
                </View>

                {/* Currency Converter */}
                <View style={[styles.converterSection, { 
                    backgroundColor: `${Colors.background}20`,
                    borderRadius: 15,
                    padding: ms(20)
                }]}>
                    <Text style={[styles.converterTitle, { 
                        fontSize: fs(14),
                        color: `${Colors.background}80`,
                        marginBottom: ms(15)
                    }]}>
                        Convert into other currencies
                    </Text>
                    
                    <View style={[styles.converterRow, { 
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }]}>
                        <Pressable style={[styles.currencyButton, { 
                            backgroundColor: Colors.background,
                            paddingHorizontal: ms(15),
                            paddingVertical: ms(8),
                            borderRadius: 15
                        }]}>
                            <Text style={[styles.currencyText, { 
                                fontSize: fs(12),
                                color: Colors.primary,
                                fontWeight: '500'
                            }]}>
                                {selectedCurrency}
                            </Text>
                        </Pressable>
                        
                        <Pressable style={[styles.addButton, { 
                            backgroundColor: `${Colors.background}30`,
                            width: ms(35),
                            height: ms(35),
                            borderRadius: ms(17.5),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }]}>
                            <Ionicons name="add" size={20} color={Colors.background} />
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    };

    const TransactionItem = ({ transaction }: { transaction: typeof transactions[0] }) => {
        return (
            <View style={[styles.transactionItem, mainStyles.standardShadow, { 
                backgroundColor: Colors.background,
                padding: ms(15),
                marginBottom: ms(10),
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center'
            }]}>
                {/* Icon */}
                <View style={[styles.transactionIcon, { 
                    backgroundColor: `${Colors.primary}20`,
                    width: ms(40),
                    height: ms(40),
                    borderRadius: ms(20),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: ms(15)
                }]}>
                    <Ionicons name={transaction.icon as any} size={20} color={Colors.primary} />
                </View>

                {/* Transaction Details */}
                <View style={[styles.transactionDetails, { flex: 1 }]}>
                    <Text style={[mainStyles.normalText, { 
                        fontSize: fs(14),
                        fontWeight: '500',
                        marginBottom: ms(2)
                    }]}>
                        {transaction.type}
                    </Text>
                    <Text style={[mainStyles.additionalText, { fontSize: fs(12) }]}>
                        {transaction.destination}
                    </Text>
                </View>

                {/* Amount and Date */}
                <View style={[styles.transactionMeta, { alignItems: 'flex-end' }]}>
                    <Text style={[mainStyles.normalText, { 
                        fontSize: fs(14),
                        fontWeight: '600',
                        marginBottom: ms(2)
                    }]}>
                        {transaction.amount}
                    </Text>
                    <Text style={[mainStyles.additionalText, { fontSize: fs(11) }]}>
                        {transaction.date}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: Colors.background }]}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {/* Wallet Section */}
                <WalletSection />

                {/* Transactions Section */}
                <View style={[styles.transactionsSection, { 
                    paddingHorizontal: isTablet ? ms(40) : ms(20),
                    paddingTop: ms(25),
                    paddingBottom: ms(20)
                }]}>
                    {/* Section Header */}
                    <View style={[styles.sectionHeader, { 
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: ms(20)
                    }]}>
                        <Text style={[mainStyles.normalHeadings, { fontSize: fs(16) }]}>
                            Recent Transactions
                        </Text>
                        <Pressable>
                            <Text style={[styles.seeAllText, { 
                                fontSize: fs(13),
                                color: Colors.primary,
                                fontWeight: '500'
                            }]}>
                                see all
                            </Text>
                        </Pressable>
                    </View>

                    {/* Transaction List */}
                    <View style={{ gap: ms(5) }}>
                        {transactions.map((transaction) => (
                            <TransactionItem key={transaction.id} transaction={transaction} />
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Add Payment Button */}
            <View style={[styles.addPaymentSection, { 
                paddingHorizontal: isTablet ? ms(40) : ms(20),
                paddingBottom: ms(30),
                paddingTop: ms(15)
            }]}>
                <MainBtn 
                    title="Add Payment" 
                    isprimary={true}
                    isFullWidth={true}
                    hasIcon={true}
                    onclick={() => {
                        // Handle add payment
                        console.log('Add payment clicked');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    walletSection: {
        // Styling handled inline
    },
    header: {
        // Styling handled inline
    },
    headerTitle: {
        // Styling handled inline
    },
    balanceSection: {
        // Styling handled inline
    },
    balanceLabel: {
        // Styling handled inline
    },
    balanceAmount: {
        // Styling handled inline
    },
    converterSection: {
        // Styling handled inline
    },
    converterTitle: {
        // Styling handled inline
    },
    converterRow: {
        // Styling handled inline
    },
    currencyButton: {
        // Styling handled inline
    },
    currencyText: {
        // Styling handled inline
    },
    addButton: {
        // Styling handled inline
    },
    transactionsSection: {
        // Styling handled inline
    },
    sectionHeader: {
        // Styling handled inline
    },
    seeAllText: {
        // Styling handled inline
    },
    transactionItem: {
        // Styling handled inline
    },
    transactionIcon: {
        // Styling handled inline
    },
    transactionDetails: {
        // Styling handled inline
    },
    transactionMeta: {
        // Styling handled inline
    },
    addPaymentSection: {
        // Styling handled inline
    },
});
