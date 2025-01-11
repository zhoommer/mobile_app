import { View, StyleSheet } from "react-native";
import LoginButton from "@/components/atoms/buttons/LoginButton";
import UsernameInput from "@/components/atoms/inputs/UsernameInput";
import PasswordInput from "@/components/atoms/inputs/PasswordInput";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container_box}>
        <UsernameInput />
        <PasswordInput />
        <LoginButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    backgroundColor: "#ddd",
    padding: 20,
  },
  container_box: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#eee",
  },
});
