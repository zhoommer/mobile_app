import { StyleSheet } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";

export default function useRegisterButtonTheme() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: "#fff",
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: 1,
      textDecorationStyle: "solid",
      textDecorationColor: "#fff",
      textDecorationLine: "underline",
      textAlign: "center",
      marginTop: 40,
      padding: 10,
      borderRadius: 30,
      backgroundColor: theme.colors.primary,
    },
  });

  return {
    styles,
  };
}
