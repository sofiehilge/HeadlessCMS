import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_vfcihdga.json" // URL to your animation
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default Loading;
