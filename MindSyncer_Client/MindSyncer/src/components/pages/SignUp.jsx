import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signupImage from "../../assets/SignUp.png";

import { FiUser, FiMail, FiLock, FiBriefcase, FiCode } from "react-icons/fi";

export default function AuthPage() {
  const apiUrl = import.meta.env.VITE_API_URL; // example: http://localhost:8000/api/v1
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    skills: "",
    profileImage: "",
    journey: "",
    education: "",
    achievements: "",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        const res = await axios.post(`${apiUrl}/users/login`, {
          emailAddress: formData.email,
          password: formData.password,
        });

        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        // Registration
        const payload = {
          fullName: formData.name,
          emailAddress: formData.email,
          password: formData.password,
          role: formData.role,
          skills: formData.skills.split(",").map((s) => s.trim()),
          profileImage: formData.profileImage,
          journey: formData.journey,
          education: formData.education.split(",").map((e) => e.trim()),
          achievements: formData.achievements.split(",").map((a) => a.trim()),
          socials: {
            github: formData.github,
            linkedin: formData.linkedin,
            twitter: formData.twitter,
            instagram: formData.instagram,
            website: formData.website,
          },
        };

        await axios.post(`${apiUrl}/users/register`, payload, {
          withCredentials: true,
        });

        alert("Registration successful!");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-neutral-gray to-black flex items-center justify-center p-2">
      <div className="shadow-2xl rounded-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">

        {/* Left Side */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-b from-neutral-900 to-neutral-700 p-8 text-white">
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

        {/* Right Side */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-6 space-y-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-r-xl shadow-2xl text-white overflow-y-auto max-h-screen"
        >
          <h2 className="text-2xl font-bold text-center text-white drop-shadow">
            {isLogin ? "Login" : "Register Now"}
          </h2>

          {!isLogin && (
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full p-3 bg-gray-600 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-3 bg-gray-600 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {!isLogin && (
            <>
              <div className="relative">
                <FiBriefcase className="absolute left-3 top-3 text-gray-400" />
                <select
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-600 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Your Role</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="AI Engineer">AI Engineer</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="UI Designer">UI Designer</option>
                  <option value="Data Scientist">Data Scientist</option>
                </select>
              </div>

              <div className="relative">
                <FiCode className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="skills"
                  required
                  placeholder="e.g., React, Node.js"
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-600 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="text-sm text-gray-400 mt-1 ml-1">
                  💡 Separate skills with commas
                </div>
              </div>

              <input
                type="text"
                name="profileImage"
                placeholder="Profile Image URL"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="journey"
                placeholder="Tell us about your journey..."
                onChange={handleChange}
                rows={3}
                className="w-full p-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="education"
                placeholder="Education (comma separated)"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="achievements"
                placeholder="Achievements (comma separated)"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="github"
                placeholder="GitHub URL"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn URL"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="twitter"
                placeholder="Twitter URL"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="instagram"
                placeholder="Instagram URL"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="website"
                placeholder="Personal Website URL"
                onChange={handleChange}
                className="w-full p-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-white/20 text-white font-semibold py-3 rounded-lg transition hover:bg-white/30 hover:text-black ${
              loading ? "bg-gray-700 cursor-not-allowed" : "bg-black hover:bg-gray-900 hover:scale-105"
            }`}
          >
            {loading ? (isLogin ? "Logging in..." : "Registering...") : (isLogin ? "Login" : "Create Account")}
          </button>

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
