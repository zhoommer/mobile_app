import { Link } from "expo-router";
import useRegisterButtonTheme from "@/styles/RegisterButtonStyle";

export default function RegisterButton() {
  const { styles } = useRegisterButtonTheme();
  return (
    <Link href={"/(auth)/register"} style={styles.text}>
      Create an account
    </Link>
  );
}
