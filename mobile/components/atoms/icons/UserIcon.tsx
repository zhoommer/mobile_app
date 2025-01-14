import Icon from "@expo/vector-icons/Feather";
import useIconTheme from "@/styles/IconStyle";

export default function UserIcon() {
  const { iconStyle } = useIconTheme();
  return <Icon name="user" size={24} style={iconStyle.user} />;
}
