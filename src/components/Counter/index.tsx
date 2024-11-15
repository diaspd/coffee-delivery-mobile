import { Pressable, Text, View } from "react-native";
import { Minus, Plus } from "phosphor-react-native";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";

export function Counter({ data }: any) {
  return (
    <View style={styles.container}>
      <Pressable>
        <Minus size={20} color={THEME.COLORS.PURPLE} />
      </Pressable>
        <Text style={styles.text}>{data}</Text>
      <Pressable>
        <Plus size={20} color={THEME.COLORS.PURPLE} />
      </Pressable>
    </View>
  )
}