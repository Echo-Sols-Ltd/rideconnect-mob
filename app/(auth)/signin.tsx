import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';
import AuthInput from '@/components/AuthInput';
import MainBtn from '@/components/mainbtn';

export default function SignInScreen() {
    const { fs, ms, isTablet } = useResponsive();
    const mainStyles = useGlobalStyles();
    const router = useRouter();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<{email?: string; password?: string}>({});

    const handleSignIn = () => {
        // Basic validation
        const newErrors: {email?: string; password?: string} = {};
        
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!email.includes('@')) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            // Navigate to main app
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
                <View style={[styles.topSection, { paddingTop: ms(60) }]}>
                    <Image 
                        source={require('@/assets/images/car_vector.png')} 
                        style={[styles.carImage, { 
                            width: isTablet ? ms(250) : ms(230),
                            height: isTablet ? ms(150) : ms(130),
                            zIndex: 2
                        }]}
                        resizeMode="contain"
                    />
                    <View style={{ backgroundColor: Colors.background, width: 500, height: 500, borderRadius: 500, position: 'absolute', top: -230, zIndex: 1 }}></View>
                </View>

                {/* Bottom Section with Form */}
                <View style={[styles.bottomSection, { 
                    paddingHorizontal: isTablet ? ms(60) : ms(30),
                    paddingTop: ms(40),
                    paddingBottom: ms(30)
                }]}>
                    {/* Title */}
                    <View style={{ alignItems: 'center', marginBottom: ms(40) }}>
                        <Text style={[styles.title, { fontSize: fs(24) }]}>
                            Sign In
                        </Text>
                        <View style={[styles.titleUnderline, { width: ms(60) }]} />
                    </View>

                    {/* Form */}
                    <View style={{ gap: ms(5) }}>
                        <AuthInput
                            placeholder="Email address"
                            value={email}
                            onChangeText={setEmail}
                            leftIcon="mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            error={errors.email}
                        />

                        <AuthInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            leftIcon="lock-closed"
                            secureTextEntry={true}
                            error={errors.password}
                        />
                    </View>

                    {/* Remember Me & Forgot Password */}
                    <View style={[styles.optionsRow, { marginTop: ms(20), marginBottom: ms(30) }]}>
                        <Pressable 
                            style={styles.rememberMeRow}
                            onPress={() => setRememberMe(!rememberMe)}
                        >
                            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                                {rememberMe && (
                                    <Text style={styles.checkmark}>✓</Text>
                                )}
                            </View>
                            <Text style={[styles.rememberMeText, { fontSize: fs(13) }]}>
                                Remember me
                            </Text>
                        </Pressable>

                        <Pressable onPress={() => {/* Handle forgot password */}}>
                            <Text style={[styles.forgotPasswordText, { fontSize: fs(13) }]}>
                                Forgot Password?
                            </Text>
                        </Pressable>
                    </View>

                    {/* Sign In Button */}
                    <View style={{ marginBottom: ms(20) }}>
                        <Pressable 
                            style={[styles.signInButton, { 
                                paddingVertical: ms(12),
                                borderRadius: 25
                            }]}
                            onPress={handleSignIn}
                        >
                            <Text style={[styles.signInButtonText, { fontSize: fs(14) }]}>
                                Sign In →
                            </Text>
                        </Pressable>
                    </View>

                    {/* Sign Up Link */}
                    <View style={styles.signUpRow}>
                        <Text style={[styles.signUpText, { fontSize: fs(13) }]}>
                            Don't have an account?{' '}
                        </Text>
                        <Pressable onPress={() => router.push('/(auth)/signup')}>
                            <Text style={[styles.signUpLink, { fontSize: fs(13) }]}>
                                Sign Up
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
        flex: 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    carImage: {
        marginTop: 20,
    },
    bottomSection: {
        flex: 0.65,
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
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rememberMeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: `${Colors.background}60`,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: Colors.background,
    },
    checkmark: {
        color: Colors.primary,
        fontSize: 12,
        fontWeight: 'bold',
    },
    rememberMeText: {
        color: `${Colors.background}80`,
    },
    forgotPasswordText: {
        color: Colors.background,
        fontWeight: '500',
    },
    signInButton: {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    signInButtonText: {
        color: Colors.primary,
        fontWeight: '600',
    },
    signUpRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: `${Colors.background}80`,
    },
    signUpLink: {
        color: Colors.background,
        fontWeight: '600',
    },
});
