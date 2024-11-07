import React, { useState, useEffect } from 'react';
/* import Burgermenu from '../components/Burgermenu'; */
import logo from '../assets/Logo/2cropped.png';
import { CiShoppingCart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import ReactMenu from '../components/ReactMenu';

const Header = () => {
  //making header sticky and change background
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex justify-between items-center ${
        isSticky ? 'bg-lightColor' : 'bg-transparent'
      } sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className='w-1/6 flex justify-start pl-6'>
      <ReactMenu/>
   {/*      <Burgermenu /> */}
      </div>
      <Link to={'/'} className='flex justify-center'>
        <img src={logo} alt='logo' className='mt-0 pt-0 ml-4' />
      </Link>
      <div className='max-w-[80%] flex justify-end pr-6'>
        <CiShoppingCart className='text-5xl text-primaryColor' />
      </div>
    </div>
  );
};

export default Header;
