import React from "react";

const Hero = ({ title }) => {
  return (
    <div className="flex justify-center py-4 animate-fadeIn ">
      <h1 className="h1 text-primaryColor" color="#472237">
        {title}
      </h1>
    </div>
  );
};

export default Hero;
