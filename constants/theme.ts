import { Platform } from "react-native";

export const Colors = {
  primary: "#344B77",
  secondary: "#070A0F",
  tertiary: "#344B774D",
  default: "#000000",
  background: "#FFFFFF",
};

export const Fonts = Platform.select({
     ios: {
          sans: "system-ui",
          serif: "ui-serif",
          rounded: "ui-rounded",
          mono: "ui-monospace",
     },
     default: {
          sans: "normal",
          serif: "serif",
          rounded: "normal",
          mono: "monospace",
     },
     web: {
          sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          serif: "Georgia, 'Times New Roman', serif",
          rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
          mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
     },
});
