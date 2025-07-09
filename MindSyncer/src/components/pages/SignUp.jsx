import { useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../../App";
import {
  FiUser,
  FiMail,
  FiLock,
  FiBriefcase,
  FiCode,
  FiGlobe,
  FiImage,
} from "react-icons/fi";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodeforces,
  SiHackerrank,
} from "react-icons/si";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    skills: "",
    leetcode: "",
    gfg: "",
    codeforces: "",
    hackerrank: "",
    portfolio: "",
    avatar: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch.post("/auth/register", {
        ...formData,
        skills: formData.skills.split(",").map((s) => s.trim()),
      });
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white-100 to-indigo flex items-center justify-center p-2">
      <div className="bg-white shadow-2xl rounded-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-gray-600 to-black-300 p-8 text-black-  items-center justify-center">
        
          <div>
            <h2 className="text-4xl font-bold mb-4">Welcome to MindSyncer</h2>
            <p className="text-lg">
              Find your ideal teammates for projects, hackathons & learning.
            </p>
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fregistration-page&psig=AOvVaw2jB1CICtk4YS8XVPpLPUvQ&ust=1752127003646000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMi1yvCLr44DFQAAAAAdAAAAABAL"
              alt="Study"
              className="mt-6 w-80"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-black-600">
            Register Now
          </h2>
        {/* Avatar */}
          <div className="relative">
            <FiImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="url"
              name="avatar"
              placeholder="Paste your avatar image URL"
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              required
              placeholder="Create Password"
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Role */}
          <div className="relative">
            <FiBriefcase className="absolute left-3 top-3 text-gray-400" />
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-400"
            >
              <option value="">Select Your Role</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Project Manager">Project Manager</option>
            </select>
          </div>

          {/* Skills */}
          <div className="relative group">
            <FiCode className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="skills"
              required
              placeholder="e.g., React, Node.js, Figma"
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-400"
            />
            <div className="text-sm text-gray-400 mt-1 ml-1">
              💡 Separate skills with commas
            </div>
          </div>

          
        

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ${
              loading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-black hover:bg-gray-900 hover:scale-105"
            }`}
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
