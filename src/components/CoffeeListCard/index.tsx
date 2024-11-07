import { Pressable, Text, View, type TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

import Coffe from '../../assets/coffees/Image.png'

import { useNavigation } from "@react-navigation/native";
import type { AppRoutesProps } from "../../routes/app.routes";

export type ProductCardProps = {
  id: string;
  ml: number;
  tag: string;
  name: string;
  price: string;
  thumb: Image;
  product: Image;
  description: string;
}

type Props = TouchableOpacityProps & {
  data: ProductCardProps;
}

export function CoffeeListCard({ data, ...rest }: Props) {
  const navigationStack = useNavigation<AppRoutesProps>();
  
  return (
    <Pressable style={styles.container} onPress={() => navigationStack.navigate('product')}>
      <Image source={Coffe} alt="imagem de café" style={{ zIndex: 1, marginTop: -20 }} />
    
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.containerShop}>
          <Text style={styles.dollar}>R$</Text>
          <Text style={styles.price}>{data.price}</Text>
        </View>
      </View>
    </Pressable>
  )
}