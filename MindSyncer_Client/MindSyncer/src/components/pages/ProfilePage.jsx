import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe,
} from "react-icons/fa";

export default function ProfilePage() {
  const { id } = useParams(); // 👈 Get user ID from URL
  const [user, setUser] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchUser = async () => {
      try {
       const res = await axios.get(`${apiUrl}/users/${id}`, {
        withCredentials: true,
       });
        // console.log(`${id}`);
        // console.log(res.data);     //debug found on 16 july at 23:37 2025
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <div className="text-center text-white mt-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col items-center overflow-x-hidden text-gray-300">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center py-20 relative"
      >
        <div className="relative w-48 h-48 rounded-full border-8 border-[#4F46E5] shadow-xl overflow-hidden">
          <img
            src={user.profileImage || "https://i.pravatar.cc/300"}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        <h2 className="mt-6 text-lg text-gray-400">Hello! I'm</h2>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {user.fullName || "Developer"}
        </h1>
      </motion.div>

      {/* Journey Section */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full px-6 py-12 bg-[#1e293b] rounded-2xl shadow-lg my-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-400">My Journey</h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
          {user.journey || "No journey information provided."}
        </p>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full px-6 py-12 bg-[#0f172a] rounded-2xl shadow-lg my-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-green-400">Education</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {user.education?.length > 0 ? (
            user.education.map((edu, index) => <li key={index}>{edu}</li>)
          ) : (
            <li>No education listed.</li>
          )}
        </ul>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full px-6 py-12 bg-[#1e293b] rounded-2xl shadow-lg my-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Achievements & Skills</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {user.achievements?.length > 0 ? (
            user.achievements.map((ach, index) => <li key={index}>{ach}</li>)
          ) : (
            <li>No achievements listed.</li>
          )}
        </ul>
        <div className="mt-6 flex justify-center flex-wrap gap-2">
          {user.skills?.length > 0 ? (
            user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))
          ) : (
            <span>No skills listed.</span>
          )}
        </div>
      </motion.section>

      {/* Social Links Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex space-x-6 py-10"
      >
        {user.socials?.github && (
          <a href={user.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-125">
            <FaGithub size={30} />
          </a>
        )}
        {user.socials?.linkedin && (
          <a href={user.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition transform hover:scale-125">
            <FaLinkedin size={30} />
          </a>
        )}
        {user.socials?.twitter && (
          <a href={user.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition transform hover:scale-125">
            <FaTwitter size={30} />
          </a>
        )}
        {user.socials?.instagram && (
          <a href={user.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition transform hover:scale-125">
            <FaInstagram size={30} />
          </a>
        )}
        {user.socials?.website && (
          <a href={user.socials.website} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white transition transform hover:scale-125">
            <FaGlobe size={30} />
          </a>
        )}
      </motion.section>
    </div>
  );
}
