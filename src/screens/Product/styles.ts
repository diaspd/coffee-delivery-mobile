import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  intro: {
    backgroundColor: THEME.COLORS.GREY_100,
    height: 650,
  },
  tagWrapper: {
    flexWrap: 'wrap',
    display: 'flex',
    alignSelf: 'flex-start',

    paddingHorizontal: 12,
    paddingVertical: 2,

    height: 25,
    justifyContent: 'center',
    marginHorizontal: 32,

    borderRadius: 9999,
    marginTop: 50,
    backgroundColor: THEME.COLORS.GREY_200,
  },
  tag: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.TAG,
    fontFamily: THEME.FONTS.BOLD_DEFAULT,  
    textTransform: 'uppercase'
  },
  infoWrapper: {
    marginHorizontal: 34,
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_LG,
    color: THEME.COLORS.WHITE,
  },
  dolar: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    color: THEME.COLORS.YELLOW,
  },
  price: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_XL,
    color: THEME.COLORS.YELLOW
  },
  description: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.FONT_SIZE.TEXT_MD,
    color: THEME.COLORS.GREY_500,
    marginHorizontal: 34,
    marginTop: 20
  },
  footer: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_900,
    width: '100%',
    paddingBottom: 24,
    paddingHorizontal: 34,
  },
  footerTitle: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    color: THEME.COLORS.GREY_400
  },
  optionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  option: {
    backgroundColor: THEME.COLORS.GREY_700,
    padding: 8,
    borderRadius: 6,
    width: 108,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  optionText: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    color: THEME.COLORS.GREY_300
  },
  counterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.GREY_700,
    width: '100%',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginTop: 20,
    height: 72
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    justifyContent: 'space-between',
    gap: 12
  },
  text: {
    color: THEME.COLORS.GREY_100,
    fontSize: THEME.FONT_SIZE.TEXT_MD,
    fontFamily: THEME.FONTS.REGULAR
  },
  button: {
    backgroundColor: THEME.COLORS.PURPLE_DARK,
    
    paddingVertical: 12,
    paddingHorizontal: 64,
    height: 54,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 6
  },
  buttonDisabled: {
    backgroundColor: THEME.COLORS.PURPLE_DARK,
    
    paddingVertical: 12,
    paddingHorizontal: 64,
    height: 54,
    opacity: 0.6,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 6
  },
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.BUTTON,
    fontFamily: THEME.FONTS.BOLD_DEFAULT, 
    textTransform: "uppercase"
  }
});