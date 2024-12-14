import React, { useState } from "react";

// Sidebar Component
const Sidebar = ({ isOpen, onClose }) => {
  console.log('Sidebar is open:', isOpen); // Log to check if state is correct

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] md:w-[250px] bg-white shadow-lg z-50 transform 
          ${ isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-3xl text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Login/Signup</h2>
          {/* Login/Signup form */}
          <form>
            <div className="mb-4">
              <label className="block mb-1">Email:</label>
              <input
                type="email"
                className="w-full border p-2 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password:</label>
              <input
                type="password"
                className="w-full border p-2 rounded"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-[30%] bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

// Navbar Component
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log('Sidebar toggled:', !isSidebarOpen); // Debugging toggle action
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      {/* Hamburger Button (Mobile View) */}
      <button
        className="block md:hidden p-4 text-2xl text-gray-800"
        onClick={handleSidebarToggle}
      >
        {isSidebarOpen ? (
          <span className="text-3xl">✖</span> // Close icon
        ) : (
          <span className="text-3xl">☰</span> // Hamburger icon
        )}
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </div>
  );
};

export default Navbar;
