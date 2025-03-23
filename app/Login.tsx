import React from "react";
import { View } from "react-native";
import LoginForm from "@/components/forms/LoginForm";
import styles from "@/constats/styles";

export default function LoginFormScreen() {
  

   return (
    <View style={styles.centralizado}>
      <LoginForm />
    </View>
  );
}