import { Text, View } from "react-native";

import { styles } from "./styles";

import { Header } from "../../components/Header";

export function Product() {
  return (
    <>
      <View style={styles.intro}>
        <Header hasCart hasGoBack /> 

        <Text>especial</Text>

        <View>
          <Text style={styles.title}>Irlandês</Text>

          <Text>R$</Text>
          <Text>9,90</Text>
        </View>

        <Text style={styles.title}>Bebida a base de café, uísque irlandês, açúcar e chantilly</Text>

        {/* <Image /> */}
      </View>

      <View style={styles.coffeeList}>
      
      </View>
    </>
  )
}