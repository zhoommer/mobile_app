import useIconTheme from "@/styles/IconStyle";
import Icon from "@expo/vector-icons/Feather";

export default function EmailIcon() {
  const { iconStyle } = useIconTheme();
  return <Icon name="mail" size={24} style={iconStyle.user} />;
}
