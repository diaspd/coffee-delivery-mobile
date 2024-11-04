import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

import Coffe from '../../assets/coffees/Image.png'

import { useNavigation } from "@react-navigation/native";
import type { AppRoutesProps } from "../../routes/app.routes";

export function CoffeeListCard() {
  const navigationStack = useNavigation<AppRoutesProps>();
  
  return (
    <Pressable style={styles.container} onPress={() => navigationStack.navigate('product')}>
      <Image source={Coffe} alt="imagem de café" style={{ zIndex: 1, marginTop: -20 }} />
    
      <View>
        <Text style={styles.title}>Expresso Tradicional</Text>
        <Text style={styles.description}>Café expresso com o dobro de leite e espuma cremosa</Text>

        <View style={styles.containerShop}>
          <Text style={styles.dollar}>R$</Text>
          <Text style={styles.price}>9,90</Text>
        </View>
      </View>
    </Pressable>
  )
}