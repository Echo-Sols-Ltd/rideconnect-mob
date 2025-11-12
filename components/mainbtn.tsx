import { Colors } from "@/constants/theme";
import { Pressable, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { useResponsive } from "@/hooks/use-responsive";
import useGlobalStyles from "@/hooks/use-styles-global";

interface MainBtnProps {
     title?: string;
     onclick?: () => void;
     isFullWidth?: boolean;
     isprimary?: boolean;
     hasIcon?: boolean;
}

export default function MainBtn(props: MainBtnProps) {
     const { fs, isTablet, ms } = useResponsive()
     const mainStyles = useGlobalStyles()
     
     return (
          <Pressable style={{
               backgroundColor: props.isprimary ? Colors.primary : Colors.tertiary, display: 'flex', justifyContent: 'center', alignItems: 'center',
               paddingHorizontal: isTablet ? ms(16) : 15, padding: isTablet ? 10 : 7, borderRadius: 20, width: props.isFullWidth ? '100%' : 'auto' , flexDirection: 'row', gap: 10
          }} onPress={props.onclick ? props.onclick : () => console.log('Button Pressed')}>
               <Text style={[mainStyles.normalText, { color: Colors.background }]}>{props.title ? props.title : 'Continue'}</Text>
               {  props.hasIcon && <Ionicons name="arrow-forward" size={20} color={'white'} /> }
          </Pressable>
     );
}