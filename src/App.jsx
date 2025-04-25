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

import CreateAccount from "./components/pages/access/CreateAccount";
import ForgotPassword from "./components/pages/access/ForgotPassword";
import ChildSponsorshipInfo from "./components/pages/sponsor-child/ChildSponsorshipInfo";
import FeedingProgram from "./components/pages/donate/FeedingProgram";
import GeneralDonation from "./components/pages/donate/GeneralDonation";
import ChildInfoOutput from "./components/pages/sponsor-child/ChildInfoOutput";
import Login from "./components/pages/access/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/sponsor-child" element={<SponsorSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/child-info-output/" element={<ChildInfoOutput />} />
        <Route path="/general-donation" element={<GeneralDonation />} />
        <Route path="/feeding-program" element={<FeedingProgram />} />
        <Route path="/child-info" element={<ChildSponsorshipInfo />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
  
export default App;
