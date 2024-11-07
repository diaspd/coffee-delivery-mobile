import { Button, Text, View, type TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

import Coffe from '../../assets/coffees/Image.png'
import type { ProductCardProps } from "../CoffeeListCard";

type Props = TouchableOpacityProps & {
  data: ProductCardProps;
}

export function CoffeeCard({ data }: Props) {
  console.log(data)
  
  return (
    <>
      <Image source={Coffe} alt="imagem de café" style={{ zIndex: 1 }} />
       <View style={[styles.container]}>
      
        <View style={styles.tags}>
          <Text style={styles.tagText}>{data.tag}</Text>
        </View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{data.description}</Text>

        <View style={styles.containerShop}>
          <Text style={styles.dollar}>R$</Text>
          <Text style={styles.price}>{data.price}</Text>
        </View>
      </View>
      </>
  )
}