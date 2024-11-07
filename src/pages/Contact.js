import React from 'react';
import Header from '../templates/Header';
import Background from '../templates/Background';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <>
      <Background>
        <Header/>
        <Hero title="Kontakt"/>
      {/*   <ContactForm/> */}
      </Background>
    </>
  );
};

export default Contact;
