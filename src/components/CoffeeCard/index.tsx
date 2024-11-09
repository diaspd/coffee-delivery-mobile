import { Pressable, Text, View, type TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

import Coffe from '../../assets/coffees/Image.png'
import type { ProductCardProps } from "../CoffeeListCard";

import type { AppRoutesProps } from "../../routes/app.routes";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  data: ProductCardProps;
}

export function CoffeeCard({ data }: Props) {
  const navigationStack = useNavigation<AppRoutesProps>();
  
  return (
    <Pressable onPress={() => navigationStack.navigate('product')}>
      <Image source={Coffe} alt="imagem de café" style={{ zIndex: 1, alignSelf: 'center' }} />
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
    </Pressable>
  )
}