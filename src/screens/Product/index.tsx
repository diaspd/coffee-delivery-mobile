import { useEffect, useState } from "react";
import { Text, View, Image, Pressable } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Minus, Plus } from "phosphor-react-native";

import { styles } from "./styles";

import Coffe from '../../assets/coffees/coffee-big.png';
import { THEME } from "../../styles/theme";

import { Header } from "../../components/Header";
import { PRODUCTS } from "../../components/data/product";
import type { ProductCardProps } from "../../components/CoffeeListCard";
import type { AppRoutesProps } from "../../routes/app.routes";
import { useCart } from "../../hooks/useCart";

type RouteParamsProps = {
  productId: string;
}

export function Product() {
  const [product, setProduct] = useState<ProductCardProps>({} as ProductCardProps);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const route = useRoute();
  const navigationStack = useNavigation<AppRoutesProps>();

  const { productId } = route.params as RouteParamsProps;

  const { addProductCart } = useCart();

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  async function handleAddProductToCart() {
    try {
      await addProductCart({
        id: product.id,
        name: product.name,
        image: product.thumb,
        price: product.price,
        ml: selectedSize,
        quantity: 1
      });

      console.log('Produto adicionado no carrinho');

      navigationStack.navigate('cart');
    } catch (error) {
     console.error(error);
    }
  }

  useEffect(() => {
    const selected = PRODUCTS.find(item => item.id === productId) as ProductCardProps;
    setProduct(selected);
  }, [productId]);

  return (
    <>
      <View style={styles.intro}>
        <Header hasCart hasGoBack />

        <View style={styles.tagWrapper}>
          <Text style={styles.tag}>{product.tag}</Text>
        </View>

        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{product.name}</Text>

          <Text style={styles.dolar}>R$
            <Text style={styles.price}>{product.price}</Text>
          </Text>
          
        </View>

        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={styles.footer}>
        <Image source={Coffe} style={{ marginTop: -245, zIndex: 15 }} />

        <Text style={styles.footerTitle}>Selecione o tamanho:</Text>

        <View style={styles.optionsWrapper}>
          {['114ml', '140ml', '227ml'].map((size) => (
            <Pressable
              key={size}
              onPress={() => handleSizeSelect(size)}
              style={[
                styles.option,
                selectedSize === size && { borderColor: THEME.COLORS.PURPLE, borderWidth: 1.5 }
              ]}
            >
              <Text style={[styles.optionText, selectedSize === size && { color: THEME.COLORS.PURPLE, fontFamily: THEME.FONTS.BOLD_DEFAULT }]}>{size}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.counterWrapper}>
          <View style={styles.counter}>
            <Pressable>
              <Minus size={24} color={THEME.COLORS.PURPLE} />
            </Pressable>
            <Text style={styles.text}>1</Text>
            <Pressable>
              <Plus size={24} color={THEME.COLORS.PURPLE} />
            </Pressable>
          </View>

          <Pressable style={styles.button} onPress={handleAddProductToCart}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
