import React from "react";
import Header from "../home/header";

import FaqQuestions from "./FaqQuestions";
import FaqQuestions2 from "./FaqQuestions2";
import GiftAbout from "../about/GiftAbout";
import Footer from "../home/footer";
import Navigation from "../home/Navigation";

const Faq = () => {
  return (
    <div>
      <Header />
      <Navigation />

      <div className="mt-20">
        <FaqQuestions />
      </div>

      <FaqQuestions2 />

      <GiftAbout />
      <Footer />
    </div>
  );
};

export default Faq;
