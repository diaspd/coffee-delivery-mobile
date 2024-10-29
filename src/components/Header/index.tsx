import { Text, View } from "react-native";
import { styles } from "./styles";

import { MapPin, ShoppingCart } from 'phosphor-react-native'
import { THEME } from "../../styles/theme";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.local}>
        <MapPin color={THEME.COLORS.PURPLE} size={20} weight="fill" />
        <Text style={styles.text}>Porto Alegre, RS</Text>
      </View>
    
      <View>
        <ShoppingCart color={THEME.COLORS.YELLOW_DARK} size={20} weight="fill" />
      </View>
    </View>
  )
}