import { Pressable, Text, View, type TouchableOpacityProps } from "react-native";
import { Image } from "react-native";

import type { ProductCardProps } from "../CoffeeListCard";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  data: ProductCardProps;
}

export function CoffeeCard({ data, ...rest }: Props) {
  return (
    <Pressable {...rest}>
      <Image source={data.thumb} alt="imagem de café" style={{ zIndex: 1, alignSelf: 'center' }} />
        <View style={[styles.container]}>
      
        <View style={styles.tags}>
          <Text style={styles.tagText}>{data.tag}</Text>
        </View>
        <Text style={styles.title} numberOfLines={1}>{data.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{data.description}</Text>

        <View style={styles.containerShop}>
          <Text style={styles.dollar}>R$</Text>
          <Text style={styles.price}>{data.price}</Text>
        </View>
      </View>
    </Pressable>
  )
}