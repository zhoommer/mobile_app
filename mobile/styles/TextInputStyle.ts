import { StyleSheet } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";

export default function useInputTheme() {
  const { theme } = useTheme();

  const textInputStyle = StyleSheet.create({
    input: {
      backgroundColor: "transparent",
      color: theme.colors.text_primary,
      borderColor: theme.colors.text_secondary,
      borderBottomWidth: 3,
      paddingLeft: 60,
    },
  });

  return {
    textInputStyle,
  };
}
