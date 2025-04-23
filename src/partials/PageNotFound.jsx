import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center pt-40 flex-col gap-2 p-4 h-screen bg-gradient-to-t from-white to-blue-400 relative">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 384 512"
        className="h-80 w-80 fill-blue-400/40 absolute z-0 skew-x-12 skew-y-12"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path>
      </svg>
      <h3 className="text-8xl text-white z-10">404</h3>
      <h2 className="font-bold text-2xl text-white z-10">Page not found</h2>
      <p className="text-sm m-0 text-white z-10">
        Unfortunately, the desired page cannot be accessed at the moment.
      </p>
      <p className="text-white z-10">Please check your URL</p>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="group flex items-center gap-1 bg-white z-10 py-2 px-6 rounded-md text-[#3e9bd0] font-bold"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="group-hover:mr-4 duration-100 ease-in-out"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path>
        </svg>
        <span>Go back</span>
      </button>
    </div>
  );
};

export default PageNotFound;
