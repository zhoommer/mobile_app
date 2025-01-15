import { useAuth } from "@/contexts/AuthContext";
import useLoginForm from "@/hooks/useLoginForm";
import { Formik } from "formik";
import { View } from "react-native";
import LoginButton from "../atoms/buttons/LoginButton";
import PasswordInput from "../organisms/PasswordInput";
import UserIcon from "../atoms/icons/UserIcon";
import TextInputComponent from "../organisms/TextInput";
import EmailIcon from "../atoms/icons/EmailIcon";

export default function RegisterForm() {
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
              <TextInputComponent
                name="username"
                placeholder="Username"
                icon={<UserIcon />}
              />
            </View>
            <View>
              <TextInputComponent
                name="email"
                placeholder="Email"
                icon={<EmailIcon />}
              />
            </View>

            <View>
              <TextInputComponent
                name="first_name"
                placeholder="First Name"
                icon={<UserIcon />}
              />
            </View>

            <View>
              <TextInputComponent
                name="last_name"
                placeholder="Last Name"
                icon={<UserIcon />}
              />
            </View>

            <View>
              <PasswordInput name="password" placeholder="Password" />
            </View>

            <View>
              <PasswordInput name="re_password" placeholder="Re-Password" />
            </View>

            <View style={{ marginTop: 50 }}>
              <LoginButton handleSubmit={handleSubmit} loading={loading} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
