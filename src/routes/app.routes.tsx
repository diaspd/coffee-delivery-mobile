import { createNativeStackNavigator, type NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';

type Routes = {
  home: undefined;
  cart: undefined;
}

const { Navigator, Screen, Group } = createNativeStackNavigator<Routes>();

export type AppRoutesProps = NativeStackNavigationProp<Routes>;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="cart"
        component={Cart}
      />
    </Navigator>
  )
}