import { useEffect, useState } from "react";
import { Text, View, Image, Pressable } from "react-native";

import { useRoute } from "@react-navigation/native";
import { Minus, Plus } from "phosphor-react-native";

import { styles } from "./styles";

import Coffe from '../../assets/coffees/coffee-big.png'
import { THEME } from "../../styles/theme";

import { Header } from "../../components/Header";
import { PRODUCTS } from "../../components/data/product";
import type { ProductCardProps } from "../../components/CoffeeListCard";

type RouteParamsProps = {
  productId: string;
}

export function Product() {
  const [product, setProduct] = useState<ProductCardProps>({} as ProductCardProps);
  const route = useRoute()

  const { productId } = route.params as RouteParamsProps;

  useEffect(() => {
    const selected = PRODUCTS.filter(item => item.id === productId)[0] as ProductCardProps;
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
          <View style={styles.option}>
            <Text style={styles.optionText}>114ml</Text>
          </View>

          <View style={styles.option}>
            <Text style={styles.optionText}>140ml</Text>
          </View>

          <View style={styles.option}>
            <Text style={styles.optionText}>227ml</Text>
          </View> 
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

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </Pressable>
          </View>
      </View>
    </>
  )
}