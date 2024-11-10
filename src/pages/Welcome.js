import React from 'react';
import Header from '../templates/Header';
import portrait from '../assets/imagecompressor/IMG_0298-min.JPG';
import image from '../assets/imagecompressor/IMG_8257-min.JPG';
import instaImage from '../assets/imagecompressor/IMG_8264-min.JPG';

import Hero from '../components/Hero';
import Footer from '../templates/Footer';

const Welcome = () => {
  return (
    <>
      <Header />
      <Hero title="Mie Dandanell" />

      <article className="flex flex-col items-center text-center space-y-4 animate-fadeIn mx-6">
        <img
          src={portrait}
          alt="portrait"
          className="rounded-lg mb-6 w-full max-w-sm mx-auto"
        />
        <p className="text-lg text-secondaryColor mx-6 text-pretty mt-6">
          Jeg støtter kvinder, der har fødselstraumer med at få healet, forløst
          og bearbejdet deres oplevelser.
        </p>
      </article>
      <section className="animate-fadeIn mx-6">
        <div className="py-4 text-center">
          <h2 className="text-2xl text-primaryColor">PodCast</h2>
        </div>
        <img
          src={image}
          alt="carousell"
          className="rounded-lg mb-6 w-full max-w-md mx-auto"
        />
      </section>
      <section className="animate-fadeIn mx-6">
        <div className="py-4 text-center">
          <h2 className="text-2xl text-primaryColor">Instagram</h2>
        </div>
        <img
          src={instaImage}
          alt="instaImage"
          className="rounded-lg mb-6 w-full max-w-md mx-auto"
        />
      </section>

      <Footer />
    </>
  );
};

export default Welcome;
