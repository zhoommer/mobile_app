import Icon from "@expo/vector-icons/Feather";
import useIconTheme from "@/styles/IconStyle";

interface IProps {
  toggleShow: () => void;
}

export default function EyeIcon(props: IProps) {
  const { iconStyle } = useIconTheme();
  return (
    <Icon
      name="eye"
      size={24}
      onPress={() => props.toggleShow()}
      style={iconStyle.eye}
    />
  );
}
