import useIconTheme from "@/styles/IconStyle";
import { View } from "react-native";

export default function Circle() {
  const { iconStyle } = useIconTheme();
  return <View style={iconStyle.circle}></View>;
}
