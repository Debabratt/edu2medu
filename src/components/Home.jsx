import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Education");
  const [selectedOption, setSelectedOption] = useState(""); // To handle the dynamic text when option is clicked

  // Set default category based on URL or location pathname
  useEffect(() => {
    if (location.pathname.includes("/healthcare")) {
      setSelectedCategory("Healthcare");
    } else {
      setSelectedCategory("Education");
    }
  }, [location.pathname]); // Trigger on location change

  // Handle category change (Education or Healthcare)
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedOption(""); // Reset the selected option when category changes
    if (category === "Education") {
      navigate("/");  // navigate to the education page
    } else {
      navigate("/healthcare"); // navigate to healthcare page
    }
  };

  // Placeholder options for the Education category
  const educationOptions = ["Day School", "Board School", "Play School"];
  // Placeholder options for the Healthcare category
  const healthcareOptions = ["Govt Hospitals  ", "Private Hospitals", "Nursing Home"];

  return (
    <div className="relative w-full bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {selectedCategory === "Education" ? (
          <video
            key="education-video" // Ensure a re-render by changing key
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="educ.mp4" type="video/mp4" />
          </video>
        ) : (
          <video
            key="healthcare-video" // Ensure a re-render by changing key
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="h.mp4" type="video/mp4" />
          </video>
        )}

        {/* Black Gradient Overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Category Buttons */}
      <div className="relative z-10 flex gap-6 mb-6 flex-wrap justify-center">
        <button
          className={`px-6 py-2 rounded-md text-lg font-bold transition-all ${
            selectedCategory === "Education"
              ? "bg-[#E76F51] text-white"
              : "bg-gray-200 text-black hover:bg-[#E76F51] hover:text-white"
          }`}
          onClick={() => handleCategoryChange("Education")}
        >
          Education
        </button>
        <button
          className={`px-6 py-2 rounded-md text-lg font-bold transition-all ${
            selectedCategory === "Healthcare"
              ? "bg-[#17A2B8] text-white"
              : "bg-gray-200 text-black hover:bg-[#17A2B8] hover:text-white"
          }`}
          onClick={() => handleCategoryChange("Healthcare")}
        >
          Healthcare
        </button>
      </div>

      {/* Title */}
      <motion.h1
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        {selectedCategory === "Education" ? (
          <span className="bg-gradient-to-r from-white to-[#E76F51] text-transparent bg-clip-text">
            Find Your Dream School!
          </span>
        ) : (
          <span className="bg-gradient-to-r from-white to-[#17A2B8] text-transparent bg-clip-text">
            Find Your Trusted Healthcare!
          </span>
        )}
      </motion.h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 flex justify-center items-center">
        <div className="flex items-center w-full max-w-md relative">
          <SearchIcon
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              selectedCategory === "Education" ? "text-[#E76F51]" : "text-[#17A2B8]"
            }`}
          />
          <input
            type="text"
            placeholder={
              selectedCategory === "Education"
                ? selectedOption || "Search schools, boards, cities..."
                : selectedOption || "Search hospitals, clinics, doctors..."
            }
            className="p-3 pl-10 pr-14 rounded-lg w-full text-sm sm:text-base placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#5e758e] shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
          <button
            className={`absolute right-1 top-1/2 transform -translate-y-1/2 ${
              selectedCategory === "Education" ? "bg-[#E76F51]" : "bg-[#17A2B8]"
            } text-white p-2 rounded-md hover:bg-[#67533e] transition duration-300 ease-in-out transform hover:scale-110`}
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dynamic Option List */}
      <div className="relative z-10 mt-4 flex gap-4 justify-center flex-wrap sm:flex-nowrap">
  {(selectedCategory === "Education" ? educationOptions : healthcareOptions).map((option) => (
    <span
      key={option}
      className={`font-bold 
        ${selectedCategory === "Education" ? "text-[#E76F51]" : "text-[#17A2B8]"} 
        hover:${selectedCategory === "Education" ? "text-[#d34c2a]" : "text-[#117585]"}
        transition duration-300 text-sm sm:text-base cursor-pointer`}
      onClick={() => setSelectedOption(option)} // Set selected option
    >
      {option}
    </span>
  ))}
</div>


    </div>
  );
};

export default Home;
