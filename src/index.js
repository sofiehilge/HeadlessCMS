import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import App from './App.js';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Welcome from './pages/Welcome.js';
/* import Groups from './pages/Groups.js'; */
import Groups from './pages/GroupsPosts.js';
import Individual from './pages/IndividualPosts.js';
import Contact from './pages/Contact.js';
import Store from './pages/Store.js';
import Checkout from './pages/Checkout.js';
import CookiesPolicy from './pages/CookiesPolicy.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import Errorpage from './pages/Errorpage.js';
/* import Loading from './pages/Loading.js'; */
import Background from './templates/Background.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Errorpage />}>
      <Route index element={<Welcome />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/individual" element={<Individual />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/store" element={<Store />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cookiespolicy" element={<CookiesPolicy />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/error" element={<Errorpage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background>
      <RouterProvider router={router} />
    </Background>
  </React.StrictMode>
);
