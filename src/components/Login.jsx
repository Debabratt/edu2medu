import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('education');
  const navigate = useNavigate();

  const handleRegisterNavigate = () => {
    if (loginType === 'education') {
      navigate('/register');
    } else {
      navigate('/registermedical');
    }
  };

  return (
    <div className="flex mt-35 items-center justify-center bg-gray-100 px-4 py-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm h-auto min-h-[350px] flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-3 text-center">Login</h2>

        {/* Toggle Buttons for Education and Healthcare */}
        <div className="flex justify-center mb-3">
          <button
            onClick={() => setLoginType('education')}
            className={`px-4 py-1 rounded-l-md text-sm ${loginType === 'education' ? 'bg-[#E76F51] text-white' : 'bg-gray-200 text-gray-600'} transition duration-300`}
          >
            Education
          </button>
          <button
            onClick={() => setLoginType('healthcare')}
            className={`px-4 py-1 rounded-r-md text-sm ${loginType === 'healthcare' ? 'bg-[#17A2B8] text-white' : 'bg-gray-200 text-gray-600'} transition duration-300`}
          >
            Healthcare
          </button>
        </div>

        {/* Input Fields for Email and Password */}
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="block text-gray-700 text-xs font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-1 border rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="block text-gray-700 text-xs font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-1 border rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full mx-auto px-20 py-2 text-white text-xs font-semibold rounded-md ${loginType === 'education' ? 'bg-[#E76F51] hover:bg-[#9f6b5e]' : 'bg-[#17A2B8] hover:bg-[#70aeb8]'} transition duration-300`}
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <div className="mt-2 text-center">
          <p className="text-xs text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={handleRegisterNavigate}
              className="text-[#E76F51] hover:underline"
            >
              Register Now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
