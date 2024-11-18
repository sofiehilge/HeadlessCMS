import React from 'react';
import Error from '../components/Error';
import Header from '../templates/Header';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <Hero title="Fejl" />
        <h3 className=" text-secondaryColor font-bold mx-6 text-pretty mt-6">
          Gå venligst tilbage til forsiden
        </h3>
        <Link
          to="/welcome"
          className=" my-2 bg-primaryColor text-backgroundColor py-2 px-4 rounded-md hover:bg-secondaryColor transition-colors"
        >
          Forside
        </Link>
        <Error />
      </div>
    </>
  );
};

export default Errorpage;
