import React from "react";

const Associates = () => {
  return (
    <section className="py-16 bg-white text-center mt-15">
      <h4 className="text-orange-500 text-sm  uppercase mb-2">
        Trusted Affiliates
      </h4>
      <h2 className="text-3xl font-bold text-primary mb-10">
        Our Advocacy Associates
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-10 px-6">
        <img
          src="./public/image/home/logo-fwc.png"
          alt="Affiliate 1"
          className="h-16 object-contain grayscale"
        />
        <img
          src="./public/image/home/logo-fbs.png"
          alt="Affiliate 2"
          className="h-16 object-contain grayscale"
        />
        <img
          src="./public/image/home/logo-fca.png"
          alt="Affiliate 3"
          className="object-contain grayscale"
        />
        <img
          src="./public/image/home/logo-ftw.png"
          alt="Affiliate 4"
          className=" object-contain grayscale"
        />
        <img
          src="./public/image/home/logo-pfm.png"
          alt="Affiliate 5"
          className="h-16 object-contain grayscale"
        />
      </div>
    </section>
  );
};

export default Associates;
