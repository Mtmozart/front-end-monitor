import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Início',
            title: 'Bem vindo!',
            drawerIcon: () => (
              <Ionicons name="home-outline" size={18} color="#3A98FF" />
            ),
          }}
        />

        <Drawer.Screen
          name="primeiro"
          options={{
            drawerLabel: 'Primeiro',
            title: 'Primeiro componente!',
            drawerIcon: () => (
              <Ionicons name="heart-circle-outline" size={18} color="#3A98FF" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
