import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FiLogOut, FiMail, FiUser, FiBriefcase, FiCode, FiFolder, FiAward, FiGithub,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function UserDashboard() {
  const [userData, setUserData] = useState(null);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [editForm, setEditForm] = useState({
    fullName: "",
    emailAddress: "",
    role: "",
    skills: "",
  });
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

          setEditForm({
            fullName: res.data.fullName,
            emailAddress: res.data.emailAddress,
            role: res.data.role,
            skills: Array.isArray(res.data.skills) ? res.data.skills.join(", ") : "",
          });
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

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      fullName: editForm.fullName,
      emailAddress: editForm.emailAddress,
      role: editForm.role,
      skills: editForm.skills ? editForm.skills.split(",").map((s) => s.trim()) : [],
    };

    try {
      // ✅ Yeh fix: id ki jagah _id
      const res = await axios.put(`${apiUrl}/${userData._id}`, updatedData);
      alert("Profile updated successfully!");

      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUserData(res.data.user);
      setActiveSection("dashboard");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile");
    }
  };

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

          <nav className="space-y-4 text-lg">
            <button onClick={() => setActiveSection("dashboard")} className="text-left w-full text-gray-300 hover:text-white">Dashboard</button>
            <button onClick={() => setActiveSection("connections")} className="text-left w-full text-gray-300 hover:text-white">Connections</button>
            <button onClick={() => navigate("/Explore")} className="text-left w-full text-gray-300 hover:text-white">Explore</button>
            <button onClick={() => setActiveSection("notifications")} className="text-left w-full text-gray-300 hover:text-white">Notification</button>
            <button onClick={() => setActiveSection("edit-profile")} className="text-left w-full text-gray-300 hover:text-white">Edit Profile</button>
            <button onClick={() => setActiveSection("settings")} className="text-left w-full text-gray-300 hover:text-white">Settings</button>
          </nav>
        </div>

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
        {activeSection === "dashboard" && (
          <>
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

            <Section title="Projects">
              <DetailCard icon={<FiFolder />} label="Project 1" value="E-commerce website" />
              <DetailCard icon={<FiFolder />} label="Project 2" value="Portfolio app" />
              <DetailCard icon={<FiFolder />} label="Project 3" value="AI chatbot" />
            </Section>

            <Section title="Coding Profiles">
              <DetailCard icon={<FiGithub />} label="GitHub" value="github.com/username" />
              <DetailCard icon={<FiCode />} label="LeetCode" value="leetcode.com/username" />
              <DetailCard icon={<FiCode />} label="CodeChef" value="codechef.com/users/username" />
            </Section>

            <Section title="Achievements">
              <DetailCard icon={<FiAward />} label="Hackathon Winner" value="Won CodeFest 2024" />
              <DetailCard icon={<FiAward />} label="Top Contributor" value="Open source projects" />
            </Section>
          </>
        )}

        {activeSection === "edit-profile" && (
          <Section title="Edit Your Profile">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleEditSubmit}>
              <div>
                <label className="block mb-1 text-gray-700">Full Name</label>
                <input
                  name="fullName"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={editForm.fullName}
                  onChange={handleEditChange}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Email</label>
                <input
                  name="emailAddress"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={editForm.emailAddress}
                  onChange={handleEditChange}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Role</label>
                <input
                  name="role"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={editForm.role}
                  onChange={handleEditChange}
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-1 text-gray-700">Skills</label>
                <input
                  name="skills"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={editForm.skills}
                  onChange={handleEditChange}
                  placeholder="Comma separated e.g. JavaScript, React"
                />
              </div>
              <button
                type="submit"
                className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
            </form>
          </Section>
        )}
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
