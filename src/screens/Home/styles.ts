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
    height: 420,
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_MD,
    color: THEME.COLORS.WHITE,
    marginHorizontal: 34,
    marginTop: 56
  },
  input: {
    backgroundColor: THEME.COLORS.GREY_200,
    color: THEME.COLORS.WHITE,
   
    alignItems: 'center',
    flexDirection: 'row',
   
    gap: 8,
    marginTop: 15,
    marginHorizontal: 34,
    padding: 12,
    borderRadius: 4,
  },
  text: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_XL,
  },
  coffeeList: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_900,
    width: '100%',
  },
  carousel: {
    marginTop: -72, 
    flex: 1,
    marginBottom: 120
  }
});