import React from "react";
import Header from "../home/header";
import Navigation from "../home/Navigation";
import GiftAbout from "../about/GiftAbout";
import Footer from "../home/footer";
import { Link } from "react-router-dom";

const ChildSponsorshipInfo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <div className="flex-grow">
        <div className="flex items-start justify-center p-6 bg-white mt-10 mr-12">
          <img
            src="https://facethechildren.org/images/sponsor-child-opt.jpg"
            alt="Children"
            className=""
          />
          <div className="ml-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-600 mt-5">
                Children Sponsorship
              </h2>
              <div className="mt-3">
                <hr />
              </div>
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              Making a difference for abandoned, abused, or dangerously
              neglected children.
            </p>
            <Link
              to="/sponsor-child"
              className="mt-9 inline-block px-4 py-2 text-white text-sm bg-primary rounded-md hover:bg-blue-600 transition"
            >
              Sponsor Now
            </Link>
          </div>
        </div>
      </div>
      <GiftAbout />
      <Footer />
    </div>
  );
};

export default ChildSponsorshipInfo;
