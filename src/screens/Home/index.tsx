import { useEffect, useState } from "react";
import { FlatList, ScrollView, SectionList, Text, TextInput, View } from "react-native";

import { MagnifyingGlass } from "phosphor-react-native";

import { useNavigation } from "@react-navigation/native";
import type { AppRoutesProps } from "../../routes/app.routes";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { CarouselComponent } from "../../components/CarouselComponent";
import { CoffeeListCard, type ProductCardProps } from "../../components/CoffeeListCard";

import { PRODUCTS } from "../../components/data/product";
import { Pressable } from "react-native";

export function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [productsNoFilter, setProductsNoFilter] = useState<ProductCardProps[]>([]);
  const [focus, setFocus] = useState(false);

  const [flavorSelected, setFlavorSelected] = useState('');

  const [inputValue, setInputValue] = useState('');

  const navigationStack = useNavigation<AppRoutesProps>();

  useEffect(() => {
    const filtered = PRODUCTS.filter(product => product.tag === flavorSelected) as ProductCardProps[];
    const notFiltered = PRODUCTS as ProductCardProps[];
    
    setProductsNoFilter(notFiltered)
    setProducts(filtered);
  }, [flavorSelected])

  const sections = [
    { title: "Tradicional", data: PRODUCTS.filter(product => product.tag === "TRADICIONAL") },
    { title: "Doce", data: PRODUCTS.filter(product => product.tag === "DOCE") },
    { title: "Especial", data: PRODUCTS.filter(product => product.tag === "ESPECIAL") },
  ];

  const filteredSections = flavorSelected 
    ? sections.filter(section => section.title.toLowerCase() === flavorSelected.toLowerCase())
    : sections;

  return (
    <ScrollView>
      <View style={styles.intro}>
        <Header hasCart />

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
          <CarouselComponent data={productsNoFilter} />
        </View>

        <View style={styles.coffeeListWrapper}>
        <Text style={styles.coffeeListTitle}>
          Nossos cafés
        </Text>

        <View style={styles.tagWrapper}>
          <Pressable style={styles.tags} onPress={() => setFlavorSelected('TRADICIONAL')}>
            <Text style={styles.tagText}>Tradicional</Text>
          </Pressable>

          <Pressable style={styles.tags} onPress={() => setFlavorSelected('DOCE')}>
            <Text style={styles.tagText}>doces</Text>
          </Pressable>

          <Pressable style={styles.tags} onPress={() => setFlavorSelected('ESPECIAL')}>
            <Text style={styles.tagText}>especiais</Text>
          </Pressable>
        </View>
        </View>

        <SectionList 
          sections={filteredSections}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CoffeeListCard data={item} onPress={() => navigationStack.navigate('product', { productId: item.id })} /> }
          renderSectionHeader={({ section }) => (<Text style={styles.listTitle}>{section.title}</Text>)}
        />
      </View>
    </ScrollView>
  )
}