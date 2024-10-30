import * as React from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { CoffeeCard } from '../CoffeeCard';

export function CarouselComponent() {
    const width = Dimensions.get('window').width;

    return (
        <View style={{ flex: 1}}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
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
