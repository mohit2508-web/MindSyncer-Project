import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Profile() {
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
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        <h2 className="mt-6 text-lg text-gray-400">Hello! I'm a</h2>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Developer
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="mt-6 text-gray-400 flex items-center"
        >
          <span>Scroll down</span>
          <svg
            className="w-5 h-5 ml-2 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
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
        <p className="text-gray-300 leading-relaxed">
          From a curious student to a passionate developer, my journey has been fueled by curiosity and creativity. 
          I started learning basic web development in high school, moved to advanced frameworks in college, and eventually started building real-world projects for clients and open-source communities.
          <br /><br />
          I've contributed to over 20+ projects, mentored junior developers, and constantly strive to innovate and push boundaries in tech.
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
          <li>B.Tech in Computer Science — XYZ University</li>
          <li>Specialization in AI & Machine Learning</li>
          <li>Certified Frontend Specialist — Udemy & Coursera</li>
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
          <li>Google Developer Scholarship Winner 2023</li>
          <li>Top 5% at LeetCode and Codeforces</li>
          <li>Speaker at JSConf Asia 2024</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Node.js", "Next.js", "TailwindCSS", "Docker", "AWS", "TypeScript", "GraphQL"].map(skill => (
            <span
              key={skill}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform"
            >
              {skill}
            </span>
          ))}
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
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-125">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition transform hover:scale-125">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition transform hover:scale-125">
          <FaTwitter size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white transition transform hover:scale-125">
          <FaInstagram size={30} />
        </a>
        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white transition transform hover:scale-125">
          <FaGlobe size={30} />
        </a>
      </motion.section>

    </div>
  );
}
