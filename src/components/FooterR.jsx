import { Link } from "react-router-dom";

const FooterR = () => {
  return (
    <footer className="bg-gray-800 text-white py-4"> {/* Height Reduced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs"> {/* Small Text */}
         
          <div>
            <h3 className="text-sm font-semibold mb-2">About Us</h3>
            <p className="text-[10px] text-gray-400">
              We provide top services tailored to your needs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to={"/"} className="text-[10px] text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to={"/school"} className="text-[10px] text-gray-400 hover:text-white">School</Link></li>
              <li><Link to={"/hospitals"} className="text-[10px] text-gray-400 hover:text-white">HealthCare</Link></li>
              <li><Link to={"/news"} className="text-[10px] text-gray-400 hover:text-white">News</Link></li>
              <li><Link to={"/contact"} className="text-[10px] text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Contact Info</h3>
            <p className="text-[10px] text-gray-400">123 Main Street, Cityville</p>
            <p className="text-[10px] text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-[10px] text-gray-400">Email: info@example.com</p>
          </div>

          {/* Registration Section */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Registration</h3>
            <ul className="space-y-1">
              <li><Link to={"/register"} className="text-[10px] text-gray-400 hover:text-white">Register School</Link></li>
              <li><Link to={"/registermedical"} className="text-[10px] text-gray-400 hover:text-white">Register Hospitals</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-2">
          <p className="text-center text-[10px] text-gray-400">
            &copy; 2025 All Rights Reserved. 
            <Link to={"https://websyonline.com/"} target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">
              WebsyOnline
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterR;
