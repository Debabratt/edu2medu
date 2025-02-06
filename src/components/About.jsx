"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-white to-[#c4ecf6] py-16 mt-32"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-30">
        
        {/* Who We Are Section */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 0.8 } }
          }}
          className="flex flex-col lg:flex-row items-center mb-12 gap-6 lg:gap-12"
        >
          
          {/* Text Section */}
          <motion.div className="lg:w-1/2 text-center lg:text-left">
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl font-serif font-bold text-gray-800 mb-4"
            >
              Who We Are
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Welcome to <span className="font-semibold text-[#17A2B8]">Edu2Medu</span>, a dedicated 
              search engine platform designed to provide <strong>reliable, accurate, and 
              comprehensive</strong> information in the education and healthcare sectors.
            </motion.p>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-gray-600 mt-4 leading-relaxed"
            >
              At <span className="font-semibold text-[#17A2B8]">Edu2Medu</span>, we believe that <strong>knowledge is the key</strong> to making 
              informed decisions—whether it’s choosing the right educational institution, 
              finding healthcare services, or staying updated with the latest industry trends. 
              Our platform simplifies the search process, ensuring users can access <strong>credible</strong> 
              and <strong>up-to-date</strong> information effortlessly.
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            whileHover={{ rotate: [0, -3, 3, -3, 3, 0], transition: { duration: 0.5 } }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-t from-[#17A2B8] to-[#048599] opacity-30 blur-3xl rounded-full"
            ></motion.div>
            <motion.img
              src="student.jpg"
              alt="Educational items illustration"
              className="object-cover rounded-full shadow-2xl w-[350px] h-[350px] border-4 border-transparent bg-clip-border hover:border-transparent hover:ring-8 hover:ring-offset-2 hover:ring-[#17a2b8] transform transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

        </motion.div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mb-30 lg:mt-20">
          
          {/* Mission Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(23, 162, 184, 0.2)" }}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Mission
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Our mission is to <strong>empower individuals</strong> by offering easy access to 
              educational resources and healthcare information, ensuring informed decisions for 
              a better future.
            </motion.p>
          </motion.div>

          {/* Vision Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(23, 162, 184, 0.2)" }}
            className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Our Vision
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We envision a future where everyone has easy access to trusted information, enabling 
              them to make better choices for their education and health, ultimately driving 
              positive societal change.
            </motion.p>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
};

export default About;
