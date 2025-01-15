import { StyleSheet } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";

export default function useErrorTheme() {
  const { theme } = useTheme();
  const errorMessage = StyleSheet.create({
    error: {
      position: "absolute",
      bottom: -25,
      left: 20,
      color: theme.colors.error,
      fontSize: 14,
      fontWeight: 800,
    },
  });

  return {
    errorMessage,
  };
}
