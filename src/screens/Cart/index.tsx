import { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";

import { styles } from "./styles";

import { Header } from "../../components/Header";

import { CoffeeCartCard } from "../../components/CoffeeCartCard";

export function Cart() {
  const [product, setProduct] = useState<string[]>(['caffe', 'cap']);

  return (
    <ScrollView>
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
    </ScrollView>
  )
}