import React from "react";

import Associates from "./associates";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./Navigation";
import Banner from "./Banner";
import Services from "./Services";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Section />
      <Services />
      <Associates />
      <Footer />
    </div>
  );
};

export default Home;
