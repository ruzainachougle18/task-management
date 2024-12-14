import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCogs, FaDollarSign, FaEnvelope } from "react-icons/fa"; // Adding icons
import logo from "../../src/assests/images/logo.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full bg-gradient-to-r from-[#608BC1] to-[#133E87] h-[130px] shadow-lg flex justify-between items-center p-5 relative">
          {/* Logo and Title */}
          <Link to="/" className="flex justify-center items-center text-white">
            <img
              src={logo}
              className="w-20 h-20 md:w-28 md:h-28 mr-2"
              alt="logo"
            />
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide">FocusMate</h1>
          </Link>

          <div className="hidden md:flex justify-end lg:justify-around font-serif items-center gap-3 flex-wrap text-white text-lg">
            <Link to="/" className="flex items-center gap-2 hover:text-[#FFBB33] transition-all">
              <FaHome size={20} /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-[#FFBB33] transition-all">
              <FaInfoCircle size={20} /> About
            </Link>
            <Link to="/features" className="flex items-center gap-2 hover:text-[#FFBB33] transition-all">
              <FaCogs size={20} /> Features
            </Link>
            <Link to="/pricing" className="flex items-center gap-2 hover:text-[#FFBB33] transition-all">
              <FaDollarSign size={20} /> Pricing
            </Link>
            <Link to="/contactform" className="flex items-center gap-2 hover:text-[#FFBB33] transition-all">
              <FaEnvelope size={20} /> Contact Us
            </Link>
            <button onClick={toggleSidebar} className="bg-[#FFBB33] text-white py-2 px-4 rounded-full font-semibold transition-all hover:bg-[#e6951b]">
              Register
            </button>
          </div>

          {/* Hamburger Button for Mobile */}
          <div className="md:hidden flex items-center text-white text-3xl" onClick={toggleSidebar}>
            <span>&#9776;</span> {/* Hamburger icon */}
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-gray-300 mt-2"></div>
      </div>

      {/* Sidebar for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-20" onClick={toggleSidebar}>
          <div className="fixed right-0 top-0 w-[25%] h-full bg-white shadow-lg p-6 rounded-l-3xl z-50">
            <div className="flex justify-between items-center mb-4 text-black">
              <h2 className="text-xl font-bold">Login/Register</h2>
              <button onClick={toggleSidebar} className="text-3xl">&times;</button>
            </div>
            <div className="text-lg font-semibold mb-6 text-black italic">
              <h2>Join us and boost your productivity!</h2>
            </div>

            {/* Sidebar Menu Links */}
            <div className="flex flex-col space-y-4 mb-6">
              <Link to="/" className="text-black text-xl hover:text-[#FFBB33] flex items-center gap-2">
                <FaHome size={20} /> Home
              </Link>
              <Link to="/about" className="text-black text-xl hover:text-[#FFBB33] flex items-center gap-2">
                <FaInfoCircle size={20} /> About
              </Link>
              <Link to="/features" className="text-black text-xl hover:text-[#FFBB33] flex items-center gap-2">
                <FaCogs size={20} /> Features
              </Link>
              <Link to="/pricing" className="text-black text-xl hover:text-[#FFBB33] flex items-center gap-2">
                <FaDollarSign size={20} /> Pricing
              </Link>
              <Link to="/contactform" className="text-black text-xl hover:text-[#FFBB33] flex items-center gap-2">
                <FaEnvelope size={20} /> Contact Us
              </Link>
            </div>

            {/* Login/Register Button */}
            <div className="flex flex-col space-y-4">
              <Link
                to="/login"
                className="block px-6 py-3 text-white text-lg bg-gradient-to-r from-[#3498db] to-[#2c3e50] shadow-lg 
                rounded-lg text-center transition duration-300 hover:bg-blue-700"
              >
                Login/Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
