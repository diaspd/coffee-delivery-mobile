import { Pressable, Text, View } from "react-native";

import { ArrowLeft, MapPin, ShoppingCart } from 'phosphor-react-native'

import { useNavigation } from "@react-navigation/native";
import type { AppRoutesProps } from "../../routes/app.routes";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

interface HeaderProps {
  hasGoBack?: boolean
  hasCart?: boolean 
}

export function Header({hasGoBack, hasCart}: HeaderProps) {
  const navigationStack = useNavigation<AppRoutesProps>();

  return (
    <View style={styles.container}>
      {hasGoBack ? (
        <Pressable onPress={() => navigationStack.goBack()}>
          <ArrowLeft color={THEME.COLORS.GREY_100}/>
        </Pressable>
      ): (
        <View style={styles.local}>
          <MapPin color={THEME.COLORS.PURPLE} size={20} weight="fill" />
          <Text style={styles.text}>Porto Alegre, RS</Text>
        </View>
      )} 

      {hasCart ? (
        <Pressable onPress={() => navigationStack.navigate('cart')}>
          <ShoppingCart color={THEME.COLORS.YELLOW_DARK} size={20} weight="fill" />
        </Pressable>
      ): (
        <Text style={styles.cartText}>Carrinho</Text>
      )}
    </View>
  )
}