import React from 'react';
import Header from '../templates/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';

import Footer from '../templates/Footer';

function Store() {
  return (
    <div>
      <Header />
      <Hero title="Forløb" />
      <Products />
      <Footer />
    </div>
  );
}

export default Store;
