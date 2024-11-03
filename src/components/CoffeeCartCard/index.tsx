import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

import Coffe from '../../assets/coffees/Image.png'
import { Counter } from "../Counter";
import { Trash } from "phosphor-react-native";
import { THEME } from "../../styles/theme";

export function CoffeeCartCard() {
  return (
    <View style={styles.container}>
      <Image source={Coffe} alt="imagem de café" />
    
      <View> 
        <View style={styles.containerShop}>
          <Text style={styles.title}>Irlandês</Text>
          <Text style={styles.price}>R$ 9,90</Text>
        </View>

        <Text style={styles.millilitres}>227ml</Text>

        <View style={styles.actions}>
          <Counter />
          <TouchableOpacity style={styles.removeButtom}>
            <Trash color={THEME.COLORS.PURPLE} size={20}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}