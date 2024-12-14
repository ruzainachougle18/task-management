import React from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaUsers, FaChartLine, FaClock } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-[#EBEAFF] flex items-center justify-center overflow-x-hidden">
      <section className="text-black py-6 px-4 sm:px-6 lg:px-12 text-center bg-white w-full mx-auto mt-8 rounded-2xl mb-8 max-w-screen-xl">

        {/* Header Section */}
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 leading-tight tracking-tight">
            Welcome to FocusMate - Let's Get Things Done!
          </h1>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 tracking-wide">
            Your ultimate tool for boosting productivity
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-sans sm:mx-auto sm:max-w-4xl font-semibold pb-6 leading-relaxed">
            Your journey to productivity starts here. FocusMate is designed to help you stay organized, focused, and motivated. Whether you're working on personal projects or collaborating with teams, our app provides the tools you need to manage your tasks, set clear goals, and track your progress.
          </p>
        </div>

        {/* Get Started Button */}
        <Link
          to="/GetStarted"
          className="bg-[#2c3e50] hover:bg-[#0093af] text-white py-3 px-8 rounded-full font-semibold transition duration-300 mt-8 sm:mt-12 mb-8 inline-block"
        >
          Get Started
        </Link>

        {/* Key Benefits Section */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 tracking-wider">
            Key Benefits
          </h2>
          {/* Grid Layout for Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-[#a8c0ff] to-[#3f87a6] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <FaTasks size={40} className="text-white mb-2" />
              <p className="text-white text-center text-lg font-medium tracking-tight leading-snug hover:text-[#1a3a5d] transition duration-300">
                Stay organized with our task manager
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <FaUsers size={40} className="text-white mb-2" />
              <p className="text-white text-center text-lg font-medium tracking-tight leading-snug hover:text-[#1a3a5d] transition duration-300">
                Collaborate seamlessly with teams
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#ff9a8b] to-[#fecf87] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <FaChartLine size={40} className="text-white mb-2" />
              <p className="text-white text-center text-lg font-medium tracking-tight leading-snug hover:text-[#1a3a5d] transition duration-300">
                Track your productivity effectively
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#f6d365] to-[#fda085] p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <FaClock size={40} className="text-white mb-2" />
              <p className="text-white text-center text-lg font-medium tracking-tight leading-snug hover:text-[#1a3a5d] transition duration-300">
                Set reminders and never miss a task
              </p>
            </div>
          </div>
        </div>

        {/* Try FocusMate in Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-gray-800">Try FocusMate in Action</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">See how our features work by interacting with this demo.</p>
          <Link
            to="/demo"
            className="bg-[#2c3e50] text-white py-3 px-8 rounded-full font-semibold transition duration-300 hover:bg-[#0093af]"
          >
            Start Demo
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="w-full mt-16 mb-0 px-6 py-12 bg-gradient-to-b from-[#1a809d] to-[#a0e1d8] shadow-md">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white font-serif text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-101 hover:shadow-xl">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
                How does FocusMate help with productivity?
              </h3>
              <p className="text-gray-600 mt-2 text-lg">
                FocusMate offers a task management system, time tracking, and collaborative tools to help you stay organized and motivated.
              </p>
            </div>
            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-101 hover:shadow-xl">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
                Can I collaborate with my team?
              </h3>
              <p className="text-gray-600 mt-2 text-lg">
                Yes, FocusMate provides seamless team collaboration features, so you can share tasks, track progress, and work together effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
