import { Dimensions, View } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import { CoffeeCard } from '../CoffeeCard';

export function CarouselComponent() {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth * 0.6;

  return (
      <Carousel
        loop
        autoPlay
        snapEnabled
        width={itemWidth}
        style={{ overflow: 'visible'}}
        height={320}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1500}
        autoPlayInterval={6000}
        mode="parallax" 
        modeConfig={{
          parallaxScrollingScale: 1,  
          parallaxScrollingOffset: 0,  
          parallaxAdjacentItemScale: 0.8 
        }}
        renderItem={({ index }) => (
          <View
            style={{
              width: itemWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CoffeeCard />
          </View>
        )}
      />
  );
}
