import { useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Burger icon button */}
      <div 
        className={`flex flex-col w-8 h-8 justify-center items-center cursor-pointer gap-1 z-50 ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span className={`block w-8 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-8 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-8 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
      </div>

      {/* Overlay menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Link to="/" onClick={closeMenu} className="text-white text-2xl">
          Hjem
        </Link>
        <Link to="/groups" onClick={closeMenu} className="text-white text-2xl">
          Grupper
        </Link>
        <Link to="/contact" onClick={closeMenu} className="text-white text-2xl">
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;

