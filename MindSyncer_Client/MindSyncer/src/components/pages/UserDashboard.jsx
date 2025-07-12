import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FiLogOut, FiMail, FiUser, FiBriefcase, FiCode, FiFolder, FiAward, FiGithub } from "react-icons/fi";

export default function UserDashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      navigate("/SignUp");
      return;
    }

    try {
      const user = JSON.parse(userStr);
      const userId = user.id;

      axios
        .get(`${apiUrl}/${userId}`)
        .then((res) => {
          setUserData(res.data);
          console.log("Fetched user from backend:", res.data);
        })
        .catch((error) => {
          console.error("Failed to fetch user:", error);
          localStorage.removeItem("user");
          navigate("/SignUp");
        });
    } catch (error) {
      console.error("Failed to parse user:", error);
      localStorage.removeItem("user");
      navigate("/SignUp");
    }
  }, []);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col items-center justify-center p-6 text-white overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-3xl border border-white/30 rounded-3xl p-10 w-full max-w-5xl shadow-2xl"
      >
        <h1 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-md">
          🚀 Welcome, {userData.fullName || "User"}!
        </h1>

        {/* User Basic Details */}
        <Section title="Your Info">
          <DetailCard icon={<FiUser className="text-4xl text-blue-400" />} label="Full Name" value={userData.fullName || "N/A"} />
          <DetailCard icon={<FiMail className="text-4xl text-pink-400" />} label="Email" value={userData.emailAddress} />
          <DetailCard icon={<FiBriefcase className="text-4xl text-green-400" />} label="Role" value={userData.role || "N/A"} />
          <DetailCard
            icon={<FiCode className="text-4xl text-yellow-400" />}
            label="Skills"
            value={Array.isArray(userData.skills) ? userData.skills.join(", ") : userData.skills || "N/A"}
          />
        </Section>

        {/* Projects Section */}
        <Section title="Projects">
          <DetailCard icon={<FiFolder className="text-4xl text-purple-400" />} label="Project 1" value="E-commerce website" />
          <DetailCard icon={<FiFolder className="text-4xl text-purple-400" />} label="Project 2" value="Portfolio app" />
          <DetailCard icon={<FiFolder className="text-4xl text-purple-400" />} label="Project 3" value="AI chatbot" />
        </Section>

        {/* Coding Profiles Section */}
        <Section title="Coding Profiles">
          <DetailCard icon={<FiGithub className="text-4xl text-gray-300" />} label="GitHub" value="github.com/username" />
          <DetailCard icon={<FiCode className="text-4xl text-orange-400" />} label="LeetCode" value="leetcode.com/username" />
          <DetailCard icon={<FiCode className="text-4xl text-green-300" />} label="CodeChef" value="codechef.com/users/username" />
        </Section>

        {/* Achievements Section */}
        <Section title="Achievements">
          <DetailCard icon={<FiAward className="text-4xl text-yellow-400" />} label="Hackathon Winner" value="Won CodeFest 2024" />
          <DetailCard icon={<FiAward className="text-4xl text-yellow-400" />} label="Top Contributor" value="Open source projects" />
        </Section>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/SignUp");
          }}
          className="mt-10 w-full bg-gradient-to-r from-red-500 via-pink-600 to-red-700 hover:from-red-600 hover:via-pink-700 hover:to-red-800 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:scale-105"
        >
          <FiLogOut /> Logout
        </button>
      </motion.div>
    </div>
  );
}

function DetailCard({ icon, label, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex items-center space-x-4 border border-white/20 shadow-lg hover:scale-[1.03] hover:border-white/40 transition-all duration-300">
      {icon}
      <div>
        <p className="text-gray-300 text-sm">{label}</p>
        <p className="font-semibold break-words">{value}</p>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <>
      <h2 className="mt-12 mb-6 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </>
  );
}
