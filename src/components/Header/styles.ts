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
  badge: {
    position: 'absolute',
    top: -16, 
    right: -15, 
    backgroundColor: THEME.COLORS.PURPLE, 
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  badgeText: {
    color: THEME.COLORS.WHITE,
    fontSize: 12,
    fontWeight: 'bold',
  },  
  cartText: {
    color: THEME.COLORS.GREY_200,
    fontSize: THEME.FONT_SIZE.TITLE_SM,
    fontFamily: THEME.FONTS.BOLD,
    marginRight: "auto", 
    marginLeft: 120
  }
});