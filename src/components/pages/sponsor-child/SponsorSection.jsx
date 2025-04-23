import React from "react";
import Header from "../home/header";

import GiftAbout from "../about/GiftAbout";
import ChildGridWrapper from "./ChildGridWrapper";
import Footer from "../home/footer";
import Navigation from "../home/Navigation";

const SponsorSection = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="md:mt-7">
        <ChildGridWrapper />
      </div>
      <GiftAbout />
      <Footer />
    </div>
  );
};

export default SponsorSection;
