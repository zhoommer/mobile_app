import { StyleSheet } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";

export default function useRegisterButtonTheme() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: theme.colors.button_text,
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: 1,
      textDecorationStyle: "solid",
      textDecorationColor: theme.colors.button_text,
      textDecorationLine: "underline",
      textAlign: "center",
      padding: 10,
      borderRadius: 30,
      backgroundColor: theme.colors.button_secondary,
    },
  });

  return {
    styles,
  };
}
