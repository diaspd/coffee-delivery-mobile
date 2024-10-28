import { View, StatusBar } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold });

  return (
    <View style={{ flex: 1}}>
      <StatusBar  
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}