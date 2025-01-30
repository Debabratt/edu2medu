import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Home = () => {
  const [placeholder, setPlaceholder] = useState("Search by School, Board, City...");

  const handlePlaceholderChange = (text) => {
    setPlaceholder(`Search by ${text}...`);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="v2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0  bg-opacity-50" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full max-w-3xl text-white px-6 sm:px-12 lg:px-24 flex flex-col items-center lg:items-start">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left">
          Find <span className="text-[#f42121]">Your</span> Dream {" "}
          <span className="text-[#f4f121]">School!</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-center mt-6">We make your school search easy.</p>

        {/* Category Buttons */}
        <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3">
          {["Day School", "Board School", "Play School"].map((text) => (
            <button
              key={text}
              onClick={() => handlePlaceholderChange(text)}
              className="text-[#ccd829] font-bold hover:underline text-sm sm:text-base transform hover:scale-110 transition-all duration-300"
            >
              {text}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 flex justify-center items-center">
          <div className="flex items-center w-full max-w-md relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={placeholder}
              className="p-3 pl-10 pr-14 rounded-lg w-full text-sm sm:text-base placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#5e758e] shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            />
            <button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#D88429] text-white p-2 rounded-md hover:bg-[#67533e] transition duration-300 ease-in-out transform hover:scale-110"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
