import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from '../assets/lottie/Animation - gold.json';

const Loading = () => {
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

export default Loading;
