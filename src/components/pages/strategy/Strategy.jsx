import React from "react";
import Header from "../home/header";

import Strategy1 from "./Strategy1";
import Strategy2 from "./Strategy2";
import GiftAbout from "../about/GiftAbout";
import Footer from "../home/footer";
import Navigation from "../home/Navigation";

const Strategy = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="mt-20">
        <Strategy1 />
      </div>
      <div className="mt-22">
        <Strategy2 />
      </div>
      <GiftAbout />
      <Footer />
    </div>
  );
};

export default Strategy;
