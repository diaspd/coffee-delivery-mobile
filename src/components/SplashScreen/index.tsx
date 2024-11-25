import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  Easing, 
  runOnJS 
} from 'react-native-reanimated';
import { styles } from './styles';

type SplashScreenProps = {
  onFinish: () => void;
};

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const circleScale = useSharedValue(0);
  const imageOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const textTranslateX = useSharedValue(100);
  const imageTranslateX = useSharedValue(50);

  useEffect(() => {
    circleScale.value = withTiming(10, { duration: 2000, easing: Easing.out(Easing.ease) }, () => {
      imageOpacity.value = withTiming(1, { duration: 800 }, () => {
        imageTranslateX.value = withTiming(-10, { duration: 800 });
        textOpacity.value = withTiming(1, { duration: 800 });
        textTranslateX.value = withTiming(0, { duration: 800 }, () => {
          runOnJS(onFinish)();
        });
      });
    });
  }, []);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: circleScale.value }],
  }));

  const imageStyle = useAnimatedStyle(() => ({
    opacity: imageOpacity.value,
    transform: [{ translateX: imageTranslateX.value }],
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ translateX: textTranslateX.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Animated.View style={[styles.circle, circleStyle]} />
      <View style={styles.wrapper}>
        <Animated.Image
          source={require('../../assets/splash/logo.png')}
          style={[styles.image, imageStyle]}
          resizeMode="contain"
        />
        <Animated.Image
          source={require('../../assets/splash/text.png')}
          style={textStyle}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
