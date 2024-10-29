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
    height: 380,
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
    backgroundColor: THEME.COLORS.GREY_700,
    width: '100%',
  }
});