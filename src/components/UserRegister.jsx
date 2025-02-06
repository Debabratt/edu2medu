import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const UserRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert('Registration Successful!');
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className="relative lg:mt-33 mt-25 min-h-[550px] bg-cover bg-center"
      style={{ backgroundImage: 'url(/login.jpg)' }}
    >
      <motion.div
        className="mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-50 p-8 sm:p-10 rounded-lg shadow-2xl z-10 w-full max-w-md sm:max-w-lg md:max-w-xl mb-[-20px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
      >
        <h2 className="text-xl font-serif mb-4 text-center text-[#fa7b5c]">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder='Enter your name '
              onChange={(e) => setName(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-[#E76F51]"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder='Enter your email '
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1 border rounded  text-xs focus:ring-1 focus:ring-[#E76F51]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-bold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
                  placeholder='Enter your password '
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-[#E76F51]"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-gray-700">Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              placeholder='Enter your number '
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-2 py-1 text-black border rounded text-xs focus:ring-1 focus:ring-[#E76F51]"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-xs font-bold text-gray-700">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-[#E76F51]"
              required
            >
              <option value="" className='bg-[#E76F51]'>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full py-1 text-white text-xs font-medium rounded ${loading ? 'bg-gray-400' : 'bg-[#E76F51] hover:bg-[#9f6b5e]'} transition duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Registering...' : 'Register'}
          </motion.button>
        </form>

        <p className="mt-2 text-xs font-serif text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#E76F51] font-serif hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default UserRegister;
