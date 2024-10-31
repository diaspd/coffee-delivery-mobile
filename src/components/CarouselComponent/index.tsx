import { Dimensions, View, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { CoffeeCard } from '../CoffeeCard';

export function CarouselComponent() {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth * 0.6;

  return (
    <View>
      <Carousel
        loop
        autoPlay
        snapEnabled
        width={itemWidth}
        style={{ overflow: 'visible'}}
        height={320}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1500}
        autoPlayInterval={8000}
        mode="parallax" 
        modeConfig={{
          parallaxScrollingScale: 1,  
          parallaxScrollingOffset: 0,  
          parallaxAdjacentItemScale: 0.8 
        }}
        onSnapToItem={(index) => console.log('current index:', index)}
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
    </View>
  );
}
