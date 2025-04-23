import React from "react";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";
import Header from "../home/header";

import Footer from "../home/footer";
import Navigation from "../home/Navigation";

const Contact = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="mt-20">
        <Contact1 />
      </div>
      <Contact2 />
      <Footer />
    </div>
  );
};

export default Contact;
