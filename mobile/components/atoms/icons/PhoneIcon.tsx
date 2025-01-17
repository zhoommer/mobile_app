import useIconTheme from "@/styles/IconStyle";
import Icon from "@expo/vector-icons/Feather";

export default function PhoneIcon() {
  const { iconStyle } = useIconTheme();
  return <Icon name="smartphone" size={24} style={iconStyle.user} />;
}
