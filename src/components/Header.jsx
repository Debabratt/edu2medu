import { Phone,  Home, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Login Click
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="flex w-full relative">
        {/* Left Section - White Background */}
        <div className="bg-white w-[60%] flex items-center lg:px-20 px-10 py-3">
          <img src="logo2.jpg" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Right Section - Blue Background */}
        <div className="w-[40%] bg-[#17A2B8] flex justify-end items-center px-6 text-white relative before:absolute before:top-0 before:left-[-20px] before:w-12 before:h-full before:bg-white before:skew-x-[-30deg]">
          <div className="flex items-center gap-6 lg:px-10">
            <div className="hidden md:flex items-center gap-2 px-6">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-sm font-bold">+91 9811247700</span>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLoginClick}
              className="px-4 py-1.5 text-sm border border-white font-bold rounded hover:bg-white hover:text-blue-500 transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-[#1C1C1C] text-white lg:px-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <ul className="hidden lg:flex items-center gap-8">
              <li>
                <Link to="/" className="py-4 block">
                  <Home className="h-5 w-5" />
                </Link>
              </li>
              <li>
                <Link to="/board-school" className="py-4 block">
                  Boarding School
                </Link>
              </li>
              <li>
                <Link to="/day-school" className="py-4 block">
                  Day School
                </Link>
              </li>
              <li>
                <Link to="/pre-schools" className="py-4 block">
                  Pre Schools
                </Link>
              </li>
              <li className="ml-auto">
                <Link to="/register-school" className="py-4 block">
                  Register School
                </Link>
              </li>
              <li>
                <Link to="/blog" className="py-4 block">
                  Blog
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <ChevronDown className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden bg-[#17A2B8] ${menuOpen ? "py-6" : "hidden"}`}
          >
            <ul className="flex flex-col items-start text-white p-6 gap-6 text-lg">
              <li>
                <Link to="/" className="py-4 block">
                  <Home className="h-5 w-5" />
                </Link>
              </li>
              <li>
                <Link to="/board-school" className="py-2">
                  Boarding School
                </Link>
              </li>
              <li>
                <Link to="/day-school" className="py-2">
                  Day School
                </Link>
              </li>
              <li>
                <Link to="/pre-schools" className="py-2">
                  Pre Schools
                </Link>
              </li>
              <li>
                <Link to="/register-school" className="py-2">
                  Register School
                </Link>
              </li>
              <li>
                <Link to="/blog" className="py-2">
                  Blog
                </Link>
              </li>
              
            </ul>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
