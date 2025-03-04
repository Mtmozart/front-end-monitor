
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';
import { AuthProvider } from '@/context/Auth/authContext';

export default function Layout() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            drawerStyle: {
              backgroundColor: theme.colors.drawerBackground,
            },
            drawerLabelStyle: {
              color: theme.colors.drawerText,
            },
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: '#fff',
          }}
        >
          <Drawer.Screen
            name="Login"
            options={{
              drawerLabel: 'Login',
              title: 'Login',
              drawerIcon: () => <Ionicons name="log-in-outline" size={18} color="#3A98FF" />,
            }}
          />
          <Drawer.Screen
            name="User/Profile"
            options={{
              drawerLabel: 'Perfil',
              title: 'Perfil',
              drawerIcon: () => <Ionicons name="person-circle-outline" size={18} color="#3A98FF" />,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
