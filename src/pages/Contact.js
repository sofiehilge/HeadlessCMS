import React from 'react';
import Header from '../templates/Header';
import Background from '../templates/Background';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Footer from '../templates/Footer';
const Contact = () => {
  return (
    <>
      <Background>
        <Header />
        <Hero title="Kontakt" />
        <ContactForm />
        <Footer />
      </Background>
    </>
  );
};

export default Contact;
