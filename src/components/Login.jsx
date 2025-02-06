import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('education');
  const navigate = useNavigate();

  const handleRegisterNavigate = () => {
    navigate(loginType === 'education' ? '/register' : '/registermedical');
  };

  const handleForgotPasswordNavigate = () => {
    navigate(loginType === 'education' ? '/forgot-password' : '/forgot-password-medical');
  };

  return (
    <div className="relative mt-10  min-h-[550px]">
     <motion.div
  className="mt-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-2xl z-10 w-full max-w-xs sm:max-w-sm md:max-w-md"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
>
        <h2 className="text-xl font-bold mb-3 text-center">Login</h2>

        <div className="flex justify-center mb-3">
          <motion.button
            onClick={() => setLoginType('education')}
            className={`px-4 py-1 rounded-l-md text-sm ${loginType === 'education' ? 'bg-[#E76F51] text-white' : 'bg-gray-200 text-gray-600'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </motion.button>
          <motion.button
            onClick={() => setLoginType('healthcare')}
            className={`px-4 py-1 rounded-r-md text-sm ${loginType === 'healthcare' ? 'bg-[#17A2B8] text-white' : 'bg-gray-200 text-gray-600'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Healthcare
          </motion.button>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="block text-gray-700 text-xs font-medium">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-1 border rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-400" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="block text-gray-700 text-xs font-medium">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-1 border rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-400" required />
          </div>

          <motion.button
            type="submit"
            className={`w-full mx-auto px-20 py-2 text-white text-xs font-semibold rounded-md ${loginType === 'education' ? 'bg-[#E76F51] hover:bg-[#9f6b5e]' : 'bg-[#17A2B8] hover:bg-[#70aeb8]'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
        <div className="mt-2 text-center">
          <p className="text-xs">
            <motion.button
              onClick={handleForgotPasswordNavigate}
              className={`${loginType === 'education' ? 'text-[#E76F51]' : 'text-[#17A2B8]'} hover:underline`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Forgot Password?
            </motion.button>
          </p>
        </div>

        <div className="mt-2 text-center">
          <p className="text-xs text-gray-600">
            Don't have an account?{' '}
            <motion.button
              onClick={handleRegisterNavigate}
              className="text-[#E76F51] hover:underline"
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
