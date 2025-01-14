import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Loading from "../spinners/Loading";

interface IProps {
  handleSubmit: any;
  loading: boolean;
}

export default function LoginButton(props: IProps) {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => props.handleSubmit()}>
      {props.loading ? <Loading /> : <Text style={styles.text}>Login</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#1b1e3d",
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: 1,
  },
});
