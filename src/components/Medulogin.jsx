import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Medulogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState("healthcare"); // ✅ Default set to 'healthcare'
  const navigate = useNavigate();

  const handleRegisterNavigate = () => {
    navigate(loginType === "healthcare" ? "/registermedical" : "/register");
  };

  const handleForgotPasswordNavigate = () => {
    navigate(
      loginType === "healthcare"
        ? "/forgot-password-medical"
        : "/forgot-password"
    );
  };

  const handleAdminNavigate = () => {
    navigate("/admin-login"); // ✅ Admin ke liye navigate route
  };

  return (
    <div
      className="relative lg:mt-33 mt-25 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/login.jpg)" }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 p-8 sm:p-10 rounded-lg shadow-2xl z-10 w-full max-w-md sm:max-w-lg md:max-w-xl mb-[-20px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      >
        <h2 className="text-xl font-serif mb-4 text-center text-[#17A2B8]">
          Login
        </h2>{" "}
        {/* ✅ Default color for Healthcare */}
        {/* Category Selection */}
        <div className="flex justify-center mb-4">
          <motion.button
            onClick={() => {
              setLoginType("education");
              navigate("/login");
            }}
            className={`px-6 py-2 rounded-l-md font-serif text-sm ${
              loginType === "education"
                ? "bg-[#E76F51] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </motion.button>

          <motion.button
            onClick={() => setLoginType("healthcare")}
            className={`px-6 py-2 rounded-r-md font-serif text-sm ${
              loginType === "healthcare"
                ? "bg-[#17A2B8] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Healthcare
          </motion.button>
        </div>
        {/* ✅ Admin Login Button */}
        <div className="flex justify-center mb-6">
          <motion.button
            onClick={handleAdminNavigate}
            className="px-6 py-2 rounded-md font-serif text-sm bg-gray-600 text-white hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Admin
          </motion.button>
        </div>
        <form>
          <div className="mb-4 mt-2">
            <label
              htmlFor="email"
              className="block py-2 text-gray-700 text-xs font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4 mt-2">
            <label
              htmlFor="password"
              className="block py-2 text-gray-700 text-xs font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full mt-6 mx-auto px-20 py-3 text-white text-xs font-serif rounded-md bg-[#17A2B8] hover:bg-[#548890]" // ✅ Default color for Healthcare
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
        <div className="mt-3 text-center">
          <p className="text-xs">
            <motion.button
              onClick={handleForgotPasswordNavigate}
              className="text-[#17A2B8] font-medium hover:underline" // ✅ Default color for Healthcare
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Forgot Password?
            </motion.button>
          </p>
        </div>
        <div className="mt-3 text-center">
          <p className="text-xs font-medium text-gray-600">
            Don't have an account?{" "}
            <motion.button
              onClick={handleRegisterNavigate}
              className="text-[#17A2B8] font-medium hover:underline" // ✅ Default color for Healthcare
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Medulogin;
