import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-white text-sm">
        <div />
        <div className="text-xs flex space-x-4 mt-[-4px]">
          <a
            href="https://philfrontline.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Philippine Frontline Ministries
          </a>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
