import React, {useEffect, useState} from "react";
import { getProducts } from "../services/WoocommmerceApi";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        };
        fetchProducts();
    }, []);
  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} {product.currency}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
