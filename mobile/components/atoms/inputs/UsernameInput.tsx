import { TextInput, View, StyleSheet } from "react-native";
import { textInputStyle } from "@/styles/TextInput";
import Icon from "@expo/vector-icons/Feather";

export default function UsernameInput() {
  return (
    <View>
      <TextInput style={textInputStyle.input} placeholder="Username" />
      <Icon name="user" size={26} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "relative",
    bottom: 33,
    left: 20,
  },
});
