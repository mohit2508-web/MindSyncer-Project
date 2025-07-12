import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FiLogOut, FiMail, FiUser, FiBriefcase, FiCode } from "react-icons/fi";

export default function UserDashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL; // ✅ Make sure to set in .env

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      navigate("/SignUp");
      return;
    }

    try {
      const user = JSON.parse(userStr);
      const userId = user.id;

      // ✅ Call backend to get fresh user data
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
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex flex-col items-center justify-center p-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 w-full max-w-3xl shadow-2xl"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
          🎉 Welcome, {userData.fullName || "User"}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4 border border-white/20 shadow-inner hover:scale-105 transition">
            <FiUser className="text-3xl text-blue-400" />
            <div>
              <p className="text-gray-300 text-sm">Full Name</p>
              <p className="font-semibold">{userData.fullName || "N/A"}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4 border border-white/20 shadow-inner hover:scale-105 transition">
            <FiMail className="text-3xl text-pink-400" />
            <div>
              <p className="text-gray-300 text-sm">Email</p>
              <p className="font-semibold">{userData.emailAddress}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4 border border-white/20 shadow-inner hover:scale-105 transition">
            <FiBriefcase className="text-3xl text-green-400" />
            <div>
              <p className="text-gray-300 text-sm">Role</p>
              <p className="font-semibold">{userData.role || "N/A"}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4 border border-white/20 shadow-inner hover:scale-105 transition">
            <FiCode className="text-3xl text-yellow-400" />
            <div>
              <p className="text-gray-300 text-sm">Skills</p>
              <p className="font-semibold">{Array.isArray(userData.skills) ? userData.skills.join(", ") : userData.skills || "N/A"}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/SignUp");
          }}
          className="mt-10 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg"
        >
          <FiLogOut /> Logout
        </button>
      </motion.div>
    </div>
  );
}
