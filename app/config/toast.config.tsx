import { View, Text } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
  warning: ({ text1, props }: any) => (
    <View
      style={{
        height: 70,
        width: '90%',
        backgroundColor: '#FFC107',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        opacity: 0.9,
      }}
    >
      <Text
        style={{
          fontSize: 17,
          fontWeight: '800',
          color: 'white',
          textAlign: 'center',
          marginBottom: 5,
        }}
      >
        {text1}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '800',
          color: 'white',
          textAlign: 'center',
        }}
      >
        {props}
      </Text>
    </View>
  )
};
