import useIconTheme from "@/styles/IconStyle";
import { View } from "react-native";

export default function HalfCircle() {
  const { iconStyle } = useIconTheme();
  return <View style={iconStyle.halfCircle}></View>;
}
