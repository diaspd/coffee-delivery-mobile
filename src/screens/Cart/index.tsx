import { FlatList, Text, View, Pressable, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { Header } from "../../components/Header";

import { CoffeeCartCard } from "../../components/CoffeeCartCard";
import type { AppRoutesProps } from "../../routes/app.routes";
import { useCart } from "../../hooks/useCart";
import { Coffee, CoffeeBean } from "phosphor-react-native";
import { THEME } from "../../styles/theme";

export function Cart() {
  const navigationStack = useNavigation<AppRoutesProps>();
  const { cart, removeProductCart } = useCart();

  async function handleItemRemove(productId: string) {
    try {
      await removeProductCart(productId);
    } catch (error) {
      console.error(error);
    }
  }

  const totalPrice = cart?.reduce((total, { price, quantity }) => 
    total + parseFloat(price.replace(',', '.')) * quantity, 0);
  
  const formattedTotalPrice = totalPrice % 1 === 0 ? totalPrice : totalPrice.toFixed(2);

  return (
    <View style={styles.container}>
      <Header hasGoBack />

      <FlatList 
        data={cart}
        style={{ marginTop: 24 }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.coffeeCartCardwrapper}>
            <CoffeeCartCard data={item} onRemove={() => handleItemRemove(item.id)} />
          </View>
        )}
        ListEmptyComponent={
          <View>
            <Text style={styles.emptyMessage}>Você ainda não adicionou nenhum café ao carrinho...</Text>
            <Coffee color={THEME.COLORS.GREY_300} style={{ alignSelf: 'center', marginTop: 10 }} size={36}/>
          </View>
        }
      />

      <View style={styles.footer}>
        <View style={styles.priceWrapper}>
          <Text style={styles.totalValue}>
            Valor total
          </Text>
         
          <Text style={styles.price}> 
            {formattedTotalPrice}
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.6} style={cart.length === 0 ? styles.buttonDisabled : styles.button} disabled={cart.length === 0} onPress={() => navigationStack.navigate('finish')}>
          <Text style={styles.buttonText}>confirmar pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}