import { useContext } from 'react';

import { CartContext, CartContextDataProps } from '../contexts/cartContext';

export function useCart(): CartContextDataProps {
  const context = useContext(CartContext);

  return context;
}