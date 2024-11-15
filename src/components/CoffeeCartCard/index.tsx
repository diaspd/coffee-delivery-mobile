import { Text, View, TouchableOpacity, Image } from "react-native";
import { Trash } from "phosphor-react-native";

import type { StorageCartProps } from "../../storage/cartStorage";
import Coffe from '../../assets/coffees/expresso-tradicional.png'

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

import { Counter } from "../Counter";

type Props = {
  onRemove: () => void;
  data: StorageCartProps;
}

export function CoffeeCartCard({ data, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Image source={Coffe} alt="imagem de café" />
    
      <View> 
        <View style={styles.containerShop}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.price}>R$ {data.price}</Text>
        </View>

        <Text style={styles.millilitres}>{data.ml}</Text>

        <View style={styles.actions}>
          <Counter data={data.quantity} />
          <TouchableOpacity style={styles.removeButtom} onPress={onRemove}>
            <Trash color={THEME.COLORS.PURPLE} size={20}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}