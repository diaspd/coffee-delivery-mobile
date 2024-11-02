import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export function Counter() {
  return (
    <View style={styles.container}>
      <Pressable><Text>-</Text></Pressable>
        <Text>1</Text>
      <Pressable><Text>+</Text></Pressable>
    </View>
  )
}