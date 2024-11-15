import { Outlet } from 'react-router-dom';
import { CookieProvider } from './context/CookieProvider';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import CookieConsentPopup from './components/CookieConsent';
import './css/TextAnimation.css';

function App() {
  return (
    <>
      <CookieProvider>
        <CartProvider>
          <ScrollToTop />
          <CookieConsentPopup />
          <Outlet />
        </CartProvider>
      </CookieProvider>
    </>
  );
}

export default App;
