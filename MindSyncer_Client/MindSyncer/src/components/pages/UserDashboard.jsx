import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FiLogOut, FiMail, FiUser, FiBriefcase, FiCode, FiFolder, FiAward, FiGithub,
} from "react-icons/fi";

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

      axios.get(`${apiUrl}/${userId}`)
        .then((res) => {
          setUserData(res.data);
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
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex overflow-hidden rounded-3xl">
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
              <h2 className="font-bold text-lg">{userData.fullName || "User"}</h2>
              <p className="text-sm text-gray-300">{userData.emailAddress}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-4 text-lg">
            <p className="font-semibold text-white">Dashboard</p>
            <p className="text-gray-400">Your Info</p>
            <div>
              <Link
                to="/Explore"
                className="text-gray-400"
              >
                Explore
              </Link>
            </div>
            {/* <p className="text-gray-400">Add Post</p> */}
            <p className="text-gray-400">Edit Profile</p>
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
      <div className="flex-1 px-10 py-8 overflow-y-auto bg-gradient-to-br from-white via-blue-50 to-blue-100">
        {/* Heading removed as requested */}

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl flex items-start space-x-5 transition-all duration-300 overflow-hidden"
    >
      <div className="text-3xl text-indigo-600 bg-indigo-100 p-3 rounded-full shadow-sm">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm text-gray-500 truncate">{label}</p>
        <p className="font-semibold break-words whitespace-normal text-base max-w-xs">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-5 border-b border-gray-300 pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}

