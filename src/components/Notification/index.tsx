import { Pressable, View, Text } from 'react-native';
import type { ProductCardProps } from '../CoffeeListCard';
import { styles } from './styles';

type NotificationProps = {
  data: {
    name: string;
    ml: string | null;
    quantity: number;
  };
};

export function Notification({ data }: NotificationProps) {
  return (
    <Pressable style={styles.container}>
      <View>
        <Text style={styles.message} numberOfLines={2}>
          {data?.quantity} café {data?.name} de {data?.ml} adicionado ao carrinho
        </Text>
      </View>
    </Pressable>
  );
}