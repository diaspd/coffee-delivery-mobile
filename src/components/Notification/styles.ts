import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    padding: 12, 
    paddingTop: 12, 
    
    backgroundColor: THEME.COLORS.GREY_900, 
    position: "absolute", 
    bottom: 0
  },
  message: {
    width: 200,
  },
});