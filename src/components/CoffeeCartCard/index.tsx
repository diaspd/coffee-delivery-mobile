import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

import Coffe from '../../assets/coffees/Image.png'

export function CoffeeCartCard() {
  return (
    <View style={styles.container}>
      <Image source={Coffe} alt="imagem de café" />
    
      <View>
        <View style={styles.containerShop}>
          <Text style={styles.title}>Irlandês</Text>
          <Text style={styles.price}>9,90</Text>
        </View>

        <Text style={styles.description}>227ml</Text>
      </View>
    </View>
  )
}