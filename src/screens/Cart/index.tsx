import { useRef } from "react";
import { FlatList, Text, View, TouchableOpacity, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Animated, { Layout, SlideInRight, SlideOutRight } from 'react-native-reanimated';
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";

import { ShoppingCart, Trash } from "phosphor-react-native";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";

import type { AppRoutesProps } from "../../routes/app.routes";

import { useCart } from "../../hooks/useCart";

import { Header } from "../../components/Header";
import { CoffeeCartCard } from "../../components/CoffeeCartCard";

export function Cart() {
  const navigationStack = useNavigation<AppRoutesProps>();
  const { cart, removeProductCart, handleStorageProductRemoveAll } = useCart();

  const swipeableRefs = useRef<Swipeable[]>([]);

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
            <Animated.View
             key={item.id}
             entering={SlideInRight}
             exiting={SlideOutRight}
             layout={Layout.springify()} 
            >
              <GestureHandlerRootView>
                <Swipeable 
                  ref={(ref) => {
                    if (ref) {
                      swipeableRefs.current.push(ref)
                    }
                  }}
                  overshootLeft={false}
                  containerStyle={styles.swipeableContainer}
                  leftThreshold={10}
                  renderRightActions={() => null}
                  onSwipeableOpen={() => removeProductCart(item.id)}
                  renderLeftActions={() => {
                    return(
                      <View style={styles.swipeableRemove}>
                        <Trash size={32} color={THEME.COLORS.RED_DARK} />
                      </View>
                    )
                  }}
                >
                  <CoffeeCartCard data={item} onRemove={() => handleItemRemove(item.id)} />
                </Swipeable>
              </GestureHandlerRootView>
            </Animated.View>
          </View>
        )}
        ListEmptyComponent={
          <View>
            <ShoppingCart weight="fill" color={THEME.COLORS.GREY_500} style={{ alignSelf: 'center', marginTop: 54 }} size={28}/>
            <Text style={styles.emptyMessage}>Seu carrinho está vazio</Text>

            <TouchableOpacity activeOpacity={0.6} onPress={() => navigationStack.navigate("home")} style={styles.listEmptyButton}>
              <Text style={styles.listEmptyButtonText}>ver catálogo</Text>
            </TouchableOpacity>
          </View>
        }
      />

      {formattedTotalPrice ? (
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
      ) : null}
    </View>
  )
}