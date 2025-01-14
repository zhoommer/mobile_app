import Icon from "@expo/vector-icons/Feather";
import useIconTheme from "@/styles/IconStyle";

export default function LockIcon() {
  const { iconStyle } = useIconTheme();
  return <Icon name="lock" size={24} style={iconStyle.lock} />;
}
