import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const DonateModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`bg-white rounded-md w-[90%] max-w-md overflow-hidden shadow-lg transform transition-all duration-300 ease-out 
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className="bg-primary text-white py-3 px-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">General Donation</h2>
          <button
            onClick={handleClose}
            className="text-white text-xl font-bold hover:opacity-80"
          >
            <MdClose />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary">
                Designation<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border border-gray-300 rounded p-2 mt-1"
                required
              >
                <option value="">--</option>
                <option value="Monthly">Monthly</option>
                <option value="One-Time">One-Time</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary">
                Amount<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border border-gray-300 rounded p-2 mt-1"
                required
              >
                <option value="">--</option>
                <option value="20">$20</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary">
                Frequency<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border border-gray-300 rounded p-2 mt-1"
                required
              >
                <option value="">--</option>
                <option value="Monthly">Monthly</option>
                <option value="One-Time">One-Time</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary">
                Remarks
              </label>
              <textarea className="w-full border rounded p-2 mt-1" rows="3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary">
                Email
              </label>
              <input type="email" className="w-full border rounded p-2 mt-1" />
            </div>
          </div>

          <button className="mt-4 bg-primary text-white w-full py-2 rounded hover:bg-blue-500 transition">
            Proceed
          </button>

          <div className="mt-6">
            <div className="flex justify-end mb-1">
              <span className="text-xs text-gray-500">
                Donate with your credit card
              </span>
            </div>
            <div className="flex justify-end space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Visa"
                className="w-10 h-5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="Mastercard"
                className="w-10 h-5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png"
                alt="AmEx"
                className="w-10 h-5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg"
                alt="Discover"
                className="w-10 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;
