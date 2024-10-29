import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

import { CoffeeCard } from "../../components/CoffeeCard";
import { Header } from "../../components/Header";
import { MagnifyingGlass } from "phosphor-react-native";
import { THEME } from "../../styles/theme";

export function Home() {
  const [product, setProduct] = useState('caffe')

  return (
    <>
      <View style={styles.intro}>
        <Header />

        <Text style={styles.title}>Encontre o café perfeito para qualquer hora do dia</Text>

        <View style={styles.input}>
          <MagnifyingGlass color={THEME.COLORS.GREY_400} size={18} />
          <TextInput 
            placeholder="Pesquisar" 
            placeholderTextColor={THEME.COLORS.GREY_400} 
            style={{ color: THEME.COLORS.GREY_700}}
          />
        </View>
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