import React from "react";

const FaqQuestions2 = () => {
  return (
    <div className="bg-gray-50 mt-16 py-10 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="mr-20">
          <small className="text-sm text-orange-400 uppercase mb-2">
            Frequently Asked Question
          </small>
          <h3 className="text-3xl font-semibold text-primary leading-tight">
            Can’t find what you are looking for?
          </h3>
          <p className="text-gray-600 mt-2">
            If your question is not listed above, you can use the form to send
            directly to us your questions.
          </p>
        </div>

        <form className="space-y-4">
          {/* Input fields */}
          {["Name", "Email", "Phone", "Subject"].map((label, i) => (
            <div key={i} className="relative w-full">
              <input
                type={
                  label === "Email"
                    ? "email"
                    : label === "Phone"
                    ? "tel"
                    : "text"
                }
                required
                className="peer w-full px-4 pt-2 pb-1 border border-gray-300 rounded-md focus:outline-none focus:border-primary
"
              />
              <label className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary">
                {label}
              </label>
            </div>
          ))}

          <div className="relative w-full">
            <textarea
              required
              rows="6"
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
            />
            <label className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary">
              Message
            </label>
          </div>

          {/* reCAPTCHA  */}
          <div className="border border-gray-300 px-6 py-4 rounded bg-white flex flex-col space-y-0.5 w-96">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input type="checkbox" id="robot" className="w-4 h-4" />
                <label htmlFor="robot" className="text-sm text-gray-700">
                  I'm not a robot
                </label>
              </div>
              <div className="flex flex-col items-center ml-4">
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  className="w-8 h-8"
                />
                <div className="text-[10px] text-gray-400 mt-0.5">
                  reCAPTCHA
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-200 text-white py-2 px-6 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqQuestions2;
