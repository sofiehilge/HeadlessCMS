import React, { useState, useEffect } from 'react';
import Header from '../templates/Header';
import portrait from '../assets/imagecompressor/IMG_0298-min.JPG';
import image from '../assets/imagecompressor/IMG_8257-min.JPG';
import instaImage from '../assets/imagecompressor/IMG_8264-min.JPG';
import { useCookies } from 'react-cookie';
import Hero from '../components/Hero';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../templates/Footer';

const Welcome = () => {
  const [cookies, setCookie] = useCookies(['myCookie']);
  const [cookieValue, setCookieValue] = useState('');
  const [isNewsLetterOpen, setIsNewsletterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !cookies.newletterShown) {
        setIsNewsletterOpen(true);
        setCookie('newsletterShown', 'true', { path: '/' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cookies, setCookie]);

  const handleSetCookie = () => {
    setCookie('myCookie', 'cookieValue', { path: '/' });
  };
  const handleGetCookie = () => {
    setCookieValue(cookies.myCookie);
  };

  return (
    <>
      <Header />
      <Hero title="Mie Dandanell" />

      <NewsletterSignup
        isOpen={isNewsLetterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
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
      <section>
        <button onClick={handleSetCookie}>Set Cookie</button>{' '}
        <button onClick={handleGetCookie}>Get Cookie</button>{' '}
        <p>Cookie Value: {cookieValue}</p>
      </section>
      <Footer />
    </>
  );
};

export default Welcome;
