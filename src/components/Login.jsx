import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios"; // ✅ Import axios for API calls

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState("education");
  const [error, setError] = useState(null); // ✅ Handle errors
  const [loading, setLoading] = useState(false); // ✅ Handle loading state
  const navigate = useNavigate();

  const handleRegisterNavigate = () => {
    navigate(loginType === "education" ? "/register" : "/registermedical");
  };

  const handleForgotPasswordNavigate = () => {
    navigate(
      loginType === "education" ? "/forgot-password" : "/forgot-password-medical"
    );
  };

  const handleAdminNavigate = () => {
    navigate("/admin-login");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data } = await axios.post("http://localhost:8002/user/login", {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user)); // ✅ Save user data
        navigate("/dashboard"); // ✅ Redirect after successful login
      } else {
        setError(data.message); // Show error message
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
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
        <h2 className="text-xl font-serif mb-4 text-center text-[#E76F51]">
          Login
        </h2>

        {/* Category Selection */}
        <div className="flex justify-center mb-4">
          <motion.button
            onClick={() => setLoginType("education")}
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
            onClick={() => {
              setLoginType("healthcare");
              navigate("/healthcarelogin");
            }}
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

        {/* Admin Login Button */}
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

        {error && <p className="text-red-500 text-xs text-center">{error}</p>} {/* ✅ Show error message */}

        <form onSubmit={handleLogin}>
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
            className={`w-full mt-6 mx-auto px-20 py-3 text-white text-xs font-serif rounded-md ${
              loginType === "education"
                ? "bg-[#E76F51] hover:bg-[#9f6b5e]"
                : "bg-[#17A2B8] hover:bg-[#70aeb8]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading} // ✅ Disable button when loading
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <div className="mt-3 text-center">
          <p className="text-xs">
            <motion.button
              onClick={handleForgotPasswordNavigate}
              className={`${
                loginType === "education" ? "text-[#E76F51]" : "text-[#17A2B8]"
              } font-medium hover:underline`}
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
              className="text-[#E76F51] font-medium hover:underline"
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

export default Login;
