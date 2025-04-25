import React, { useState } from "react";
import Header from "../home/header";
import Navigation from "../home/Navigation";
import GiftAbout from "../about/GiftAbout";
import Footer from "../home/footer";
import DonateModal from "../../../partials/modal/ModalDonor";

const GeneralDonation = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />

      <div className="flex-grow">
        <div className="flex justify-center p-6 bg-white mt-10">
          <div className="flex max-w-4xl">
            <img
              src="https://facethechildren.org/images/General-giving.jpg"
              alt="Children"
              className="w-64 h-auto"
            />
            <div className="ml-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-600 mt-5">
                  General Donation
                </h2>
                <div className="mt-3">
                  <hr />
                </div>
              </div>
              <p className="mt-3 text-gray-600 text-sm">
                Give unrestricted gifts that allow Frontline to direct these
                funds where they are most needed. Your giving allows us to
                continue to actively partner with needs of people in the
                communities we serve.
              </p>
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
      <div className="bg-white  py-14"></div>

      <GiftAbout />
      <Footer />
      {showModal && <DonateModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default GeneralDonation;
