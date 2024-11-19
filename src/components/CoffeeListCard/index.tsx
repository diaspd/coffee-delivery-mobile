import React from "react";
import { Text, Image, View, type ImageSourcePropType, type TouchableOpacityProps, TouchableOpacity } from "react-native";
import Animated, { FadeInUp, FadeOut } from "react-native-reanimated";
import { styles } from "./styles";

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export type ProductCardProps = {
  id: string;
  ml?: string;
  tag: string;
  name: string;
  price: string;
  thumb: ImageSourcePropType;
  description: string;
}

type Props = TouchableOpacityProps & {
  data: ProductCardProps;
  index: number;
}

export function CoffeeListCard({ data, index, ...rest }: Props) {
  return (
    <TouchableOpacityAnimated style={styles.container} entering={FadeInUp.delay(index * 100)} exiting={FadeOut}
    {...rest}>
      <Image source={data.thumb} alt="imagem de café" style={{ zIndex: 1, marginTop: -20 }} />
    
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{data.description}</Text>

        <View style={styles.containerShop}>
          <Text style={styles.dollar}>R$</Text>
          <Text style={styles.price}>{data.price}</Text>
        </View>
      </View>
    </TouchableOpacityAnimated>
  )
}