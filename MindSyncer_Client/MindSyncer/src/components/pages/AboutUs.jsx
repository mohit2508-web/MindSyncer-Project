import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 sm:px-12 lg:px-24 py-16 overflow-hidden relative">
      {/* Decorative blur shapes */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-10 text-gray-900"
        >
          About Us
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-center max-w-3xl mx-auto mb-12"
        >
          At <span className="font-semibold text-[#0F172A]">MindSyncer</span>, 
          we connect developers by providing a collaborative platform where they can discuss ideas, track project progress, and communicate effectively.
          We make teamwork easy and help turn great ideas into reality.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-12">
          {/* Founder 1 */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-blue-300 via-white to-blue-100 shadow-2xl transition-transform duration-500"
          >
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center h-full">
              <img
                src="https://i.pravatar.cc/150?img=31"
                alt="Founder 1"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Mohit Jadon</h2>
              <p className="text-sm text-gray-600 mb-3">Backend & API Developer</p>
              <p className="text-sm text-gray-700">
                I handle the logic behind the scenes — databases, APIs, and functionality. Together, we make ideas a working reality.
              </p>
            </div>
          </motion.div>

          {/* Founder 2 */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-blue-300 via-white to-blue-100 shadow-2xl transition-transform duration-500"
          >
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center h-full">
              <img
                src="https://i.pravatar.cc/150?img=33"
                alt="Founder 2"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-1">KK</h2>
              <p className="text-sm text-gray-600 mb-3">Frontend Developer & Designer</p>
              <p className="text-sm text-gray-700">
                I focus on crafting beautiful UIs, functionality, responsiveness, and smooth user experiences. My role at MindSyncer involves bringing our vision to life in the browser.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Mission</h3>
          <p className="text-md text-gray-700 max-w-3xl mx-auto">
            We aim to empower developers, businesses, and creators by building tools, apps, and platforms that are intuitive, efficient, and future-ready.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
