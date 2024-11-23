import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F8',
    padding: 16,
    paddingHorizontal: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    backgroundColor: '#A3A3A3',
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
    backgroundColor: '#8257E5',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: '#525252',
  },
  bold: {
    fontWeight: 'bold',
  },
  viewButton: {
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  viewButtonText: {
    color: '#8257E5',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
