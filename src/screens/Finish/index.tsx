import { Text, View, Pressable, Image } from "react-native";

import Illustration from '../../assets/Illustration.png'

import { styles } from "./styles";

export function Finish() {
  return (
    <View style={styles.container}>
      <Image source={Illustration} />
      
      <Text>Uhu! Pedido confirmado</Text>
      <Text>Agora é só aguardar que logo o café chegará até você!</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>ir para a home</Text>
      </Pressable>
    </View>
  )
}