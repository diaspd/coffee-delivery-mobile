import React, { useEffect } from "react";
import { Text, View, Pressable, Image } from "react-native";

import Illustration from "../../assets/Illustration.png";
import type { AppRoutesProps } from "../../routes/app.routes";

import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withDelay,
} from "react-native-reanimated";

export function Finish() {
  const navigationStack = useNavigation<AppRoutesProps>();

  const illustrationPosition = useSharedValue(-300); 
  const buttonOpacity = useSharedValue(0); 

  useEffect(() => {
    illustrationPosition.value = withSpring(0, {
      damping: 12,
      stiffness: 150,
    });

    buttonOpacity.value = withDelay(3000, withTiming(1, { duration: 500 }));
  }, []);

  const illustrationStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: illustrationPosition.value }],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    opacity: buttonOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={illustrationStyle}>
        <Image source={Illustration} />
      </Animated.View>

      <Text style={styles.title}>Uhu! Pedido confirmado</Text>
      <Text style={styles.description}>
        Agora é só aguardar que logo o café chegará até você!
      </Text>

      <Animated.View style={[styles.button, buttonStyle]}>
        <Pressable onPress={() => navigationStack.navigate("home")}>
          <Text style={styles.buttonText}>ir para a home</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
