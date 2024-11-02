import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_900,
  },
  coffeeCartCardwrapper: {
    borderColor: THEME.COLORS.GREY_500,
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
});