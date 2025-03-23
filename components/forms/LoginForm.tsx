import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import Toast from 'react-native-toast-message';
import { LoginData, loginSchema } from '@/validators/login';

const LoginForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
   
    Toast.show({
      type: 'warning',      
      text1: 'Um momento',      
      props: 'Está carregando.', 
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastra-se
          </Text>
      </View>
      <Text style={styles.label}>E-mail</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Senha</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    width: '95%',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: theme.fonts.title,
    marginBottom: 3,
  },
  label: {
    fontSize: theme.fonts.size,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 3
  },
  error: {
    color: theme.colors.red,
    marginBottom: 2
    }
});

export default LoginForm;