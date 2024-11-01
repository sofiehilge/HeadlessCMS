import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { CiFacebook } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex items-center justify-between mx-6 mt-4'>
      <div>
        <Link to='https://www.instagram.com/freeing.the.being/'>
          <CiInstagram className='text-secondaryColor text-2xl' />
        </Link>
      </div>
      <Link to="/contact">
        <h3 className='text-primaryColor'>Kontakt</h3>
      </Link>
      <div>
        <h3 className='text-secondaryColor'>Nyhedsbrev</h3>
      </div>
      <Link to='https://www.facebook.com/p/Mie-Dandanell-100071389505286/?locale=da_DK'>
        <CiFacebook className='text-secondaryColor text-2xl' />
      </Link>
    </div>
  );
};

export default Footer;
