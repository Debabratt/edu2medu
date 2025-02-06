const Jobs = () => {
    return (
      <div className="bg-gradient-to-r mt-32 from-white to-[#8dd3dc] py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-20">
          {/* Careers Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 px-4">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Careers</h1>
              <p className="text-lg text-gray-600">
                Join Our Growing Team at Edu2Medu
              </p>
              <p className="mt-4 font-serif text-lg text-gray-600">
                Are you passionate about education and healthcare? At Edu2Medu, we are committed to providing quality education and healthcare services. If you’re ready to make a meaningful impact and join our dynamic team, we would love to hear from you!
              </p>
            </div>
  
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <img
                src="ab.jpg"
                alt="Edu2Medu Careers"
                className="rounded-lg shadow-lg w-80 h-80 object-cover"
              />
            </div>
          </div>
  
          {/* Why Work With Edu2Medu Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Collaborative Environment</h3>
              <p className="text-lg text-gray-600">
                We foster a collaborative environment to deliver excellent education and healthcare services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Growth Opportunities</h3>
              <p className="text-lg text-gray-600">
                Develop your skills and advance your career in education and healthcare through mentorship and training.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Exciting Projects</h3>
              <p className="text-lg text-gray-600">
                Work on impactful projects that make a difference in the education and healthcare sectors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Flexible Work Culture</h3>
              <p className="text-lg text-gray-600">
                Enjoy a healthy work-life balance with our flexible work policies.
              </p>
            </div>
          </div>
  
          {/* Open Positions Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Open Positions</h2>
  
            {/* Grid Layout for Jobs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
              {/* Educational Coordinator */}
              <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                <h3 className="text-2xl font-serif text-gray-800 mb-4">Educational Coordinator</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Edu2Medu is looking for a passionate Educational Coordinator to join our team. You will help coordinate educational programs, assist students and teachers, and ensure that our educational initiatives are effectively implemented. This role offers the opportunity to shape the future of education.
                </p>
                <button className="bg-[#17A2B8] text-white px-6 py-2 rounded-md hover:bg-[#6ba0a9] w-full">Apply now</button>
              </div>
  
              {/* Healthcare Assistant */}
              <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                <h3 className="text-2xl font-serif text-gray-800 mb-4">Healthcare Assistant</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Edu2Medu is hiring a Healthcare Assistant to support our healthcare programs. You will assist in delivering care, maintain patient records, and support healthcare professionals in providing quality care to our students and staff. This role is perfect for those looking to make a difference in the healthcare space.
                </p>
                <button className="bg-[#17A2B8] text-white px-6 py-2 rounded-md hover:bg-[#6ba0a9] w-full">Apply now</button>
              </div>
  
              {/* Education and Wellness Intern */}
              <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                <h3 className="text-2xl font-serif text-gray-800 mb-4">Education and Wellness Intern</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Edu2Medu is seeking a talented intern to assist with both educational and wellness programs. This internship is perfect for those who are passionate about promoting both education and well-being in a community-focused setting.
                </p>
                <button className="bg-[#17A2B8] text-white px-6 py-2 rounded-md hover:bg-[#6ba0a9] w-full">Apply now</button>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Jobs;
  