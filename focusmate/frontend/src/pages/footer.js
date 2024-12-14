import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0e3054] text-white py-8 mt-0">
      <div className="container mx-auto text-center">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center mb-6 space-x-4">
          <a
            href="/about"
            className="text-lg hover:text-[#98FB98] transition duration-300 relative group mb-4 sm:mb-0"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/contact-us"
            className="text-lg hover:text-[#98FB98] transition duration-300 relative group mb-4 sm:mb-0"
          >
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/privacy-policy"
            className="text-lg hover:text-[#98FB98] transition duration-300 relative group mb-4 sm:mb-0"
          >
            Privacy Policy
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/terms-and-conditions"
            className="text-lg hover:text-[#98FB98] transition duration-300 relative group mb-4 sm:mb-0"
          >
            Terms & Conditions
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6 flex-wrap justify-center">
          <a
            href="https://twitter.com"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-400 hover:text-black text-bold font-serif transition duration-300 flex items-center space-x-2 mb-4 sm:mb-0"
          >
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
          <a
            href="https://facebook.com"
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500 hover:text-black text-bold font-serif transition duration-300 flex items-center space-x-2 mb-4 sm:mb-0"
          >
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>
          <a
            href="https://instagram.com"
            className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-400 hover:text-black text-bold font-serif transition duration-300 flex items-center space-x-2 mb-4 sm:mb-0"
          >
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
          <a
            href="https://linkedin.com"
            className="bg-blue-700 text-white py-2 px-6 rounded-full hover:bg-blue-600 hover:text-black text-bold font-serif transition duration-300 flex items-center space-x-2 mb-4 sm:mb-0"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Made by Credits */}
        <p className="text-sm text-gray-300 mt-2">
          Made with ❤️ by <a href="https://github.com/ruzainachougle18" className="text-blue-300 hover:underline">Ruzaina Chougle</a>.
        </p>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FocusMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
