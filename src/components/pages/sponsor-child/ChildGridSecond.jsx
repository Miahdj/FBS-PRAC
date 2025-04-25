import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalSponsor from "../../../partials/modal/ModalSponsor";

const childrens = [
  {
    name: "Trixie Mae N",
    sponsored: "37.50%",
    img: "./public/image/sponsor-child/non-resident/trixie.jpg",
    age: "12",
    birthday: "Jul 3, 2013",
    story:
      "John Luke, or JL, as he is called by his friends was neglected and then abandoned by his parents.  When the mother and father separated JL and his siblings were in the care of their mother.  The mother went to work overseas and left them in the care of another man who abandoned them.  The mother does not respond to contact.  JL is enrolled in grade 3 at Frontline Christian Academy and is interacting well within Face the Children.",
  },
  {
    name: "Danica V",
    sponsored: "40.00%",
    img: "./public/image/sponsor-child/non-resident/danica.jpg",
  },
  {
    name: "Rose Mae N",
    sponsored: "40.00%",
    img: "./public/image/sponsor-child/non-resident/rosemae.jpg",
  },
  {
    name: "Rachelle M",
    sponsored: "42.00%",
    img: "./public/image/sponsor-child/non-resident/opt-rachelle.jpg",
  },
  {
    name: "Richard T",
    sponsored: "45.00%",
    img: "https://facethechildren.org/images/opt-don.jpg",
  },
  {
    name: "Mary Grace V",
    sponsored: "50.00%",
    img: "https://facethechildren.org/images/marygrace.jpg",
  },
  {
    name: "Eugene Lance D",
    sponsored: "52.50%",
    img: "https://facethechildren.org/images/eugene.jpg",
  },
  {
    name: "Gladys T",
    sponsored: "57.50%",
    img: "https://facethechildren.org/images/opt-gladays.jpg",
  },
];

const ChildGridSecond = () => {
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-3">
        {childrens.map((childs, index) => {
          const sponsoredPercent = parseFloat(
            childs.sponsored.replace("%", "")
          );

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-w-[300px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={childs.img}
                  alt={childs.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/20 text-white p-1 z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold leading-none">
                      {childs.name}
                    </h3>
                    <button
                      onClick={() => setSelectedChild(childs)}
                      className="bg-primary hover:bg-blue-500 text-white px-4 py-2 rounded text-xs whitespace-nowrap"
                    >
                      Sponsor →
                    </button>
                  </div>
                  <Link
                    to={{
                      pathname: "/child-info-output",
                    }}
                    state={{ child: childs }}
                    className="text-orange-300 text-xs"
                  >
                    View Info
                  </Link>
                </div>
              </div>

              <div className="relative w-full h-10 bg-[#ffbd66]">
                <div
                  className="absolute top-0 left-0 h-full bg-[#eb8500]"
                  style={{ width: `${sponsoredPercent}%` }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center ml-2 text-white font-semibold text-sm z-10">
                  {childs.sponsored} - Sponsored
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ModalSponsor
        child={selectedChild}
        onClose={() => setSelectedChild(null)}
      />
    </div>
  );
};

export default ChildGridSecond;
