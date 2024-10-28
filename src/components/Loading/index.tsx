import { ActivityIndicator, View } from "react-native";
import { THEME } from "../../styles/theme";

import { styles } from "./styles";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PURPLE_DARK} />
    </View>
  );
}