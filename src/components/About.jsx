const About = () => {
    return (
      <div className="bg-gradient-to-r from-[#fcab97] to-[#a1e9f4] py-16 mt-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-30">
      
          {/* Who We Are Section */}
          <div className="flex flex-col lg:flex-row items-center mb-12 gap-6 lg:gap-10">
            <div className="lg:w-1/2 mb-6 lg:mt-20 lg:px-20 lg:mb-0">
              <img
                src="ab.jpg" // Replace with your image URL
                alt="Who We Are"
                className="w-full lg:w-[400px] h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
              <p className="text-lg text-gray-600">
                Welcome to <span className="font-semibold text-blue-600">Edu2Medu</span>, a dedicated search engine website designed to provide reliable and comprehensive information in the education and healthcare sectors.
              </p>
            </div>
          </div>
      
          {/* Mission and Vision Section */}
          <div className="grid grid-cols-1 lg:mt-20 sm:grid-cols-2 gap-6">
            {/* Mission Box */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
              <p className="text-lg text-gray-600">
                Our mission is to empower individuals by offering easy access to educational resources and healthcare information, ensuring informed decisions for a better future.
              </p>
            </div>
      
            {/* Vision Box */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                We envision a future where everyone has easy access to the information they need to make better choices for their education and health, driving positive societal change.
              </p>
            </div>
          </div>
      
        </div>
      </div>
    );
  };
  
  export default About;
  