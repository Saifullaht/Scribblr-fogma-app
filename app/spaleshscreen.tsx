import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen'; // Import splash screen from Expo

export default function SpaleshScreen() {
  const router = useRouter();

  // Hide splash screen after 3 seconds and navigate to Welcome Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hideAsync(); // Manually hide the splash screen
      router.replace('/'); // Redirect to the index screen
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} // Replace with your logo path
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to the App!</Text>
      <ActivityIndicator size="large" color="#333" style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  spinner: {
    marginTop: 20,
  },
});
