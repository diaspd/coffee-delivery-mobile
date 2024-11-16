import { createContext, useState, ReactNode, useEffect } from 'react';

import {
  StorageCartProps,
  storageProductSave,
  storageProductRemove,
  storageProductGetAll,
  storageProductRemoveAll
} from '../storage/cartStorage';

export type CartContextDataProps = {
  addProductCart: (newProduct: StorageCartProps) => Promise<void>;
  removeProductCart: (productId: string) => Promise<void>;
  handleStorageProductRemoveAll: () => void;
  increment: () => void;
  decrement: () => void;
  cart: StorageCartProps[];
  count: number;
}

type CartContextProviderProps = {
  children: ReactNode;
}

export const CartContext = createContext<CartContextDataProps>({} as CartContextDataProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<StorageCartProps[]>([]);
  const [count, setCount] = useState(1);
  
  function increment() {
    setCount(prevCount => prevCount + 1);
  };

  function decrement() {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };

  async function addProductCart(newProduct: StorageCartProps) {
    try {
      const storageResponse = await storageProductSave(newProduct);
      setCart(storageResponse);
    } catch (error) {
      throw error;
    }
  }

  async function removeProductCart(productId: string) {
    try {
      const response = await storageProductRemove(productId);
      setCart(response);
    } catch (error) {
      throw error;
    }
  }

  async function handleStorageProductRemoveAll() {
    try {
      await storageProductRemoveAll(); 
      setCart([]); 
      console.log('Cart cleared!');
    } catch (error) {
      console.error('Failed to clear the cart:', error);
    }
  }

  useEffect(() => {
    storageProductGetAll()
      .then(products => setCart(products))
      .catch(error => console.log(error));
  }, []);

  return (
    <CartContext.Provider value={{
      cart,
      count,
      addProductCart,
      removeProductCart,
      increment,
      decrement,
      handleStorageProductRemoveAll
    }}>
      {children}
    </CartContext.Provider>
  )
}