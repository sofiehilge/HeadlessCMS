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
        className={`absolute top-4 flex flex-col w-8 h-8 justify-center items-center cursor-pointer gap-1 ${
          isOpen ? 'z-50' : 'z-10'
        }`}
        onClick={toggleMenu}
      >
        <span
          className={`block w-8 h-0.5 bg-primaryColor transition-transform duration-300 ${
            isOpen ? 'transform rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-primaryColor transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-primaryColor transition-transform duration-300 ${
            isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </div>

      {/* Overlay menu */}
      <div
        className={`fixed inset-0 bg-backgroundColor bg-opacity-80 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl text-primaryColor py-2 px-4  hover:text-secondaryColor transition-colors animate-fadeIn"
        >
          Hjem
        </Link>
        <Link
          to="/groups"
          onClick={closeMenu}
          className="text-2xl text-primaryColor py-2 px-4  hover:text-secondaryColor transition-colors animate-fadeIn"
        >
          Gruppe
        </Link>
        <Link
          to="/individual"
          onClick={closeMenu}
          className="text-2xl text-primaryColor py-2 px-4  hover:text-secondaryColor transition-colors animate-fadeIn"
        >
          Individuel
        </Link>
        <Link
          to="/store"
          onClick={closeMenu}
          className="text-2xl text-primaryColor py-2 px-4  hover:text-secondaryColor transition-colors animate-fadeIn"
        >
          Forløb
        </Link>
        <Link
          to="/contact"
          onClick={closeMenu}
          className="text-2xl text-primaryColor py-2 px-4  hover:text-secondaryColor transition-colors animate-fadeIn"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
