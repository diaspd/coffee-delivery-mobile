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
    paddingHorizontal: 12,
    paddingVertical: 2,
    width: 72 ,
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
  coffeeList: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_900,
    width: '100%',
    paddingBottom: 24,
  },
  coffeeListWrapper: {
    marginHorizontal: 34,
  },
  coffeeListTitle: {
    color: THEME.COLORS.GREY_300,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_SM,
  },
  tags: {
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
    marginTop: 18,
    borderColor: THEME.COLORS.PURPLE,
    borderWidth: 2,
  },
  tagText: {
    color: THEME.COLORS.PURPLE_DARK,
    fontFamily: THEME.FONTS.BOLD_DEFAULT,
    fontSize: THEME.FONT_SIZE.TAG,
    textTransform: 'uppercase'
  },
  listTitle: {
    color: THEME.COLORS.GREY_400,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_XS,
    marginHorizontal: 34,
    marginTop: 20
  },
});