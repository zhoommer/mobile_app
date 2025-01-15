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
      backgroundColor: theme.colors.surface,
      padding: 1,
      borderColor: theme.colors.border,
      borderRadius: 100,
      borderStyle: "dotted",
      borderWidth: 1,
    },
    lock: {
      position: "absolute",
      bottom: 12,
      left: 20,
      color: theme.colors.icon,
      backgroundColor: theme.colors.surface,
      padding: 1,
      borderColor: theme.colors.border,
      borderRadius: 100,
      borderStyle: "dotted",
      borderWidth: 1,
    },
    eye: {
      position: "absolute",
      bottom: 12,
      right: 20,
      color: theme.colors.icon,
      backgroundColor: theme.colors.surface,
      padding: 1,
      borderColor: theme.colors.border,
      borderRadius: 100,
      borderStyle: "dotted",
      borderWidth: 1,
    },
    eyeOff: {
      position: "absolute",
      bottom: 12,
      right: 20,
      color: theme.colors.icon,
      backgroundColor: theme.colors.surface,
      padding: 1,
      borderColor: theme.colors.border,
      borderRadius: 100,
      borderStyle: "dotted",
      borderWidth: 1,
    },
    loginUser: {
      position: "relative",
      left: 50,
      top: 40,
      color: theme.colors.button_secondary,
    },
    circle: {
      width: 60,
      height: 60,
      borderColor: theme.colors.border,
      borderRadius: 80,
      borderStyle: "solid",
      borderWidth: 1,
      position: "absolute",
      backgroundColor: theme.colors.button_secondary,
      bottom: 15,
      left: 5,
      elevation: 20,
    },
    halfCircle: {
      width: 33.2,
      height: 20,
      borderColor: theme.colors.button_secondary,
      borderStyle: "solid",
      borderWidth: 10,
      borderBottomWidth: 0,
      borderTopLeftRadius: 70,
      borderTopRightRadius: 70,
      position: "absolute",
      right: 30,
      top: 60,
      transform: [{ rotate: "-45deg" }],
      elevation: 20,
    },
  });

  return {
    iconStyle,
  };
}
