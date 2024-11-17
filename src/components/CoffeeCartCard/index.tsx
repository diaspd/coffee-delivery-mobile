import { Text, View, TouchableOpacity, Image, Pressable } from "react-native";
import { Minus, Plus, Trash } from "phosphor-react-native";

import Coffe from '../../assets/coffees/expresso-tradicional.png';
import { THEME } from "../../styles/theme";
import { styles } from "./styles";
import { useCart } from "../../hooks/useCart";

import type { StorageCartProps } from "../../storage/cartStorage";

type Props = {
  onRemove: () => void;
  data: StorageCartProps;
};

export function CoffeeCartCard({ data, onRemove }: Props) {
  const { cart, increment, decrement } = useCart();

  const quantity = cart.find(item => item.id === data.id)?.quantity || 0;

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
          <View style={styles.countContainer}>
            <Pressable onPress={() => decrement(data.id)}>
              <Minus size={20} color={THEME.COLORS.PURPLE} />
            </Pressable>
              <Text style={styles.text}>{quantity}</Text>
            <Pressable onPress={() => increment(data.id)}>
              <Plus size={20} color={THEME.COLORS.PURPLE} />
            </Pressable>
          </View>

          <TouchableOpacity style={styles.removeButtom} onPress={onRemove}>
            <Trash color={THEME.COLORS.PURPLE} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
