import { useEffect } from "react";
import { useState } from "react";
import { ScrollView, SectionList, Text, TextInput, View, Pressable, Image } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { MagnifyingGlass } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import type { AppRoutesProps } from "../../routes/app.routes";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { CarouselComponent } from "../../components/CarouselComponent";
import { CoffeeListCard, type ProductCardProps } from "../../components/CoffeeListCard";

import { PRODUCTS } from "../../data/product";
import CoffeeBg from "../../assets/coffee-bg.png";

export function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>(PRODUCTS);
  const [focus, setFocus] = useState(false);
  const [flavorSelected, setFlavorSelected] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const navigationStack = useNavigation<AppRoutesProps>();

  const sections = [
    { title: "Tradicional", data: PRODUCTS.filter(product => product.tag === "TRADICIONAL") },
    { title: "Doce", data: PRODUCTS.filter(product => product.tag === "DOCE") },
    { title: "Especial", data: PRODUCTS.filter(product => product.tag === "ESPECIAL") },
  ];

  const filteredSections = sections
    .map(section => ({
      ...section,
      data: section.data.filter(product => {
        const matchesTag = flavorSelected.length === 0 || flavorSelected.includes(product.tag);
        const matchesSearch = product.name.toLowerCase().includes(inputValue.toLowerCase());
        return matchesTag && matchesSearch;
      }),
    }))
    .filter(section => section.data.length > 0);

  function handleTagPress(tag: string) {
    setFlavorSelected(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  }

  function handleSearch(text: string) {
    setInputValue(text);
  }

  const translateX = useSharedValue(500);
  const translateY = useSharedValue(500);
  const translateYIntro = useSharedValue(-500);

  const animatedIntroStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateYIntro.value}],
  }));

  const animatedXStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const animatedYStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateX.value}],
  }));

  useEffect(() => {
    translateX.value = withTiming(0, { duration: 2000 });
    translateY.value = withTiming(0, { duration: 2000 });
    translateYIntro.value = withTiming(0, { duration: 1000 });
  }, []);

  return (
    <ScrollView style={{backgroundColor: THEME.COLORS.GREY_900}}>
      <Animated.View style={[styles.intro, animatedIntroStyle]}>
        <Header hasCart />
        <Text style={styles.title}>Encontre o café perfeito para qualquer hora do dia</Text>
        <View style={styles.input}>
          <MagnifyingGlass 
            color={focus ? THEME.COLORS.YELLOW : inputValue.length > 0 ? THEME.COLORS.YELLOW_DARK : THEME.COLORS.GREY_400}
            size={18}
          />
          <TextInput 
            placeholder="Pesquisar"
            placeholderTextColor={THEME.COLORS.GREY_400}
            onPressIn={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={inputValue}
            onChangeText={handleSearch}
            style={{ color: THEME.COLORS.GREY_700 }}
            keyboardType="default"
          />
        </View>
        <Image source={CoffeeBg} style={{ marginLeft: 'auto', marginRight: 10 }} resizeMode="contain" />
      </Animated.View>

      <View style={styles.coffeeList}>
        <Animated.View style={[styles.carousel, animatedXStyle]}>
          <CarouselComponent data={products} />
        </Animated.View>
        
        <Animated.View style={[styles.coffeeListWrapper, animatedYStyle]}>
          <Text style={styles.coffeeListTitle}>Nossos cafés</Text>
          <View style={styles.tagWrapper}>
            <Pressable
              style={flavorSelected.includes("TRADICIONAL") ? styles.tagsSelected : styles.tags}
              onPress={() => handleTagPress("TRADICIONAL")}
            >
              <Text style={flavorSelected.includes("TRADICIONAL") ? styles.tagTextSelected : styles.tagText}>
                Tradicional
              </Text>
            </Pressable>
            <Pressable
              style={flavorSelected.includes("DOCE") ? styles.tagsSelected : styles.tags}
              onPress={() => handleTagPress("DOCE")}
            >
              <Text style={flavorSelected.includes("DOCE") ? styles.tagTextSelected : styles.tagText}>
                doces
              </Text>
            </Pressable>
            <Pressable
              style={flavorSelected.includes("ESPECIAL") ? styles.tagsSelected : styles.tags}
              onPress={() => handleTagPress("ESPECIAL")}
            >
              <Text style={flavorSelected.includes("ESPECIAL") ? styles.tagTextSelected : styles.tagText}>
                especiais
              </Text>
            </Pressable>
          </View>
      
        <SectionList
          sections={filteredSections}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <CoffeeListCard
              data={item}
              index={index}
              onPress={() => navigationStack.navigate("product", { productId: item.id })}
            />
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.listTitle}>{section.title}</Text>
          )}
          ListEmptyComponent={<Text style={styles.emptyMessage}>Nenhum café encontrado</Text>}
          scrollEnabled={false}
        />
      </Animated.View>
      </View>
    </ScrollView>
  );
}
