import React, { useState } from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Hero from '../components/Hero';
import Header from '../templates/Header';

import Footer from '../templates/Footer';

const Checkout = () => {
  const [productsInCart, setProductsInCart] = useState([]);

  const addToCart = (product) => {
    setProductsInCart([...productsInCart, product]);
  };

  return (
    <div>
      <Header />
      <Hero title="Kurv" />
      <h1>My Shop</h1> <Products addToCart={addToCart} />{' '}
      <Cart productsInCart={productsInCart} />
      <Footer />
    </div>
  );
};

export default Checkout;
