import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../home/header";
import Navigation from "../home/Navigation";
import GiftAbout from "../about/GiftAbout";
import Footer from "../home/footer";
import ModalSponsor from "../../../partials/modal/ModalSponsor";

const ChildInfoOutput = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const child = location.state?.child;
    
  if (!child) {
    
    navigate("/");
    return null;
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <div className="flex-grow pb-[128px]">
        <div className="flex flex-col sm:flex-row justify-center p-6 bg-white mt-10 ">
          <div className="flex flex-col sm:flex-row max-w-4xl">
            
            <div className="flex flex-col items-center sm:items-start">
              <img src={child.img} alt={child.name} className="w-64 h-auto" />
              <div className="relative w-64 h-7 bg-orange-300 mt-0">
                <div
                  className="absolute top-0 left-0 h-full bg-orange-500"
                  style={{ width: `${child.sponsoredPercent}%` }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-semibold text-sm z-10">
                  {child.sponsored} - Sponsored
                </div>
              </div>
            </div>
          
            <div className="mt-6 sm:mt-0 sm:ml-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-600 mt-5">
                  {child.name}
                </h2>
                <div className="mt-3">
                  <hr />
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-3">Age: {child.age}</p>
              <p className="text-gray-600 text-sm mt-1">
                Birthday: {child.birthday}
              </p>
              <h1 className="text-lg font-semibold text-gray-800 mt-5">
                My Story
              </h1>
              <p className="mt-3 text-gray-600 text-sm">{child.story}</p>
              <button
                className="mt-9 inline-block px-4 py-2 text-white text-sm bg-primary rounded-md hover:bg-blue-600 transition"
                onClick={() => setShowModal(true)}
              >
                Sponsor Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <GiftAbout />
      <Footer />
      {showModal && (
        <ModalSponsor child={child} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ChildInfoOutput;
