import { useState } from 'react';
import { View, StatusBar } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

import { SplashScreen } from './src/components/SplashScreen';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold });
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <SplashScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar  
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
      />
      
      {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}
