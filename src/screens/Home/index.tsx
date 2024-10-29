import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

import { MagnifyingGlass } from "phosphor-react-native";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

import { CoffeeCard } from "../../components/CoffeeCard";
import { Header } from "../../components/Header";

export function Home() {
  const [product, setProduct] = useState('caffe');
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <View style={styles.intro}>
        <Header />

        <Text style={styles.title}>Encontre o café perfeito para qualquer hora do dia</Text>

        <View style={styles.input}>
          <MagnifyingGlass color={focus ? THEME.COLORS.YELLOW : inputValue.length > 0 ? THEME.COLORS.YELLOW_DARK : THEME.COLORS.GREY_400} size={18} />
          <TextInput 
            placeholder="Pesquisar" 
            placeholderTextColor={THEME.COLORS.GREY_400} 
            onPressIn={() => setFocus(true)}
            onKeyPress={() => setFocus(false)}
            value={inputValue}
            onChangeText={setInputValue}
            style={{ color: THEME.COLORS.GREY_700}}
            keyboardType="default"
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