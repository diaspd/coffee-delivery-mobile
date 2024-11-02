import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_600,
    width: 100,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginTop: 8,
  },
  text: {
    color: THEME.COLORS.GREY_100,
    fontSize: THEME.FONT_SIZE.TEXT_MD,
    fontFamily: THEME.FONTS.REGULAR
  }
});