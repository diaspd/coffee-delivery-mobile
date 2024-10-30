import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  
    margin: 5,
    marginTop: -50,
    marginHorizontal: 0,
    height: 262,
    width: 208,
    paddingHorizontal: 16,

    borderTopRightRadius: 36,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 36,
    backgroundColor: THEME.COLORS.GREY_800,

    shadowColor: THEME.COLORS.GREY_100,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  containerShop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginTop: 10,
  },
  tags: {
    flexWrap: 'wrap',
    display: 'flex',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
    backgroundColor: THEME.COLORS.PURPLE_LIGHT
  },
  tagText: {
    color: THEME.COLORS.PURPLE_DARK,
    fontSize: THEME.FONT_SIZE.TAG,
    fontFamily: THEME.FONTS.BOLD_DEFAULT,  
    textTransform: 'uppercase'
  },
  title: {
    color: THEME.COLORS.GREY_200,
    fontSize: THEME.FONT_SIZE.TITLE_MD,
    fontFamily: THEME.FONTS.BOLD, 
  },
  description: {
    color: THEME.COLORS.GREY_400,
    fontSize: THEME.FONT_SIZE.TEXT_XS,
    fontFamily: THEME.FONTS.REGULAR, 
    textAlign: 'center'
  },
  dollar: {
    color: THEME.COLORS.YELLOW,
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    fontFamily: THEME.FONTS.REGULAR, 
  },
  price: {
    color: THEME.COLORS.YELLOW_DARK,
    fontSize: THEME.FONT_SIZE.TITLE_LG,
    fontFamily: THEME.FONTS.BOLD, 
  }
});