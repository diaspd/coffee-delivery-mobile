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
    paddingBottom: 24,
  },
  carousel: {
    marginTop: -72, 
    flex: 1,
  },
  coffeeListWrapper: {
    marginHorizontal: 34,
  },
  coffeeListTitle: {
    color: THEME.COLORS.GREY_300,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_SM,
  },
  tagWrapper: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 16
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
    textTransform: 'uppercase',
    fontFamily: THEME.FONTS.BOLD_DEFAULT,
    fontSize: THEME.FONT_SIZE.TAG
  }
});