import { useState } from "react";
import { FlatList, Text, View, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";


import { styles } from "./styles";
import { Header } from "../../components/Header";

import { CoffeeCartCard } from "../../components/CoffeeCartCard";
import type { AppRoutesProps } from "../../routes/app.routes";
import { useCart } from "../../hooks/useCart";

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
        ) }
      />

      <View style={styles.footer}>
        <View style={styles.priceWrapper}>
          <Text style={styles.totalValue}>
            Valor total
          </Text>
         
          <Text style={styles.price}> 
            R$ 9,90
          </Text>
        </View>

        <Pressable style={styles.button} onPress={() => navigationStack.navigate('finish')}>
          <Text style={styles.buttonText}>confirmar pedido</Text>
        </Pressable>
      </View>
    </View>
  )
}