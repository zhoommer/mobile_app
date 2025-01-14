import { StyleSheet } from "react-native";

export const loginScreenStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: 900,
    padding: 20,
    backgroundColor: "#3086c3",
    borderRadius: 20,
  },

  box_top: {
    padding: 20,
  },

  box_top_title: {
    fontWeight: 900,
    fontSize: 35,
    textAlign: "center",
    color: "#1b1e3d",
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
    backgroundColor: "#64b2d8",
    elevation: 30,
  },

  iconBoxInner: {
    borderColor: "#334155",
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
