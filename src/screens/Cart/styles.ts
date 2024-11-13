import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_900,
  },
  coffeeCartCardwrapper: {
    borderColor: THEME.COLORS.GREY_500,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  emptyMessage: {
    color: THEME.COLORS.GREY_300,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.FONT_SIZE.TEXT_MD,
    textAlign: 'center',
    marginHorizontal: 36,
    marginTop: 54,
  },
  footer: {
    width: "100%",
    height: 160,
    
    paddingTop: 28,
    paddingHorizontal: 32,
    paddingBottom: 40,


    backgroundColor: THEME.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"
  },
  totalValue: {
    color: THEME.COLORS.GREY_200,
    fontSize: THEME.FONT_SIZE.TEXT_MD,
    fontFamily: THEME.FONTS.REGULAR, 
  },
  price: {
    color: THEME.COLORS.GREY_200,
    fontSize: THEME.FONT_SIZE.TITLE_MD,
    fontFamily: THEME.FONTS.BOLD, 
  },
  button: {
    backgroundColor: THEME.COLORS.YELLOW_DARK,
    
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    height: 46,

    borderRadius: 6 
  },
  buttonDisabled: {
    backgroundColor: THEME.COLORS.YELLOW_DARK,
    opacity: 0.6,

    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    height: 46,

    borderRadius: 6 
  },
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.BUTTON,
    fontFamily: THEME.FONTS.BOLD_DEFAULT, 
    textTransform: "uppercase",
    textAlign: 'center'
  }
});