import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EduRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8002/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, phone, category }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Registration Successful!');
      } else {
        setMessage(data.message || 'Registration Failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative lg:mt-33 mt-25 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/login.jpg)' }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 p-8 sm:p-10 rounded-lg shadow-xl z-10 w-full max-w-md sm:max-w-lg md:max-w-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
      >
        <h2 className="text-xl font-serif mb-4 text-center text-[#fa7b5c]">Register</h2>

        {message && (
          <p className={`text-center text-xs font-medium mb-3 ${message.includes('Success') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label htmlFor="name" className="block py-2 text-xs font-bold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-[#E76F51]"
              required
            />
          </div>
          <div className="mt-2">
            <label htmlFor="phone" className="block py-2 text-xs font-bold text-gray-700">Mobile number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              placeholder="Enter your mobile number"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-2 py-1 text-black border rounded text-xs focus:ring-1 focus:ring-[#E76F51]"
              required
            />
          </div>
          <div className="mt-2">
            <label htmlFor="email" className="block py-2 text-xs font-bold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-[#E76F51]"
              required
            />
          </div>

          <div className="mt-2">
            <label htmlFor="password" className="block py-2 text-xs font-bold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-[#E76F51]"
              required
            />
          </div>

          <div className="mt-2">
            <label htmlFor="category" className="block py-2 text-xs font-bold text-gray-700">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-[#E76F51] text-gray-700"
              required
            >
              <option value="" disabled hidden>Select Category</option>
              <option value="Day School">Day School</option>
              <option value="Play School">Play School</option>
              <option value="Boarding School">Boarding School</option>
              <option value="Coaching Centre">Coaching Centre</option>
              <option value="Private Tutor">Private Tutor</option>
            </select>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full py-1 mt-10 text-white text-xs font-medium rounded ${
              loading ? 'bg-gray-400' : 'bg-[#E76F51] hover:bg-[#9f6b5e]'
            } transition duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Registering...' : 'Register'}
          </motion.button>
        </form>

        <p className="mt-2 text-xs font-medium text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#E76F51] font-medium hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default EduRegister;
