import { FlatList, Text, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Coffee } from "phosphor-react-native";

import { styles } from "./styles";

import type { AppRoutesProps } from "../../routes/app.routes";

import { useCart } from "../../hooks/useCart";

import { Header } from "../../components/Header";
import { CoffeeCartCard } from "../../components/CoffeeCartCard";

import { THEME } from "../../styles/theme";

export function Cart() {
  const navigationStack = useNavigation<AppRoutesProps>();
  const { cart, removeProductCart, handleStorageProductRemoveAll } = useCart();

  async function handleItemRemove(productId: string) {
    try {
      await removeProductCart(productId);
    } catch (error) {
      console.error(error);
    }
  }

  const totalPrice = cart?.reduce((total, { price, quantity }) => 
    total + parseFloat(price?.replace(',', '.')) * quantity, 0);
  
  const formattedTotalPrice = totalPrice % 1 === 0 ? totalPrice : totalPrice.toFixed(2);

  async function handleGoToFinishScreen() {
    await handleStorageProductRemoveAll()

    navigationStack.navigate('finish')
  }

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

        <TouchableOpacity 
          activeOpacity={0.6} 
          style={cart.length === 0 ? styles.buttonDisabled : styles.button} 
          disabled={cart.length === 0} 
          onPress={handleGoToFinishScreen}
        >
          <Text style={styles.buttonText}>confirmar pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}