import { Text, View, Image } from "react-native";

import { styles } from "./styles";

import { Header } from "../../components/Header";

import Coffe from '../../assets/coffees/coffee-big.png'

export function Product() {
  return (
    <>
      <View style={styles.intro}>
        <Header hasCart hasGoBack /> 

        <View style={styles.tagWrapper}>
          <Text style={styles.tag}>especial</Text>
        </View>

        <View>
          <Text style={styles.title}>Irlandês</Text>

          <Text>R$</Text>
          <Text>9,90</Text>
        </View>

        <Text style={styles.title}>Bebida a base de café, uísque irlandês, açúcar e chantilly</Text>
      </View>

      <View style={styles.coffeeList}>
        <Image source={Coffe} style={{ marginTop: -245, zIndex: 15, marginHorizontal: 35}} />
      
      </View>
    </>
  )
}