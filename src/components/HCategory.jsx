import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Utility function to truncate text after 20 words
const truncateText = (text, wordLimit = 20) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const HCategory = () => {
  const [isMobile, setIsMobile] = useState(false);

  const additionalServices = [
    {
      imgSrc: "n.webp",
      title: "Nationwide Healthcare Reach",
      description:
        "From urban hospitals to rural clinics, we ensure that healthcare facilities are accessible in every corner of the country, offering a wide range of medical services.",
    },
    {
      imgSrc: "spec.webp",
      title: "Specialized Medical Care",
      description:
        "Our network includes specialized care services across various fields such as cardiology, oncology, pediatrics, and more, providing expert treatments to meet your healthcare needs.",
    },
    {
      imgSrc: "tele.webp",
      title: "Telemedicine Services",
      description:
        "With our telemedicine platform, you can consult doctors and healthcare professionals from the comfort of your home, ensuring timely advice and medical consultation.",
    },
    {
      imgSrc: "exten.webp",
      title: "Extensive Hospital Network",
      description:
        "We have partnered with a wide range of hospitals, from government institutions to premium private hospitals, ensuring that you get the best medical care at affordable prices.",
    },
  ];
  

  // Detect screen size to toggle between grid and carousel
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change this threshold as needed
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="bg-[#dbf9f1] lg:min-h-screen sm:min-h-screen lg:py-10 sm:py-10 px-8">
      <div className="text-center mb-8  sm:mb-8">
        <h1 className="text-2xl md:text-3xl py-4 font-bold text-gray-800">
          Browse by Medical Category
        </h1>
        <p className="text-gray-600 font-serif mt-3 text-sm md:text-base">
          Find the perfect healthcare solution for your well-being
        </p>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:p-10">
        {/* Category cards */}
        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-transform transform hover:scale-105">
          <img
            src="govt.webp"
            alt="Government Hospital"
            className="w-full h-32 object-cover rounded-t-md"
          />
          <h2 className="text-lg font-bold text-gray-800 mt-3"> Hospitals</h2>
          <p className="text-gray-600 text-sm mt-1">
            {truncateText(
              "Comprehensive medical care available to all citizens."
            )}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-transform transform hover:scale-105">
          <img
            src="pvth.webp"
            alt="Private Hospital"
            className="w-full h-32 object-cover rounded-t-md"
          />
          <h2 className="text-lg font-bold text-gray-800 mt-3">Private Clinics</h2>
          <p className="text-gray-600 text-sm mt-1">
            {truncateText(
              "Premium healthcare services with advanced technology."
            )}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-transform transform hover:scale-105">
          <img
            src="nurs.webp"
            alt="Nursing Home"
            className="w-full h-32 object-cover rounded-t-md"
          />
          <h2 className="text-lg font-bold text-gray-800 mt-3">Nursing Home</h2>
          <p className="text-gray-600 text-sm mt-1">
            {truncateText(
              "Long-term care for elderly or recovering patients."
            )}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-transform transform hover:scale-105">
          <img
            src="ambulance7.webp"
            alt="Ambulance Services"
            className="w-full h-32 object-cover rounded-t-md"
          />
          <h2 className="text-lg font-bold text-gray-800 mt-3">Ambulance Services</h2>
          <p className="text-gray-600 text-sm mt-1">
            {truncateText(
              "Emergency transport with skilled paramedics available 24/7."
            )}
          </p>
        </div>
      </div>

      {/* Updated Additional Services Section */}
      <div className="mt-16 px-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Explore Our Additional Medical Services
        </h2>
        <p className="text-gray-600 font-serif mb-12 text-center text-sm md:text-base">
          From urgent transport to long-term care, we provide essential services to meet all your healthcare needs.
        </p>

        {/* Conditionally render carousel or grid based on screen size */}
        {isMobile ? (
          <motion.div
            className="overflow-hidden" // Ensure no overflow after carousel
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Carousel
              responsive={{
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 1024 },
                  items: 3,
                },
                desktop: {
                  breakpoint: { max: 1024, min: 768 },
                  items: 2,
                },
                tablet: {
                  breakpoint: { max: 768, min: 464 },
                  items: 1,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                },
              }}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              showDots={false} // Hide dots
              arrows={false}
            >
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-xl rounded-lg p-6 flex flex-col sm:flex-row transition-transform transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-full sm:w-1/2 pr-4">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="w-full h-40 mt-4 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-2 px-6">
                      {/* Truncate text after 18 words */}
                      {truncateText(service.description, 18)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Carousel>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-lg p-6 flex flex-col lg:flex-row transition-transform transform"
              >
                <div className="w-full lg:w-1/2 pr-4">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="w-full h-40 mt-4 object-cover rounded-t-lg"
                  />
                </div>
                <div className="w-full lg:w-1/2 mt-4 sm:mt-0">
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2 px-6">
                    {/* Truncate text after 18 words */}
                    {truncateText(service.description, 18)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HCategory;
