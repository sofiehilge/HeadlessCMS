import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);

  const addToCart = (product) => {
    setProductsInCart((prevProducts) => [...prevProducts, product]);
  };

  const clearCart = () => {
    setProductsInCart([]);
  };

  return (
    <CartContext.Provider value={{ productsInCart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

