import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserRegisterM = () => {
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
    <div className="flex mt-35 items-center justify-center bg-gray-100 px-3 py-6">
      <div className="bg-white p-4 rounded-md shadow-md w-full max-w-xs h-auto min-h-[350px] flex flex-col justify-center">
        <h2 className="text-sm font-semibold mb-2 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label htmlFor="name" className="block text-xs text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs text-gray-700">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-xs text-gray-700">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-2 py-1 border rounded text-xs focus:ring-1 focus:ring-blue-400"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-1 text-white text-xs font-medium rounded ${loading ? 'bg-gray-400' : 'bg-[#17A2B8] hover:bg-[#17a3b8c9]'} transition duration-300`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className="mt-2 text-xs text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#17A2B8] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegisterM;
