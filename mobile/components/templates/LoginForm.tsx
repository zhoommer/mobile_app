import { useAuth } from "@/contexts/AuthContext";
import useLoginForm from "@/hooks/useLoginForm";
import { Formik } from "formik";
import { View } from "react-native";
import LoginButton from "../atoms/buttons/LoginButton";
import RegisterButton from "../atoms/buttons/RegisterButton";
import UserInput from "../organisms/UserInput";
import PasswordInput from "../organisms/PasswordInput";

export default function LoginForm() {
  const { loading } = useAuth();
  const { initialState, validationSchema, handleLogin } = useLoginForm();

  return (
    <View>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View>
            <View>
              <UserInput />
            </View>
            <View style={{ marginTop: 35 }}>
              <PasswordInput />
            </View>
            <View style={{ marginTop: 50 }}>
              <LoginButton handleSubmit={handleSubmit} loading={loading} />
              <RegisterButton />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
