import React, { useState } from "react";
import ModalSponsor from "../../../partials/modal/ModalSponsor";

const childrens = [
  {
    name: "Trixie Mae N",
    sponsored: "37.50% ",
    img: "https://facethechildren.org/images/trixie.jpg",
  },
  {
    name: "Danica V",
    sponsored: "40.00%",
    img: "https://facethechildren.org/images/danica.jpg",
  },
  {
    name: "Rose Mae N",
    sponsored: "40.00%",
    img: "https://facethechildren.org/images/rosemae.jpg",
  },
  {
    name: "Rachelle M",
    sponsored: "42.00%",
    img: "https://facethechildren.org/images/opt-rachelle.jpg",
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
  {
    name: "Julie Ann T",
    sponsored: "60.00%",
    img: "https://facethechildren.org/images/julieann.jpg",
  },
  {
    name: "Mark John B",
    sponsored: "85.00%",
    img: "https://facethechildren.org/images/opt-mark.jpg",
  },
  {
    name: "Marian Nhicole B",
    sponsored: "100.00%",
    img: "https://facethechildren.org/images/opt-marian.jpg",
  },
];

const ChildGridSecond = () => {
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-6">
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
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold">{childs.name}</h3>
                    <button
                      onClick={() => setSelectedChild(childs)}
                      className="bg-primary hover:bg-blue-500 text-white px-3 py-1 rounded text-xs"
                    >
                      Sponsor →
                    </button>
                  </div>
                  <a href="#" className="text-orange-300 text-xs">
                    View Info
                  </a>
                </div>
              </div>

              <div className="relative w-full h-7 bg-orange-300">
                <div
                  className="absolute top-0 left-0 h-full bg-orange-500"
                  style={{ width: `${sponsoredPercent}%` }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-semibold text-sm z-10">
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
