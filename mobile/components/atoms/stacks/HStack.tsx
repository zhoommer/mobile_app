import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  children: React.ReactNode;
}

export default function HStack(props: IProps) {
  return <View style={style.horizontal}>{props.children}</View>;
}

const style = StyleSheet.create({
  horizontal: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
