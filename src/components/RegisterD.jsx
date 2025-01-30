const RegisterD = () => {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-800 to-[#4f5758] relative">
        {/* Register Card */}
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col justify-between h-[80vh]">
          {/* Header - Fixed */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#17A2B8]">Register</h2>
            <p className="text-gray-200 mt-2">Create your account</p>
          </div>

          {/* Scrollable Input Fields */}
          <div className="overflow-y-auto flex-grow px-1 py-4 no-scrollbar">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 w-full  border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 w-full bg-transparent border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 w-full bg-transparent border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 w-full bg-transparent border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 w-full bg-transparent border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 w-full bg-transparent border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Address" 
                className="p-3 w-full bg-transparent border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 w-full bg-transparent border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="p-3 w-full bg-transparent border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="ZIP Code"
                className="p-3 w-full bg-transparent border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Footer - Fixed */}
          <div className="text-center">
            <button className="w-full bg-[#17a2b8] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Register
            </button>
            <p className="text-gray-300 mt-4">
              Already have an account?{" "}
              <a href="#" className="text-[#05e9f5] hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-300 mt-4">
          <p>&copy; {new Date().getFullYear()} Edu@Medu. All rights reserved.</p>
        </footer>
      </div>
    );
  };

  export default RegisterD;
