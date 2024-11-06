import { Text, View, Image, Pressable } from "react-native";

import { styles } from "./styles";

import { Header } from "../../components/Header";

import Coffe from '../../assets/coffees/coffee-big.png'
import { Minus, Plus } from "phosphor-react-native";
import { THEME } from "../../styles/theme";

export function Product() {
  return (
    <>
      <View style={styles.intro}>
        <Header hasCart hasGoBack /> 

        <View style={styles.tagWrapper}>
          <Text style={styles.tag}>especial</Text>
        </View>

        <View style={styles.infoWrapper}>
          <Text style={styles.title}>Irlandês</Text>

          <Text style={styles.dolar}>R$
            <Text style={styles.price}>9,90</Text>
          </Text>
          
        </View>

        <Text style={styles.description}>Bebida a base de café, uísque irlandês, açúcar e chantilly</Text>
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