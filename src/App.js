import { Outlet } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import './css/TextAnimation.css';

function App() {
  return (
    <>
 
        <CartProvider>
          <ScrollToTop />
          <Outlet />
        </CartProvider>
 
    </>
  );
}

export default App;
