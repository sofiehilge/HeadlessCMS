import React, { useState } from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';

const Checkout = () => {
  const [productsInCart, setProductsInCart] = useState([]);

  const addToCart = (product) => {
    setProductsInCart([...productsInCart, product]);
  };

  return (
    <div>
      <h1>My Shop</h1> <Products addToCart={addToCart} />{' '}
      <Cart productsInCart={productsInCart} />
    </div>
  );
};

export default Checkout;
