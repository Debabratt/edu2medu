import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Education"); // Default category

  return (
    <div className="relative w-full bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video with Solid Black Overlay */}
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
        <div className="absolute inset-0" />
      </div>

      {/* Buttons to Toggle Content */}
      <div className="relative z-10 flex gap-6 mb-6">
        <button
          className={`px-6 py-2 rounded-md text-lg font-bold transition-all ${
            selectedCategory === "Education"
              ? "bg-[#17A2B8] text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => setSelectedCategory("Education")}
        >
          Education
        </button>
        <button
          className={`px-6 py-2 rounded-md text-lg font-bold transition-all ${
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
      <div className="relative z-10 w-full max-w-3xl text-white px-6 sm:px-12 lg:px-24 flex flex-col items-center lg:items-start">
        {/* Title with Framer Motion animation */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          {selectedCategory === "Education" ? (
            <>
              <span className="bg-gradient-to-r from-white to-[#17A2B8] text-transparent bg-clip-text mr-3">
                Find
              </span>
              <span className="bg-gradient-to-r from-white to-[#17A2B8] text-transparent bg-clip-text mr-3">
                Your
              </span>
              <span className="bg-gradient-to-r from-white to-[#17A2B8] text-transparent bg-clip-text">
                Dream
              </span>
              <span className="bg-gradient-to-r from-black to-white text-transparent bg-clip-text">
                School!
              </span>
            </>
          ) : (
            <>
              <span className="bg-gradient-to-r from-white to-[#D88429] text-transparent bg-clip-text mr-3">
                Find
              </span>
              <span className="bg-gradient-to-r from-white to-[#D88429] text-transparent bg-clip-text mr-3">
                Your
              </span>
              <span className="bg-gradient-to-r from-white to-[#D88429] text-transparent mr-3 bg-clip-text">
                Trusted
              </span>
              <span className="bg-gradient-to-r  from-gray-500 to-white text-transparent bg-clip-text">
                Healthcare!
              </span>
            </>
          )}
        </motion.h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-200 font-serif text-center mt-6">
          {selectedCategory === "Education"
            ? "We make your school search easy."
            : "Find the best healthcare services near you."}
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 flex justify-center items-center">
          <div className="flex items-center w-full max-w-md relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={selectedCategory === "Education" ? "Search schools, boards, cities..." : "Search hospitals, clinics, doctors..."}
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

        {/* Category-Specific Content */}
        <div className="mt-6">
          {selectedCategory === "Education" ? (
            <div className="text-center text-gray-300">
              <h2 className="text-xl font-semibold">Explore Top Schools</h2>
              <p>Find day schools, boarding schools, and play schools near you.</p>
            </div>
          ) : (
            <div className="text-center text-gray-300">
              <h2 className="text-xl font-semibold">Explore Top Healthcare Centers</h2>
              <p>Find hospitals, clinics, and specialists near you.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
