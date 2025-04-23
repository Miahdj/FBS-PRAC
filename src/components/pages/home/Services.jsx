import React from "react";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between pb-11">
      <div className="md:mr-10 flex-1">
        <h4 className="text-orange-500 text-sm font-medium uppercase">
          Our Solutions
        </h4>
        <h2 className="text-3xl font-semibold text-primary mt-2 mb-4">
          Services We Provide
        </h2>
        <p className="text-gray-700 mb-8 text-sm leading-loose">
          Making a difference in the lives of children can be simplified into a
          few essential actions focused on their overall well-being. Here are
          the things we provide for our children
        </p>
        <a
          href="#sponsor"
          className="inline-block bg-primary text-white px-6 py-1 rounded hover:bg-blue-500"
        >
          Learn more
        </a>
      </div>

      <div className="mb-12 md:mb-0">
        <img
          src="https://facethechildren.org/images/website/h-service.webp"
          alt="Children Graphic"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Services;
