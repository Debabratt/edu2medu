const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are dedicated to providing the best services to our customers. Explore a variety of solutions tailored to meet your needs.
            </p>
          </div>

       
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-sm">123 Main Street, Cityville, Country</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@example.com</p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4">
          <p className="text-center text-sm text-gray-400">
            &copy; 2025 All Rights Reserved. Edu2Medu.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
