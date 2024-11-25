import { Pressable, Text, View } from "react-native";
import { ArrowLeft, MapPin, ShoppingCart } from 'phosphor-react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";
import type { AppRoutesProps } from "../../routes/app.routes";
import { useCart } from "../../hooks/useCart";

interface HeaderProps {
  hasGoBack?: boolean;
  hasCart?: boolean;
}

export function Header({ hasGoBack, hasCart }: HeaderProps) {
  const navigationStack = useNavigation<AppRoutesProps>();
  const route = useRoute();

  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0); // Soma as quantidades de itens

  return (
    <View style={styles.container}>
      {hasGoBack ? (
        <Pressable onPress={() => navigationStack.goBack()}>
          <ArrowLeft
            color={route.name === "product" ? THEME.COLORS.WHITE : THEME.COLORS.GREY_100}
          />
        </Pressable>
      ) : (
        <View style={styles.local}>
          <MapPin color={THEME.COLORS.PURPLE} size={20} weight="fill" />
          <Text style={styles.text}>Porto Alegre, RS</Text>
        </View>
      )}

      {hasCart ? (
        <Pressable onPress={() => navigationStack.navigate('cart')} style={{ position: 'relative' }}>
          <ShoppingCart color={totalItems > 0 ? THEME.COLORS.PURPLE : THEME.COLORS.YELLOW_DARK} size={24} weight="fill" />
          {totalItems > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{totalItems}</Text>
            </View>
          )}
        </Pressable>
      ) : (
        <Text style={styles.cartText}>Carrinho</Text>
      )}
    </View>
  );
}
