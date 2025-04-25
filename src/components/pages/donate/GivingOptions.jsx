import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import DonateModal from "../../../partials/modal/ModalDonor";

import givingOptions from "./DonateData";
import { Link } from "react-router-dom";

const GivingOptions = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mt-20 ">
            {/* Card 1 */}
            <div className="bg-white shadow rounded overflow-hidden flex flex-col w-full sm:w-72 !h-[600px] sm:h-[700px]">
              <img
                src={givingOptions[0].image}
                alt={givingOptions[0].title}
                className="w-full h-[350px] object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">
                  {givingOptions[0].title}
                </h3>
                <p className="text-gray-600 flex-1 mt-2 text-xs leading-relaxed">
                  {givingOptions[0].description}
                </p>
                <div className="flex flex-col gap-2 mt-0">
                  <Link
                    to="/child-info"
                    className="text-textyellow flex items-center gap-2"
                  >
                    <span className="w-4 h-4 flex items-center justify-center rounded-full border-2 border-textyellow text-textyellow">
                      <MdArrowForward className="text-xs font-bold" />
                    </span>
                    Read More
                  </Link>
                </div>
                <div className="mt-auto pt-6">
                  <Link
                    to="/sponsor-child"
                    className="bg-primary text-white text-sm px-4 py-1.5 rounded hover:bg-opacity-90 transition"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow rounded overflow-hidden flex flex-col w-full sm:w-72  !h-[600px] sm:h-[700px]">
              <img
                src={givingOptions[1].image}
                alt={givingOptions[1].title}
                className="w-full h-[350px] object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">
                  {givingOptions[1].title}
                </h3>
                <p className="text-gray-600 flex-1 mt-2 text-xs leading-relaxed">
                  {givingOptions[1].description}
                </p>
                <div className="flex flex-col gap-2 mt-0">
                  <Link
                    to="/feeding-program"
                    className="text-textyellow flex items-center gap-2"
                  >
                    <span className="w-4 h-4 flex items-center justify-center rounded-full border-2 border-textyellow text-textyellow">
                      <MdArrowForward className="text-xs font-bold" />
                    </span>
                    Read More
                  </Link>
                </div>
                <div className="mt-auto pt-6">
                  <button
                    className="bg-primary text-white text-sm px-4 py-1.5 rounded hover:bg-opacity-90 transition"
                    onClick={() => setShowModal(true)}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow rounded overflow-hidden flex flex-col w-full sm:w-72 !h-[600px] sm:h-[700px]">
              <img
                src={givingOptions[2].image}
                alt={givingOptions[2].title}
                className="w-full h-[350px] object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">
                  {givingOptions[2].title}
                </h3>
                <p className="text-gray-600 flex-1 mt-2 text-xs leading-relaxed">
                  {givingOptions[2].description}
                </p>
                <div className="flex flex-col gap-2 mt-0">
                  <Link
                    to="/general-donation"
                    className="text-textyellow flex items-center gap-2"
                  >
                    <span className="w-4 h-4 flex items-center justify-center rounded-full border-2 border-textyellow text-textyellow">
                      <MdArrowForward className="text-xs font-bold" />
                    </span>
                    Read More
                  </Link>
                </div>
                <div className="mt-auto pt-6">
                  <button
                    className="bg-primary text-white text-sm px-4 py-1.5 rounded hover:bg-opacity-90 transition"
                    onClick={() => setShowModal(true)}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && <DonateModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default GivingOptions;
