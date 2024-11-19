import React from 'react';
import { View } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  interpolate,
} from 'react-native-reanimated';

import { styles } from "./styles";

import Smoke1 from '../../assets/smoke/1.png'
import Smoke2 from '../../assets/smoke/2.png'
import Smoke3 from '../../assets/smoke/3.png'
import Smoke4 from '../../assets/smoke/4.png'

export function Smoke() {
  const smoke1 = useSharedValue(0);
  const smoke2 = useSharedValue(0);
  const smoke3 = useSharedValue(0);
  const smoke4 = useSharedValue(0);

  React.useEffect(() => {
    const startAnimation = (smokeValue: Animated.SharedValue<number>) => {
      smokeValue.value = withRepeat(
        withTiming(1, {
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        false 
      );
    };

    startAnimation(smoke1);
    startAnimation(smoke2);
    startAnimation(smoke3);
    startAnimation(smoke4);
  }, []);

  const createSmokeStyle = (smokeValue: Animated.SharedValue<number>, index: number) =>
    useAnimatedStyle(() => ({
      transform: [
        { translateY: interpolate(smokeValue.value, [0, 1], [0, -120]) }, 
        { translateX: interpolate(smokeValue.value, [0, 1], [-10 + index * 10, 10 - index * 10]) },
        { scale: interpolate(smokeValue.value, [0, 1], [0.8, 1.2]) }, 
      ],
      opacity: interpolate(smokeValue.value, [0, 0.5, 1], [0.4, 0.7, 0]), 
    }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={Smoke1}
        style={[styles.smoke, createSmokeStyle(smoke1, 0)]}
      />

      <Animated.Image
        source={Smoke2}
        style={[styles.smoke, createSmokeStyle(smoke2, 1)]}
      />
      
      <Animated.Image
        source={Smoke3}
        style={[styles.smoke, createSmokeStyle(smoke3, 2)]}
      />
      
      <Animated.Image
        source={Smoke4}
        style={[styles.smoke, createSmokeStyle(smoke4, 3)]}
      />
    </View>
  );
};
