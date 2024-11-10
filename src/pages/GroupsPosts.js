import React from "react";
import Header from "../templates/Header";
import Hero from "../components/Hero";
import Posts from "../components/Posts";

function Groups() {
  return (
    <div>
      <Header />
      <Hero title="Grupper" />
      {/* Pass the category or tag ID for filtering */}
      <Posts category="3" />
    </div>
  );
}

export default Groups;
