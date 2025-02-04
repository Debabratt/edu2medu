import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Education");

  return (
    <div className="relative w-full bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Video with Overlay */}
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
        <div className="absolute inset-0 bg-black opacity-30" /> {/* Set opacity to 30 */}
      </div>

      {/* Buttons to Toggle Content */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
        <button
          className={`px-4 sm:px-6 py-2 rounded-md text-sm sm:text-lg font-bold transition-all ${
            selectedCategory === "Education"
              ? "bg-[#17A2B8] text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => setSelectedCategory("Education")}
        >
          Education
        </button>
        <button
          className={`px-4 sm:px-6 py-2 rounded-md text-sm sm:text-lg font-bold transition-all ${
            selectedCategory === "Healthcare"
              ? "bg-[#D88429] text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => setSelectedCategory("Healthcare")}
        >
          Healthcare
        </button>
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full max-w-3xl text-white flex flex-col items-center px-4 sm:px-12 lg:px-24">
        {/* Title with Framer Motion animation */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          {selectedCategory === "Education" ? (
            <>
              <span className="bg-gradient-to-r from-white to-[#17A2B8] text-transparent bg-clip-text">
                Find Your Dream School!
              </span>
            </>
          ) : (
            <>
              <span className="bg-gradient-to-r from-white to-[#D88429] text-transparent bg-clip-text">
                Find Trusted Healthcare!
              </span>
            </>
          )}
        </motion.h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-200 font-serif text-center mt-4 sm:mt-6">
          {selectedCategory === "Education"
            ? "We make your school search easy."
            : "Find the best healthcare services near you."}
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mt-4 sm:mt-6 flex justify-center items-center">
          <div className="flex items-center w-full max-w-md relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={
                selectedCategory === "Education"
                  ? "Search schools, boards, cities..."
                  : "Search hospitals, clinics, doctors..."
              }
              className="p-3 pl-10 pr-14 rounded-lg w-full text-sm sm:text-base placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#5e758e] shadow-lg transition-transform transform hover:scale-105"
            />
            <button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#D88429] text-white p-2 rounded-md hover:bg-[#67533e] transition-transform transform hover:scale-110"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category-Specific Content */}
        <div className="mt-6 text-center text-gray-300">
          {selectedCategory === "Education" ? (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Explore Top Schools</h2>
              <p className="text-sm sm:text-base">Find day schools, boarding schools, and play schools near you.</p>
            </div>
          ) : (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Explore Top Healthcare Centers</h2>
              <p className="text-sm sm:text-base">Find hospitals, clinics, and specialists near you.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
