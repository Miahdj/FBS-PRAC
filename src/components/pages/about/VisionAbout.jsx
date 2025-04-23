import React from "react";

const VisionAbout = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-11">
      <div className="max-w-xl md:mr-10 flex-1">
        <h4 className="text-orange-500 text-sm  uppercase">Vision</h4>
        <h2 className="text-3xl font-semibold text-primary mt-2 mb-4">
          Empower Change Inspiring Purpose
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          A nationwide network of child care centers committed <br /> to the
          advocacy, protection, care and development of <br /> abandoned,
          abused, or dangerously neglected children.
        </p>
      </div>

      <div className="mb-12 md:mb-0 md:w-3/5">
        <img
          src="https://facethechildren.org/images/website/about-vision.webp"
          alt="Children Graphic"
          className=""
        />
      </div>
    </section>
  );
};

export default VisionAbout;
