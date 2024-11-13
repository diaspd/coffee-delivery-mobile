import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    marginTop: 64,
    marginHorizontal: 32,
  },
  local: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  text: { 
    color: THEME.COLORS.GREY_900,
    fontSize: THEME.FONT_SIZE.TEXT_SM
  },
  cartText: {
    color: THEME.COLORS.GREY_200,
    fontSize: THEME.FONT_SIZE.TITLE_SM,
    fontFamily: THEME.FONTS.BOLD,
    marginRight: "auto", 
    marginLeft: 120
  }
});