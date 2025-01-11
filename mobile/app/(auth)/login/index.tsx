import { View, StyleSheet, TextInput, Text } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Username</Text>
        <TextInput style={styles.textInput} autoFocus />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    backgroundColor: "#ddd",
  },
  textInput: {
    backgroundColor: "#222",
    color: "#ddd",
  },
});
