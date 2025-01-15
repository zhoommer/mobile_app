import useIconTheme from "@/styles/IconStyle";
import Icon from "@expo/vector-icons/Feather";

export default function LoginUserIcon() {
  const { iconStyle } = useIconTheme();
  return <Icon name="user" size={100} style={iconStyle.loginUser} />;
}
