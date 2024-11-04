import { Text, View, Pressable, Image } from "react-native";

import Illustration from '../../assets/Illustration.png'

import type { AppRoutesProps } from "../../routes/app.routes";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export function Finish() {
  const navigationStack = useNavigation<AppRoutesProps>();
  
  return (
    <View style={styles.container}>
      <Image source={Illustration} />
      
      <Text style={styles.title}>Uhu! Pedido confirmado</Text>
      <Text style={styles.description}>Agora é só aguardar que logo o café chegará até você!</Text>

      <Pressable style={styles.button} onPress={() => navigationStack.navigate('home')}>
        <Text style={styles.buttonText}>ir para a home</Text>
      </Pressable>
    </View>
  )
}