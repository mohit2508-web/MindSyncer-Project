import React from 'react';
import { motion } from 'framer-motion';
import kk from '../../assets/kk.png'
import mohit from '../../assets/mohit.png'

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <p>
            We are two enthusiastic B.Tech Computer Science students from <span className="font-semibold text-blue-900">GLA University, Mathura</span>, currently in our 3rd year. Our shared passion for technology and innovation led us to build <span className="font-semibold text-blue-900">MindSyncer</span> — a platform by developers, for developers.
          </p>
          <p>
            <span className="font-semibold">MindSyncer</span> is designed to:
          </p>
          <ul className="list-disc list-inside text-left sm:text-center text-gray-700">
            <li>Connect developers with shared interests</li>
            <li>Enable seamless collaboration on real-world projects</li>
            <li>Offer a space to showcase skills and growth</li>
          </ul>
          <p>
            We’ve built this entire platform together — from backend logic and APIs to the frontend UI and visual design — with one vision: to help developers bring ideas to life, together.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-12">
          {/* Mohit */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-blue-300 via-white to-blue-100 shadow-2xl transition-transform duration-500"
          >
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center h-full">
              <img
                src={mohit}
                alt="Mohit Jadon"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Mohit Jadon</h2>
              <p className="text-sm text-gray-600 mb-3">Creator</p>
              <p className="text-sm text-gray-700">
                I’m a 3rd-year CS student at GLA University. Together with KK, I’ve built MindSyncer from the ground up — from backend infrastructure and API design to frontend structure and performance optimization. I love solving problems and bringing logical architecture to life with seamless functionality.
              </p>
            </div>
          </motion.div>

          {/* KK */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-blue-300 via-white to-blue-100 shadow-2xl transition-transform duration-500"
          >
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center h-full">
              <img
                src={kk}
                alt="KK"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-1">KK</h2>
              <p className="text-sm text-gray-600 mb-3">Co-Creator</p>
              <p className="text-sm text-gray-700">
                I’m also a 3rd-year CS student at GLA University. Mohit and I collaborated on every piece of MindSyncer — combining functionality with modern UI/UX design. I focus on building clean, intuitive interfaces while also diving deep into backend logic and project structure. Every pixel and line of code reflects our joint effort.
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
            To empower students, developers, and creators by providing a platform that simplifies collaboration, encourages personal and professional growth, and brings innovative ideas to life — through teamwork and passion for code.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
