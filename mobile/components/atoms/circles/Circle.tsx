import { View, StyleSheet } from "react-native";

export default function Circle() {
  return <View style={style.circle}></View>;
}

const style = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderColor: "#333",
    borderRadius: 80,
    borderStyle: "solid",
    borderWidth: 1,
    position: "absolute",
    backgroundColor: "#1b1e3d",
    bottom: 15,
    left: 5,
    elevation: 20,
  },
});
