import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import { FaUser, FaEnvelope, FaLock, FaRegCheckCircle } from "react-icons/fa";
import logo from "../../src/assests/images/logo.png";
import HomePageImage from "../assests/images/about-mission.jpg"; // Import background image

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "/api/register",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      setSuccessMessage("Registration successful! Please log in.");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      console.error(err);
    }
  };

  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${HomePageImage})`,
        backgroundPosition: "center 50%",
      }}
    >
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg shadow-cyan-100 w-[400px] space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="FocusMate Logo" className="w-24 h-auto" />
        </div>

        {/* Title and Subtitle */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Create Your Account
        </h1>
        <p className="text-sm text-center text-gray-600">
          Join <span className="font-semibold text-indigo-500">FocusMate</span> and start achieving your goals!
        </p>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative">
            <FaRegCheckCircle className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Error and Success Messages */}
          {error && (
            <p className="text-red-500 text-sm text-center border border-red-300 p-2 rounded-lg bg-red-50">
              {error}
            </p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm text-center border border-green-300 p-2 rounded-lg bg-green-50">
              {successMessage}
            </p>
          )}

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="w-full py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-transform transform hover:scale-105"
          >
            Register
          </button>
        </div>

        {/* Log In Link */}
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <span className="text-indigo-500 hover:underline">
            <Link to="/login">Log In</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
