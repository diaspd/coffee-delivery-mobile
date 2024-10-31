import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

import Coffe from '../../assets/coffees/Image.png'

export function CoffeeListCard() {
  return (
    <View style={styles.container}>
      <Image source={Coffe} alt="imagem de café" style={{ zIndex: 1, marginTop: -20 }} />
    
      <View>
        <Text style={styles.title}>Expresso Tradicional</Text>
        <Text style={styles.description}>Café expresso com o dobro de leite e espuma cremosa</Text>

        <View style={styles.containerShop}>
          <Text style={styles.dollar}>R$</Text>
          <Text style={styles.price}>9,90</Text>
        </View>
      </View>
    </View>
  )
}