import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function RegisterButton() {
  return (
    <Link href={"/(auth)/register"} style={styles.text}>
      Create an account
    </Link>
  );
}

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
    backgroundColor: "#64b2d8",
  },
});
