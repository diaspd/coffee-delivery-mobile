import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

export function CoffeeCard() {
  return (
       <View style={styles.container}>
        <Image source={{ uri: `https://github.com/diaspd.png`}} alt="imagem de café" />
        <View style={styles.tags}>
          <Text>tag</Text>
        </View>
        <Text>nom</Text>
        <Text>escription</Text>

        <View style={styles.containerShop}>
          <Text>R$</Text>
          <Text>24</Text>
          <View>
            <Button title="comprar"
            />
          </View>
        </View>
      </View>
  )
}