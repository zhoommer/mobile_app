import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { textInputStyle } from "@/styles/TextInput";
import Icon from "@expo/vector-icons/Feather";

export default function PasswordInput() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }
  return (
    <View>
      <TextInput
        style={textInputStyle.input}
        placeholder="Password"
        secureTextEntry={!show}
      />
      <Icon name="lock" size={26} style={styles.icon} />
      {show ? (
        <Icon
          name="eye"
          size={26}
          style={styles.eyeIcon}
          onPress={() => handleShow()}
        />
      ) : (
        <Icon
          name="eye-off"
          size={26}
          style={styles.eyeIcon}
          onPress={() => handleShow()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "relative",
    bottom: 33,
    left: 20,
  },
  eyeIcon: {
    position: "relative",
    bottom: 60,
    left: 285,
  },
});
