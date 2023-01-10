import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { MyStack } from './navigate';

export default function App() {
  const [fontsLoaded] = useFonts({
    'mt-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MyStack />
  );
}
