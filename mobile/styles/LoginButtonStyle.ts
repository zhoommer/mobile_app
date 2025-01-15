import { useTheme } from "@/contexts/ThemeContext";
import { StyleSheet } from "react-native";

export default function useLoginButtonTheme() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    btn: {
      display: "flex",
      alignItems: "center",
      borderRadius: 30,
      backgroundColor: theme.colors.button_primary,
      padding: 10,
    },
    text: {
      color: theme.colors.button_text,
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: 1,
    },
  });

  return {
    styles,
  };
}
