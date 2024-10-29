import { useState } from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";
import { CoffeeCard } from "../../components/CoffeeCard";
import { Header } from "../../components/Header";

export function Home() {
  const [product, setProduct] = useState('caffe')

  return (
    <>
      <View style={styles.intro}>
        <Header />
      </View>

        <View style={styles.coffeeList}>
        <FlatList 
          data={product}
          keyExtractor={item => item}
          renderItem={({ item, index }) => <CoffeeCard data={item} key={index} /> }
        />
      </View>
    </>
  )
}