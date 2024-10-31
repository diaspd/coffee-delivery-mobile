import { useState } from "react";
import { FlatList, ScrollView, Text, TextInput, View } from "react-native";

import { MagnifyingGlass } from "phosphor-react-native";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

import { CoffeeCard } from "../../components/CoffeeCard";
import { Header } from "../../components/Header";
import { CarouselComponent } from "../../components/CarouselComponent";
import { CoffeeListCard } from "../../components/CoffeeListCard";

export function Home() {
  const [product, setProduct] = useState<string[]>(['caffe', 'cap']);
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <ScrollView>
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
        <View style={styles.carousel}>
          <CarouselComponent />
        </View>

        <View style={styles.coffeeListWrapper}>
        <Text style={styles.coffeeListTitle}>
          Nossos cafés
        </Text>

        <View style={styles.tagWrapper}>
          <View style={styles.tags}>
            <Text style={styles.tagText}>Tradicional</Text>
          </View>

          <View style={styles.tags}>
            <Text style={styles.tagText}>doces</Text>
          </View>

          <View style={styles.tags}>
            <Text style={styles.tagText}>especiais</Text>
          </View>
        </View>
        </View>

        <FlatList 
          data={product}
          keyExtractor={item => item}
          renderItem={({ item, index }) => <CoffeeListCard key={index} /> }
        />
      </View>
    </ScrollView>
  )
}