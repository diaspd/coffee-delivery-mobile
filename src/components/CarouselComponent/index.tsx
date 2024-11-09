import { Dimensions, View, type TouchableOpacityProps } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import { useNavigation } from '@react-navigation/native';
import type { AppRoutesProps } from '../../routes/app.routes';

import { CoffeeCard } from '../CoffeeCard';
import type { ProductCardProps } from '../CoffeeListCard';


type Props = TouchableOpacityProps & {
  data: ProductCardProps[];
};

export function CarouselComponent({ data }: Props) {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth * 0.6;

  const navigationStack = useNavigation<AppRoutesProps>();

  return (
      <Carousel
        loop
        autoPlay
        snapEnabled
        width={itemWidth}
        style={{ overflow: 'visible'}}
        height={320}
        data={data} 
        scrollAnimationDuration={1500}
        autoPlayInterval={6000}
        mode="parallax" 
        modeConfig={{
          parallaxScrollingScale: 1,  
          parallaxScrollingOffset: 0,  
          parallaxAdjacentItemScale: 0.8 
        }}
        renderItem={({ item }) => (
          <View
            style={{
              width: itemWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CoffeeCard data={item} onPress={() => navigationStack.navigate('product', { productId: item.id })}/>
          </View>
        )}
      />
  );
}
