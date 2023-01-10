import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Main } from './components/Main';
import * as SplashScreen from 'expo-splash-screen';

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
    <Main />
  );
}
