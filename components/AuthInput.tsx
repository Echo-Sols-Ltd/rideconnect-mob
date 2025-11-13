import React from 'react';
import { TextInput as RNTextInput, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';

interface AuthInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    error?: string;
}

export default function AuthInput(props: AuthInputProps) {
    const { fs, ms } = useResponsive();
    const mainStyles = useGlobalStyles();

    return (
        <View style={{ marginBottom: ms(20) }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: ms(8),
                borderBottomWidth: 1,
                borderBottomColor: `${Colors.background}60`,
                gap: ms(12)
            }}>
                {props.leftIcon && (
                    <Ionicons 
                        name={props.leftIcon} 
                        size={20} 
                        color={Colors.background} 
                    />
                )}
                
                <RNTextInput
                    style={{
                        flex: 1,
                        fontSize: fs(14),
                        color: Colors.background,
                        paddingVertical: ms(5),
                    }}
                    placeholder={props.placeholder}
                    placeholderTextColor={`${Colors.background}80`}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    keyboardType={props.keyboardType}
                    secureTextEntry={props.secureTextEntry}
                    autoCapitalize={props.autoCapitalize}
                />
            </View>
            
            {props.error && (
                <Text style={{ 
                    fontSize: fs(12), 
                    color: '#FF6B6B',
                    marginTop: ms(5)
                }}>
                    {props.error}
                </Text>
            )}
        </View>
    );
}
