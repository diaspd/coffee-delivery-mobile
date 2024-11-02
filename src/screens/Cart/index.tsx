import { useState } from "react";
import { FlatList, ScrollView } from "react-native";

import { styles } from "./styles";

import { Header } from "../../components/Header";

import { CoffeeListCard } from "../../components/CoffeeListCard";
import { CoffeeCartCard } from "../../components/CoffeeCartCard";

export function Cart() {
  const [product, setProduct] = useState<string[]>(['caffe', 'cap']);

  return (
    <ScrollView>
        <Header hasGoBack />

        <FlatList 
          data={product}
          keyExtractor={item => item}
          renderItem={({ item, index }) => <CoffeeCartCard key={index} /> }
        />
    </ScrollView>
  )
}