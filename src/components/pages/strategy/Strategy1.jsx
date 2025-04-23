import React from "react";

const Strategy1 = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-col lg:flex-row gap-10 items-start">
      <div className="flex justify-center w-full md:order-1 lg:order-2">
        <img
          className=""
          src="https://facethechildren.org/images/website/s-banner.webp"
          alt="FTC Banner Quote"
        />
      </div>

      <div className="w-full md:order-2 lg:order-1 ">
        <small className="text-orange-500 uppercase mb-2">The Problem</small>
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Rescuing Lives from Poverty and Abuse
        </h2>
        <p className="text-gray-600 text-sm leading-loose mb-8 md:max-w-lg md:mt-2">
          Historically in the Philippines, due to widespread poverty, the
          problem of abandoned, abused, or dangerously neglected (AADN) children
          has been remarkably large. Many hundreds of thousands of children,
          perhaps millions, have grown up living mostly on the streets. There is
          very minimal governmental protection or assistance for what are often
          termed “street children,” and in class-segregated social systems these
          children are not only viewed as a nuisance, but are the target of a
          wide variety of evils.
        </p>

        <small className="text-orange-500 uppercase mb-2">Our Action</small>
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Creating Lasting Change through Our Intervention
        </h2>
        <p className="text-gray-600 text-sm leading-loose mb-6 md:max-w-xl ">
          The Face the Children (FTC) program is established to serve AADN
          children through a program that provides protection, care, nurture,
          education, and spiritual development that affords them a genuinely
          greater opportunity for a dignified and meaningful adult life.
        </p>

        <div className="space-y-4 md:max-w-lg">
          {[
            {
              title: "Protect",
              text: "We provide a safe environment and place for those living in our children’s homes, who are provided full-time care.",
            },
            {
              title: "Care",
              text: "We meet the basic physical and material needs for the children in the FTC program.",
            },
            {
              title: "Nurture",
              text: "We provide loving oversight that involves listening, counseling, and prayer. We do our best to be a parent figure in the lives of the children.",
            },
            {
              title: "Education",
              text: "We provide K-12 educational services for all the children in our program, as well as opportunities for University for the higher achievers.",
            },
            {
              title: "Spiritual Development",
              text: "As Christians we believe spiritual well-being comes through a meaningful relationship with God. The Bible is our main source of spiritual direction and guidance.",
            },
          ].map((item, index) => (
            <div key={index}>
              <h5 className="text-primary font-semibold text-lg leading-relaxed ">
                {item.title}
              </h5>
              <p
                className="mt-3 text-gray-600  text-sm leading-loose md:max-w-lg
"
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy1;
