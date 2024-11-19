import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 500,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smoke: {
    position: 'absolute',
    width: 100,
    height: 100,
    resizeMode: 'contain',
    zIndex: 50
  },
});