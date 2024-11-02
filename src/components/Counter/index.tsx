import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Minus, Plus } from "phosphor-react-native";
import { THEME } from "../../styles/theme";

export function Counter() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Minus size={20} color={THEME.COLORS.PURPLE} />
      </Pressable>
        <Text style={styles.text}>1</Text>
      <Pressable>
        <Plus size={20} color={THEME.COLORS.PURPLE} />
      </Pressable>
    </View>
  )
}