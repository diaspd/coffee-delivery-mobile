import { Pressable, Text, View, type ImageSourcePropType, type TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

export type ProductCardProps = {
  id: string;
  ml?: number;
  tag: string;
  name: string;
  price: string;
  thumb: ImageSourcePropType | undefined;
  description: string;
}

type Props = TouchableOpacityProps & {
  data: ProductCardProps;
}

export function CoffeeListCard({ data, ...rest }: Props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <Image source={data.thumb} alt="imagem de café" style={{ zIndex: 1, marginTop: -20 }} />
    
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{data.description}</Text>

        <View style={styles.containerShop}>
          <Text style={styles.dollar}>R$</Text>
          <Text style={styles.price}>{data.price}</Text>
        </View>
      </View>
    </Pressable>
  )
}