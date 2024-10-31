import { Pressable, Text, View } from "react-native";

import { MapPin, ShoppingCart } from 'phosphor-react-native'

import { useNavigation } from "@react-navigation/native";
import type { AppRoutesProps } from "../../routes/app.routes";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

export function Header() {
  const navigationStack = useNavigation<AppRoutesProps>();

  return (
    <View style={styles.container}>
      <View style={styles.local}>
        <MapPin color={THEME.COLORS.PURPLE} size={20} weight="fill" />
        <Text style={styles.text}>Porto Alegre, RS</Text>
      </View>
    
      <Pressable onPress={() => navigationStack.navigate('cart')}>
        <ShoppingCart color={THEME.COLORS.YELLOW_DARK} size={20} weight="fill" />
      </Pressable>
    </View>
  )
}