
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex justify-center items-center bg-gray-100 py-8"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register at UWC Mahindra College
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="schoolName" className="block text-gray-700">
              School Name
            </label>
            <input
              type="text"
              id="schoolName"
              value="UWC Mahindra College"
              readOnly
              className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              value="Pune, Maharashtra"
              readOnly
              className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="tuitionFee" className="block text-gray-700">
              Annual Tuition Fee
            </label>
            <input
              type="text"
              id="tuitionFee"
              value="₹24,80,625 / annum"
              readOnly
              className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="rating" className="block text-gray-700">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              value="★★★☆☆ 3.7"
              readOnly
              className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="schoolType" className="block text-gray-700">
              School Type
            </label>
            <input
              type="text"
              id="schoolType"
              value="Boarding School"
              readOnly
              className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="board" className="block text-gray-700">
              Board
            </label>
            <input
              type="text"
              id="board"
              value="IB DP"
              readOnly
              className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-gray-700">
              Gender
            </label>
            <input
              type="text"
              id="gender"
              value="Co-Ed"
              readOnly
              className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="classRange" className="block text-gray-700">
              Class Range
            </label>
            <input
              type="text"
              id="classRange"
              value="Class 11 - 12"
              readOnly
              className="mt-2 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Register;
