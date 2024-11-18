import React from 'react';
import backgroundImage from '../assets/watercolor-alcohol-ink-background/5898436.jpg';


const Background = ({ children }) => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
    >
     
      {children}
    </div>
  );
};

export default Background;
