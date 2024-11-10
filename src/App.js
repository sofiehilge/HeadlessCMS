import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import "./css/TextAnimation.css"

function App() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default App;
