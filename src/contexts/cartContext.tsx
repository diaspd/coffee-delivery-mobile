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
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  cart: StorageCartProps[];
}

type CartContextProviderProps = {
  children: ReactNode;
}

export const CartContext = createContext<CartContextDataProps>({} as CartContextDataProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<StorageCartProps[]>([]);
  
  function increment(productId: string) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  
  function decrement(productId: string) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

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