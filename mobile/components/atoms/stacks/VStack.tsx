import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  children: React.ReactNode;
}

export default function VStack(props: IProps) {
  return <View style={style.vertical}>{props.children}</View>;
}

const style = StyleSheet.create({
  vertical: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
