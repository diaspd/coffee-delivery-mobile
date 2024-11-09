import { createNativeStackNavigator, type NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';
import { Finish } from '../screens/Finish';
import { Product } from '../screens/Product';

type Routes = {
  home: undefined;
  cart: undefined;
  finish: undefined;
  product: { productId: string };
}

const { Navigator, Screen } = createNativeStackNavigator<Routes>();

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

      <Screen
        name="finish"
        component={Finish}
      />

      
      <Screen
        name="product"
        component={Product}
      />
    </Navigator>
  )
}