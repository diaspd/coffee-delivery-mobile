import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GREY_800
  },
  text: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.FONT_SIZE.TITLE_XL,
  }
});