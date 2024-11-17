import { useEffect, useState } from "react";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
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
};

export function Product() {
  const [product, setProduct] = useState<ProductCardProps>({} as ProductCardProps);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const route = useRoute();
  const navigationStack = useNavigation<AppRoutesProps>();

  const { productId } = route.params as RouteParamsProps;

  const { addProductCart, cart, increment, decrement } = useCart();

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const cartItem = cart.find(item => item.name === product.name);
  const quantity = cartItem?.quantity || 0;

  const handleIncrement = () => {
    if (cartItem) {
      increment(cartItem.id);
    } else {
      addProductCart({
        id: `${productId}-${Date.now()}`,
        productId,
        name: product.name,
        image: product.thumb,
        price: product.price,
        ml: selectedSize,
        quantity: 1,
      });
    }
  };

  const handleDecrement = () => {
    if (cartItem && cartItem.quantity > 0) {
      decrement(cartItem.id);
    }
  };

  const handleAddProductToCart = () => {
    if (!cartItem) {
      addProductCart({
        id: `${productId}-${Date.now()}`,
        productId,
        name: product.name,
        image: product.thumb,
        price: product.price,
        ml: selectedSize,
        quantity: 1,
      });
    }

    navigationStack.navigate('cart');
  };

  useEffect(() => {
    const selected = PRODUCTS.find(item => item.id === productId) as ProductCardProps;
    setProduct(selected);
  }, [productId]);

  return (
    <ScrollView>
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
              <Text
                style={[
                  styles.optionText,
                  selectedSize === size && {
                    color: THEME.COLORS.PURPLE,
                    fontFamily: THEME.FONTS.BOLD_DEFAULT
                  }
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.counterWrapper}>
          <View style={styles.counter}>
            <Pressable onPress={handleDecrement}>
              <Minus size={24} color={THEME.COLORS.PURPLE} />
            </Pressable>
            <Text style={styles.text}>{quantity}</Text>
            <Pressable onPress={handleIncrement}>
              <Plus size={24} color={THEME.COLORS.PURPLE} />
            </Pressable>
          </View>

          <Pressable
            style={!selectedSize ? styles.buttonDisabled : styles.button}
            onPress={handleAddProductToCart}
            disabled={!selectedSize}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
