import React from 'react';
import { TextInput as RNTextInput, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import { useResponsive } from '@/hooks/use-responsive';
import useGlobalStyles from '@/hooks/use-styles-global';

interface TextInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onPress?: () => void;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    variant?: 'default' | 'search' | 'location' | 'datetime';
    editable?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    label?: string;
    error?: string;
    disabled?: boolean;
}

export default function TextInput(props: TextInputProps) {
    const { fs, ms, isTablet } = useResponsive();
    const mainStyles = useGlobalStyles();

    const getVariantStyles = () => {
        switch (props.variant) {
            case 'search':
                return {
                    backgroundColor: Colors.background,
                    borderRadius: 3,
                    paddingHorizontal: isTablet ? ms(20) : ms(10),
                    paddingVertical: ms(5),
                };
            case 'location':
                return {
                    backgroundColor: Colors.background,
                    borderRadius: 10,
                    paddingHorizontal: isTablet ? 20 : 10,
                    paddingVertical: ms(5),
                };
            case 'datetime':
                return {
                    backgroundColor: Colors.background,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    paddingVertical: ms(5),
                };
            default:
                return {
                    backgroundColor: Colors.background,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    paddingVertical: ms(5),
                };
        }
    };

    const getIconName = () => {
        if (props.leftIcon) return props.leftIcon;
        
        switch (props.variant) {
            case 'search':
                return 'search';
            case 'location':
                return 'location';
            case 'datetime':
                return 'calendar';
            default:
                return undefined;
        }
    };

    const iconName = getIconName();
    const variantStyles = getVariantStyles();
    const isClickable = props.onPress !== undefined;

    const inputContent = (
        <View style={[{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: 5, 
            opacity: props.disabled ? 0.6 : 1 
        }, variantStyles, props.variant === 'search' ? {} : mainStyles.standardShadow]}>
            {iconName && (
                <Ionicons 
                    name={iconName} 
                    size={props.variant === 'search' ? 20 : ms(16)} 
                    color={Colors.primary} 
                />
            )}
            
            <RNTextInput
                style={[mainStyles.normalText, { 
                    flex: 1, 
                    fontSize: fs(12), 
                    color: props.variant === 'search' ? Colors.primary : Colors.default, 
                    paddingVertical: 0,
                    width: '100%'
                }]}
                placeholder={props.placeholder} 
                placeholderTextColor={props.variant === 'search' ? '#4448' : '#444a'} 
                value={props.value}
                onChangeText={props.onChangeText} 
                editable={props.editable !== false && !isClickable && !props.disabled}
                multiline={props.multiline} 
                numberOfLines={props.numberOfLines} 
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry} 
                autoCapitalize={props.autoCapitalize}
            />
            
            {props.rightIcon && (
                <Ionicons name={props.rightIcon} size={fs(18)} color={`${Colors.default}60`} />
            )}
        </View>
    );

    return (
        <View style={{ gap: ms(6) }}>
            {props.label && (
                <Text style={[mainStyles.normalText, { fontSize: fs(13), fontWeight: '500', color: Colors.default }]}>{props.label}</Text>
            )}
            
            {isClickable ? <Pressable onPress={props.onPress} disabled={props.disabled}>{inputContent}</Pressable> : inputContent}
            
            {props.error && (
                <Text style={[mainStyles.normalText, { fontSize: fs(12), color: '#FF4444' }]}>{props.error}</Text>
            )}
        </View>
    );
}
