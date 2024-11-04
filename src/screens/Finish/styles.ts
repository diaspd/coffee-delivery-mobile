import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_900,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 48
  },
  button: {
    backgroundColor: THEME.COLORS.YELLOW_DARK,
    
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