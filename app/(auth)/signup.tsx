import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';
import AuthInput from '@/components/AuthInput';

export default function SignUpScreen() {
    const { fs, ms, isTablet } = useResponsive();
    const mainStyles = useGlobalStyles();
    const router = useRouter();
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        location: '',
        role: ''
    });
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const updateFormData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleSignUp = () => {
        // Basic validation
        const newErrors: {[key: string]: string} = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        if (!formData.location.trim()) {
            newErrors.location = 'Location is required';
        }
        
        if (!formData.role.trim()) {
            newErrors.role = 'Please select a role';
        }
        
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            // Navigate to main app or success screen
            router.replace('/(drawer)/home');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            
            <ScrollView 
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Top Section with Car Image */}
                <View style={[styles.topSection, { paddingTop: ms(40) }]}>
                    <Image 
                        source={require('@/assets/images/car_vector.png')} 
                        style={[styles.carImage, { 
                            width: isTablet ? ms(200) : ms(180),
                            height: isTablet ? ms(120) : ms(160),
                            zIndex: 2
                        }]}
                        resizeMode="contain"
                    />
                    <View style={{ backgroundColor: Colors.background, width: 500, height: 500, borderRadius: 500, position: 'absolute', top: -270, zIndex: 1 }}></View>
                </View>

                {/* Bottom Section with Form */}
                <View style={[styles.bottomSection, { 
                    paddingHorizontal: isTablet ? ms(60) : ms(30),
                    paddingTop: ms(30),
                    paddingBottom: ms(30)
                }]}>
                    {/* Title */}
                    <View style={{ alignItems: 'center', marginBottom: ms(30) }}>
                        <Text style={[styles.title, { fontSize: fs(24) }]}>
                            Sign Up
                        </Text>
                        <View style={[styles.titleUnderline, { width: ms(60) }]} />
                    </View>

                    {/* Form */}
                    <View style={{ gap: ms(5) }}>
                        <AuthInput
                            placeholder="Name"
                            value={formData.name}
                            onChangeText={(value) => updateFormData('name', value)}
                            leftIcon="person"
                            autoCapitalize="words"
                            error={errors.name}
                        />

                        <AuthInput
                            placeholder="Phone number"
                            value={formData.phone}
                            onChangeText={(value) => updateFormData('phone', value)}
                            leftIcon="call"
                            keyboardType="phone-pad"
                            error={errors.phone}
                        />

                        <AuthInput
                            placeholder="Email address"
                            value={formData.email}
                            onChangeText={(value) => updateFormData('email', value)}
                            leftIcon="mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            error={errors.email}
                        />

                        <AuthInput
                            placeholder="Password"
                            value={formData.password}
                            onChangeText={(value) => updateFormData('password', value)}
                            leftIcon="lock-closed"
                            secureTextEntry={true}
                            error={errors.password}
                        />

                        <AuthInput
                            placeholder="current location..."
                            value={formData.location}
                            onChangeText={(value) => updateFormData('location', value)}
                            leftIcon="location"
                            error={errors.location}
                        />

                        {/* Role Selection */}
                        <View style={{ marginBottom: ms(15) }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingBottom: ms(8),
                                borderBottomWidth: 1,
                                borderBottomColor: `${Colors.background}60`,
                                gap: ms(12)
                            }}>
                                <Text style={{
                                    fontSize: fs(14),
                                    color: formData.role ? Colors.background : `${Colors.background}80`,
                                    paddingVertical: ms(5),
                                    flex: 1
                                }}>
                                    {formData.role || 'Select Role'}
                                </Text>
                            </View>
                            {errors.role && (
                                <Text style={{ 
                                    fontSize: fs(12), 
                                    color: '#FF6B6B',
                                    marginTop: ms(5)
                                }}>
                                    {errors.role}
                                </Text>
                            )}
                        </View>
                    </View>

                    {/* Sign Up Button */}
                    <View style={{ marginTop: ms(20), marginBottom: ms(20) }}>
                        <Pressable 
                            style={[styles.signUpButton, { 
                                paddingVertical: ms(12),
                                borderRadius: 25
                            }]}
                            onPress={handleSignUp}
                        >
                            <Text style={[styles.signUpButtonText, { fontSize: fs(14) }]}>
                                Sign Up →
                            </Text>
                        </Pressable>
                    </View>

                    {/* Sign In Link */}
                    <View style={styles.signInRow}>
                        <Text style={[styles.signInText, { fontSize: fs(13) }]}>
                            Already have an account?{' '}
                        </Text>
                        <Pressable onPress={() => router.push('/(auth)/signin')}>
                            <Text style={[styles.signInLink, { fontSize: fs(13) }]}>
                                Sign In
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    topSection: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    carImage: {
        marginTop: 10,
    },
    bottomSection: {
        flex: 0.75,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
    },
    title: {
        color: Colors.background,
        fontWeight: '600',
        marginBottom: 8,
    },
    titleUnderline: {
        height: 2,
        backgroundColor: Colors.background,
    },
    signUpButton: {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    signUpButtonText: {
        color: Colors.primary,
        fontWeight: '600',
    },
    signInRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        color: `${Colors.background}80`,
    },
    signInLink: {
        color: Colors.background,
        fontWeight: '600',
    },
});
