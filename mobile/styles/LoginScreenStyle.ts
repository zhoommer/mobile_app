import { StyleSheet } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";

export default function useLoginTheme() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      height: 900,
      padding: 20,
      backgroundColor: theme.colors.background,
      borderRadius: 20,
    },

    box_top: {
      padding: 20,
    },

    box_top_title: {
      fontWeight: 900,
      fontSize: 35,
      textAlign: "center",
      color: theme.colors.text_primary,
    },

    iconBox: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      top: 55,
      left: 40,
      width: 250,
      height: 250,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "transparent",
      borderRadius: 250,
      borderCurve: "circular",
      backgroundColor: theme.colors.background,
      elevation: 30,
    },

    iconBoxInner: {
      borderColor: theme.colors.border,
      borderRadius: 200,
      borderWidth: 2,
      borderStyle: "solid",
      borderCurve: "circular",
      height: 200,
      width: 200,
      position: "relative",
      left: 23,
    },

    box_bottom: {
      marginTop: 60,
    },
  });

  return {
    styles,
  };
}
