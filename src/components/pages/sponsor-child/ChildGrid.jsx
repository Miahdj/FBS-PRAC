import React, { useState } from "react";
import ModalSponsor from "../../../partials/modal/ModalSponsor";

const children = [
  {
    name: "John Luke B",
    sponsored: "0.00%",
    img: "https://facethechildren.org/images/John-luke-b.jpg",
  },
  {
    name: "Ala D",
    sponsored: "5.00%",
    img: "https://facethechildren.org/images/ala-d.jpg",
  },
  {
    name: "Angelita A - Special Education",
    sponsored: "5.00%",
    img: "https://facethechildren.org/images/opt-angelica.jpg",
  },
  {
    name: "Minos D",
    sponsored: "5.00%",
    img: "https://facethechildren.org/images/minos-d (1).jpg",
  },
  {
    name: "Angelita A",
    sponsored: "10.00%",
    img: "https://facethechildren.org/images/opt-angelica.jpg",
  },
  {
    name: "Mary Joy C.",
    sponsored: "17.50%",
    img: "https://facethechildren.org/images/opt-mary-joy.jpg",
  },
  {
    name: "Carl Leann N.",
    sponsored: "25.00%",
    img: "https://facethechildren.org/images/opt-leam.jpg",
  },
  {
    name: "Charissa N.",
    sponsored: "25.00%",
    img: "https://facethechildren.org/images/opt-charisse.jpg",
  },
  {
    name: "Chelsey B",
    sponsored: "27.50%",
    img: "https://facethechildren.org/images/chelsey-b.jpg",
  },
  {
    name: "Shiela Mariel S",
    sponsored: "35.00%",
    img: "https://facethechildren.org/images/opt-shiela.jpg",
  },
  {
    name: "Cielithaine D",
    sponsored: "37.50%",
    img: "https://facethechildren.org/images/opt-CIELITAHINE.jpg",
  },
  {
    name: "Junior N.",
    sponsored: "40.00%",
    img: "https://facethechildren.org/images/opt-junior.jpg",
  },
  {
    name: "Melquizedec B",
    sponsored: "40.00%",
    img: "https://facethechildren.org/images/opt-milquizedec.jpg",
  },
  {
    name: "Keren D.",
    sponsored: "45.00%",
    img: "https://facethechildren.org/images/opt-keren.jpg",
  },
  {
    name: "Mary Ann V.",
    sponsored: "50.00%",
    img: "https://facethechildren.org/images/opt-mary-ann.jpg",
  },
  {
    name: "Michaela C.",
    sponsored: "50.00%",
    img: "https://facethechildren.org/images/opt-mikaela.jpg",
  },
  {
    name: "Sara A",
    sponsored: "50.00%",
    img: "https://facethechildren.org/images/opt-sarah.jpg",
  },
  {
    name: "Ricka",
    sponsored: "52.50%",
    img: "https://facethechildren.org/images/opt-ricka.jpg",
  },
  {
    name: "Alden D.",
    sponsored: "57.00%",
    img: "https://facethechildren.org/images/opt-alden.jpg",
  },
  {
    name: "Andrea C.",
    sponsored: "62.50%",
    img: "https://facethechildren.org/images/opt-andrea.jpg",
  },
  {
    name: "Cornnelito D.",
    sponsored: "100.00%",
    img: "https://facethechildren.org/images/opt-cornilito.jpg",
  },
];

const ChildGrid = () => {
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-6">
        {children.map((child, index) => {
          const sponsoredPercent = parseFloat(child.sponsored.replace("%", ""));

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-w-[300px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={child.img}
                  alt={child.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold">{child.name}</h3>
                    <button
                      onClick={() => setSelectedChild(child)}
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
                  {child.sponsored} - Sponsored
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

export default ChildGrid;
