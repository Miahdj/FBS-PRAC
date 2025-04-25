import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!email) return;
  };

  return (
    <div className="min-h-screen flex items-start pt-[170px] justify-center bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-[360px] max-w-md sm:max-w-sm text-center">
        <img
          src="http://localhost:5173/src/assets/ftc_svg_logo.svg"
          alt="Face the Children Logo"
          className="mx-auto h-[55px] mb-6"
        />

        <div className="text-left">
          <h2 className="text-lg sm:text-base font-semibold text-gray-800 mb-4 !mt-[40px]">
            FORGOT PASSWORD
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 w-full mt-6">
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`peer w-full px-4 pt-1 pb-2 border rounded-md text-sm focus:outline-none ${
                  submitted && !email ? "border-red-500" : "border-gray-300"
                }`}
              />
              <label className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary">
                Email
              </label>
              {submitted && !email && (
                <p className="text-xs italic text-red-500 mt-1">
                  * Email is required
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-300 hover:bg-blue-400 text-white text-sm font-semibold py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>

          <div className="mt-4 text-xs text-gray-700">
            Go back to{" "}
            <Link to="/login" className="text-primary underline">
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
