import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from '../assets/lottie/Animation - 1731926952908.json';

const Error = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default Error;
