import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; // Import splash screen from Expo
import { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent auto-hiding of splash screen until assets are loaded
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  // Load custom fonts
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Show nothing until fonts are loaded
  }

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="spaleshscreen">
      <Stack.Screen name="spaleshscreen" />
      <Stack.Screen name="index" />
      <Stack.Screen name="secondpage" />
      <Stack.Screen name="thirdpage" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
