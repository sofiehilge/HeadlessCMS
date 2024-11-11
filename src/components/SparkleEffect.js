// src/SparkleEffect.js
import React, { useEffect } from 'react';
import '../css/SparklBackground.css';

function SparkleEffect() {
  useEffect(() => {
    // Function to create sparkles
    const createSparkles = (numSparkles) => {
      for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Random position within the viewport
        sparkle.style.top = `${Math.random() * 100}vh`;
        sparkle.style.left = `${Math.random() * 100}vw`;

        // Random animation delay for continuous effect
        sparkle.style.animationDelay = `${Math.random() * 2}s`;

        document.body.appendChild(sparkle);
      }
    };

    // Add 50 sparkles on mount
    createSparkles(50);

    // Cleanup function to remove sparkles on unmount
    return () => {
      document
        .querySelectorAll('.sparkle')
        .forEach((sparkle) => sparkle.remove());
    };
  }, []);

  return null; // This component does not render anything itself
}

export default SparkleEffect;
