import Icon from "@expo/vector-icons/Feather";
import { iconStyle } from "@/styles/IconStyle";

interface IProps {
  toggleShow: () => void;
}

export default function EyeOffIcon(props: IProps) {
  return (
    <Icon
      name="eye-off"
      size={24}
      onPress={() => props.toggleShow()}
      style={iconStyle.eyeOff}
    />
  );
}
