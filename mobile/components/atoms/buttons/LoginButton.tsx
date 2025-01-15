import { Text, TouchableOpacity } from "react-native";
import Loading from "../spinners/Loading";
import useLoginButtonTheme from "@/styles/LoginButtonStyle";

interface IProps {
  handleSubmit: any;
  loading: boolean;
}

export default function LoginButton(props: IProps) {
  const { styles } = useLoginButtonTheme();
  return (
    <TouchableOpacity style={styles.btn} onPress={() => props.handleSubmit()}>
      {props.loading ? <Loading /> : <Text style={styles.text}>Login</Text>}
    </TouchableOpacity>
  );
}
