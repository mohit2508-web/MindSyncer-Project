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
  }, [apiUrl, navigate]);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white">
        Loading your dashboard...
      </div>
    );
  }

    return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col justify-between p-6">
        <div>
          {/* Profile */}
          <div className="flex items-center mb-8">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="User Avatar"
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <h2 className="font-semibold text-lg">{userData.fullName || "User"}</h2>
              <p className="text-sm text-gray-300">{userData.emailAddress}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-4 text-sm">
            <p className="font-semibold text-white">Dashboard</p>
            <p className="text-gray-400">Expenses</p>
            <p className="text-gray-400">Wallets</p>
            <p className="text-gray-400">Summary</p>
            <p className="text-gray-400">Accounts</p>
            <p className="text-gray-400">Settings</p>
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/SignUp");
          }}
          className="mt-8 w-full bg-gradient-to-r from-red-500 to-pink-500 hover:brightness-110 text-white py-2 rounded-lg flex items-center justify-center gap-2"
        >
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome, {userData.fullName || "User"}!</h1>

        {/* User Info */}
        <Section title="Your Info">
          <DetailCard icon={<FiUser />} label="Full Name" value={userData.fullName || "N/A"} />
          <DetailCard icon={<FiMail />} label="Email" value={userData.emailAddress || "N/A"} />
          <DetailCard icon={<FiBriefcase />} label="Role" value={userData.role || "N/A"} />
          <DetailCard
            icon={<FiCode />}
            label="Skills"
            value={Array.isArray(userData.skills) ? userData.skills.join(", ") : userData.skills || "N/A"}
          />
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <DetailCard icon={<FiFolder />} label="Project 1" value="E-commerce website" />
          <DetailCard icon={<FiFolder />} label="Project 2" value="Portfolio app" />
          <DetailCard icon={<FiFolder />} label="Project 3" value="AI chatbot" />
        </Section>

        {/* Coding Profiles */}
        <Section title="Coding Profiles">
          <DetailCard icon={<FiGithub />} label="GitHub" value="github.com/username" />
          <DetailCard icon={<FiCode />} label="LeetCode" value="leetcode.com/username" />
          <DetailCard icon={<FiCode />} label="CodeChef" value="codechef.com/users/username" />
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          <DetailCard icon={<FiAward />} label="Hackathon Winner" value="Won CodeFest 2024" />
          <DetailCard icon={<FiAward />} label="Top Contributor" value="Open source projects" />
        </Section>
      </div>
    </div>
  );
}

function DetailCard({ icon, label, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4 border">
      <div className="text-xl text-blue-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
    </div>
  );
}