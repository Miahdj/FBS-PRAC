import React from "react";
import GivingOptions from "./GivingOptions";
import GiftAbout from "../about/GiftAbout";
import Footer from "../home/footer";
import Header from "../home/header";
import Navigation from "../home/Navigation";

const Donate = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <GivingOptions />
      <GiftAbout />
      <Footer />
    </div>
  );
};

export default Donate;
