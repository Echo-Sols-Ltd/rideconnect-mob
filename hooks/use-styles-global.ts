import { StyleSheet, useColorScheme } from "react-native";
import { useResponsive } from "./use-responsive";
import { Colors } from "@/constants/theme";

export default function useGlobalStyles() {
     const { fs, ms, isTablet } = useResponsive()
     const color = useColorScheme()

     return StyleSheet.create({
          normalText: {
               fontSize: fs(13),
               fontWeight: 300,
               color: Colors.default,
          },
          additionalText: {
               fontSize: fs(13),
               fontWeight: 500,
               color: `${Colors.primary}66`,
          },
          normalHeadings: {
               fontSize: fs(16),
               fontWeight: 500,
               color: Colors.default
          },
          globalPadding: {
               paddingHorizontal: isTablet ? ms(40) : 20,
               paddingVertical: isTablet ? ms(20) : ms(15),
               backgroundColor: Colors.background,
               gap: 10,
          },
          globalPadding2: {
               paddingHorizontal: isTablet ? ms(40) : 20,
               paddingVertical: isTablet ? ms(20) : ms(15),
               backgroundColor: Colors.primary,
               gap: 10,
          },
          standardShadow: {
               borderRadius: 10,
               borderRightWidth: 1,
               borderBottomWidth: 3,
               borderColor: `${Colors.default}33`
          },
          profileImageOrIcon: {
               width: isTablet ? ms(60) : ms(40),
               height: isTablet ? ms(60) : ms(40),
               borderRadius: 100,
               elevation: 1,
          },
          menuIcon: {
               borderRadius: 100,
               padding: 7,
               backgroundColor: Colors.background,
               color: Colors.default,
               fontSize: fs(16)
          },
          centered: {
               display: 'flex',
               // flexDirection: 'row',
               justifyContent: 'center',
               alignItems: 'center',
          }
     })
}