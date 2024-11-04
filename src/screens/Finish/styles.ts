import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_900,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 48
  },
  title: {
    color: THEME.COLORS.YELLOW_DARK,
    fontSize: THEME.FONT_SIZE.TITLE_LG,
    fontFamily: THEME.FONTS.BOLD, 
    marginTop: 46,
    marginBottom: 6
  },
  description: {
    color: THEME.COLORS.GREY_200,
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    fontFamily: THEME.FONTS.REGULAR, 
    textAlign: 'center',
    width: 230
  },
  button: {
    backgroundColor: THEME.COLORS.PURPLE_DARK,
    
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    height: 46,
    marginTop: 64,

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