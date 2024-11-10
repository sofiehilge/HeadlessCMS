// src/pages/Groups.js
import React from "react";
import Header from "../templates/Header";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import Footer from "../templates/Footer";


function Individual() {
  return (
    <div>
      <Header />
      <Hero title="Individuel" />
      {/* Pass the category or tag ID for filtering */}
      <Posts category="4" />
      <Footer/>
    </div>
  );
}

export default Individual;
