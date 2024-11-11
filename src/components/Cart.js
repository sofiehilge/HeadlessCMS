import React from 'react';
import { createOrder } from '../services/WoocommmerceApi';

const Cart = () => {
  const handleCheckout = async () => {
    const orderData = {
      payment_method: 'nexi_checkout',
      payment_method_title: 'Nexi Checkout',
      set_paid: false,
      billing: {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
      },
      line_items: productsInCart.map((product) => ({
        product_id: product.id,
        quantity: 1,
      })),
    };
    const order = await createOrder(orderData);
    if (order) {
      // Redirect to the Nexi checkout page
      window.location.href = order.payment_url;
    } else {
      alert('Error creating order');
    }
  };
  return (
    <div>
      <h2>Your Cart</h2> {/* Render products in cart */}{' '}
      {productsInCart.map((product) => (
        <div key={product.id}>
          {' '}
          <h3>{product.name}</h3> <p>{product.price}</p>{' '}
        </div>
      ))}{' '}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
