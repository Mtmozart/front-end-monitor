import { View, Text } from "react-native";
import styles from "@/constats/styles";
import RegisterForm from "@/components/forms/RegisterForm";

export default function Register() {
  return (
    <View style={styles.centralizado}>
      <RegisterForm />
    </View>
  )
}