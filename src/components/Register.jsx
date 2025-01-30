import { motion } from 'framer-motion';

export default function Register() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="space-y-1 mt-20 lg:py-30 lg:w-1/2">
          <h1 className="text-4xl flex lg:px-20 md:text-3xl lg:text-5xl font-bold tracking-tight">
            ACHIEVE ENROLLMENT
          </h1>
          <h2 className="text-4xl flex lg:px-20 lg:mt-8 md:text-4xl lg:text-4xl font-bold tracking-tight">
            OBJECTIVES WITH <img src="logo2.jpg" alt="" className="w-auto h-12" />
          </h2>
          <p className="text-lg lg:px-23 lg:mt-20 text-gray-600 max-w-2xl">
            Streamlining the school admission process to enhance accessibility, attract a diverse student body, and optimize resource usage, all while maintaining a strong focus on teaching and learning.
          </p>
        </div>

        <div className="relative lg:w-1/3 lg:mt-20">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-pink-400 opacity-30 blur-xl rounded-full"></div>
          <img
            src="student.jpg"
            alt="Educational items illustration"
            className="object-cover rounded-full shadow-2xl w-full h-auto border-4 border-transparent bg-clip-border hover:border-transparent hover:ring-8 hover:ring-offset-2 hover:ring-[#17a2b8] transform hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Motion Divider Line */}
      <motion.div
        className="my-12 mx-auto w-full border-t-4 border-black"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      ></motion.div>

      {/* Second Section */}
      <motion.div
        className="mt-24 grid lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="space-y-6 ">
          <h2 className="lg:text-4xl  text-4xl  lg:px-20  flex font-bold">
            List your school on <img src="logo2.jpg" alt="" className="w-auto h-10" />
          </h2>
          <ul className="space-y-4 lg:px-20 font-bold">
            {[
              "Unlock your key to reaching your enrollment objectives",
              "Build and manage your online presence",
              "Get considered by parents who visit Edu2medu",
              "Showcase your school features to get considered by parents",
              "Get access to analytics and qualified leads",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative  lg:mt-40 h-[500px]">
          <img
            src="bus.jpg"
            alt="Terms of service illustration"
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Third Section: Registration Form */}
     
  



    </div>
  );
}
