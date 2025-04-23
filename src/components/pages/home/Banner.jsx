import React from "react";

const Banner = () => {
  return (
    <section className="bg-white py-16 mt-10 sm:mt-8 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:mr-10 flex-1">
          <p className="text-xs text-orange-500 uppercase mb-2">
            Creating Opportunity
          </p>
          <h1 className="text-3xl sm:text-2xl md:text-4xl text-gray-700 font-semibold  mb-6 md:leading-snug">
            Making a difference for abandoned, abused, or dangerously <br />
            neglected children
          </h1>

          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-500 text-sm">
            Sponsor Now
          </button>
        </div>

        <div className="mt-12 md:mt-0">
          <img
            src="https://facethechildren.org/images/website/h-banner.webp"
            alt="Children Graphic"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
