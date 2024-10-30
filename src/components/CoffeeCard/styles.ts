import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  
    margin: 5,
    marginHorizontal: 0,
    height: 320,
    width: 256,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 36,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: THEME.COLORS.GREY_600,
  },
  containerShop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  tags: {
    flexWrap: 'wrap',
    display: 'flex',
    gap: 4,
    padding: 2,
    borderRadius: 30,
  }
});