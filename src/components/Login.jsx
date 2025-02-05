import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('education'); // Added state for toggle
  const navigate = useNavigate();

  // Function to navigate to the appropriate register page based on login type
  const handleRegisterNavigate = () => {
    if (loginType === 'education') {
      navigate('/register'); // Education register page
    } else {
      navigate('/registermedical'); // Healthcare register page
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Toggle Buttons for Education and Healthcare */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setLoginType('education')}
            className={`px-4 py-2 rounded-l-md ${loginType === 'education' ? 'bg-[#E76F51] text-white' : 'bg-gray-200 text-gray-600'} transition duration-300`}
          >
            Education
          </button>
          <button
            onClick={() => setLoginType('healthcare')}
            className={`px-4 py-2 rounded-r-md ${loginType === 'healthcare' ? 'bg-[#17A2B8] text-white' : 'bg-gray-200 text-gray-600'} transition duration-300`}
          >
            Healthcare
          </button>
        </div>

        {/* Input Fields for Email and Password */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 text-white font-semibold rounded-md ${loginType === 'education' ? 'bg-[#E76F51] hover:bg-[#9f6b5e]' : 'bg-[#17A2B8] hover:bg-[#70aeb8]'} transition duration-300`}
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={handleRegisterNavigate} // Dynamically navigate based on login type
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
