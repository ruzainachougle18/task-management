import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-200 to-blue-200 h-auto flex flex-col justify-center items-center text-center px-4 sm:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-700">
        Choose Your Plan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg w-full">
        {/* Basic Plan Card */}
        <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-6 sm:p-8 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Basic Plan
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">$0/month</p>
          <ul className="text-gray-600 mb-6 space-y-2 sm:space-y-3">
            <li>Task Management</li>
            <li>Basic Reporting</li>
            <li>Limited Integrations</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Choose Basic
          </button>
        </div>

        {/* Standard Plan Card */}
        <div className="bg-white shadow-xl p-6 sm:p-8 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl border-4 border-blue-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Standard Plan
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">$9.99/month</p>
          <ul className="text-gray-600 mb-6 space-y-2 sm:space-y-3">
            <li>All Basic Features</li>
            <li>Advanced Analytics</li>
            <li>Unlimited Integrations</li>
            <li>Email Support</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Choose Standard
          </button>
        </div>

        {/* Premium Plan Card */}
        <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-6 sm:p-8 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Premium Plan
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">$19.99/month</p>
          <ul className="text-gray-600 mb-6 space-y-2 sm:space-y-3">
            <li>All Standard Features</li>
            <li>Priority Support</li>
            <li>Customizable Dashboards</li>
            <li>Dedicated Account Manager</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Choose Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
