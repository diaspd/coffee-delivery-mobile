import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    height: 132,
    
    paddingHorizontal: 12,
    gap: 20,

    backgroundColor: THEME.COLORS.GREY_900,
  },
  containerShop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: 256
  },
  title: {
    color: THEME.COLORS.GREY_100,
    fontSize: THEME.FONT_SIZE.TEXT_MD,
    fontFamily: THEME.FONTS.REGULAR, 
    marginTop: 16,
    marginBottom: 4,
  },
  millilitres: {
    color: THEME.COLORS.GREY_400,
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    fontFamily: THEME.FONTS.REGULAR, 
    maxWidth: 220
  },
  dollar: {
    color: THEME.COLORS.YELLOW,
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    fontFamily: THEME.FONTS.REGULAR, 
  },
  price: {
    color: THEME.COLORS.GREY_100,
    fontSize: THEME.FONT_SIZE.TITLE_SM,
    fontFamily: THEME.FONTS.BOLD, 
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8
  },
  removeButtom: {
    backgroundColor: THEME.COLORS.GREY_700,
    padding: 8,
    borderRadius: 6
  }
});