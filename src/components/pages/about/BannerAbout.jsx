import React from "react";

const BannerAbout = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-11 mt-10">
      <div className="w-full md:w-3/4 flex justify-center mb-10 md:mb-0">
        <img
          src="https://facethechildren.org/images/website/about-banner.webp"
          alt=""
          className=""
        />
      </div>

      <div className="max-w-xl md:ml-12 md:w-1/2">
        <h4 className="text-orange-500 text-sm font-medium uppercase">
          From Streets to Smiles
        </h4>
        <div>
          <div className="max-w-xl">
            <h1 className="text-5xl   text-gray-700 font-semibold leading-relaxed mb-6 md:text-3xl">
              Transform lives from the harsh reality of the streets to the
              warmth and comfort of genuine smiles
            </h1>
            <button className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-500 text-sm">
              Sponsor Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAbout;
