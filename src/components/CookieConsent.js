import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentPopup = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter"
      cookieName="mySiteCookieContent"
      style={{ background: '#52603a', color: '#e69d94' }} // Light background and dark text
      buttonStyle={{
        backgroundColor: '#FFF8EB',
        color: '#472237',
        fontSize: '13px',
        padding: '8px 12px',
        borderRadius: '4px',
      }}
      expires={150}
      containerClasses="flex items-center justify-between p-4 shadow-md"
      contentClasses="flex flex-col md:flex-row"
      buttonWrapperClasses="mt-4 md:mt-0"
      buttonClasses="bg-primaryColor text-backgroundColor rounded px-4 py-2 hover:bg-opacity-80 transition-colors duration-300"
      onAccept={() => {
        // Enable Google Analytics
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'accept_cookies' });
        //add logic if needed for when the user accepts
      }}
    >
      <span className="text-sm md:text-base">
        Vi bruger cookies til at forbedre din oplevelse. Ved at fortsætte med at
        besøge denne side accepterer du vores brug af cookies.
        <a href="/privacy-policy" className="text-primaryColor underline ml-2">
          Lær mere
        </a>
      </span>
    </CookieConsent>
  );
};

export default CookieConsentPopup;
