import React from "react";
import Header from "../templates/Header";
import portrait from "../assets/imagecompressor/IMG_0298-min.JPG";
import image from "../assets/imagecompressor/IMG_8257-min.JPG";
import instaImage from "../assets/imagecompressor/IMG_8264-min.JPG";

import Hero from "../components/Hero";
import Footer from "../templates/Footer";

const Welcome = () => {
  return (
    <>
      <Header />
      <Hero title="Mie Dandanell" />
      <img src={portrait} alt="portrait" />
      <article className="flex text-center">
        <p className="h3 text-secondaryColor mx-6 text-pretty mt-6">
          Jeg støtter kvinder, der har fødselstraumer med at få healet, forløst
          og bearbejdet deres oplevelser.
        </p>
      </article>
      <section>
        <div className="py-4 text-center">
          <h2 className="h2  text-primaryColor">PodCast</h2>
        </div>
        <img src={image} alt="carousell" />
      </section>
      <section>
        <div className="py-4 text-center">
          <h2 className="h2  text-primaryColor">Instagram</h2>
        </div>
        <img src={instaImage} alt="instaImage" />
      </section>

      <Footer />
    </>
  );
};

export default Welcome;
