import { useTheme } from "@/contexts/ThemeContext";
import { StyleSheet } from "react-native";

export default function useIconTheme() {
  const { theme } = useTheme();
  const iconStyle = StyleSheet.create({
    user: {
      position: "absolute",
      bottom: 12,
      left: 20,
      color: theme.colors.icon,
    },
    lock: {
      position: "absolute",
      bottom: 12,
      left: 20,
      color: theme.colors.icon,
    },
    eye: {
      position: "absolute",
      bottom: 12,
      right: 20,
      color: theme.colors.icon,
    },
    eyeOff: {
      position: "absolute",
      bottom: 12,
      right: 20,
      borderColor: "red",
      color: theme.colors.icon,
    },
  });

  return {
    iconStyle,
  };
}
