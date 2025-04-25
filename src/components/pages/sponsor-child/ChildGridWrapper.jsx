import React, { useState } from "react";
import ChildGrid from "./ChildGrid";
import { Home, Users } from "lucide-react";
import ChildGridSecond from "./ChildGridSecond";

const ChildGridWrapper = () => {
  const [activeTab, setActiveTab] = useState("resident");

  return (
    <div className="px-4 py-3 max-w-7xl mx-auto ">
      <div className="flex justify-center mb-8 mt-20">
        <div className="flex space-x-10 relative">
          <button
            onClick={() => setActiveTab("resident")}
            className={`flex items-center gap-2 text-sm font-semibold relative ${
              activeTab === "resident" ? "text-black" : "text-gray-400"
            }`}
          >
            <span className="text-xl">
              <Home />
            </span>
            Resident
            {activeTab === "resident" && (
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-400 rounded"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("non-resident")}
            className={`flex items-center gap-2 text-sm font-semibold relative ${
              activeTab === "non-resident" ? "text-black" : "text-gray-400"
            }`}
          >
            <span className="text-xl">
              <Users />
            </span>
            Non-Resident
            {activeTab === "non-resident" && (
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-400 rounded"></span>
            )}
          </button>
        </div>
      </div>

      {activeTab === "resident" ? <ChildGrid /> : <ChildGridSecond />}
    </div>
  );
};

export default ChildGridWrapper;
