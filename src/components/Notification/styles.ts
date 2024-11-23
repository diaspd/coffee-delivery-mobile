import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.WHITE,
    padding: 16,
    paddingHorizontal: 32,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    backgroundColor: THEME.COLORS.GREY_500,
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  quantityBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: THEME.COLORS.PURPLE,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.TEXT_XS,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 12
  },
  message: {
    fontSize: THEME.FONT_SIZE.TEXT_SM,
    color: THEME.COLORS.GREY_400,
  },
  bold: {
    fontFamily: THEME.FONTS.BOLD_DEFAULT,
  },
  viewButton: {
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  viewButtonText: {
    color: THEME.COLORS.PURPLE,
    fontSize: THEME.FONT_SIZE.TEXT_XS,
    fontFamily: THEME.FONTS.BOLD_DEFAULT,
  },
});
