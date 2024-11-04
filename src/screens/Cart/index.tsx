import { useState } from "react";
import { FlatList, Text, View, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";


import { styles } from "./styles";
import { Header } from "../../components/Header";

import { CoffeeCartCard } from "../../components/CoffeeCartCard";
import type { AppRoutesProps } from "../../routes/app.routes";

export function Cart() {
  const [product, setProduct] = useState<string[]>(['caffe', 'cap']);
  const navigationStack = useNavigation<AppRoutesProps>();

  return (
    <View style={styles.container}>
      <Header hasGoBack />

      <FlatList 
        data={product}
        style={{ marginTop: 24 }}
        keyExtractor={item => item}
        renderItem={({ item, index }) => (
          <View style={styles.coffeeCartCardwrapper}>
            <CoffeeCartCard key={index} />
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