import { Text, TouchableOpacity } from "react-native";
import Loading from "../spinners/Loading";
import useLoginButtonTheme from "@/styles/LoginButtonStyle";

interface IProps {
  name: string;
  handleSubmit: any;
  loading: boolean;
}

export default function SubmitButton(props: IProps) {
  const { styles } = useLoginButtonTheme();
  return (
    <TouchableOpacity style={styles.btn} onPress={() => props.handleSubmit()}>
      {props.loading ? (
        <Loading />
      ) : (
        <Text style={styles.text}>{props.name}</Text>
      )}
    </TouchableOpacity>
  );
}
