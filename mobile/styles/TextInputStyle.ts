import { StyleSheet } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";

export default function useInputTheme() {
  const { theme } = useTheme();

  const textInputStyle = StyleSheet.create({
    input: {
      backgroundColor: "transparent",
      color: theme.colors.text,
      borderColor: theme.colors.border,
      borderBottomWidth: 3,
      paddingLeft: 60,
    },
  });

  return {
    textInputStyle,
  };
}
