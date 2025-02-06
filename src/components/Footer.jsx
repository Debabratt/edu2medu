import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are dedicated to providing the best services to our customers. Explore a variety of solutions tailored to meet your needs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to={"/"} className="text-sm text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to={"/school"} className="text-sm text-gray-400 hover:text-white">School</Link></li>
              <li><Link to={"/hospitals"} className="text-sm text-gray-400 hover:text-white">HealthCare</Link></li>
              <li><Link to={"/news"} className="text-sm text-gray-400 hover:text-white">News</Link></li>
              <li><Link to={"/contact"} className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm">123 Main Street, Cityville, Country</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@edu2medu.com</p>
          </div>

          {/* New Registration Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Registration</h3>
            <ul>
              <li><Link to={"/register"} className="text-sm text-gray-400 hover:text-white">Register School</Link></li>
              <li><Link to={"/registermedical"} className="text-sm text-gray-400 hover:text-white">Register Hospitals</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4">
          <p className="text-center text-sm text-gray-400">
            &copy; 2025 All Rights Reserved. 
            <Link to={"https://websyonline.com/"} target="_blank" rel="noopener noreferrer" className=" hover:underline ml-1">
              WebsyOnline
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
