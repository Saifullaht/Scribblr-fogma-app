import 'react-native-reanimated';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Themebutton } from '@/components/themebutton';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      <Image
        style={{
          width: 300,
          height: 500,
          marginLeft: 58,
          marginTop: 25,
        }}
        source={require('../assets/images/Group.png')}
      />

      <Image
        style={{ marginTop: -500, marginLeft: -20 }}
        source={require('../assets/images/layout1.png')}
      />
      <Image
        style={{ marginTop: -180, marginLeft: -10 }}
        source={require('../assets/images/layout2.png')}
      />
      <Image
        style={{ marginTop: -180, marginLeft: -20 }}
        source={require('../assets/images/layout3.png')}
      />
      <Image
        style={{ marginTop: -135, marginLeft: -20 }}
        source={require('../assets/images/bottom.png')}
      />
      <Text
        style={{
          fontSize: 32,
          textAlign: 'center',
          marginLeft: 10,
          marginTop: -60,
          lineHeight: 50,
        }}
      >
        Read interesting articles every single day!
      </Text>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
      </Text>

      <View style={{ flexDirection: 'row', marginTop: 14 }}>
        <Themebutton
          style={{
            marginTop: 40,
            marginLeft: 20,
            borderRadius: 50,
            width: 140,
            elevation: 3,
          }}
          bgColor="#F6EFED"
          txt="Skip"
          txtColor="#A4634D"
          onPress={() => router.push('/login')}
        />
        <Themebutton
          style={{
            marginTop: 40,
            borderRadius: 50,
            width: 140,
            elevation: 3,
          }}
          bgColor="#A4634D"
          txt="Next"
          txtColor="#FFFFFF"
          onPress={() => router.push('/secondpage')}
        />
      </View>
    </View>
  );
}
