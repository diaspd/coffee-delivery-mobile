import { Pressable, View, Text } from 'react-native';
import { ArrowRight, ShoppingCart } from 'phosphor-react-native';
import { styles } from './styles'; // Certifique-se de definir os estilos conforme necessário
import { THEME } from '../../styles/theme';

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
      <View style={styles.iconContainer}>
        <ShoppingCart weight="fill" color={THEME.COLORS.GREY_800} size={20} />
        <View style={styles.quantityBadge}>
          <Text style={styles.quantityText}>{data?.quantity}</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.message} numberOfLines={2}>
          {data?.quantity} café <Text style={styles.bold}>{data?.name}</Text>{' '}
          {data?.ml && <Text style={styles.bold}>de {data?.ml}</Text>} adicionado ao carrinho
        </Text>
      </View>

      <Pressable style={styles.viewButton}>
        <Text style={styles.viewButtonText}>VER</Text>
        <ArrowRight color={THEME.COLORS.PURPLE} size={20} />
      </Pressable>
    </Pressable>
  );
}
