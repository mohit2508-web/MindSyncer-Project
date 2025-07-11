import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImage from "../../assets/SignUp.png";
import axios from "axios";

import {
  FiUser,
  FiMail,
  FiLock,
  FiBriefcase,
  FiCode,
} from "react-icons/fi";

export default function AuthPage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isLogin, setIsLogin] = useState(false); // ⭐ toggle register/login

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    skills: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login request
        await axios.post(`${apiUrl}/login`, {
          emailAddress: formData.email,
          password: formData.password,
        });
        alert("Login successful!");
        navigate("/"); // 👈 apni page ka route change kar lo
      } else {
        // Register request
        await axios.post(`${apiUrl}/register`, {
          fullName: formData.name,
          emailAddress: formData.email,
          password: formData.password,
          role: formData.role,
          skills: formData.skills,
        });
        alert("Registration successful!");
        setIsLogin(true); // Registration ke baad login pe switch
      }
    } catch (err) {
      alert(err.response?.data?.message || (isLogin ? "Login failed" : "Registration failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-neutral-gray to-black flex items-center justify-center p-2">
      <div className="shadow-2xl rounded-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">

        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-b from-neutral-900 to-neutral-700 p-8 text-white">
          <div>
            <h2 className="text-4xl font-bold mb-4">Welcome to MindSyncer</h2>
            <p className="text-lg">
              Find your ideal teammates for projects, hackathons & learning.
            </p>
            <img
              src={signupImage}
              alt="Study"
              className="mt-8 w-80"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 space-y-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-r-xl shadow-2xl text-white"
        >
          <h2 className="text-2xl font-bold text-center text-white drop-shadow">
            {isLogin ? "Login" : "Register Now"}
          </h2>

          {/* Name - only in Register */}
          {!isLogin && (
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 pl-12 border-gray-500 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full p-3 bg-gray-600 pl-12 border-gray-500 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-3 bg-gray-600 pl-12 border-gray-500 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role & Skills - only in Register */}
          {!isLogin && (
            <>
              <div className="relative">
                <FiBriefcase className="absolute left-3 top-3 text-gray-400" />
                <select
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-600 pl-12 border-gray-500 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Your Role</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Project Manager">Project Manager</option>
                </select>
              </div>

              <div className="relative group">
                <FiCode className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="skills"
                  required
                  placeholder="e.g., React, Node.js, Figma"
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-600 pl-12 border-gray-500 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="text-sm text-gray-400 mt-1 ml-1">
                  💡 Separate skills with commas
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-white/20 text-white font-semibold py-3 rounded-lg transition hover:bg-white/30 hover:text-black ${
              loading ? "bg-gray-700 cursor-not-allowed" : "bg-black hover:bg-gray-900 hover:scale-105"
            }`}
          >
            {loading ? (isLogin ? "Logging in..." : "Registering...") : (isLogin ? "Login" : "Create Account")}
          </button>

          {/* Toggle Button */}
          <div className="text-center text-gray-300">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span
              className="underline cursor-pointer text-blue-400"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
