import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IProps {
  handleSubmit: any;
}

export default function LoginButton(props: IProps) {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => props.handleSubmit()}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#06b6d4",
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1,
  },
});
