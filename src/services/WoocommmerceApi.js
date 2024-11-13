import axios from 'axios';

const apiUrl = '/wp-json/wc/v3'; // !!!! when deploying to production, needs full url like freeingthebeing.com/wp-json/wc/w3

const woocommerceApi = axios.create({
  
  baseURL: apiUrl,
  auth: {
    
    username: process.env.REACT_APP_CONSUMER_KEY,
    password: process.env.REACT_APP_CONSUMER_SECRET,
  },
});

export const fetchProducts = async () => {
  try {
    const response = await woocommerceApi.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await woocommerceApi.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    return null;
  }
};

export default woocommerceApi;
