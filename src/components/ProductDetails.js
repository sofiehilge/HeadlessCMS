import React from 'react'
import { useCart } from '../context/CartContext'

const ProductDetails = ({product}) => {
    const {addToCart} = useCart();
    const handleAddToCart = () => {
        addToCart(product); //Adds the product to the global cart context
    };


  return (
    <div>
    <h2>{product.name}</h2>
    <button onClick={handleAddToCart}>Add to Cart</button>  
    </div>
  )
}

export default ProductDetails
