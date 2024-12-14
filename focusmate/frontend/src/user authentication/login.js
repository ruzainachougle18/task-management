import React, { useState } from "react";
import axios from "../axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa"; 
import { MdOutlineLogin } from "react-icons/md"; 
import { AiOutlineGoogle } from "react-icons/ai"; 
import BackgroundImage from "../assests/images/about-mission.jpg";
import Logo from "../../src/assests/images/logo.png"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });
      alert("Login Successful");
      console.log(response.data);

      if (rememberMe) {
        localStorage.setItem("token", response.data.token);
      } else {
        sessionStorage.setItem("token", response.data.token);
      }

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="FocusMate Logo" className="w-24 h-auto" />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to FocusMate
          </h2>
          <p className="text-sm text-gray-600">
            Boost your productivity. Log in to start managing tasks!
          </p>
        </div>

        {/* Google Login */}
        <button
          className="w-full flex items-center justify-center py-2 mb-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          <AiOutlineGoogle className="mr-2 text-lg" />
          Continue with Google
        </button>

        <div className="flex items-center justify-center mb-4">
          <div className="h-px bg-gray-300 w-1/3"></div>
          <p className="mx-2 text-gray-600">or</p>
          <div className="h-px bg-gray-300 w-1/3"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-transform transform hover:scale-105 flex items-center justify-center"
          >
            <MdOutlineLogin className="mr-2 text-lg" />
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <span className="text-indigo-500 hover:underline">
            <Link to="/register">Register here</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
