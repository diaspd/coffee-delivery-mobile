import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

import Coffe from '../../assets/coffees/Image.png'

export function CoffeeCard() {
  return (
    <>
      <Image source={Coffe} alt="imagem de café" style={{ zIndex: 1 }} />
       <View style={[styles.container]}>
      
        <View style={styles.tags}>
          <Text style={styles.tagText}>Tradicional</Text>
        </View>
        <Text style={styles.title}>Latte</Text>
        <Text style={styles.description} numberOfLines={2}>Café expresso com o dobro de leite e espuma cremosa</Text>

        <View style={styles.containerShop}>
          <Text style={styles.dollar}>R$</Text>
          <Text style={styles.price}>9,90</Text>
        </View>
      </View>
      </>
  )
}