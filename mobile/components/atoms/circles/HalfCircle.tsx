import { StyleSheet, View } from "react-native";

export default function HalfCircle() {
  return <View style={style.halfCircle}></View>;
}

const style = StyleSheet.create({
  halfCircle: {
    width: 33.2,
    height: 20,
    borderColor: "#1b1e3d",
    borderStyle: "solid",
    borderWidth: 10,
    borderBottomWidth: 0,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    position: "absolute",
    right: 30,
    top: 60,
    transform: [{ rotate: "-45deg" }],
    elevation: 20,
  },
});
