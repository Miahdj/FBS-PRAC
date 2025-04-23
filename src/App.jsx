import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Faq from "./components/pages/faq/Faq";
import Strategy from "./components/pages/strategy/Strategy";
import SponsorSection from "./components/pages/sponsor-child/SponsorSection";
import Contact from "./components/pages/contact/Contact";
import Donate from "./components/pages/donate/Donate";
import PageNotFound from "./partials/PageNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/sponsor-child" element={<SponsorSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
};

export default App;
