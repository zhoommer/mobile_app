import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function RegisterButton() {
  return (
    <TouchableOpacity style={styles.btn}>
      <Link href={"/(auth)/register"} style={styles.text}>
        Register
      </Link>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#14b8a6",
    paddingVertical: 10,
    marginTop: 40,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1,
  },
});
