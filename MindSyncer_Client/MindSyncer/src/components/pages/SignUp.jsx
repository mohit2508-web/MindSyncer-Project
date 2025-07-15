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
  const [isLogin, setIsLogin] = useState(true); // ⭐ toggle register/login

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
          const res = await axios.post(`${apiUrl}/users/login`, {
          emailAddress: formData.email,
          password: formData.password,
        });

        // ✅ Successful login ke baad
        localStorage.setItem("user", JSON.stringify(res.data.user));
          alert("Login successful!");

          // ✅ Redirect to dashboard
          navigate("/dashboard");
  
      } else {
        // Register request
        await axios.post(`${apiUrl}/users/register`, {
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
                <option value="AI Engineer">AI Engineer</option>
                <option value="Prompt Engineer">Prompt Engineer</option>
                <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Data Engineer">Data Engineer</option>
                <option value="Cloud Architect">Cloud Architect</option>
                <option value="Cloud Security Engineer">Cloud Security Engineer</option>
                <option value="Cybersecurity Specialist">Cybersecurity Specialist</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Site Reliability Engineer">Site Reliability Engineer</option>
                <option value="Blockchain Developer">Blockchain Developer</option>
                <option value="Web3 Developer">Web3 Developer</option>
                <option value="AR/VR Developer">AR/VR Developer</option>
                <option value="Metaverse Architect">Metaverse Architect</option>
                <option value="Quantum Computing Researcher">Quantum Computing Researcher</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Mobile App Developer">Mobile App Developer</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Game Developer">Game Developer</option>
                <option value="XR Developer">XR Developer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Technical Product Manager">Technical Product Manager</option>
                <option value="Growth Product Manager">Growth Product Manager</option>
                <option value="User Experience Designer">User Experience Designer</option>
                <option value="UX Researcher">UX Researcher</option>
                <option value="UI Designer">UI Designer</option>
                <option value="Interaction Designer">Interaction Designer</option>
                <option value="Motion Designer">Motion Designer</option>
                <option value="3D Artist">3D Artist</option>
                <option value="AI Product Designer">AI Product Designer</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Business Intelligence Analyst">Business Intelligence Analyst</option>
                <option value="Robotics Engineer">Robotics Engineer</option>
                <option value="Automation Engineer">Automation Engineer</option>
                <option value="Edge Computing Engineer">Edge Computing Engineer</option>
                <option value="IoT Developer">IoT Developer</option>
                <option value="Digital Twin Engineer">Digital Twin Engineer</option>
                <option value="Technical Writer">Technical Writer</option>
                <option value="Technical Evangelist">Technical Evangelist</option>
                <option value="Developer Advocate">Developer Advocate</option>
                <option value="Open Source Maintainer">Open Source Maintainer</option>
                <option value="Security Researcher">Security Researcher</option>
                <option value="Penetration Tester">Penetration Tester</option>
                <option value="Vulnerability Analyst">Vulnerability Analyst</option>
                <option value="Compliance Engineer">Compliance Engineer</option>
                <option value="MLOps Engineer">MLOps Engineer</option>
                <option value="AI Ethicist">AI Ethicist</option>
                <option value="AI Policy Specialist">AI Policy Specialist</option>
                <option value="Sustainability Engineer">Sustainability Engineer</option>
                <option value="Climate Data Analyst">Climate Data Analyst</option>
                <option value="Esports Manager">Esports Manager</option>
                <option value="Game Streamer">Game Streamer</option>
                <option value="Content Creator">Content Creator</option>
                <option value="Influencer Marketing Manager">Influencer Marketing Manager</option>
                <option value="Digital Marketing Strategist">Digital Marketing Strategist</option>
                <option value="Growth Hacker">Growth Hacker</option>
                <option value="SEO Specialist">SEO Specialist</option>
                <option value="Brand Strategist">Brand Strategist</option>
                <option value="No-Code Developer">No-Code Developer</option>
                <option value="Low-Code Developer">Low-Code Developer</option>
                <option value="Platform Engineer">Platform Engineer</option>
                <option value="Fintech Product Manager">Fintech Product Manager</option>
                <option value="Crypto Analyst">Crypto Analyst</option>
                <option value="NFT Strategist">NFT Strategist</option>
                <option value="Community Manager">Community Manager</option>
                <option value="Customer Success Manager">Customer Success Manager</option>
                <option value="Solutions Architect">Solutions Architect</option>
                <option value="Technical Program Manager">Technical Program Manager</option>
                <option value="Revenue Operations Specialist">Revenue Operations Specialist</option>
                <option value="AI Trainer">AI Trainer</option>
                <option value="AI Data Labeler">AI Data Labeler</option>
                <option value="Video Producer">Video Producer</option>
                <option value="Podcast Producer">Podcast Producer</option>
                <option value="Sound Designer">Sound Designer</option>
                <option value="VR Storyteller">VR Storyteller</option>
                <option value="Digital Illustrator">Digital Illustrator</option>
                <option value="Chief Technology Officer">Chief Technology Officer</option>
                <option value="Chief Product Officer">Chief Product Officer</option>
                <option value="Chief Marketing Officer">Chief Marketing Officer</option>
                <option value="Innovation Manager">Innovation Manager</option>
                <option value="Research Scientist">Research Scientist</option>
                <option value="Bioinformatics Engineer">Bioinformatics Engineer</option>
                <option value="Health Tech Specialist">Health Tech Specialist</option>
                <option value="Legal Tech Consultant">Legal Tech Consultant</option>
                <option value="Ethical Hacker">Ethical Hacker</option>
                <option value="SaaS Operations Engineer">SaaS Operations Engineer</option>
                <option value="Remote Work Specialist">Remote Work Specialist</option>
                <option value="Employee Experience Designer">Employee Experience Designer</option>
                <option value="AI Operations Manager">AI Operations Manager</option>
                <option value="Automation Strategist">Automation Strategist</option>

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
