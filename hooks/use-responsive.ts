import { useMemo } from "react";
import { Platform, useWindowDimensions } from "react-native";

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export type Breakpoint = "phone" | "tablet" | "largeTablet";

export const useResponsive = () => {
     const { width, height, scale: pixelScale, fontScale } = useWindowDimensions();
     const shortest = Math.min(width, height);

     const breakpoint: Breakpoint = useMemo(() => {
          if (shortest >= 900) return "largeTablet";
          if (shortest >= 600) return "tablet";
          return "phone";
     }, [shortest]);

     const isTablet = breakpoint !== "phone";

     const s = (size: number) => (width / guidelineBaseWidth) * size;
     const vs = (size: number) => (height / guidelineBaseHeight) * size;
     const ms = (size: number, factor = 0.5) => size + (s(size) - size) * factor; 
     const mvs = (size: number, factor = 0.5) => size + (vs(size) - size) * factor;

     // Font scaling that respects platform fontScale
     const fs = (size: number, factor = 0.4) => {
          const scaled = ms(size, factor);
          return scaled / fontScale; // mitigate overly large system fontScale
     };

     // Useful layout helpers
     const gutters = {
          xxs: ms(4),
          xs: ms(8),
          sm: ms(12),
          md: ms(16),
          lg: ms(20),
          xl: ms(24),
          xxl: ms(32),
     } as const;

     const columns = (countPhone: number, countTablet?: number, countLargeTablet?: number) => {
          if (breakpoint === "largeTablet") return countLargeTablet ?? countTablet ?? countPhone;
          if (breakpoint === "tablet") return countTablet ?? countPhone;
          return countPhone;
     };

     return { width, height, shortest, breakpoint, isTablet, s, vs, ms, mvs, fs,
          gutters, columns, pixelScale, fontScale, platform: Platform.OS
     };
};
