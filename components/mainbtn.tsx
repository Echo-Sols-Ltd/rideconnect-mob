import { Colors } from "@/constants/theme";
import { Pressable, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

interface MainBtnProps {
     title?: string;
     onclick?: () => void;
     isFullWidth?: boolean;
     isprimary?: boolean;
     hasIcon?: boolean;
}

export default function MainBtn(props: MainBtnProps) {
     return (
          <Pressable style={{
               backgroundColor: props.isprimary ? Colors.primary : Colors.tertiary, display: 'flex', justifyContent: 'center', alignItems: 'center',
               paddingHorizontal: 20, padding: 10, borderRadius: 20, width: props.isFullWidth ? '100%' : 'auto' , flexDirection: 'row', gap: 10
          }} onPress={props.onclick ? props.onclick : () => console.log('Button Pressed')}>
               <Text style={{ color: 'white', fontSize: 14, fontWeight: 500 }}>{props.title ? props.title : 'Continue'}</Text>
               {  props.hasIcon && <Ionicons name="arrow-forward" size={20} color={'white'} /> }
          </Pressable>
     );
}